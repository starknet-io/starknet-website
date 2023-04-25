### TL;DR

* Cairo 1.0 est la première évolution majeure depuis l'[introduction de Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209) deux ans plus tôt
* Cairo 1.0 offrira aux développeurs un langage de programmation plus sûr, plus simple et plus utilisable
* Au cœur de Cairo 1.0 se trouvera **Sierra**, une couche de représentation intermédiaire qui promet une plus grande stabilité à long terme pour les programmes Cairo
* Sierra fait progresser Cairo pour être utilisé dans un réseau permissionless :\
  - **Protéger le réseau**: il permet une protection DoS plus robuste\
  - **Protéger l'utilisateur **: il permet une résistance à la censure du niveau d'Ethereum. Cairo 1.0 affectera Starknet de nombreuses manières. Il affectera également [Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Nous publierons plus d'informations sur Regenesis dans les semaines à venir.

### Introduction

En 2020, nous avons publié Cairo, un langage de programmation Turing-complet, et avons fait un grand pas vers la computation vérifiable à l'aide de STARKs. Aujourd'hui, nous vous annonçons **Cairo 1.0**, la plus grande avancée de Cairo à ce jour. Il introduira un langage amélioré, avec des fonctionnalités qui amélioreront l'utilisabilité, la sécurité et le confort. Il est conçu pour répondre aux exigences de Starknet en tant que réseau permissionless, permettant au protocole de devenir plus simple et plus sûr.\
Le développement est déjà en cours et nous nous attendons à ce que la première version soit publiée prochainement.

Dans ce post, nous allons décrire le parcours de Cairo jusqu'à présent et partager des détails sur les fonctionnalités à venir.

### Le parcours de Cairo

Jusqu'en 2020, des connaissances de niche étaient nécessaires pour construire des programmes pouvant être vérifiés par STARK pour du calcul général. Ce n'était possible que pour ceux qui avaient compris les complexes mathématiques derrière les STARKs. Plus précisément, pour chaque logique métier, c'est-à-dire chaque calcul, il était nécessaire de générer une représentation intermédiaire algébrique (AIR) - un ensemble de contraintes polynomiales qui représente le calcul spécifique.

Cairo est né de la prise de conscience que le calcul vérifiable devrait être rendu disponible aux développeurs du monde entier. Cairo permet aux développeurs d'exploiter la puissance des STARKs.

Depuis, la communauté des développeurs s'est emparée de Cairo pour construire avec enthousiasme. Tout ce qui se trouve dans l’écosystème florissant de Starknet est aujourd’hui basé sur Cairo. Entre[Starknet](https://starkware.co/starknet/) et [StarkEx](https://starkware.co/starkex/), les applications alimentées par Cairo ont traité plus de 220M de transactions, ont minté plus de 65 millions de NFTs, et ont géré une valeur de 700 milliards de dollars, toutes réglées sur Ethereum.

Bien que Cairo ait rendu les STARK accessibles, il a été conçu à l'origine comme un langage d'assemblage, et en tant que tel, il a été écrit comme un langage de bas niveau.

![Un exemple pour les programmes précoces qui ont été écrits au Caire](/assets/cairocode_01.png "Un exemple pour les programmes précoces qui ont été écrits au Caire")

Suite aux commentaires des développeurs et à l'avènement de [Starknet](https://starkware.co/starknet/), nous avons progressivement rendu Cairo plus expressif et plus convivial pour les développeurs.

![Un exemple du contrat Cairo ERC-20 démontrant la prise en charge de variables, d'instructions conditionnelles, d'erreurs et de la bibliothèque UINT256](/assets/cairocode_02.png "Un exemple du contrat du Caire ERC-20 démontrant le support des variables, si des instructions, des erreurs, et de la bibliothèque UINT256")

Mais nous avons rapidement conclu qu'il était temps de faire un grand bond en avant et, au lieu d'améliorations incrémentales de Cairo, opter pour une transformation audacieuse.

### Cairo 1.0

Pour Cairo 1.0, nous avons construit un tout nouveau compilateur à partir de zéro, qui offrira aux développeurs des fonctionnalités de sécurité et leur permettra d'écrire des contrats de manière plus simple et plus expressive.

#### Présentation de Sierra : pour que chaque exécution de Cairo puisse être prouvée

La principale nouveauté de Cairo 1.0 est Sierra (**S**afe **I**nt**e**rmediate **R**ep**r**esent**a**tion - représentation intermédiaire sûre). Sierra constitue une nouvelle couche de représentation intermédiaire entre Cairo 1.0 et le code binaire Cairo. Sierra a pour objectif de garantir que chaque exécution de Cairo - c'est-à-dire un programme Cairo et son entrée - puisse être prouvée.

Sierra promet aux développeurs de Cairo un code plus durable pour l'avenir. Une plus grande stabilité est assurée par le fait que les contrats StarkNet n'auront pas besoin d'être recompilés en cas d'amélioration du système sous-jacent (e. ., CPU AIR architecture change, améliorations de la traduction finale de la Sierra vers le code d'octet du Cairo).

**Prouver chaque course du Caire.**Dans l'ancien Caire, un run du Caire peut aboutir à trois cas — TRUE, FALSE ou échec. Les exécutions échouées ne peuvent pas être prouvées. Sierra, veille à ce qu'une course au Caire ne échoue jamais, et ne peut aboutir qu'à VRAI ou FALSE. Cela garantit que chaque course du Caire peut être prouvée.

Cette introduction de la Sierra a des implications importantes pour StarkNet en tant que réseau sans permission. La Sierra garantit que même les transactions annulées peuvent être incluses dans les blocs StarkNet. Cette propriété permettra au protocole StarkNet de rester souple et simple sans avoir à ajouter des mécanismes crypto-économiques complexes.\
Deux exemples significatifs :

1. Les séquenceurs seront en mesure de percevoir des frais sur les transactions annulées, ce qui permettra à StarkNet d'empêcher le Sequencer DoS de manière bien établie.
2. La mise en œuvre de transactions L1 forcées sera possible, permettant à StarkNet d'hériter de la pleine résistance à la censure de l'Ethereum.

### **Caractéristiques de la langue**

Le Cairo 1.0 apportera de nombreuses améliorations au langage de programmation lui-même. Tout ce qui est listé ci-dessous ne fera pas partie de la première version, mais elle fait partie de la feuille de route.

#### **Syntaxe améliorée**

* Plus aucun*local*et*tempvar*. Nous avons maintenant seulement besoin de*let*pour les gouverner toutes les variables.
* Amélioration de la syntaxe des instructions*if*

```python
#Ancien
if cond ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#Nouveau
si cond { x = x + 1; }
```

#### **Type de garanties de sécurité**

Le compilateur utilisera la frappe forte pour améliorer la sécurité du code. Par exemple :

* Les pointeurs pointeront toujours vers la mémoire initialisée.
* Les dictionnaires seront toujours écrasés, au lieu de laisser la responsabilité d'appeler squash_dict au programmeur.

#### **Plus facile à utiliser pour les constructions de langue**

Par exemple :

* Boucles pour boucles

```
let sum = 0
for x in iter {
  sum = sum + x;
}
```

* Expressions booléennes
* Nombre entier (avec une division entière normale 👯)
* Protection contre le débordement pour les types pertinents
* Conditions booléennes

```
#Old
If cond1:
  if cond2:
       # Some code
  else if cond3:
       # Same code
__________________________________
#New
If cond1 && (cond2 || cond3) { … }
```

#### **Un système de types à part entière**

* Types de données abstraites (i.e. Énumération semblable à la rouille)

```
option enum<T> {
 Quelques : T,
 Aucune,
}
résultat de correspondance {
 Some(r) => {..},
 Aucun => {..},
}
```

* Caractéristiques

```
trait Ajouter<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b : Uint256 = 4;
a + b; // Évalué à 5 de type Uint256.
```

#### **Bibliothèques plus intuitives**

(ex: dict, tableaux)

* Dites<Uint256, MyStruct>;
* Tableau<MyOtherStruct>;

#### **Code plus optimisé**

Pas besoin d'indiquer explicitement l'allocation des variables locales — auto détectée et faite automatiquement.

#### **Meilleure intégration du compilateur**

Activer un meilleur support IDE, une meilleure gestion des paquets et une meilleure facilitation des contributions de la communauté.

### **Conclusion**

Deux ans après que le Caire a été utilisé pour la première fois en production, nous développons le Caire 1.0, qui permettra d'améliorer l'exactitude, la sécurité et la syntaxe. Cela va faire un grand pas en avant, permettant aux développeurs d'écrire plus facilement leurs contrats StarkNet.

Dans un autre poste, à venir, nous partagerons plus de détails sur la façon dont le Caire 1. affectera la regénésie de StarkNet et la façon dont les développeurs devraient se préparer à sa publication.