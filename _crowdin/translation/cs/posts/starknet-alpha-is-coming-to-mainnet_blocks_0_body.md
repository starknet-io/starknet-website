### TL;DR

* *StarkNet Alpha se spustí na Mainnet Ethereum do listopadu*
* Čas stavět na StarkNet je

### Stručná historie

Na začátku roku jsme vyhlásili naši vizi pro[StarkNet](https://starkware.co/product/starknet/): zajistit masivní škálovatelnost do Ethereum při zachování bezpečnosti L1, nepřípustných interakcí a decentralizace.\
V červnu jsme uvolnili**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**na veřejném testnetu. Tato verze plně podporovala všeobecné výpočetní chytré smlouvy bez povolení. Od aktualizace jsme ji dvakrát aktualizovali: nejprve na**Alpha 1**— poskytujeme[L1<>L2 zprávy a on-chain data](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), a poté do**Alpha 2**– podpora[skladovatelnosti](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 nyní podporuje komposable smart contracts of general computing in the Ethereum-like state se schopností smluv typu L1 a L2 vzájemně komunikovat. Více informací[naleznete zde](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Co je to StarkNet Alpha na Mainnet?

StarkNet Alpha na Mainnet bude podporovat podobné funkce, jaké jsou v současné době dostupné na veřejném testnetu Goerli.

#### **Co čekat**

Protože je StarkNet stále ve vývoji, chceme postupně zavádět možnosti a zajistit, aby byla očekávání vývojáře splněna v každém jednotlivém kroku. Chtěli bychom zdůraznit dva zvlášť důležité aspekty:

* **Povolené chytré smluvní nasazení**: Budeme se řídit citlivým přehrávačem zavedeným našimi kolegy z Optimistického Rollupu: začněte*oprávněným*smluvním nasazením. Protokol určující, jak požádat o zahrnutí vaší chytré smlouvy do tohoto počátečního seznamu povolených bude zveřejněn v nadcházejících týdnech.
* **Žádná záruka za zpětnou kompatibilitu**: očekáváme budoucí přechod od StarkNet Alpha k StarkNet Beta na regenesis státu. Síť začne od bloku 0 a aplikace budou muset přebudovat své smlouvy. Kromě toho by vývojáři a uživatelé měli vzít na vědomí, že očekávaná beta StarkNet nemusí být zpětně kompatibilní se StarkNet Alpha, e. . vývojáři možná budou muset změnit své zakázky. Samozřejmě se pokusíme umožnit snadný přechod pro aplikace s minimálními požadovanými změnami.

#### Další blízké funkce

Jako součást přechodu Alfa StarkNet z testnet na Mainnet bude:

1. Přidat konstruktory ke smlouvám.
2. Zlepšete zkušební rámec.
3. Pro bloky a transakce přejděte od použití ID k použití hash.

Plánujeme pokračovat v rozmístění nových funkcí v pravidelném kadenci, stejně jako jsme to udělali na veřejné testnet. V blízké době plánujeme následující vylepšení:

1. Smlouvy o účtu a smlouvy o tokenu – otevírají cestu pro aplikace DeFi k interakci se StarkNet, jak jsou známy.
2. Vylepšená funkčnost smlouvy – podpora aktualizovatelnosti smluv a akcí.
3. Warp: kompilátor Solidity-to-Káhira vyvinutý s vědomím umožní hladký přechod od inteligentních smluv Solidity k inteligentním smlouvám StarkNet.
4. Ethereum Signatures: nativní podpora ECDSA nad secp256k1 umožní snadnější integraci se stávajícími peněženkami.
5. StarkNet Full Node: Celý uzel umožní uživatelům podílet se na síti s požadavky na hardware na stejné úrovni jako Ethereum Full Node.

#### Mechanismus poplatků

Mechanismus poplatků bude zapnut, jakmile budou do StarkNet Alpha přidány smlouvy na účet a žetony.

U všech transakcí odeslaných StarkNet vznikne poplatek určený k pokrytí nákladů na L1 a mimo řetězec. Poplatek bude původně účtován v ETH. Náklady na jednu transakci se sníží, protože StarkNet zvyšuje její rozsah (jak je tomu v případě všech stávajících systémů založených na STARKu). Při vytváření mechanismů počátečního poplatku upřednostňujeme jednoduchost před přesným oceňováním transakcí podle zdrojů, které spotřebovávají. Očekávejte, že tento mechanismus bude v průběhu času zdokonalen a vylepšen.

Se zřetelem k vytvoření udržitelné sítě StarkNet a motivaci jejích operátorů a vývojářů, Část příjmů vybraných z poplatků bude rozdělena mezi vývojáře aplikací a hlavní vývojáře StarkNet.

#### Zabezpečení

Třímístný bezpečnostní model StarkNet na Mainnet bude následovat současného modelu testnetu:

* Každý přechod státu je podporován důkazem STARK, a tak je zajištěno, že bude platný.
* Všechny údaje o stavu budou zveřejněny on-line, takže stav bude od L1 plně konstruktivní.
* Bude existovat jediná posloupnost.
* Síť bude aktualizovatelná bez časového zpoždění.

### Ekosystém StarkNet roste

Otevření StarkNet světu přilákalo obrovskou vlnu vývojářů, kteří mají zájem učit se Káhiře a rozvíjet se nad StarkNet. Poskytli neocenitelnou zpětnou vazbu a bylo skutečně potěšením vidět živé diskuse na StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

StarkNet je navíc vyvíjen nejen týmem StarkWare, ale i některými nejsilnějšími týmy v ekosystému blockchainu:

* nemysl pracuje na dvou projektech:

1. **[Warp](https://github.com/NethermindEth/warp)**: Solidita kompilátoru Káhira

2. **[Voyager](https://voyager.online/)**: Průzkumník bloků StarkNet

* Open Zeppelin pracuje na[Standardní smlouvě](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)implementaci StarkNet a také začal pracovat na prostředí vývojáře:[Nile](https://github.com/martriay/nile).
* ShardLabs pracuje na[StarkNet HardHat pluginu](https://github.com/Shard-Labs/starknet-hardhat-plugin)a na lepším testovacím rámci.
* Tým Erigona pracuje na rozšíření svého Ethereum Full Node na podporu StarkNet (kód: Fermion). Pracují s námi na navrhování klíčových mechanismů StarkNet.
* Equilibrium pracuje na implementaci StarkNet Full Node v Rustu,
* Audity v Káhiře: V nadcházejících měsících budou provádět audity v Káhiře ABDK, ConsenSys Diligence, Peckshield a Trail of Bits.
* StarkNet audity: Začali jsme s auditem základů sítě:

1. **Kryptoměničové odborníky**budou provádět audit Káhiry ověřovatele solidarity.
2. Formální**důkaz LEAN**o specifikacích Káhira byl nedávno dokončen a zveřejněn jako[papír](https://arxiv.org/abs/2109.14534)a GitHub[repo](https://github.com/starkware-libs/formal-proofs).

Očekávejte mnohem více zajímavých spolupráce, které budou publikovány v nadcházejících měsících!

### Škálování STARKů dnes

S důvěrou přistupujeme ke spuštění Alfa StarkNet jako StarkEx, náš samostatný scaling SaaS, ukázal, jak STARKs dokáže masivně rozšířit aplikace Ethereum. Začali jsme StarkEx pro[dYdX](https://dydx.exchange/)(trvalé smlouvy),[DeversiFi](https://www.deversifi.com/)(okamžité obchodování a platby), stejně jako pro[Nezaměnitelné](https://www.immutable.com/)a[Omlouváme se](https://sorare.com/)(NFT těžba a obchodování). Viděli jsme, jak se jejich náklady na plyn/tx snížily o 100X–200X, na přibližně 650 plyn/tx v Validiu (údaje mimo řetězec) a 1100 plyn/tx pro ZK-Rollup.

StarkEx k dnešnímu dni vypořádal 80B v obchodech a přes 27M transakcí, což značně narušilo jakékoli jiné řešení L2 – a všechny dohromady.

### Jednejte nyní

Nikdy nebyl lepší čas připojit se k rostoucímu ekosystému StarkNet vytvořením dalšího dApp nebo užitečných vývojářských nástrojů.

Zveme Vás, aby:

1. Připojte se k[StarkNet Discordu](https://discord.gg/uJ9HZTUk2Y), kde se můžete setkat a zapojit do komunity StarkNet.
2. [Začněte se učit](https://www.cairo-lang.org/docs/hello_starknet/index.html)jak psát chytré kontrakty StarkNet.
3. [DM nás](https://twitter.com/StarkWareLtd)— náš tým touží pomoci vašim nápadům a iniciativám nastoupit do života.

**Aktualizace (Nov. 2021):**StarkNet Alpha je živá na Ethereum Mainnet