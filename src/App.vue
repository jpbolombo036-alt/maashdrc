<script setup>
import { useI18n } from 'vue-i18n'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useContent } from './i18n/useContent'

const { t } = useI18n()
const { maash } = useContent()
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <main class="app-main">
      <router-view />
    </main>
    <AppFooter />
    <a
      :href="maash.whatsappHref"
      class="whatsapp-float"
      :aria-label="t('ui.common.whatsapp')"
      :title="t('ui.common.whatsapp')"
    >
      <svg class="whatsapp-logo" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 3.2A12.8 12.8 0 0 0 5.1 22.7L3.2 28.8l6.3-1.8A12.8 12.8 0 1 0 16 3.2Zm0 23.3a10.4 10.4 0 0 1-5.3-1.4l-.4-.2-3.7 1.1 1.1-3.6-.2-.4A10.4 10.4 0 1 1 16 26.5Zm5.7-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.6 5.6 5 .8.4 1.4.6 1.9.8.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"
        />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
}

.whatsapp-float {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 45;
  display: grid;
  place-items: center;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 8px 22px rgba(16, 185, 129, 0.32);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.whatsapp-float:hover {
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(16, 185, 129, 0.42);
}

.whatsapp-logo {
  width: 2rem;
  height: 2rem;
}

@media (max-width: 640px) {
  .whatsapp-float {
    right: 1rem;
    bottom: 1rem;
  }
}
</style>
