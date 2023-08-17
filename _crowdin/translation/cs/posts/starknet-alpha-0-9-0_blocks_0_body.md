### TL;DR

* **Poplatky jsou nyní povinné na Testnet, brzy na Mainnet**
* Kontraktní tovární model je nyní možný!
* StarkNet zavádí smluvní třídy
* Delegační hovor je nahrazen knihovnou

### Úvod

Rádi představíme StarkNet Alpha 0.9.0! To je důležitá verze, ve které StarkNet dělá významné kroky k dospělosti, se značným přidáním jak k funkcím, tak k designu protokolu.

**Poplatky jsou povinné**(v současné době pouze na Testnet, do verze 0.9. bude žít na Mainnet) – každé prosperující L2 musí mít vlastní nezávislý systém poplatků. Po zavedení poplatků jako volitelné funkce ve verzi 0.8. , nyní se cítíme jisté, že je začleníme do protokolu jako základní součást a učiníme je povinnými. Další podrobnosti níže.

Další významnou změnou na úrovni protokolu je zavedení tříd smluv a oddělení třídy/instance. To umožňuje jednodušší využití funkce \`delegate_call\` a nasazení z existujících smluv, což umožňuje tovární vzhled na StarkNet.

### Třídy smluv

Díky inspiraci z objektově orientovaného programování rozlišujeme mezi smluvním kódem a jeho prováděním. Děláme to rozdělením smluv na třídy a instance.

**třída smlouvy**je definicí smlouvy: její Káhiro bytecode, nápověda informací, názvy vstupních bodů a vše potřebné k jednoznačné definici sémantic. Každá třída je označena hash třídy (analogicky k názvu třídy z OOP jazyků).

**instance smlouvy**nebo jednoduše smlouva je smlouva uzavřená pro určitou třídu. Všimněte si, že jako smlouvy se chovají pouze smluvní případy, tj. mají vlastní skladování a lze je požadovat na základě transakcí/jiných smluv. Třída smlouvy nemusí nutně mít zavedenou instanci v StarkNet. Zavedení tříd je spojeno s několika změnami protokolu.

#### „Deklarout“ transakce

Zavádíme do StarkNetu nový typ transakce: transakce[‘declare’](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction), která umožňuje deklaraci smlouvy**.**Na rozdíl od transakce \`deploy\` toto nepoužívá instanci této třídy. Stav StarkNet bude obsahovat seznam deklarovaných tříd. Nové třídy mohou být přidány prostřednictvím nové \`declare\` transakce.

#### „Zaměstnání“ systémové a smluvní činitele.

Jakmile je deklarována třída, tedy odpovídající \`declare\` transakce byla přijata, můžeme použít nové instance této třídy. Za tímto účelem používáme nový systémový hovor \`deploy\`, který obsahuje následující argumenty:

* Hash třídy
* Sůl
* Argumenty struktora

„Zavedení“ syscall pak zavede nový příklad této smluvní třídy, jehož[adresu](https://docs.starknet.io/docs/Contracts/contract-address)budou určeny třemi výše uvedenými parametry a adresou nasazení (smlouva, která vyvolala systémové volání).

Včetně nasazení v rámci transakce vyvolávající volání nám umožňuje účtovat poplatky za nasazení, aniž bychom museli přistupovat k nasazení a volat odlišně. Další informace o zaváděcích poplatcích naleznete v[dokumentech](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Tato funkce zavádí do StarkNet smluvní továrny, protože jakákoliv zakázka může vyvolat \`deploy\` syscall, vytvářet nové zakázky.

#### Přesun z „delegátní volání“ na „knihovnu volání“

Zavedení tříd nám umožňuje řešit dobře známý problém v Ethereumově pověřených volacích mechanismech: Když zakázka provede pověřenou výzvu k jiné smlouvě, potřebuje pouze svou třídu (svůj kód), nikoli vlastní instanci (úložiště). Musí proto upřesnit konkrétní smluvní případ při delegované výzvě je špatný (skutečně) to vedlo k několika chybám ve smlouvách s Ethereum - stačí specifikovat pouze třídu.

Starý systémový hovor \`delegate_call\` se nyní stává zastaralým (staré smlouvy, které jsou již zavedeny, budou i nadále fungovat, ale**smlouvy pomocí \`delegate_call\` již nebudou kompilovat**), a je nahrazen novým systémovým hovorem knihovny, který dostane třídu hash (dříve vyhlášené třídy) místo adresy instance smlouvy. Všimněte si, že do knihovny je zapojena pouze jedna skutečná smlouva, takže se vyhneme nejednoznačnosti mezi smlouvou o výzvě a smlouvou o provádění.

#### Nové API koncové body

Přidali jsme dva nové koncové body do API, což umožňuje získat údaje související s třídou:

* \`get_class_by_hash\`: vrátí definici třídy zadanou hash třídy
* \`get_class_hash_at\`: vrátí třídu hash nasazené smlouvy vzhledem k adrese smlouvy

Všimněte si, že pro získání třídy smlouvy uzavřené přímo místo toho, aby procházela oběma výše uvedenými metodami, můžete použít starý koncový bod \`get_full_contract\`, který bude v budoucích verzích přejmenován. Všechny uvedené koncové body jsou také použitelné od[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Poplatky

Přejdeme k začlenění poplatků do StarkNet, aby byly povinné (nejprve na Testnet, a později také na Mainnet) pro ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` transakce. Transakce \`deklaruje\` nebude v tomto okamžiku vyžadovat poplatky. Podobně \`nasazení`` transakcí také nebude vyžadovat poplatek, ale všimněte si, že tento typ transakce bude pravděpodobně zastaralý v budoucích verzích.

V této oblasti zůstává několik otevřených otázek, z nichž nejdůležitější je, jak účtovat poplatky za smluvní prohlášení a zavedení účtů StarkNet. Tyto otázky budeme řešit v budoucích verzích.

### Co další?

Na základě naší cestovní mapy, kterou jsme[ohlásili v únoru](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), jsme odhodláni obecně zlepšit výkon StarkNet, a zejména výsledky sledovače s cílem získat uživatelům rychlejší zpětnou vazbu o svých transakcích. V další verzi plánujeme zavést paralelizaci do sekvenčního segmentu a umožnit rychlejší produkci bloků.

Další hlavní verze StarkNet se zaměří na strukturu účtů StarkNet, a to podobným způsobem jako[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). S tím skoncujeme s tím, jak se budou účty StarkNet chovat, a učiníme další významný krok směrem k masovému adopci!