import type { Locale } from '../config/site';

/**
 * Texty rozhraní - položky menu, popisky tlačítek, texty formuláře.
 *
 * Sem patří jen krátké řetězce, které jsou součástí ovládání webu.
 * Souvislé texty (popis apartmánu, FAQ, výlety) patří do src/content/
 * jako Markdown, aby se daly editovat bez zásahu do kódu.
 *
 * Typ UiKey hlídá, že angličtina nemůže mít méně klíčů než čeština -
 * chybějící překlad shodí build, ne až návštěvníka.
 */
const cs = {
  'nav.about': 'Ubytování',
  'nav.amenities': 'Vybavení',
  'nav.gallery': 'Galerie',
  'nav.trips': 'Výlety',
  'nav.faq': 'Časté dotazy',
  'nav.bookings': 'Rezervace',
  'nav.contacts': 'Kontakt',

  'nav.openMenu': 'Otevřít menu',
  'nav.closeMenu': 'Zavřít menu',
  'nav.skipToContent': 'Přejít k obsahu',
  'nav.switchLanguage': 'English',

  'hero.cta': 'Zjistit dostupnost',

  'form.name': 'Jméno',
  'form.email': 'E-mail',
  'form.message': 'Vaše zpráva (termín, počet osob…)',
  'form.consent': 'Souhlasím se zpracováním osobních údajů za účelem vyřízení této poptávky.',
  'form.submit': 'Odeslat',
  'form.required': 'Povinné pole',

  'docs.rules': 'Provozní řád',
  'docs.gdpr': 'Zpracování osobních údajů',

  'error.404.title': 'Stránka nenalezena',
  'error.404.text': 'Taková stránka tu není. Zkuste se vrátit na úvod.',
  'error.404.back': 'Zpět na úvod',

  'footer.rights': 'Všechna práva vyhrazena',
} as const;

export type UiKey = keyof typeof cs;

const en: Record<UiKey, string> = {
  'nav.about': 'Accommodation',
  'nav.amenities': 'Amenities',
  'nav.gallery': 'Gallery',
  'nav.trips': 'Day trips',
  'nav.faq': 'FAQ',
  'nav.bookings': 'Booking',
  'nav.contacts': 'Contact',

  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'nav.skipToContent': 'Skip to content',
  'nav.switchLanguage': 'Čeština',

  'hero.cta': 'Check availability',

  'form.name': 'Name',
  'form.email': 'E-mail',
  'form.message': 'Your message (dates, number of guests…)',
  'form.consent': 'I agree to the processing of my personal data for the purpose of handling this enquiry.',
  'form.submit': 'Send',
  'form.required': 'Required field',

  'docs.rules': 'House rules',
  'docs.gdpr': 'Personal data processing',

  'error.404.title': 'Page not found',
  'error.404.text': 'This page does not exist. Try going back to the homepage.',
  'error.404.back': 'Back to homepage',

  'footer.rights': 'All rights reserved',
};

const translations: Record<Locale, Record<UiKey, string>> = { cs, en };

/** Vrátí překladovou funkci pro daný jazyk. */
export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return translations[locale][key];
  };
}
