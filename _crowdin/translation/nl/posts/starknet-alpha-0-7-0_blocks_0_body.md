### TL;DR

* StarkNet Alpha 0.7.0 vrijgegeven aan Goerli; vol met verbeteringen
* Contracten kunnen nu worden geüpgraded met behulp van de Proxy Upgrade Patroon
* Contracten kunnen nu Events uitstoten
* Ondersteuning voor het langverwachte Blok Nummer en Blokkeer Tijdstempel systeem oproepen

### Introductie

We zijn blij om Alpha 0.7.0, een versie vol nieuwe functies en verbeteringen te kunnen gebruiken. Een van de beste stimulatoren voor StarkNet in de afgelopen maanden was de grotere betrokkenheid van de gemeenschap bij het vormgeven van de toekomst van StarkNet. Deze versie beantwoordt aan een aantal brandende behoeften van de gemeenschap.

#### Wijzigingen in Naming Conventie

De observant-lezer heeft misschien opgemerkt dat de vorige versie van StarkNet Alpha Alpha 4 heet, terwijl we nu Alpha 0,7 vrijgeven. We hebben besloten het speciale Alpha versienummer te laten vervallen en vertrouwen in plaats daarvan alleen op de cairo-versie die ermee verbonden is.

### Nieuwe functies

#### Contract Verbeterbaarheid

OpenZeppelin’s[Proxy Upgrade Patroon](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)wordt nu volledig ondersteund voor contracten upgrades in StarkNet. Het proxy-patroon is de gebruikelijke methode om contractupgrades over Ethereum in te schakelen. Alpha 0.7.0 maakt dit patroon mogelijk boven StarkNet.

We hebben een korte[tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html)gemaakt om een basis implementatie van het patroon te laten zien, en OpenZeppelin is al hard bezig met het implementeren van een standaard contract voor het proxypatroon; zie het[prototype](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Blok Nummer en Blok Tijdstempel

Alpha 0.7.0 voegt twee nieuwe systeemoproepen toe waar veel ontwikkelaars om hebben gevraagd. Deze oproepen geven toegang tot het bloknummer en de tijdstempel van het blok. Het bloknummer geeft het nummer van het huidige uitgevoerde blok terug. De bloktijdsaanduiding geeft de tijdstempel die de Volgorde heeft gegeven aan de creatie van het blok.

Je kunt een voorbeeld zien van hoe je deze functies kunt gebruiken in de[tutorial](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Evenementen

Verrassing! Een functie die voor een toekomstige versie was gepland, is nu al voorbij.

StarkNet-contracten ondersteunen nu het definiëren en uitstoten van gebeurtenissen, waardoor ze uitvoeringsinformatie voor off-chain aan consumptie kunnen blootstellen. Ethereum-ontwikkelaars vinden de semantiek en syntax erg vergelijkbaar met Solidity. U kunt de[documentatie](https://starknet.io/documentation/events/)lezen of de[handleiding](https://starknet.io/docs/hello_starknet/events.html)volgen met uitleg over deze functie.

#### %built-ins Richtlijn verwijderd

De %brichtlijn uiltin is niet langer nodig in StarkNet-contracten. Deze verandering volgde een maatschappelijke discussie over het[contractuitbreidingspatroon](https://community.starknet.io/t/contract-extensibility-pattern/210)op[StarkNet Shamans](https://community.starknet.io/). Het vereenvoudigt de bruikbaarheid van dit uitbreidingspatroon aanzienlijk.

Het volgende contract zal bijvoorbeeld worden gewijzigd van:

```
%lang starknet

# Dit is de "%builtins" richtlijn.
# Het is niet meer nodig.
%builtins bereige_check

@view
func add(x : felt, y : felt) -> (res : felt):
retour (res=x + y)
end
```

Naar dit:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Je kunt de[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)standaard contracten bekijken, die het nieuwe patroon gebruiken.

#### Arrays of Structuren voor externe functies

Alpha 0.7.0 ondersteunt het passeren en terugsturen van arrays van constructies in externe functies. Deze extra functionaliteit maakt het mogelijk om[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751) beter te ondersteunen.

Multicall is een krachtige functie van Account Abstractie waarmee een account meerdere oproepen kan doen in een enkele transactie. Een voor de hand liggend geval is dat van het maken van een**enkele transactie**die rechten oproept en vervolgens transferFrom.

We kijken uit naar wat de gemeenschap ermee doet.

#### Verbeteringen aan StarkNet CLI

**Ondersteuning voor blokken in behandeling**

[Blocks in behandeling](https://starknet.io/documentation/block-structure-and-hash/#pending_block)werden[geïntroduceerd](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)in de laatste kleine versie (v0.6.2) en hebben snellere bevestigingen op transacties aangeboden. Deze versie bevat ondersteuning voor het zoeken naar deze blokken via de StarkNet CLI.

Om het te gebruiken in elk CLI commando waarbij block_number als argument wordt gebruikt (contract_call/get_block/get_code/get_storage_at), we kunnen het StarkNet opvragen met betrekking tot het pending blok door block_number=in behandeling te specificeren.

**Ondersteuning voor accountcontracten**

StarkNet maakt gebruik van accountabstractie, d.w.z. alle accounts zijn geïmplementeerd als smart contracts. De eerste implementaties van accountcontracten werden gedaan door[Argent](https://github.com/argentlabs/argent-contracts-starknet)en[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), maar we verwachten dat er nog veel meer komt.

In StarkNet moeten alle transacties plaatsvinden via een rekening contract, en de CLI staat nu interactie met StarkNet Alpha toe via rekening contracten. Zie de[handleiding](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)over hoe je het moet instellen.

Vergelijkbare functionaliteit is de afgelopen maand ook toegevoegd aan[StarkNet.py](https://github.com/software-mansion/starknet.py/)en aan[Nile](https://github.com/OpenZeppelin/nile)

#### L1<>L2 Messaging in het testframework

Alpha 0.7.0 introduceert de Postman. De Postman stelt ontwikkelaars in staat het testkader te gebruiken om ingewikkeldere stromen te testen.

Op een hoog niveau — het maakt een aanfluiting voor de verantwoordelijkheid van StarkNet Sequencer om berichten over te dragen van L1 naar L2 en L2 naar L1. Deze zorgt ervoor dat berichten die via het Solidity messaging contract worden verzonden worden weergegeven op de bestemming StarkNet-contract en berichten die vanuit een StarkNet-contract worden verzonden in het Solidity messaging contract.

#### En meer functies

Alpha 0.7.0 biedt nog veel meer functies en veranderingen, zoals de toevoeging van een efficiënte wortel functie aan de wiskunde gemeenschappelijke bibliotheek. Er verschijnt een volledige lijst in de[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Volgende stap?

Initiële[vergoedingsmechanisme](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)ondersteuning zal binnen een paar weken worden vrijgegeven, als een subversie van StarkNet.

### Meer informatie?

[starknet.io](https://starknet.io/): voor alle StarkNet-informatie, tutorials en updates.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): doe mee om antwoorden op je vragen te krijgen, krijg ontwikkelaarsondersteuning en word deel van de gemeenschap.

[StarkNet Shamans](https://community.starknet.io/): volg (en neem deel!) mee aan de onderzoeksdiscussies van StarkNet