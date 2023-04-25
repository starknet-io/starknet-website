### TL; DR

* StarkNet ondersteun nou saamstelbaarheid, die hoofkenmerk wat StarkNet se Constellations-fase definieer.
* Ons stel 'n toetsraamwerk vir StarkNet vry - ontwikkelaars kan nou hul kontrakte plaaslik en effektief toets.
* Hierdie weergawe bevat verskeie noemenswaardige prestasieverbeterings, soos ondersteuning vir Merkle-Patricia Tries en 'n ingeboude vir bitsgewyse bewerkings.
* Ekosisteem front:

1. **Gestandaardiseerde kontrakte**: OpenZeppelin sal gestandaardiseerde kontrakte vir StarkNet ontwikkel, soos hulle vir Ethereum gedoen het!
2. **EVM->Cairo Compiler**: die Warp-span @ Nethermind het samestelling van ERC-20 Solidity-kode vir StarkNet-kontrakte gedemonstreer

### Agtergrond

StarkNet is 'n toestemminglose gedesentraliseerde Validity-Rollup (ook bekend as 'n "ZK-Rollup"). Ons het sy[padkaart](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)aan die begin van die jaar aangekondig. Die[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), wat tans op 'n publieke Ethereum-toetsnet loop, ondersteun reeds toestemminglose ontplooiing van slim kontrakte wat enige besigheidslogika implementeer, met L1<>L2-boodskappe en on-ketting data. Verder laat dit enige gebruiker toe om transaksies sonder toestemming na die netwerk te stuur, Ethereum-styl.

Hierdie vrystelling: StarkNet Alpha 2, bevat die kernkenmerk wat ons in staat stel om van planete na konstellasies te vorder: saamstelbaarheid tussen ontplooide slim kontrakte.

### Kenmerke

StarkNet Alpha 2 stel die volgende kenmerke bekend:

* **Samestelbaarheid:**StarkNet Alpha ondersteun nou interaksie tussen slim kontrakte - voor skedule! Die skoonheid van hierdie opgradering is dat ontwikkelaars byna dieselfde ervaring as Ethereum kan verwag; oproepe is sinchronies en kan as funksie-oproepe gebruik word. Ons wag gretig op die nuwe toepassings wat sal baat by beide onbeperkte berekeningskaal en kontraksamestelling, soos ontketen deur StarkNet. Om te verstaan hoe om hierdie kenmerk te gebruik, kan jy begin deur hierdie[tutoriaal](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html)te volg. Ons sal graag jou terugvoer wil hoor en sien wat jy op die[StarkNet-onenigheid bou](https://discord.gg/uJ9HZTUk2Y).
* **Plaaslike toetsraamwerk:**jy het gevra, en ons het gelewer – 'n[beter toetsraamwerk](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Dit sal ontwikkelaars in staat stel om hul dApp-ontwikkeling te bespoedig deur hul StarkNet-kontrakontplooiings en -interaksies plaaslik te toets - sonder enige eksterne afhanklikhede. Hierdie weergawe bevat slegs L2-interaksie, volgende weergawes sal die funksionaliteit en gebruiksgemak uitbrei. Gaan die tutoriaal[hier](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)na, en ons sal graag jou terugvoer oor daardie kenmerk wil hoor.
* **Prestasieverbeterings:**

**Patricia Trees:**ons het StarkNet se ontwerp verbeter om hoër deurvloei en korter bewysgenereringstyd te ondersteun deur na Merkle-Patricia Tree staatsverbintenis te beweeg ([dokumentasie](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Hierdie verandering laat die skepping van baie groter blokke toe, en verlaag dus die koste per transaksie. Die skuif na 'n meer gesofistikeerde staatsverbintenis is moontlik gemaak deur Kaïro, die ZKP-taal - 'n kernkomponent van die StarkNet-bedryfstelsel.

**Bitwise Operations:**ons het 'n[ingeboude](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)bygevoeg om baie meer doeltreffende bitsgewyse bewerkings in StarkNet-kontrakte te ondersteun ([dokumentasie](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet skuif van Ropsten na[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Uiteindelik het ons ons stelsel bevry van die grille van die Ropsten-gode. Alpha 2 sal nou oor 'n meer stabiele ontwikkelingsomgewing loop.

### Ekosisteem

Die StarkNet-ekosisteem groei voortdurend, en ons deel graag die jongste nuus:

* **Gestandaardiseerde kontrakte**: ons is geëerd om saam met OpenZeppelin aan StarkNet se standaardkontrakte-biblioteek te werk. Hul kanonieke werk op Ethereum se gestandaardiseerde kontrakte dien ons almal daagliks, en ons is vol vertroue dat hulle net so impakvol hier sal wees.
* **EVM->Cairo Compiler**: Nethermind se Warp-span[het](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilasie van 'n ERC-20-kontrak van EVM-greepkode na 'n StarkNet-kontrak gedemonstreer en op StarkNet ontplooi. Hierdie poging beweeg vinnig, en ons volgende teiken is die transpilasie van arbitrêre slim kontrakte van Yul na Kaïro.
* **Maker-op-StarkNet**: 'n[voorstel](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)is aan die Maker DAO voorgelê om die Maker-protokol oor StarkNet te implementeer. Die eerste fase stel 'n DAI-brug van Ethereum na StarkNet voor, met die slaan van DAI op StarkNet om te volg.
* **StarkNet/Cairo Ouditdienste**: ons betrek verskeie ouditfirmas om StarkNet slimkontrak- en Kaïro-programme ouditdienste te verskaf.

### Mainnet Om die Hoek

Ons maak gereed vir die StarkNet Alpha Mainnet-bekendstelling, wat geleidelik begin met 'n witlys-stel toepassings. Verskeie projekte is aan die gang en meer word aktief by die dag bygevoeg. Om by die partytjie aan te sluit, word jy uitgenooi om via[discord](https://discord.gg/uJ9HZTUk2Y)uit te reik.

**Opdatering (Nov. 2021):**StarkNet Alpha is regstreeks op Ethereum Mainnet