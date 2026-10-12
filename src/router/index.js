import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'accueil', component: HomeView },
  { path: '/presentation', name: 'presentation', component: () => import('../views/PresentationView.vue') },
  { path: '/gouvernance', name: 'gouvernance', component: () => import('../views/GouvernanceView.vue') },
  { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue') },
  { path: '/prosoc', name: 'prosoc', component: () => import('../views/ProsocView.vue') },
  { path: '/adhesion', name: 'adhesion', component: () => import('../views/AdhesionView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router