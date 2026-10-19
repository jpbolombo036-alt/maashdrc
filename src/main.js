import { createApp, watch } from 'vue'
import App from './App.vue'
import router, { applySeo } from './router'
import { i18n } from './i18n'
import './styles/main.css'

const app = createApp(App)
app.use(i18n)
app.use(router)

// Le titre et les meta SEO suivent la langue active (sinon l'onglet reste en français)
watch(i18n.global.locale, () => applySeo(router.currentRoute.value))

app.mount('#app')