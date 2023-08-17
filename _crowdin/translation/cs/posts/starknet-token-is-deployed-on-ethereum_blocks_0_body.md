### TL;DR

* StarkNet Token (STRK) je nyní nasazen na Ethereum Mainnet
* **Pozor na podvádění!**StarkNet tokeny nejsou nabízeny k prodeji
* Nadaci bude trvat čas, než určí mechanismus rozdělování jejích žetonů
* Tokeny držené akcionáři společnosti StarkWare a zaměstnanci a nezávislými partnerskými vývojáři softwaru jsou na dobu čtyř let uzamčeny, s postupným uvolňováním začínajícím po jednom roce
* Token bude dále decentralizovat StarkNet, díky jeho použití k hlasování, sázení a úhradě poplatků

[StarkNet](https://starknet.io/)dnes činí další krok směrem k decentralizaci. StarkNet token je nyní[na Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Rychle se zotavuje: STRK se bude používat jako žeton pro účast na konsensuálních mechanismech StarkNetu jako žetonu řízení a pro úhradu transakčních poplatků. Důvody pro každý z těchto veřejných služeb jsou uvedeny v[našem návrhu na decentralizaci](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), v oddíle s názvem „Pro co budou tokeny použity?“

***Pozor na podvody:**v době psaní není žádný způsob, jak koupit tokNet ; toto období bez prodeje zůstane v platnosti až do dalšího oznámení nadací[StarkNet Foundation](https://twitter.com/StarkNetFndn); sledovat oficiální komunikaci od nadace StarkNet a naučit se o všech aktualizacích stavu STRK. Můžeš nahlásit podvody a zkontrolovat další hlášení podvodů v kanálu[scam-report](https://discord.gg/qypnmzkhbc)na serveru[StarkNet Discord](http://starknet.io/discord).*

Tento post vysvětluje proces alokace tokenů a způsob, jakým rozmístěné žetonové smlouvy slouží dvěma ze tří navržených nástrojů tokenu, konkrétně hlasováním a sázením. Třetí nástroj – placení poplatků StarkNet – bude projednán později.

### Plánování procesu přidělování tokenů

Dříve jsme navrhli[plán](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)pro počáteční přidělení tokenů. Tokeny přidělené akcionářům, zaměstnancům a nezávislým vývojářům softwaru jsou uzamčeny na čtyři roky, přičemž harmonogram postupného uvolňování začíná po uplynutí jednoho roku. Uzamčené tokeny lze použít pro hlasování a sázení, ale nelze je převádět ani obchodovat. Některé z tokenů jsou uzamčeny prostřednictvím specializované chytré smlouvy na Ethereum, zatímco jiné tokeny jsou uzamčeny prostřednictvím uschovatelů.

Samozřejmě, 50.1% stávajících tokenů StarkNet je přiděleno nadaci StarkNet, která má být použita ke splnění jejích[cílů](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(srov.[StarkWare's post](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Tyto tokeny nejsou uzamčeny. Nadace však bude potřebovat čas na formulování přesného mechanismu k dalšímu přidělení těchto žetonů a své plány bude včas sdílet.

#### Proč se zamknout?

Uzamykání žetonů na výše uvedené období zajišťuje, že stávající přispěvatelé budou v souladu s dlouhodobými pobídkami StarkNet. Kromě toho odrazuje spekulace nad symbolickým symbolem před rozsáhlým využíváním pro své zamýšlené účely: zajištěním sítě, platbou poplatků a decentralizací řízení.

Dále vysvětlujeme, jak implementace tokenu podporuje hlasování a sázení.

### Hlasování

Nadace bude pověřena usnadněním řádné správy věcí veřejných a tvorbou hlasovacích mechanismů. StarkNet Token byl navržen tak, aby umožňoval přímé hlasování i řadu delegačních mechanismů.

#### L1 hlasování

Zavedená implementace ERC-20 nyní zahrnuje**volitelné**využití delegačního modulu Compound’s[](https://docs.compound.finance/v2/governance/). Tento modul se široce používá pro on-line hlasování. Důvodem, proč je to volitelné na StarkNet, a v případě platební neschopnosti, je uvažování o nákladech. Zapnutí znamená, že každý převod tokenů StarkNet na L1 vyžaduje další plyn potřebný výhradně pro účely sledování posunů hlasovací síly.

#### Non-L1 voting

Alternativy k L1 on-chain hlasování s modulem delegace Compoundu zahrnují mimo řetězové hlasování, stejně jako on-chain Hlasovací systémy založené na StarkNetu (např.[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Tyto alternativy, které významně snižují spotřebu plynu u přenosů L1, nevyžadují výslovnou podporu ze strany kódu ERC-20, který se v současné době používá, a jsou tudíž ze své podstaty podporovány.

Jak bylo uvedeno výše, všechny tokeny – uzamčené a odemčené – budou použitelné v hlasovacím mechanismu StarkNet.

### Pečení

Bezpřípustná a cenzurovatelná operace StarkNetu vyžaduje náhodný výběr posloupností. Pravděpodobnost, že uzel bude vybrán pro sekvenci a navržení bloku, je úměrná počtu tokenů StarkNet, které uzel se sází. Důvody pro používání tokenů StarkNet (spíše než například Ethereum nebo Bitcoin) jsou vysvětleny v[návrhu řízení](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778). a přesné údaje o vsázce, sekvenování a vytváření bloků na StarkNet probíhají[diskuse komunity](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671)a teprve mají být dokončeny.

Stejně jako v případě hlasování mohou být žetony použity k sázení i v případě, že jsou zamčeny. To přispívá k rozmanitosti operátorů StarkNet a k odolnosti StarkNet.

### Summary

Zavedení smluv StarkNet Token o Ethereu je dalším krokem v decentralizaci StarkNet.

Naléhavě vyzýváme vývojáře a uživatele, aby se měli na pozoru před podvody! V době zveřejnění nejsou obchodovatelné žádné tokeny a tento status neobchodu zůstane v platnosti až do dalšího oznámení nadací StarkNet.

Pro více otázek můžeš přejít na[tokenové diskuze](https://discord.gg/qypnmzkhbc)kanál[StarkNet Discord](http://starknet.io/discord).