<script setup>
import { useI18n } from 'vue-i18n'
import AppIcon from '../components/AppIcon.vue'
import { useContent } from '../i18n/useContent'

const { t } = useI18n()
const { maash, presentation } = useContent()
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.presentation.h1') }}</h1>
        <p>{{ presentation.resume }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div class="card">
          <div class="icon"><AppIcon name="shield" /></div>
          <h3>{{ t('ui.presentation.purpose') }}</h3>
          <p>{{ presentation.raisonCreation }}</p>
        </div>
        <div class="card">
          <div class="icon"><AppIcon name="globe" /></div>
          <h3>{{ t('ui.presentation.vision') }}</h3>
          <p>{{ presentation.vision }}</p>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="badge">{{ t('ui.presentation.missionsBadge') }}</span>
        <h2 class="section-title">{{ t('ui.presentation.missionsTitle') }}</h2>
        <p class="section-subtitle">{{ t('ui.presentation.missionsSubtitle') }}</p>
        <div class="grid grid-2">
          <div v-for="(m, i) in presentation.missions" :key="i" class="card">
            <div class="mission-num">{{ i + 1 }}</div>
            <p class="mission-text">{{ m }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div>
          <span class="badge">{{ t('ui.presentation.principlesBadge') }}</span>
          <h2 class="section-title">{{ t('ui.presentation.principlesTitle') }}</h2>
          <p class="section-subtitle">{{ t('ui.presentation.principlesSubtitle') }}</p>
          <ul class="list-check">
            <li v-for="p in presentation.principes" :key="p">{{ p }}</li>
          </ul>
          <p class="devise">{{ t('ui.presentation.mottoLabel') }} <strong>{{ maash.devise }}</strong></p>
        </div>
        <div>
          <span class="badge">{{ t('ui.presentation.zonesBadge') }}</span>
          <h2 class="section-title">{{ t('ui.presentation.zonesTitle') }}</h2>
          <p class="section-subtitle">{{ t('ui.presentation.zonesSubtitle') }}</p>
          <div class="grid grid-2 zone-grid">
            <div v-for="z in maash.zones.couverture" :key="z" class="card zone-card">
              <h3>{{ z }}</h3>
              <p>{{ t('ui.presentation.zoneCurrent') }}</p>
            </div>
          </div>
          <div class="note" style="margin-top: 1.25rem">{{ maash.zones.extension }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mission-num {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--green-700);
  color: var(--white);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.85rem;
}

.mission-text {
  color: var(--ink-soft);
  margin: 0;
}

.devise {
  margin-top: 1.25rem;
  color: var(--green-800);
}

.zone-grid {
  gap: 1rem;
}

.zone-card {
  padding: 1.1rem 1.25rem;
}

.zone-card h3 {
  font-size: 1rem;
  margin-bottom: 0.15rem;
}

.zone-card p {
  font-size: 0.82rem;
  margin: 0;
}
</style>