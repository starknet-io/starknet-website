### TL; DR

* StarkNet Alpha 0.8.0 bied die aanvanklike weergawe van die fooimeganisme (opsioneel tot StarkNet Alpha 0.9.0.)
* Nuwe API vra om die transaksiefooi te skat vir die verkryging van die transaksiespoor, wat beter sigbaarheid en ontfoutingsvermoëns moontlik maak
* Werkverrigtingverbeterings aan die StarkNet-volgorder
* L1→L2 boodskap kansellasie

### Inleiding

Soos gedeel in ons[-padkaart](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), na die jongste toevoeging tot StarkNet se funksionaliteit en kenmerke, verskuif ons aandag na prestasieverbeterings en protokolontwerp (insluitend fooie, rekeningabstraksie, desentralisasie, ens.). StarkNet Alpha 0.8.0 begin die proses om transaksiefooie by te voeg en die sekwenseerder se werkverrigting te verbeter.

Die padkaart vir StarkNet sluit 'n fooimeganisme in, en deur met hierdie weergawe te vorder, neem ons 'n belangrike stap nader aan volle prestasie vir die platform.

Die byvoeging van die fooimeganisme is 'n noodsaaklike deel van StarkNet se prestasie-ontwerp. Sonder 'n minimale fooi, loop ons die risiko om oneindige transaksies in die gesig te staar: wat dit onmoontlik sal maak vir die stelsel om werksaam te wees, ongeag die optimalisering van die volgordestelsel.

### Kenmerke

#### Fooi Ondersteuning

StarkNet Alpha ondersteun nou die eerste weergawe van die fooimeganisme. Hierdie meganisme is noodsaaklik selfs in hierdie vroeë stadium, en selfs op Testnet, om twee hoofredes:

1. Dit stel ontwikkelaars in staat om hul kontrakte volgens StarkNet se kostemodel te begin optimaliseer.
2. Dit is 'n belangrike eweknie om die stelsel se werkverrigting te verbeter, aangesien dit strooipos voorkom deur ontelbare transaksies te stuur.

Hierdie weergawe stel die komponente bekend wat nodig is vir ontwikkelaars om fooibetalings in hul gereedskap en toepassings in te sluit. Ontwikkelaars kan nou die transaksiefooi skat deur die \`estimate_fee\` eindpunt te skakel en die fooibetaling te maak as deel van die transaksieuitvoering.

Aangesien hierdie kenmerk nie terugwaarts versoenbaar is nie, sal ons nie die fooibetaling op hierdie stadium afdwing nie, maar slegs vanaf weergawe 0.9.0, wat oor 'n paar weke vrygestel moet word. Hierdie geleidelike oorgang sal gebruikers en ontwikkelaars in staat stel om by die nuwe model aan te pas.

#### Fooistruktuur op 0.8.0

Op 0.8.0 sal fooie volgens die berekeningskompleksiteit alleen ingevorder word, terwyl StarkWare steeds L1-kommunikasiekoste sal subsidieer. Ons sal die fooimeganisme bywerk om hierdie L1-bedryfs- en kommunikasiekoste oor die volgende paar weke in te sluit. Die betaling sal atomies ingevorder word met die uitvoering van die transaksie op StarkNet L2. Sien die[fooie dokumentasie](https://starknet.io/documentation/fee-mechanism/)vir 'n in-diepte beskrywing.

Dit is belangrik om daarop te let dat ons nou saam met die ontwikkelaargemeenskap sal werk om die fooimeganisme aan te pas en te ontwikkel soos StarkNet ontwikkel.

#### L2 Goerli ETH Kraan

Ons het die[L2 Goerli ETH Kraan](https://faucet.goerli.starknet.io/)bekendgestel om gebruikers in staat te stel om fooie op Testnet te betaal. Hierdie kraan stuur klein hoeveelhede L2 Goerli ETH na jou rekeningadres op StarkNet Goerli wat jy kan gebruik vir die betaling van die transaksiefooi.

#### Spoor API

Ons het die vermoë om 'n transaksie se uitvoeringspoor te herwin by StarkNet se API gevoeg. Binne die transaksie se spoor is al die interne oproepe sigbaar, vergesel van inligting soos uitvoeringshulpbronne wat verbruik is, terugkeerwaarde, uitgestuurde gebeure en boodskappe wat gestuur is. Hierdie nuwe oproep vergemaklik die begrip van 'n kontrak se gedrag of ontfoutingstransaksies. Boonop kan gereedskap soos[Voyager](https://voyager.online/)of[StarkTx](https://starktx.info/)hierdie data insluit; die gebruikers van meer gedetailleerde ontleding te voorsien, veral vir rekeningkontrakinteraksie.

Om die spoor te verkry, kan jy \`get_transaction_trace\` in StarkNet se CLI gebruik. Kyk na die[-tutoriaal](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace)om 'n voorbeeld te sien van hoe om dit te gebruik.

#### Boodskapkansellasie

'n Bykomende kenmerk van hierdie weergawe is die vermoë om L1→L2-boodskappe te kanselleer. Hoekom is dit nuttig? Stel jou 'n scenario voor waar 'n gebruiker 'n bate van L1 na L2 oordra. Die vloei begin met die gebruiker wat die bate na 'n StarkNet-brug stuur en die ooreenstemmende L1→L2-boodskapgenerering. Stel jou nou voor dat die L2-boodskapverbruik nie funksioneer nie (dit kan dalk gebeur as gevolg van 'n fout in die dApps se Kaïro-kontrak). Dit kan daartoe lei dat die gebruiker vir altyd toesig oor hul bate verloor.

Om hierdie risiko te versag, laat ons die kontrak wat die L1→L2-boodskap geïnisieer het toe om dit te kanselleer - nadat ons die voorneme om dit te doen verklaar en 'n gepaste tyd gewag het (sien die[-dokumentasie](https://starknet.io/l1-l2-messaging/#cancellation)).

### Prestasieverbeterings

Hierdie weergawe verminder aansienlik die tyd wat 'n sequencer nodig het om 'n stroom van inkomende Kaïro-transaksies uit te voer.

Dit is net die eerste stap! Ons volgende groot prestasie-mylpaal, wat binnekort bekendgestel sal word (0.9.0), is parallelle uitvoering van die sequencer, en nog baie meer optimaliserings word in die pad verwag.

### Wat nou?

Lees die tegniese dokumentasie[hier](https://starknet.io/documentation/fee-mechanism/).

Gaan na[starknet.io](https://starknet.io/)vir alle StarkNet-inligting, dokumentasie, tutoriale en opdaterings.

Sluit aan by[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)vir ontwikkelingsondersteuning, ekosisteem-aankondigings en om deel van die gemeenskap te word.

Besoek[StarkNet Shamans](https://community.starknet.io/)om op hoogte te bly en aan alle StarkNet navorsingsbesprekings deel te neem.