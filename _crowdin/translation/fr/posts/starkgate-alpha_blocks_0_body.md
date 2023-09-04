### TL;DR

* La première version de StarkNet Bridge, StarkGate Alpha, est en direct sur**[Testnet](https://goerli.starkgate.starknet.io/)**et sur**[Mainnet](https://starkgate.starknet.io/)**!
* Nous attendons les commentaires de la communauté sur la façon dont les choses peuvent être améliorées. Vous pouvez envoyer vos commentaires pour[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)et[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Le déploiement du réseau principal suivra bientôt (mise à jour, 9 mai 2022 : StarkGate est en ligne sur le réseau principal)

Excitation! Nous sommes ravis de publier StarkGate Alpha, la première version de StarkNet's Bridge, désormais disponible sur Goerli testnet, et le déploiement de Mainnet suivra bientôt.*

\*(mise à jour, 9 mai 2022 : StarkGate est en ligne sur Mainnet)

**Avis de non-responsabilité important : il s'agit d'une version alpha sur StarkGate Alpha (lisez les petits caractères ci-dessous !).**

![](/assets/starkgate_01.png)

Avant de continuer, allez y jeter un œil ! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate sert de passerelle entre Ethereum et[StarkNet](https://starknet.io/)et permet aux utilisateurs de faire tout ce qu'ils peuvent attendre d'un pont.

#### **Où puis-je trouver des informations sur le fonctionnement de StarkGate ?**

Pour comprendre le fonctionnement de StarkGate, lisez la[documentation technique](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)et jetez un œil au[code](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Notez qu'il s'agit de la première version, et nous sollicitons vos commentaires et suggestions sur la façon d'améliorer à la fois[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)et[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Quels jetons seront pris en charge par StarkGate ?**

* StarkGate Alpha sur Goerli prend en charge ETH et quelques autres jetons ERC-20. La liste complète et les adresses contractuelles pertinentes, à la fois sur Ethereum et StarkNet, sont disponibles dans ce[repo](https://github.com/starkware-libs/starknet-addresses).
* Sur Mainnet, dans un premier temps, StarkGate Alpha ne prendra en charge que l'ETH pour permettre l'utilisation du mécanisme de redevance. Plus tard, nous ajouterons la prise en charge de WBTC, USDC, USDT et DAI. Vous pouvez voir les adresses de contrat pertinentes dans ce[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Plus tard, nous publierons le mécanisme permettant d'ajouter la prise en charge de jetons supplémentaires.

#### **Quelles limites de sécurité StarkGate Alpha aura-t-il sur Mainnet ?**

StarkGate Alpha sur Mainnet est lancé avec deux limitations — afin de réduire les risques liés à l'utilisation d'une version Alpha :

1. La valeur totale verrouillée (TVL) dans le pont sur L1 limitera le montant de chaque type de jeton.
2. Le montant maximum de chaque transaction envoyée de L1 à L2 (Ethereum → StarkNet) via StarkGate sera limité.

Nous prévoyons d'assouplir progressivement ces limitations et de les lever complètement à mesure que la confiance grandit. Les paramètres mis à jour peuvent être trouvés dans la documentation[de StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alpha et ce que cela signifie

Comme toujours, nous vous rappelons que StarkNet est actuellement dans sa phase**Alpha**:

* Les choses peuvent casser. S'ils échouent de manière catastrophique, vos fonds pourraient être perdus (**lire l'avertissement ci-dessous**!).
* Les contrats StarkNet Alpha et StarkGate peuvent être mis à niveau sans verrouillage horaire. Bien que nous nous attendions à annoncer ces mises à niveau bien à l'avance, en cas de risques de sécurité imminents (par exemple, si un bogue critique est découvert), la mise à niveau peut être appliquée avec peu ou pas d'avertissement.
* Le code du pont, ainsi que des parties de StarkNet Alpha, n'ont pas encore été audités. Les audits ABDK et Nethermind de StarkGate Alpha seront bientôt terminés.

Nous encourageons tous les utilisateurs à aider à améliorer le pont en fournissant leurs commentaires en utilisant l'une des plateformes suivantes :

1. [Dépôt frontal StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [Dépôt des contrats StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [Les chamans de StarkNet](http://community.starknet.io/)

Pour les questions et l'assistance aux développeurs, rejoignez le serveur de discorde[StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Clause de non-responsabilité

***StarkNet Alpha est un système nouveau et complexe qui n'a pas été entièrement audité. Il en va de même pour le pont StarkNet. Comme tous les systèmes logiciels complexes, StarkNet et le pont peuvent contenir des bogues qui, dans des cas extrêmes, pourraient entraîner une perte de tous vos fonds. Alors,***prudent et méfiez-vous !******

*L'écosystème StarkNet est un ensemble important et en croissance rapide d'équipes et d'individus indépendants, sur lesquels StarkWare n'a aucune surveillance et n'assume aucune responsabilité. N'importe lequel des projets développés par les membres de l'écosystème peut contenir des bogues qui, dans des cas extrêmes, pourraient entraîner une perte de tous vos fonds. De plus, à mesure que de plus en plus de contrats intelligents sont déployés, le potentiel de bogues nuisibles involontaires et même d'escroqueries malveillantes et de tirages de tapis augmente. Alors, traitez tous les contrats intelligents sur StarkNet comme vous traitez les contrats intelligents sur Ethereum, et n'utilisez que ceux auxquels vous avez de bonnes raisons de croire comme étant sûrs.*