### TL;DR

* Den första versionen av StarkNet Bridge, StarkGate Alpha, är live på**[Testnet](https://goerli.starkgate.starknet.io/)**och**[Mainnet](https://starkgate.starknet.io/)**!
* Vi väntar på feedback från samhället om hur saker och ting kan förbättras. Du kan skicka din feedback för både[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)och[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Mainnet utbyggnaden kommer att följa snart (uppdatering, 9 maj 2022: StarkGate är live på Mainnet)

Spänning! Vi är glada att släppa StarkGate Alpha, den första versionen av StarkNet Bridge, nu lever på Goerli testnet, med Mainnet utbyggnad att följa snart.*

\*(uppdatering, 9 maj 2022: StarkGate lever på Mainnet)

**Viktig ansvarsfriskrivning: detta är en alfaversion på StarkGate Alpha (läs det finstilta nedan!).**

![](/assets/starkgate_01.png)

Innan du fortsätter, gå och kolla in det! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate fungerar som en inkörsport mellan Ethereum och[StarkNet](https://starknet.io/), och tillåter användare att göra allt de kan förvänta sig av en bro.

#### **Var hittar jag information om hur StarkGate fungerar?**

För att förstå hur StarkGate fungerar, läs[teknisk dokumentation](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)och ta en titt på[koden](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Observera att detta är den första versionen, och vi bjuder in dina synpunkter och förslag på hur du kan förbättra både[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)och[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Vilka tokens stöds av StarkGate?**

* StarkGate Alpha på Goerli stöder ETH och några andra ERC-20 tokens. Den fullständiga listan och relevanta kontraktsadresser, både på Ethereum och StarkNet, finns tillgängliga i denna[repo](https://github.com/starkware-libs/starknet-addresses).
* På Mainnet kommer till en början StarkGate Alpha bara att stödja ETH för att tillåta användning av avgiftsmekanismen. Senare kommer vi att lägga till stöd för WBTC, USDC, USDC, USDT och DAI. Du kan se relevanta kontraktsadresser i denna[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Längre fram kommer vi att offentliggöra mekanismen för att lägga till stöd för ytterligare polletter.

#### **Vilka säkerhetsbegränsningar kommer StarkGate Alpha ha på Mainnet?**

StarkGate Alpha på Mainnet lanseras med två begränsningar — för att minska riskerna med att använda en Alpha-version:

1. Det totala värdet låst (TVL) i bron på L1 kommer att begränsa mängden av varje token typ.
2. Det maximala beloppet i varje transaktion som skickas från L1 till L2 (Ethereum≥ StarkNet) via StarkGate kommer att vara begränsat.

Vi planerar att gradvis lindra dessa begränsningar och lyfta dem helt och hållet allteftersom förtroendet ökar. De uppdaterade parametrarna finns i StarkGates[dokumentation](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alpha och vad det innebär

Som alltid påminner vi dig om att StarkNet för närvarande är i sin**Alpha**stadium:

* Saker och ting kan bryta. Om de misslyckas katastrofalt kan dina pengar gå förlorade (**läs ansvarsfriskrivningen nedan**!).
* Både StarkNet Alpha och StarkGate kontrakt kan uppgraderas utan tidtagning. Samtidigt som vi förväntar oss att tillkännage sådana uppgraderingar i god tid, i händelse av överhängande säkerhetsrisker (till exempel, om ett kritiskt fel hittas), kan uppgraderingen tillämpas med lite eller ingen varning.
* Koden för bron, liksom delar av StarkNet Alpha, har ännu inte granskats. ABDK och Nethermind revisioner av StarkGate Alpha kommer att slutföras snart.

Vi uppmuntrar alla användare att hjälpa till att förbättra bron genom att ge feedback med hjälp av någon av följande plattformar:

1. [StarkGate frontend repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Kontrakt repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

För frågor och dev-support, gå med i[StarkNet discord-servern](https://discord.gg/uJ9HZTUk2Y).

### Ansvarsfriskrivning

***StarkNet Alpha är ett nytt och komplext system som inte har granskats fullt ut. Samma sak gäller för StarkNet Bridge. Liksom alla komplexa mjukvarusystem kan både StarkNet och bron innehålla buggar som, i extrema fall, kan leda till en förlust av alla dina pengar. Så,***trampa försiktigt och akta dig!******

*StarkNet ekosystem är en stor och snabbt växande uppsättning oberoende team och individer, över vilka StarkWare inte har någon tillsyn och tar inget ansvar. Någon av de projekt som utvecklats av ekosystemmedlemmar kan innehålla buggar som i extrema fall kan leda till en förlust av alla dina medel. Dessutom, eftersom fler smarta kontrakt används, ökar potentialen för oavsiktliga skadliga buggar och även skadliga bedrägerier och mattavdrag. Så, behandla alla smarta kontrakt på StarkNet som du behandlar smarta kontrakt på Ethereum, och använd bara de som du har goda skäl att lita på som säkra.*