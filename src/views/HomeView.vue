<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { maash, presentation, branches, prosoc, cibles } from '../data/maashData'
import AppIcon from '../components/AppIcon.vue'

const chiffres = [
  { valeur: '4', label: 'branches de prestations' },
  { valeur: '4', label: 'districts couverts à Kinshasa' },
  { valeur: '24', label: 'communes visées à Kinshasa' },
  { valeur: '2 USD', label: 'cotisation mensuelle dès le Solo' },
]

const heroSlides = [
  '/accueil.png',
  '/consultation.png',
  '/distribution.png',
  '/echange.png',
]
const heroSlideIndex = ref(0)
let heroSlideTimer

onMounted(() => {
  heroSlideTimer = setInterval(() => {
    heroSlideIndex.value = (heroSlideIndex.value + 1) % heroSlides.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(heroSlideTimer)
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-bg" aria-hidden="true">
        <div
          v-for="(photo, i) in heroSlides"
          :key="photo"
          class="hero-slide"
          :class="{ 'is-active': i === heroSlideIndex }"
          :style="{ backgroundImage: `url('${photo}')` }"
        ></div>
      </div>
      <div class="hero-tint" aria-hidden="true"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <span class="hero-badge">Bienvenue chez MAASH</span>
          <h1>{{ maash.sloganFr }}</h1>
          <p class="hero-slogan-lingala">{{ maash.sloganLingala }}</p>
          <p class="hero-text">{{ presentation.resume }}</p>
          <div class="hero-actions">
            <a :href="maash.prosocAppUrl" class="btn btn-white" target="_blank" rel="noopener">
              Adhérer sur MAASH
            </a>
            <router-link to="/services" class="btn btn-ghost">Découvrir nos services</router-link>
          </div>
        </div>

        <div class="hero-card">
          <h3>Informations clés</h3>
          <ul>
            <li><span>Création</span><strong>{{ maash.creation }}</strong></li>
            <li><span>Reconnaissance</span><strong>F92/56.275 (Ministère de la Justice)</strong></li>
            <li><span>Siège</span><strong>Ngaliema, Kinshasa — {{ maash.adresse.pays }}</strong></li>
            <li><span>Devise</span><strong>{{ maash.devise }}</strong></li>
          </ul>
          <router-link to="/contact" class="btn btn-primary btn-block">Nous contacter</router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-4">
          <div v-for="c in chiffres" :key="c.label" class="stat card">
            <div class="stat-value">{{ c.valeur }}</div>
            <div class="stat-label">{{ c.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container split">
        <div>
          <span class="badge">Qui sommes-nous</span>
          <h2 class="section-title">Une mutuelle de protection sociale pour tous</h2>
          <p class="section-subtitle">{{ presentation.raisonCreation }}</p>
          <router-link to="/presentation" class="btn btn-outline">En savoir plus</router-link>
        </div>
        <div class="card">
          <h3>Notre vision</h3>
          <p>{{ presentation.vision }}</p>
          <h3 class="mt">Nos principes</h3>
          <ul class="list-check">
            <li v-for="p in presentation.principes.slice(0, 4)" :key="p">{{ p }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="badge">Nos services</span>
        <h2 class="section-title">Quatre branches de protection</h2>
        <p class="section-subtitle">
          Des prestations accessibles, adaptées aux besoins des familles et du secteur informel.
        </p>
        <div class="grid grid-4">
          <router-link v-for="b in branches" :key="b.id" to="/services" class="card branch-card">
            <div class="icon"><AppIcon :name="b.icon" /></div>
            <h3>{{ b.titre }}</h3>
            <p>{{ b.resume }}</p>
          </router-link>
        </div>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container split">
        <div class="card">
          <h3>PROSOC &amp; Prosoc</h3>
          <p>{{ prosoc.resume }}</p>
          <ul class="list-check">
            <li>Adhésion et gestion administrative simplifiées</li>
            <li>Paiement Mobile Money et carte Visa</li>
            <li>Bon de jeton pour l’orientation vers les prestataires</li>
          </ul>
          <router-link to="/prosoc" class="btn btn-outline">Découvrir le programme</router-link>
        </div>
        <div>
          <span class="badge">Devenir membre</span>
          <h2 class="section-title">Rejoignez MAASH dès aujourd’hui</h2>
          <p class="section-subtitle">
            Adhésion à {{ cibles.adherence }} Formules à partir de {{ cibles.formules[0].prix }} par
            mois.
          </p>
          <router-link to="/adhesion" class="btn btn-primary">Voir les tarifs</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  color: var(--white);
  padding: 4.5rem 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-slide {
  position: absolute;
  inset: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}

.hero-slide.is-active {
  opacity: 1;
}

.hero-tint {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    90deg,
    rgba(6, 78, 59, 0.85) 0%,
    rgba(6, 78, 59, 0.55) 45%,
    rgba(5, 150, 105, 0.25) 100%
  );
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--white);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1.25rem;
}

.hero h1 {
  color: var(--white);
  font-size: 2.7rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-slogan-lingala {
  font-style: italic;
  color: var(--green-100);
  margin-bottom: 1.25rem;
}

.hero-text {
  color: rgba(255, 255, 255, 0.9);
  max-width: 540px;
  margin-bottom: 2rem;
}

.hero-actions {
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

.hero-card {
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.28);
  color: var(--white);
  border-radius: var(--radius);
  padding: 1.75rem;
  box-shadow: 0 12px 32px rgba(6, 78, 59, 0.35);
}

.hero-card h3 {
  color: var(--white);
  margin-bottom: 1rem;
}

.hero-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
}

.hero-card li {
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
}

.hero-card li span {
  color: var(--green-100);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.btn-block {
  width: 100%;
}

.stat {
  text-align: center;
  padding: 1.5rem 1rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--green-700);
}

.stat-label {
  color: var(--ink-soft);
  font-size: 0.88rem;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.mt {
  margin-top: 1.25rem;
}

.branch-card {
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.branch-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 960px) {
  .hero-inner,
  .split {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero h1 {
    font-size: 2rem;
  }
}
</style>