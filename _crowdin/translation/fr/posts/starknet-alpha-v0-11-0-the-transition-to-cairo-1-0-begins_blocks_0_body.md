## TL;DR

* Starknet alpha v0.11.0 est sorti et en direct sur Testnet
* Vous pouvez désormais déployer et interagir avec les contrats Cairo 1.0 sur Starknet Testnet !
* Le calcul sur Starknet est 5x moins cher !
* Pour la première fois, la mise à niveau de Mainnet vers Starknet alpha v0.11.0 sera soumise à un vote de gouvernance
* Ceci marque le début de la période de transition avant[Regenèse](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Le déploiement des contrats Cairo 1.0 sur Mainnet ne sera activé qu'après quelques semaines d'exécution sur Testnet, une fois que nous aurons assuré le bon fonctionnement du nouveau système.

## Introduction

Nous sommes ravis d'annoncer que le très attendu Starknet alpha v0.11.0 est en ligne sur Testnet ! Pourquoi est-ce un grand pas pour Starknet ? Dans Starknet v0.11.0, vous pouvez déclarer, déployer et exécuter[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)contrats intelligents. Nous introduisons également un nouvel appel système qui permet une transition en douceur des contrats existants vers une implémentation Cairo 1.0.

Cairo 1.0 améliore Starknet sous deux aspects différents. Premièrement, il améliore l'expérience de développement en offrant un langage de programmation plus riche, qui introduit (entre autres) la gestion des types/génériques/traits/erreurs dans Cairo. Deuxièmement, Cairo 1.0 joue un rôle clé dans le parcours de décentralisation de Starknet : les contrats Cairo 1.0 envoyés dans Starknet alpha v0.11.0 sont compilés vers Sierra. Sierra garantit que chaque exécution de contrat est prouvable, ce qui est une propriété cruciale dans un Starknet décentralisé.

Une autre amélioration importante qui arrive dans cette version est une réduction de 5 fois les coûts de calcul. Cela rendra Starknet encore plus convivial pour les applications à forte intensité de calcul. Plus de détails ci-dessous.

## Se préparer pour la regénèse

Starknet alpha v0.11.0 marque le début de la période de transition, qui permettra de se préparer avant la regenèse de Starknet. Le plan Regenesis de Starknet a été publié[il y a quelques mois et se concentre sur la transition d'un système basé sur Cairo 0 à un système basé sur](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)1.0.

Pendant la période de transition, les contrats Cairo 0 existants (s'ils sont évolutifs) ont la possibilité de conserver leur adresse et leur stockage, et de passer en toute transparence leur mise en œuvre vers Cairo 1.0 (voir la section suivante).

En tant qu'utilisateur de Starknet, cela signifie que vous n'avez besoin de mettre à jour votre portefeuille qu'une fois la nouvelle implémentation de Cairo 1.0 de votre compte publiée (vous pourrez le faire à tout moment jusqu'à la Regenesis elle-même). Aucun temps d'arrêt n'est prévu, tous les dapps du système continueront de fonctionner comme d'habitude.

Après la Regenesis, Starknet cessera de prendre en charge les contrats Cairo 0 restants dans tout le système. Cela sera bien communiqué à l'avance et les développeurs disposeront de suffisamment de temps pour migrer leurs contrats. La période de transition devrait durer quelques mois et les développeurs dapp peuvent déjà commencer à migrer leur implémentation vers Cairo 1.0. À la fin de la période de Transition, la Regénèse aura lieu.

## Migration en douceur vers le Caire 1.0

Avec la transition vers Cairo 1.0, les contrats Cairo 0 existants sont obsolètes et ne seront plus pris en charge lors de Regenesis. Pour permettre aux contrats Cairo 0 évolutifs de continuer à fonctionner, même après la Regenesis, et de conserver l'état construit jusqu'à ce moment-là, nous avons ajouté un nouvel appel système — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Les contrats évolutifs n'ont aucun problème avec la mise à niveau vers une implémentation Cairo 1.0, mais le proxy sous-jacent (le contrat qui contient l'état réel) sera toujours bloqué avec l'implémentation Cairo 0. L'appel système \`replace_class\` résout ce problème en permettant au contrat de proxy de remplacer sa classe sous-jacente, c'est-à-dire de conserver la même adresse et le même stockage, mais de remplacer l'implémentation.

## Le calcul est maintenant 5 fois moins cher !

Aujourd'hui, les frais de transaction de Starknet ont deux composants principaux : le calcul et les données en chaîne. L'élément de calcul des frais de transaction Starknet est déterminé par le coût marginal de vérification de sa preuve sur L1 (voir les[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)pour plus de détails).

À l'origine, nos étapes de 200 m du Caire dans une preuve qui nécessite 5 m de gaz pour la vérification ont conduit à une estimation naïve de 0,05 gaz par étape du Caire. Depuis, nous sommes passés à[preuves récursives](https://medium.com/starkware/recursive-starks-78f8dd401025)qui permettent une réduction significative du coût de vérification L1 (seule la racine d'un arbre de récursivité atteint L1). Il est maintenant temps de mettre à jour nos estimations initiales en conséquence - le prix de chaque étape du Caire sur L2 sera réduit de 5x et coûtera désormais 0,01 gaz.

Cette réduction des coûts est significative pour les applications à forte intensité de calcul, par exemple les contrats de compte avec des signatures non natives. Les transactions simples verront une légère réduction des coûts (~ 5%). Dans les futures versions, nous gérerons le deuxième composant : les coûts de données en chaîne. Une fois que des alternatives aux données en chaîne seront introduites dans Starknet (alias Volition), la réduction des coûts se fera sentir à tous les niveaux.

## Premier vote sur la gouvernance de Starknet

La première phase de Starknet Governance a été lancée (plus de détails[ici](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Les membres de la communauté peuvent désormais participer à l'élaboration de Starknet via un canal supplémentaire, à savoir voter sur les changements de protocole.

Les premières phases de Starknet Governance se concentreront sur les mises à niveau du protocole Starknet. Chaque mise à niveau de version de Starknet sera d'abord déployée sur Testnet ; les électeurs auront une période de 6 jours pour examiner et tester la version mise à jour car elle fonctionne sur Goerli. Pendant ce temps, une proposition d'instantané sera ouverte et la communauté pourra voter pour approuver ou non la nouvelle version pour le déploiement de Mainnet.

Si la proposition obtient une majorité de votes "OUI" au cours de la période de vote de 6 jours, la proposition est acceptée et Starknet Mainnet sera mis à jour en conséquence.

Starknet alpha v0.11.0 est la première version de Starknet qui est soumise à un vote. Le vote Starknet alpha v0.11.0 sera ouvert pendant six jours à compter du déploiement de Testnet.

Liens pertinents :

* [Espace instantané](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Page de découverte de la délégation](https://delegate.starknet.io/)
* Fil de discussion Starknet alpha v0.11.0 sur le forum de la communauté[](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Le Caire 1.0 et Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) est une représentation intermédiaire qui se compile en assemblage du Caire (CASM). Avant Starknet alpha v0.11.0, un développeur compilerait Cairo 0 dans CASM et enverrait le résultat au séquenceur Starknet. Avec Cairo 1.0, les développeurs compilent leur code vers Sierra, et envoient cette représentation intermédiaire au séquenceur. Le séquenceur le compilera ensuite dans CASM. Sierra est garanti pour compiler en "CASM sûr", c'est-à-dire un sous-ensemble de CASM qui ne peut pas échouer, ce qui rend chaque exécution prouvable. Cela garantit que le séquenceur pourra facturer des frais même pour les transactions annulées, protégeant du DOS. Pour plus d'informations, consultez[la documentation](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 utilisera la version[Cairo 1.0-alpha.6](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Cette version est proche de[feature parity](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)avec Cairo 0, avec tous les appels système Starknet déjà présents.

Notez que le séquenceur Starknet utilise une version de compilateur fixe, ce qui signifie que les améliorations du langage peuvent ne pas être immédiatement disponibles dans Starknet et ne seront disponibles qu'après une mise à jour de la version de Starknet. Plus précisément, alors que les améliorations qui affectent la compilation Cairo 1.0 → Sierra peuvent prendre effet immédiatement, les modifications apportées au compilateur Sierra → CASM (voir les[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)pour plus de détails) devront attendre une mise à jour de Starknet.

## Quoi de neuf?

### Nouveau type de transaction — Déclarer v2

Nous ajoutons[un nouveau type de transaction](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)pour déclarer les classes Cairo 1.0.

Cette nouvelle version de transaction \`declare\` est similaire à la version existante de \`declare\`, avec deux distinctions importantes :

* L'objet de classe envoyé représente maintenant Sierra plutôt que CASM, c'est-à-dire que la sémantique de la classe est définie par la représentation Sierra.
* L'utilisateur signe également le hachage de classe compilé. Il s'agit d'une étape cruciale jusqu'à ce que la compilation Sierra → CASM soit prouvée dans le cadre du système d'exploitation Starknet.

Pour plus de détails, voir[la documentation](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Du point de vue du développeur, l'expérience reste la même. Après avoir écrit votre code Cairo 1.0, vous pouvez utiliser la CLI pour déclarer la classe.

**Notez qu'initialement, les transactions \`declare v2\` ne seront pas acceptées sur Starknet Mainnet. Après une période d'expérimentation sur Testnet, le nouveau type de transaction sera activé sur Mainnet et les classes Cairo 1.0 seront disponibles.**

### Poséidon est là

[Poseidon](https://www.poseidon-hash.info/)est une famille de fonctions de hachage conçues pour avoir des circuits algébriques très efficaces. En tant que tels, ils peuvent être très utiles dans les systèmes de preuve ZK tels que les STARK et les SNARK. À partir de Starknet alpha v0.11.0, les développeurs pourront utiliser Poseidon. De plus, certains des calculs de hachage qui font partie du protocole Starknet passeront à Poséidon (en particulier, le hachage de classe, le hachage de classe compilé et certaines parties de l'engagement d'état utiliseront Poséidon, voir[la documentation](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)pour plus de détails). À l'avenir, davantage de composants internes passeront à l'utilisation de la fonction de hachage Poséidon.

La version exacte et les paramètres utilisés dans Starknet peuvent être trouvés[ici](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Changements divers

Comme les versions précédentes de Starknet, une mise à niveau a également des implications pour nos API et d'autres composants de bas niveau. Ci-dessous, nous les listons et abordons les changements spécifiques qui ont été apportés :

* Les transactions d'invocation/déclaration v0 ne sont plus prises en charge
* Les messages L1→L2 nécessitent désormais[frais](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Autrement dit, les messages envoyés sans frais ne seront pas traités par le séquenceur Starknet
* Le format de données en chaîne est[modifié](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [Modifications de l'API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(toutes les modifications ne sont pas répertoriées ici, veuillez vous référer à la documentation pour une liste exhaustive) :
* ajouté un nouveau point de terminaison \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` renvoie les deux classes Cairo 0 / Cairo 1.0 (selon le hachage demandé)
* \`get_state_update\` a une nouvelle section pour les classes remplacées et les déclarations sont réparties entre les classes Cairo 0 et Cairo 1.
* \`estimate_fee\` et \`simulate_tx\` peuvent désormais ignorer la validation
* A[nouvelle version](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC

## Quelle est la prochaine étape ?

Maintenant que toute l'infrastructure liée à Cairo 1.0 a été mise en place, vous pouvez vous attendre à :

* Autres améliorations linguistiques apportées à Cairo 1.0
* Améliorations des performances :[comme promis](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), nous continuons d'avancer vers une augmentation significative du TPS. La prochaine étape de la feuille de route est la transition vers le séquenceur[Rust](https://github.com/starkware-libs/blockifier), qui est développé à l'air libre sous la licence Apache 2.0. Le nouveau séquenceur utilisera le[rouille CairoVM](https://github.com/lambdaclass/cairo-rs)et le nœud complet[Papyrus](https://github.com/starkware-libs/papyrus), formant le Performance Trio.
* Hors chaîne[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! Dans cette version, nous avons géré la composante calculatoire du coût de la transaction. Dans les prochaines versions, nous gérerons les coûts de données en chaîne, qui sont aujourd'hui le coût dominant pour les transactions moyennes.

![](/assets/starknet-alpha-v0.11.0-diagram.png)