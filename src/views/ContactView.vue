<script setup>
import { maash } from '../data/maashData'
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Contact</h1>
        <p>Nous sommes à votre écoute pour toute information sur MAASH et le programme PROSOC.</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div class="card contact-card">
          <div class="icon"><AppIcon name="pin" /></div>
          <h3>Adresse du siège</h3>
          <p>
            {{ maash.adresse.ligne1 }}<br />
            {{ maash.adresse.ligne2 }}<br />
            {{ maash.adresse.ligne3 }}<br />
            <strong>{{ maash.adresse.pays }}</strong>
          </p>

          <div class="icon icon-mt"><AppIcon name="phone" /></div>
          <h3>Téléphone et e-mail</h3>
          <p>
            Secrétariat : <a :href="maash.telephoneHref">{{ maash.telephone }}</a> (WhatsApp)<br />
            E-mail : <a :href="`mailto:${maash.email}`">{{ maash.email }}</a><br />
            Secrétariat (e-mail) : <a :href="`mailto:${maash.emailSecretariat}`">{{ maash.emailSecretariat }}</a>
          </p>
          <a :href="maash.whatsappHref" class="btn btn-primary" target="_blank" rel="noopener">
            Contacter par WhatsApp
          </a>
        </div>

        <div class="card contact-card">
          <div class="icon"><AppIcon name="clock" /></div>
          <h3>Horaires d’ouverture</h3>
          <div class="table-wrap" style="margin-bottom: 1.5rem">
            <table class="data">
              <tbody>
                <tr v-for="h in maash.horaires" :key="h.jour">
                  <td><strong>{{ h.jour }}</strong></td>
                  <td>{{ h.heure }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="icon"><AppIcon name="globe" /></div>
          <h3>Implantation</h3>
          <p>
            Couverture actuelle : districts de Tshangu, Mont-Amba, Funa et Lukunga à Kinshasa.
            Déploiement prévu dans les 24 communes de Kinshasa.
          </p>
          <div class="note">
            Domaine officiel prévu : <strong>{{ maash.domaine }}</strong> — disponibilité et
            réservation à vérifier. Lien cartographique : à compléter.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-card p {
  color: var(--ink-soft);
}

.contact-card .btn {
  margin-top: 0.5rem;
}

.icon-mt {
  margin-top: 1.5rem;
}
</style>