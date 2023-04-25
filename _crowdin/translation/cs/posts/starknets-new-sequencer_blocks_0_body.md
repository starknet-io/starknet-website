### TL;DR

* Vyvíjí se nový StarkNet sekvencer
* Je open-source pod licencí Apache 2.0
* Je to první cíl zvýšit průchod StarkNetu

### Lesklý nový sekvencer

Rádi oznamujeme nový StarkNet Sequencer je v práci. Jak se technologie StarkNetu posouvá směrem k otevřenému zdroji, sleduje[Káhira 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)a[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), nyní pokračujeme novou sekvencí StarkNet. Bude otevřený zdroj, dostupný pod licencí Apache 2.0 a můžete se podívat na[repozitář](https://github.com/starkware-libs/blockifier)nyní!

Budování nového Sequencer je součástí plánu[StarkNet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), který jsme předložili před několika měsíci. Realizace nového sekvenceru začne nahrazením**Blockifier**, modulu v posloupnosti, který provádí spuštění bloku. Jak je vysvětleno v plánu, očekává se, že přinese výhody pro výkon StarkNet.

Náš přístup k budování této posloupnosti je stejný přístup, který nás řídil ve StarkNet Alpha. Sdílení**bude implementováno ve fázích**a my dnes sdílíme jeho první modul. Postupem času budou dokončeny nové složky sekvencéru, dokud současný sekvencer založený na Pythonu zcela nenahradí.

### Co dělá?

Na StarkNet, poté, co uživatelé posílají transakce, je první zastávka na cestě STARK škálování posloupností. V protokolu StarkNet jsou posloupníci odpovědní za objednávání transakcí a vytváření bloků. Po vytvoření bloku po sobě jdoucího a schváleném konsensuálním protokolem, převezmou ověřovatelé a předloží důkaz pro L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Open-Sourcing

StarkNet Alpha spustil v listopadu 2021 na Mainnet. Od samého počátku byl odhodlán sdílet sílu STARK skalování se světem.

Dnes uvolňujeme první v řadě modulů nového účastníka s otevřeným zdrojovým kódem. Bude trvat několik měsíců, než budou zavedeny všechny moduly a podmoduly. Open sourcing vše umožní členům komunity přispět k vývoji a prověřit kódovou základnu.

To bude pohraničit StarkNet blíže k bodu decentralizovaného bezpřípustného pořadí. Nyní navrhujeme decentralizovaný protokol StarkNetu a povzbuzujeme komunitu, aby se účastnila[výzkumu a diskuse](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Výkon

Původní následník StarkNetu je do značné míry adaptací infrastruktury StarkEx. Nyní existuje potřeba infrastruktury, která je vybudována zejména pro požadavky decentralizované vysoce výkonné sítě.

Nově postavený v Rustu je navržen a vyvinut s ohledem na výkon. Nový sekvencer také vychází z pevných základů: Papyrus, nového[úplného uzlu StarkNet,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)bude řídit státní řízení a kairo-rs, nová Kairo-VM LambdaClass, urychlí vykonání Káhiry. Očekáváme, že nová posloupnost zlepší v každém ohledu stávající posloupnost. Očekává se, že průchod a latence sítě se dramaticky zlepší integrací této posloupnosti do StarkNet.

Očekáváme také, že další nástroje infrastruktury a rozvoje budou schopny využít nové posloupnosti ke zlepšení rozvojových zkušeností. Očekává se, že se zlepší výkonnost celého uzlu a také všechny testovací rámce.

### Summary

Jsme rádi, že dnes oznamujeme novou sekvenci s otevřeným zdrojem. Jeho první modul je již k dispozici pro komunitu a bude následovat další moduly v následujících měsících. S radostí také učiníme další krok v našem plánu na zlepšení výkonu StarkNet. Naším cílem je zefektivnit a zpřístupnit síť a oceňujeme podporu každého, kdo se k nám na této cestě připojil.