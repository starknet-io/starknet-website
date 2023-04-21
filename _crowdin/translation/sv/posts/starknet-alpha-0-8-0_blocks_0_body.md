### TL;DR

* StarkNet Alpha 0.8.0 presenterar den första versionen av avgiftsmekanismen (tillval till StarkNet Alpha 0.9.0.)
* Nytt API kräver att man uppskattar transaktionsavgiften för att erhålla transaktionsspårning, vilket ger bättre synlighet och felsökningsfunktioner
* Förbättrad prestanda för StarkNet sequencer
* L1→L2 meddelande annullering

### Introduktion

Som delas i vår[färdplan](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), efter det senaste tillägget till Starknets funktionalitet och funktioner , vår uppmärksamhet övergår till prestandaförbättringar och protokolldesign (inklusive avgifter, kontoabstraktion, decentralisering, etc.). StarkNet Alpha 0.8.0 startar processen att lägga till transaktionsavgifter och förbättra sekvensens prestanda.

Färdplanen för StarkNet innehåller en avgiftsmekanism, och genom att gå vidare med denna version tar vi ett viktigt steg närmare full prestanda för plattformen.

Att lägga till avgiftsmekanismen är en viktig del av Starknets prestandadesign. Utan en minimal avgift riskerar vi att möta oändliga transaktioner: vilket skulle göra det omöjligt för systemet att vara presterande, oavsett sekvensoptimering.

### Funktioner

#### Avgift Support

StarkNet Alpha stöder nu den första versionen av avgiftsmekanismen. Denna mekanism är nödvändig även i detta tidiga skede, och även på Testnet, av två huvudsakliga skäl:

1. Det gör det möjligt för utvecklare att börja optimera sina kontrakt enligt Starknets kostnadsmodell.
2. Det är en avgörande motpart för att förbättra systemets prestanda, eftersom det förhindrar spamming genom att skicka otaliga transaktioner.

Denna version introducerar de komponenter som krävs för utvecklare att införliva avgiftsbetalningar i sina verktyg och program. Utvecklare kan nu uppskatta transaktionsavgiften genom att ringa \`estimate_fee\`-slutpunkten och betala avgiften som en del av transaktionsavgiften.

Eftersom denna funktion inte är bakåtkompatibel, kommer vi inte att genomdriva avgiften betalning vid denna tidpunkt, men endast från version 0. .0, som kommer att släppas om några veckor. Denna gradvisa övergång gör det möjligt för användare och utvecklare att anpassa sig till den nya modellen.

#### Avgiftsstruktur på 0.8.0

På 0.8.0, kommer avgifter att tas ut enligt beräkningskomplexiteten ensam, medan StarkWare kommer fortfarande subventionera L1 kommunikationskostnad. Vi kommer att uppdatera avgiftsmekanismen för att inkludera dessa L1-drifts- och kommunikationskostnader under de närmaste veckorna. Betalningen kommer att samlas in atomiskt med transaktionen utförande på StarkNet L2. Se dokumentationen[avgifter](https://starknet.io/documentation/fee-mechanism/)för en fördjupad beskrivning.

Det är viktigt att notera att vi kommer att ha ett nära samarbete med utvecklargemenskapen för att justera och utveckla avgiftsmekanismen allteftersom StarkNet utvecklas.

#### L2 Goerli ETH Faucet

Vi lanserade[L2 Goerli ETH kranen](https://faucet.goerli.starknet.io/)för att göra det möjligt för användare att betala avgifter på Testnet. Denna kran skickar små mängder av L2 Goerli ETH till din kontoadress på StarkNet Goerli som du kan använda för att betala transaktionsavgiften.

#### Trace API

Vi har lagt till möjligheten att hämta en transaktion exekveringsspår till StarkNet API. Inne i transaktionens spårning, alla interna samtal är synliga, tillsammans med information som exekveringsresurser förbrukas, returvärde, utsända händelser och meddelanden skickade. Detta nya samtal förenklar förståelsen av ett kontrakts beteende eller felsökning transaktioner. Dessutom kan verktyg som[Voyager](https://voyager.online/)eller[StarkTx](https://starktx.info/)införliva denna data; ge användarna mer detaljerad analys, i synnerhet för interaktion med kontokontraktet.

För att erhålla spåret kan du använda \`get_transaction_trace\` i StarkNet’s CLI. För att se ett exempel på hur man använder den, kontrollera[handledningen](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Annullering av meddelande

En ytterligare funktion i denna version är möjligheten att avbryta L1→L2-meddelanden. Varför är detta användbart? Föreställ dig ett scenario där en användare överför en tillgång från L1 till L2. Flödet börjar med att användaren skickar tillgången till en StarkNet bro och motsvarande L1≥ L2 meddelandegenerering. Nu, tänk dig att L2-meddelandeförbrukningen inte fungerar (detta kan hända på grund av en bugg i dApps Kairo kontrakt). Detta kan resultera i att användaren förlorar vårdnaden över sin tillgång för evigt.

För att minska denna risk, vi tillåter kontraktet som initierade L1≥ L2-meddelandet att avbryta det — efter att ha deklarerat avsikten att göra det och vänta en lämplig tid (se[dokumentation](https://starknet.io/l1-l2-messaging/#cancellation)).

### Förbättringar av prestanda

Denna version minskar avsevärt den tid en sequencer behöver för att utföra en ström av inkommande Kairo transaktioner.

Detta är bara det första steget! Vår nästa stora prestationmilstolpe, som kommer att introduceras snart (0.9.0), är parallell körning av sequencer, och många fler optimeringar väntas ut på vägen.

### Vad nu?

Läs den tekniska dokumentationen[här](https://starknet.io/documentation/fee-mechanism/).

Gå till[starknet.io](https://starknet.io/), för all StarkNet information, dokumentation, tutorials och uppdateringar.

Gå med i[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)för utvecklingsstöd, ekosystemmeddelanden och att bli en del av samhället.

Besök[StarkNet Shamans](https://community.starknet.io/)för att hålla dig uppdaterad och delta i alla StarkNet forskningsdiskussioner.