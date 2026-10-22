import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '../i18n'
import HomeView from '../views/HomeView.vue'

const DEFAULT_TITLE = "MAASH — Mutuelle Autorisée d'Assistance Socio-Humanitaire"
const DEFAULT_DESCRIPTION =
  "MAASH — Mutuelle Autorisée d'Assistance Socio-Humanitaire. Protégés en toute dignité, à bas prix. Programme PROSOC, Kinshasa, République démocratique du Congo."

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: HomeView,
    meta: {
      title: '', // titre par défaut du site
      description:
        'MAASH à Kinshasa : mutuelle de protection sociale PROSOC, adhésion dès 2 USD par mois, 4 branches de prestations, couverture famille.',
    },
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: () => import('../views/PresentationView.vue'),
    meta: {
      title: 'Présentation',
      description:
        'Raison d’être, missions, vision et principes de MAASH, mutuelle de protection sociale sans but lucratif à Kinshasa (RDC).',
    },
  },
  {
    path: '/gouvernance',
    name: 'gouvernance',
    component: () => import('../views/GouvernanceView.vue'),
    meta: {
      title: 'Gouvernance',
      description:
        'Gouvernance MAASH : assemblée générale, conseil d’administration, conseil d’exécution et les 12 blocs organisationnels de la mutuelle.',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Services et prestations',
      description:
        'Les 4 branches de prestations MAASH (pensions, communautaire, santé, spécialisée) et les prestations A à J pour les affiliés.',
    },
  },
  {
    path: '/prosoc',
    name: 'prosoc',
    component: () => import('../views/ProsocView.vue'),
    meta: {
      title: 'Programme PROSOC',
      description:
        'PROSOC : programme de protection sociale de MAASH, application Prosoc, rôles utilisateurs, Mobile Money et protection des données.',
    },
  },
  {
    path: '/adhesion',
    name: 'adhesion',
    component: () => import('../views/AdhesionView.vue'),
    meta: {
      title: 'Adhésion et tarifs',
      description:
        'Formules MAASH de Solo (2 USD) à F6 (9 USD) par mois : documents requis, personnes à charge et paiement Mobile Money ou Visa.',
    },
  },
  {
    path: '/activites',
    name: 'activites',
    component: () => import('../views/ActivitesView.vue'),
    meta: {
      title: 'Activités',
      description:
        'Découvrez les activités de MAASH : consultation, accompagnement, échanges communautaires et soutien socio-humanitaire.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact',
      description:
        'Contact MAASH : adresse du siège à Ngaliema (Kinshasa), téléphones, WhatsApp, e-mails et horaires d’ouverture.',
    },
  },
  {
    path: '/recrutement',
    name: 'recrutement',
    component: () => import('../views/RecrutementView.vue'),
    meta: {
      title: 'Recrutement',
      description:
        'Postes ouverts chez MAASH : agent terrain, chef d’équipe, superviseur… candidatez en ligne et transmettez votre CV.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'introuvable',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: 'Page introuvable',
      description: 'La page demandée n’existe pas ou a été déplacée.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

function setMeta(selector, content) {
  if (!content) return
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

/**
 * Applique <title> et les meta (description, Open Graph, Twitter) pour la
 * route donnée, dans la langue active. Exporté pour être rappelé par
 * main.js quand l'utilisateur change de langue.
 */
export function applySeo(to) {
  const g = i18n.global
  const titleKey = `ui.meta.${to.name}.title`
  const descKey = `ui.meta.${to.name}.description`
  const title = g.te(titleKey)
    ? g.t(titleKey)
    : to.meta.title
      ? `${to.meta.title} — MAASH`
      : DEFAULT_TITLE
  const description = g.te(descKey) ? g.t(descKey) : to.meta.description || DEFAULT_DESCRIPTION

  document.title = title
  setMeta('meta[name="description"]', description)
  setMeta('meta[property="og:title"]', title)
  setMeta('meta[property="og:description"]', description)
  setMeta('meta[property="og:url"]', location.origin + to.fullPath)
  setMeta('meta[name="twitter:title"]', title)
  setMeta('meta[name="twitter:description"]', description)

  // La page 404 ne doit pas être indexée par Google
  if (to.name === 'introuvable') {
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex, follow')
  }
}

router.afterEach((to) => applySeo(to))

export default router
