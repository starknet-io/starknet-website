### TL;DR

* De eerste versie van StarkNet Bridge, StarkGate Alpha, is live op**[Testnet](https://goerli.starkgate.starknet.io/)**, en op**[Mainnet](https://starkgate.starknet.io/)**!
* We wachten op feedback van de gemeenschap over hoe dingen kunnen worden verbeterd. U kunt uw feedback sturen voor zowel[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)als[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Mainnet deployment zal binnenkort volgen (update, 9 mei 2022: StarkGate is live op Mainnet)

Opwinding! We zijn blij om StarkGate Alpha, de eerste versie van StarkNet's Bridge, nu live op Goerli testnet, vrij te geven, met Mainnet deployment die binnenkort zal volgen.*

\*(update, 9 mei 2022: StarkGate is live op Mainnet)

**Belangrijke disclaimer: dit is een alpha versie van StarkGate Alpha (lees de kleine lettertjes hieronder!).**

![](/assets/starkgate_01.png)

Voordat je doorgaat, check it out! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate dient als een gateway tussen Ethereum en[StarkNet](https://starknet.io/), en laat gebruikers alles doen wat ze kunnen verwachten van een bridge.

#### **Waar vind ik informatie over hoe StarkGate werkt?**

Om te begrijpen hoe StarkGate werkt, lees de[technische documentatie](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)en neem een kijkje op de[code](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Merk op dat dit de eerste versie is, en we nodigen je feedback en suggesties uit over hoe je zowel[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)als[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx) kunt verbeteren.

#### **Welke tokens worden ondersteund door StarkGat?**

* StarkGate Alpha op Goerli ondersteunt ETH en een paar andere ERC-20 tokens. De volledige lijst en de relevante contractadressen, zowel op Ethereum als StarkNet, zijn beschikbaar in deze[repo](https://github.com/starkware-libs/starknet-addresses).
* In Mainnet zal StarkGate Alpha in eerste instantie alleen ETH ondersteunen om gebruik te maken van het vergoedingenmechanisme. Later zullen we ondersteuning voor WBTC, USDC, USDT en DAI toevoegen. Je kunt de relevante adressen van het contract zien in deze[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Verderop zullen we het mechanisme voor het toevoegen van extra tokens publiceren.

#### **Welke veiligheidsbeperkingen zullen de Alpha van StarkGate op Mainnet hebben?**

StarkGate Alpha op Mainnet wordt gelanceerd met twee beperkingen - om de risico's te beperken die verbonden zijn aan het gebruik van een Alpha versie:

1. De totale vergrendelde waarde (TVL) in de bridge op L1 zal het aantal van elk tokentype beperken.
2. Het maximale bedrag in elke transactie verzonden van L1 naar L2 (Ethereum→StarkNet) via StarkGate zal beperkt zijn.

Wij zijn van plan deze beperkingen geleidelijk op te heffen en op te heffen naarmate het vertrouwen toeneemt. De bijgewerkte parameters zijn te vinden in StarkGate's[documentatie](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa en wat het betekend

Zoals altijd herinneren we je eraan dat StarkNet momenteel in zijn**Alfa**fase is:

* Dingen kunnen breken. Als ze rampzalig falen, zou je geld verloren kunnen gaan (**lees de disclaimer hieronder**!).
* Zowel de StarkNet Alpha als StarkGate contracten kunnen worden geupgraded zonder tijdlijn. Hoewel we verwachten deze verbeteringen ruim op tijd aan te kondigen, bijvoorbeeld als het gaat om dreigende veiligheidsrisico's. als een kritieke bug is gevonden), kan de upgrade worden toegepast met weinig of geen waarschuwing.
* De code van de bridge en delen van StarkNet Alpha, zijn nog niet gecontroleerd. De ABDK en Nederland audits van StarkGate Alpha zullen binnenkort worden voltooid.

We moedigen alle gebruikers aan om te helpen de brug te verbeteren door hun feedback te geven via een van de volgende platforms:

1. [StarkGate frontend repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Contracts repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

Voor vragen en dev ondersteuning, meld je aan op de[StarkNet discord server](https://discord.gg/uJ9HZTUk2Y).

### Disclaimer

***StarkNet Alpha is een nieuw en complex systeem dat niet volledig is gecontroleerd. Hetzelfde geldt voor de StarkNet-brudge. Net als alle complexe softwaresystemen kunnen zowel StarkNet als de bridge bugs bevatten, dat kan ook via de bridge bugs gebeuren. in het uiterste geval zou het kunnen leiden tot verlies van al uw geld. Dus,***trad voorzichtig en pas op!******

*Het StarkNet ecosysteem is een groot en snel groeiend geheel van onafhankelijke teams en individuen, waarop StarkWare geen toezicht heeft en geen verantwoordelijkheid neemt. Elk van de projecten die door leden van het ecosysteem worden ontwikkeld kan bugs bevatten die in extreme gevallen kunnen leiden tot een verlies van al uw geld. Bovendien neemt het potentieel voor onbedoelde schadelijke bugs en zelfs kwaadwillende zwendel en tapijt toe, naarmate er meer slimme contracten worden gebruikt. Behandel dus alle smart contracts op StarkNet terwijl je smart contracts op Ethereum behandelt, en gebruik alleen degenen die u met recht en reden als veilig kunt vertrouwen.*