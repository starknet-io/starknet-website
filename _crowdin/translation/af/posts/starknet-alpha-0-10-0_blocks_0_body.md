### TL; DR

* Rekeningabstraksieverbeterings in die gees van EIP-4337

1. Valideer - Voer skeiding uit
2. Transaksie uniekheid word nou verseker in die protokol (nonce)

* Die fooimeganisme word uitgebrei om die volgende in te sluit:

1. L1→L2 Boodskappe
2. Verklaar Transaksies

* Min Kaïro sintaksis veranderinge

### Inleiding

Ons is opgewonde om StarkNet Alpha 0.10.0 aan te bied. Hierdie weergawe is nog 'n stap in die rigting van die skaal van Ethereum sonder om sekuriteit en desentralisasie in te boet.

Hierdie blogpos beskryf kortliks die hoofkenmerke van hierdie weergawe. Vir die volledige lys van veranderinge, kyk na die[vrystellingnotas](https://github.com/starkware-libs/cairo-lang/releases). Vir meer gedetailleerde inligting, kyk na die[dokumentasie](https://docs.starknet.io/).

### Rekening Abstraksie Veranderinge

Ons gaan vorentoe met[StarkNet se rekeningabstraksie](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Hierdie weergawe stel veranderinge bekend wat deur[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337)geïnspireer is.

#### Bekragtig/voer skeiding uit

Tot nou toe was die rekening se \_\_execute\_\_ funksie verantwoordelik vir beide die transaksievalidering en uitvoering. In 0.10.0 breek ons hierdie koppeling en stel 'n aparte \_\_validate\_\_ funksie in rekeninge in. By ontvangs van 'n transaksie sal die rekeningkontrak eers \_\_validate\_\_ bel, en dan, indien suksesvol, voortgaan na \_\_execute\_\_.

Die valideer/uitvoer-skeiding bied 'n protokolvlak-onderskeiding tussen ongeldige en teruggekeerde (nog geldige) transaksies. Danksy dit sal opeenvolgers fooie kan hef vir die uitvoering van 'n geldige transaksie, ongeag of dit teruggedraai is of nie.

#### Nie

In weergawe 0.10.0 word 'n nonce-veld bygevoeg om die uniekheid van transaksies op die protokolvlak af te dwing. Tot nou toe is nonces op die rekeningkontrakvlak hanteer, wat beteken het dat 'n transaksie met dieselfde hash twee keer teoreties uitgevoer kon word.

Net soos Ethereum, bevat elke kontrak nou 'n nonce, wat die aantal uitgevoerde transaksies vanaf hierdie rekening tel. Rekeningkontrakte sal slegs transaksies met 'n ooreenstemmende nonce aanvaar, maw as die huidige nonce van die rekening X is, sal dit slegs transaksies met nonce X aanvaar.

#### Nuwe transaksie weergawe

Om terugwaartse versoenbaarheid toe te laat, sal ons daardie twee veranderinge instel via 'n nuwe transaksieweergawe -[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Daardie veranderinge sal slegs van toepassing wees op die nuwe weergawe, en ouer rekeninge sal steeds weergawe 0-transaksies kan uitvoer.

Let wel — transaksie v0 is nou opgeskort en sal in StarkNet Alpha v0.11.0 verwyder word. Maak asseblief seker dat jy opgradeer om die nuwe transaksieweergawe te gebruik.

Vir meer gedetailleerde inligting oor die transaksieweergawe, lees asseblief die[dokumentasie](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Fooie meganisme

Die nuwe weergawe laat toe om fooie vir twee vereiste komponente in te sluit:

* [L1→L2 Boodskap](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Verklaar transaksie](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Hierdie fooie sal nie verpligtend wees in hierdie weergawe nie en sal slegs afgedwing word vanaf StarkNet Alpha v0.11.0.

#### Kaïro sintaksis veranderinge

Ten gunste van geleidelike vordering na 'n opgradering van Kaïro,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), bevat hierdie weergawe verskeie sintaksisveranderinge.

Om ongerief te verminder, sal die weergawe vrystelling 'n[migrasie script](https://www.youtube.com/watch?v=kXs59zaQrsc)insluit wat outomaties die bogenoemde veranderinge toepas. Jy kan meer besonderhede vind[hier](https://github.com/starkware-libs/cairo-lang/releases).

### Wat is volgende?

* Oor 'n paar weke beplan ons om parallelisering in die volgordehouer in te voer, wat vinniger blokproduksie moontlik maak (V0.10.1)
* Ons sal binnekort die laaste deel voltooi wat by die fooibetaling ingesluit moet word - Rekeningontplooiing
* Cairo 1.0 vrystelling! Meer inligting daaroor in 'n komende plasing.

### Hoe kan ek meer verloof wees?

* Gaan na[starknet.io](https://starknet.io/)vir alle StarkNet-inligting, dokumentasie, tutoriale en opdaterings.
* Sluit aan by[StarkNet Discord](http://starknet.io/discord)vir ontwikkelingsondersteuning, ekosisteem-aankondigings en om deel van die gemeenskap te word.
* Besoek die[StarkNet Forum](http://community.starknet.io/)om op hoogte te bly en aan StarkNet navorsingsbesprekings deel te neem.

Ons is altyd bly om terugvoer oor ons[dokumentasie](https://docs.starknet.io/)te ontvang!