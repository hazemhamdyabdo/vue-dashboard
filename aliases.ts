import { fileURLToPath } from 'url'

export const aliases = {
  alias: {
    '@composables': fileURLToPath(
      new URL('./src/composables', import.meta.url)
    ),
    '@features': fileURLToPath(
      new URL('./src/features', import.meta.url)
    ),
    '@layouts': fileURLToPath(
      new URL('./src/layouts', import.meta.url)
    ),
    '@components': fileURLToPath(
      new URL('./src/components', import.meta.url)
    ),
    '@assets': fileURLToPath(
      new URL('./src/assets', import.meta.url)
    ),
    '@store': fileURLToPath(
      new URL('./src/store', import.meta.url)
    ),
    '@types': fileURLToPath(
      new URL('./src/types', import.meta.url)
    ),
    '@utils': fileURLToPath(
      new URL('./src/utils', import.meta.url)
    ),

  }
}
