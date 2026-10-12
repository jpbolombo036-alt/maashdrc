<script setup>
import { ref } from 'vue'
import { maash } from '../data/maashData'

const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/presentation', label: 'Présentation' },
  { to: '/gouvernance', label: 'Gouvernance' },
  { to: '/services', label: 'Services' },
  { to: '/prosoc', label: 'PROSOC' },
  { to: '/adhesion', label: 'Adhésion' },
  { to: '/contact', label: 'Contact' },
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
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <img src="/logo.jpg" alt="Logo officiel MAASH" class="brand-logo" />
        <span class="brand-text">MAASH</span>
      </router-link>

      <button
        class="burger"
        type="button"
        aria-label="Ouvrir le menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="nav" :class="{ open: menuOpen }">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="active"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
        <a
          :href="maash.prosocAppUrl"
          class="btn btn-primary nav-cta"
          target="_blank"
          rel="noopener"
        >
          Adhérer
        </a>
        <a :href="maash.whatsappHref" class="btn btn-outline nav-cta" target="_blank" rel="noopener">
          WhatsApp
        </a>

        <button
          class="theme-toggle"
          type="button"
          :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
          :aria-pressed="isDark"
          :title="isDark ? 'Mode clair' : 'Mode sombre'"
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
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--white);
  border-bottom: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: inherit;
}

.brand-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: 50%;
  flex-shrink: 0;
}

.brand-text {
  line-height: 1.15;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--green-900);
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.5rem 0.8rem;
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
  margin-left: 0.5rem;
  padding: 0.55rem 1.2rem;
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
    top: 72px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 1.25rem 1.5rem;
    gap: 0.35rem;
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow-md);
    display: none;
  }

  .nav.open {
    display: flex;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 0.5rem;
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
  .theme-toggle {
    margin-left: 0;
    margin-top: 0.5rem;
    align-self: flex-start;
  }
}
</style>