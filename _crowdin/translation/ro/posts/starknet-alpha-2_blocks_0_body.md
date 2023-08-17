### TL;DR

* StarkNet suportă acum compozabilitatea, principala caracteristică care defineşte faza de configurare StarkNet.
* Publicăm un cadru de testare pentru StarkNet – acum dezvoltatorii își pot testa contractele la nivel local și eficient.
* Această eliberare include mai multe îmbunătățiri notabile ale performanței, cum ar fi sprijinul pentru Merkle-Patricia Tries și un constructor pentru operațiuni bitwise (procese).
* frontul ecosistemului:

1. **Contractele standardizate**: OpenZeppelin va dezvolta contracte standardizate pentru StarkNet, așa cum au făcut pentru Ethereum!
2. **EVM->Compiler Cairo**: echipa de urzeală @ Nethermind a demonstrat compilarea codului de soliditate ERC-20 pentru contractele StarkNet

### Context

StarkNet este o Validity-Rollup descentralizată fără permisiuni (zis „ZK-Rollup”). Am anunțat[foaia sa de parcurs](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)la începutul anului. [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), rulând în prezent pe o plasă de testare publică Ethereum, acceptă deja implementarea fără permisiuni a contractelor inteligente de implementare a oricărei logici de afaceri, cu mesaje L1<>L2 și date în lanț. În plus, permite oricărui utilizator să trimită tranzacții fără permisiune, fără stil Ethereum.

Această versiune: StarkNet Alpha 2 include caracteristica centrală care ne permite să avansăm de la Planete la Constelles: compozabilitatea între contractele inteligente implementate.

### Caracteristici

StarkNet Alpha 2 introduce următoarele caracteristici:

* **Composabilitate:**StarkNet Alpha suportă acum interacțiunea dintre contractele inteligente - înainte de termen! Frumusețea acestei actualizări este că dezvoltatorii se pot aștepta la aproape aceeași experiență ca Ethereum; apelurile sunt sincronizate și pot fi utilizate ca apeluri de funcție. Aşteptăm cu nerăbdare noile aplicaţii care vor beneficia de scara computaţională nelimitată şi de compozabilitatea contractuală, aşa cum sunt dezlănţuite de StarkNet. Pentru a înțelege cum să utilizați această caracteristică, puteți începe prin a urma acest[tutorial](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Ne-ar plăcea să auzim feedback-ul tău și să vedem ce construiești pe[discord-ul StarkNet](https://discord.gg/uJ9HZTUk2Y).
* **Cadrul de testare locală:**ai întrebat și am livrat —[un cadru de testare mai bun](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Acest lucru va permite dezvoltatorilor să accelereze dezvoltarea dApp prin testarea implementărilor lor de contracte StarkNet și a interacțiunilor la nivel local — fără dependențe externe. Această versiune include doar interacțiunea L2, versiunile următoare vor extinde funcționalitatea și ușurința de utilizare. Verifică tutorialul[aici](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)şi ne-ar plăcea să auzim părerea ta despre această caracteristică.
* **Îmbunătățiri ale performanței:**

**Patricia Trees:**am îmbunătățit design-ul StarkNet-ului pentru a sprijini fluxuri mai mari și timp de generare mai scurt trecând la angajamentul statului de stat Merkle-Patricia ([documentație](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Această schimbare permite crearea unor blocuri mult mai mari, reducând astfel costurile pe tranzacție. Trecerea la un angajament mai sofisticat al statului a fost facilitată de Cairo, limba ZKP – o componentă centrală a sistemului de operare StarkNet.

**Operații Bitwise :**am adăugat un[încorporat](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)pentru a sprijini operațiuni mult mai eficiente în contracte StarkNet ([documentație](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet se mută de la Ropsten la[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! În cele din urmă, am eliberat sistemul nostru de capriciile lui Ropsten. Alpha 2 va avea acum un mediu de dezvoltare mai stabil.

### Ecosistem

Ecosistemul StarkNet este în continuă creștere și suntem bucuroși să împărtășim ultimele știri:

* **Contracte standardizate**: suntem onorați să lucrăm cu OpenZeppelin pe biblioteca de contracte standard StarkNet. Munca lor canonică cu privire la contractele standardizate ale lui Ethereum ne servește tuturor în fiecare zi și suntem încrezători că acestea vor fi la fel de afectate aici.
* **EVM->Compiler Cairo**: Echipa Warp Nethermind’s[a demonstrat](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilarea unui contract ERC-20 de la bytecode EVM la un contract StarkNet și implementarea pe StarkNet. Acest efort se mișcă rapid, iar următorul nostru obiectiv este transpilarea contractelor arbitrare inteligente, de la Yul la Cairo.
* **Maker-on-StarkNet**: o propunere[](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)a fost trimisă la Maker DAO pentru a implementa protocolul Maker prin StarkNet. Prima fază propune o punte DAI de la Ethereum la StarkNet cu monetătorie DAI pe StarkNet de urmat.
* **Servicii de audit StarkNet/Cairo**: antrenăm mai multe firme de audit să furnizeze contracte inteligente StarkNet și servicii de audit pentru programele Cairo.

### Mainnet în jurul colțului

Ne pregătim pentru lansarea StarkNet Alpha Mainnet, începând treptat cu un set de aplicaţii alb. Mai multe proiecte sunt în curs de derulare, la care se adaugă în mod mai activ ziua. Pentru a te alătura partidului, ești invitat să contactezi prin intermediul[discord](https://discord.gg/uJ9HZTUk2Y).

**Actualizare (Nov. 2021):**StarkNet Alpha este live pe Ethereum Mainnet