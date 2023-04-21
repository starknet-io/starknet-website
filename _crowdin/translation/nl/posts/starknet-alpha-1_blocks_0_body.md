### TL;DR

Alpha StarkNet 1 heeft twee nieuwe functies:

* L1<>L2 interactie
* On-chain gegevens

### Introductie

Aan het begin van het jaar hebben we aangekondigd dat StarkWare wordt gebouwd[StarkNet](https://starkware.co/product/starknet/), een toegeeflijke gedecentraliseerde STARK, gebaseerd op ZK-Rollup1 die werkt als een L2-netwerk boven Ethereum. StarkNet staat elke dApp toe om onbeperkt de schaal voor de berekening te bereiken - zonder de composabiliteit en veiligheid van Ethereum in gevaar te brengen.

Vorige maand werd[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)vrijgegeven aan de wereld. Ontwikkelaars kunnen voor het eerst[schrijven](https://kobi.one/2021/07/14/stardrop.html)elk slim contract en het op een ZK-Rollup implementeren. Gebruikers zijn in staat om transacties naar het netwerk te verzenden, Ethereum-style.

Vandaag brengen we een nieuwe versie uit; Alpha 1. We geven functies vrij op rollenbasis, zodat ontwikkelaars zo snel mogelijk kunnen communiceren met nieuwe functies. We verwachten dat dit de feedbackcyclus zal aanscherpen en dat het de gemeenschap mogelijk zal maken om snel feedback te geven om Starknet te verbeteren.

### **Alfa 1 functies**

#### L1<>L2 Interactie

Alpha 1 bevat een L1<>L2 berichtenprotocol, waarmee ontwikkelaars naadloze transactiestromen tussen L1 en L2 kunnen implementeren. Ontwikkelaars kunnen nu berichten verzenden van contracten op L1 tot contracten op L2 en vice versa.

Een van de schoonheden van ZK-Rollups is dat de statusupdates zonder vertraging definitief zijn. Dit betekent dat berichten die van L2 naar L1 zijn verzonden onmiddellijk kunnen worden doorgestuurd naar hun bestemmingsovereenkomst. Dit opent de weg om apps te bouwen die werkelijk interoperabel zijn tussen de lagen.

Geïnteresseerd in het uitproberen? De beste manier om aan de slag te gaan is door de tutorial[hier](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html) te volgen.

Ons L1<>L2 protocol heeft veel te danken aan andere L2s (specifiek Optimisme en Arbitrum) wier eerdere werk in dit gebied ons ontwerp beïnvloed heeft.

#### On-Chain Data-Beschikbaarheid

De statusupdate van StarkNet wordt nu ook gepubliceerd als on-chain gegevens op Ethereum. Dit stelt elke gebruiker in staat om de status van StarkNets volledig te bouwen op basis van L1 gegevens. Elke staatsupdate omvat de staat diff, dat wil zeggen welke opslag is veranderd en de nieuwe waarde.

Ook hier laat ZK-Rollup zijn kracht zien. In tegenstelling tot Optimistische Rollups, waarin de volledige transactiegegevens per keten moeten worden verstuurd, in ZK-Rollups, alleen de absolute minimale gegevens die nodig zijn om de diff van de status per keten af te leiden, worden verstuurd.

Denk aan een primeur, prijskorakels. Een transactie om een prijsorakel bij te werken bevat meestal meerdere transacties, maar werkt slechts één opslagcel bij; de prijs van de paar. De on-chain gegevens die vereist zijn voor een update met prijsorakeltransacties in een Optimistische Rollup groeit lineaal met het aantal updates, terwijl je in een ZK-Rollup bent, zal het altijd een enkele opslagupdate zijn.

Bovendien kunnen compressie-algoritmen worden toegepast op de gepubliceerde gegevens. en de geldigheid ervan zal worden bevestigd door het STARK-bewijs, waardoor de on-chain voetafdruk verder wordt verkleind. Toekomstige versies van StarkNet zullen innovatieve optimalisaties op dit gebied introduceren.

#### StarkNet OS

We zijn ook bezig met het vrijgeven van de StarkNet Operating System code. Het StarkNet OS is het Cairo-programma dat StarkNet uitvoert. De OS behandelt alles wat wordt gedaan op het netwerk — contractimplementatie, transactieuitvoering, L1<>L2 berichten en meer. De StarkNet OS-architectuur en het ontwerp zullen in een afzonderlijke post in detail worden uitgelegd.

#### Extra functies

StarkNet Alpha heeft zich niet alleen ontwikkeld, maar we verbeteren ook voortdurend Caïro. Voor een volledige beschrijving van de nieuwe functies in Caïro v0.3.0, controleer de release notities[hier](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Het ecosysteem groeit

Afgezien van de voortdurende werkzaamheden op StarkNet Core, breidt het werk van het ecosysteem aan StarkNet zich voortdurend uit. We zijn opgetogen om samen te werken met enkele van de meest getalenteerde teams van het ecosysteem.

Fermion, StarkNet's eerste volledige node inspanning, is ontwikkeld door het Erigon (voorheen TurboGeth) team. Op basis van hun enorme kennis die we hebben opgedaan door aan Ethereum te werken, kunnen we met hen samenwerken om een krachtige Full Node te bouwen. waarin veel lessen zijn opgenomen die tijdens het bouwen voor Ethereum zijn geleerd, waarbij wordt geprofiteerd van de schaal die wordt aangeboden door STARK-proofs.

Nederland werkt aan Warp, een compiler van EVM naar Caïro. Gebonden door onze cultuur van het presenteren van nieuwe instrumenten als ze er klaar voor zijn, We kunnen alleen maar zeggen dat we zeer binnenkort spannend nieuws op dit gebied moeten verwachten! We kunnen echter wel zeggen dat ze zich in een enorm tempo bewegen.

### Wat de Toekomstige Holds

Het volgende keerpunt op onze weg naar StarkNet zal de composabiliteit zijn – die het mogelijk maakt om contracten met elkaar te verbinden. Blijf op de hoogte.

[StarkWare](https://starkware.co/)

1 Zoals we eerder hebben gezegd, is ZK-Rollup nu een vaak gebruikte term, maar zeer misleidend: deze oplossingen bieden (momenteel) geen nul-kennis.

**Update (Nov. 2021):**StarkNet Alpha is live op Ethereum Mainnet