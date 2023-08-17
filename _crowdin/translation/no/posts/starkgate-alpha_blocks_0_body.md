### TL;DR

* Den første versjonen av StarkNet Bridge, StarkGate Alpha, er live på**[Testnet](https://goerli.starkgate.starknet.io/)**, og på**[Mainnet](https://starkgate.starknet.io/)**!
* Vi venter nå på samfunnets tilbakemelding om hvordan ting kan bli bedre. Du kan sende din tilbakemelding for både[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)og[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Mainnet-distribusjonen kommer snart til å følge (Fyll 9. mai 2022: StarkGate er live på Mainnet)

Spenning! Vi er begeistret for å frigjøre StarkGate Alpha, den første versjonen av StarkNets Bridge, lever på Goerli testnet, med Mainnet deployment for å følge snart.*

\*(oppdatert, 9. mai, 2022: StarkGate er live på Mainnet)

**Viktig ansvarsfraskrivelse: dette er en alfaversjon på StarkGate Alpha (les det fine uttrykket nedenfor!).**

![](/assets/starkgate_01.png)

Før du fortsetter, gå å sjekke det ut! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate fungerer som en inngangsport mellom Ethereum og[StarkNet](https://starknet.io/), og lar brukere gjøre alt de kan forvente fra en bro.

#### **Hvor kan jeg finne informasjon om hvordan StarkGate fungerer?**

For å forstå hvordan StarkGate virker, les[teknisk dokumentasjon](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)og ta en titt på[kode](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Merk at dette er den første versjonen, og vi inviterer dine tilbakemeldinger og forslag om hvordan du kan forbedre både[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)og[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Hvilke tokens vil bli støttet av StarkGat?**

* StarkGate Alpha på Goerli støtter ETH og noen andre ERC-20 tokene. Hele listen og de relevante kontraktadressene, både på Ethereum og StarkNet, er tilgjengelig i dette[repo](https://github.com/starkware-libs/starknet-addresses).
* På Mainnet vil StarkGate Alpha kun støtte ETH for å tillate bruk av gebyrmekanismen. Senere vil vi legge til støtte for WBTC, USDC, USDT, og DAI. Du kan se de aktuelle kontraktadressene i dette[repoet](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Videre ned på veien, vil vi publisere mekanismen for å legge til støtte for ytterligere token.

#### **Hvilke sikkerhetsbegrensninger vil StarkGate Alpha ha på Mainnet?**

StarkGate Alpha på Mainnet er lansert med to begrensninger – for å redusere risikoen som er involvert i å bruke en Alpha-versjon:

1. Den totale verdien låst (TVL) i broen på L1 vil begrense mengden av hver tokentype.
2. Maksimum beløp i hver transaksjon sendes fra L1 til L2 (Ethereum→StarkNet) via StarkGate vil være begrenset.

Vi planlegger å lette disse begrensningene gradene, og løfte dem helt etter hvert som tilliten vokser. De oppdaterte parameterne finnes i StarkGats[dokumentasjon](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa og hva det betyr

Som alltid minner vi deg om at StarkNet er i sin**Alpha**-fase:

* Ting kan knuse. Hvis de ikke mislykkes katastrofalt, kunne fondene dine gå tapt (**les ansvarsfraskrivelsen under**!).
* Både StarkNet Alpha og StarkGate kontrakter kan oppgraderes uten tidsløs. Samtidig som vi forventer å kunngjøre slike oppgraderinger i god tid når det gjelder umiddelbare sikkerhetsrisikoer (for eksempel hvis en kritisk feil blir funnet), kan oppgraderingen brukes lite eller ingen advarsel.
* Koden til broen, samt deler av StarkNet Alpha, er ennå ikke revidert. ABDK og Nederland realiserer snart revisjonene av StarkGate Alpha .

Vi oppfordrer alle brukere til å bidra til å forbedre broen ved å gi tilbakemeldinger fra dem ved å bruke en av følgende plattformer:

1. [StarkGate frontend repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Kontrakter tilbakeføring](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamaner](http://community.starknet.io/)

For spørsmål og støtte for utviklere, delta i[StarkNet discord server](https://discord.gg/uJ9HZTUk2Y).

### Ansvarsfraksjon

***StarkNet Alpha er et nytt og komplisert system som ikke er fullt ut revidert. Det samme gjelder StarkNet Bridge. Som alle komplekse programvaresystemer kan både StarkNet og broen inneholde feil som, i ekstreme tilfeller, kan føre til tap av alle dine midler. Så,***treder forsiktig og pass opp!******

*StarkNet økosystem er et stort og raskt voksende sett med uavhengige lag og enkeltpersoner, som StarkWare ikke har noen kontroll over og ikke har noe ansvar. Alle prosjektene som er utviklet av økosystemmedlemmer kan inneholde feil som i ekstreme tilfeller kan føre til tap av alle midlene dine. Etter hvert som flere smarte kontrakter settes inn, øker potensialet for utilsiktede skadelige feil, og selv ødeleggende svindel og falske trekk. Du kan derfor behandle alle smarte kontrakter på StarkNet som du bruker smarte kontrakter på dette nettstedet, og bruk bare de du har god grunn til å stole som sikker.*