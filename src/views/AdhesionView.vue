<script setup>
import { useI18n } from 'vue-i18n'
import AppIcon from '../components/AppIcon.vue'
import { useContent } from '../i18n/useContent'

const { t, tm } = useI18n()
const { cibles, maash } = useContent()
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.adhesion.h1') }}</h1>
        <p>{{ t('ui.adhesion.hero') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="badge">{{ t('ui.adhesion.badge') }}</span>
        <h2 class="section-title">{{ t('ui.adhesion.title') }}</h2>
        <p class="section-subtitle">{{ cibles.adherence }} {{ cibles.remarqueFormules }}</p>

        <div class="table-wrap">
          <table class="data">
            <thead>
              <tr>
                <th>{{ t('ui.adhesion.thPlan') }}</th>
                <th>{{ t('ui.adhesion.thComposition') }}</th>
                <th>{{ t('ui.adhesion.thMonthly') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="f in cibles.formules" :key="f.nom">
                <td><strong>{{ f.nom }}</strong></td>
                <td>{{ f.composition }}</td>
                <td><strong class="price">{{ f.prix }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="note" style="margin-top: 1.5rem">
          {{ t('ui.adhesion.noteHealth1') }}
          <strong>19 USD/mois</strong> {{ t('ui.adhesion.noteHealth2') }}
          <strong>{{ t('ui.adhesion.noteHealth3') }} 10 USD/mois</strong>
          {{ t('ui.adhesion.noteHealth4') }}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container grid grid-3">
        <div class="card">
          <div class="icon"><AppIcon name="document" /></div>
          <h3>{{ t('ui.adhesion.docsTitle') }}</h3>
          <ul class="list-check">
            <li v-for="d in cibles.documents" :key="d">{{ d }}</li>
          </ul>
        </div>
        <div class="card">
          <div class="icon"><AppIcon name="users" /></div>
          <h3>{{ t('ui.adhesion.depsTitle') }}</h3>
          <ul class="list-check">
            <li v-for="p in cibles.personnesCharge" :key="p">{{ p }}</li>
          </ul>
        </div>
        <div class="card">
          <div class="icon"><AppIcon name="card" /></div>
          <h3>{{ t('ui.adhesion.payTitle') }}</h3>
          <ul class="list-check">
            <li v-for="p in tm('ui.adhesion.payList')" :key="p">{{ p }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="badge">{{ t('ui.adhesion.howBadge') }}</span>
        <h2 class="section-title">{{ t('ui.adhesion.howTitle') }}</h2>
        <div class="grid grid-3">
          <div v-for="(m, i) in cibles.modalites" :key="i" class="card step-card">
            <div class="step-num">{{ i + 1 }}</div>
            <p class="step-text">{{ m }}</p>
          </div>
        </div>
        <div class="cta-band">
          <div>
            <h3>{{ t('ui.adhesion.ctaTitle') }}</h3>
            <p>{{ t('ui.adhesion.ctaText', { phone: maash.telephone }) }}</p>
          </div>
          <div class="cta-actions">
            <a
              :href="maash.prosocAdhesionUrl"
              class="btn btn-white"
            >
              {{ t('ui.common.joinMaash') }}
            </a>
            <a :href="maash.whatsappHref" class="btn btn-ghost" target="_blank" rel="noopener">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.price {
  color: var(--green-700);
}

.step-num {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--green-100);
  color: var(--green-800);
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.9rem;
}

.step-text {
  color: var(--ink-soft);
  margin: 0;
}

.cta-band {
  margin-top: 2.5rem;
  background: linear-gradient(135deg, var(--green-800), var(--green-600));
  color: var(--white);
  border-radius: var(--radius);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-band h3 {
  color: var(--white);
  margin-bottom: 0.25rem;
}

.cta-band p {
  margin: 0;
  color: var(--green-100);
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
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
