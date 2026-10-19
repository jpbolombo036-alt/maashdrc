<script setup>
import { useI18n } from 'vue-i18n'

// Page 404 — affichée pour toute adresse inconnue (redirection maison via le routeur).
const { t } = useI18n()
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.notFound.h1') }}</h1>
        <p>{{ t('ui.notFound.hero') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="nf-inner">
          <div class="nf-code">404</div>
          <p class="nf-text">{{ t('ui.notFound.text') }}</p>
          <div class="nf-actions">
            <router-link to="/" class="btn btn-primary">{{ t('ui.notFound.homeBtn') }}</router-link>
            <router-link to="/contact" class="btn btn-outline">{{ t('ui.common.contactUs') }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.nf-inner {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.nf-code {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1;
  color: var(--green-600);
  margin-bottom: 0.75rem;
}

.nf-text {
  color: var(--ink-soft);
  margin-bottom: 1.75rem;
}

.nf-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
