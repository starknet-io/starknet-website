### TL;DR

* decentralizace StarkNetu zahrnuje nativní žeton a nový základ.
* Token StarkNet se používá k řízení a k úhradě a tvorbě aktiv sítě.
* Bylo vytěženo deset miliard žetonů a jejich alokace začala.
* StarkNet nadace, která je nyní zřízena, bude mít misi udržovat StarkNet jako veřejný statek.

StarkNet je nepovolená decentralizovaná vrstva 2 (L2) validní rollup, vytvořená tak, aby Ethereum umožňovala škálovat pomocí kryptografických protokolů zvaných STARK, aniž by došlo k ohrožení základních zásad decentralizace, transparentnosti, inkluzivity a bezpečnosti.

Alfa StarkNetu spustila v listopadu 2021 na Mainnet. V ekosystému se utvářejí méně než rok a na něm pracují desítky týmů po celém světě. Nyní nastal čas pokročit v decentralizaci sítě, aby dosáhla živobytí, cenzurní odpor, transparentnost a inkluzivita vyžadovaná od L2 na Ethereu.

Decentralizace znamená, že provoz a evoluce sítě se nebude spoléhat na žádnou jednotlivou entitu, včetně StarkWare. Nepřípustný předvolební mechanismus lídra v sázce a on-chain platba transakčních poplatků, obojí pomocí nativního žetonu, umožní spolehlivý provoz sítě s L2 na Ethereu, i když StarkWare přestane existovat. Rozhodnutí týkající se pokračující údržby společnosti StarkNet přejde od společnosti StarkWare k komunitě. Klíčovými prvky tohoto úsilí bude StarkNet Token a nadace.

Tento příspěvek, první ze tří zveřejněných současně, zatím shrnuje cestu StarkNetu a zavádí StarkNet Token a StarkNet Foundation. [Další příspěvek](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)diskutuje o modelu řízení StarkNet a[třetí](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)se zaměřuje na model symbolů StarkNet.

*Děkujeme následujícím stoupencům StarkNet (v abecedním pořadí) za jejich komentáře k návrhu těchto postů: Guily_Gioza (Topology), Itamar Lesuisse (Argent), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) a Tomasz Stan<unk> czak (Nethermin).*

### Dosud tento příběh

[StarkNet](https://starknet.io/)je postaven z kryptografie a otevřeného ekosystému. **Kryptografie**je**[STARKů](https://eprint.iacr.org/2018/046.pdf)**. Jedná se o protokoly založené na matematice stupnice Ethereum podle řádů velikosti. Nevyžadují žádné důvěryhodné nastavení, jsou bezpečné po kvantu a lze je rychle použít v libovolném měřítku. Ekosystém se skládá z hlavních vývojářů, kteří po léta chtěli vybudovat infrastrukturu a nástroje pro škálování technologie blockchainu, stejně jako nové a kreativní oblasti aplikací, které jsou možné, když se rozšiřuje výpočetní výkon Etherea.

StarkNet dává všem vývojářům a uživatelům přístup k rozsahu a přínosům STARK v oblasti bezpečnosti, pro účely škálování Ethereum při zachování základních hodnot Ethereum. STARKy vynalezli spoluzakladatelé společnosti StarkWare, kteří je nejprve použili k vybudování řešení škálování[StarkEx](https://starkware.co/starkex/)pro klienty. Následně vytvořil StarkWare a další vývojářské týmy (kolektivně „hlavní přispěvatelé“)[StarkNet](https://starkware.co/starknet/), veřejný, decentralizovaná a nepřípustná infrastruktura s cílem zajistit, aby tyto technologie byly trvale přístupné všem.

Zavedení StarkNet Alpha téměř před rokem podnítilo vznik širšího ekosystému, který je odhodlán stavět a pěstovat StarkNet. Existuje mnoho týmů vývojářů po celém světě, kteří budují svou základní infrastrukturu, stejně jako nové aplikace.

### **Cesta k decentralizaci**

Technologie STARK je zralá a bezpečná, ale StarkNet nedosáhl statusu veřejného statku, jako je Ethereum nebo internet. Aby StarkNet tohoto cíle dosáhl, musí jeho řízení, provoz a rozvoj pokračovat v decentralizaci. To bude usnadněno prostřednictvím dvou mechanismů:**StarkNet Foundation**a**StarkNet Token**.

#### Základ

jako zisk, posláním nadace bude udržovat StarkNet jako veřejný statek – komoditu nebo službu, která je k dispozici všem členům společnosti. StarkNet je bezplatná infrastruktura, která by měla být k dispozici všem. Musí být dobře udržován, aby byl bezpečný a účinný pro veřejné použití. Nesmí rovněž rozlišovat mezi uživateli.

Nadace bude financována jednorázovým udělením tokenů StarkNet. Podpoří rozvoj mechanismů zdola nahoru pro rozhodování společenství o základních technologických otázkách, jako jsou aktualizace protokolu, řešení sporů a financování veřejných statků.

#### Token

StarkNet Token je potřebný, aby fungoval ekosystém, udržoval a zajišťoval jej, rozhodoval o svých hodnotách a strategických cílech a řídil svůj vývoj. Tento token bude vyžadován pro i) správu věcí veřejných, ii) platbu poplatků za transakce u StarkNet a iii) účast na konsensuálním mechanismu StarkNet.

Vymysleli jsme prvních deset miliard žetonů, které jsou přidělovány stěžejním přispěvatelům ekosystému StarkNet včetně investorů StarkWare a StarkWare, partnerům vývojáře softwaru StarkNet a nadaci. Brzy (cíl: 2022) bude token pokračovat v Ethereum jako žeton ERC-20 a bude požádán o použití při správě a hlasování při modernizaci sítě. Později budou poplatky StarkNet hrazeny pouze v tomto žetonu a zároveň zaručí dobré uživatelské zkušenosti pro uživatele, kteří mají zájem platit poplatky ETH. Později začne automatická těžba dodatečných tokenů StarkNet (tj. počet oběžných tokenů bude vyšší než deset miliard).

Model StarkNet Token zdůrazňuje kompenzaci vývojářů za jejich práci. Část nových poplatků za těžbu a transakce – poplatky za používání StarkNet – bude poskytnuta developerům hlavní infrastruktury a developerům chytrých smluv za práci, kterou provedli při navrhování a uvedení protokolu, kromě odškodnění provozovatelů StarkNet za práci, kterou vykonali pro jejich provoz.

Úplné zdůvodnění za novým a vyhrazeným tokenem StarkNet je vysvětleno v našem[druhém příspěvku](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778). a Zásady návrhu StarkNet Token a počáteční alokace jsou projednány ve třetí pozici[](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).