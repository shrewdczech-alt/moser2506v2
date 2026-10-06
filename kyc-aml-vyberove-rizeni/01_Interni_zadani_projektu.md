---
title: "Interní zadání projektu SENTINEL – výměna KYC/AML řešení"
subtitle: "Horizont Privátní banka, a.s. · Interní · verze 1.0"
date: "23. 9. 2026"
---

> **Fiktivní cvičný dokument.** Banka, osoby, dodavatelé i čísla jsou smyšlené. Odkazy na právní předpisy odpovídají stavu k 10/2026; před reálným použitím je musí ověřit Legal.

| | |
|---|---|
| **Projekt** | SENTINEL – výměna KYC/AML řešení napojeného na CRM |
| **Sponzor** | Ing. Karel Procházka, člen představenstva odpovědný za Compliance a provoz |
| **Product Owner** | Ing. Jana Novotná, business analytička / PO AML |
| **Klasifikace** | Interní – důvěrné |
| **Schváleno** | SteerCo 23. 9. 2026 |

# 1. Shrnutí

Banka mění dodavatele AML řešení. Současný systém (nasazen 2014) končí s podporou 30. 6. 2028, nepokrývá požadavky nařízení (EU) 2024/1624 (AMLR) použitelného od 10. 7. 2027 a generuje přibližně 97 % falešně pozitivních shod. AML systém je integrován s CRM, které je core aplikací pro privátní bankéře, zákaznickou podporu i Compliance. Výměna proto není jen nákup software, ale změna procesů onboardingu, pravidelného screeningu a rozhodování o klientech.

Cílem tohoto zadání je vybrat dodavatele transparentním výběrovým řízením, které je obhajitelné před Procurementem, interním auditem a ČNB, a připravit implementaci s go-live **do 31. 3. 2028**.

# 2. Výchozí stav

## 2.1 Profil banky (fiktivní)

| Ukazatel | Hodnota |
|---|---|
| Typ instituce | Banka s licencí ČNB, privátní bankovnictví a správa majetku |
| Aktivní klienti | 9 500 (65 % fyzické osoby, 35 % právnické osoby a struktury) |
| Prověřované subjekty | 38 000 (klienti, zástupci, skuteční majitelé) |
| Nerezidenti | 24 % klientů (SK, DE, AT, CH, UA, CY) |
| Transakce | 1,4 mil. ročně; 220 tis. zahraničních plateb |
| Uživatelé AML funkcí | 150 (obchod 100, Compliance 30, podpora 20) |
| Rizikový profil | 18 % klientů s vysokým rizikem, 140 PEP |

## 2.2 Systémová krajina

| Systém | Role vůči AML | Rozhraní dnes |
|---|---|---|
| CRM (core aplikace) | Onboarding, karta klienta, úkoly obchodníka, stav klienta | Point-to-point SOAP, noční dávka |
| Core banking | Účty, transakce, klientská data | Noční dávka (CSV) |
| Platební systém | SWIFT, SEPA, tuzemské platby | Online screening přes proprietární konektor |
| Integrační vrstva | Kafka (event streaming), ESB pro legacy | AML zatím nevyužívá |
| DWH | Reporting, data pro ČNB | Noční export |
| DMS | Dokumenty klienta | Bez napojení, ruční ukládání |
| IAM / SSO, PAM | Identita, privilegované účty | AML má lokální účty (nález auditu) |
| SIEM, monitoring | Logy, dohled | Bez napojení |

## 2.3 Hlavní problémy (z analýzy a workshopů)

1. **Konec podpory a regulatorní mezera:** dodavatel nebude implementovat AMLR ani technické normy AMLA.
2. **Falešně pozitivní shody:** cca 97 % alertů screeningu je falešných; Compliance tráví 60 % kapacity jejich zavíráním.
3. **Dvojí zadávání:** obchodník vyplňuje KYC v CRM a část znovu v AML systému.
4. **Zpoždění rozhodnutí:** blokace klienta se do CRM propisuje noční dávkou; obchodník může klientovi do druhého dne založit produkt.
5. **Auditní nálezy 2025:** lokální účty mimo IAM, nemožnost zpětně doložit, proč měl klient daný rizikový profil.
6. **Integrace:** point-to-point vazby bránící využití bankovní Kafka platformy.

# 3. Cíle a měřítka úspěchu

| Cíl | Měřítko (KPI) | Cílová hodnota |
|---|---|---|
| Regulatorní soulad | Pokrytí požadavků AML zákona, vyhlášky ČNB 67/2018 a AMLR | 100 % Must požadavků REG |
| Efektivita Compliance | Míra falešně pozitivních shod screeningu | < 85 % do 6 měsíců po go-live |
| Rychlost rozhodnutí | Propsání rozhodnutí do CRM | < 1 minuta (dnes až 24 h) |
| Uživatelský komfort | Údaje zadávané obchodníkem dvakrát | 0 |
| Kontinuita | Výpadek onboardingu při migraci | 0 hodin |
| Náklady | TCO na 5 let | v rámci schváleného rozpočtu |

# 4. Rozsah

**V rozsahu:** KYC/CDD a rizikový profil klienta, screening (sankce, PEP, adverse media), monitoring transakcí, správa případů a rozhodování, reporting pro FAÚ a vedení, integrace (CRM, core, platby, DWH, DMS, SIEM, monitoring, IAM), datová migrace za 10 let, školení, dokumentace, podpora a provoz po dobu 5 let.

**Mimo rozsah:** výměna CRM, změny core bankingu nad rámec publikování událostí do Kafka, fraud management, reporting FATCA/CRS, vzdálený onboarding nových klientů (jen volitelně, viz KYC-007).

# 5. Stakeholdeři a odpovědnosti

| Stakeholder | Zástupci | Zájmy a odpovědnost v Matici shody | RACI ve výběru |
|---|---|---|---|
| **Compliance** | Ředitelka Compliance (MLRO), AML analytici | Regulatorní soulad, kvalita detekce, případy, FAÚ | A za požadavky KYC, SCR, TM, CAS, REP |
| **IT** | Enterprise architekt, CRM PO, integrace, bezpečnost, provoz | Architektura, integrace, NFR, bezpečnost, provoz | A za INT, NFR, SEC, MIG |
| **Legal** | Právník IT smluv, DPO | GDPR, DORA, bankovní tajemství, smlouva | A za LEG, REG-001, REG-003, REG-004 |
| **Obchod** | Ředitel privátního bankovnictví, bankéři, zákaznická podpora | Práce v CRM, rychlost onboardingu, klientská zkušenost | C/A za požadavky na CRM a UX |
| **Procurement** | Nákupčí IT | Férovost a transparentnost řízení | R za proces výběru |
| **Interní audit** | Auditor IT | Auditní stopa, nezávislost hodnocení | I, přizván jako pozorovatel |
| **Risk / ICT risk** | Risk manažer, CISO | DORA, outsourcing, koncentrační riziko | C, posouzení rizik dodavatele |

# 6. Legislativní a regulatorní rámec

| Předpis | Dopad na zadání |
|---|---|
| Zákon č. 253/2008 Sb. (AML zákon) | Kontrola klienta (§ 9), zesílená kontrola (§ 9a), uchovávání 10 let (§ 16), oznámení podezřelého obchodu (§ 18), odklad splnění příkazu (§ 20), systém vnitřních zásad a hodnocení rizik (§ 21, § 21a) |
| Vyhláška ČNB č. 67/2018 Sb. | Požadavky na systém vnitřních zásad, hodnocení rizik a kontrolu klienta |
| Nařízení (EU) 2024/1624 (AMLR), 2024/1620 (AMLA), směrnice (EU) 2024/1640 | Jednotná pravidla od 10. 7. 2027 – řešení musí být připraveno a legislativní údržba musí být v ceně |
| Zákon č. 69/2006 Sb. a zákon č. 1/2023 Sb. | Mezinárodní sankce a národní sankční seznam |
| Nařízení (EU) 2024/886 (instantní platby) | Ověřování klientů vůči sankčním seznamům EU nejméně denně a ihned po nové designaci |
| Nařízení (EU) 2023/1113 | Informace o plátci a příjemci u převodů |
| Zákon č. 37/2021 Sb. | Evidence skutečných majitelů, hlášení nesrovnalostí |
| Nařízení (EU) 2022/2554 (DORA) a navazující RTS | Řízení rizik ICT třetích stran, smluvní ujednání (čl. 30), registr informací, exit strategie, testování odolnosti |
| Pokyny EBA k outsourcingu (EBA/GL/2019/02), vyhláška ČNB č. 163/2014 Sb. | Posouzení outsourcingu, právo auditu, informování ČNB |
| GDPR a zákon č. 110/2019 Sb. | Zpracovatelská smlouva, DPIA, automatizované rozhodování (čl. 22), lokalizace dat |
| Zákon č. 21/1992 Sb., o bankách | Bankovní tajemství (§ 38) |
| Nařízení (EU) 2024/1689 (AI Act) | Transparentnost a dokumentace ML modelů, pokud je dodavatel použije |

**Režim zadávání:** Banka není veřejným zadavatelem, zákon č. 134/2016 Sb. se nepoužije. Řízení probíhá podle interní nákupní směrnice Banky jako uzavřené poptávkové řízení s výzvou vybraným dodavatelům.

**DORA:** AML řešení podporuje kritickou nebo důležitou funkci. Banka proto před podpisem provede posouzení rizik ICT třetí strany a koncentračního rizika, zapíše ujednání do registru informací a v souladu s čl. 28 odst. 3 DORA včas informuje ČNB o plánovaném smluvním ujednání.

# 7. Postup analýzy (pohled seniorního business/IT analytika)

Výměna AML poskytovatele napojeného na CRM má dopad na tři skupiny uživatelů, které s AML funkcemi pracují přes CRM. Analýza proto vychází z procesů, ne ze systémů.

1. **Discovery výchozího stavu (2 týdny).** Zmapování procesů onboardingu, periodické a událostní revize, screeningu a rozhodování (BPMN as-is), inventura rozhraní CRM ↔ AML včetně datových toků a polí, analýza objemů a kvality dat pro migraci, sběr incidentů a auditních nálezů.
2. **Workshopy se stakeholdery (2 týdny).** Samostatně s Compliance, Obchodem, IT a Legal; každý požadavek zapsán rovnou do Matice shody s vlastníkem a akceptačním kritériem. Záznamy na listu Workshopy.
3. **Konsolidace a konflikty.** Konflikty (např. automatické schvalování vs. princip čtyř očí) se rozhodují na konsolidačním workshopu a SteerCo, ne jednotlivě s dodavateli.
4. **Dopadová analýza na CRM.** Pro každý proces to-be: co uvidí a udělá obchodník, podpora a Compliance v CRM; která pole a stavy klienta se mění; které integrace přecházejí z dávky na události (Kafka).
5. **Gap analýza nabídek.** Odpovědi dodavatelů v Matici shody → počet Custom vývojů a jejich dopad na CRM a TCO; ověření ve skriptovaném demu.
6. **Migrační strategie.** Datové mapování, zkušební migrace, paralelní provoz min. 4 týdny, rekonciliace a rollback plán.
7. **Přechod a změnové řízení.** Školení, aktualizace vnitřních předpisů (systém vnitřních zásad), komunikace na obchod.

# 8. Klíčové principy řešení (to-be)

- AML řešení je **systém záznamu pro rizikový profil, screening a případy**; CRM je systém záznamu pro klienta a obchodní vztah.
- Změny klienta jdou z CRM a core do AML **událostmi přes Kafka**; rozhodnutí jdou z AML do CRM událostí a API do 1 minuty.
- Obchodník pracuje **výhradně v CRM** (embedded komponenta nebo API), Compliance pracuje v AML řešení.
- Negativní rozhodnutí o klientovi vždy **potvrzuje člověk** (čl. 22 GDPR), na principu čtyř očí.
- Data **pouze v EU/EHP**, provoz on-premise nebo v privátním cloudu (K.O.).

# 9. Výběrové řízení – přehled

| Dokument | Soubor |
|---|---|
| Šablona Matice shody pro sběr požadavků | `02_Matice_shody_SABLONA.xlsx` |
| Vyplněná Matice shody v. 1.0 (95 požadavků, 8 K.O.) | `03_Matice_shody_VYPLNENA.xlsx` |
| Zadávací dokumentace (RFP) | `04_Zadavaci_dokumentace_RFP` |
| Příloha 1 – Matice shody pro dodavatele | `05_Priloha1_Matice_shody_pro_dodavatele.xlsx` |
| Příloha 2 – Závazná osnova Feasibility Study | `06_Priloha2_Osnova_Feasibility_Study` |
| Příloha 3 – Cenová šablona TCO | `07_Priloha3_Cenova_sablona_TCO.xlsx` |
| Příloha 4 – Požadavky na SLA | `08_Priloha4_SLA_pozadavky` |
| Příloha 5 – Klíčové smluvní požadavky | `09_Priloha5_Smluvni_pozadavky` |
| Hodnoticí metodika (interní) | `10_Hodnotici_metodika` |
| Hodnoticí model a hodnoticí arch | `11_Hodnotici_model_a_arch.xlsx` |
| Q&A log | `12_QA_log.xlsx` |

**Váhový model** (schválen SteerCo před vyhlášením): cena (TCO 5 let) 40 %, byznys funkcionality 30 %, architektura a bezpečnost 20 %, delivery a zkušenosti 10 %; K.O. kritéria Pass/Fail.

# 10. Harmonogram

| Milník | Termín |
|---|---|
| Schválení zadávací dokumentace a hodnoticího modelu SteerCo | 21. 10. 2026 |
| Odeslání výzvy 5 vybraným dodavatelům | 2. 11. 2026 |
| Termín pro dotazy | 20. 11. 2026 |
| Podání nabídek (Matice, FS, TCO) | 11. 12. 2026 |
| Skriptovaná dema | 12.–15. 1. 2027 |
| BAFO | 5. 2. 2027 |
| Doporučení komise / rozhodnutí představenstva | 19. 2. / 26. 2. 2027 |
| Informování ČNB (čl. 28 odst. 3 DORA), podpis smlouvy | 3/2027 |
| Implementace, migrace, paralelní provoz | 4/2027 – 3/2028 |
| Go-live | do 31. 3. 2028 |
| Konec podpory současného systému | 30. 6. 2028 |

# 11. Rozpočet

Indikativní rozpočet TCO na 5 let: **45–60 mil. Kč bez DPH** (licence, implementace, migrace, podpora, datové zdroje, exit). Interní náklady Banky (cca 1 900 MD) jsou kryty kapacitami útvarů IT, Compliance a Obchodu.

# 12. Rizika

| Riziko | Dopad | Opatření |
|---|---|---|
| AMLR je použitelné dříve (10. 7. 2027) než go-live | Regulatorní mezera | Dočasná opatření v současném systému a procesech; legislativní údržba v ceně nového řešení |
| Kvalita historických dat | Zpoždění migrace | Profilace dat v discovery, čištění dat Bankou, zkušební migrace |
| Rozsáhlý custom vývoj | Technický dluh, TCO | Bodování 1 b. za Custom, pravidlo křížové kontroly, ocenění v TCO |
| Vendor lock-in | Drahý exit | Exitové požadavky (LEG-006), ocenění exitu v TCO, escrow |
| Kapacita obchodu na UAT | Zpoždění | Plánování UAT mimo období uzávěrek |
| Koncentrační riziko ICT (DORA) | Dohledový nález | Posouzení rizik dodavatele, exit plán, registr informací |

# 13. Schválení

| Role | Jméno | Datum | Podpis |
|---|---|---|---|
| Sponzor | Ing. Karel Procházka | | |
| CIO | | | |
| Ředitelka Compliance (MLRO) | JUDr. Lucie Malá | | |
| Ředitel privátního bankovnictví | | | |
| Product Owner | Ing. Jana Novotná | | |
