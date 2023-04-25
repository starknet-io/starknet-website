### TL;DR

* **Avgifter är nu obligatoriska på Testnet, snart på Mainnet**
* Kontrakt fabriksmönster är nu möjligt!
* StarkNet introducerar kontraktsklasser
* Delegera samtalet ersätts med biblioteksanrop

### Introduktion

Vi är glada att introducera StarkNet Alpha 0.9.0! Detta är en viktig version där StarkNet gör betydande steg mot mognad, med betydande tillägg till både funktionalitet och protokolldesign.

**Avgifter är obligatoriska**(för närvarande endast på Testnet, fram till version 0.9. kommer att leva på Mainnet) - alla blomstrande L2 måste ha ett eget oberoende system av avgifter. Efter införandet av avgifter som en valfri funktion i version 0.8. , Vi känner oss nu säkra på att inkludera dem som en central del av protokollet, och göra dem obligatoriska. Mer information nedan.

En annan betydande förändring på protokollnivå är införandet av kontraktsklasser och klass/instans separation. Detta möjliggör en enklare användning av \`delegate_call\`-funktionen och distributioner från befintliga kontrakt, vilket möjliggör fabriksmönstret på StarkNet.

### Kontrakt klasser

Med inspiration från objektorienterad programmering skiljer vi mellan avtalskoden och dess genomförande. Vi gör det genom att separera kontrakt i klasser och instanser.

En**kontraktsklass**är definitionen av kontraktet: Dess Kairo bytecode, tips information, namn ingångspunkt och allt som behövs för att entydigt definiera sin semantik. Varje klass identifieras av sin klass hash (analogt med ett klassnamn från OOP språk).

En**kontrakt instans**, eller helt enkelt ett avtal, är ett distribuerat kontrakt som motsvarar någon klass. Notera att endast avtalsfall beter sig som kontrakt, dvs. har egen lagring och är callable av transaktioner/andra kontrakt. En kontraktsklass har inte nödvändigtvis en utplacerad instans i StarkNet. Införandet av klasser kommer med flera protokoll förändringar.

#### ‘Declare’ Transaktion

Vi inför en ny typ av transaktion till StarkNet:[‘declare’](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)transaktionen, vilket gör det möjligt att deklarera ett kontrakt**klass.**Till skillnad från transaktionen \`deploy\` distribuerar detta inte en instans av den klassen. Staten StarkNet kommer att innehålla en lista över deklarerade klasser. Nya klasser kan läggas till via den nya \`declare\`-transaktionen.

#### System Call and Contract Factories för ‘Deploy’-systemet.

När en klass är deklarerad, det vill säga motsvarande \`declare\`-transaktion accepterades, kan vi distribuera nya instanser av den klassen. För detta ändamål använder vi det nya systemanropet \`deploy\`, vilket tar följande argument:

* Klassen hash
* Salt
* Constructor argument

Den ”utplacerade” syscall kommer sedan att distribuera en ny instans av den kontraktsklassen, vars[adress](https://docs.starknet.io/docs/Contracts/contract-address)kommer att bestämmas av de tre parametrarna ovan och utplacerarens adress (kontraktet som åberopade systemsamtal).

Genom att inkludera distributioner i en åberopande transaktion kan vi prissätta och debitera avgifter för distributioner, utan att behöva behandla distributioner och anrop på ett annat sätt. För mer information om driftsättningsavgifter, se[docs](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Denna funktion introducerar kontraktsfabriker i StarkNet, eftersom alla kontrakt kan åberopa \`deploy\` syscall, skapa nya kontrakt.

#### Flytta från ‘Delegera samtal’ till ‘Library Call’

Införandet av klasser gör det möjligt för oss att ta itu med ett välkänt problem i Ethereums delegatanropsmekanism: När ett kontrakt utför en delegatanrop till ett annat avtal, den behöver bara sin klass (dess kod) snarare än en faktisk instans (dess lagring). Att behöva specificera en specifik avtalsinstans när man gör en delegatsamtal är därför dålig praxis (faktiskt, faktiskt, det har lett till några buggar i Ethereum kontrakt) — endast klassen behöver anges.

Det gamla systemanropet \`delegate_call\` blir nu föråldrat (gamla kontrakt som redan har distribuerats kommer att fortsätta att fungera, men**kontrakt med \`delegate_call\` kommer inte längre kompilera**), och ersätts av ett nytt library_call-systemsamtal som får klassen hash (av en tidigare deklarerad klass) istället för en avtalsinstansadress. Observera att endast ett faktiskt kontrakt är involverat i en biblioteksutlysning så vi undviker tvetydigheten mellan samtalsavtalet och genomförandeavtalet.

#### Nya API slutpunkter

Vi lade till två nya slutpunkter till API:et, vilket möjliggör hämtning av klassrelaterade data:

* \`get_class_by_hash\`: returnerar klassdefinitionen med klasshashen
* \`get_class_hash_at\`: returnerar klasshashen för ett distribuerat kontrakt med kontraktsadressen

Observera att för att få klassen av ett distribuerat kontrakt direkt, snarare än att gå igenom de två metoderna ovan, du kan använda den gamla \`get_full_contract\` slutpunkten, som kommer att döpas om i framtida versioner. Alla de ovan nämnda ändpunkterna kan också användas från[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Avgifter

Vi fortsätter att införliva avgifter i StarkNet, vilket gör dem obligatoriska (först på Testnet, och senare även på Mainnet) för ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` transaktioner. Transaktionen \`declare\` kommer inte att kräva avgifter just nu. På samma sätt kommer \`deploy`` transaktioner inte heller att kräva en avgift, men observera att denna transaktionstyp sannolikt kommer att föråldras i framtida versioner.

Flera öppna frågor kvarstår inom detta område, de mest framträdande är hur man tar ut avgifter för kontraktsdeklarationer och användning av StarkNet-konton. Vi kommer att ta itu med dessa frågor i framtida versioner.

### Vad är nästa?

Efter vår färdplan som vi[meddelade i februari](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), har vi åtagit oss att förbättra Starknets prestanda i allmänhet, och sekvensens prestanda i synnerhet, för att få användarna snabbare återkoppling om sina transaktioner. I nästa version planerar vi att introducera parallellisering i sekvenseraren, vilket möjliggör snabbare blockproduktion.

Nästa större version av StarkNet kommer att fokusera på strukturen på Starknets konton, på ett sätt som liknar[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Med detta kommer vi att ha slutfört hur StarkNet-konton beter sig och ta ytterligare ett stort steg mot massanvändning!