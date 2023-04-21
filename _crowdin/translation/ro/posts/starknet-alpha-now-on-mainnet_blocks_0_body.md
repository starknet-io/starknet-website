### TL;DR

* Alpha este în direct pe Mainnet
* Susține calculul general și compozabilitatea
* O comunitate în creștere rapidă, dezvoltarea de instrumente și aplicații
* Caracteristici suplimentare care urmează să fie implementate în permanență în săptămânile următoare
* Notificare: aceasta este o versiune Alpha (a se citi mai jos textul fin)

### Introducere

StarkNet Alpha lansează astăzi pe Ethereum Mainnet!

StarkNet este un Rollup descentralizat fără permisiune, operând ca o rețea L2 prin Ethereum. StarkNet permite oricărui dApp să atingă o scară nelimitată pentru calculul său, fără a compromite compozabilitatea și securitatea lui Ethereum, mulțumită dependenței sale de cel mai sigur și mai scalabil sistem de dovadă criptografică —[STARK](https://starkware.co/stark/). StarkNet este construit pe limbajul de programare[Cairo](https://starkware.co/cairo/), Turing complete von-Neumann pe Ethereum. Atât Cairo cât şi STARK au fost dezvoltate în casă de StarkWare şi au alimentat toate aplicaţiile noastre de producţie. care au decontat peste 50 de milioane de tx-uri și 250 de miliarde de dolari din vara anului 2020.

Printre alte caracteristici, StarkNet Alpha permite contracte generale de calcul inteligente care susțin compozabilitatea, atât cu alte contracte StarkNet, cât și prin intermediul mesageriei L1<>L2 cu contracte L1. StarkNet Alpha operează într-un mod Rollup, ceea ce înseamnă că toate datele diff de stat sunt transmise în lanț.

În ianuarie, am împărțit planul StarkNet[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). În iunie, StarkNet Alpha a trecut în direct pe o plasă publică de teste, şi a fost actualizată cu noi caracteristici pe o bază continuă. Suntem încântaţi să ne apropiem de program, mulţumesc, parţial, dependenţei noastre de stiva de software STARK/Cairo întărită de producţie.

### Cum ar trebui să trataţi StarkNet Alpha?

În primul rând, cu mare grijă, deoarece eticheta „Alpha” există dintr-un motiv. Se așteaptă modificări, remedieri și îmbunătățiri viitoare. StarkNet Alpha nu a fost încă auditată; și putem întârzia un astfel de audit până când rețeaua ajunge la maturitate (citiți renunțarea la acest post pentru mai multe informații).

În general, urmăm calea prudentă și rațională definită de colegii noștri de la Rollup optimiști, și anume: Arbitrum și Optimism: lansarea rețelei cu un singur secvențiator și aplicații albe, pentru a se asigura că dezvoltatorii lor înțeleg riscurile implicate. Continuăm să fim pe deplin dedicaţi unei descentralizări complete a lui StarkNet.

Şi cum ar trebui să tratezi economia lui StarkNet Alpha? Alpha va porni fără taxe de tranzacție. Următoarea actualizare, doar după câteva săptămâni, va introduce un mecanism de taxare — vom partaja mai multe detalii într-un post separat.

### Începe construirea

Vă invităm să începeți să vă scrieți propriile aplicații peste StarkNet fie prin verificarea (noutății!) [website](http://starknet.io/)sau săriți direct la[tutorialul](https://starknet.io/docs/).

Dacă sunteți gata de implementare, vă rugăm să urmați acest[proces de înregistrare](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); creat pentru a se asigura că toți dezvoltatorii sunt conștienți de starea preliminară a sistemului.

### Ecosistem

În ultimele două luni, am văzut o creştere uimitoare a dimensiunii şi activităţii comunităţii StarkNet, care congregează pe[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Zeci de dezvoltatori - echipe și persoane fizice - din ecosistemul blockchain contribuie la acest efort. (Vedeți dispensa de la sfârșitul acestei postări)

#### Unelte pentru dezvoltatori

* OpenZeppelin defineşte contractele standard. [repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)și[discuțiile lor](https://github.com/OpenZeppelin/cairo-contracts/discussions)valorează următoarele
* [Urzeală](https://github.com/NethermindEth/warp)Solidity–>Cairo transpiler, dezvoltată de Nethermind
* Shard Labs’[Plugin HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)and[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent dezvoltă unelte, inclusiv efortul său comun pe StarkNet.js, alături de[Sean Han](https://twitter.com/seanjameshan), creatorul său

#### Infrastructură

**Explorator de bloc**:

* [Proiectul Voyager](http://voyager.online/)de Nethermind
* [Eth.tx](https://ethtx.info/)va oferi o analiză de suport și o vizualizare detaliată a tranzacțiilor StarkNet

**Noduri complete**: două eforturi în curs: unul este proiectul Fermion condus de Erigon, celălalt este proiectul[Pathfinder](https://github.com/eqlabs/pathfinder)condus de echilibru

**Portofele**:

* [ArgentX](https://github.com/argentlabs/argent-x)este o extensie de browser dezvoltată de Argent, deja disponibilă pentru dezvoltatori
* Soluţia de management a cheii Torus este pregătită pentru StarkNet
* Ledger dezvoltă o aplicație nativă StarkNet, care urmează să fie pusă la dispoziție înainte de sfârșitul anului

**Cairo Audits**: ConsenSys Diligence, Trail of Bits, Peckshield, și ABDK efectuează deja audituri Cairo sau sunt pe cale să înceapă în curând

**Servicii API**: după ce un nod complet StarkNet este pus la dispoziție, serviciile API vor fi oferite de Figment, Chainstack și Infura

**Indexer**: vom lucra la integrarea TheGraph pentru a lucra cu StarkNet, împreună cu echipa de Figuri

### Drumul urmează

În săptămânile și lunile următoare, vom face upgrade la Alpha cu următoarele capacități:

* Mecanismul de actualizare a contractului
* Mecanism de taxe
* Evenimente
* Adăugare de syscalls lipsă (get_block_number, get_block_timestamp, și multe altele)
* Versiunea scheletică a Volitiei
* Și mult mai mult …

Pentru a monitoriza acest efort în mod continuu, a se vedea[foaia de parcurs prudentă](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Privind mai departe, continuăm să investim masiv în cercetarea activă pe mai multe fronturi (veniți să vă alăturați efortului[Shamans](https://community.starknet.io/)):

* Descentralizare
* Scalare
* Disponibilitatea datelor
* Stimulente fără permisiuni

### Apel la acțiune

* Începe să scrii contracte pe StarkNet testnet fără permisiuni pe Goerli
* Alătură-te[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Alătură-te apelurilor comunității
* Participați la primul summit[privind ecosistemele StarkNet](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27-28 2022, Stanford CA)
* Alătură-te[StarkNet Shamans](https://community.starknet.io/)pentru o scufundare mai profundă în provocări de cercetare

### Notificare

***StarkNet Alpha este un sistem nou şi complex care nu a fost pe deplin auditat. Ca toate sistemele software complexe, sistemul StarkNet poate conţine erori care, în cazuri extreme, ar putea duce la o pierdere a tuturor fondurilor dumneavoastră. Asa ca***mergi cu atentie si poate!******

*Ecosistemul StarkNet este un set mare şi în creştere de echipe şi persoane independente, asupra căruia StarkWare nu are nicio legătură şi nu îşi asumă responsabilitate. Oricare dintre proiectele dezvoltate de membrii ecosistemului poate conţine erori care, în cazuri extreme, ar putea duce la pierderea tuturor fondurilor dumneavoastră. În plus, pe măsură ce sunt implementate mai multe contracte inteligente, crește potențialul pentru erorile dăunătoare neintenționate și chiar pentru escrocherii rău intenționate. Deci, tratați toate contractele inteligente pe StarkNet așa cum tratați contractele inteligente pe Ethereum, și folosiți doar cei pe care aveți motive întemeiate să aveți încredere în siguranță în ei.*