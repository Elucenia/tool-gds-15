<!-- ELUCENIA technical documentation · gds-15 · es · no clinical/professional/rights approval -->

# Escala de depresión geriátrica (GDS-15)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/gds-15)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### 1. ¿Está en general satisfecho con su vida?

`q1`

- `0` — Sí
- `1` — No

### 2. ¿Ha abandonado muchos de sus intereses y actividades?

`q2`

- `0` — No
- `1` — Sí

### 3. ¿Siente que su vida está vacía?

`q3`

- `0` — No
- `1` — Sí

### 4. ¿Se aburre con frecuencia?

`q4`

- `0` — No
- `1` — Sí

### 5. ¿Está de buen ánimo la mayor parte del tiempo?

`q5`

- `0` — Sí
- `1` — No

### 6. ¿Tiene miedo de que le ocurra algo malo?

`q6`

- `0` — No
- `1` — Sí

### 7. ¿Se siente feliz la mayor parte del tiempo?

`q7`

- `0` — Sí
- `1` — No

### 8. ¿Siente que su situación no tiene salida?

`q8`

- `0` — No
- `1` — Sí

### 9. ¿Prefiere quedarse en casa a salir y hacer cosas nuevas?

`q9`

- `0` — No
- `1` — Sí

### 10. ¿Siente que tiene más problemas de memoria que la mayoría de las personas?

`q10`

- `0` — No
- `1` — Sí

### 11. ¿Le parece maravilloso estar vivo?

`q11`

- `0` — Sí
- `1` — No

### 12. ¿Se siente inútil en sus circunstancias actuales?

`q12`

- `0` — No
- `1` — Sí

### 13. ¿Se siente lleno de energía?

`q13`

- `0` — Sí
- `1` — No

### 14. ¿Cree que su situación no tiene esperanza?

`q14`

- `0` — No
- `1` — Sí

### 15. ¿Siente que la mayoría de las personas está mejor que usted?

`q15`

- `0` — No
- `1` — Sí

## Edición del método

GDS-15/Sheikh–Yesavage 1986: 15 ítems; inversión 1/5/7/11/13; corte brasileño Almeida 1999 ≥6

## Fórmula documentada

1 punto por respuesta sugestiva de depresión: “no” en 1, 5, 7, 11 y 13; “sí” en las demás. Total 0 a 15.

Corte de la versión brasileña (Almeida y Almeida, 1999): ≥ 6 sugiere depresión.

## Límites y población

Versión de 15 ítems para cribado en personas mayores. El estudio brasileño de fiabilidad reclutó en una consulta especializada y excluyó barreras sensoriales/lingüísticas graves y el deterioro cognitivo definido en el protocolo. Esto no establece una elegibilidad universal. El punto de corte 5/6 se informó a partir de un estudio de validez citado, no se reestimó en este retest.

## Referencias

- [Yesavage JA et al. Development and validation of a geriatric depression screening scale: a preliminary report. J Psychiatr Res, 1982.](https://doi.org/10.1016/0022-3956(82)90033-4)

- [Sheikh JI, Yesavage JA. Geriatric Depression Scale (GDS): recent evidence and development of a shorter version. Clin Gerontol, 1986.](https://doi.org/10.1300/J018v05n01_09)

- [Almeida OP, Almeida SA. Confiabilidade da versão brasileira da Escala de Depressão em Geriatria (GDS) versão reduzida. Arq Neuropsiquiatr, 1999.](https://doi.org/10.1590/S0004-282X1999000300013)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
