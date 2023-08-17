### TL;DR

* En ny StarkNet sequencer håller på att utvecklas
* Det är öppen källkod under Apache 2.0-licensen
* Det första målet är att öka StarkNet genomströmning

### En glänsande ny sequencer

Vi är glada att meddela att en ny StarkNet Sequencer är på gång. Som StarkNet: s tech stack rör sig mot öppen källkod, efter[Kairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)och[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), Vi fortsätter nu med StarkNet nya sequencer. Den kommer att vara öppen källkod, tillgänglig under Apache 2.0-licens, och du kan gå och kolla in[repo](https://github.com/starkware-libs/blockifier)nu!

Att bygga en ny Sequencer är en del av[StarkNet färdplan](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)som vi presenterade för några månader sedan. Implementering av den nya sequencer kommer att börja med utbyte av**Blockifier**, modulen i sequencer som utför blockexekvering. Som förklaras i färdplanen förväntas det leverera fördelar för Starknets prestanda.

Vårt tillvägagångssätt för att bygga denna sequencer är samma tillvägagångssätt som guidade oss i StarkNet Alpha. Sekvenseraren**kommer att implementeras i steg**, och vi delar idag dess första modul. Med tiden kommer nya komponenter i sequencer att slutföras, tills en Rust-baserad sequencer så småningom kommer att ersätta den nuvarande Python-baserade sequencer helt.

### Vad gör sequencer?

På StarkNet, efter att användare skickar transaktioner, det första stoppet i transaktionens resa till STARK skalning är sekvenserarna. I StarkNet-protokollet är ordnarna ansvariga för att beställa transaktionerna och att producera block. Efter blocket skapas av en sequencer, och godkänns av konsensusprotokollet, de provers ta över och generera ett bevis för L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Öppen källkod

StarkNet Alpha lanserades på Mainnet i november 2021. Från början var det fast beslutna att dela kraften i STARK skalning med världen.

Idag släpper vi de första i en rad moduler i den nya sekvensen med öppen källkod. Det kommer att ta flera månader för alla moduler och undermoduler som ska användas. Open sourcing allt kommer att göra det möjligt för gemenskapens medlemmar att bidra till utvecklingen, och att granska kodbasen.

Detta kommer att kant StarkNet närmare en punkt av decentraliserad tillstånd sekvensering. Vi utformar nu Starknets decentraliserade protokoll och vi uppmuntrar samhället att delta i[forskningen och diskussionen](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Prestation

StarkNet ursprungliga sequencer är till stor del en anpassning av StarkEx infrastruktur. Nu finns det ett behov av infrastruktur som är byggd särskilt för kraven i ett decentraliserat högpresterande nätverk.

Den nya sequencern är byggd i Rust och är utformad och utvecklad med tanke på prestanda. Den nya sequencer bygger också på fasta grunder: Papyrus, den nya[StarkNet full nod,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)kommer att hantera statlig förvaltning, och Cairo-rs, den nya Cairo-VM av LambdaClass, kommer att påskynda Kairo utförandet. Vi förväntar oss att den nya sequencern förbättrar den befintliga sequencern i alla avseenden. Genomströmningen och latensen av nätverket förväntas att förbättras dramatiskt med integrationen av denna sequencer i StarkNet.

Vi förväntar oss också att andra infrastruktur- och utvecklingsverktyg ska kunna använda den nya sekvensen för att förbättra utvecklingsupplevelsen. Full nod prestanda förväntas förbättra såväl som alla testning ramverk.

### Summary

Vi är glada att i dag meddela den nya open-source sequencer. Dess första modul är redan tillgänglig för gemenskapen att granska, och kommer att följas med fler moduler under de kommande månaderna. Vi är också glada att ta ytterligare ett steg i vår färdplan för att förbättra Starknets prestanda. Vi strävar efter att göra nätverket mer effektivt och tillgängligt, och vi uppskattar stödet från alla som har anslutit sig till oss på denna resa.