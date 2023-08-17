### TL;DR

* Alfa er levende på Mainnet
* Den støtter generell beregning og sammensatte egenskaper
* Raskt voksende samfunn, utvikling av verktøy og søknader
* Ytterligere egenskaper som skal rulles ut fortløpende i ukene som kommer
* Ansvarsfraskrivelse: dette er en Alpha versjon (les det fine uttrykket nedenfor)

### Introduksjon

StarkNet Alpha lanserer i dag på Ethereum Mainnet!

StarkNet er en tillatelsesfri desentralisert Rollup som et L2-nettverk over Ethereum. StarkNet tillater enhver dApp å oppnå ubegrenset skala for sin databehandling, uten å kompromittere Ethereums kompromitterende evne og sikkerhet, takket være dens avhengighet av det sikreste og mest skalerbare kryptografiske systemet —[STARK](https://starkware.co/stark/). StarkNet er bygget på[Cairo](https://starkware.co/cairo/)programmeringsspråk, den første produksjonsklassende målinger utført på von-Neumann verifiserer på Ethereum. Både Cairo og STARK ble utviklet av StarkWare og har drevet alle våre produksjonsgradsapplikasjoner, som har avregnet over 50M txs og $250B siden sommeren 2020.

Blant andre funksjoner muliggjør StarkNet Alpha generelle databehandlingskontrakter som støtter komposittevne, både med andre StarkNet kontrakter og via L1<>L2 meldingstjeneste med L1-kontrakter. StarkNet Alpha opererer i opprullingsmodus, noe som betyr at alle stats- diff data er sendt på kjeden.

Tilbake i januar delte vi StarkNet[veikart](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). I juni fortsatte StarkNet Alpha å leve på offentlig test og har blitt oppdatert med nye funksjoner på rullende basis. Vi er glade for å ligge foran tidsplanen, takket blant annet til vår avhengighet av vår kampnære STARK/Kairo programvarestack.

### Hvordan skal du behandle StarkNet Alpha?

For det første, med stor varsomhet, som «Alpha»-etiketten av en årsak. Forvente endringer, fixes og forbedringer kommer. StarkNet Alpha er ennå ikke revidert, og vi kan utsette en slik revisjon til nettverket forfaller noen mer (les ansvarsfraskrivelsen i slutten av denne posten for mer informasjon).

Generelt følger vi den forsiktige og fornuftige veien som er definert av våre optimistiske rulleupkolleger, nemlig Arbitrum og Optimism: starte nettverket med én enkelt sekvens og hvitelistiske programmer for å sikre at utviklerne forstår risikoen som er involvert. Vi fortsetter å ha full fortjeneste til en desentralisering av StarkNet.

Og hvordan skal du behandle StarkNet Alphas økonomer? Alfa vil starte ut uten transaksjonskostnader. Neste oppgradering, bare noen uker unna, vil innføre en gebyrmekanisme - vi vil dele mer detaljer i et eget innlegg.

### Start bygging

Vi inviterer deg til å begynne å skrive dine egne programmer på StarkNet ved å sjekke (ny!) [nettsted](http://starknet.io/), eller hopper direkte til[opplæringsan](https://starknet.io/docs/).

Hvis du er klar til å deplosiere, vennligst følg denne[onboarding-prosessen](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); skapt for å sikre at alle utviklere er godt kjent med den innledende tilstanden til systemet.

### Økosystem

De siste par månedene har vi sett en fantastisk vekst i størrelsen og aktiviteten til StarkNet samfunn, hvilke samlinger på[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Dozens of developers – team og enkeltpersoner – på tvers av blockchain økosystem bidrar til denne innsatsen. (Se ansvarsfraskrivelsen i slutten av dette innlegget)

#### Utvikler verktøy

* OpenZeppelin definerer standardkontrakter. Deres[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)og[diskusjoner](https://github.com/OpenZeppelin/cairo-contracts/discussions)er verdt å følge
* [Warp](https://github.com/NethermindEth/warp)Solidity–>Kairo transpiler, utviklet av Nethermind
* Shard Labs’[HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)og[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent utvikler verktøyet, inkludert felles innsats på StarkNet.js, sammen med[Sean Han](https://twitter.com/seanjameshan)

#### Infrastruktur

**Blokk utforsker**:

* [Voyager](http://voyager.online/)prosjektet Nethermind
* [Eth.tx](https://ethtx.info/)vil tilby supportanalyse og detaljert visning av StarkNet transaksjoner

**Full nodes**, to forsøk underveis: Det ene er Fermion-prosjektet i regi av Erigon, den andre er prosjektet[Stifinder](https://github.com/eqlabs/pathfinder), ledet av Equilibrium

**Wallets**:

* [ArgentX](https://github.com/argentlabs/argent-x)er en nettleserutvidelse utviklet av Argent, allerede tilgjengelig for å fjerne
* Torus nøkkelstyringsløsning er StarkNet klar
* Ledger utvikler en naturlig StarkNet app, som skal gjøres tilgjengelig før årsskiftet.

**Cairo Audits**: ConsenSys Diligence, Trail of Bits, Peckshield, og ABDK gjennomfører enten allerede revisjoner av Cairo eller starter snart

**API Services**: etter at en StarkNet full node er gjort tilgjengelige, API-tjenester vil bli tilbudt av Figment, Chainstack, og Infura

**Indeksering**: Vi vil arbeide med å integrere TheGraph sammen med StarkNet, sammen med fig.

### Veien foran

I ukene og månedene som kommer, vil vi oppgradere Alfa med følgende egenskaper:

* Kontrakt oppgraderingsmekanisme
* Avgift Mekanisme
* Hendelser
* Tilføyelse av manglende syscalls (get_block_number, get_block_timestamp, og mer)
* Skjelettversjon av volition
* Og mye mer …

For å overvåke dette arbeidet fortløpende, se funksjonenes[foreløpig veikart](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Ser vi ytterligere ut, fortsetter vi å investere mye i aktiv forskning på flere fronter (kommer med[Shamans](https://community.starknet.io/)innsatsen):

* Desentralisering
* Skalering
* Data tilgjengelighet
* Tillatt incentialisering

### Ring til handling

* Begynn å skrive kontrakter på permissionless StarkNet testnet på Goerli
* Bli med på[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Bli med i fellesskaps samtaler
* Delta på det første[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27–28 2022, Stanford CA)
* Bli med på[StarkNet Shamans](https://community.starknet.io/)for å dykke dypere inn i forskningsutfordringer

### Ansvarsfraksjon

***StarkNet Alpha er et nytt og komplisert system som ikke er fullt ut revidert. Som alle komplekse programvaresystemer kan StarkNet systemet inneholde feil som i ekstreme tilfeller kan føre til tap av alle dine midler. Så,***treder forsiktig og pass opp!******

*StarkNet økosystem er et stort og raskt voksende sett med uavhengige lag og enkeltpersoner, som StarkWare ikke har noen kontroll over og ikke har noe ansvar. Alle prosjektene som er utviklet av økosystemmedlemmer kan inneholde feil som i ekstreme tilfeller kan føre til tap av alle midlene dine. Etter hvert som flere smarte kontrakter settes inn, øker potensialet for utilsiktede skadelige feil, og selv ødeleggende svindel og falske trekk. Du kan derfor behandle alle smarte kontrakter på StarkNet som du bruker smarte kontrakter på dette nettstedet, og bruk bare de du har god grunn til å stole som sikker.*