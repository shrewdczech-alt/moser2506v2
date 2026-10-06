---
title: "Příloha 4 – Požadavky na úroveň služeb (SLA)"
subtitle: "Výběrové řízení SENTINEL – KYC/AML řešení · Horizont Privátní banka, a.s."
date: "2. 11. 2026"
---

> **Fiktivní cvičný dokument.** Hodnoty jsou minimální požadavky Banky. Odchylky uveďte v části E nabídky; budou zohledněny v hodnocení Delivery (kritérium D3).

# 1. Principy

1. SLA měří **dopad na byznys Banky**, ne stav infrastruktury dodavatele.
2. Rozhoduje doba do **obnovení provozu (workaround)** a doba do **finálního vyřešení (resolution)**. Doba reakce je jen doplňková metrika.
3. Prioritu incidentu určuje **Banka** podle definic v kap. 2. Dodavatel ji může rozporovat až po obnovení provozu, nikoli jednostranně snížit.
4. Sankce jsou **procentní slevy (service credits)** z měsíčního poplatku za podporu a údržbu.

# 2. Definice priorit z pohledu Banky

| Priorita | Definice (co v Bance nefunguje) | Příklady |
|---|---|---|
| **P1 – Kritický** | Zastaven klíčový proces a neexistuje workaround, nebo hrozí porušení sankční / AML povinnosti | Nelze dokončit onboarding v CRM; screening plateb nefunguje a platby stojí; neproběhl denní re-screening po nové designaci EU; rozhodnutí o blokaci se nepropisuje do CRM |
| **P2 – Vysoký** | Proces funguje s výrazným omezením nebo nefunguje integrace na sekundární systém | Výrazně pomalé odezvy v CRM; nefunguje export do DWH; nefunguje generování OPO, ale lze podat ručně; nefunguje předávání logů do SIEM |
| **P3 – Střední** | Omezení jednotlivé funkce s dostupným workaroundem | Chyba v reportu; chyba jednoho scénáře monitoringu bez dopadu na ostatní |
| **P4 – Nízký** | Kosmetická vada, dotaz, požadavek na informaci | Překlep v UI, dotaz na konfiguraci |

# 3. Dostupnost

- **Cíl: 99,9 % měsíčně** v režimu 24/7 pro screening plateb a re-screening; 99,9 % v době 6:00–22:00 pro ostatní funkce.
- Měří se **end-to-end syntetickými transakcemi** z monitoringu Banky, např. každých 5 minut: (a) dotaz na stav KYC testovacího klienta z CRM, (b) screening testovacího subjektu, (c) screening testovací platby. Neprojde-li transakce, běží čas nedostupnosti bez ohledu na stav infrastruktury dodavatele.
- Plánovaná údržba max. 4 h měsíčně, mimo 6:00–22:00, oznámená 5 pracovních dnů předem; nesmí přerušit screening plateb.

# 4. Doby řešení incidentů

| Priorita | Reakce | Obnovení provozu (workaround) | Finální řešení (resolution) | Režim |
|---|---|---|---|---|
| P1 | 15 min | 4 h | 5 pracovních dnů | 24/7 |
| P2 | 30 min | 8 h | 10 pracovních dnů | 24/7 |
| P3 | 4 pracovní hodiny | 3 pracovní dny | nejbližší release, max. 60 dní | pracovní dny 8–18 |
| P4 | 1 pracovní den | — | dle dohody | pracovní dny 8–18 |

**Bezpečnostní zranitelnosti v dodaném software:** kritické (CVSS ≥ 9,0) oprava do 5 pracovních dnů, vysoké (7,0–8,9) do 30 dnů, a to v ceně podpory (viz SEC-007 a Příloha 3, list C).

# 5. Sankce (service credits)

| Událost | Sleva z měsíčního poplatku za podporu |
|---|---|
| Dostupnost pod 99,9 %, za každých započatých 0,1 % | 5 % |
| P1: překročení doby obnovení provozu – 1. započatá hodina | 5 % |
| P1: každá další započatá hodina (eskalační koeficient) | +5 % (2. hodina 10 %, 3. hodina 15 % …) |
| P2: překročení doby obnovení provozu, za každé započaté 4 h | 3 % |
| P1/P2: překročení doby finálního řešení, za každý pracovní den | 2 % |
| Nedodání RCA v termínu, za každý pracovní den | 2 % |

**Strop sankcí:** 30 % ročního poplatku za podporu a údržbu. Sankce nevylučují nárok na náhradu škody nad jejich rámec.

# 6. Analýza příčin (RCA)

U každého incidentu P1 a P2 dodá dodavatel do **3 pracovních dnů (P1)**, resp. **5 pracovních dnů (P2)** písemnou analýzu příčin: časovou osu, příčinu, dopad, provedená opatření a závazný plán trvalého odstranění s termíny. Opakovaný incident se stejnou příčinou do 90 dnů je automaticky P1.

# 7. Podpora při incidentech podle DORA

Dodavatel oznámí Bance každý incident, který může ovlivnit službu, **bez zbytečného odkladu, nejpozději do 1 hodiny** od zjištění, a poskytne informace potřebné pro klasifikaci a oznámení závažného incidentu ČNB ve lhůtách podle DORA a navazujících technických norem. Dodavatel se účastní testů kontinuity a obnovy Banky.

# 8. Reporting

Měsíční report do 5. pracovního dne: dostupnost dle syntetických transakcí, incidenty podle priorit a dodržení lhůt, uplatněné sankce, otevřené zranitelnosti, kapacitní trendy. Čtvrtletní service review s Bankou.

# 9. Právo na odstoupení

Klesne-li měsíční dostupnost pod **95 %** ve třech měsících během 12 po sobě jdoucích měsíců, nebo nastanou-li v tomto období tři incidenty P1 s překročením doby obnovení o více než 100 %, je Banka oprávněna od smlouvy odstoupit pro podstatné porušení a požadovat náhradu nákladů exitu a migrace k jinému dodavateli. Dodavatel je i v tomto případě povinen poskytnout exitovou součinnost dle Přílohy 5.
