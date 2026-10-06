---
title: "Zadávací dokumentace – výzva k podání nabídky (RFP)"
subtitle: "Dodávka, implementace a podpora KYC/AML řešení · Projekt SENTINEL · č. j. HPB-NAK-2026-041"
date: "2. 11. 2026"
---

> **Fiktivní cvičný dokument.** Horizont Privátní banka, a.s., osoby i údaje jsou smyšlené.

# 1. Úvod a účel

Horizont Privátní banka, a.s. (dále „Banka“) vás zve k podání nabídky na dodávku, implementaci a podporu řešení pro kontrolu klientů a prevenci legalizace výnosů z trestné činnosti a financování terorismu (KYC/AML/CFT).

Toto výběrové řízení je **uzavřené poptávkové řízení soukromého zadavatele** podle interní nákupní směrnice Banky. Nejde o zadávací řízení podle zákona č. 134/2016 Sb., o zadávání veřejných zakázek. Banka si vyhrazuje právo řízení kdykoli zrušit, změnit podmínky (vždy pro všechny uchazeče stejně) nebo neuzavřít smlouvu s žádným uchazečem.

Dokumentace je důvěrná a smí být použita pouze pro přípravu nabídky. Přílohy 1–5 a technické dokumenty D-01 až D-06 obdrží uchazeč po podpisu dohody o mlčenlivosti (NDA).

# 2. Zadavatel a kontaktní osoba

| | |
|---|---|
| Zadavatel | Horizont Privátní banka, a.s., Na Příkopě 999/99, 110 00 Praha 1 (fiktivní) |
| IČO | 999 99 999 (fiktivní) |
| Kontaktní osoba | Ing. Pavel Černý, Procurement, tendr.sentinel@horizont-pb.example |
| Jediný komunikační kanál | E-mail kontaktní osoby. Kontakt jiných zaměstnanců Banky ve věci řízení může vést k vyloučení. |

# 3. Předmět plnění

Předmětem je dodávka standardního softwarového řešení, jeho implementace, integrace, migrace dat a podpora po dobu 5 let, v rozsahu:

1. KYC/CDD – rizikový profil klienta, zesílená kontrola, skuteční majitelé, periodické a událostní revize;
2. screening – sankční seznamy (EU, OSN, ČR, volitelně OFAC a UK HMT), PEP, adverse media; klienti i platby;
3. monitoring transakcí – konfigurovatelné scénáře, profil klienta, odklad splnění příkazu;
4. správa případů a rozhodování – princip čtyř očí, propsání rozhodnutí do CRM;
5. reporting – oznámení podezřelého obchodu pro FAÚ, manažerský a regulatorní reporting;
6. integrace na CRM, core banking (Kafka), platební systém, DWH, DMS, ESB, SIEM, monitoring a IAM;
7. migrace dat ze současného systému za 10 let a paralelní provoz;
8. školení, dokumentace v češtině a angličtině, podpora a údržba včetně legislativní údržby.

Podrobné požadavky jsou v **Příloze 1 – Matice shody** (95 požadavků, z toho 8 K.O.).

# 4. Výchozí stav (souhrn)

- Banka v privátním bankovnictví a správě majetku, 9 500 aktivních klientů, 38 000 prověřovaných subjektů, 24 % nerezidentů.
- 1,4 mil. transakcí ročně, 220 tis. zahraničních plateb, 150 pojmenovaných a 60 souběžných uživatelů.
- CRM je core aplikace pro obchod, zákaznickou podporu i Compliance; obchodník musí stav KYC a rozhodnutí vidět v CRM.
- Integrační standard: Apache Kafka (Avro, schema registry, mTLS) a ESB pro legacy systémy; point-to-point integrace na core banking nebude akceptována.
- Provoz on-premise ve dvou datových centrech Banky v ČR, nebo dedikovaná instance v privátním cloudu s daty v EU/EHP.
- Detail: dokumenty D-01 (architektura), D-04 (Kafka topicy), D-05 (rozhraní CRM), D-06 (datový model současného systému).

# 5. Harmonogram

| Krok | Termín |
|---|---|
| Odeslání výzvy | 2. 11. 2026 |
| Potvrzení účasti a podpis NDA | do 6. 11. 2026 |
| Termín pro písemné dotazy | 20. 11. 2026, 12:00 |
| Poslední zveřejnění Q&A logu | 27. 11. 2026 |
| **Podání nabídek** | **11. 12. 2026, 12:00** |
| Formální kontrola, K.O. brána, hodnocení Matice a FS | 14. 12. 2026 – 8. 1. 2027 |
| Prezentace a skriptované demo (4 hodiny na uchazeče) | 12.–15. 1. 2027 |
| Výzva k BAFO (max. 2 uchazeči) | 22. 1. 2027 |
| Podání BAFO | 5. 2. 2027 |
| Oznámení výsledku | do 5. 3. 2027 |
| Jednání o smlouvě, plánovaný podpis | 3/2027 |
| Požadovaný go-live | nejpozději 31. 3. 2028 |

# 6. Podmínky účasti (K.O.)

Do bodového hodnocení postupuje pouze nabídka, která splní **všechna** následující kritéria. Hodnotí se Pass/Fail.

| ID | Kritérium | Doklad |
|---|---|---|
| FORM-01 | Nabídka podána včas a ve struktuře dle kap. 7 | — |
| FORM-02 | Podepsaná NDA a čestné prohlášení (bezúhonnost, sankce, střet zájmů) | Příloha 7 |
| FORM-03 | Kompletní cenová šablona, všechna potvrzení „Ano“ | Příloha 3, list Souhrn |
| SCR-001 | Screening proti sankčním seznamům EU, OSN, ČR | Matice, demo |
| INT-001 | Obousměrná integrace s CRM | Matice, FS kap. 5.1 |
| NFR-006 | Provoz on-premise nebo privátní cloud, data a zálohy výhradně v EU/EHP | FS kap. 3.1 |
| SEC-001 | SSO přes SAML 2.0 / OIDC | FS kap. 4.2 |
| SEC-010 | ISO/IEC 27001 nebo SOC 2 Type II | Certifikát / zpráva ne starší 12 měsíců |
| REG-001 | Akceptace smluvních ujednání dle čl. 30 DORA | Příloha 5 |
| LEG-001 | Zpracování osobních údajů jen v EU/EHP | Seznam míst zpracování |
| LEG-002 | Zpracovatelská smlouva dle čl. 28 GDPR | Příloha 5 |

# 7. Struktura a forma nabídky

Nabídka se podává elektronicky na adresu kontaktní osoby jako šifrovaný archiv (heslo zasláno samostatně), v češtině nebo angličtině. Cenová část se podává **samostatným souborem**; Banka ji otevře až po vyhodnocení K.O. brány.

| Část | Obsah | Forma |
|---|---|---|
| A. Krycí list | Identifikace uchazeče, kontaktní osoba, platnost nabídky min. 180 dní | PDF, podepsáno |
| B. Matice shody | Příloha 1 vyplněná ve všech žlutých buňkách | XLSX (needitovat strukturu) |
| C. Feasibility Study | Dle závazné osnovy v Příloze 2, max. 80 stran bez příloh | PDF + DOCX |
| D. Cenová nabídka | Příloha 3 – cenová šablona TCO | XLSX (samostatný soubor) |
| E. SLA | Odchylky od Přílohy 4 (pokud jsou), jinak prohlášení o akceptaci | PDF |
| F. Smluvní podmínky | Akceptace / výhrady k Příloze 5 v revizích | DOCX |
| G. Reference | Min. 2 banky v EU s nasazeným řešením v produkci (kontakt, rozsah, rok) | Příloha 6 |
| H. Tým | CV klíčových osob: PM, solution architekt, AML konzultant, vedoucí migrace | PDF |
| I. Doklady | ISO 27001 / SOC 2, pojištění, výpis z OR, seznam subdodavatelů | PDF |
| J. DORA dotazník | Údaje pro registr informací a posouzení rizik ICT třetí strany | Příloha 8 |

**Pravidlo křížové kontroly:** U každé odpovědi OOTB, Konfigurace a Custom vývoj musí Matice obsahovat odkaz na kapitolu Feasibility Study. Chybí-li odkaz, nebo není-li řešení ve FS popsáno, požadavek se považuje za nesplněný.

**Závaznost:** Odpovědi v Matici shody, Feasibility Study a SLA se stanou součástí smlouvy.

# 8. Dotazy a vysvětlení (Q&A)

1. Dotazy zasílejte pouze e-mailem kontaktní osobě do 20. 11. 2026, 12:00. Dotazy po termínu nebudou zodpovězeny.
2. Banka odpovídá písemně. Dotaz i odpověď zveřejní **všem uchazečům** v Q&A logu bez identifikace tazatele, a to nejpozději 1× týdně.
3. Pokud odpověď mění zadávací dokumentaci, Banka vydá novou verzi dotčeného dokumentu a uvede ji v Q&A logu.
4. Ústní informace nejsou závazné.

# 9. Hodnocení nabídek

Hodnocení probíhá ve třech krocích: **(1) K.O. brána, (2) bodové hodnocení, (3) BAFO** se dvěma nejlépe hodnocenými uchazeči. Váhy byly schváleny před vyhlášením a nebudou měněny.

| Kategorie | Váha | Zdroj | Metoda |
|---|---|---|---|
| Cena (TCO na 5 let) | 40 % | Příloha 3 | (nejnižší TCO / hodnocené TCO) × 40 |
| Byznys funkcionality | 30 % | Příloha 1 | OOTB 5 b., Konfigurace 3 b., Custom vývoj 1 b., 3rd party / Nesplněno 0 b.; váha Must 3, Should 2, Could 1 |
| Architektura & bezpečnost | 20 % | Příloha 2 – FS | Známka komise 0–10 za kapitoly 3, 4, 5, 6.6, 7, 9–10 |
| Delivery a zkušenosti | 10 % | Reference, CV, SLA, plán | Známka komise 0–10 |

Stupnice 0–10 pro FS: 8–10 detailní návrh přesně na rozhraní a systémy Banky; 4–7 standardizovaný popis bez detailu na specifické systémy Banky; 0–3 obecné marketingové fráze bez technické hloubky.

Body za cenu a funkcionalitu se po BAFO přepočítají. Při rozdílu celkového skóre menším než 1,0 bodu rozhoduje vyšší skóre Architektura & bezpečnost, poté nižší TCO.

# 10. Prezentace a skriptované demo

Každý uchazeč předvede řešení podle scénáře, který Banka zašle 5 pracovních dnů předem. Demo probíhá na standardní verzi produktu bez úprav pro Banku. Scénáře zahrnují zejména: onboarding PEP klienta s vícevrstvou vlastnickou strukturou, shodu se sankčním seznamem v cyrilici, propsání blokace do CRM, změnu scénáře monitoringu v UI se schválením čtyřma očima, vygenerování OPO pro FAÚ. Tvrzení z Matice shody, která v demu nebudou prokázána, komise sníží na 0 bodů se zdůvodněním.

# 11. BAFO a jednání

Do kola BAFO postoupí nejvýše dva uchazeči. Banka s nimi může jednat o ceně, SLA a výhradách ke smluvním podmínkám. Rozsah předmětu plnění a požadavky Must se v jednání nemění. Po BAFO se nabídky znovu ohodnotí podle stejné metodiky.

# 12. Ostatní podmínky

- Náklady na účast v řízení nese uchazeč.
- Uchazeč uvede v nabídce všechny subdodavatele podílející se na plnění, jejich sídlo a místo plnění.
- Uchazeč prohlašuje, že on ani jeho subdodavatelé nejsou subjektem mezinárodních sankcí a nejsou ve střetu zájmů se zaměstnanci Banky.
- Banka má nulovou toleranci ke korupci; jakákoli nabídka výhod zaměstnancům Banky vede k vyloučení.
- Banka bude informovat ČNB o plánovaném smluvním ujednání v souladu s čl. 28 odst. 3 DORA; uchazeč poskytne potřebnou součinnost.

# 13. Seznam příloh

| Příloha | Název |
|---|---|
| 1 | Matice shody (XLSX) |
| 2 | Závazná osnova Feasibility Study |
| 3 | Cenová šablona TCO na 5 let (XLSX) |
| 4 | Požadavky na SLA |
| 5 | Klíčové smluvní požadavky (DORA, GDPR, bankovní tajemství, exit) |
| 6 | Formulář referencí |
| 7 | Krycí list a čestné prohlášení |
| 8 | DORA dotazník ICT třetí strany |
| D-01 až D-06 | Technické podklady po podpisu NDA |

# Příloha 7 – Krycí list nabídky (vzor)

| Údaj | Vyplní uchazeč |
|---|---|
| Obchodní firma, sídlo, IČO | |
| Osoba oprávněná jednat | |
| Kontaktní osoba pro řízení | |
| Nabízené řešení a verze | |
| TCO na 5 let (Kč bez DPH) – dle Přílohy 3 | *uvádí se pouze v cenové části* |
| Platnost nabídky | min. 180 dní |
| Subdodavatelé (název, země, rozsah) | |

**Čestné prohlášení:** Uchazeč prohlašuje, že (a) není v likvidaci ani insolvenci, (b) on ani členové statutárního orgánu nebyli pravomocně odsouzeni za trestný čin související s podnikáním, (c) není subjektem mezinárodních sankcí EU, OSN ani ČR, (d) není ve střetu zájmů ve vztahu k Bance, (e) všechny údaje v nabídce jsou pravdivé a závazné.

Datum, podpis osoby oprávněné jednat: ……………………
