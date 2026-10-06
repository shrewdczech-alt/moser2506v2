---
title: "Příloha 5 – Klíčové smluvní požadavky"
subtitle: "Výběrové řízení SENTINEL – KYC/AML řešení · Horizont Privátní banka, a.s."
date: "2. 11. 2026"
---

> **Fiktivní cvičný dokument.** Uchazeč u každého bodu uvede v Matici shody (oblast LEG a REG-001) Akceptuje / Akceptuje s výhradou / Neakceptuje; výhrady zapíše v revizích do tohoto dokumentu. Body označené **K.O.** nelze odmítnout.

# 1. Smluvní dokumentace

Rámcová smlouva o dodávce, implementaci a podpoře software; licenční ujednání; smlouva o zpracování osobních údajů (vzor Banky); SLA (Příloha 4); exitový plán. Smlouva se řídí **českým právem**, spory řeší obecné soudy ČR (LEG-009).

# 2. Ujednání podle DORA (čl. 30 nařízení (EU) 2022/2554) – K.O. (REG-001)

Protože služba podporuje kritickou nebo důležitou funkci, smlouva obsahuje zejména:

1. jasný a úplný popis všech služeb a úrovní služeb s přesnými kvantitativními a kvalitativními cíli (Příloha 4);
2. lokality (země), kde jsou služby poskytovány a data zpracovávána a uchovávána, a povinnost předem oznámit jejich změnu;
3. ustanovení o dostupnosti, autenticitě, integritě a důvěrnosti dat a o přístupu k datům, jejich obnově a vrácení při ukončení či insolvenci dodavatele;
4. pomoc při ICT incidentu bez dalších nákladů nebo za předem stanovenou cenu;
5. povinnost spolupracovat s ČNB a dalšími orgány dohledu;
6. práva na ukončení smlouvy a minimální výpovědní lhůty v souladu s očekáváními orgánů dohledu;
7. podmínky účasti na programech povědomí o bezpečnosti ICT a na testování digitální provozní odolnosti včetně TLPT;
8. neomezená práva přístupu, inspekce a auditu pro Banku, auditora pověřeného Bankou a orgány dohledu (LEG-004);
9. povinnost provádět a testovat plány kontinuity činnosti;
10. povinnou exitovou strategii s přiměřeným přechodným obdobím (kap. 6);
11. podmínky subdodávek podle nařízení v přenesené pravomoci (EU) 2025/532 (kap. 4).

Uchazeč poskytne údaje pro registr informací Banky (čl. 28 odst. 3 DORA) a součinnost při informování ČNB o plánovaném ujednání.

# 3. Ochrana osobních údajů a bankovní tajemství

- **K.O. (LEG-001):** zpracování výhradně v EU/EHP; jakýkoli přístup z třetích zemí včetně vzdálené podpory jen s předchozím písemným souhlasem Banky a při splnění kapitoly V GDPR.
- **K.O. (LEG-002):** smlouva o zpracování dle čl. 28 GDPR na vzoru Banky; seznam technických a organizačních opatření.
- Součinnost při DPIA do 30 dnů od podpisu (REG-004); oznámení porušení zabezpečení osobních údajů Bance do 24 hodin.
- Mlčenlivost o skutečnostech podléhajících bankovnímu tajemství (§ 38 zákona č. 21/1992 Sb.) – individuální závazky všech osob s přístupem (LEG-003); trvá i po skončení smlouvy.
- Informace o oznámeních podezřelých obchodů a o šetření FAÚ nesmí dodavatel sdělit třetím osobám (zákaz tipping-off podle AML zákona).

# 4. Subdodavatelé (LEG-005)

Seznam všech subdodavatelů v nabídce (název, země, rozsah). Subdodávka části kritické funkce jen s předchozím písemným souhlasem Banky; dodavatel odpovídá za subdodavatele jako za sebe a přenáší na ně povinnosti této přílohy včetně práva auditu. Banka má právo smlouvu ukončit při změně subdodavatele, se kterou nesouhlasí.

# 5. Duševní vlastnictví

Konfigurace, scénáře, rizikové modely a dokumentace vytvořené pro Banku jsou ve vlastnictví Banky nebo k nim má Banka výhradní, časově neomezenou licenci. Custom vývoj: zdrojový kód v úschově (escrow) s aktualizací při každém releasu (LEG-007).

# 6. Exit (LEG-006)

- Exitová součinnost **min. 12 měsíců** od výpovědi nebo jiného ukončení, za ceny z rate card; export a dokumentace dat bez dalších poplatků.
- Export všech dat (klienti, rizikové profily, historie screeningu, alerty, případy, auditní stopy, konfigurace) v otevřeném strojově čitelném formátu s popisem datového modelu.
- Přechodné období provozu licencí min. 6 měsíců za ceny z Přílohy 3, list E.
- Exitový plán je součástí FS (kap. 10), dodavatel ho aktualizuje min. 1× ročně a Banka ho testuje.

# 7. Cena a platební podmínky

- Ceny dle Přílohy 3 jsou pevné; indexace sazeb max. o míru inflace vyhlášenou ČSÚ, **nejvýše 5 % ročně**.
- Platby za implementaci podle akceptovaných milníků; 15 % ceny implementace se hradí po úspěšném ukončení hypercare.
- Legislativní údržba a oprava zranitelností jsou zahrnuty v poplatku za podporu (REG-002, SEC-007).

# 8. Odpovědnost a pojištění

- Limit odpovědnosti min. **200 % ročních plateb** (LEG-008, vyjednatelné v BAFO); bez limitu u porušení mlčenlivosti, ochrany osobních údajů, bankovního tajemství, úmyslu a hrubé nedbalosti.
- Pojištění odpovědnosti s limitem min. **50 mil. Kč** po celou dobu smlouvy (LEG-010).

# 9. Ukončení

Banka může smlouvu vypovědět bez udání důvodu s výpovědní lhůtou 6 měsíců, odstoupit při podstatném porušení (včetně kap. 9 Přílohy 4), na pokyn orgánu dohledu, při změně vlastnické struktury dodavatele, která představuje riziko, nebo pokud se dodavatel stane subjektem mezinárodních sankcí. Dodavatel může vypovědět nejdříve po 5 letech s výpovědní lhůtou 18 měsíců.
