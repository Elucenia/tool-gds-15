<!-- ELUCENIA technical documentation · gds-15 · fr · no clinical/professional/rights approval -->

# Échelle de dépression gériatrique (GDS-15)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/gds-15)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### 1. Êtes-vous globalement satisfait de votre vie ?

`q1`

- `0` — Oui
- `1` — Non

### 2. Avez-vous abandonné beaucoup de vos intérêts et activités ?

`q2`

- `0` — Non
- `1` — Oui

### 3. Avez-vous le sentiment que votre vie est vide ?

`q3`

- `0` — Non
- `1` — Oui

### 4. Vous ennuyez-vous souvent ?

`q4`

- `0` — Non
- `1` — Oui

### 5. Êtes-vous de bonne humeur la plupart du temps ?

`q5`

- `0` — Oui
- `1` — Non

### 6. Avez-vous peur qu’il vous arrive quelque chose de mauvais ?

`q6`

- `0` — Non
- `1` — Oui

### 7. Vous sentez-vous heureux la plupart du temps ?

`q7`

- `0` — Oui
- `1` — Non

### 8. Avez-vous le sentiment que votre situation est sans issue ?

`q8`

- `0` — Non
- `1` — Oui

### 9. Préférez-vous rester chez vous plutôt que sortir et faire de nouvelles choses ?

`q9`

- `0` — Non
- `1` — Oui

### 10. Avez-vous le sentiment d’avoir plus de problèmes de mémoire que la plupart des gens ?

`q10`

- `0` — Non
- `1` — Oui

### 11. Trouvez-vous merveilleux d’être en vie ?

`q11`

- `0` — Oui
- `1` — Non

### 12. Vous sentez-vous inutile dans votre situation actuelle ?

`q12`

- `0` — Non
- `1` — Oui

### 13. Vous sentez-vous plein d’énergie ?

`q13`

- `0` — Oui
- `1` — Non

### 14. Pensez-vous que votre situation est sans espoir ?

`q14`

- `0` — Non
- `1` — Oui

### 15. Avez-vous le sentiment que la plupart des gens sont mieux lotis que vous ?

`q15`

- `0` — Non
- `1` — Oui

## Édition de la méthode

GDS-15/Sheikh–Yesavage 1986 : 15 items ; inversion 1/5/7/11/13 ; seuil brésilien Almeida 1999 ≥6

## Formule documentée

1 point par réponse évoquant une dépression : « non » aux questions 1, 5, 7, 11 et 13 ; « oui » aux autres. Total 0 à 15.

Seuil brésilien (Almeida et Almeida, 1999) : ≥ 6 évoque une dépression.

## Limites et population

Version à 15 items pour le dépistage chez les personnes âgées. L’étude brésilienne de fiabilité a recruté dans une consultation spécialisée et a exclu les obstacles sensoriels ou linguistiques graves et l’altération cognitive définie par le protocole. Cela n’établit pas une éligibilité universelle. Le seuil 5/6 provenait d’une étude de validité citée et n’a pas été réestimé dans ce retest.

## Références

- [Yesavage JA et al. Development and validation of a geriatric depression screening scale: a preliminary report. J Psychiatr Res, 1982.](https://doi.org/10.1016/0022-3956(82)90033-4)

- [Sheikh JI, Yesavage JA. Geriatric Depression Scale (GDS): recent evidence and development of a shorter version. Clin Gerontol, 1986.](https://doi.org/10.1300/J018v05n01_09)

- [Almeida OP, Almeida SA. Confiabilidade da versão brasileira da Escala de Depressão em Geriatria (GDS) versão reduzida. Arq Neuropsiquiatr, 1999.](https://doi.org/10.1590/S0004-282X1999000300013)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
