import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      // Les documents Word peuvent être verrouillés par Microsoft Word.
      // Ils ne nécessitent pas de rechargement à chaud.
      ignored: ['**/*.docx'],
    },
  },
})
