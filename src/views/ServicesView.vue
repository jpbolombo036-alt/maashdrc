<script setup>
import { branches } from '../data/maashData'
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Services de MAASH</h1>
        <p>
          Quatre branches couvertes — Pensions, Communautaire, Soins de santé et Spécialisée — avec
          les prestations A à J et les couvertures proposées par les assureurs partenaires.
        </p>
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
          <div v-for="p in b.prestations" :key="p.nom" class="card presta-card">
            <span class="presta-code">{{ p.code }}</span>
            <h3>{{ p.nom }}</h3>
            <p>{{ p.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="note">
          Les tarifs santé sont mensuels, par famille jusqu’à six personnes, et s’ajoutent aux
          cotisations mensuelles MAASH. Les listes d’hôpitaux, prestations détaillées, tarifs VIP,
          plafonds et exclusions restent à fournir par MAASH.
        </div>
      </div>
    </section>
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
</style>