<!-- ELUCENIA technical documentation · gds-15 · pt-BR · no clinical/professional/rights approval -->

# Escala de Depressão Geriátrica (GDS-15)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/gds-15)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### 1. Está basicamente satisfeito com sua vida?

`q1`

- `0` — Sim
- `1` — Não

### 2. Deixou muitos de seus interesses e atividades?

`q2`

- `0` — Não
- `1` — Sim

### 3. Sente que sua vida está vazia?

`q3`

- `0` — Não
- `1` — Sim

### 4. Aborrece-se com frequência?

`q4`

- `0` — Não
- `1` — Sim

### 5. Sente-se de bom humor a maior parte do tempo?

`q5`

- `0` — Sim
- `1` — Não

### 6. Tem medo de que algum mal vá lhe acontecer?

`q6`

- `0` — Não
- `1` — Sim

### 7. Sente-se feliz a maior parte do tempo?

`q7`

- `0` — Sim
- `1` — Não

### 8. Sente que sua situação não tem saída?

`q8`

- `0` — Não
- `1` — Sim

### 9. Prefere ficar em casa a sair e fazer coisas novas?

`q9`

- `0` — Não
- `1` — Sim

### 10. Sente que tem mais problemas de memória que a maioria?

`q10`

- `0` — Não
- `1` — Sim

### 11. Acha maravilhoso estar vivo?

`q11`

- `0` — Sim
- `1` — Não

### 12. Sente-se inútil nas atuais circunstâncias?

`q12`

- `0` — Não
- `1` — Sim

### 13. Sente-se cheio de energia?

`q13`

- `0` — Sim
- `1` — Não

### 14. Acha que sua situação é sem esperança?

`q14`

- `0` — Não
- `1` — Sim

### 15. Sente que a maioria das pessoas está melhor que você?

`q15`

- `0` — Não
- `1` — Sim

## Edição do método

GDS 15/Sheikh Yesavage 1986:15 itens, inversão 1/5/7/11/13; corte PTAlmeida 1999≥6

## Fórmula documentada

1 ponto para cada resposta que sugere depressão: "não" nas perguntas 1, 5, 7, 11 e 13; "sim" nas demais. Total de 0 a 15.

Ponto de corte na versão brasileira (Almeida e Almeida, 1999): ≥ 6 sugere depressão.

## Limites e população

Versão de 15 itens para rastreamento em pessoas idosas. O estudo brasileiro de confiabilidade recrutou um ambulatório especializado e excluiu barreiras sensoriais/linguísticas graves e comprometimento cognitivo definido no protocolo. Isso não estabelece elegibilidade universal. O corte 5/6 foi relatado a partir de estudo de validade citado, não reestimado nesse reteste.

## Referências

- [Yesavage JA et al. Development and validation of a geriatric depression screening scale: a preliminary report. J Psychiatr Res, 1982.](https://doi.org/10.1016/0022-3956(82)90033-4)

- [Sheikh JI, Yesavage JA. Geriatric Depression Scale (GDS): recent evidence and development of a shorter version. Clin Gerontol, 1986.](https://doi.org/10.1300/J018v05n01_09)

- [Almeida OP, Almeida SA. Confiabilidade da versão brasileira da Escala de Depressão em Geriatria (GDS) versão reduzida. Arq Neuropsiquiatr, 1999.](https://doi.org/10.1590/S0004-282X1999000300013)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Sem sintomas depressivos significativos (0 a 5)


### 2

Sem sintomas depressivos significativos (0 a 5)


### 3

Sugere depressão (6 a 10)

Confirmar com avaliação clínica pelos critérios do DSM-5 ou CID.


### 4

Sugere depressão grave (11 a 15)

Avaliação clínica prioritária, incluindo risco de suicídio.

