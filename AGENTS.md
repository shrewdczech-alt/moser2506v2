# Pravidla projektu moser2506v2

Statický web apartmánu Moser 2506 (Karlovy Vary). Astro, nasazení na GitHub Pages.

## Cíl architektury

Web musí být snadno spravovatelný bez zásahu do kódu. Z toho plyne vše ostatní.

## Závazná pravidla

- **Obsah nikdy nepatří do komponent.** Souvislé texty jdou do `src/content/`
  jako Markdown, krátké texty rozhraní do `src/i18n/ui.ts`. Komponenta obsah
  jen vykresluje.
- **Každý údaj má právě jedno místo.** Kontakty a ID externích služeb jsou
  v `src/config/site.ts`. Nikde jinde se needitují.
- **Jazyková metadata se neodvozují ručně.** `lang`, `hreflang`, `og:locale`
  a canonical generuje `Layout.astro` z předaného jazyka.
- **Fotky patří do `src/fotky/`** (tam je Astro optimalizuje), **dokumenty do
  `public/dokumenty/`** s pevnými názvy (stabilní URL, nahrazují se přepsáním).
- **Složka s vygenerovanými assety se nesmí jmenovat `_astro`.** GitHub Pages
  blokuje cesty začínající podtržítkem. Nastaveno v `astro.config.mjs`.
- **`public/CNAME` se přidá až při přepnutí ostré domény.** Dřív by nasazení
  přetáhlo `moser2506.cz` z původního repozitáře.

## Jazyk

- Identifikátory, názvy souborů a komponent: anglicky.
- Komentáře v kódu: česky.
- Obsah webu: v jazyce dané mutace.

## UI změny

Před dokončením produkční změny rozhraní projít relevantní `better-*` skills
a `interface-review`. Web se nepředělává — vzhled odpovídá původnímu webu,
jen dotaženě.

## Kontrola před commitem

```bash
npm run build
```

Build musí projít. Chybějící překlad nebo neúplný obsahový soubor ho shodí
záměrně — je to pojistka, ne překážka.
