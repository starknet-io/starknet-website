### Temps fascinant en avance

L'Alpha 4 est sorti aujourd'hui sur Goerli. Cette version est la candidate à la publication du réseau principal et, si tout se passe comme prévu, elle sera déployée sur le réseau principal d’ici la fin du mois.

L'Alpha 4 suit la version empaquetée de l'Alpha 3, qui inclut, entre autres, améliorations des temps de compilation du Caire, des constructeurs de contrats et bien plus encore (voir les[notes de version complètes](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Important à noter : il s'agit toujours d'une version Alpha — pour déployer votre contrat sur le déploiement du réseau principal, veuillez suivre les directives[embarquement](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)des nouvelles applications.

### Nouvelles fonctionnalités

Bien que cette version se concentre principalement sur la préparation au déploiement du réseau principal, elle inclut également plusieurs nouvelles fonctionnalités :

#### Obtenir l'adresse de ce contrat

Les contrats peuvent maintenant obtenir leur propre adresse via la nouvelle syscall \`get_contract_address\`. Nous pouvons, enfin, mettre le contrat de selfie au repos.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Contrat de selfie RIP: Septembre 2021-Novembre 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10 Novembre 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Hachage du bloc

Les blocs sont maintenant identifiés par hachage plutôt que par Id. Cela fait suite à notre dernière transition vers les hachages de transactions. Toutes les APIs ont été mises à jour en conséquence. Nous publierons bientôt la documentation technique complète du système, qui inclura également la spécification de la structure du bloc.

#### Adresses contractuelles

Cette version introduit un changement dans la façon dont les adresses du contrat sont calculées. L'adresse est un hash de Pedersen sur l'adresse de l'appelant, un sel (choisi au hasard ou par le déploieur), le hash du code du contrat et le hachage des arguments du constructeur, tous ajoutés par un préfixe.

```
Hash(PREFIX, caller_address, selt, contract_hash, ctr_args_hash)
```

Dans la version actuelle, l'adresse de l'appelant est toujours égale à 0, mais dans les versions futures, cela permettra le déploiement de contrats directement à partir de contrats existants.

Notez que ce schéma est très similaire à CREATE2.

[Voir les notes de version complètes](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Ponts de jeton

Les ponts de jetons sont un élément crucial de l'infrastructure de StarkNet. Ils permettent de transférer des fonds depuis et vers StarkNet. Le pont de connexion n'est pas déployé au moment de la publication, mais il devrait être disponible dans quelques jours — ainsi que la documentation complète de sa fonctionnalité et de son utilisation. Une chose importante à noter est que le pont utilise le protocole de messagerie[L1<>L2](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). En tant que tel, il offre de courts délais de rétractation — une fois qu'un retrait est inclus dans un lot et accepté sur L1, les fonds sont disponibles instantanément pour l'utilisateur sur L1.

Il s'agit de la première version des ponts jetons et nous aimerions recevoir des commentaires de l'écosystème sur celui-ci.

### Rejoignez StarkNet

Il n'y a jamais eu de meilleur moment pour rejoindre la communauté grandissante de StarkNet. Vous pouvez rejoindre la conversation dans la[discord StarkNet](https://discord.gg/uJ9HZTUk2Y), participer à un[atelier en ligne](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), ou utilisez l'un des[tutoriels](https://www.cairo-lang.org/docs/hello_starknet/index.html)pour commencer à construire votre première application.

**Mise à jour (Nov. 2021):**StarkNet Alpha est en direct sur le réseau principal Ethereum