<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activities = [
  {
    image: '/consultation.jpg',
    title: 'Consultation et orientation',
    text: 'Écouter les besoins des membres et les orienter vers les solutions adaptées.',
  },
  {
    image: '/distribution.jpg',
    title: 'Distribution et accompagnement',
    text: 'Mettre les prestations et l’accompagnement de MAASH à la portée des familles.',
  },
  {
    image: '/echange.jpg',
    title: 'Échanges avec les communautés',
    text: 'Créer un dialogue de proximité avec les membres et les communautés.',
  },
  {
    image: '/soutien.jpg',
    title: 'Soutien socio-humanitaire',
    text: 'Contribuer à l’assistance des personnes et des familles selon leurs besoins.',
  },
  {
    image: '/retraite.jpg',
    title: 'Préparation de la retraite',
    text: 'Sensibiliser les membres à la prévoyance et à la préparation de l’avenir.',
  },
  {
    image: '/famille.jpg',
    title: 'Protection de la famille',
    text: 'Développer des solutions de couverture adaptées aux familles.',
  },
]
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.activites.h1') }}</h1>
        <p>{{ t('ui.activites.hero') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="badge">{{ t('ui.activites.badge') }}</span>
        <h2 class="section-title">{{ t('ui.activites.title') }}</h2>
        <p class="section-subtitle">{{ t('ui.activites.subtitle') }}</p>

        <div class="activity-grid">
          <article v-for="activity in activities" :key="activity.image" class="activity-card">
            <img :src="activity.image" :alt="activity.title" class="activity-image" loading="lazy" />
            <div class="activity-content">
              <h3>{{ activity.title }}</h3>
              <p>{{ activity.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container activity-note">
        <div>
          <span class="badge">{{ t('ui.activites.futureBadge') }}</span>
          <h2 class="section-title">{{ t('ui.activites.futureTitle') }}</h2>
          <p class="section-subtitle">{{ t('ui.activites.futureText') }}</p>
        </div>
        <router-link to="/contact" class="btn btn-primary">
          {{ t('ui.common.contactUs') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.activity-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.activity-card {
  overflow: hidden;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.activity-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.activity-image {
  width: 100%;
  height: 210px;
  object-fit: cover;
}

.activity-content {
  padding: 1.25rem 1.35rem 1.4rem;
}

.activity-content h3 {
  font-size: 1.1rem;
}

.activity-content p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.94rem;
}

.activity-note {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.activity-note .section-subtitle {
  margin-bottom: 0;
}

@media (max-width: 960px) {
  .activity-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .activity-grid {
    grid-template-columns: 1fr;
  }

  .activity-note {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
