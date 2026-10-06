---
title: "Příloha 2 – Závazná osnova Feasibility Study"
subtitle: "Výběrové řízení SENTINEL – KYC/AML řešení · Horizont Privátní banka, a.s."
date: "2. 11. 2026"
---

> **Fiktivní cvičný dokument.**

# Pravidla

1. Feasibility Study (FS) **musí** dodržet číslování a názvy kapitol této osnovy. Kapitoly lze dále členit, nelze je slučovat ani vynechat. Pokud kapitola není relevantní, uveďte proč.
2. Rozsah max. 80 stran bez příloh. Marketingové materiály nepatří do FS; komise je nehodnotí.
3. Každá odpověď OOTB, Konfigurace a Custom vývoj v Matici shody (Příloha 1) musí odkazovat na kapitolu FS, kde je řešení popsáno. Komise tyto odkazy kontroluje.
4. FS popisuje řešení **pro Banku** – na jejích systémech, rozhraních a objemech (viz D-01 až D-06). Obecný popis produktu bude hodnocen 0–3 body.
5. Obsah FS je závazný a stane se součástí smlouvy.

# Osnova

## 1. Manažerské shrnutí (max. 2 strany)
Navrhované řešení, klíčové přínosy pro Banku, hlavní předpoklady a rizika, souhrn počtu odpovědí OOTB / Konfigurace / Custom vývoj z Matice.

## 2. Porozumění zadání a výchozímu stavu
Jak dodavatel rozumí procesům onboardingu, revizí, screeningu a rozhodování v CRM; identifikované mezery a otázky.

## 3. Návrh cílové architektury
- 3.1 Model nasazení (on-premise v DC Banky / privátní cloud), lokality všech dat, záloh a podpory (**K.O. NFR-006**)
- 3.2 Prostředí DEV, SIT, UAT, PreProd, PROD, DR a jejich sizing
- 3.3 Logické a fyzické schéma komponent, databáze, middleware, licence třetích stran, datové zdroje (sankce, PEP)
- 3.4 Vysoká dostupnost, zálohování, obnova (RTO ≤ 4 h, RPO ≤ 15 min), výkon a škálování na 2× objem

## 4. Bezpečnostní koncept
- 4.1 Řízení bezpečnosti u dodavatele (ISO 27001 / SOC 2), model rolí a oprávnění (RBAC), recertifikace
- 4.2 Identita a přístup: SSO přes SAML 2.0 / OIDC (**K.O. SEC-001**), MFA, PAM pro privilegované účty
- 4.3 Šifrování v klidu a při přenosu, správa klíčů v HSM/KMS Banky, uchovávání hesel, maskování dat v neprodukci
- 4.4 Logování a auditní stopa, předávání do SIEM, neměnnost logů
- 4.5 Řízení zranitelností a patch management (lhůty), penetrační testy a TLPT – **harmonogram**, SBOM, bezpečný vývoj

## 5. Řešení kritických integrací
Pro každou integraci: technologie, směr, formát a frekvence, chybové stavy a opakování, monitoring, odpovědnost Banky vs. dodavatele.

- 5.1 CRM – onboarding, stav KYC, rizikový profil, rozhodnutí; embedded komponenta / API (**K.O. INT-001**)
- 5.2 Core banking přes bankovní Kafka (Avro, schema registry, mTLS)
- 5.3 ESB pro legacy systémy
- 5.4 Platební systém – online screening a pozastavení plateb, odklad splnění příkazu
- 5.5 DWH, DMS, SIEM, monitoring, zálohování
- 5.6 Veřejné registry (ARES, ESM), BankID (volitelně)

## 6. Funkční pokrytí a řešení custom požadavků
- 6.1 KYC/CDD a rizikový model
- 6.2 Screening (sankce, PEP, adverse media), matching a ladění falešně pozitivních shod
- 6.3 Monitoring transakcí, knihovna scénářů, backtesting, ML (pokud je nabízeno)
- 6.4 Správa případů a rozhodování, princip čtyř očí
- 6.5 Reporting, OPO pro FAÚ
- 6.6 **Řešení custom požadavků:** pro každý požadavek označený v Matici jako Custom vývoj – technický návrh, pracnost v MD, dopad na upgrady produktu a kdo nese údržbu

## 7. Plán implementace a migrace
- 7.1 Fázování, milníky, kritická cesta, kapacity dodavatele a požadované kapacity Banky
- 7.2 Datová migrace: rozsah (10 let), mapování, profilace a kvalita dat, zkušební běhy, rekonciliace
- 7.3 Přechod bez výpadku služby pro klienty: paralelní provoz min. 4 týdny, cutover, rollback plán
- 7.4 Testovací strategie (SIT, UAT, výkonnostní testy) a školení

## 8. Provozní model a podpora
- 8.1 Model podpory, SLA vs. Příloha 4, měření dostupnosti, eskalace, RCA
- 8.2 Release management, frekvence verzí, legislativní údržba

## 9. Regulatorní soulad a auditovatelnost
- 9.1 AML zákon, vyhláška ČNB 67/2018, AMLR/AMLA – roadmapa; DORA (čl. 28–30), GDPR (DPA, DPIA, čl. 22), AI Act (pokud relevantní); akceptace Přílohy 5
- 9.2 Auditní stopa, rekonstrukce rozhodnutí a rizikových profilů, retenční pravidla

## 10. Exit strategie
Postup ukončení, export všech dat a konfigurace v otevřeném formátu, součinnost min. 12 měsíců, přechodné období, escrow.

## 11. Rizika a předpoklady
Všechny předpoklady, na kterých stojí cena a harmonogram. Předpoklad neuvedený zde nelze později uplatnit jako důvod víceprací.

## 12. Dodavatel, tým a reference
Organizace projektu, klíčové osoby (shodné s CV v nabídce), subdodavatelé, reference, pojištění odpovědnosti.

# Jak bude FS hodnocena

| Kapitoly | Hodnoticí kritérium (list 3_Arch_Sec) |
|---|---|
| 3 | Návrh cílové architektury |
| 4 | Bezpečnostní koncept |
| 5 | Řešení kritických integrací |
| 6.6 | Řešení custom požadavků |
| 7 | Plán implementace a migrace bez výpadku |
| 9–10 | Regulatorní soulad, auditovatelnost a exit strategie |

Každý hlasující člen komise přidělí 0–10 bodů: **8–10** detailní návrh přesně na rozhraní a systémy Banky; **4–7** standardizovaný popis, chybí detail na specifické systémy (core, CRM); **0–3** obecné marketingové fráze bez technické hloubky.
