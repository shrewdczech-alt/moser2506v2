/**
 * Centrální konfigurace webu.
 * Kontakty a identifikátory externích služeb jsou jen tady - nikde jinde
 * v kódu se neopakují, takže změna telefonu je změna jednoho řádku.
 */
export const site = {
  phone: '+420 774 552 604',
  phoneHref: '+420774552604',
  email: 'info@moser2506.cz',

  address: {
    street: 'Chebská 398/17',
    city: 'Karlovy Vary',
    zip: '360 06',
  },

  mapUrl: 'https://maps.app.goo.gl/YvqerCvQwsqTx9DH9',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61591391640658',

  /** Rezervační systém Previo - ID ubytovacího zařízení. */
  previoId: '019f192c-8a59-7078-b541-bfc850fad53c',

  /** Web3Forms - přístupový klíč formuláře, na který chodí poptávky. */
  web3formsAccessKey: '5e62268b-588d-4ff9-a504-cc533739ade0',
} as const;

/** Podporované jazyky. Musí odpovídat i18n.locales v astro.config.mjs. */
export const locales = ['cs', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'cs';

/** Měna, kterou Previo nabídne návštěvníkovi podle jazyka stránky. */
export const currencyByLocale: Record<Locale, string> = {
  cs: 'CZK',
  en: 'EUR',
};
