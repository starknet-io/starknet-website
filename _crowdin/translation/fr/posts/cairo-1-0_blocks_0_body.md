### TL;DR

* Le Caire 1.0 est la première release majeure après[l'introduction du Caire](https://medium.com/starkware/hello-cairo-3cb43b13b209)il y a deux ans
* Cairo 1.0 offrira aux développeurs un langage de programmation plus sûr, plus simple et plus utilisable
* Au cœur du Caire 1.0 sera**Sierra**, une couche de représentation intermédiaire qui promet une plus grande stabilité à long terme pour les programmes du Caire
* Sierra avance le Caire pour servir dans un réseau sans permission:\
  -**Protéger le réseau**: il permet une protection DoS plus robuste\
  -**Protéger l'utilisateur**: il permet la résistance à la censure de niveau Ethereum-grade Cairo 1. affectera StarkNet de plusieurs façons. Il affectera également la[Régénésie](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Nous publierons plus d'informations sur la Régenèse dans les semaines à venir.

### Introduction

En 2020, nous avons publié le Caire, un langage de programmation Turing-complet, et avons fait un grand pas vers le soutien du calcul vérifiable à l'aide de STARKs. Aujourd'hui, nous vous annonçons**le Caire 1.0**, la plus grande avancée du Caire à ce jour. Il introduira un langage amélioré, avec des fonctionnalités qui amélioreront la convivialité, la sécurité et la commodité. Il est conçu pour supporter les exigences de StarkNet en tant que réseau sans permission, permettant ainsi au protocole de devenir plus simple et plus sûr.\
Le développement est déjà en cours, et nous nous attendons à ce que la première version arrive bientôt.

Dans ce poste, nous décrirons le voyage du Caire jusqu'à présent et partagerons des détails sur les fonctionnalités à venir.

### Le voyage du Caire

Jusqu'en 2020, des connaissances de niche étaient nécessaires pour construire des programmes éprouvables STARK pour le calcul général. Ce n'était possible que pour ceux qui ont compris le complexe mathématique derrière STARKs. Spécifiquement, pour chaque logique commerciale, c.-à-d. chaque calcul, il fallait générer une représentation intermédiaire algébrique (AIR) — un ensemble de contraintes polynomiales qui représentent le calcul spécifique.

Le Caire est né de la prise de conscience que des calculs vérifiables devraient être mis à la disposition des développeurs partout. Le Cairo permet aux développeurs d'exploiter la puissance des STARKs.

Depuis, la communauté des développeurs s'est emparée du Caire pour construire avec enthousiasme. Tout ce qui se trouve dans l’écosystème florissant de StarkNet est aujourd’hui basé sur le Caire. Entre[StarkNet](https://starkware.co/starknet/)et[StarkEx](https://starkware.co/starkex/), les applications Caire ont traité plus de 220M de transactions, a miné plus de 65 millions de NFTs, et a géré une valeur de 700 milliards de dollars, tous se sont installés sur Ethereum.

Bien que le Caire ait rendu les STARKs accessibles, il a été conçu à l'origine comme un langage d'assemblage et, en tant que tel, il a été écrit comme un langage de bas niveau.

![Un exemple pour les programmes précoces qui ont été écrits au Caire](/assets/cairocode_01.png "Un exemple pour les programmes précoces qui ont été écrits au Caire")

Demandés par les commentaires des développeurs et la montée de[StarkNet](https://starkware.co/starknet/), nous avons progressivement rendu le Caire plus expressif et plus convivial pour les développeurs.

![Un exemple du contrat du Caire ERC-20 démontrant le support des variables, si des instructions, des erreurs, et de la bibliothèque UINT256](/assets/cairocode_02.png "Un exemple du contrat du Caire ERC-20 démontrant le support des variables, si des instructions, des erreurs, et de la bibliothèque UINT256")

Mais nous en sommes rapidement arrivés à la conclusion qu'il est temps de faire un grand bond en avant et, au lieu d'améliorations incrémentielles au Caire, allez pour une transformation plus audacieuse.

### Cairo 1.0

Pour le Caire 1. nous avons construit un tout nouveau compilateur depuis le début, qui fournira aux développeurs des fonctionnalités de sécurité. et leur permettra de rédiger des contrats de manière plus simple et plus expressive.

#### Introduction de la Sierra: s'assurer que chaque course du Caire peut être prouvée

Le principal ajout au Caire 1. is Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). La Sierra constitue une nouvelle couche de représentation intermédiaire entre le Caire 1.0 et le code d'octet du Caire. Le but de Sierra est de s’assurer que chaque exécution du Caire, c’est-à-dire un programme du Caire et son entrée, peut être prouvée (voir plus bas).

Sierra promet aux développeurs de Cairo un code plus évidente. Une plus grande stabilité est assurée par le fait que les contrats StarkNet n'auront pas besoin d'être recompilés en cas d'amélioration du système sous-jacent (e. ., CPU AIR architecture change, améliorations de la traduction finale de la Sierra vers le code d'octet du Cairo).

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