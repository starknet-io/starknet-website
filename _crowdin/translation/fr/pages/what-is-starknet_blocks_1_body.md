## I﻿ntroduction

Starknet est un Layer 2 de type Validity Rollup . Il assure un débit élevé, des coûts de gaz bas et conserve les niveaux de sécurité de la couche 1 d'Ethereum

Par analogie à la grille de sudoku, vérifier une solution est plus facile que résoudre le problème à partir de zéro. Si notre objectif est de convaincre les gens de l'affirmation "ce puzzle a été résolu", nous pouvons économiser beaucoup de calcul en ayant une personne qui calcule une solution, puis en la propageant pour que d'autres la vérifient. Dans cette stratégie, chaque calcul d'une solution devient un événement unique qui ne nécessite pas de réplication par la société. De la même façon, Starknet permet de mettre à l'échelle Ethereum en remplaçant les calculs lourds de la couche L1 par des calculs plus légers (donc moins coûteux !) La vérification L1 en utilisant des preuves STARK calculées hors-chaîne.

## Comment ça marche

Avec l'analogie ci-dessus en tête, il est temps d'introduire un peu de jargon. Starknet est un Layer 2 de type Validity Rollup permissionless (également appelé "ZK-Rollup") qui prend en charge les calculs généraux et fonctionne actuellement en production en tant que réseau L2 sur Ethereum. La sécurité L1 future de Starknet est assurée par son utilisation du système de preuve cryptographique le plus sûr et le plus évolutif – [STARK](https://starkware.co/stark/).

Les contrats Starknet sont (pour la plupart) écrits dans le langage Cairo - un langage de programmation Turing complet conçu pour les preuves STARK.