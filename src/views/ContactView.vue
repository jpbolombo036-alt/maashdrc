<script setup>
import { useI18n } from 'vue-i18n'
import AppIcon from '../components/AppIcon.vue'
import { useContent } from '../i18n/useContent'

const { t } = useI18n()
const { maash } = useContent()
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('ui.contact.h1') }}</h1>
        <p>{{ t('ui.contact.hero') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div class="card contact-card">
          <div class="icon"><AppIcon name="pin" /></div>
          <h3>{{ t('ui.contact.addressTitle') }}</h3>
          <p>
            {{ maash.adresse.ligne1 }}<br />
            {{ maash.adresse.ligne2 }}<br />
            {{ maash.adresse.ligne3 }}<br />
            <strong>{{ maash.adresse.pays }}</strong>
          </p>

          <div class="icon icon-mt"><AppIcon name="phone" /></div>
          <h3>{{ t('ui.contact.phoneEmailTitle') }}</h3>
          <p>
            {{ t('ui.contact.secretariat') }}
            <a :href="maash.telephoneHref">{{ maash.telephone }}</a> (WhatsApp)<br />
            {{ t('ui.contact.emailLabel') }}
            <a :href="`mailto:${maash.email}`">{{ maash.email }}</a><br />
            {{ t('ui.contact.secretariatEmail') }}
            <a :href="`mailto:${maash.emailSecretariat}`">{{ maash.emailSecretariat }}</a>
          </p>
          <a :href="maash.whatsappHref" class="btn btn-primary" target="_blank" rel="noopener">
            {{ t('ui.contact.whatsappBtn') }}
          </a>
        </div>

        <div class="card contact-card">
          <div class="icon"><AppIcon name="clock" /></div>
          <h3>{{ t('ui.contact.hoursTitle') }}</h3>
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
          <h3>{{ t('ui.contact.coverageTitle') }}</h3>
          <p>{{ t('ui.contact.coverageText') }}</p>
          <div class="note">{{ t('ui.contact.domainNote', { domaine: maash.domaine }) }}</div>
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