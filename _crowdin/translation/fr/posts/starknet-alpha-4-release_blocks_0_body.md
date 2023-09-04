### Des temps passionnants à venir

Alpha 4 est sorti aujourd'hui sur Goerli. Cette version est la version candidate de Mainnet et, si tout se passe comme prévu, elle sera déployée sur Mainnet d'ici la fin du mois.

Alpha 4 fait suite à la version riche en fonctionnalités d'Alpha 3, qui comprenait, entre autres, des améliorations des temps de compilation du Caire, des constructeurs de contrats et bien plus encore (voir les [notes de version complètes](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Important à noter : il s'agit toujours d'une version Alpha ; pour déployer votre contrat sur le déploiement Mainnet, veuillez suivre les directives [d'intégration](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu) des nouvelles applications.

### Nouvelles fonctionnalités

Bien que l'objectif principal de cette version soit de se préparer au déploiement du réseau principal, elle inclut également plusieurs nouvelles fonctionnalités :

#### Obtenir l'adresse de ce contrat

Les contrats peuvent désormais obtenir leur propre adresse via le nouvel appel système \`get_contract_address\`. Nous pouvons enfin mettre fin au contrat de selfie.

Contrat selfie RIP : septembre 2021-novembre 2021

— Francesco Ceccon (@ceccon_me) [10 novembre 2021](https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw)

#### Bloquer le hachage

Les blocs sont désormais identifiés via un hachage plutôt que par un identifiant. Cela fait suite à notre dernière transition vers les hachages de transaction. Toutes les API ont été mises à jour en conséquence. Nous publierons bientôt une documentation technique complète du système, qui comprendra également la spécification de la structure de bloc.

#### Adresses de contrat

Cette version introduit un changement dans la façon dont les adresses de contrat sont calculées. L'adresse est un hachage Pedersen sur l'adresse de l'appelant, un sel (aléatoire ou choisi par le déployeur), le hachage du code de contrat et le hachage des arguments du constructeur, tous ajoutés par un préfixe.



Dans la version actuelle, l'adresse de l'appelant est toujours égale à 0, mais dans les versions futures, cela permettra le déploiement de contrats directement à partir de contrats existants.

Notez que ce schéma est très similaire à CREATE2.

[Voir les notes de version complètes](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Ponts à jetons

Les ponts à jetons sont un élément crucial de l'infrastructure Starknet. Ils permettent de transférer des fonds vers et depuis Starknet. Le pont n'est pas déployé au moment de la publication, mais il devrait être disponible dans quelques jours, accompagné de la documentation complète de ses fonctionnalités et de son utilisation. Une chose importante à noter est que le pont utilise le protocole de messagerie [L1<>L2](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). En tant que tel, il offre des délais de retrait courts - une fois qu'un retrait est inclus dans un lot et accepté sur L1, les fonds sont disponibles instantanément pour l'utilisateur sur L1.

Il s'agit de la première version des ponts à jetons, et nous aimerions avoir des commentaires de l'écosystème à ce sujet.

### Rejoindre Starknet

Il n'y a jamais eu de meilleur moment pour rejoindre la communauté grandissante de Starknet. Vous pouvez rejoindre la conversation dans le discord [Starknet](https://discord.gg/uJ9HZTUk2Y), participer à un [atelier en ligne](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)ou utiliser l'un des [tutoriels](https://www.cairo-lang.org/docs/hello_starknet/index.html) pour commencer à créer votre propre application.

Mise à jour (novembre 2021) : Starknet Alpha est en direct sur Ethereum Mainnet