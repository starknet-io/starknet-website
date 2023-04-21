### TL;DR

* Den første version af StarkNet Bridge, StarkGate Alpha, er live på**[Testnet](https://goerli.starkgate.starknet.io/)**og på**[Mainnet](https://starkgate.starknet.io/)**!
* Vi venter på fællesskabsfeedback om, hvordan tingene kan forbedres. Du kan sende din feedback til både[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)og[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Mainnet implementering vil følge snart (opdatering, 9. maj 2022: StarkGate er live på Mainnet)

Spænding! Vi er begejstret for at frigive StarkGate Alpha, den første version af StarkNet ‘ s Bridge, nu live på Goerli testnet, med Mainnet implementering til at følge snart.*

\*(opdatering, 9. maj 2022: StarkGate er live på Mainnet)

**Vigtig ansvarsfraskrivelse: dette er en alfa-version på StarkGate Alpha (læs de fine print nedenfor!).**

![](/assets/starkgate_01.png)

Før du fortsætter, så tjek det ud! [StarkGate Testnet](https://goerli.starkgate.starknet.io/)[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate fungerer som en gateway mellem Ethereum og[StarkNet](https://starknet.io/), og giver brugerne mulighed for at gøre alt, hvad de kan forvente af en bro.

#### **Hvor kan jeg finde oplysninger om, hvordan StarkGate virker?**

For at forstå, hvordan StarkGate fungerer, læs den[tekniske dokumentation](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)og tag et kig på[koden](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Bemærk, at dette er den første version, og vi inviterer din feedback og forslag til, hvordan du forbedrer både[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)og[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Hvilke tokens vil blive understøttet af StarkGate?**

* StarkGate Alpha på Goerli understøtter ETH og et par andre ERC-20 tokens. Den fuldstændige liste og de relevante kontraktadresser, både på Ethereum og StarkNet, er tilgængelige i dette[repo](https://github.com/starkware-libs/starknet-addresses).
* På Mainnet vil StarkGate Alpha i første omgang kun støtte ETH for at tillade brug af gebyrmekanismen. Senere vil vi tilføje støtte til WBTC, USDC, USDT, og DAI. Du kan se de relevante kontraktadresser i dette[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Længere nede på vejen, vil vi offentliggøre mekanismen for tilføjelse af støtte til yderligere tokens.

#### **Hvilke sikkerhedsbegrænsninger vil StarkGate Alpha have på Mainnet?**

StarkGate Alpha på Mainnet lanceres med to begrænsninger — for at reducere de risici, der er forbundet med at bruge en Alpha version:

1. Den samlede værdi låst (TVL) i broen på L1 vil begrænse mængden af hver token-type.
2. Det maksimale beløb i hver transaktion sendt fra L1 til L2 (Ethereum→StarkNet) via StarkGate vil være begrænset.

Vi planlægger gradvist at lette disse begrænsninger og løfte dem fuldstændigt, efterhånden som tilliden vokser. De opdaterede parametre kan findes i StarkGate’s[dokumentation](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa og hvad det betyder

Som altid minder vi dig om, at StarkNet er i øjeblikket i sin**Alpha**fase:

* Tingene kan brydes. Hvis de fejler katastrofalt, kan dine midler gå tabt (**læs ansvarsfraskrivelse nedenfor**!).
* Både StarkNet Alpha og StarkGate kontrakter kan opgraderes uden en timelock. Mens vi forventer at annoncere sådanne opgraderinger i god tid i tilfælde af overhængende sikkerhedsrisici (f.eks. hvis en kritisk fejl er fundet), kan opgraderingen anvendes med lidt eller ingen advarsel.
* Koden for broen samt dele af StarkNet Alpha, er endnu ikke blevet revideret. ABDK og Nethermind audits af StarkGate Alpha vil blive afsluttet snart.

Vi opfordrer alle brugere til at hjælpe med at forbedre broen ved at give deres feedback ved hjælp af en af følgende platforme:

1. [StarkGate frontend repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Kontrakter repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamaner](http://community.starknet.io/)

For spørgsmål og dev support, deltage i[StarkNet discord server](https://discord.gg/uJ9HZTUk2Y).

### Ansvarsfraskrivelse

***StarkNet Alpha er et nyt og komplekst system, der ikke er blevet fuldt revideret. Det samme gælder for StarkNet-broen. Ligesom alle komplekse software-systemer, både StarkNet og broen kan indeholde fejl, der, i ekstreme tilfælde kan føre til et tab af alle dine midler. Så***træde forsigtigt og pas på!******

*Økosystemet StarkNet er et stort og hurtigt voksende sæt af uafhængige hold og enkeltpersoner, som StarkWare ikke har noget overblik over og påtager sig intet ansvar. Enhver af de projekter, der er udviklet af økosystemmedlemmer, kan indeholde fejl, der i ekstreme tilfælde kan føre til et tab af alle dine midler. Endvidere, som mere smart kontrakter er implementeret, potentialet for utilsigtede skadelige bugs og endda ondsindede svindel og tæppe trækker stiger. Så behandl alle smarte kontrakter på StarkNet som du behandler smarte kontrakter på Ethereum, og brug kun dem, som du har god grund til at stole på som sikker.*