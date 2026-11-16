<script setup>
import { reactive, ref, nextTick, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from '../components/AppIcon.vue'
import { useContent } from '../i18n/useContent'

const { t, locale } = useI18n()
const { maash, recrutement } = useContent()

// Clé publique Web3Forms — renseignée dans .env (VITE_WEB3FORMS_KEY), jamais committée.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

const form = reactive({
  nom: '',
  tel: '',
  email: '',
  poste: '',
  diplome: '',
  experience: '',
  disponibilite: '',
  message: '',
  consent: false,
})

const honeypot = ref('')
const status = ref('idle') // idle | sending | success | error
const errorMsg = ref('')
const applicationSection = ref(null)
const nameInput = ref(null)
const fieldLimits = {
  nom: 120,
  tel: 32,
  email: 254,
  diplome: 200,
  experience: 500,
  disponibilite: 200,
  message: 3000,
}
let activeController = null
let unmounted = false

onUnmounted(() => {
  unmounted = true
  activeController?.abort()
})

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  if (!form.nom || !form.tel || !form.email || !form.poste) {
    return t('ui.recrutement.errRequired')
  }
  if (Object.entries(fieldLimits).some(([key, limit]) => form[key].length > limit)) {
    return t('ui.recrutement.errLength')
  }
  if (!recrutement.value.postes.some((poste) => poste.code === form.poste)) {
    return t('ui.recrutement.errRequired')
  }
  if (!emailRe.test(form.email)) return t('ui.recrutement.errEmail')
  if (form.tel.replace(/\D/g, '').length < 8) return t('ui.recrutement.errTel')
  if (!form.consent) return t('ui.recrutement.errConsent')
  return ''
}

function resetForm() {
  form.nom = ''
  form.tel = ''
  form.email = ''
  form.poste = ''
  form.diplome = ''
  form.experience = ''
  form.disponibilite = ''
  form.message = ''
  form.consent = false
}

async function choosePost(code) {
  if (unmounted || status.value === 'sending') return
  if (!recrutement.value.postes.some((poste) => poste.code === code)) return
  form.poste = code
  status.value = 'idle'
  errorMsg.value = ''
  await nextTick()
  if (unmounted) return
  nameInput.value?.focus({ preventScroll: true })
  applicationSection.value?.scrollIntoView({ block: 'start', behavior: 'instant' })
}

async function submit() {
  if (status.value === 'sending' || status.value === 'success' || unmounted) return
  errorMsg.value = ''
  const err = validate()
  if (err) {
    status.value = 'error'
    errorMsg.value = err
    return
  }
  // Ne jamais annoncer un succès sans confirmation du service d'envoi.
  // L'autoremplissage peut légitimement permettre une soumission très rapide.
  if (honeypot.value) {
    status.value = 'error'
    errorMsg.value = t('ui.recrutement.errSend')
    return
  }
  if (!ACCESS_KEY) {
    status.value = 'error'
    errorMsg.value = t('ui.recrutement.errSend')
    return
  }

  status.value = 'sending'
  const poste = recrutement.value.postes.find((item) => item.code === form.poste)
  const fd = new FormData()
  fd.append('access_key', ACCESS_KEY)
  fd.append('subject', `Candidature MAASH — ${poste.code} — ${form.nom}`)
  fd.append('from_name', 'Site MAASH — Recrutement')
  fd.append('replyTo', form.email)
  fd.append('botcheck', honeypot.value)
  fd.append('nom', form.nom)
  fd.append('telephone', form.tel)
  fd.append('email', form.email)
  fd.append('poste', form.poste)
  fd.append('poste_libelle', poste.nom)
  fd.append('diplome', form.diplome)
  fd.append('experience', form.experience)
  fd.append('disponibilite', form.disponibilite)
  fd.append('message', form.message)
  fd.append('langue', locale.value)
  fd.append('consentement', 'true')
  fd.append('consentement_texte', t('ui.recrutement.consentLabel'))

  const controller = new AbortController()
  activeController = controller
  const timeout = setTimeout(() => controller.abort(), 20000)
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: fd,
      signal: controller.signal,
    })
    let data = null
    try {
      data = await res.json()
    } catch (parseErr) {
      if (controller.signal.aborted) throw parseErr
      data = null
    }
    if (unmounted) return
    if (!res.ok || !data || data.success !== true) {
      throw new Error(`HTTP ${res.status}`)
    }
    status.value = 'success'
    resetForm()
  } catch (e) {
    if (unmounted) return
    status.value = 'error'
    errorMsg.value = t(
      e.name === 'AbortError' ? 'ui.recrutement.errTimeout' : 'ui.recrutement.errSend',
    )
  } finally {
    clearTimeout(timeout)
    activeController = null
  }
}
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.recrutement.h1') }}</h1>
        <p>{{ t('ui.recrutement.hero') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="badge">{{ t('ui.recrutement.postesBadge') }}</span>
        <h2 class="section-title">{{ t('ui.recrutement.postesTitle') }}</h2>
        <p class="section-subtitle">{{ t('ui.recrutement.postesText') }}</p>
        <div class="grid grid-3">
          <button
            v-for="p in recrutement.postes"
            :key="p.code"
            type="button"
            class="card poste-card"
            :class="{ 'is-selected': form.poste === p.code }"
            :aria-pressed="form.poste === p.code"
            aria-controls="application-section"
            :disabled="status === 'sending'"
            @click="choosePost(p.code)"
          >
            <span class="icon"><AppIcon name="users" /></span>
            <span class="poste-title">{{ p.nom }}</span>
            <span class="poste-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>

    <section id="application-section" ref="applicationSection" class="section section-alt application-section">
      <div class="container">
        <div class="card form-card">
          <span class="badge">{{ t('ui.recrutement.formBadge') }}</span>
          <h2 class="section-title">{{ t('ui.recrutement.formTitle') }}</h2>

          <div v-if="status === 'success'" class="form-status form-success" role="status">
            <h3>{{ t('ui.recrutement.successTitle') }}</h3>
            <p>{{ t('ui.recrutement.successText') }}</p>
            <div class="form-actions">
              <button type="button" class="btn btn-outline" @click="status = 'idle'">
                {{ t('ui.recrutement.againBtn') }}
              </button>
              <a
                :href="maash.whatsappHref"
                class="btn btn-primary"
                target="_blank"
                rel="noopener"
              >
                {{ t('ui.recrutement.whatsappCta') }}
              </a>
            </div>
          </div>

          <form v-else novalidate :aria-busy="status === 'sending'" @submit.prevent="submit">
            <div class="form-grid">
              <label class="field">
                <span>{{ t('ui.recrutement.nom') }} *</span>
                <input ref="nameInput" v-model.trim="form.nom" type="text" name="nom" autocomplete="name" :maxlength="fieldLimits.nom" required />
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.tel') }} *</span>
                <input
                  v-model.trim="form.tel"
                  type="tel"
                  name="telephone"
                  autocomplete="tel"
                  :maxlength="fieldLimits.tel"
                  required
                />
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.email') }} *</span>
                <input
                  v-model.trim="form.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  :maxlength="fieldLimits.email"
                  required
                />
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.poste') }} *</span>
                <select v-model="form.poste" name="poste" required>
                  <option value="" disabled>—</option>
                  <option v-for="p in recrutement.postes" :key="p.code" :value="p.code">
                    {{ p.nom }}
                  </option>
                </select>
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.diplome') }}</span>
                <input v-model.trim="form.diplome" type="text" name="diplome" :maxlength="fieldLimits.diplome" />
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.experience') }}</span>
                <input
                  v-model.trim="form.experience"
                  type="text"
                  name="experience"
                  :maxlength="fieldLimits.experience"
                  :placeholder="t('ui.recrutement.expPlaceholder')"
                />
              </label>
              <label class="field field-full">
                <span>{{ t('ui.recrutement.disponibilite') }}</span>
                <input v-model.trim="form.disponibilite" type="text" name="disponibilite" :maxlength="fieldLimits.disponibilite" />
              </label>
              <label class="field field-full">
                <span>{{ t('ui.recrutement.message') }}</span>
                <textarea v-model="form.message" name="message" rows="4" :maxlength="fieldLimits.message"></textarea>
              </label>
            </div>

            <p class="cv-note">{{ t('ui.recrutement.cvNote') }}</p>

            <!-- Champ piège (honeypot) : invisible, les bots le remplissent -->
            <input
              v-model="honeypot"
              type="text"
              name="botcheck"
              class="hp"
              tabindex="-1"
              autocomplete="off"
              aria-hidden="true"
            />

            <label class="consent">
              <input v-model="form.consent" type="checkbox" required />
              <span>{{ t('ui.recrutement.consentLabel') }}</span>
            </label>
            <p class="privacy-note">{{ t('ui.recrutement.notePrivacy') }}</p>

            <p v-if="status === 'error' && errorMsg" class="form-status form-error" role="alert">
              {{ errorMsg }}
            </p>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary" :disabled="status === 'sending'">
                {{ status === 'sending' ? t('ui.recrutement.sending') : t('ui.recrutement.submit') }}
              </button>
              <a
                :href="maash.whatsappHref"
                class="btn btn-outline"
                target="_blank"
                rel="noopener"
              >
                {{ t('ui.recrutement.whatsappCta') }}
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.poste-card {
  text-align: center;
  width: 100%;
  font: inherit;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.poste-card:hover:not(:disabled),
.poste-card.is-selected {
  border-color: var(--green-600);
  box-shadow: var(--shadow-md);
}

.poste-card:focus-visible {
  outline: 2px solid var(--green-600);
  outline-offset: 3px;
}

.poste-card:disabled {
  opacity: 0.6;
  cursor: wait;
}

.poste-title {
  display: block;
  color: var(--green-900);
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.3;
}

.poste-arrow {
  display: block;
  margin-top: 0.75rem;
  color: var(--green-700);
}

.application-section {
  scroll-margin-top: 100px;
}

.poste-card .icon {
  margin: 0 auto 0.75rem;
}

.form-card {
  max-width: 780px;
  margin: 0 auto;
  padding: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.25rem 0 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.field > span {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink);
}

.field input,
.field select,
.field textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--white);
  color: var(--ink);
  font: inherit;
  font-size: 0.92rem;
}

.field input:focus-visible,
.field select:focus-visible,
.field textarea:focus-visible {
  outline: 2px solid var(--green-600);
  outline-offset: 1px;
  border-color: var(--green-600);
}

.field-full {
  grid-column: 1 / -1;
}

.cv-note {
  margin: 0 0 1rem;
  font-size: 0.88rem;
  color: var(--ink-soft);
  background: var(--green-50);
  border-left: 4px solid var(--green-600);
  border-radius: 8px;
  padding: 0.75rem 1rem;
}

/* Champ piège : masqué visuellement mais pas par display:none (les bots le voient) */
.hp {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
}

.consent {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin: 0.5rem 0 0.25rem;
  font-size: 0.88rem;
  cursor: pointer;
}

.consent input {
  margin-top: 0.25rem;
  accent-color: var(--green-700);
}

.privacy-note {
  font-size: 0.8rem;
  color: var(--ink-soft);
  margin-bottom: 1.25rem;
}

.form-status {
  border-radius: 10px;
  padding: 1rem 1.25rem;
  margin: 1rem 0;
  font-size: 0.92rem;
}

.form-status h3 {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
}

.form-status p {
  margin: 0 0 0.75rem;
}

.form-success {
  background: var(--green-50);
  border: 1px solid var(--green-600);
  color: var(--ink);
}

.form-error {
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #991b1b;
}

html[data-theme='dark'] .form-error {
  background: #2d1416;
  border-color: #7f1d1d;
  color: #fca5a5;
}

html[data-theme='dark'] .field input,
html[data-theme='dark'] .field select,
html[data-theme='dark'] .field textarea {
  background: #12201a;
  border-color: #24352d;
  color: #e4ede8;
}

.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .form-card {
    padding: 1.25rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
