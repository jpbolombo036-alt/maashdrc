<script setup>
import { maash, prosoc, cibles } from '../data/maashData'
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Programme PROSOC</h1>
        <p>{{ prosoc.resume }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div>
          <span class="badge">Fonctionnalités</span>
          <h2 class="section-title">Ce que fait l’application Prosoc</h2>
          <ul class="list-check">
            <li v-for="f in prosoc.fonctionnalites" :key="f">{{ f }}</li>
          </ul>
        </div>
        <div>
          <span class="badge">Rôles utilisateurs</span>
          <h2 class="section-title">Catégories d’utilisateurs</h2>
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
          <h3>Protection des données</h3>
          <p>{{ prosoc.regleDonnees }}</p>
        </div>
        <div class="card">
          <div class="icon"><AppIcon name="users" /></div>
          <h3>Publics concernés</h3>
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
          <h2>Adhérez sur MAASH dès maintenant</h2>
          <p>
            Adhésion, paiement des cotisations et suivi de votre dossier en ligne,
            en toute simplicité.
          </p>
        </div>
        <a :href="maash.prosocAppUrl" class="btn btn-white" target="_blank" rel="noopener">
          Adhérer sur MAASH
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
</style>