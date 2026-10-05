<!-- ELUCENIA technical documentation · gds-15 · zh · no clinical/professional/rights approval -->

# 老年抑郁量表（GDS-15）

[条件、来源与许可](https://elucenia.org/zh/tools/gds-15)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 1. 您总体上对生活满意吗？

`q1`

- `0` — 是
- `1` — 否

### 2. 您是否放弃了许多兴趣和活动？

`q2`

- `0` — 否
- `1` — 是

### 3. 您是否觉得生活空虚？

`q3`

- `0` — 否
- `1` — 是

### 4. 您是否经常感到无聊？

`q4`

- `0` — 否
- `1` — 是

### 5. 您大多数时间心情好吗？

`q5`

- `0` — 是
- `1` — 否

### 6. 您是否担心会有坏事发生在自己身上？

`q6`

- `0` — 否
- `1` — 是

### 7. 您大多数时间感到快乐吗？

`q7`

- `0` — 是
- `1` — 否

### 8. 您是否觉得处境无路可走？

`q8`

- `0` — 否
- `1` — 是

### 9. 相比外出和尝试新事物，您是否更愿意待在家里？

`q9`

- `0` — 否
- `1` — 是

### 10. 您是否觉得记忆问题比大多数人更多？

`q10`

- `0` — 否
- `1` — 是

### 11. 您是否觉得活着很美好？

`q11`

- `0` — 是
- `1` — 否

### 12. 在目前情况下，您是否觉得自己没有用？

`q12`

- `0` — 否
- `1` — 是

### 13. 您是否感到精力充沛？

`q13`

- `0` — 是
- `1` — 否

### 14. 您是否觉得处境没有希望？

`q14`

- `0` — 否
- `1` — 是

### 15. 您是否觉得大多数人比自己过得好？

`q15`

- `0` — 否
- `1` — 是

## 方法版本

GDS-15/Sheikh–Yesavage 1986：15项；1/5/7/11/13反向；巴西Almeida 1999界值≥6

## 已记录的公式

每个提示抑郁的答案1分：第1、5、7、11、13题答“否”，其余答“是”。总分0至15。

巴西版界值（Almeida和Almeida，1999）：≥ 6提示抑郁。

## 限制与适用人群

这是用于老年人筛查的15项版本。巴西可靠性研究从专科门诊招募受试者，并排除了严重感官或语言障碍及方案所定义的认知损害。这并不能确立普遍适用的资格条件。5/6阈值源自所引用的效度研究，而非本次重测中重新估计的结果。

## 参考文献

- [Yesavage JA et al. Development and validation of a geriatric depression screening scale: a preliminary report. J Psychiatr Res, 1982.](https://doi.org/10.1016/0022-3956(82)90033-4)

- [Sheikh JI, Yesavage JA. Geriatric Depression Scale (GDS): recent evidence and development of a shorter version. Clin Gerontol, 1986.](https://doi.org/10.1300/J018v05n01_09)

- [Almeida OP, Almeida SA. Confiabilidade da versão brasileira da Escala de Depressão em Geriatria (GDS) versão reduzida. Arq Neuropsiquiatr, 1999.](https://doi.org/10.1590/S0004-282X1999000300013)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
