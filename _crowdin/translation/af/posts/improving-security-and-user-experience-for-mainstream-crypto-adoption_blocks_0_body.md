Tegnologiese innovasie in blokketting het die afgelope paar jaar gefloreer - STARKs, SNARKs, EIP-1559, die Ethereum Merge - is almal groot tegnologiese prestasies. UX- en UI-ontwerp kon egter nie byhou nie. Mense sit steeds vas aan 16-woord-saadfrases, en om in DeFi te kom sonder 'n gesentraliseerde tussenganger is nog steeds te intimiderend vir baie . Om die volgende miljard gebruikers by Web3 aan te sluit, is dit van kritieke belang om die gebruikersaanboordervaring te verbeter.

Soos FTX gedemonstreer het (en Gemini, Celsius en Mt. Gox), is die behoud van selftoesig oor 'n mens se bates van kritieke belang. Tot onlangs was selfbewaringsbeursies egter lomp en verwarrend vir die gemiddelde gebruiker. Die meeste mense vergeet hul Web2-wagwoorde op 'n maandelikse basis; hoe word daar van gebruikers verwag om hul saadfrase en private sleutels vir ewig veilig te hou?

Eenvoudig gestel, dit is 'n sekuriteitsnagmerrie. Soos ons al male sonder tal gesien het, kan een verkeerde stap, hetsy deur slegte akteurs of nalatigheid geïnisieer word, lei tot die verlies van miljoene dollars.

As die eerste kontakpunt vir nuwe kripto-gebruikers, moet Ethereum-beursies maklik wees om te gebruik, veilig en aanpasbaar om by elke gebruiker se behoeftes te pas. Dit vereis dat ontwikkelaars die eenvoud van Web2 finansiële produkte met die kenmerke van Web3 integreer.

Dit is presies wat rekeningabstraksie bereik.

Rekeningabstraksie verbeter die veiligheid en sekuriteit van selfbewaringsbeursieprodukte deur die gebruikers se afhanklikheid van die private sleutel te verwyder en beursies meer programmeerbaar te maak. Met hierdie verbeterde UX kan nie-bewaringsbeursies uiteindelik skaal na miljoene hoofstroom kripto-gebruikers.

Maar om die impak van rekeningabstraksie ten volle te verstaan, moet ons onsself verfris oor hoe Ethereum-rekeninge werk.

### Die basiese beginsels van Ethereum-rekeninge

Daar is twee tipes Ethereum-rekeninge:

1. Rekeninge in eksterne besit (EOA)
2. Kontrakrekeninge (CA)

Kom ons breek elkeen 'n bietjie verder af.

### Rekeninge in eksterne besit

Rekeninge wat ekstern besit word, soos MetaMask en Coinbase Wallet, is die tipiese rekeningtipe vir Ethereum-gebruikers. Elke EOA bestaan uit 'n private en publieke sleutel, wat 'n sleutelpaar genoem word.

Alle transaksies word deur private sleutels gemagtig en onderteken. Sodra 'n transaksie onderteken is, verifieer die EVM dat die handtekening geldig is deur die EOA se rekeningadres te gebruik. Die hardgekodeerde logika in die EVM dui aan dat die rekening (die voorwerp wat jou tokens hou) en die private sleutel (ondertekenaar) as een gekoppel is.

As u u privaat sleutel verloor, beteken dit dat u u fondse, of selfs beheer oor u rekening, vir ewig verloor.

### Kontrakrekeninge

Intussen is kontrakrekeninge, sinoniem met rekeningabstraksie, slim kontrakte wat op die Ethereum-blokketting ontplooi word. Hierdie kontrakte word deur kodelogika beheer en vereis nie private sleutels nie. Anders as EOA's, kan kontrakrekeninge nie transaksies begin nie. In plaas daarvan word hul transaksies geaktiveer deur instruksies van EOA's.

### Waarom rekeningabstraksie belangrik is

Rekeningabstraksie behels die onttrekking van die hardgekodeerde magtigingslogika weg van EOA's, wat elke rekening omskep in 'n programmeerbare slim kontrak wat aangepas kan word om aan die behoeftes van enige individu te voldoen.

Soos verduidelik deur Argent medestigter en hoofwetenskaplike beampte Julien Niset in 'n onlangse[Stark @ Home-geleentheid](https://www.crowdcast.io/e/7olimxqv), gee hierdie buigsame magtigingslogika vryheid aan ontwikkelaars om rond te speel met rekeningkenmerke soos…

**Hardeware-ondertekenaars:**Gebruik 'n iPhone of Android se veilige enklawe om enige slimfoon in 'n hardeware-beursie te verander. Van daar af kan gebruikers transaksies verifieer deur biometriese data soos 'n vingerafdruk of Apple Face ID te gebruik. Ons het reeds begin sien dat selfbewaringsbeursies soos Braavos[hierdie kenmerk uitrol.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Betaalmeesters:**Laat gebruikers toe om gasfooie in enige teken te betaal, of selfs 'n derdeparty-ontwerpte meganisme te laat betaal vir transaksies.

**Sosiale herstel:**In die geval dat 'n private sleutel verlore raak of gekompromitteer word, kan gebruikers 'n nuwe sleutel as 'n wettige beursie-eienaar magtig. Dit kan 'n verskeidenheid herstelmetodes insluit deur betroubare kontakte, hardeware-beursies of derdeparty-dienste. Die idee is om die herwinning van toegang tot jou rekening net so maklik te maak soos om jou bankrekeningwagwoord deur 'n e-pos te herwin.

**Multifaktor-verifikasie:**Soortgelyk aan die alledaagse Web2 2FA-praktyke, kan gebruikers twee (of meer) verifikasiemetodes vir hul kripto-beursies opstel, waar 'n transaksie eers onderteken word sodra 'n gebruiker die goedkeuring via 'n tweede opsie soos e-pos of SMS bevestig. Gebruikers kan ook daaglikse oordraglimiete of lyste van rekeningadresse opstel waarvan die beursie outomaties geblokkeer word om interaksie te hê.

**Kwantumbestande en gasdoeltreffende handtekeninge:**Ethereum se huidige handtekeningskema, ECDSA, is rekenaarmatig omvattend (lees: hoër gasfooie) en kan deur kwantumrekenaars verbreek word. Deur handtekeningabstraksie gebruik verskillende rekeningkontrakte doeltreffender en kwantumveilige handtekeningskemas. StarkNet gebruik sy eie eie STARK-vriendelike kromme.

Hierdie kenmerke bied nie net aan gebruikers groter sekuriteit en meer buigsaamheid nie, maar nog belangriker, lei tot 'n veel**beter**gebruikerservaring.

Innovasies rondom rekeningabstraksie, hoofsaaklik EIP-2938 en EIP-3074, het sedert 2020 gelys deur Vitalik Buterin as 'n "langdurige droom" vir die Ethereum-ontwikkelaarsgemeenskap. Beide het egter afwykings rondom sekuriteit en implementering vereis. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), die mees belowende ontwikkeling tot dusver, stel 'n weergawe van rekeningabstraksie voor sonder om veranderinge aan die Ethereum-protokol te vereis.

### **Rekeningabstraksie en Starknet**

In teenstelling met Bitcoin en Ethereum wat hul huidige protokolle aanpas om rekeningabstraksie te ondersteun, het[StarkNet](https://starkware.co/starknet/)rekeningabstraksie sedert dag een geïmplementeer. Tesame met die skaalbaarheid en vermoëns van ons STARK-bewyse, is die potensiaal vir beursie-innovasie onbeperk. Dit is hoekom die volgende generasie selfbewaringsbeursies, soos Argent en Braavos, tans bo-op ons netwerk gebou word.

StarkNet se benadering is soortgelyk aan EIP-4337,[wat erken dat](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)volledige rekeningabstraksie steeds verwarrende UX tot gevolg sal hê en[kan die deur](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)oopmaak vir aanvalle op volgorders. Dit het eerder ten doel om beide handtekening-abstraksie en betalingsabstraksie te bereik deur sommige van die vereiste in- en af-ketting-infrastruktuur te wedersyds.

En hoewel daar nog baie meer werk is om te doen, kry rekeningabstraksie meer as 'n klein kring van kripto-inboorlinge. In Desember het[Visa die idee](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)voorgestel om rekeningabstraksie te gebruik om outomatiese herhalende betalings op StarkNet op te stel. Deur 'n delegeerbare rekening te gebruik, kan gebruikers toestemming verleen om 'n betaling te inisieer na 'n vooraf-goedgekeurde slimkontrak. Van daar af sal die slimkontrak geprogrammeer word om 'n vasgestelde betalingsbedrag op 'n spesifieke dag oor 'n vasgestelde tydsduur af te trek. Alhoewel Visa nog nie sy planne vir sy eie dienste bekend gemaak het nie, spreek die belangstelling alleen boekdele, en kan dit 'n wêreld voorspel waar groottegnologie-intekeningplatforms soos Netflix en Spotify kripto-aanneming kan omhels.

Wat die toekoms inhou, sal net die tyd leer. Maar een ding is seker. Deur beursies makliker en veilig te maak om te gebruik, sal rekeningabstraksie dien as 'n kragtige katalisator vir selfversorgende blockchain-beursies om te skaal na miljoene hoofstroom kripto-gebruikers. Ons sal intussen aanhou bou.