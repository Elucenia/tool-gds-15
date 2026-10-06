<!-- ELUCENIA technical documentation · gds-15 · de · no clinical/professional/rights approval -->

# Geriatrische Depressionsskala (GDS-15)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/gds-15)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### 1. Sind Sie im Allgemeinen mit Ihrem Leben zufrieden?

`q1`

- `0` — Ja
- `1` — Nein

### 2. Haben Sie viele Ihrer Interessen und Aktivitäten aufgegeben?

`q2`

- `0` — Nein
- `1` — Ja

### 3. Haben Sie das Gefühl, dass Ihr Leben leer ist?

`q3`

- `0` — Nein
- `1` — Ja

### 4. Langweilen Sie sich häufig?

`q4`

- `0` — Nein
- `1` — Ja

### 5. Sind Sie die meiste Zeit guter Stimmung?

`q5`

- `0` — Ja
- `1` — Nein

### 6. Haben Sie Angst, dass Ihnen etwas Schlimmes passieren wird?

`q6`

- `0` — Nein
- `1` — Ja

### 7. Fühlen Sie sich die meiste Zeit glücklich?

`q7`

- `0` — Ja
- `1` — Nein

### 8. Haben Sie das Gefühl, dass Ihre Situation ausweglos ist?

`q8`

- `0` — Nein
- `1` — Ja

### 9. Bleiben Sie lieber zu Hause, als auszugehen und neue Dinge zu tun?

`q9`

- `0` — Nein
- `1` — Ja

### 10. Haben Sie das Gefühl, mehr Gedächtnisprobleme als die meisten Menschen zu haben?

`q10`

- `0` — Nein
- `1` — Ja

### 11. Finden Sie es wunderbar, am Leben zu sein?

`q11`

- `0` — Ja
- `1` — Nein

### 12. Fühlen Sie sich unter Ihren derzeitigen Umständen nutzlos?

`q12`

- `0` — Nein
- `1` — Ja

### 13. Fühlen Sie sich voller Energie?

`q13`

- `0` — Ja
- `1` — Nein

### 14. Halten Sie Ihre Situation für hoffnungslos?

`q14`

- `0` — Nein
- `1` — Ja

### 15. Haben Sie das Gefühl, dass es den meisten Menschen besser geht als Ihnen?

`q15`

- `0` — Nein
- `1` — Ja

## Fassung der Methode

GDS-15/Sheikh–Yesavage 1986: 15 Items; Umkehrung 1/5/7/11/13; brasilianischer Grenzwert Almeida 1999 ≥6

## Dokumentierte Formel

1 Punkt je depressionshinweisender Antwort: „nein“ bei 1, 5, 7, 11 und 13; „ja“ bei den übrigen Fragen. Gesamt 0 bis 15.

Brasilianischer Grenzwert (Almeida und Almeida, 1999): ≥ 6 deutet auf Depression hin.

## Grenzen und Population

15-Item-Version zum Screening bei älteren Menschen. Die brasilianische Zuverlässigkeitsstudie rekrutierte in einer spezialisierten Ambulanz und schloss schwere sensorische oder sprachliche Barrieren sowie die im Protokoll definierte kognitive Beeinträchtigung aus. Dies legt keine universelle Eignung fest. Die Schwelle 5/6 wurde aus einer zitierten Validitätsstudie berichtet und bei diesem Wiederholungstest nicht neu geschätzt.

## Referenzen

- [Yesavage JA et al. Development and validation of a geriatric depression screening scale: a preliminary report. J Psychiatr Res, 1982.](https://doi.org/10.1016/0022-3956(82)90033-4)

- [Sheikh JI, Yesavage JA. Geriatric Depression Scale (GDS): recent evidence and development of a shorter version. Clin Gerontol, 1986.](https://doi.org/10.1300/J018v05n01_09)

- [Almeida OP, Almeida SA. Confiabilidade da versão brasileira da Escala de Depressão em Geriatria (GDS) versão reduzida. Arq Neuropsiquiatr, 1999.](https://doi.org/10.1590/S0004-282X1999000300013)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Keine signifikanten depressiven Symptome (0 bis 5)


### 2

Keine signifikanten depressiven Symptome (0 bis 5)


### 3

Spricht für Depression (6 bis 10)

Mit klinischer Beurteilung nach DSM-5- oder ICD-Kriterien bestätigen.


### 4

Spricht für schwere Depression (11 bis 15)

Die klinische Beurteilung hat Priorität, einschließlich Suizidrisiko.

