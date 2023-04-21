### TL;DR

* La première version de StarkNet Bridge, StarkGate Alpha, est en direct sur**[Testnet](https://goerli.starkgate.starknet.io/)**, et sur**[Mainnet](https://starkgate.starknet.io/)**!
* Nous attendons des commentaires de la communauté sur la manière d'améliorer les choses. Vous pouvez envoyer vos commentaires pour[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)et[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Le déploiement du réseau principal suivra bientôt (mise à jour, 9 mai 2022 : StarkGate est en ligne sur le réseau principal)

J'aime ! Nous sommes ravis de publier StarkGate Alpha, la première version du pont de StarkNet, qui est maintenant disponible sur le réseau testnet Goerli, avec le déploiement du réseau principal à suivre bientôt.*

\*(mise à jour, 9 Mai 2022 : StarkGate est en direct sur le réseau principal)

**Avertissement important : il s'agit d'une version alpha sur StarkGate Alpha (lire les petits caractères ci-dessous!).**

![](/assets/starkgate_01.png)

Avant de continuer, allez voir ! [Réseau de test StarkGate](https://goerli.starkgate.starknet.io/),[réseau principal StarkGate](https://starkgate.starknet.io/)

StarkGate sert de passerelle entre Ethereum et[StarkNet](https://starknet.io/), et permet aux utilisateurs de faire tout ce qu'ils peuvent attendre d'un pont.

#### **Où puis-je trouver des informations sur le fonctionnement de StarkGate ?**

Pour comprendre le fonctionnement de StarkGate, lisez la[documentation technique](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)et jetez un œil au[code](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Notez que c'est la première version, et nous vous invitons à nous faire part de vos commentaires et suggestions sur la façon d'améliorer à la fois[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)et[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Quels jetons seront pris en charge par StarkGate?**

* StarkGate Alpha sur Goerli supporte l'ETH et quelques autres jetons ERC-20. La liste complète et les adresses contractuelles correspondantes, à la fois sur Ethereum et sur StarkNet, sont disponibles dans ce[dépôt](https://github.com/starkware-libs/starknet-addresses).
* Sur le réseau principal, dans un premier temps, StarkGate Alpha ne supportera l'ETH que pour permettre l'utilisation du mécanisme de frais. Plus tard, nous ajouterons le support pour WBTC, USDC, USDT et DAI. Vous pouvez voir les adresses contractuelles pertinentes dans ce[dépôt](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Plus loin sur la route, nous publierons le mécanisme pour ajouter le support des jetons supplémentaires.

#### **Quelles seront les limitations de sécurité de StarkGate Alpha sur le réseau principal ?**

StarkGate Alpha sur le réseau principal est lancé avec deux limitations — afin de réduire les risques liés à l'utilisation d'une version Alpha :

1. La valeur totale verrouillée (TVL) dans le pont de connexion sur L1 limitera la quantité de chaque type de jeton.
2. Le montant maximum de chaque transaction envoyée de L1 à L2 (Ethereum→StarkNet) via StarkGate sera limité.

Nous prévoyons d'alléger progressivement ces limites et de les lever complètement au fur et à mesure que la confiance augmente. Les paramètres mis à jour peuvent être trouvés dans la documentation[de StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alpha et What It Means

Comme toujours, nous vous rappelons que StarkNet est actuellement dans sa phase**Alpha**:

* Les choses peuvent se casser. En cas d'échec catastrophique, vos fonds pourraient être perdus (**lisez la clause de non-responsabilité ci-dessous**!).
* Les contrats StarkNet Alpha et StarkGate peuvent être mis à jour sans timelock. Alors que nous prévoyons d'annoncer ces mises à niveau bien à l'avance, dans le cas de risques de sécurité imminents (par exemple, si un bogue critique est trouvé), la mise à niveau peut être appliquée avec peu ou pas d'avertissement.
* Le code du pont, ainsi que des portions de StarkNet Alpha, n'ont pas encore été vérifiés. Les audits ABDK et Nethermind de StarkGate Alpha seront bientôt terminés.

Nous encourageons tous les utilisateurs à aider à améliorer le pont de connexion en fournissant leurs commentaires en utilisant l'une des plateformes suivantes :

1. [Dépôt frontal de StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [Dépôt des contrats de StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [Shamans StarkNet](http://community.starknet.io/)

Pour les questions et le support des développeurs, rejoignez le[serveur de discord StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Clause de non-responsabilité

***StarkNet Alpha est un nouveau système complexe qui n'a pas été entièrement vérifié. Il en va de même pour le pont StarkNet. Comme tous les systèmes logiciels complexes, StarkNet et le pont peuvent contenir des bogues qui, dans les cas extrêmes, pourrait entraîner une perte de tous vos fonds. Alors,***marchez prudemment et méfiez-vous !******

*L’écosystème StarkNet est un ensemble d’équipes et d’individus indépendants en pleine expansion, sur lequel StarkWare n’exerce aucune surveillance et n’assume aucune responsabilité. Tous les projets développés par les membres de l'écosystème peuvent contenir des bugs qui, dans des cas extrêmes, pourraient entraîner une perte de tous vos fonds. En outre, au fur et à mesure que des contrats plus intelligents sont déployés, le potentiel de bugs dangereux non intentionnés et même de fraudes et de tapis augmentent. Ainsi, traitez tous les contrats intelligents sur StarkNet comme vous traitez les contrats intelligents sur Ethereum, et n'utiliser que ceux que vous avez de bonnes raisons de faire confiance à la sécurité.*