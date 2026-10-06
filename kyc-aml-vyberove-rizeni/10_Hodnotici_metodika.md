---
title: "Hodnoticí metodika výběrového řízení SENTINEL"
subtitle: "Horizont Privátní banka, a.s. · Interní · schváleno SteerCo 23. 9. 2026"
date: "23. 9. 2026"
---

> **Fiktivní cvičný dokument.** Výpočet je implementován v souboru `11_Hodnotici_model_a_arch.xlsx`.

# 1. Účel

Metodika zajišťuje, že výběr je transparentní, opakovatelný a obhajitelný před Procurementem, interním auditem a ČNB. Stojí na dvou principech: **striktní vyřazovací (K.O.) kritéria** a **předem schválený matematický model**, který vyvažuje cenu (TCO) a kvalitu řešení.

# 2. Proces hodnocení

| Krok | Kdo | Výstup |
|---|---|---|
| 1. Otevření nabídek (technická část) | Procurement + předsedkyně komise | Protokol o otevření |
| 2. Formální kontrola a K.O. brána | Komise | List 1_KO_brana |
| 3. Hodnocení Matice shody | Business analytička + vlastníci požadavků | List 2_Byznys |
| 4. Hodnocení Feasibility Study (nezávisle každý člen) | Hlasující členové komise | List 3_Arch_Sec |
| 5. Skriptované demo – ověření tvrzení | Komise + klíčoví uživatelé | Úprava sloupce „Ověřeno“ |
| 6. Delivery (reference, CV, SLA, plán) | Komise | List 4_Delivery |
| 7. Otevření cenové části a výpočet | Procurement | List 5_Cena |
| 8. BAFO se 2 nejlepšími, přepočet | Procurement + komise | Aktualizace listů 2 a 5 |
| 9. Hodnoticí zpráva a podpis hodnoticího archu | Komise, sponzor | List Hodnotici_arch |

Cenová část se otevírá **až po** dokončení kroků 2–6, aby cena neovlivnila hodnocení kvality.

# 3. K.O. kritéria (Pass/Fail)

Za věci, které jsou pro Banku nezbytné, se body nedávají. Nesplnění jediného K.O. kritéria znamená vyřazení.

| Oblast | K.O. kritéria |
|---|---|
| Regulace a bezpečnost | SCR-001 sankční screening EU/OSN/ČR · SEC-001 SSO přes SAML/OIDC · REG-001 smluvní ujednání dle DORA čl. 30 · LEG-002 DPA dle čl. 28 GDPR |
| Hosting a data | NFR-006 on-premise / privátní cloud, data a zálohy v EU/EHP · LEG-001 zpracování a podpora jen v EU/EHP |
| Dodavatelské riziko | SEC-010 ISO/IEC 27001 nebo SOC 2 Type II |
| Integrace | INT-001 obousměrná integrace s CRM (core aplikace) |
| Formální | FORM-01 až FORM-03 (včas, NDA a čestné prohlášení, kompletní TCO) |

Odpověď „Akceptuje s výhradou“ u K.O. smluvního kritéria vede ke stavu **K VYJASNĚNÍ**; uchazeč musí výhradu odstranit do BAFO, jinak FAIL.

# 4. Váhový model

| Kategorie | Váha | Co se hodnotí | Zdroj dat |
|---|---|---|---|
| Cena (TCO na 5 let) | **40 %** | Licence, implementace, integrace, migrace, podpora, datové zdroje, rozvoj, exit | Příloha 3 |
| Byznys funkcionality | **30 %** | Míra pokrytí funkcí bez složitého vývoje | Příloha 1 – Matice |
| Architektura & bezpečnost | **20 %** | Zapadnutí do architektury Banky, integrace, bezpečnost, migrace, exit | Příloha 2 – FS |
| Delivery a zkušenosti | **10 %** | Reference z finančního sektoru, seniorita týmu, SLA, plán | Reference, CV, SLA |

# 5. Metodika bodování

## 5.1 Cena

`body = (nejnižší TCO mezi nabídkami, které prošly K.O. / hodnocené TCO) × 40`

Hodnoceným TCO je „TCO celkem za 5 let“ z listu Souhrn Přílohy 3 (nominálně, bez DPH). Nabídka se stavem „NEÚPLNÁ“ nesplní FORM-03.

## 5.2 Byznys funkcionality (Matice shody)

| Odpověď | Body |
|---|---|
| OOTB – funkce je v základu, stačí zapnout | 5 |
| Konfigurace – nastavení v UI bez programování | 3 |
| Custom vývoj – zvyšuje technický dluh a TCO | 1 |
| 3rd party / Nesplněno | 0 |

Váha podle priority: Must 3, Should 2, Could 1. Hodnotí se požadavky oblastí KYC, SCR, TM, CAS a REP, které nejsou K.O.

`pokrytí = Σ(uznané body × váha) / Σ(5 × váha)` · `body = pokrytí × 30`

**Pravidlo křížové kontroly:** uznané body = 0, pokud u odpovědi OOTB, Konfigurace nebo Custom vývoj chybí odkaz do FS, nebo pokud komise tvrzení ve FS či v demu neověří. Odpovědi oblastí INT, NFR, SEC, MIG a REG slouží jako podklad pro hodnocení FS.

## 5.3 Architektura a bezpečnost (Feasibility Study, 0–10)

Každý hlasující člen komise hodnotí nezávisle šest kritérií (kap. 3, 4, 5, 6.6, 7, 9–10 FS):

- **8–10:** detailní návrh s jasným popisem integrací přesně na rozhraní Banky;
- **4–7:** standardizovaný popis, chybí detail na specifické systémy (core banking, CRM);
- **0–3:** obecné marketingové fráze bez technické hloubky.

`body = průměr všech známek / 10 × 20`

## 5.4 Delivery a zkušenosti (0–10)

Kritéria D1 reference (min. 2 banky v EU s AML řešením v produkci), D2 seniorita klíčových osob, D3 návrh SLA vs. Příloha 4, D4 realističnost plánu. `body = průměr / 10 × 10`

# 6. Hodnoticí komise

| Člen | Role | Hlas |
|---|---|---|
| Ing. Jana Novotná | Business analytička / Product Owner AML – předsedkyně | ano |
| Ing. Martin Dvořák | Enterprise architekt (IT) | ano |
| Mgr. Tomáš Svoboda | Bezpečnostní architekt (útvar CISO) | ano |
| JUDr. Lucie Malá | Ředitelka Compliance, pověřená osoba (MLRO) | ano |
| Ing. Pavel Černý | Procurement – dohled nad procesem | ne |
| Interní audit | Pozorovatel | ne |

Hodnocení nezůstává jen na IT nebo jen na byznysu. Hodnoticí arch podepisují zástupci IT, byznysu i bezpečnosti a schvaluje ho sponzor.

# 7. Auditní stopa

1. Váhy, stupnice a K.O. kritéria jsou schválena **před** vyhlášením řízení a po otevření nabídek se nemění.
2. Členové komise podepisují prohlášení o neexistenci střetu zájmů před otevřením nabídek.
3. **Každá známka horší než průměr daného kritéria** musí mít jednovětné zdůvodnění (např. „Dodavatel navrhuje point-to-point integraci namísto požadovaného použití bankovní Kafka sběrnice.“). Model zdůvodnění vynucuje – buňka bez něj zčervená.
4. Každé snížení bodů v Matici (chybějící odkaz FS, neověřeno v demu) má zdůvodnění.
5. Komunikace s uchazeči jen přes kontaktní osobu; Q&A log se sdílí všem.
6. Všechny podklady (nabídky, hodnoticí model, záznamy z dem, hodnoticí arch) se archivují 10 let.

# 8. Shoda bodů a citlivost

Při rozdílu celkového skóre menším než 1,0 bodu rozhoduje vyšší skóre Architektura & bezpečnost, poté nižší TCO. Hodnoticí zpráva obsahuje citlivostní analýzu: zda by se pořadí změnilo při posunu váhy ceny o ±5 p. b.

# 9. Fiktivní výsledek (ukázka v modelu)

| Dodavatel | K.O. | Cena | Byznys | Arch & Sec | Delivery | Celkem |
|---|---|---|---|---|---|---|
| Dodavatel A | POSTUPUJE | 31,98 | 23,67 | 16,25 | 7,88 | **79,78** |
| Dodavatel B | POSTUPUJE | 40,00 | 17,67 | 12,50 | 7,31 | 77,49 |
| Dodavatel C | VYŘAZEN (NFR-006, LEG-001) | – | – | – | – | – |

Dodavatel B je o 20 % levnější, ale 5 požadavků řeší custom vývojem a 5 nesplňuje nebo dodává přes třetí stranu. Navíc navrhuje point-to-point integraci na core banking, takže se reálné TCO pravděpodobně zvýší vícepracemi. Doporučení komise: jednat s Dodavatelem A, v BAFO tlačit na cenu licencí a strop sankcí SLA.
