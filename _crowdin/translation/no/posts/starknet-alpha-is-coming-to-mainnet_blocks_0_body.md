### TL;DR

* *StarkNet Alpha lanseres på Mainnet Ethereum innen november*
* Tid å bygge på StarkNet er nå

### En kort historikk

Vi kunngjorde visjonen vår for[StarkNet](https://starkware.co/product/starknet/)ved starten av året: å bringe massiv skalerbarhet til Ethereum samtidig som vi bevarer L1-sikkerheten. tillatelsesløse interaksjoner og desentralisering.\
Vi ga ut**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**på et offentlig testnet i juni. Denne versjonen har støttet fullt ut tillatelsesløse generelle datamaskinens smartkontrakter. Vi har siden oppgradert det to ganger: først til**Alpha 1**— tilbudt[L1<>L2 melding- og on-chain data](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), og deretter til**Alfa 2**— supporting[composability](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 støtter nå sammensatte smartkontrakter for generell databeregning i en ethereum-lignende tilstand, evne for L1- og L2-kontrakter til å interagere med hverandre. Les mer[her](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Hva er StarkNet Alpha på Mainnet?

StarkNet Alpha på Mainnet vil støtte lignende funksjoner som de som for tiden er tilgjengelige på Goerli-offentlige testnet.

#### **Hva skal forventes**

Fordi StarkNet er under utvikling, ønsker vi å introdusere evner på en trinnvis måte og sikre at utviklerforventningene blir møtt i hvert enkelt steg. Det er særlig to viktige aspekter vi vil understreke:

* **Tillatt smartkontrakt distribusjon**: Vi vil følge den fornuftige spillerboken introdusert av vår Optimistiske Rollup-kolleger: start med*tillatet*kontraktsutlevering. Protokollen som angir hvordan man skal be om inkludering av smartkontrakten din i denne innledende hvitelisten vil bli publisert i løpet av de kommende ukene.
* **Ingen garanti for kompatibilitet med bakoverholdelse**: Vi forventer en framtidig overgang fra StarkNet Alpha til StarkNet Beta til å inkludere regenese av staten. Nettverket starter fra blokk 0, og søknader må innløse kontraktene sine. Videre bør utviklere og brukere merke seg at forventet StarkNet Beta kanskje ikke er bakoverkompatible med StarkNet Alpha. . utviklere må kanskje endre kontraktene sine. Uansett vil vi kunne tilby en enkel overgang til applikasjoner, med minimale nødvendige endringer.

#### Flere nære funksjoner

Som en del av overgangen av StarkNet Alpha fra testnet til Mainnet vil vi:

1. Legg konstruktører til kontrakter.
2. Forbedre prøvingsrammeverket.
3. For blokker og transaksjoner flyttes fra å bruke en ID til å bruke en hash.

Vi planlegger å fortsette bruken av nye funksjoner i en regelmessig matvarekrise, på samme måte som vi har gjort på det offentlige testnet. På kort sikt planlegger vi følgende oppgraderinger:

1. Konto-kontrakter og Token kontrakter - åpne måten å DeFi applikasjoner samhandle med StarkNet på måten de kjenner på.
2. Forbedret kontraktfunksjonalitet — støtte oppgraderingen av kontrakten og arrangement.
3. Advarsel: Kompileren for Solidity-til-Kairo fra Nederland vil tillate en jevn overgang fra smarte kontrakter mellom Solidity og StarkNet smartkontrakter.
4. Ethereum Signatures: naturlig støtte til ECDSA over secp256k1 vil gi enklere integrasjon med eksisterende vegger.
5. StarkNet Full Node: en full node vil tillate brukere å delta i nettverket med maskinvare krav på nivå med en Ethereum Full Node.

#### Avgift Mekanisme

Mekanismen for avgiften vil bli slått på så snart konto- og token-kontrakter er lagt til StarkNet Alpha.

Alle transaksjoner levert til StarkNet vil påløpe et gebyr som er designet for å dekke L1- og off-chain kostnader. Gebyret belastes i første omgang på ETH. Kostnaden for en enkelt transaksjon vil avta, da StarkNet øker skalaen (som gjelder alle eksisterende STARK-baserte systemer). Når vi utformer de innledende gebyrmekanismene, foretar vi en enkel vurdering av prisingen av transaksjoner basert på ressursenes forbruk. Forvent at denne mekanismen skal forbedres og forbedres over tid.

Med et øye for å lage StarkNet et bærekraftig nettverk og sikre sine operatører og utviklere, en del av inntektene som samles inn fra avgiftene, vil bli distribuert til applikasjonsutviklere og til StarkNet kjerneutviklere.

#### Sikkerhet

StarkNet Alphas sikkerhetsmodell på Mainnet vil følge dagens modell på testnet:

* Alle tilstandsoverganger er støttet av en STARK-bevis, og er derfor sikret å være gyldige.
* Alle statsdata vil bli publisert i kjeden, slik at staten vil være fullt konstruktivt fra L1.
* Det vil være én sekvens.
* Nettverket vil bli oppgradert uten tidsforsinkelser.

### StarkNet Ecosystem er i vekst

Det var en massiv bølge av utviklere som ville lære Cairo og utvikle seg over StarkNet. De ga utrolig tilbakemelding, og det var en ekte glede å se vibrerende diskusjoner på StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Videre blir StarkNet utviklet ikke bare av StarkWare teamet, men også av noen av de sterkeste lagene i blokkjedesystemet:

* Nederlandsk virksomhet arbeider med to prosjekter:

1. **[Warp](https://github.com/NethermindEth/warp)**: Kompilerer for fast kontakt på Kairo

2. **[Stemmer](https://voyager.online/)**: en StarkNet blokk utforsker

* Åpne Zeppelin arbeider med en[Standardkontrakter](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)implementering av StarkNet og har også begynt å jobbe med utviklernes miljø:[Nile](https://github.com/martriay/nile).
* ShardLabs jobber med en[StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)og med bedre testing av rammeverk.
* Erigon-teamet arbeider med å utvide sin fulle node til å støtte StarkNet (codename: Fermion). De jobber sammen med oss for å utforme kjernemekanismer i StarkNet.
* Equilibrium virker på en StarkNet Full Node implementering, i Rust,
* Revisjonstjenesten for Cairo vil i kommende måneder ABDK, ConsenSys Diligence, Peckshield, og Trail of Bits vil gjennomføre internrevisjoner.
* StarkNet audits: Vi startet med revisjon av nettverkets stiftelser:

1. **CryptoExpert**kommer til å gjennomføre en revisjon av Cairo Solidity Verifier.
2. Et formelt**LEAN-bevis**av Kairo-spekene ble nylig ferdigstilt og publisert som[papir](https://arxiv.org/abs/2109.14534)og et GitHub[repo](https://github.com/starkware-libs/formal-proofs).

Forvent mange interessante samarbeid i løpet av de kommende månedene!

### STARKer skalerer i dag

Vi nærmer oss lanseringen av StarkNet Alpha med tillit, som StarkEx, vår frittstående skalering av SaaS, har vist hvordan STARKs kan massivt skala anvendelser av Ethereum. Vi startet StarkEx for[dYdX](https://dydx.exchange/)(evige kontrakter),[DeversiFi](https://www.deversifi.com/)(spottrading and payments), i tillegg til for[Uttrukne](https://www.immutable.com/)og[sorteringer](https://sorare.com/)(NFT-gruvedrift og trading). Vi fikk redusert sine gass/tx kostnader med 100x–200 X, til om lag 650 gass/tx i Validium (off-chain data), og 1100 gass/tx for en ZK-Rollup.

StarkEx har til nå gjort seg gjort opp $80B i varehandel og over 27M-transaksjoner, og det er langt på å formidle andre L2-løsninger - og alle disse har blitt kombinert.

### Handle nå

Det har aldri vært bedre tid til å bli med på det voksende StarkNet ecosystem ved å bygge dine neste dApp eller nyttige utviklerverktøy.

Vi inviterer deg til:

1. Bli med på[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), hvor du kan møte og engasjere StarkNet community.
2. [Start å lære](https://www.cairo-lang.org/docs/hello_starknet/index.html)hvordan du skriver kodeverket på smartkontrakter.
3. [DM us](https://twitter.com/StarkWareLtd)— Vårt team er ivrig etter å hjelpe dine ideer og initiativer å komme til liv.

**Oppdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet