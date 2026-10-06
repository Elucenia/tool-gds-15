<!-- ELUCENIA technical documentation · gds-15 · en · no clinical/professional/rights approval -->

# Geriatric Depression Scale (GDS-15)

[conditions, sources and permissions](https://elucenia.org/en/tools/gds-15)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### 1. Are you generally satisfied with your life?

`q1`

- `0` — Yes
- `1` — No

### 2. Have you given up many of your interests and activities?

`q2`

- `0` — No
- `1` — Yes

### 3. Do you feel that your life is empty?

`q3`

- `0` — No
- `1` — Yes

### 4. Do you often feel bored?

`q4`

- `0` — No
- `1` — Yes

### 5. Are you in good spirits most of the time?

`q5`

- `0` — Yes
- `1` — No

### 6. Are you afraid that something bad will happen to you?

`q6`

- `0` — No
- `1` — Yes

### 7. Do you feel happy most of the time?

`q7`

- `0` — Yes
- `1` — No

### 8. Do you feel there is no way out of your situation?

`q8`

- `0` — No
- `1` — Yes

### 9. Do you prefer staying at home to going out and doing new things?

`q9`

- `0` — No
- `1` — Yes

### 10. Do you feel that you have more memory problems than most people?

`q10`

- `0` — No
- `1` — Yes

### 11. Do you think it is wonderful to be alive?

`q11`

- `0` — Yes
- `1` — No

### 12. Do you feel useless in your current circumstances?

`q12`

- `0` — No
- `1` — Yes

### 13. Do you feel full of energy?

`q13`

- `0` — Yes
- `1` — No

### 14. Do you feel your situation is hopeless?

`q14`

- `0` — No
- `1` — Yes

### 15. Do you feel that most people are better off than you?

`q15`

- `0` — No
- `1` — Yes

## Method edition

GDS-15/Sheikh–Yesavage 1986: 15 items; reverse 1/5/7/11/13; Brazilian Almeida 1999 cutoff ≥6

## Documented formula

1 point for each depression-suggesting response: “no” on questions 1, 5, 7, 11 and 13; “yes” on the others. Total 0 to 15.

Brazilian-version cutoff (Almeida and Almeida, 1999): ≥ 6 suggests depression.

## Limits and population

A 15-item version for screening in older people. The Brazilian reliability study recruited a specialist outpatient clinic and excluded severe sensory/language barriers and cognitive impairment defined in the protocol. This does not establish universal eligibility. The 5/6 cutoff was reported from a cited validity study, not reestimated in this retest.

## References

- [Yesavage JA et al. Development and validation of a geriatric depression screening scale: a preliminary report. J Psychiatr Res, 1982.](https://doi.org/10.1016/0022-3956(82)90033-4)

- [Sheikh JI, Yesavage JA. Geriatric Depression Scale (GDS): recent evidence and development of a shorter version. Clin Gerontol, 1986.](https://doi.org/10.1300/J018v05n01_09)

- [Almeida OP, Almeida SA. Confiabilidade da versão brasileira da Escala de Depressão em Geriatria (GDS) versão reduzida. Arq Neuropsiquiatr, 1999.](https://doi.org/10.1590/S0004-282X1999000300013)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

No significant depressive symptoms (0 to 5)


### 2

No significant depressive symptoms (0 to 5)


### 3

Suggests depression (6 to 10)

Confirm with clinical assessment using DSM-5 or ICD criteria.


### 4

Suggests severe depression (11 to 15)

Clinical assessment is the priority, including suicide risk.

