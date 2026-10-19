<script setup>
import { reactive, ref } from 'vue'
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
const mountedAt = Date.now()

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  if (!form.nom || !form.tel || !form.email || !form.poste) {
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

async function submit() {
  errorMsg.value = ''
  const err = validate()
  if (err) {
    status.value = 'error'
    errorMsg.value = err
    return
  }
  // Piège temporel : un humain met au moins 3 s à remplir le formulaire
  if (honeypot.value || Date.now() - mountedAt < 3000) {
    status.value = 'success' // succès simulé pour piéger les bots
    return
  }
  if (!ACCESS_KEY) {
    status.value = 'error'
    errorMsg.value = t('ui.recrutement.errSend')
    return
  }

  status.value = 'sending'
  const fd = new FormData()
  fd.append('access_key', ACCESS_KEY)
  fd.append('subject', `Candidature MAASH — ${form.poste} — ${form.nom}`)
  fd.append('from_name', 'Site MAASH — Recrutement')
  fd.append('replyTo', form.email)
  fd.append('botcheck', honeypot.value)
  fd.append('nom', form.nom)
  fd.append('telephone', form.tel)
  fd.append('email', form.email)
  fd.append('poste', form.poste)
  fd.append('diplome', form.diplome)
  fd.append('experience', form.experience)
  fd.append('disponibilite', form.disponibilite)
  fd.append('message', form.message)
  fd.append('langue', locale.value)

  try {
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
    let data = null
    try {
      data = await res.json()
    } catch (parseErr) {
      data = null
    }
    if (!res.ok || !data || !data.success) {
      const detail = (data && data.message) || `HTTP ${res.status}`
      console.error('Web3Forms —', res.status, detail)
      throw new Error(detail)
    }
    status.value = 'success'
    resetForm()
  } catch (e) {
    status.value = 'error'
    // On affiche le message réel renvoyé par l'API pour faciliter le diagnostic
    errorMsg.value =
      t('ui.recrutement.errSend') + (e && e.message ? ` — ${e.message}` : '')
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
          <div v-for="p in recrutement.postes" :key="p.code" class="card poste-card">
            <div class="icon"><AppIcon name="users" /></div>
            <h3>{{ p.nom }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
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

          <form v-else novalidate @submit.prevent="submit">
            <div class="form-grid">
              <label class="field">
                <span>{{ t('ui.recrutement.nom') }} *</span>
                <input v-model.trim="form.nom" type="text" name="nom" autocomplete="name" required />
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.tel') }} *</span>
                <input
                  v-model.trim="form.tel"
                  type="tel"
                  name="telephone"
                  autocomplete="tel"
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
                  required
                />
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.poste') }} *</span>
                <select v-model="form.poste" name="poste" required>
                  <option value="" disabled>—</option>
                  <option v-for="p in recrutement.postes" :key="p.code" :value="p.nom">
                    {{ p.nom }}
                  </option>
                </select>
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.diplome') }}</span>
                <input v-model.trim="form.diplome" type="text" name="diplome" />
              </label>
              <label class="field">
                <span>{{ t('ui.recrutement.experience') }}</span>
                <input
                  v-model.trim="form.experience"
                  type="text"
                  name="experience"
                  :placeholder="t('ui.recrutement.expPlaceholder')"
                />
              </label>
              <label class="field field-full">
                <span>{{ t('ui.recrutement.disponibilite') }}</span>
                <input v-model.trim="form.disponibilite" type="text" name="disponibilite" />
              </label>
              <label class="field field-full">
                <span>{{ t('ui.recrutement.message') }}</span>
                <textarea v-model="form.message" name="message" rows="4"></textarea>
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
