import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueRouter from 'vue-router/vite'
import vueLayouts from 'vite-plugin-vue-layouts'
import ui from '@nuxt/ui/vite'
import appConfig from './app.config'
import { aliases } from './aliases'


// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      ...aliases
  },
  plugins: [
    vueRouter({
      dts: 'src/route-map.d.ts',
      routesFolder: ['src/features']
    }),
    vueLayouts(),
    vue(),
    ui(appConfig)
  ],
})
