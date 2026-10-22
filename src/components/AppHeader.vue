<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from '../components/AppIcon.vue'
import { useContent } from '../i18n/useContent'
import { setLocale } from '../i18n'

const { t, locale } = useI18n()
const { maash } = useContent()

const menuOpen = ref(false)

const links = [
  { to: '/', key: 'accueil' },
  { to: '/presentation', key: 'presentation' },
  { to: '/gouvernance', key: 'gouvernance' },
  { to: '/services', key: 'services' },
  { to: '/prosoc', key: 'prosoc' },
  { to: '/adhesion', key: 'adhesion' },
  { to: '/activites', key: 'activites' },
  { to: '/contact', key: 'contact' },
]

function closeMenu() {
  menuOpen.value = false
}

const isDark = ref(document.documentElement.dataset.theme === 'dark')

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const langOpen = ref(false)
// Langue active lue depuis vue-i18n (persistée en localStorage par setLocale)
const currentLang = computed(() => locale.value)

const langOptions = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ln', label: 'Lingala', flag: '🇨🇩' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]

function toggleLangMenu() {
  langOpen.value = !langOpen.value
}

function closeLangMenu(e) {
  if (!e.target.closest || !e.target.closest('.lang-switcher')) {
    langOpen.value = false
  }
}

function setLang(code) {
  langOpen.value = false
  setLocale(code) // réactif via vue-i18n : ni cookie, ni rechargement de page
}

onMounted(() => document.addEventListener('click', closeLangMenu))
onUnmounted(() => document.removeEventListener('click', closeLangMenu))
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <span class="brand-mark">
          <img src="/logo.jpg" alt="Logo officiel MAASH" class="brand-logo" />
        </span>
        <span class="brand-copy">
          <span class="brand-text">MAASH</span>
          <span class="brand-tagline">PROSOC · RDC</span>
        </span>
      </router-link>

      <button
        class="burger"
        type="button"
        :aria-label="t('ui.burger.open')"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="nav" :class="{ open: menuOpen }">
        <div class="nav-links">
          <router-link
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            exact-active-class="active"
            @click="closeMenu"
          >
            {{ t('ui.nav.' + link.key) }}
          </router-link>
        </div>

        <div class="nav-actions">
          <a
            :href="maash.prosocLoginUrl"
            class="btn btn-outline nav-cta nav-login"
          >
            {{ t('ui.nav.login') }}
          </a>
          <a
            :href="maash.prosocAdhesionUrl"
            class="btn btn-primary nav-cta"
          >
            {{ t('ui.nav.join') }}
          </a>
        </div>

        <button
          class="theme-toggle"
          type="button"
          :aria-label="isDark ? t('ui.theme.toLight') : t('ui.theme.toDark')"
          :aria-pressed="isDark"
          :title="isDark ? t('ui.theme.lightTitle') : t('ui.theme.darkTitle')"
          @click="toggleTheme"
        >
          <svg
            v-if="!isDark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4.5" />
            <path
              d="M12 1.5v2.5M12 20v2.5M4.57 4.57l1.77 1.77M17.66 17.66l1.77 1.77M1.5 12H4M20 12h2.5M4.57 19.43l1.77-1.77M17.66 6.34l1.77-1.77"
            />
          </svg>
        </button>

        <div class="lang-switcher">
          <button
            class="theme-toggle lang-btn"
            type="button"
            :aria-label="t('ui.lang.choose')"
            :aria-expanded="langOpen"
            :title="t('ui.lang.title')"
            @click.stop="toggleLangMenu"
          >
            <AppIcon name="globe" />
          </button>
          <div v-if="langOpen" class="lang-menu" role="menu">
            <button
              v-for="l in langOptions"
              :key="l.code"
              type="button"
              role="menuitem"
              class="lang-item"
              :class="{ active: l.code === currentLang }"
              @click="setLang(l.code)"
            >
              <span class="lang-flag" aria-hidden="true">{{ l.flag }}</span>
              {{ l.label }}
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--white) 94%, transparent);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 8px 30px rgba(6, 78, 59, 0.07);
}

.site-header::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 3px;
  background: linear-gradient(90deg, var(--green-900), var(--green-500), #fbbf24);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  min-height: 80px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: inherit;
  flex-shrink: 0;
  margin-right: 1rem;
  min-width: 148px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(145deg, var(--green-50), var(--white));
  box-shadow: inset 0 0 0 1px rgba(5, 150, 105, 0.16), 0 5px 15px rgba(6, 78, 59, 0.1);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}

.brand-logo {
  width: 43px;
  height: 43px;
  object-fit: contain;
  border-radius: 50%;
  flex-shrink: 0;
}

.brand-text {
  line-height: 1.1;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--green-800), var(--green-500));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  transition: filter 0.2s ease;
}

.brand-tagline {
  color: var(--ink-soft);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1;
}

.brand:hover .brand-text {
  filter: brightness(1.15) saturate(1.1);
}

.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
}

.nav-links,
.nav-actions {
  display: flex;
  align-items: center;
}

.nav-links {
  gap: 0.1rem;
  padding: 0.28rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: color-mix(in srgb, var(--green-50) 42%, var(--white));
}

.nav-actions {
  gap: 0.45rem;
}

.nav-link {
  padding: 0.48rem 0.72rem;
  border-radius: 999px;
  color: var(--ink-soft);
  font-weight: 500;
  font-size: 0.92rem;
}

.nav-link:hover {
  color: var(--green-800);
  background: var(--green-50);
}

.nav-link.active {
  color: var(--white);
  background: var(--green-700);
}

.nav-cta {
  margin-left: 0;
  padding: 0.62rem 1.05rem;
  box-shadow: 0 5px 14px rgba(4, 120, 87, 0.16);
}

.nav-login {
  box-shadow: none;
}

/* Écrans moyens : on resserre la navigation pour dégager la marque MAASH */
@media (max-width: 1200px) {
  .nav-link {
    padding: 0.5rem 0.55rem;
    font-size: 0.88rem;
  }

  .nav {
    gap: 0.55rem;
  }

  .nav-actions {
    gap: 0.3rem;
  }

  .nav-cta {
    padding: 0.5rem 0.8rem;
  }
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.burger span {
  width: 24px;
  height: 2px;
  background: var(--green-800);
  border-radius: 2px;
}

@media (max-width: 960px) {
  .burger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 1.25rem 1.5rem;
    gap: 0.8rem;
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow-md);
    display: none;
  }

  .nav.open {
    display: flex;
  }

  .nav-links,
  .nav-actions {
    align-items: stretch;
    flex-direction: column;
    width: 100%;
  }

  .nav-links {
    padding: 0.35rem;
    border-radius: 14px;
  }

  .nav-link,
  .nav-cta {
    width: 100%;
    text-align: center;
  }

  .nav-actions {
    gap: 0.55rem;
  }
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--white);
  color: var(--green-800);
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 0;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.theme-toggle:hover {
  background: var(--green-50);
  color: var(--green-700);
}

.theme-toggle svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 960px) {
  .header-inner {
    min-height: 72px;
  }

  .brand {
    min-width: 0;
    margin-right: 0;
  }

  .brand-mark {
    width: 44px;
    height: 44px;
    border-radius: 13px;
  }

  .brand-logo {
    width: 37px;
    height: 37px;
  }

  .theme-toggle {
    margin-left: 0;
    margin-top: 0.5rem;
    align-self: flex-start;
  }
}

@media (max-width: 420px) {
  .brand-tagline {
    display: none;
  }

  .brand-text {
    font-size: 1.2rem;
  }
}

.lang-switcher {
  position: relative;
  margin-left: 0.5rem;
}

.lang-switcher .theme-toggle {
  margin-left: 0;
}

.lang-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  min-width: 175px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  padding: 0.35rem;
  z-index: 60;
  display: flex;
  flex-direction: column;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: 100%;
  padding: 0.55rem 0.75rem;
  border: none;
  background: none;
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--ink);
  cursor: pointer;
  text-align: left;
}

.lang-item:hover {
  background: var(--green-50);
}

.lang-item.active {
  background: var(--green-100);
  color: var(--green-800);
  font-weight: 600;
}

.lang-flag {
  font-size: 1.05rem;
  line-height: 1;
}

@media (max-width: 960px) {
  .lang-switcher {
    margin-left: 0;
    align-self: flex-start;
  }

  .lang-menu {
    left: 0;
    right: auto;
  }
}
</style>
