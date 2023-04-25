### TL;DR

* A StarkNet Bridge első verziója, a StarkGate Alpha élőben elérhető**[Testnet](https://goerli.starkgate.starknet.io/)**on és**[Mainnet](https://starkgate.starknet.io/)**en!
* Várjuk a közösség visszajelzéseit, hogy miként lehetne javítani. Visszajelzését elküldheti[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)és[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)esetében is.
* A Mainnet bevezetése hamarosan megtörténik (frissítés, 2022. május 9.: A StarkGate elérhető a Mainneten)

Izgalom! Nagy örömünkre kiadjuk a StarkGate Alpha-t, a StarkNet's Bridge első verzióját, amely már elérhető a Goerli testneten, és hamarosan a Mainnet bevezetése következik.*

\*(frissítés, 2022. május 9.: a StarkGate élőben van a Mainneten)

**Fontos felelősségkizárás: ez a StarkGate Alpha alfa verziója (olvassa el az apró betűs részt alább!).**

![](/assets/starkgate_01.png)

Mielőtt folytatná, nézze meg! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

A StarkGate átjáróként szolgál az Ethereum és a[StarkNet](https://starknet.io/)között, és lehetővé teszi a felhasználók számára, hogy mindent megtegyenek, amit egy hídtól elvárhatnak.

#### **Hol találhatok információt a StarkGate működéséről?**

A StarkGate működésének megértéséhez olvassa el a[műszaki dokumentációt](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)és vessen egy pillantást a[kódra](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Vegye figyelembe, hogy ez az első verzió, és várjuk visszajelzéseit és javaslatait[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)és[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)javítására vonatkozóan.

#### **Mely tokeneket támogatja a StarkGate?**

* A Goerli StarkGate Alpha támogatja az ETH-t és néhány más ERC-20 tokent. A teljes lista és a vonatkozó szerződési címek az Ethereumon és a StarkNeten is elérhetők ebben a[repóban](https://github.com/starkware-libs/starknet-addresses).
* A Mainneten a StarkGate Alpha kezdetben csak az ETH-t támogatja, hogy lehetővé tegye a díjmechanizmus használatát. Később hozzáadjuk a WBTC, USDC, USDT és DAI támogatását. Ebben a[repóban](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)láthatja a vonatkozó szerződési címeket.

A későbbiekben közzétesszük a további tokenek támogatásának mechanizmusát.

#### **Milyen biztonsági korlátai lesznek a StarkGate Alpha-nak a Mainnet hálózaton?**

A StarkGate Alpha a Mainneten két korlátozással indul – az Alpha verzió használatával járó kockázatok csökkentése érdekében:

1. A teljes zárolt érték (TVL) a hídban az L1-en korlátozza az egyes token típusok mennyiségét.
2. Az L1-ről L2-re (Ethereum→StarkNet) StarkGate-en keresztül küldött tranzakciók maximális összege korlátozott.

Azt tervezzük, hogy fokozatosan enyhítjük ezeket a korlátokat, és az önbizalom növekedésével teljesen feloldjuk őket. A frissített paraméterek a StarkGate[dokumentációjában](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)találhatók.

![](/assets/starkgate_02.png)

### Alfa és mit jelent

Mint mindig, emlékeztetünk arra, hogy a StarkNet jelenleg**Alpha**szakaszában van:

* A dolgok összetörhetnek. Ha katasztrofálisan meghiúsulnak, pénze elveszhet (**olvassa el az alábbi nyilatkozatot**!).
* A StarkNet Alpha és a StarkGate szerződések is frissíthetők időzár nélkül. Bár várhatóan jóval az idő előtt bejelentjük az ilyen frissítéseket, közelgő biztonsági kockázatok esetén (például ha kritikus hibát találunk), előfordulhat, hogy a frissítés csekély vagy semmilyen figyelmeztetés nélkül alkalmazható.
* A híd kódja, valamint a StarkNet Alpha egyes részei még nem auditáltak. A StarkGate Alpha ABDK és Nethermind auditja hamarosan befejeződik.

Arra bátorítunk minden felhasználót, hogy segítsen a híd fejlesztésében azáltal, hogy visszajelzést ad a következő platformok egyikén:

1. [StarkGate frontend repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate szerződések repó](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet sámánok](http://community.starknet.io/)

Kérdéseivel és fejlesztői támogatásával kapcsolatban csatlakozzon a[StarkNet diszcord szerverhez](https://discord.gg/uJ9HZTUk2Y).

### Jogi nyilatkozat

***A StarkNet Alpha egy új és összetett rendszer, amelyet még nem auditáltak teljesen. Ugyanez vonatkozik a StarkNet Bridge-re is. Mint minden összetett szoftverrendszer, a StarkNet és a híd is tartalmazhat olyan hibákat, amelyek szélsőséges esetekben az összes pénzeszköz elvesztéséhez vezethetnek. Tehát***óvatosan lépj és vigyázz!******

*A StarkNet ökoszisztéma független csapatok és egyének nagy és gyorsan növekvő halmaza, amely felett a StarkWare nem rendelkezik felügyelettel, és nem vállal felelősséget. Az ökoszisztéma tagjai által kifejlesztett projektek bármelyike tartalmazhat olyan hibákat, amelyek szélsőséges esetekben az összes pénzeszköz elvesztéséhez vezethetnek. Továbbá, ahogy egyre több intelligens szerződés kerül bevezetésre, megnő a nem szándékos kártékony hibák, sőt a rosszindulatú csalások és szőnyeglehúzások lehetősége. Tehát kezelje a StarkNet összes intelligens szerződését úgy, mint az Ethereum intelligens szerződéseit, és csak azokat használja biztonságosnak, amelyekben alapos oka van megbízni.*