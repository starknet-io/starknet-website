### TL; DR

* StarkWare bied 'n reeks databeskikbaarheid (DA) modusse waaruit klante kan kies, volgens hul prioriteit
* Daar is drie benaderings tot databeskikbaarheid vir STARK-bewyse, almal is reeds in produksie beskikbaar:\
  —**Opsomming**: die grootboek word direk op die blokketting gepubliseer\
  —**Validium**: 'n Databeskikbaarheidskomitee beveilig die grootboek, met slegs 'n hash wat in die ketting gestoor word\
  -**Volisie**: programme kan gebruikers hul DA-modus laat kies - Rollup of Validium - vir elke transaksie
* Maak nie saak watter DA gebruik word nie — die geldigheid van alle transaksies word deur STARKs gewaarborg

### Inleiding

Vanaf November 2022 het[StarkEx](https://starkware.co/starkex/)meer as $750 miljard se handelsvolume en meer as 270 miljoen transaksies op Ethereum vereffen. In die NFT-ruimte, wat toepassings soos ImmutableX en Sorare aandryf, het StarkEx meer as 85 miljoen NFT's vervaardig teen 'n prys wat 1000 keer goedkoper is as om dit direk op Ethereum te doen. STARK-gebaseerde tegnologie is besig om Ethereum te skaal. Byvoorbeeld, in 'n enkele week het StarkEx 1,6x die aantal transaksies as Ethereum uitgevoer (12m op StarkEx vs 7,5m op Ethereum) terwyl dit minder as 0,1% van Ethereum-blokspasie opgeneem het. En dit doen dit alles terwyl dit gebruikers dieselfde vlak van sekuriteit gee asof hulle direk op Ethereum vestig.

### Hoe bereik StarkWare dit?

Gebruikers stuur transaksies op Laag 2 (óf StarkEx óf StarkNet), wat saamgestuur word en na 'n STARK-bewyser gestuur word. Hierdie STARK-bewyser ken die toestand van die grootboek voor en nadat hierdie transaksies verwerk is. Die bewyser lewer 'n STARK-bewys wat getuig van die geldigheid van die nuwe toestand van die grootboek nadat hierdie transaksies uitgevoer is. Die nuwe staat en die STARK-bewys word na die STARK-verifieerder aan die ketting gestuur. Die verifikasie van hierdie bewys vind outonoom plaas via 'n onveranderlike slim kontrak op Ethereum.

Hierdie argitektuur bied die beste van albei wêrelde: ons kan lae transaksiekoste hê, terwyl ons steeds Ethereum in die middel het as 'n neutrale arbiter. Ethereum as 'n arbiter is nie net 'n lekker om te hê nie; dit bied kritieke sekuriteit aan die eindgebruiker. 'n Gebruiker wat transaksies doen, kan nou vol vertroue wees dat hul fondse deur Ethereum beveilig is, en transaksies is onveranderlik sodra dit op Ethereum geverifieer is. Die gebruiker het ook volledige selfbewaring van hul fondse. Selfbewaring is belangrik omdat dit verseker dat die gebruiker te alle tye toegang tot hul fondse het, sonder om op enige derde party staat te maak.

### Waar pas databeskikbaarheid by dit alles in?

Dit is belangrik om beide te beklemtoon wat hierdie bewys doen sowel as wat dit*nie*doen nie. Die bewyse getuig van die geldigheid van die nuwe staat, maar dit sê nie vir jou wat die nuwe staat is nie. Daarvoor het jy databeskikbaarheid nodig. As ons net die bewys het, dan weet die blokketting dat wat ingedien is, geldig is, maar hy weet nie wat die nuwe toestand (bv. grootboekbalans) is nie! Verbruikers van hierdie data sluit gebruikers in wat transaksies binne hierdie bewyse het. Die data moet aan hulle beskikbaar gestel word as hulle fondse op Ethereum wil onttrek sonder om die Laag 2-operateur te vertrou. Dit gee gebruikers volle selfbewaring van hul fondse.

Een analogie hiervoor is dat jou hoërskoolonderwyser jou vra om te bewys dat x gelyk is aan x. Dit is triviaal om te bewys. Wat is moeiliker om te antwoord: waaraan is x eintlik gelyk? Daarvoor het jy 'n aparte stukkie inligting nodig. Dit kan wees dat x gelyk is aan 5, of 'n ander waarde. Net so, op die blokketting, kan 'n STARK-bewys aan 'n STARK-verifieerder-slimkontrak voorgelê word vir verifikasie. En die verifieerder kan getuig dat die bewys geldig is (dat x=x). Maar jy het 'n aparte invoer nodig om jou te vertel wat x (die nuwe grootboekbalans) is.

Daar is drie benaderings om hierdie data beskikbaar te stel:

#### Oprolmodus

Oprolmodus verseker dat die toestand van die grootboek saam met die bewyse op Ethereum gestoor word. Oprolmodus word tans deur[dYdX](https://dydx.exchange/)in produksie gebruik, en word ook deur die[Public StarkNet](http://starknet.io/)L2-netwerk gebruik. Die voordele hier is duidelik: 'n mens kan die toestand van die grootboek herskep deur slegs met die Ethereum-blokketting te kommunikeer. Die implikasie hiervan is dat jy, as eindgebruiker, vertroueloos met die betrokke slim kontrak op Ethereum kan praat, en jou fondse kan onttrek, selfs al sluit die Laag 2-stelsel af.

#### Validium

Onder oprolmodus gaan die meerderheid van Ethereum-gaskoste na databeskikbaarheid, en nie bewysverifikasie nie. Dit is omdat dit baie gas-intensief is om data op die blokketting te stoor. In Validium-modus word die grootboekinligting nie na Ethereum gestuur nie. Dit word eerder buite die ketting gestoor met 'n databeskikbaarheidskomitee. Ethereum stoor 'n hash van hierdie grootboekinligting. Hierdie databeskikbaarheidskomitee bestaan uit 'n kworum van onafhanklike lede wat toesig hou oor die korrekte staatsopdatering sowel as 'n afskrif van die data wat verwerk is, hou. Elke StarkEx-instansie kan hul eie kworum skep. Kworumlede vir bestaande toepassings wat op StarkEx loop, sluit entiteite soos[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)en[Cephalopod](https://cephalopod.equipment/)in.

Die voordele hier is duidelik. Dit is nie nodig om Ethereum-gasfooie te betaal om die grootboekinligting op die ketting te stoor nie. Die enigste ding wat op Ethereum gestoor word, is eerder 'n enkele hash van die grootboekinligting. As jy vertroueloos fondse uit Laag 2 wil onttrek deur met Ethereum te praat, benodig jy net die digitale handtekening van een van die lede van die Databeskikbaarheidskomitee. Die DAC-lede sal kriptografie gebruik om te bewys dat jy eienaarskap van daardie fondse het.

Nog 'n verborge voordeel van Validium Data Beskikbaarheid is vertroulikheid van mense wat die blokketting lees. Onder Oprolmodus is die saldo van elke rekening op die tydstip dat elke bewys ingedien word aan die publiek bekend. Met Validium word hierdie data van die blokketting weggesteek - slegs die databeskikbaarheidskomitee is hiervan bewus, want dit word buite die ketting gehou. Hierdie vlak van vertroulikheid maak 'n wye verskeidenheid gebruiksgevalle moontlik waar die verduistering van die transaksiedata belangrik is.

#### Wilsigheid

Volition is 'n data beskikbaarheid argitektuur wat die keuse tussen Validium en Rollup Mode op transaksievlak bied. Dit doen dit deur een grootboek aan die ketting te hou, en 'n ander grootboek met 'n databeskikbaarheidskomitee. Gebruikers kan kies tussen Validium- en Rollup-modus vir elke individuele transaksie.

Stel jou voor dat jy 'n baie duur NFT soos 'n Bored Ape of 'n Cryptopunk koop, op 'n toepassing wat op StarkEx loop. Miskien wil u oprolmodus gebruik om die data vir daardie NFT te beveilig, want u wil 'n rekord hê van daardie spesifieke transaksie wat op Ethereum gestoor word. Jy kan egter dan 'n baie goedkoop NFT koop (bv. 'n mantel vir jou karakter in 'n blokkettingspeletjie), en in daardie omstandighede sal jy gelukkig wees om geld te spaar deur Validium te gebruik.

As jy belangstel in die skaal wat deur STARK-bewyse bereik word, kom bou asseblief op ons.



Jy kan altyd[info@starkware.co](mailto:info@starkware.co)e-pos en 'n mens sal by jou e-pos uitkom.