/**
 * Accès réactif aux contenus institutionnels selon la langue active.
 *
 * Les slices renvoyées sont des computed : dans les templates Vue, elles
 * s'auto-déroulent, donc `{{ maash.slogan }}` continue de fonctionner
 * exactement comme avant avec l'ancien maashData.js — mais en changeant de
 * langue immédiatement, sans rechargement.
 */
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import fr from '../locales/fr'
import en from '../locales/en'
import es from '../locales/es'
import ln from '../locales/ln'

const catalogs = { fr, en, es, ln }

function pick(locale, path) {
  const root = catalogs[locale] || fr
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), root)
}

export function useContent() {
  const { locale } = useI18n()

  const slice = (path) =>
    computed(() => {
      const value = pick(locale.value, path)
      // Repli sur le français si la clé manque dans la langue active
      return value === undefined ? pick('fr', path) : value
    })

  return {
    maash: slice('maash'),
    presentation: slice('presentation'),
    gouvernance: slice('gouvernance'),
    branches: slice('branches'),
    prosoc: slice('prosoc'),
    cibles: slice('cibles'),
    hopitaux: slice('hopitaux'),
    stats: slice('ui.home.stats'),
  }
}
