// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Náhled běží na github.io v podsložce /moser2506v2/, ostrý web v kořeni
 * vlastní domény. Přepíná to proměnná DEPLOY_TARGET nastavená v GitHub Actions,
 * takže se konfigurace při přepnutí domény nemusí ručně měnit.
 */
const isPreview = process.env.DEPLOY_TARGET !== 'production';

export default defineConfig({
  site: isPreview ? 'https://shrewdczech-alt.github.io' : 'https://moser2506.cz',
  base: isPreview ? '/moser2506v2' : '/',
  trailingSlash: 'always',

  build: {
    // Výchozí '_astro' by na GitHub Pages nefungovalo - Jekyll i samotný server
    // blokují cesty začínající podtržítkem, takže by se nenačetlo CSS.
    assets: 'assets',
    format: 'directory',
  },

  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs',
    routing: {
      // Čeština zůstává v kořeni (/), angličtina v /en/ - stejně jako dnes.
      prefixDefaultLocale: false,
    },
  },
});
