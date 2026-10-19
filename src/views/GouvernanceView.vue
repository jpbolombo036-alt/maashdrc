<script setup>
import { useI18n } from 'vue-i18n'
import { useContent } from '../i18n/useContent'

const { t } = useI18n()
const { gouvernance } = useContent()
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.gouvernance.h1') }}</h1>
        <p>{{ gouvernance.introduction }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="badge">{{ t('ui.gouvernance.badge') }}</span>
        <h2 class="section-title">{{ t('ui.gouvernance.title') }}</h2>
        <p class="section-subtitle">{{ t('ui.gouvernance.subtitle') }}</p>
        <div class="grid grid-3">
          <div v-for="(b, i) in gouvernance.blocs" :key="b.nom" class="card gov-card">
            <div class="gov-index">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3>{{ b.nom }}</h3>
            <p>{{ b.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gov-card {
  border-top: 3px solid var(--green-600);
}

.gov-index {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--green-600);
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}
</style>