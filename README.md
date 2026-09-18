# moser2506.cz

Statický web apartmánu Moser 2506 v Karlových Varech. Postavený v [Astru](https://astro.build),
nasazovaný na GitHub Pages.

Nahrazuje původní repozitář [moser2506](https://github.com/shrewdczech-alt/moser2506),
kde byl nacommitovaný statický export WordPressu.

## Jak web upravit

| Chci změnit | Kde |
|---|---|
| Text na stránce | `src/content/<jazyk>/…md` |
| Popisek v menu, na tlačítku nebo ve formuláři | `src/i18n/ui.ts` |
| Telefon, e-mail, adresu | `src/config/site.ts` |
| Fotku v galerii | `src/fotky/galerie/` — nahradit soubor, pořadí určuje číslo v názvu |
| Provozní řád nebo GDPR | `public/dokumenty/` — přepsat soubor stejným názvem |
| Barvy, velikosti písma, rozestupy | `src/styles/global.css`, sekce `:root` |

Po uložení změny a pushnutí do `main` se web nasadí sám. Podrobný návod
krok za krokem je v [EDITACE.md](EDITACE.md) — počítá s tím, že se edituje
přes web GitHubu, bez instalace čehokoli.

## Vývoj

```bash
npm install
npm run dev      # náhled na http://localhost:4321
npm run build    # ověření, že projde build
```

## Architektura

**Zdroj pravdy je tenhle repozitář.** Žádná databáze, žádné CMS, žádný server.
Push do `main` spustí GitHub Action, ta udělá build a nasadí výsledek.

Tři principy:

1. **Obsah není v kódu.** Komponenta umí vykreslit akordeon, ale neví, jaké
   otázky v něm jsou. Oprava překlepu se tak nikdy nedotkne souboru s logikou.
2. **Každý údaj má jedno místo.** Telefon je v `site.ts` jednou.
3. **Build kontroluje, co člověk zapomene.** Chybějící překlad nebo neúplný
   obsahový soubor shodí build — rozbitá stránka se nenasadí.

### Nasazení a domény

Konfigurace se řídí proměnnou `DEPLOY_TARGET` v `.github/workflows/deploy.yml`:

| `DEPLOY_TARGET` | Adresa |
|---|---|
| `preview` (výchozí) | `shrewdczech-alt.github.io/moser2506v2/` |
| `production` | `moser2506.cz` |

Do produkce se přepne změnou té hodnoty a přidáním `public/CNAME`. **Dokud
migrace neskončí, `CNAME` v repu být nesmí** — nasazení by přetáhlo ostrou
doménu z původního repozitáře.

### Tři věci, které řeší GitHub Pages

- Nasazuje se **přes artefakt, ne z větve**, takže se neaplikuje Jekyll.
- Assety se generují do `assets/`, ne do výchozího `_astro/` — GitHub Pages
  blokuje cesty začínající podtržítkem a nenačetlo by se CSS.
- V `public/.nojekyll` je pojistka pro případ návratu k nasazení z větve.

## Stav migrace

- [x] 1 — Kostra, i18n routing, nasazovací workflow
- [x] 2 — Převod obsahu, fotek a dokumentů z původního webu
- [x] 3 — Všechny sekce webu
- [x] 4 — Výlety, Aktuality, Previo, Formspree
- [x] 5 — `EDITACE.md`
- [ ] 6 — **Přepnutí ostré domény** (čeká na odsouhlasení)

Původní web na `moser2506.cz` běží beze změny, dokud se doména vědomě
nepřepne. Tenhle repozitář zatím nasazuje jen náhled.
