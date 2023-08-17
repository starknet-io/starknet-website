### TL; DR

* StarkNet Alpha 0.7.0 vrygestel aan Goerli; propvol verbeterings
* Kontrakte kan nou opgegradeer word deur die Proxy Upgrade Patroon te gebruik
* Kontrakte kan nou gebeurtenisse uitstuur
* Ondersteuning vir die langverwagte Bloknommer- en Bloktydstempelstelseloproepe

### Inleiding

Ons stel graag Alpha 0.7.0 vry, 'n weergawe propvol nuwe kenmerke en verbeterings. Een van die beste stimulante vir StarkNet die afgelope paar maande was die groter betrokkenheid van die gemeenskap in die vorming van StarkNet se toekoms. Hierdie weergawe spreek sommige van die gemeenskap se brandende behoeftes aan.

#### Veranderinge aan Naamkonvensie

Die oplettende leser het dalk opgemerk dat die vorige StarkNet Alpha-vrystelling Alpha 4 genoem is, terwyl ons nou Alpha 0.7.0 vrystel. Ons het besluit om die toegewyde Alpha-weergawenommer weg te laat en eerder net op die gepaardgaande cairo-lang-weergawe staat te maak.

### Nuwe kenmerke

#### Kontrakopgradering

OpenZeppelin se[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)word nou ten volle ondersteun vir kontrakopgraderings in StarkNet. Die Proxy-patroon is die algemene metode om kontrakopgraderings oor Ethereum moontlik te maak. Alpha 0.7.0 aktiveer hierdie patroon oor StarkNet.

Ons het 'n kort[-tutoriaal](https://starknet.io/docs/hello_starknet/default_entrypoint.html)gemaak om 'n basiese implementering van die patroon te demonstreer, en OpenZeppelin is reeds hard besig om 'n standaardkontrak vir die proxy-patroon te implementeer; sien die[prototipe](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Bloknommer en Blok Tydstempel

Alpha 0.7.0 voeg twee nuwe stelseloproepe by waarvoor baie ontwikkelaars gevra het. Hierdie oproepe laat 'n kontrak toe om toegang tot die bloknommer en die bloktydstempel te verkry. Die bloknommer gee die nommer van die huidige uitgevoerde blok terug. Die bloktydstempel gee die tydstempel terug wat deur die Sequencer gegee is by die skepping van die blok.

Jy kan 'n voorbeeld sien van hoe om hierdie kenmerke te gebruik in die[tutoriaal](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Gebeurtenisse

Verras! 'n Funksie wat vir 'n toekomstige weergawe beplan is, het in hierdie vroeëre een ingesluip.

StarkNet-kontrakte ondersteun nou die definisie en uitstuur van gebeure, wat hulle in staat stel om uitvoeringsinligting bloot te stel vir buite-kettingtoepassings om te verbruik. Ethereum-ontwikkelaars sal die semantiek en sintaksis baie soortgelyk aan Solidity vind. Jy kan die[dokumentasie](https://starknet.io/documentation/events/)lees, of die[tutoriaal](https://starknet.io/docs/hello_starknet/events.html)volg wat hierdie kenmerk verduidelik.

#### Verwyder %builtins richtlijn

Die %builtin-riglyn is nie meer nodig in StarkNet-kontrakte nie. Hierdie verandering het gevolg op 'n gemeenskapsbespreking oor die[kontrakuitbreidbaarheidspatroon](https://community.starknet.io/t/contract-extensibility-pattern/210)op[StarkNet Shamans](https://community.starknet.io/). Dit vergemaklik die bruikbaarheid van hierdie uitbreidbaarheidspatroon aansienlik.

Die volgende kontrak sal byvoorbeeld verander word van:

```
%lang starknet

# Dit is die "%builtins"-direktief.
# Dit is nie meer nodig nie.
%builtins range_check

@view
func add(x : vilt, y : vilt) -> (res: vilt):
terugkeer (res=x + y)
einde
```

Tot hierdie:

```
%lang starknet
@view
func add(x : vilt, y : vilt) -> (res : vilt):
terugkeer (res=x + y)
end
```

U kan die[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)standaardkontrakte nagaan, wat die nuwe patroon gebruik.

#### Eksterne funksies ondersteun skikkings van strukture

Alpha 0.7.0 ondersteun verbygaande en terugstuur skikkings van strukture in eksterne funksies. Hierdie bykomende funksionaliteit stel rekeningkontrakte in staat om[multioproepe](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751)beter te ondersteun.

Multicall is 'n kragtige kenmerk van Account Abstraksie wat 'n rekening toelaat om verskeie oproepe in 'n enkele transaksie te maak. 'n Voor die hand liggende gebruiksgeval is die skep van 'n**enkele transaksie**wat toelae oproep en dan van oordra.

Ons sien uit daarna om te sien wat die gemeenskap daarmee doen.

#### Verbeterings aan StarkNet CLI

**Ondersteuning vir hangende blokke**

[Hangende Blokke](https://starknet.io/documentation/block-structure-and-hash/#pending_block)is[bekendgestel](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)in die laaste minderjarige weergawe (v0.6.2) en het vinniger bevestigings op transaksies gebied. Hierdie weergawe bevat ondersteuning vir die navrae van daardie blokke via die StarkNet CLI.

Om dit te gebruik, in elke CLI-opdrag wat bloknommer as 'n argument (contract_call/get_block/get_code/get_storage_at) neem, kan ons die StarkNet navraag doen met betrekking tot die hangende blok deur blok_nommer=hangend te spesifiseer.

**Ondersteuning vir rekeningkontrakte**

StarkNet gebruik rekeningabstraksie, dit wil sê, alle rekeninge word as slim kontrakte geïmplementeer. Die eerste implementering van rekeningkontrakte is deur[Argent](https://github.com/argentlabs/argent-contracts-starknet)en[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)gedoen, maar ons verwag dat nog baie meer sal kom.

In StarkNet moet alle transaksies deur 'n rekeningkontrak gaan, en die CLI laat nou interaksie met StarkNet Alpha direk via rekeningkontrakte toe. Sien die[tutoriaal](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)oor hoe om dit op te stel.

Soortgelyke funksionaliteit is ook die afgelope maand by[StarkNet.py](https://github.com/software-mansion/starknet.py/)en[Nile](https://github.com/OpenZeppelin/nile)gevoeg.

#### L1<>L2 Boodskappe in die toetsraamwerk

Alpha 0.7.0 stel die Posman bekend. Die Postman stel ontwikkelaars in staat om die toetsraamwerk te gebruik om meer ingewikkelde vloei te toets.

Op 'n hoë vlak — dit bespot die StarkNet Sequencer se verantwoordelikheid om boodskappe van L1 na L2 en L2 na L1 deur te gee. Dit maak seker boodskappe wat deur die Solidity-boodskapkontrak gestuur word, sal by die bestemming StarkNet-kontrak verskyn en boodskappe wat vanaf 'n StarkNet-kontrak gestuur word, sal in die Solidity-boodskapkontrak verskyn.

#### En meer kenmerke

Alpha 0.7.0 bied baie meer kenmerke en veranderinge, soos die toevoeging van 'n doeltreffende vierkantswortelfunksie tot die wiskunde-gemeenskaplike biblioteek. 'n Volledige lys verskyn in die[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Volgende?

Aanvanklike[Fooi-meganisme](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)ondersteuning sal binne 'n kwessie van weke vrygestel word, as 'n sub-weergawe van StarkNet.

### Meer inligting?

[starknet.io](https://starknet.io/): vir alle StarkNet-inligting, tutoriale en opdaterings.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): sluit aan om antwoorde op jou vrae te kry, kry ontwikkelingsondersteuning en word deel van die gemeenskap.

[StarkNet Shamans](https://community.starknet.io/): sluit aan om te volg (en deel te neem!) aan StarkNet navorsingsbesprekings.