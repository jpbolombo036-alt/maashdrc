<script setup>
import { useI18n } from 'vue-i18n'
import AppIcon from '../components/AppIcon.vue'
import { useContent } from '../i18n/useContent'

const { t } = useI18n()
const { maash, prosoc, cibles } = useContent()
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.prosoc.h1') }}</h1>
        <p>{{ prosoc.resume }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div>
          <span class="badge">{{ t('ui.prosoc.featuresBadge') }}</span>
          <h2 class="section-title">{{ t('ui.prosoc.featuresTitle') }}</h2>
          <ul class="list-check">
            <li v-for="f in prosoc.fonctionnalites" :key="f">{{ f }}</li>
          </ul>
        </div>
        <div>
          <span class="badge">{{ t('ui.prosoc.rolesBadge') }}</span>
          <h2 class="section-title">{{ t('ui.prosoc.rolesTitle') }}</h2>
          <div class="grid" style="gap: 1rem">
            <div v-for="r in prosoc.roles" :key="r.nom" class="card role-card">
              <h3>{{ r.nom }}</h3>
              <p>{{ r.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container grid grid-2">
        <div class="card">
          <div class="icon"><AppIcon name="shield" /></div>
          <h3>{{ t('ui.prosoc.dataTitle') }}</h3>
          <p>{{ prosoc.regleDonnees }}</p>
        </div>
        <div class="card">
          <div class="icon"><AppIcon name="users" /></div>
          <h3>{{ t('ui.prosoc.groupsTitle') }}</h3>
          <p><strong>{{ cibles.adherent }}</strong></p>
          <ul class="list-check">
            <li v-for="p in cibles.personnesCharge" :key="p">{{ p }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section prosoc-cta">
      <div class="container prosoc-cta-inner">
        <div>
          <h2>{{ t('ui.prosoc.ctaTitle') }}</h2>
          <p>{{ t('ui.prosoc.ctaText') }}</p>
        </div>
        <a :href="maash.prosocAdhesionUrl" class="btn btn-white" target="_blank" rel="noopener">
          {{ t('ui.common.joinMaash') }}
        </a>
        <a :href="maash.apkUrl" class="btn btn-ghost" download>
          {{ t('ui.common.downloadApp') }} (APK)
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.role-card {
  padding: 1.1rem 1.25rem;
}

.role-card h3 {
  font-size: 1rem;
}

.prosoc-cta {
  background: linear-gradient(135deg, var(--green-800), var(--green-600));
  color: var(--white);
}

.prosoc-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.prosoc-cta h2 {
  color: var(--white);
  margin-bottom: 0.35rem;
}

.prosoc-cta p {
  margin: 0;
  color: var(--green-100);
  max-width: 560px;
}

.btn-ghost {
  background: transparent;
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.6);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}
</style>