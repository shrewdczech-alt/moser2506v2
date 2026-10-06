# Projekt SENTINEL – výběrové řízení na dodavatele KYC/AML řešení

**Fiktivní cvičná práce.** Interní zadání a kompletní podklady pro výběrové řízení na nového dodavatele KYC/AML řešení napojeného na CRM ve smyšlené české privátní bance (*Horizont Privátní banka, a.s.*). Dokumenty mají co nejvíc odpovídat praxi české banky pod dohledem ČNB. Banka, osoby, dodavatelé i čísla jsou smyšlené. Odkazy na předpisy odpovídají stavu k 10/2026 a před reálným použitím je musí ověřit Legal.

Vychází ze zadání `assigment_output` a z případové studie „Migrace AML poskytovatele napojeného na CRM“.

## Obsah

| # | Soubor | Co to je | Pro koho |
|---|---|---|---|
| 01 | [Interní zadání projektu](01_Interni_zadani_projektu.md) ([.docx](01_Interni_zadani_projektu.docx)) | Business case, výchozí stav, cíle, rozsah, stakeholdeři, legislativa, postup analýzy, harmonogram, rizika | Interní |
| 02 | [Matice shody – ŠABLONA](02_Matice_shody_SABLONA.xlsx) | Prázdná šablona pro sběr požadavků od IT, Compliance, Legal a Obchodu, včetně návodu, číselníků, listů Workshopy, Konflikty a Změnový log | Interní |
| 03 | [Matice shody – VYPLNĚNÁ](03_Matice_shody_VYPLNENA.xlsx) | 95 fiktivních požadavků (8 K.O.) s vlastníkem, MoSCoW, zdrojem v legislativě a akceptačním kritériem; záznam 6 workshopů a 3 vyřešených konfliktů | Interní |
| 04 | [Zadávací dokumentace (RFP)](04_Zadavaci_dokumentace_RFP.md) ([.docx](04_Zadavaci_dokumentace_RFP.docx)) | Výzva k podání nabídky: předmět, K.O., struktura nabídky, Q&A, hodnocení, demo, BAFO, krycí list | Uchazeči |
| 05 | [Příloha 1 – Matice shody pro dodavatele](05_Priloha1_Matice_shody_pro_dodavatele.xlsx) | Verze matice bez interních sloupců; zamčený list, uchazeč vyplňuje jen žluté buňky; automatická křížová kontrola odkazů do FS | Uchazeči |
| 06 | [Příloha 2 – Osnova Feasibility Study](06_Priloha2_Osnova_Feasibility_Study.md) ([.docx](06_Priloha2_Osnova_Feasibility_Study.docx)) | Závazná osnova FS (architektura, bezpečnost, integrace, custom požadavky, migrace, exit) | Uchazeči |
| 07 | [Příloha 3 – Cenová šablona TCO](07_Priloha3_Cenova_sablona_TCO.xlsx) | Zamčený Excel se vzorci: licence včetně non-PROD, licence třetích stran, datové zdroje, růst +20 %, implementace, migrace, rate card se stropem indexace 5 %, exit; kontroly úplnosti | Uchazeči |
| 08 | [Příloha 4 – SLA](08_Priloha4_SLA_pozadavky.md) ([.docx](08_Priloha4_SLA_pozadavky.docx)) | Priority P1–P4 z pohledu Banky, end-to-end dostupnost, workaround vs. resolution, service credits, RCA, DORA incidenty, právo odstoupit | Uchazeči |
| 09 | [Příloha 5 – Smluvní požadavky](09_Priloha5_Smluvni_pozadavky.md) ([.docx](09_Priloha5_Smluvni_pozadavky.docx)) | DORA čl. 30, GDPR, bankovní tajemství, subdodavatelé, exit, odpovědnost | Uchazeči |
| 10 | [Hodnoticí metodika](10_Hodnotici_metodika.md) ([.docx](10_Hodnotici_metodika.docx)) | K.O. brána, váhy 40/30/20/10, bodování, komise, auditní stopa | Interní |
| 11 | [Hodnoticí model a arch](11_Hodnotici_model_a_arch.xlsx) | Výpočet s fiktivními daty 3 dodavatelů, vynucené zdůvodnění horších známek, hodnoticí arch k podpisu | Interní |
| 12 | [Q&A log](12_QA_log.xlsx) | Veřejný anonymizovaný log a oddělená interní evidence tazatelů; 8 ukázkových dotazů | Interní + uchazeči |

## Jak spolu dokumenty souvisí

1. **Sběr požadavků:** šablona (02) → workshopy se stakeholdery → schválená matice (03).
2. **Tendr:** RFP (04) + matice pro dodavatele (05) + osnova FS (06) + TCO (07) + SLA (08) + smluvní podmínky (09).
3. **Provázání matice a FS:** každá odpověď OOTB, Konfigurace nebo Custom vývoj musí odkazovat na kapitolu FS. Chybí-li odkaz, požadavek je nesplněný.
4. **Hodnocení:** metodika (10) → model (11): nejdřív K.O. brána, potom body. Cena 40 %, byznys 30 %, architektura a bezpečnost 20 %, delivery 10 %.
5. **Transparentnost:** Q&A log (12) se sdílí se všemi uchazeči a váhy jsou schválené před vyhlášením.

## Legislativní rámec (zohledněný v požadavcích)

Zákon č. 253/2008 Sb. (AML), vyhláška ČNB č. 67/2018 Sb., nařízení (EU) 2024/1624 (AMLR) a 2024/1620 (AMLA), zákon č. 69/2006 Sb. a č. 1/2023 Sb. (sankce), nařízení (EU) 2024/886 (instantní platby, denní sankční screening), nařízení (EU) 2023/1113 (informace o plátci), zákon č. 37/2021 Sb. (evidence skutečných majitelů), nařízení (EU) 2022/2554 (DORA), EBA/GL/2019/02 (outsourcing), GDPR a zákon č. 110/2019 Sb., § 38 zákona č. 21/1992 Sb. (bankovní tajemství), nařízení (EU) 2024/1689 (AI Act).

## Úpravy Excelů

Excely se generují skriptem, takže změnu požadavků stačí udělat v `tools/pozadavky.py`:

```bash
cd kyc-aml-vyberove-rizeni
python3 tools/generuj_xlsx.py        # vyžaduje openpyxl
```

Heslo zamčených listů (pro Banku): `Sentinel2026`.

Dokumenty `.docx` se generují z Markdownu: `pandoc 04_Zadavaci_dokumentace_RFP.md -o 04_Zadavaci_dokumentace_RFP.docx`.
