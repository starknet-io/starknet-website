### TL; DR

* **Fooie is nou verpligtend op Testnet, binnekort op Mainnet**
* Kontrakfabriekspatroon is nou moontlik!
* StarkNet stel kontrakklasse bekend
* Gedelegeerde oproep word vervang met biblioteek oproep

### Inleiding

Ons stel graag StarkNet Alpha 0.9.0 bekend! Dit is 'n belangrike weergawe waarin StarkNet beduidende stappe in die rigting van volwassenheid maak, met aansienlike toevoegings tot beide funksionaliteit en protokolontwerp.

**Fooie is verpligtend**(tans net op Testnet, totdat weergawe 0.9.0 regstreeks op Mainnet sal wees) — enige vooruitstrewende L2 moet sy eie onafhanklike stelsel van fooie hê. Nadat ons fooie as 'n opsionele kenmerk in weergawe 0.8.0 ingestel het, voel ons nou vol vertroue om dit as 'n kernkomponent van die protokol in te sluit en verpligtend te maak. Meer besonderhede hieronder.

Nog 'n beduidende verandering op protokolvlak is die bekendstelling van Kontrakklasse en die klas/instansie-skeiding. Dit laat 'n meer eenvoudige gebruik van die \`delegate_call\`-funksionaliteit en ontplooiings van bestaande kontrakte toe, wat die fabriekspatroon op StarkNet moontlik maak.

### Kontrakklasse

Met inspirasie uit objekgeoriënteerde programmering, onderskei ons tussen die kontrakkode en die implementering daarvan. Ons doen dit deur kontrakte in klasse en gevalle te skei.

'n**kontrakklas**is die definisie van die kontrak: Die Kaïro-greepkode, wenkinligting, toegangspuntname en alles wat nodig is om die semantiek daarvan ondubbelsinnig te definieer. Elke klas word geïdentifiseer deur sy klas-hash (analoog aan 'n klasnaam uit OOP-tale).

'n**kontrakgeval**, of bloot 'n kontrak, is 'n ontplooide kontrak wat ooreenstem met een of ander klas. Let daarop dat slegs kontrakgevalle optree as kontrakte, dit wil sê, het hul eie stoorplek en kan opgeroep word deur transaksies/ander kontrakte. 'n Kontrakklas het nie noodwendig 'n ontplooide instansie in StarkNet nie. Die bekendstelling van klasse kom met verskeie protokolveranderings.

#### 'Verklaar' Transaksie

Ons stel 'n nuwe tipe transaksie aan StarkNet bekend: die['verklaar'](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)transaksie, wat dit moontlik maak om 'n kontrak**klas te verklaar.**Anders as die \`ontplooi\`-transaksie, ontplooi dit nie 'n instansie van daardie klas nie. Die toestand van StarkNet sal 'n lys van verklaarde klasse insluit. Nuwe klasse kan bygevoeg word via die nuwe \`declare\`-transaksie.

#### Die 'Ontplooi'-stelseloproep- en kontrakfabrieke.

Sodra 'n klas verklaar is, dit wil sê die ooreenstemmende \`declare\`-transaksie is aanvaar, kan ons nuwe gevalle van daardie klas ontplooi. Vir hierdie doel gebruik ons die nuwe \`deploy\`-stelseloproep, wat die volgende argumente neem:

* Die klas hash
* Sout
* Konstruktor argumente

Die 'ontplooi'-stelseloproep sal dan 'n nuwe instansie van daardie kontrakklas ontplooi, waarvan die[adres](https://docs.starknet.io/docs/Contracts/contract-address)bepaal sal word deur die drie parameters hierbo en die ontplooieradres (die kontrak wat die stelseloproep opgeroep het).

Deur ontplooiings binne 'n oproeptransaksie in te sluit, stel ons in staat om pryse en fooie vir ontplooiings te hef, sonder om ontplooiings en oproepe anders te hanteer. Vir meer inligting oor ontplooiingsfooie, sien[die dokumente](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Hierdie kenmerk stel kontrakfabrieke in StarkNet bekend, aangesien enige kontrak die \`ontplooi\`-stelsel kan oproep, wat nuwe kontrakte skep.

#### Beweeg van 'Delegeer-oproep' na 'Biblioteek-oproep'

Die bekendstelling van klasse stel ons in staat om 'n bekende probleem in Ethereum se afgevaardigde-oproepmeganisme aan te spreek: Wanneer 'n kontrak 'n afgevaardigde-oproep na 'n ander kontrak uitvoer, benodig dit net sy klas (sy kode) eerder as 'n werklike instansie (sy berging). Om 'n spesifieke kontrakgeval te spesifiseer wanneer 'n afgevaardigde-oproep gedoen word, is dus slegte praktyk (dit het inderdaad gelei tot 'n paar foute in Ethereum-kontrakte) - net die klas moet gespesifiseer word.

Die ou \`delegate_call\`-stelseloproep word nou opgeskort (ou kontrakte wat reeds ontplooi is sal aanhou funksioneer, maar**kontrakte wat \`delegate_call\` gebruik sal nie meer**saamstel nie), en word vervang deur 'n nuwe library_call-stelseloproep wat kry die klas-hash (van 'n voorheen verklaarde klas) in plaas van 'n kontrakinstansieadres. Let daarop dat slegs een werklike kontrak by 'n biblioteekoproep betrokke is, dus vermy ons die onduidelikheid tussen die oproepkontrak en die implementeringskontrak.

#### Nuwe API-eindpunte

Ons het twee nuwe eindpunte by die API gevoeg, wat die herwinning van klasverwante data moontlik maak:

* \`get_class_by_hash\`: gee die klasdefinisie terug gegewe die klas-hash
* \`get_class_hash_at\`: gee die klas-hash van 'n ontplooide kontrak terug met die kontrakadres

Let daarop dat om die klas van 'n ontplooide kontrak direk te verkry, eerder as om deur die twee metodes hierbo te gaan, kan jy die ou \`get_full_contract\` eindpunt gebruik, wat in toekomstige weergawes hernoem sal word. Al die eindpunte hierbo genoem is ook bruikbaar vanaf die[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Fooie

Ons gaan voort om fooie by StarkNet in te sluit, wat dit verpligtend maak (eers op Testnet, en later ook op Mainnet) vir ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` transaksies. Die \`verklaar\`-transaksie sal nie op hierdie stadium fooie vereis nie. Net so sal \`ontplooi`` transaksies ook nie 'n fooi vereis nie, maar let daarop dat hierdie transaksietipe heel waarskynlik in toekomstige weergawes afgekeur sal word.

Verskeie oop vrae bly in hierdie area, die mees prominente is hoe om fooie te hef vir kontrakverklarings en StarkNet-rekeninge-ontplooiing. Ons sal hierdie kwessies in toekomstige weergawes aanpak.

### Wat is volgende?

Na aanleiding van ons padkaart wat ons</a>

aangekondig het, is ons daartoe verbind om StarkNet se werkverrigting in die algemeen, en die sekwenseerder se werkverrigting in die besonder, te verbeter om gebruikers vinniger terugvoer oor hul transaksies te kry. In die volgende weergawe beplan ons om parallelisering in die volgordehouer in te voer, wat vinniger blokproduksie moontlik maak.</p> 

Die volgende groot weergawe van StarkNet sal op die struktuur van StarkNet se rekeninge fokus, op 'n manier wat soortgelyk is aan[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Hiermee sal ons die manier waarop StarkNet-rekeninge optree gefinaliseer het, wat nog 'n groot stap in die rigting van massa-aanneming neem!