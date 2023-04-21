### TL;DR

* Caïro 1.0 is de eerste grote release na de[introductie van Caïro](https://medium.com/starkware/hello-cairo-3cb43b13b209)twee jaar geleden
* Caïro 1.0 geeft ontwikkelaars een veiligere, eenvoudigere, bruikbaardere programmeertaal
* In het hart van Caïro 1.0 wordt**Sierra**, een intermediaire vertegenwoordigingslaag die meer stabiliteit op lange termijn belooft voor Caïro programma's
* Sierra progressie van Cairo om te dienen in een permissief netwerk:\
  -**Bescherming van het netwerk**: het biedt meer robuuste DoS-bescherming\
  -**Bescherming van de gebruiker**: het maakt censuurresistentie uit Ethereum-grade eCairo 1 mogelijk. zal StarkNet op vele manieren beïnvloeden. Het zal ook van invloed zijn op de[Regenes](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). We zullen de komende weken meer informatie over Regenesis publiceren.

### Introductie

In 2020 hebben we Cairo, een Turing-complete programmeertaal vrijgegeven en een grote stap gezet in de richting van het ondersteunen van verifieerbare berekeningen met behulp van STARKs. Vandaag kondigen we**Caïro 1.0**aan, de grootste vooruitgang tot nu toe. Het zal een verbeterde taal introduceren met functies die de bruikbaarheid, de veiligheid en het gemak zullen vergroten. Het is ontworpen om de eisen van StarkNetwork te ondersteunen als een gedoogloos netwerk, waardoor het protocol eenvoudiger en veiliger wordt.\
De ontwikkeling is al aan de gang en we verwachten dat de eerste versie binnenkort zal plaatsvinden.

In deze post zullen we de reis van Caïro tot nu toe beschrijven en details delen over de toekomstige functies.

### De reis van Caïro

Tot 2020 was niche-kennis nodig om STARK-aantoonbare programma's te bouwen voor algemene berekeningen. Dat was alleen mogelijk voor degenen die het complexe wiskunde achter de STARK's begrepen hebben. Specifiek voor elke bedrijfslogica, dat wil zeggen elke berekening, één nodig om een Algebraïsche Intermediate Vertegenwoordiging (AIR) te genereren - een reeks polynoom kaders die de specifieke berekening weergeeft.

Caïro is geboren uit het besef dat verifieerbare berekeningen overal ter beschikking van ontwikkelaars moeten worden gesteld. Caïro maakt het voor ontwikkelaars mogelijk om de kracht van STARK's te benutten.

De ontwikkelaar gemeenschap heeft sindsdien beslag gelegd op Caïro om enthousiast te bouwen. Alles in het bloeiende Starknet-ecosysteem is vandaag de dag gebaseerd op Caïro. Tussen[StarkNet](https://starkware.co/starknet/)en[StarkEx](https://starkware.co/starkex/)hebben de door Cairo-aangedreven toepassingen meer dan 220M transacties verwerkt, meer dan 65M NFT's gedolven en transacties met $700B afhandelden, allemaal geregeld op Ethereum.

Terwijl Cairo STARK's toegankelijk maakte, was het oorspronkelijk ontworpen als een montagetaal, en als zodanig als een taal van een laag niveau.

![Een voorbeeld voor de vroege programma's die in Caïro zijn geschreven](/assets/cairocode_01.png "Een voorbeeld voor de vroege programma's die in Caïro zijn geschreven")

Gesteld door feedback van ontwikkelaars en de opkomst van[StarkNet](https://starkware.co/starknet/)hebben we Caïro geleidelijk uitdrukkelijker en ontwikkelaarvriendelijker gemaakt.

![Een voorbeeld van het ERC-20 Cairo toont ondersteuning van variabelen, indien verklaringen, fouten en UINT256 bibliotheek](/assets/cairocode_02.png "Een voorbeeld van het ERC-20 Cairo toont ondersteuning van variabelen, indien verklaringen, fouten en UINT256 bibliotheek")

Maar we kwamen al snel tot de conclusie dat het tijd is om een grote sprong voorwaarts te maken en in plaats van incrementele verbeteringen aan Cairo, ga naar een moediger transformatie.

### Cairo 1.0

Voor Caïro 1. we hebben een hele nieuwe compiler gebouwd vanaf de basis en die biedt ontwikkelaars veiligheidsfuncties, en zullen ze in staat stellen om contracten op een eenvoudigere en meer uitdrukkelijke manier te schrijven.

#### Introductie Sierra: ervoor zorgen dat elke kaïro kan worden bewezen

De belangrijkste toevoeging in Caïro 1. is Sierra (**S**van**I**niet**e**rmediate**R**ep**r**esent**a**tion). Sierra is een nieuwe intermediaire vertegenwoordigingslaag tussen Caïro 1.0 en Cairo byte code. Sierra’s doel is om ervoor te zorgen dat elk rendement van Caïro kan worden bewezen (zie hieronder meer).

Sierra belooft een betere toekomstbestendige code van Caïro. Verdere stabiliteit wordt geboden door het feit dat StarkNet-contracten niet opnieuw hoeven te worden samengesteld bij verbeteringen van het onderliggende systeem (bv. ., CPU-AIR architectuur verandert, verbeteringen van de definitieve vertaling van Sierra to Cairo byte code).

**Elke Cairo run.**In de oude Caïro kan een Cairo run in drie gevallen resulteren — TRUE, FALSE, of fout. Mislukte uitvoeringen kunnen niet worden bewezen. Sierra, zorgt ervoor dat een run van Caïro nooit zal mislukken en alleen kan leiden tot TRUE of FALSE. Dat zorgt er op zijn beurt voor dat elke rund van Caïro bewezen kan worden.

Deze invoering van Sierra heeft belangrijke gevolgen voor StarkNet als een netwerk zonder permissies. Sierra zorgt ervoor dat zelfs geretourneerde transacties in StarkNet blokken kunnen worden opgenomen. Met deze eigenschap kan het StarkNet protocol lekker en simpel blijven zonder dat het nodig is om complexe crypto-economische mechanismen toe te voegen.\
Twee betekenisvolle voorbeelden:

1. Sequencers kunnen transactiekosten voor teruggedraaide transacties verzamelen, waardoor StarkNet op een goed gevestigde manier Sequencer DoS kan voorkomen.
2. Het implementeren van gedwongen L1 transacties is mogelijk, waardoor StarkNet de volledige censuurresistentie van Ethereum kan erven.

### **Taal mogelijkheden**

Caïro 1.0 biedt veel verbeteringen aan de programmeertaal zelf. Niet alles wat hieronder staat zal deel uitmaken van de eerste vrijlating, maar het maakt wel deel uit van de routekaart.

#### **Verbeterde syntaxis**

* Geen*lokale*en*tempvar*. Nu hebben we alleen*laat*nodig om ze te regeren alle variabelen.
* Verbeterd*als*syntaxis van stellingen

```python
#Oud
als cond ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
if cond { x = x + 1; }
```

#### **Type veiligheid garanties**

De compiler zal sterke typen gebruiken om de veiligheid van de code te verbeteren. Bijvoorbeeld:

* Pointers zullen altijd wijzen op het geïnitialiseerde geheugen.
* Dictionaries zullen altijd worden platgewalst, in plaats van de verantwoordelijkheid om squash_dict te noemen aan de programmeur over te laten.

#### **Makkelijker om taalconstructies te gebruiken**

Bijvoorbeeld:

* Voor lussen

```
let som = 0
voor x in iter {
  som = som + x;
}
```

* Booleaanse uitdrukkingen
* Geheel getal (met reguliere integer divisie 👯)
* Overstromingsbescherming voor de relevante typen
* Booleaanse voorwaarden

```
#Oud
If cond1:
  if cond2:
       # Sommige code
  else if cond3:
       # Dezelfde code
__________________________________
#Nieuwe
If cond1 && (cond2 ~cond3) { … }
```

#### **Een volwaardig type systeem**

* Abstract gegevenstypen (bijv. Rust-achtig nummer)

```
enum Optie<T> {
 Some: T,
 Geen
}
komt overeen met resultaat {
 Iemand (r) => {..},
 Geen => {..},
}
```

* Eigenschappen

```
eigenschap toevoegen<Uint256> {
    fn add(…) { … }
}

let op: Uint256 = 1;
let op: Uint256 = 4;
a + b; // Geëvalueerd naar 5 van het type Uint256.
```

#### **Meer intuïtieve bibliotheken**

(bijv. draad, arrays)

* Dict<Uint256, MyStruct>;
* Reeks<MyOtherStruct>;

#### **Meer geoptimaliseerde code**

Het is niet nodig om de lokale variabelen expliciet toe te wijzen - automatisch gedetecteerd en automatisch uitgevoerd.

#### **Betere compiler integratie**

Betere IDE ondersteuning, pakketbeheer en betere facilitering van gemeenschapsbijdragen.

### **Conclusie**

Twee jaar nadat Caïro voor het eerst in de productie werd gebruikt, ontwikkelen we Cairo 1.0, wat zal leiden tot meer uitdrukkelijkheid, veiligheid en syntaxis. Het zal een grote stap vooruit zetten, waardoor ontwikkelaars gemakkelijker hun StarkNet contracten kunnen schrijven.

In een andere post die binnenkort aankomt, zullen we meer details delen over hoe Caïro 1. zal van invloed zijn op StarkNet's regenesis, en hoe ontwikkelaars de publicatie moeten voorbereiden.