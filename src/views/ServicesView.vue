<script setup>
import { ref, computed, nextTick, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from '../components/AppIcon.vue'
import { useContent } from '../i18n/useContent'

const { t } = useI18n()
const { branches, hopitaux } = useContent()

// Modales des établissements de santé : catégorie standard (H) et VIP (I)
const selectedCategory = ref(null)
const hospitalDialog = ref(null)
const closeButton = ref(null)
const selectedContent = computed(() =>
  selectedCategory.value === 'I' ? hopitaux.value.vip : hopitaux.value,
)
const selectedHospitals = computed(() => selectedContent.value.liste)
const selectedHospitalsTitle = computed(() => selectedContent.value.titre)
let trigger = null
let previousOverflow = null

function restoreScroll() {
  if (previousOverflow !== null) {
    document.body.style.overflow = previousOverflow
    previousOverflow = null
  }
}

function onHospitalsClosed() {
  selectedCategory.value = null
  restoreScroll()
  if (trigger?.isConnected) trigger.focus({ preventScroll: true })
  trigger = null
}

function closeHospitals() {
  hospitalDialog.value?.close()
}

function onDialogKeydown(event) {
  if (event.key !== 'Tab') return
  const controls = hospitalDialog.value.querySelectorAll('button:not(:disabled), a[href]')
  const first = controls[0]
  const last = controls[controls.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

function isHospitalsCard(b, p) {
  return b.id === 'sante' && ['H', 'I'].includes(p.code)
}

async function openHospitals(b, p, event) {
  if (!isHospitalsCard(b, p) || selectedCategory.value !== null) return

  trigger = event.currentTarget
  selectedCategory.value = p.code
  await nextTick()
  // La vue peut avoir été démontée pendant la mise à jour du DOM.
  if (!hospitalDialog.value) return
  hospitalDialog.value.showModal()
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  closeButton.value.focus()
}

function mapUrl(h) {
  return (
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(`${h.nom}, Kinshasa`)
  )
}

onUnmounted(() => {
  restoreScroll()
  trigger = null
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.services.h1') }}</h1>
        <p>{{ t('ui.services.hero') }}</p>
      </div>
    </section>

    <section
      v-for="(b, index) in branches"
      :key="b.id"
      class="section"
      :class="{ 'section-alt': index % 2 === 1 }"
    >
      <div class="container">
        <span class="badge badge-flex"><AppIcon :name="b.icon" class="badge-icon" /> {{ b.titre }}</span>
        <h2 class="section-title">{{ b.titre }}</h2>
        <p class="section-subtitle">{{ b.resume }}</p>

        <div class="grid" :class="b.prestations.length > 2 ? 'grid-3' : 'grid-2'">
          <div
            v-for="(p, prestationIndex) in b.prestations"
            :key="`${b.id}-${p.code}-${prestationIndex}`"
            class="card presta-card"
            :class="{ 'is-clickable': isHospitalsCard(b, p) }"
            :role="isHospitalsCard(b, p) ? 'button' : undefined"
            :tabindex="isHospitalsCard(b, p) ? 0 : undefined"
            :aria-label="isHospitalsCard(b, p) ? t('hopitaux.voir') : undefined"
            :aria-haspopup="isHospitalsCard(b, p) ? 'dialog' : undefined"
            :aria-controls="isHospitalsCard(b, p) ? 'hospital-dialog' : undefined"
            @click="openHospitals(b, p, $event)"
            @keydown.enter.prevent="openHospitals(b, p, $event)"
            @keydown.space.prevent="openHospitals(b, p, $event)"
          >
            <span class="presta-code">{{ p.code }}</span>
            <h3>{{ p.nom }}</h3>
            <p>{{ p.detail }}</p>
            <span v-if="isHospitalsCard(b, p)" class="presta-hint">
              {{ t('hopitaux.voir') }} →
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="note">
          {{ t('ui.services.note') }}
        </div>
      </div>
    </section>

    <!-- Liste des établissements : ouverte par les prestations H ou I -->
    <Teleport to="body">
      <dialog
        id="hospital-dialog"
        ref="hospitalDialog"
        class="hosp-overlay"
        aria-labelledby="hospital-dialog-title"
        @click.self="closeHospitals"
        @cancel.prevent="closeHospitals"
        @close="onHospitalsClosed"
        @keydown="onDialogKeydown"
      >
        <div class="hosp-panel">
          <div class="hosp-head">
            <h3 id="hospital-dialog-title">{{ selectedHospitalsTitle }}</h3>
            <button
              ref="closeButton"
              type="button"
              class="hosp-close"
              :aria-label="t('hopitaux.fermer')"
              @click="closeHospitals"
            >
              ✕
            </button>
          </div>

          <ul class="hosp-list">
            <li v-for="h in selectedHospitals" :key="h.nom" class="hosp-item">
              <div class="hosp-name">
                <AppIcon name="pin" class="hosp-pin" />
                <strong>{{ h.nom }}</strong>
              </div>
              <p v-if="h.tarif" class="hosp-rep">
                <span>{{ t('hopitaux.tarif') }} :</span> {{ h.tarif }}
              </p>
              <p v-if="h.repere" class="hosp-rep">
                <span>{{ t('hopitaux.repere') }} :</span> {{ h.repere }}
              </p>
              <span v-if="h.commune" class="hosp-chip">{{ h.commune }}</span>
              <a class="hosp-map" :href="mapUrl(h)" target="_blank" rel="noopener">
                {{ t('hopitaux.itineraire') }} →
              </a>
            </li>
          </ul>

          <p class="hosp-note">{{ t('hopitaux.aVenir') }}</p>
        </div>
      </dialog>
    </Teleport>
  </div>
</template>

<style scoped>
.badge-flex {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.badge-icon {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.presta-card {
  position: relative;
  padding-top: 2rem;
}

.presta-code {
  position: absolute;
  top: -14px;
  left: 1.5rem;
  background: var(--green-700);
  color: var(--white);
  font-weight: 700;
  font-size: 0.85rem;
  min-width: 34px;
  height: 34px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
}
/* —— Carte cliquable « Catégorie standard » —— */
.presta-card.is-clickable {
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.presta-card.is-clickable:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--green-600);
}

.presta-card.is-clickable:focus-visible {
  outline: 2px solid var(--green-600);
  outline-offset: 2px;
}

.presta-hint {
  display: inline-block;
  margin-top: 0.8rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--green-700);
}

html[data-theme='dark'] .presta-hint {
  color: #34d399;
}

/* —— Modale liste des hôpitaux —— */
.hosp-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  border: 0;
  color: var(--ink);
  background: transparent;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
}

.hosp-overlay[open] {
  display: flex;
}

.hosp-overlay::backdrop {
  background: rgba(6, 78, 59, 0.55);
}

.hosp-panel {
  background: var(--white);
  border-radius: var(--radius);
  width: 100%;
  max-width: 760px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 1.75rem;
  box-shadow: 0 24px 48px rgba(6, 78, 59, 0.35);
}

.hosp-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.hosp-head h3 {
  margin: 0;
  font-size: 1.2rem;
}

.hosp-close {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: var(--green-50);
  color: var(--green-800);
  font-size: 1.05rem;
  line-height: 1;
  cursor: pointer;
}

.hosp-close:hover {
  background: var(--green-100);
}

.hosp-list {
  list-style: none;
  margin: 1.25rem 0 0.75rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.hosp-item {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 0.85rem 1rem;
}

.hosp-name {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.35rem;
}

.hosp-pin {
  width: 17px;
  height: 17px;
  color: var(--green-600);
  flex-shrink: 0;
}

.hosp-rep {
  margin: 0 0 0.5rem;
  font-size: 0.86rem;
  color: var(--ink-soft);
}

.hosp-rep span {
  font-weight: 600;
  color: var(--ink);
}

.hosp-chip {
  display: inline-block;
  background: var(--green-100);
  color: var(--green-800);
  font-size: 0.74rem;
  font-weight: 700;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  margin-right: 0.5rem;
}

.hosp-map {
  font-size: 0.82rem;
  font-weight: 600;
}

.hosp-note {
  margin: 0;
  font-size: 0.85rem;
  color: var(--ink-soft);
  background: var(--green-50);
  border-left: 4px solid var(--green-600);
  border-radius: 8px;
  padding: 0.7rem 1rem;
}

html[data-theme='dark'] .hosp-panel {
  background: #12201a;
}

html[data-theme='dark'] .hosp-close {
  color: #34d399;
}

@media (max-width: 640px) {
  .hosp-list {
    grid-template-columns: 1fr;
  }

  .hosp-panel {
    padding: 1.25rem;
  }
}
</style>
