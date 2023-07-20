## Introduction

Les preuves de stockage sont un moyen cryptographique de suivre les informations de la blockchain afin qu'elles puissent être partagées entre les chaînes. Semblables aux oracles, les preuves de stockage fournissent la preuve que l'information est vraie. Cependant, contrairement aux oracles, ils n'exigent*pas*de faire confiance à un tiers pour cette preuve ; au contraire, avec les preuves de stockage, la confiance est intégrée dans le stockage.

Dans certains cas, les preuves de stockage peuvent remplacer les oracles. Dans d'autres cas, les preuves de stockage peuvent les améliorer et ouvrir de nouveaux cas d'utilisation de la blockchain qui n'étaient pas possibles auparavant.

Examinons donc en détail les preuves de stockage - ce qu'elles sont, comment elles fonctionnent, leurs cas d'utilisation et comment elles peuvent améliorer (et parfois remplacer) les oracles.

## Que sont les preuves de stockage ?

Les preuves de stockage permettent d'ouvrir des engagements cryptographiques d'état, Elles peuvent être optimisées en les mariant avec des S\[N/T]ARKS. . Ces preuves de validité prouvent qu'un état particulier existait et était valide à un bloc particulier dans le passé.

Fondamentalement, les chaînes de blocs sont des bases de données qui contiennent des données cryptographiquement engagées à l'aide d'arbres Merkle, d'arbres Merkle Patricia, d'arbres Verkle, etc.). Puisque toutes les données sont validées, nous pouvons prouver que certaines informations sont encapsulées dans un état donné. Cependant, avec des schémas d'engagement simples, la taille de cette preuve devient plus importante à mesure que la taille des données qu'elle inclut devient plus grande. La vérification de ces preuves en chaîne devient trop coûteuse pour être pratique.

Les preuves de stockage, d'autre part, lorsqu'elles sont utilisées conjointement avec STARK ou SNARK, peuvent être relativement petites et vous permettre de vérifier un état spécifique, à un moment précis et sur n'importe quel domaine - sans faire confiance à un tiers. . Au lieu de tiers, ils s'appuient sur la sécurité de la chaîne sous-jacente elle-même.

Pourquoi est-ce important? Ethereum aujourd'hui n'est plus la simple chaîne monolithique (L1) qu'elle était il y a plusieurs années. Avec l'avènement des solutions L2, les données sont désormais réparties sur plusieurs chaînes.

Des hypothèses synchrones sur l'état de la chaîne ne peuvent plus être faites. De nombreuses solutions de partage de données sont désormais actives, telles que les systèmes de messagerie>L2, les ponts inter-chaînes et les oracles. Mais le problème avec ces solutions actuelles est qu'elles incluent la confiance dans un tiers tel que les relais, les signataires multisignatures et les comités. Les preuves de stockage nous permettent de valider l'état d'une blockchain à tout moment à l'aide d'engagements cryptographiques ne faisant aucune confiance à un tiers.

## Les cas d'utilisation des preuves de stockage

Étant donné que les preuves de stockage nous permettent de "compresser" efficacement une blockchain et de transmettre les données ailleurs, elles ont de nombreuses applications. Le coût de vérification abordable, une propriété intégrale des preuves de stockage, permet de valider la preuve sur la chaîne*destination*, minimisant ainsi le besoin de développer des systèmes de messagerie inter-chaînes.

Les cas d'utilisation potentiels incluent :

* **Accès aux informations générales**d'une chaîne à une autre sur l'état et les transactions sur la blockchain.
* **Systèmes de vote inter-chaînes simplifiés**. Les utilisateurs détiennent fréquemment leurs actifs sur une chaîne A lente mais plus sécurisée, mais certains votes basés sur des jetons se produisent sur une chaîne B avec des transactions moins chères. Cela oblige l'utilisateur à sauter son vote ou à payer d'énormes frais de transaction pour relier ses actifs de A à B, voter, puis les relier à A. Dans de tels cas, les preuves de stockage permettent aux utilisateurs de prouver leur solde de jetons sur la chaîne A. à un bloc donné et voter en toute transparence sur la chaîne B.
* **Alternative aux ponts inter-chaînes**. Actuellement, les ponts inter-chaînes supposent un niveau de confiance envers un tiers car ils impliquent généralement un intermédiaire, tel qu'un dépositaire ou une organisation autonome décentralisée (DAO). Cet intermédiaire est chargé de s'assurer qu'un certain nombre de jetons sont reçus sur la chaîne source par l'intermédiaire et de détenir les actifs sur la chaîne source. Ensuite, les jetons correspondants sont frappés sur la chaîne de destination. Les preuves de stockage peuvent permettre des ponts inter-chaînes sans confiance, car une application de contrat intelligent sur la chaîne de destination pourrait valider une transaction où les actifs ont été transférés au contrat intelligent de pont sur la chaîne source et créer les actifs pontés. Cependant, dans de nombreux cas, la nécessité de transférer des actifs entre chaînes peut être éliminée puisque la propriété d'actifs sur une autre chaîne peut être simplement prouvée avec des preuves de stockage.
* **UX améliorée pour les cas d'utilisation de l'abstraction de compte (AA)**. AA a été mis en œuvre dans différentes chaînes et est considéré comme une innovation cruciale pour l'intégration du premier milliard d'utilisateurs dans l'espace blockchain. Avec les preuves de stockage, les portefeuilles pourraient inclure la fonctionnalité supplémentaire de restauration de l'accès uniquement si le portefeuille n'a envoyé aucune transaction sur une longue durée. Des vérifications supplémentaires nécessitant l'utilisation de certaines données provenant d'autres chaînes pourraient également être appliquées.

![Image typique d'écoulement de pont croisé](/assets/typical-cross.bridge-flog-imagewebp.webp "Image typique d'écoulement de pont croisé")

## Un exemple de preuve de stockage

La génération de preuves de stockage sur des chaînes compatibles EVM est simple. Par exemple, la bibliothèque Web3.js a la fonction \`getProof\` qui peut générer une preuve de l'état d'un contrat sur Ethereum (et d'autres chaînes compatibles EVM telles que Polygon ou BSC). Une adresse de contrat et l'emplacement de stockage du contrat doivent être transmis à la fonction.

Dans Ethereum, les contrats intelligents utilisent un magasin clé-valeur pour stocker les données dans leur stockage. Chaque élément de données est stocké dans un emplacement spécifique appelé « emplacement de stockage ». Les emplacements de stockage sont des emplacements de mémoire dans le stockage du contrat et sont identifiés par un index unique. Regardons un exemple de contrat intelligent avec le code suivant déployé sur le réseau principal Ethereum à[0xcc…da8b](https://etherscan.io/address/0xcca577ee56d30a444c73f8fc8d5ce34ed1c7da8b#code).

![](/assets/blog-post-image-2-.webp)

La variable \`owner\` serait stockée à l'emplacement 0. Maintenant, pour générer la preuve que le \`propriétaire\` de ce contrat était une adresse A, nous pouvons utiliser la fonction \`getProof\` comme suit :

![](/assets/blog-post-image-3-.webp)

\
La sortie du code ci-dessus ressemble à ceci :

![](/assets/blog-post-image-4-.webp)

Le « storageProof » renvoyé contient la preuve de stockage pour la variable « owner ». Étant donné qu'Ethereum utilise Merkle Patricia Trees pour valider l'état des comptes et leur stockage, le stockage généré peut être utilisé pour prouver un emplacement de stockage (ou l'état du compte). Cependant, comme indiqué précédemment, ces preuves ne sont pas suffisamment évolutives pour discuter des transferts de messages inter-chaînes. L'utilisation de mathématiques ZK complexes en plus de cela peut réduire le calcul nécessaire pour vérifier la preuve.

## Alors, comment les preuves de stockage se comparent-elles et contrastent-elles avec les oracles ?

De par leur conception, les blockchains ne peuvent pas récupérer les données hors chaîne. Cela maintient une blockchain sans confiance, mais introduit également des limites à la capacité d'un contrat intelligent à prendre des décisions basées sur des événements du monde réel. Les oracles sont également couramment utilisés pour obtenir des informations historiques sur la blockchain, car l'acquisition directe de ces données est très difficile et par conséquent susceptible d'erreurs.

Pour résoudre ce problème, des entités spéciales nommées**oracles**ont été créées pour récupérer ces données hors chaîne (ou récupérer les résultats de calculs hors chaîne lourds). Actuellement, ces oracles nécessitent qu'un tiers, tel qu'une institution ou un réseau décentralisé d'opérateurs de nœuds, soumette des données en chaîne qui deviennent publiques pour les utilisateurs et les contrats intelligents. Cette hypothèse de confiance est actuellement inévitable, mais pas idéale (bien que plusieurs équipes travaillent à minimiser cette exigence de confiance comme Pragma)

**[Chainlink](https://chain.link/)**est un exemple d'oracle blockchain qui fournit une grande variété de données du monde réel (cours des actions, données météorologiques, etc.), des services de calcul hors chaîne pour minimiser le coût des calculs lourds en chaîne, et des services inter-chaînes qui lisent et écrivent des informations entre différentes chaînes de blocs.

Étant donné que les contrats intelligents n'ont pas d'autre moyen de savoir ce qui se passe dans le monde réel que d'utiliser des oracles, les oracles sont devenus un élément indispensable de l'écosystème de la blockchain.

## L'état des oracles sur Starknet

Sur Starknet testnet, le Chainlink mentionné précédemment fournit actuellement des flux de données de prix pour sept paires de crypto-monnaies et a[en partenariat](https://www.coindesk.com/business/2023/02/06/starkware-partnering-with-chainlink-for-starknet-growth/)avec l'équipe Starkware pour "accélérer encore le développement d'applications et la croissance générale de l'écosystème StarkNet". Chainlink minimise l'hypothèse de confiance avec un réseau décentralisé de nœuds qui fournissent des données provenant de sources hors chaîne, mais l'agrégation des données se produit hors chaîne.

**[Pragma](https://www.empiric.network/)**et**[Stork Network](https://www.stork.network/)**sont deux des plus grands fournisseurs d'oracle sur Starknet, opérant à la fois sur le réseau principal et sur le réseau test. Parallèlement aux tickers de prix pour plusieurs paires de crypto-monnaies, Pragma travaille à la mise en œuvre d'un flux aléatoire vérifiable sur le réseau principal qui permettrait aux protocoles de demander un caractère aléatoire sécurisé sur la chaîne. Les flux de prix sur Pragma sont basés sur les soumissions de prix par de grandes institutions et des teneurs de marché, et l'agrégation des prix se produit sur la chaîne en tirant parti de la technologie ZK efficace.

![](/assets/blog-post-image-5-.webp)



## Les oracles peuvent-ils être remplacés ou améliorés par des preuves de stockage ?

Dans certains cas, oui, une preuve de stockage peut remplacer un oracle.

Toutes les données fournies par les oracles ne doivent pas nécessairement être fournies par un tiers. Dans certains cas, les données fournies par un oracle étaient déjà disponibles sur la chaîne (sous la forme d'un stockage en chaîne ou d'une transaction) et peuvent être récupérées en jetant un coup d'œil à un état antérieur de la blockchain. Dans ces cas, une preuve de stockage peut remplacer le besoin de faire confiance à un tiers et à l'oracle, et permettre aux contrats intelligents de s'appuyer entièrement sur la sécurité des engagements cryptographiques.

Dans d'autres cas, où les preuves de stockage ne peuvent pas complètement remplacer un oracle, elles peuvent souvent**améliorer avec des fonctionnalités supplémentaires, telles que les suivantes :

* Les oracles transmettent les informations des fournisseurs de données aux consommateurs de données. Cependant, tous les consommateurs de données ne sont pas sur la même chaîne. A l'aide de preuves de stockage, il est possible d'effectuer des calculs**sur les données de différentes sources et d'exporter le résultat vers d'autres chaînes**.
* La chaîne source préférée pour ces données est celle avec un calcul bon marché, et la validation de la preuve peut être effectuée de manière rentable sur d'autres chaînes de destination.
* [Herodotus](https://www.herodotus.dev/)est l'un des leaders de la recherche dans ce domaine, et ils offrent un accès aux données inter-domaines sur différentes chaînes Ethereum en utilisant des preuves de stockage et des mathématiques ZK. Pragma s'associe également à Herodotus pour permettre la prise en charge d'Oracle inter-chaînes dans un avenir proche.
* Les preuves de stockage peuvent**unifier l'état de plusieurs cumuls**, et même permettre des lectures synchrones*entre*couches Ethereum.
* Une autre amélioration est une récupération**sans confiance des données historiques publiées sur la chaîne**. Les chaînes de blocs avec état telles qu'Ethereum et Starknet enregistrent et préservent cryptographiquement leur état grâce à des structures de données spécialisées, telles que les arbres Merkle/Verkle et les MPT. Cela permet de prouver l'inclusion d'éventuelles données stockées dans ces structures. Par conséquent, toutes les données passées publiées sur la chaîne peuvent également être approuvées, récupérées et utilisées dans d'autres applications (même pas nécessairement sur la même chaîne). Ces preuves de stockage permettent aux contrats intelligents d'accéder à des informations remontant même au bloc de genèse.
* Pragma étudie la viabilité du développement d'un oracle en tant que L3 sur Starknet à partir duquel les données peuvent être "extraites" sur d'autres chaînes et vérifiées à l'aide de preuves de stockage. Les avantages d'avoir l'oracle dans un domaine différent au-dessus d'un réseau informatique bon marché comme Starknet sont les suivants :
* Étant donné que le L3 pourrait être une chaîne hautement personnalisable, divers paramètres peuvent être ajustés à**pour obtenir un consensus plus rapidement sur les blocs**, réduisant considérablement la latence des données pour l'oracle.
* En combinaison avec des preuves de stockage, les données à faible latence**peuvent être transférées de manière asynchrone vers d'autres chaînes,**après avoir atteint un consensus dans la chaîne source.
* La possibilité de**renforcer la confiance dans les données**en développant un système intégré dans la L3 pour réduire les fournisseurs de données malhonnêtes. S'ils reçoivent des incitations appropriées, les fournisseurs de données sur le L3 pourraient miser leurs actifs en garantie de la publication de données correctes. Étant donné que le consensus de l'ensemble du réseau sur L3 est nécessaire avant que d'autres chaînes puissent utiliser les données, les données fournies par l'oracle peuvent être considérées comme sécurisées par la participation du validateur sur la L3.

# Conclusion

Au cours des derniers mois, l'utilisation croissante des L2 sur Ethereum nous a donné une vision plus claire de l'avenir de l'industrie. Le récit L2 a gagné du terrain avec des réseaux comme[Starknet](https://www.starknet.io/en),[Optimism](https://www.optimism.io/)et[Arbitrum](https://arbitrum.io/). Cependant, l'un des principaux soutiens à sa croissance a été la mise en œuvre d'un système de messagerie inter-chaînes décentralisé. Bien qu'elles n'en soient encore qu'à leurs balbutiements, les preuves de stockage promettent d'incroyables améliorations à ce problème.

Un grand merci à[Marcello Bardus](https://twitter.com/0xmarcello)&[Kacper Koziol](https://twitter.com/kacperkozi)pour avoir révisé cet article.