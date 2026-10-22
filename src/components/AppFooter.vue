<script setup>
import { useI18n } from 'vue-i18n'
import { useContent } from '../i18n/useContent'

const { t } = useI18n()
const { maash } = useContent()

const annee = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="footer-brand">
          <img src="/logo.jpg" alt="Logo officiel MAASH" class="footer-logo" />
          <strong>MAASH</strong>
        </div>
        <p class="footer-desc">{{ t('ui.footer.desc', { name: maash.nomComplet }) }}</p>
        <p class="footer-slogan">« {{ maash.slogan }} »</p>
      </div>

      <div>
        <h4>{{ t('ui.footer.navigation') }}</h4>
        <ul>
          <li><router-link to="/presentation">{{ t('ui.nav.presentation') }}</router-link></li>
          <li><router-link to="/services">{{ t('ui.nav.services') }}</router-link></li>
          <li><router-link to="/prosoc">{{ t('ui.prosoc.h1') }}</router-link></li>
          <li><router-link to="/adhesion">{{ t('ui.adhesion.h1') }}</router-link></li>
          <li><router-link to="/activites">{{ t('ui.nav.activites') }}</router-link></li>
          <li><router-link to="/recrutement">{{ t('ui.nav.recrutement') }}</router-link></li>
          <li>
            <a :href="maash.apkUrl" download>{{ t('ui.common.downloadApp') }} (APK)</a>
          </li>
        </ul>
      </div>

      <div>
        <h4>{{ t('ui.footer.contact') }}</h4>
        <ul>
          <li>{{ maash.adresse.ligne1 }}</li>
          <li>{{ maash.adresse.ligne2 }}</li>
          <li>{{ maash.adresse.ligne3 }}, {{ maash.adresse.pays }}</li>
          <li><a :href="maash.telephoneHref">{{ maash.telephone }}</a> (WhatsApp)</li>
          <li><a :href="`mailto:${maash.email}`">{{ maash.email }}</a></li>
        </ul>
      </div>

      <div>
        <h4>{{ t('ui.footer.hours') }}</h4>
        <ul>
          <li v-for="h in maash.horaires" :key="h.jour">
            <strong>{{ h.jour }}</strong> : {{ h.heure }}
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>{{ t('ui.footer.rights', { year: annee }) }}</span>
        <span>{{ t('ui.footer.created', { date: maash.creation }) }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--green-900);
  color: var(--green-100);
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.3fr 1fr;
  gap: 2rem;
  padding: 3rem 1.25rem 2rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--white);
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.footer-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  background: var(--white);
  flex-shrink: 0;
}

.footer-desc {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.footer-slogan {
  font-style: italic;
  color: var(--white);
  font-size: 0.9rem;
  margin: 0;
}

.site-footer h4 {
  color: var(--white);
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.9rem;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.site-footer li {
  margin-bottom: 0.45rem;
}

.site-footer a {
  color: var(--green-100);
}

.site-footer a:hover {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  font-size: 0.82rem;
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
