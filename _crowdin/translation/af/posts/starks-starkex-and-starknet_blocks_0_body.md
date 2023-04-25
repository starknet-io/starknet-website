### TL; DR

* STARKs maak blokkettingskaal moontlik deur die integriteit van berekeninge doeltreffend te bewys
* StarkEx is 'n toepassingspesifieke skaalenjin
* StarkNet is 'n toestemminglose, slim kontrak Laag 2-netwerk

### **STERK's**

STARKs (Scalable, Transparent ARgument of Knowledge) is 'n bewysstelsel wat die bewys en verifikasie van berekeninge moontlik maak. Dit laat die verwerking van 'n groot berekening toe, genereer 'n bewys vir die berekening se korrektheid, en verifieer dan die bewys in baie min stappe.

STARK's kan 'n sleutelrol speel in blokkettingskaalbaarheid deur toe te laat dat groot berekeninge buite die ketting gedoen word, waar dit goedkoper is, wat slegs die verifikasie, wat 'n fraksie van die berekening vereis, oorlaat om in die ketting gedoen te word. Met ander woorde, deur baie min stappe in die ketting uit te voer, bevestig die verifieerder die integriteit van 'n baie groter berekening wat buite die ketting gedoen is.

Deur STARK's te gebruik, voeg laag 2-oplossings saam en bereken duisende transaksies, en verifieer dan hul geldigheid in die ketting met 'n enkele STARK-bewys. Die koste van die on-ketting proses word verdeel tussen**al**transaksies in die bondel. Dit lei tot Ethereum-sekuriteit en lae gaskoste per transaksie.

Die lae berekeningskoste sal 'n nuwe klas toepassings inlui wat voorheen nie in die ketting uitvoerbaar was nie. Hierdie eienskappe maak STARKs 'n uitstekende bousteen vir die verbetering van gebruikerservaring en die vermindering van gaskoste, alles terwyl die sekuriteit van die Ethereum-nedersettingslaag gehandhaaf word.

StarkWare bied twee oplossings om Ethereum met STARK's te skaal: StarkEx en StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)is 'n raamwerk vir die skep van gemagtigde, toepassingspesifieke skaaloplossings. StarkEx is 'n gereedskapkas van nuttige[toepassingsvloeie](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)wat projekte kan gebruik om goedkoop buite-ketting-berekeninge te bereik. 'n STARK-bewys, wat getuig van die korrektheid van uitvoering, word buite die ketting gegenereer. So 'n bewys kan tot 12 000–500 000 transaksies insluit (afhangende van die transaksietipe). Die bewys word dan na die STARK Verifier gestuur om op die ketting aanvaar te word. Dit beteken een verifikasie vir al die transaksies - vir 'n ongelooflike lae geamortiseerde gaskoste per transaksie.

'n Paar voorbeelde van die toepassings wat op StarkEx ontplooi word, is dYdX (perpetuals trading), Immutable and Sorare (NFT's - minting and trading), DeversiFi (spot trading), en Celer (DeFi Pooling).

StarkWare voeg voortdurend meer toepassingsvloeie by StarkEx, na aanleiding van die mark en sy kliënte se behoeftes.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)is 'n toestemminglose laag 2-netwerk waar enige gebruiker of ontwikkelaar slim kontrakte kan ontplooi wat in die Kaïro-taal ontwikkel is.*

Vergelykbaar met die Ethereum-slimkontrak-ervaring, binne die StarkNet-ekosisteem, kan jou kontrak interaksie hê met enige ander kontrak wat op StarkNet ontplooi word, wat ryklik saamstelbare protokolle moontlik maak. StarkNet-kontrakte kan ook interaksie met Ethereum-kontrakte hê deur asinchroniese boodskapoordrag.

Anders as StarkEx, waar toepassings verantwoordelik is vir die indien van transaksies, stel StarkNet-volgorders transaksies saam en stuur dit om verwerk en bewys te word. (StarkNet se volgorders word tans deur StarkWare bedryf met toekomstige planne om te desentraliseer.) Dit beteken sodra toepassings hul Kaïro-kontrakte ontplooi, hoef hulle nie bekommerd te wees oor die bestuur van bykomende operateur-infrastruktuur nie. StarkNet ondersteun die Opsomming-databeskikbaarheidmodus, wat beteken dat die toestand van die opsomming saam met die STARK-bewyse na Ethereum geskryf word.

'n Groot ontwikkelaargemeenskap is diep betrokke by die StarkNet-ekosisteem, die bou van toepassings, gereedskap en infrastruktuur. Tientalle toepassings is reeds regstreeks op toetsnet - DeFi, speletjies, stem, KI en meer. Meer meer, ontwikkelaarnutsgoed soos blokverkenner, plaaslike toetsomgewing en raamwerk, SDK's in verskeie tale en meer, word deur die StarkNet-gemeenskap gebou. Boonop vind aktiewe besprekings in die[Shamans se platform](https://community.starknet.io/)plaas, met voorstelle vir verbeterings, potensiële kenmerke en beste praktyke.

### **Om dit op te som**

Beide[StarkEx](https://youtu.be/P-qoPVoneQA)en StarkNet is STARK-gebaseerde skaaloplossings. Albei bied skaalbaarheid, lae gaskoste en sekuriteit, maar het verskillende bedryfsvereistes en interoperabiliteitspatrone. StarkEx is dalk die regte oplossing vir 'n toepassing wat grootliks selfstandig is en inpas by die API's wat StarkEx verskaf. StarkNet is dalk beter geskik vir 'n protokol wat sinchroniese interaksie met ander protokolle vereis of behoeftes het wat verder gaan as wat StarkEx bied.

STARK's het 'n rewolusie verander hoe toepassings op Ethereum gebou kan word. StarkEx en StarkNet sal voortgaan om toepassings te aktiveer wat voorheen onlewensvatbaar was en die grense van wat moontlik is op die blokketting verskuif.

Hierdie artikel is in samewerking geskryf deur[Tim Gestson](https://twitter.com/IcemanTim)en die[StarkWare](https://starkware.co/)-span