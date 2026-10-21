<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from '../components/AppIcon.vue'
import { useContent } from '../i18n/useContent'

const { t, tm } = useI18n()
const { maash, presentation, branches, prosoc, cibles, stats } = useContent()

const heroSlides = [
  '/accueil.jpg',
  '/consultation.jpg',
  '/distribution.jpg',
  '/echange.jpg',
  '/soutien.jpg',
  '/retraite.jpg',
  '/famille.jpg',
]
const heroSlideIndex = ref(0)
const paused = ref(false)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
let heroSlideTimer

onMounted(() => {
  if (reduceMotion) return

  heroSlideTimer = setInterval(() => {
    if (paused.value) return

    heroSlideIndex.value = (heroSlideIndex.value + 1) % heroSlides.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(heroSlideTimer)
})
</script>

<template>
  <div>
    <section
      class="hero"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
      @focusin="paused = true"
      @focusout="paused = false"
    >
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
          <span class="hero-badge">{{ t('ui.home.badge') }}</span>
          <h1>{{ maash.slogan }}</h1>
          <p class="hero-slogan-lingala">{{ maash.sloganLingala }}</p>
          <p class="hero-text">{{ presentation.resume }}</p>
          <div class="hero-actions">
            <a :href="maash.prosocAdhesionUrl" class="btn btn-white">
              {{ t('ui.common.joinMaash') }}
            </a>
            <router-link to="/services" class="btn btn-ghost">{{ t('ui.common.discoverServices') }}</router-link>
            <a :href="maash.apkUrl" class="btn btn-ghost" download>
              {{ t('ui.common.downloadApp') }} (APK)
            </a>
          </div>
        </div>

        <div class="hero-card">
          <h3>{{ t('ui.home.infoTitle') }}</h3>
          <ul>
            <li><span>{{ t('ui.home.infoCreationLabel') }}</span><strong>{{ maash.creation }}</strong></li>
            <li>
              <span>{{ t('ui.home.infoRecognitionLabel') }}</span>
              <strong>{{ t('ui.home.infoRecognition') }}</strong>
            </li>
            <li>
              <span>{{ t('ui.home.infoSeatLabel') }}</span>
              <strong>{{ t('ui.home.infoSeat', { pays: maash.adresse.pays }) }}</strong>
            </li>
            <li><span>{{ t('ui.home.infoMottoLabel') }}</span><strong>{{ maash.devise }}</strong></li>
          </ul>
          <router-link to="/contact" class="btn btn-primary btn-block">{{ t('ui.common.contactUs') }}</router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-4">
          <div v-for="c in stats" :key="c.label" class="stat card">
            <div class="stat-value">{{ c.valeur }}</div>
            <div class="stat-label">{{ c.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container split">
        <div>
          <span class="badge">{{ t('ui.home.whoBadge') }}</span>
          <h2 class="section-title">{{ t('ui.home.whoTitle') }}</h2>
          <p class="section-subtitle">{{ presentation.raisonCreation }}</p>
          <router-link to="/presentation" class="btn btn-outline">{{ t('ui.home.more') }}</router-link>
        </div>
        <div class="card">
          <h3>{{ t('ui.home.vision') }}</h3>
          <p>{{ presentation.vision }}</p>
          <h3 class="mt">{{ t('ui.home.principles') }}</h3>
          <ul class="list-check">
            <li v-for="p in presentation.principes.slice(0, 4)" :key="p">{{ p }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="badge">{{ t('ui.home.servicesBadge') }}</span>
        <h2 class="section-title">{{ t('ui.home.servicesTitle') }}</h2>
        <p class="section-subtitle">
          {{ t('ui.home.servicesSubtitle') }}
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
            <li v-for="p in tm('ui.home.prosocPoints')" :key="p">{{ p }}</li>
          </ul>
          <router-link to="/prosoc" class="btn btn-outline">{{ t('ui.home.discoverProgram') }}</router-link>
        </div>
        <div>
          <span class="badge">{{ t('ui.home.memberBadge') }}</span>
          <h2 class="section-title">{{ t('ui.home.memberTitle') }}</h2>
          <p class="section-subtitle">
            {{
              t('ui.home.memberSubtitle', {
                fee: cibles.adherence,
                price: cibles.formules[0].prix,
              })
            }}
          </p>
          <router-link to="/adhesion" class="btn btn-primary">{{ t('ui.home.viewPrices') }}</router-link>
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

@media (prefers-reduced-motion: reduce) {
  .hero-slide {
    transition: none;
  }
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
