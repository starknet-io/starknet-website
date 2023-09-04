Vous êtes-vous déjà retrouvé à oublier de retirer vos actifs de Mainnet après les avoir fait passer par Starkgate ? Eh bien, grâce au travail incroyable de nos développeurs, vous pouvez désormais dire adieu à ce souci.

### Nous sommes ravis d'annoncer que[SpaceShard](https://www.spaceshard.io/)a introduit une nouvelle fonctionnalité passionnante dans Starkgate : les retraits en 1 clic !

Grâce à la fonction de retrait en un clic, vous pouvez désormais récupérer sans effort vos actifs pontés depuis Mainnet sans avoir à lancer une transaction de retrait distincte. Plus besoin de vous soucier d'oublier de retirer ou de faire face à des procédures de retrait compliquées. 🥳🥳🥳

![Cette fonctionnalité simplifie le processus, vous permettant de retirer vos actifs sans effort en un seul clic.](/assets/meme-image-spaceshard.jpg "Cette fonctionnalité simplifie le processus, vous permettant de retirer vos actifs sans effort en un seul clic.")

## Rejoignez notre programme de testeurs précoces !

Nous vous invitons à rejoindre notre programme de testeurs précoces pour découvrir de première main la commodité et l'efficacité de la fonction de retrait en 1 clic de Starkgate. Visitez le site Web**[Starkgate](https://starkgate.starknet.io/terms)**aujourd'hui pour devenir un testeur précoce et explorer cette avancée passionnante dans la technologie de pontage.

## Comment l'utiliser?

Allez à**[https://goerli.starkgate.starknet.io](https://goerli.starkgate.starknet.io/)pour l'option testnet**ou à**\[https://starkgate.starknet.io/](https://starkgate.starknet.io/**)\ *\* pour le réseau principal.

Assurez-vous de vous connecter avec vos portefeuilles Metamask et Argent/Braavos.

![Assurez-vous de vous connecter avec vos portefeuilles Metamask et Argent/Braavos.](/assets/metamask-argent-braavos-connection.jpg)

Rendez-vous dans l'onglet retrait, saisissez le montant que vous souhaitez retirer, puis cochez «*Utiliser le service de retrait automatique par SpaceShard*».

![](/assets/withdrawl-tab.jpg)

Selon le portefeuille que vous utilisez, une fenêtre contextuelle apparaîtra. Dans ce cas, le portefeuille Argent est connecté à Starkgate (voir image ci-dessous).

![](/assets/argent-popup.jpg)

Confirmez la transaction sur le portefeuille Argent. Il déposera les jetons dans le pont Starkgate et une petite taxe ETH au fournisseur de services en un clic.

Une fois la transaction confirmée, vous pouvez vérifier le statut de votre transaction sur**[Starkscan](https://starkscan.co/)**ou**[Voyager](https://voyager.online/).**

![](/assets/transaction-is-being-processed-on-sn.jpg)

Le service de retrait en un clic attendra que la transaction soit acceptée sur L1.

![](/assets/transaction-gets-accepted-on-l1.-.jpg)

En attendant, l'utilisateur peut retourner à Starkgate pour vérifier l'état de la demande de retrait. Pour vérifier l'historique des retraits, cliquez sur le widget Argent situé dans le coin supérieur droit. Une fois accepté sur L1, les utilisateurs seront avertis sur Starkgate via une fenêtre contextuelle.

![](/assets/starkgate-page.jpg)

Voici un aperçu de l'historique des retraits. Une fois le retrait effectué, les utilisateurs peuvent accéder à la confirmation en cliquant sur le bouton Ethereum Tx. Cela les redirigera vers StarkScan.

![](/assets/withdrawal-history-confirmation.jpg)

Une double vérification est toujours indispensable et les utilisateurs peuvent également trouver la confirmation sur**[Etherscan](https://etherscan.io/)**. La dernière étape du retrait devrait ressembler à l'image ci-dessous, où le jeton USDC a été transféré sur le compte du destinataire L1.

![](/assets/etherscan.jpg "Voila ! Si simple, si Starknet !")

*Voila ! Si simple, si Starknet !*

## Q&A Comment faire traiter ma transaction par le relais Starkgate ?

> *Obtenez le coût actuel du gaz pour traiter votre transaction, puis créez un appel multiple sur L2. Cette transaction doit contenir le transfert du coût du gaz à l'adresse du relais et retirer des jetons du contrat de pont. Votre transaction sera traitée lorsqu'elle sera acceptée sur L1. Un exemple d'application de nœud est disponible ici.*

## Quels jetons puis-je utiliser pour payer le coût de l'essence ?

> *Actuellement, nous acceptons les jetons L2 ETH. Plus tard, nous étendrons les options de paiement des frais à d'autres jetons tels que WBTC et USDC/T.*

## Quels jetons sont pris en charge par le relais ?

> *Sur Mainnet, le relais gère 4 jetons : ETH, USDC, USDT et WBTC. Pour plus de détails, consultez cette liste d'adresses. Sur Testnet, seuls les jetons ETH sont disponibles.*

## Comment calculez-vous le coût du gaz?

> *Le coût du gaz est calculé en utilisant la moyenne du prix de la redevance de base enregistrée sur les blocs L1 au cours des 8 dernières heures. À l'avenir, le coût du gaz sera encore plus bas en raison du mécanisme de traitement par lots que nous avons mis en place. En gros, à mesure que de plus en plus d'utilisateurs utilisent le service, il deviendra moins cher pour tout le monde ! Pure magie 🪄✨*

## Combien de temps faut-il au relayeur pour traiter mon retrait ?

> *Le relais tentera d'exécuter votre transaction le plus rapidement possible. Mais dans certains cas, les frais du réseau L1 sont plus élevés que prévu, ce qui signifie que le relais attendra de meilleurs prix avant d'exécuter les retraits.*

## Comment le relais exécute-t-il le retrait ?

> *Le relais exécute les retraits par lot. Ainsi, chaque fois que le relais détecte des retraits valides, il les met en mémoire tampon, puis exécute une fonction de retrait via un appel multiple. Cette approche nous permet de réduire le coût du gaz pour l'utilisateur.*

## Que se passe-t-il si j'ai fait une erreur et que je n'ai pas défini le bon coût de gaz ?

> *Dans ce cas, le relais ignorera votre transaction et le coût du gaz payé ne sera pas remboursé. La seule façon d'obtenir vos jetons est de faire un appel manuel pour les retirer. Nous développons la version où vous pourrez obtenir un remboursement pour le tx et le rendre plus rapide à la demande si vous êtes prêt à payer plus d'essence.*

## Puis-je faire une deuxième transaction pour couvrir le coût du gaz manquant ?

> *Actuellement, ce n'est pas possible mais nous sommes en train de développer une solution afin que vous puissiez choisir entre une vitesse de retrait normale et une vitesse plus rapide.*

## J'ai payé le bon prix d'essence mais ma transaction n'a pas été traitée, pourquoi ?

> *Soit votre transaction n'a pas été bien exécutée :*
> 
> \- La transaction n'est pas un multi-appel
> 
> \- Le jeton utilisé pour payer le coût du gaz n'est pas ETH
> 
> *Ou:*
> 
> \- Le relais attend une baisse du prix du gaz sur L1. Si ce n'est pas le cas, n'hésitez pas à contacter l'équipe SpaceShard sur[Discord](https://discord.gg/6PKcsRPQKC).

## Où puis-je tester le relais Starkgate ?

> *Vous aurez accès à la fonction de relais via Starkgate, le pont officiel de Starknet.*

Nous espérons que ce guide vous a été utile pour vous montrer comment utiliser la fonction de retrait en un clic de SpaceShard sur Starkgate.

Si vous avez des questions ou avez besoin de plus d'informations, n'hésitez pas à nous contacter via notre communauté**Discord**. Nous travaillons en permanence pour améliorer l'expérience de transition et nous sommes ravis de vous compter parmi les premiers testeurs.

Bon retrait !

[](https://medium.com/tag/starkware?source=post_page-----5e96e5dc152c---------------starkware-----------------)