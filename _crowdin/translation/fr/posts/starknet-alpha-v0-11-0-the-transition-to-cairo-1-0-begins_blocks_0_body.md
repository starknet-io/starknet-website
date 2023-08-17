## TL;DR

* Starknet alpha v0.11.0 est disponible sur Testnet
* Vous pouvez maintenant déployer et interagir avec les contrats du Cairo 1.0 sur Starknet Testnet !
* Le calcul sur Starknet est 5x moins cher!
* Pour la première fois, la mise à jour du réseau principal vers l'alpha de Starknet v0.11.0 sera soumise à un vote de gouvernance
* Ceci marque le début de la période de transition avant[Régénésie](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Déploiement du Caire 1. les contrats sur le réseau principal ne seront activés qu'après quelques semaines de fonctionnement sur Testnet, une fois que nous nous assurerons que le nouveau système fonctionne correctement.

## Introduction

Nous sommes heureux de vous annoncer que le très attendu Starknet alpha v0.11.0 est en ligne sur Testnet ! Pourquoi est-ce un grand pas pour Starknet ? Dans Starknet v0.11.0, vous pouvez déclarer, déployer et exécuter[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)contrats intelligents. Nous introduisons également un nouvel appel de système qui permet une transition en douceur des contrats existants vers une implémentation du Caire 1.0.

Le Cairo 1.0 améliore Starknet dans deux aspects différents. Tout d'abord, il améliore l'expérience de développement en offrant un langage de programmation plus riche, qui introduit (entre autres) des types, des génériques/caractéristiques/gestion des erreurs au Caire. Deuxièmement, le Cairo 1.0 joue un rôle clé dans le voyage de décentralisation de Starknet : les contrats Cairo 1.0 envoyés dans Starknet alpha v0.11.0 compilent en Sierra. La Sierra garantit que chaque exécution de contrat est prouvable, ce qui est un bien crucial dans un Starknet décentralisé.

Une autre amélioration importante qui est à venir dans cette version est une réduction de coût 5x pour le calcul. Cela rendra Starknet encore plus convivial pour les applications lourdes de calcul. Plus de détails ci-dessous.

## Préparation à la régénération

Starknet alpha v0.11.0 marque le début de la période de transition, ce qui permettra de se préparer avant la Régenèse de Starknet. Le plan de régénération de Starknet a été[publié](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)il y a quelques mois et il se concentre sur la transition d'un système basé sur le Caire 0 vers un système basé sur le Caire 1.0.

Pendant la période de transition, les contrats Cairo 0 existants (si ils sont évolutifs) ont la possibilité de conserver leur adresse et leur stockage, et la transition transparente de leur mise en œuvre au Caire 1. (voir la section suivante).

En tant qu'utilisateur de Starknet, cela signifie que vous n'avez besoin de mettre à niveau votre portefeuille qu'une fois le nouveau Cairo 1. l’implémentation de votre compte est publiée (vous serez en mesure de le faire à tout moment jusqu’au Regenesis lui-même). Aucun temps d'arrêt n'est attendu, tous les dapps du système continueront à fonctionner comme d'habitude.

Après la Régenèse, Starknet cessera de supporter les contrats restants du Cairo 0 à travers le système. Cela sera bien communiqué à l'avance et les développeurs auront suffisamment de temps pour migrer leurs contrats. La période de transition devrait durer quelques mois, et les développeurs dapp peuvent déjà commencer à migrer leur implémentation vers Cairo 1.0. À la fin de la période de transition, la Régenèse se produira.

## Migration en douceur vers le Caire 1.0

Avec la transition vers le Caire 1.0, les contrats existants du Caire 0 sont obsolètes et ne seront plus soutenus par Regenesis. Permettre aux contrats du Caire 0 de continuer à fonctionner, même après la Régenèse, et maintenons l'état construit jusqu'à ce moment-là, nous avons ajouté un nouvel appel système — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Les contrats de mise à niveau ne posent aucun problème avec la mise à niveau vers le Caire 1. implémentation, mais le mandataire sous-jacent (le contrat qui détient l'état réel) sera toujours coincé avec l'implémentation du Caire 0. Le système \`replace_class\` résout ce problème en permettant au contrat de proxy de remplacer sa classe sous-jacente, i. . Gardez la même adresse et le même stockage, mais remplacez l'implémentation.

## Le calcul est maintenant 5x moins cher!

Aujourd'hui, les frais de transaction Starknet ont deux composantes principales : le calcul et les données sur la chaîne. L'élément de calcul des frais de transaction Starknet est déterminé par le coût marginal de la vérification de sa preuve sur L1 (voir la[documentation](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)pour plus de détails).

À l'origine, nos 200m de marches du Caire dans une preuve qui exige une vérification de 5 m de gaz à des fins de vérification ont conduit à une estimation naïve de 0,05 gaz par pas de Caire. Depuis lors, nous avons déplacé vers[preuves récursives](https://medium.com/starkware/recursive-starks-78f8dd401025)qui permettent une réduction significative du coût de vérification L1 (seule la racine d'une arborescence de récursion atteint L1). Il est maintenant temps de mettre à jour nos estimations d'origine en conséquence — le prix de chaque étape du Caire sur L2 sera réduit de 5x, et va maintenant coûter 0. 1 gaz.

Cette réduction des coûts est significative pour les applications lourdes de calcul, par exemple les contrats de compte avec des signatures non natives. Les transactions simples entraîneront une réduction mineure des coûts (~ 5%). Dans les versions futures, nous gérerons le deuxième composant : les coûts de données sur la chaîne. Une fois que les alternatives aux données sur la chaîne seront introduites à Starknet (aka Volition), la réduction des coûts sera ressentie à tous les niveaux.

## Premier vote de Starknet Gouvernance

La première phase de la gouvernance de Starknet a été lancée (plus de détails[ici](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Les membres de la communauté peuvent maintenant participer à la formation de Starknet à travers un canal supplémentaire, à savoir voter sur les changements de protocole.

Les premières phases de Starknet Governance se concentreront sur les mises à jour de protocoles Starknet. Chaque mise à jour de Starknet sera d'abord déployée sur Testnet ; les électeurs auront une période de 6 jours pour examiner et tester la version mise à jour telle qu'elle fonctionne sur Goerli. Pendant ce temps, une proposition de Snapshot sera ouverte, et la communauté peut voter pour approuver la nouvelle version pour le déploiement du réseau principal.

Si la proposition obtient une majorité de votes «oui» au cours de la période de 6 jours, la proposition passe et Starknet Mainnet sera mise à niveau en conséquence.

Starknet alpha v0.11.0 est la première version de Starknet qui peut être votée. Le vote de Starknet alpha v0.11.0 sera ouvert pendant six jours à partir du déploiement de Testnet.

Liens pertinents :

* [Espace de capture instantanée](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Page de découverte de la délégation](https://delegate.starknet.io/)
* Sujet de discussion de Starknet alpha v0.11.0 sur le[forum communautaire](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Le Caire 1.0 et la Sierra

Sierra (**S**afe**I**nt**e**rmédiate**R**ep**r**esent**a**tion) est une représentation intermédiaire qui se compile en assemblage du Caire (CASM). Pre Starknet alpha v0.11.0, un développeur compilera Cairo 0 dans CASM et enverra le résultat au séquenceur Starknet. Avec Cairo 1.0, les développeurs compilent leur code en Sierra, et envoient cette représentation intermédiaire au séquenceur. Le séquenceur le compile ensuite en CASM. La Sierra est garantie de compiler en « CASM sûr », c'est-à-dire un sous-ensemble de CASM qui ne peut échouer, rendant chacune et chaque exécution prouvable. Cela garantit que le séquenceur sera en mesure de facturer des frais même pour les transactions annulées, en se protégeant de DOS. Pour plus d'informations, voir[la documentation](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 utilisera la version[Cairo 1.0-alpha.6](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Cette version est proche de la parité de fonctionnalités[](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)avec le Cairo 0, avec tous les appels système Starknet déjà présents.

Notez que le séquenceur Starknet utilise une version corrigée du compilateur, ce qui signifie que les améliorations de la langue peuvent ne pas être immédiatement disponibles dans Starknet, et ne seront disponibles qu'après une mise à jour de la version de Starknet. Plus précisément, bien que les améliorations qui affectent le Caire 1. → La compilation de la Sierra peut prendre effet immédiatement, les changements dans le compilateur Sierra → CASM (voir les[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)pour plus de détails) devront attendre une mise à jour de Starknet.

## Qu'est-ce qui est nouveau ?

### Nouveau type de transaction – déclarer v2

Nous ajoutons[un nouveau type de transaction](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)pour déclarer les classes Cairo 1.0.

Cette nouvelle version de transaction \`declare\` est similaire à celle existante \`declare\`, avec deux distinctions importantes :

* L'objet de classe envoyé représente maintenant la Sierra plutôt que le CASM, c'est-à-dire la sémantique de la classe est définie par la représentation de la Sierra .
* L'utilisateur signe également le hash de la classe compilée. C'est une étape cruciale jusqu'à ce que la compilation de Sierra→CASM soit prouvée dans le cadre de l'OS Starknet.

Pour plus de détails, voir[la documentation](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Du point de vue du développeur, l'expérience reste la même. Après avoir écrit votre code Cairo 1.0, vous pouvez utiliser le CLI pour déclarer la classe.

**Notez que, dans un premier temps, les transactions \`declare v2\` ne seront pas acceptées sur Starknet Mainnet. Après une période d'expérimentation sur Testnet, le nouveau type de transaction sera activé sur le réseau principal, et les classes Cairo 1.0 seront disponibles.**

### Poséidon est là

[Poseidon](https://www.poseidon-hash.info/)est une famille de fonctions de hachage conçues pour avoir des circuits algébriques très efficaces. À ce titre, ils peuvent être très utiles dans les systèmes de certification ZK tels que STARKs et SNARKs. Depuis Starknet alpha v0.11.0, les développeurs pourront utiliser Poseidon. De plus, certains des calculs de hachage qui font partie du protocole Starknet vont passer à Poseidon (en particulier, le hash de la classe, hash de la classe compilée, et des parties de l'engagement d'état utiliseront Poseidon, voir[la documentation](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)pour plus de détails). Dans le futur, plus de composants internes passeront à l'utilisation de la fonction de hachage Poseidon.

La version exacte et les paramètres utilisés dans Starknet peuvent être trouvés[ici](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Changements divers

Comme les versions précédentes de Starknet, une mise à jour a également des implications pour nos API et d'autres composants de bas niveau. Ci-dessous, nous listons ces changements et nous abordons les changements spécifiques qui ont été apportés:

* les transactions appel/declare v0 ne sont plus prises en charge
* Les messages L1→L2 requièrent désormais des[frais](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Autrement dit, les messages envoyés avec zéro frais ne seront pas traités par le séquenceur Starknet
* Le format de données on-chain est[modifié](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [Changements d'API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(toutes les modifications ne sont pas listées ici, veuillez vous référer à la documentation pour une liste exhaustive) :
* a ajouté un nouveau point de terminaison \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` retourne les classes Cairo 0 / Cairo 1.0 (selon le hachage demandé)
* \`get_state_update\` a une nouvelle section pour les classes remplacées, et les déclarations sont partagées entre les classes Cairo 0 et Cairo 1.
* \`estimate_fee\` et \`simulate_tx\` peuvent maintenant passer la validation
* Une[nouvelle version](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)de Starknet JSON-RPC

## Que se passe-t-il ensuite ?

Maintenant que toutes les infrastructures liées au Caire 1.0 ont été mises en place, vous pouvez vous attendre à :

* Autres améliorations de la langue au Caire 1.0
* Améliorations de performance :[comme promis](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), nous continuons à progresser vers une augmentation significative du TPS. L'étape suivante dans la feuille de route est la transition vers le[séquenceur de rouille](https://github.com/starkware-libs/blockifier), qui est développé sous Apache 2. licence. Le nouveau séquenceur utilisera le[CairoVM rouille](https://github.com/lambdaclass/cairo-rs)et le nœud complet[Papyrus](https://github.com/starkware-libs/papyrus)formant le Trio Performance .
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! Dans cette version, nous avons géré le composant de calcul du coût de la transaction. Dans les prochaines versions, nous gérerons les coûts de données sur la chaîne qui sont aujourd'hui le coût dominant pour les transactions moyennes.

![](/assets/starknet-alpha-v0.11.0-diagram.png)