Dans la v0.12.1, nous sommes heureux d'annoncer que l'intégration Keccak sera activée sur Starknet.

La pile Cairo et le protocole Starknet utilisent des éléments intégrés. Ces fonctions intégrées rationalisent le processus de calcul en réduisant le nombre de cellules de trace nécessaires, ce qui se traduit par des preuves plus efficaces. Cependant, l'approche actuelle consistant à utiliser une liste statique de mises en page pour différentes fonctions intégrées a des limites.

Pour résoudre ce problème, l'équipe de développement prévoit de mettre en œuvre des mises en page dynamiques à l'aide de Keccak, qui adaptent la mise en page à chaque travail de vérification, optimisant l'allocation des cellules de trace. Cette approche dynamique améliorera l'efficacité, simplifiera l'intégration de nouveaux composants intégrés et réduira les coûts inutiles pour les utilisateurs, rendant le processus de preuve plus rationalisé et efficace.

Vous pouvez en savoir plus sur les Builtins et les mises en page dynamiques [ici](https://starkware.medium.com/builtins-and-dynamic-layouts-e419a73e29e).