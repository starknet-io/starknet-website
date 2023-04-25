### TL; DR

* Die eerste weergawe van StarkNet Bridge, StarkGate Alpha, is regstreeks op**[Testnet](https://goerli.starkgate.starknet.io/)**, en op**[Mainnet](https://starkgate.starknet.io/)**!
* Ons wag op gemeenskapterugvoer oor hoe dinge verbeter kan word. Jy kan jou terugvoer vir beide[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)en[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)stuur.
* Mainnet-ontplooiing sal binnekort volg (opdatering, 9 Mei 2022: StarkGate is regstreeks op Mainnet)

Opwinding! Ons is verheug om StarkGate Alpha, die eerste weergawe van StarkNet's Bridge, nou regstreeks op Goerli-toetsnet vry te stel, met Mainnet-ontplooiing wat binnekort volg.*

\*(opdatering, 9 Mei 2022: StarkGate is regstreeks op Mainnet)

**Belangrike vrywaring: dit is 'n alfa-weergawe op StarkGate Alpha (lees die fynskrif hieronder!).**

![](/assets/starkgate_01.png)

Voordat jy voortgaan, gaan kyk daarna! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate dien as 'n poort tussen Ethereum en[StarkNet](https://starknet.io/), en laat gebruikers toe om alles te doen wat hulle van 'n brug kan verwag.

#### **Waar kan ek inligting kry oor hoe StarkGate werk?**

Om te verstaan hoe StarkGate werk, lees die[tegniese dokumentasie](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)en kyk na die[kode](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Let daarop dat dit die eerste weergawe is, en ons nooi jou terugvoer en voorstelle oor hoe om beide[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)en[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)te verbeter.

#### **Watter tokens sal deur StarkGate ondersteun word?**

* StarkGate Alpha op Goerli ondersteun ETH en 'n paar ander ERC-20-tokens. Die volledige lys en die relevante kontrakadresse, beide op Ethereum en StarkNet, is beskikbaar in hierdie[repo](https://github.com/starkware-libs/starknet-addresses).
* Op Mainnet sal StarkGate Alpha aanvanklik slegs ETH ondersteun om die gebruik van die fooimeganisme toe te laat. Later sal ons ondersteuning vir WBTC, USDC, USDT en DAI byvoeg. U kan die relevante kontrakadresse in hierdie[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)sien.

Verder op die pad sal ons die meganisme publiseer om ondersteuning vir bykomende tekens by te voeg.

#### **Watter veiligheidsbeperkings sal StarkGate Alpha op Mainnet hê?**

StarkGate Alpha op Mainnet word met twee beperkings bekendgestel - om die risiko's verbonde aan die gebruik van 'n Alpha-weergawe te verminder:

1. Die totale waarde gesluit (TVL) in die brug op L1 sal die hoeveelheid van elke tekentipe beperk.
2. Die maksimum bedrag in elke transaksie wat vanaf L1 na L2 (Ethereum→StarkNet) via StarkGate gestuur word, sal beperk word.

Ons beplan om hierdie beperkings geleidelik te verlig en heeltemal op te hef namate selfvertroue groei. Die opgedateerde parameters kan gevind word in StarkGate se[dokumentasie](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa en wat dit beteken

Soos altyd, herinner ons jou daaraan dat StarkNet tans in sy**Alpha**stadium is:

* Dinge kan breek. As hulle katastrofies misluk, kan u fondse verlore gaan (**lees die vrywaring hieronder**!).
* Beide StarkNet Alpha- en StarkGate-kontrakte kan sonder 'n tydslot opgegradeer word. Alhoewel ons verwag om sulke opgraderings vroegtydig aan te kondig, in die geval van dreigende sekuriteitsrisiko's (byvoorbeeld, as 'n kritieke fout gevind word), kan die opgradering met min of geen waarskuwing toegepas word.
* Die kode van die brug, sowel as gedeeltes van StarkNet Alpha, is nog nie geoudit nie. Die ABDK en Nethermind oudits van StarkGate Alpha sal binnekort voltooi word.

Ons moedig alle gebruikers aan om te help om die brug te verbeter deur hul terugvoer te verskaf deur een van die volgende platforms te gebruik:

1. [StarkGate frontend repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Kontrakte repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet-sjamane](http://community.starknet.io/)

Vir vrae en ontwikkelingsondersteuning, sluit aan by die[StarkNet-discord-bediener](https://discord.gg/uJ9HZTUk2Y).

### Vrywaring

***StarkNet Alpha is 'n nuwe en komplekse stelsel wat nie ten volle geoudit is nie. Dieselfde geld vir die StarkNet-brug. Soos alle komplekse sagtewarestelsels, kan beide StarkNet en die brug foute bevat wat, in uiterste gevalle, kan lei tot 'n verlies van al jou fondse. So,***trap versigtig en pasop!******

*Die StarkNet-ekosisteem is 'n groot en vinnig groeiende stel onafhanklike spanne en individue, waaroor StarkWare geen toesig het nie en geen verantwoordelikheid aanvaar nie. Enige een van die projekte wat deur ekosisteemlede ontwikkel is, kan foute bevat wat in uiterste gevalle tot 'n verlies van al jou fondse kan lei. Verder, namate meer slim kontrakte ontplooi word, neem die potensiaal vir onbedoelde skadelike foute en selfs kwaadwillige swendelary en rugtrekkings toe. Behandel dus alle slim kontrakte op StarkNet soos jy slim kontrakte op Ethereum behandel, en gebruik slegs dié wat jy goeie rede het om as veilig te vertrou.*