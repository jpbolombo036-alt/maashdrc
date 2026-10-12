<script setup>
import { maash, presentation } from '../data/maashData'
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Présentation institutionnelle</h1>
        <p>{{ presentation.resume }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div class="card">
          <div class="icon"><AppIcon name="shield" /></div>
          <h3>Raison d’être</h3>
          <p>{{ presentation.raisonCreation }}</p>
        </div>
        <div class="card">
          <div class="icon"><AppIcon name="globe" /></div>
          <h3>Vision</h3>
          <p>{{ presentation.vision }}</p>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="badge">Missions et finalités</span>
        <h2 class="section-title">Ce que MAASH s’engage à faire</h2>
        <p class="section-subtitle">Missions et finalités extraites du Référentiel Institutionnel Intégré (RII).</p>
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
          <span class="badge">Principes</span>
          <h2 class="section-title">Nos valeurs de fonctionnement</h2>
          <p class="section-subtitle">
            Principes relevés dans le socle de compétences du RII. Cette synthèse ne constitue pas
            une liste officielle de valeurs.
          </p>
          <ul class="list-check">
            <li v-for="p in presentation.principes" :key="p">{{ p }}</li>
          </ul>
          <p class="devise">Devise : <strong>{{ maash.devise }}</strong></p>
        </div>
        <div>
          <span class="badge">Zones d’intervention</span>
          <h2 class="section-title">Présents à Kinshasa</h2>
          <p class="section-subtitle">
            Domaines : protection sociale, activités socio-humanitaires et accompagnement des
            membres.
          </p>
          <div class="grid grid-2 zone-grid">
            <div v-for="z in maash.zones.couverture" :key="z" class="card zone-card">
              <h3>{{ z }}</h3>
              <p>Couverture actuelle</p>
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