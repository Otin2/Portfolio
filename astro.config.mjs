import { defineConfig } from 'astro/config'
import compress from 'astro-compress'

export default defineConfig({
  site: 'https://otin2.github.io',
  base: '/Portfolio/',
  integrations: [compress()],
})
