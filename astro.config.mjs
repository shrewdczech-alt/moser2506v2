// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Kam se web staví, řídí proměnná DEPLOY_TARGET:
 *
 *   nenastaveno  - lokální vývoj, web běží v kořeni (http://localhost:4321/)
 *   preview      - náhled na shrewdczech-alt.github.io/moser2506v2/
 *   production   - ostrá doména moser2506.cz
 *
 * Při přepnutí na ostrou doménu se mění jen tahle hodnota ve workflow
 * a přidá se public/CNAME.
 */
const target = process.env.DEPLOY_TARGET ?? 'dev';
const isPreview = target === 'preview';
const isProduction = target === 'production';

export default defineConfig({
  site: isProduction ? 'https://moser2506.cz' : 'https://shrewdczech-alt.github.io',
  // Podsložka jen u náhledu; lokálně i na ostré doméně běží web v kořeni.
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
