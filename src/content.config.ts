import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Obsahové kolekce.
 *
 * Každá sekce webu má vlastní schéma. Když v obsahovém souboru chybí
 * povinné pole nebo je překlep v názvu klíče, spadne build s konkrétní
 * hláškou - rozbitá stránka se nenasadí.
 *
 * Soubory jsou zrcadlové: co existuje v cs/, musí existovat i v en/.
 */

const photo = z.object({
  /** Cesta relativní k src/fotky/, např. "sekce/loznice.jpg". */
  file: z.string(),
  /** Popis pro odečítače obrazovky a pro případ, že se fotka nenačte. */
  alt: z.string(),
});

const hero = defineCollection({
  loader: glob({ base: 'src/content', pattern: '{cs,en}/hero.md' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    photo,
  }),
});

const accommodation = defineCollection({
  loader: glob({ base: 'src/content', pattern: '{cs,en}/accommodation.md' }),
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    tagline: z.string(),
    /** Fotky se prokládají mezi bloky textu v pořadí, v jakém jsou tady. */
    photos: z.array(photo),
  }),
});

const amenities = defineCollection({
  loader: glob({ base: 'src/content', pattern: '{cs,en}/amenities.md' }),
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    /** Šest karet s ikonou. Ikona je název z komponenty Icon.astro. */
    cards: z.array(
      z.object({
        icon: z.enum(['bed', 'kitchen', 'pool', 'parking', 'balcony', 'wifi']),
        title: z.string(),
        text: z.string(),
      }),
    ),
    /** Čtyři dlaždice s fotkou a popiskem. */
    tiles: z.array(photo.extend({ title: z.string() })),
  }),
});

const faq = defineCollection({
  loader: glob({ base: 'src/content', pattern: '{cs,en}/faq.md' }),
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    items: z.array(z.object({ question: z.string(), answer: z.string() })),
    documents: z.array(z.object({ label: z.string(), file: z.string() })),
  }),
});

const contact = defineCollection({
  loader: glob({ base: 'src/content', pattern: '{cs,en}/contact.md' }),
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    contactLabel: z.string(),
    providerLabel: z.string(),
    addressLabel: z.string(),
    mapLabel: z.string(),
    provider: z.array(z.string()),
    address: z.array(z.string()),
  }),
});

const booking = defineCollection({
  loader: glob({ base: 'src/content', pattern: '{cs,en}/booking.md' }),
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    /** Text, který se zobrazí, kdyby se rezervační systém nenačetl. */
    fallback: z.string(),
    inquiryHeading: z.string(),
    inquiryText: z.string(),
    thanksHeading: z.string(),
    thanksText: z.string(),
  }),
});

const gallery = defineCollection({
  loader: glob({ base: 'src/content', pattern: '{cs,en}/gallery.md' }),
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    /** Obecný popis pro fotku, která zatím nemá vlastní popisek. */
    fallbackAlt: z.string(),
    /**
     * Popisky podle názvu souboru ve složce src/fotky/galerie/.
     * Fotka bez popisku se zobrazí taky - jen dostane obecný popis.
     */
    captions: z.record(z.string(), z.string()),
  }),
});

const trips = defineCollection({
  loader: glob({ base: 'src/content/trips', pattern: '{cs,en}/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Vzdálenost nebo doba cesty, např. "2 km" nebo "20 minut autem". */
    distance: z.string(),
    order: z.number(),
    photo: photo.optional(),
    link: z.string().url().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ base: 'src/content/news', pattern: '{cs,en}/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  hero,
  accommodation,
  amenities,
  gallery,
  faq,
  contact,
  booking,
  trips,
  news,
};
