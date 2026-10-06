<!-- ELUCENIA technical documentation · gds-15 · it · no clinical/professional/rights approval -->

# Scala della depressione geriatrica (GDS-15)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/gds-15)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### 1. È complessivamente soddisfatto della sua vita?

`q1`

- `0` — Sì
- `1` — No

### 2. Ha abbandonato molti dei suoi interessi e delle sue attività?

`q2`

- `0` — No
- `1` — Sì

### 3. Sente che la sua vita è vuota?

`q3`

- `0` — No
- `1` — Sì

### 4. Si annoia spesso?

`q4`

- `0` — No
- `1` — Sì

### 5. È di buon umore per la maggior parte del tempo?

`q5`

- `0` — Sì
- `1` — No

### 6. Ha paura che le succeda qualcosa di brutto?

`q6`

- `0` — No
- `1` — Sì

### 7. Si sente felice per la maggior parte del tempo?

`q7`

- `0` — Sì
- `1` — No

### 8. Sente che la sua situazione non ha via d’uscita?

`q8`

- `0` — No
- `1` — Sì

### 9. Preferisce rimanere a casa piuttosto che uscire e fare cose nuove?

`q9`

- `0` — No
- `1` — Sì

### 10. Sente di avere più problemi di memoria della maggior parte delle persone?

`q10`

- `0` — No
- `1` — Sì

### 11. Trova meraviglioso essere in vita?

`q11`

- `0` — Sì
- `1` — No

### 12. Si sente inutile nelle circostanze attuali?

`q12`

- `0` — No
- `1` — Sì

### 13. Si sente pieno di energia?

`q13`

- `0` — Sì
- `1` — No

### 14. Ritiene che la sua situazione sia senza speranza?

`q14`

- `0` — No
- `1` — Sì

### 15. Sente che la maggior parte delle persone sta meglio di lei?

`q15`

- `0` — No
- `1` — Sì

## Edizione del metodo

GDS-15/Sheikh–Yesavage 1986: 15 item; inversione 1/5/7/11/13; soglia brasiliana Almeida 1999 ≥6

## Formula documentata

1 punto per risposta suggestiva di depressione: “no” a 1, 5, 7, 11 e 13; “sì” alle altre. Totale 0 a 15.

Soglia brasiliana (Almeida e Almeida, 1999): ≥ 6 suggerisce depressione.

## Limiti e popolazione

Versione di 15 item per lo screening nelle persone anziane. Lo studio brasiliano di affidabilità ha reclutato in un ambulatorio specialistico e ha escluso gravi barriere sensoriali/linguistiche e il deterioramento cognitivo definito nel protocollo. Ciò non stabilisce un’ammissibilità universale. La soglia 5/6 è stata riportata da uno studio di validità citato, non ristimata in questo retest.

## Riferimenti

- [Yesavage JA et al. Development and validation of a geriatric depression screening scale: a preliminary report. J Psychiatr Res, 1982.](https://doi.org/10.1016/0022-3956(82)90033-4)

- [Sheikh JI, Yesavage JA. Geriatric Depression Scale (GDS): recent evidence and development of a shorter version. Clin Gerontol, 1986.](https://doi.org/10.1300/J018v05n01_09)

- [Almeida OP, Almeida SA. Confiabilidade da versão brasileira da Escala de Depressão em Geriatria (GDS) versão reduzida. Arq Neuropsiquiatr, 1999.](https://doi.org/10.1590/S0004-282X1999000300013)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Nessun sintomo depressivo significativo (0 a 5)


### 2

Nessun sintomo depressivo significativo (0 a 5)


### 3

Suggerisce depressione (6 a 10)

Confermare con valutazione clinica secondo i criteri DSM-5 o ICD.


### 4

Suggerisce depressione grave (11 a 15)

La valutazione clinica è prioritaria, incluso il rischio di suicidio.

