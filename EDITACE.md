# Jak upravit web

Web se upravuje změnou souborů v tomhle repozitáři. Po uložení změny do větve
`main` se web sám přestaví a nasadí, obvykle do dvou minut.

Můžete to dělat dvěma způsoby:

- **Přes web GitHubu** — nic se neinstaluje, funguje i z mobilu. Otevřete
  soubor, kliknete na ikonu tužky, upravíte, dole kliknete na
  **Commit changes**.
- **V počítači** — soubor upravíte v editoru a změnu pošlete přes git.

Dál je popsaný první způsob.

---

## Chci opravit text na stránce

Texty jsou ve složce `src/content/`. Česká verze je v `cs/`, anglická v `en/`.
Soubory se jmenují stejně, takže k `cs/accommodation.md` patří
`en/accommodation.md`.

| Sekce na webu | Soubor |
|---|---|
| Úvodní obrázek s nadpisem | `hero.md` |
| Ubytování | `accommodation.md` |
| Vybavení | `amenities.md` |
| Galerie (nadpis a popisky fotek) | `gallery.md` |
| Časté dotazy | `faq.md` |
| Rezervace a poptávkový formulář | `booking.md` |
| Kontakt | `contact.md` |

V souboru jsou dvě části. Nahoře mezi třemi pomlčkami `---` jsou krátké údaje
jako nadpisy. Pod nimi je běžný text.

**Když měníte text, změňte ho v obou jazycích.** Pokud anglickou verzi
neupravíte, zůstane tam ta stará.

### Formátování textu

```markdown
Odstavce oddělujte prázdným řádkem.

**Tučný text** napíšete mezi dvě hvězdičky.

- Odrážka
- Další odrážka

[Text odkazu](https://adresa.cz)
```

---

## Chci přidat nebo vyměnit fotku v galerii

Fotky jsou ve složce `src/fotky/galerie/`. **Pořadí v galerii určuje číslo
na začátku názvu souboru.**

- **Přidat fotku:** nahrajte soubor s názvem ve tvaru `22-nazev.jpg`.
- **Vyměnit fotku:** nahrajte novou se **stejným názvem** jako stará.
- **Odebrat fotku:** smažte soubor.
- **Změnit pořadí:** přejmenujte soubory tak, aby čísla seděla.

Fotku můžete nahrát rovnou z telefonu, zmenšovat ji nemusíte — web si sám
vyrobí zmenšené verze pro mobil i pro velkou obrazovku.

### Popisek fotky

Ke každé fotce patří popisek pro nevidomé návštěvníky a pro vyhledávače.
Přidejte ho do `src/content/cs/gallery.md` a `en/gallery.md` do sekce
`captions:`, pod názvem souboru:

```yaml
captions:
  22-nazev.jpg: Popis toho, co je na fotce vidět
```

Fotka bez popisku se zobrazí taky, jen dostane obecný popis.

---

## Chci nahradit provozní řád nebo GDPR

Dokumenty jsou ve složce `public/dokumenty/`:

| Dokument | Soubor |
|---|---|
| Provozní řád (česky) | `provozni-rad.pdf` |
| House rules (anglicky) | `accommodation-rules.pdf` |
| Zpracování osobních údajů | `gdpr.pdf` |
| Personal data processing | `gdpr-en.pdf` |

**Nahrajte nový soubor pod stejným názvem.** Adresa dokumentu se tím nezmění,
takže odkaz, který jste někomu poslal e-mailem, bude dál fungovat a povede na
aktuální verzi.

---

## Chci přidat tip na výlet

Vytvořte nový soubor v `src/content/trips/cs/` a stejně pojmenovaný
v `trips/en/`. Podívejte se do některého ze stávajících, je to nejrychlejší.

```markdown
---
title: Název výletu
distance: 12 km
order: 5
---

Popis výletu.
```

`order` určuje pořadí karet na webu.

---

## Chci přidat aktualitu

Vytvořte soubor v `src/content/news/cs/` a `news/en/`:

```markdown
---
title: Nadpis novinky
date: 2026-09-18
---

Text novinky.
```

**Sekce Aktuality se na webu objeví, jen když v ní něco je.** Novinky starší
než rok se přestanou zobrazovat automaticky — prázdná nebo zastaralá sekce
novinek působí hůř, než kdyby tam nebyla.

---

## Chci změnit telefon, e-mail nebo adresu

Všechno je v jednom souboru: `src/config/site.ts`. Je tam i identifikátor
rezervačního systému Previo a přístupový klíč formuláře Web3Forms.

---

## Chci změnit popisek v menu nebo ve formuláři

Krátké texty ovládání webu jsou v `src/i18n/ui.ts` — česky nahoře, anglicky
dole. Ke každému českému textu musí existovat anglický protějšek, jinak se
web nenasadí a GitHub vám pošle e-mail s upozorněním.

---

## Co když něco pokazím

Nic se neztratí. Každá změna je uložená v historii a dá se vrátit.

Když v souboru uděláte chybu (třeba smažete povinný řádek), web se **nenasadí**
a zůstane viset ta poslední funkční verze. Na e-mail dostanete zprávu, že
poslední změna neprošla.
