import type { NuxtUiConfig } from '@nuxt/ui'
export default <NuxtUiConfig>{
  autoImport: {
    imports: [
      'vue',
      'vue-router',
      'pinia',
      {
        '@/store': ['useStore'],
        '@unhead/vue': ['useHead'],
      },
    ],
    dts: 'auto-imports.d.ts',
    vueTemplate: true,
  },
  colors: {
    primary: 'green',
    neutral: 'zinc'
  },

}
