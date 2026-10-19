/**
 * Configuration i18n — vue-i18n (remplace l'ancien widget Google Translate,
 * arrêté par Google le 1er octobre 2026).
 *
 * La langue est stockée en localStorage (stockage first-party, jamais bloqué)
 * et appliquée réactivement : aucun cookie, aucun rechargement de page.
 *
 * Pour ajouter une langue (ex. zh, hi, ar) :
 *   1. créer src/locales/xx.js (copier fr.js et traduire),
 *   2. l'importer et l'ajouter dans `messages` ci-dessous,
 *   3. l'ajouter à AVAILABLE_LOCALES et dans `langOptions` (AppHeader.vue).
 */
import { createI18n } from 'vue-i18n'
import fr from '../locales/fr'
import en from '../locales/en'
import es from '../locales/es'
import ln from '../locales/ln'

export const AVAILABLE_LOCALES = ['fr', 'en', 'es', 'ln']

const messages = { fr, en, es, ln }

function initialLocale() {
  try {
    const saved = localStorage.getItem('maash-lang')
    if (saved && AVAILABLE_LOCALES.includes(saved)) return saved
  } catch (e) {}
  return 'fr'
}

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale(),
  fallbackLocale: 'fr',
  messages,
})

export function setLocale(code) {
  const locale = AVAILABLE_LOCALES.includes(code) ? code : 'fr'
  i18n.global.locale.value = locale
  document.documentElement.setAttribute('lang', locale)
  try {
    localStorage.setItem('maash-lang', locale)
  } catch (e) {}
}

// Reflète la langue active dans <html lang> dès le chargement (accessibilité / SEO)
document.documentElement.setAttribute('lang', i18n.global.locale.value)
