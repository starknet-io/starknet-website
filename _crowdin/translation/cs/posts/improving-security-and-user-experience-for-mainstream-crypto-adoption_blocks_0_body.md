Technologické inovace v blockchainu se v posledních několika letech rozvíjely – STARKs, SNARKs, EIP-1559, Ethereum Merge – to vše jsou obrovské technologické úspěchy. UX a UI design však nedokázaly udržet krok. Lidé stále uvíznou na šestnácti slovných slovech a dostat se do DeFi bez centralizovaného zprostředkovatele je pro mnoho lidí stále příliš zastrašující. Pro zapojení příští miliardy uživatelů do Web3 je zlepšení uživatelského zážitku zapojení klíčové.

Jak ukázala FTX (a Gemini, Celsius a Mt. Gox), zachování sebepéče nad vlastním majetkem je nesmírně důležité. Nicméně až donedávna byly samoobslužné peněženky pro průměrného uživatele nepříjemné a matoucí. Většina lidí zapomíná na svá hesla na Web2 měsíčně; jak se očekává, že uživatelé budou mít svá klíčová slova a soukromé klíče bezpečné pro eternit?

Jednoduše řečeno je to bezpečnostní noční můra. Jak jsme viděli bezpočet dob, jeden chybný krok, ať už byl iniciován špatnými aktéry nebo nedbalostí, může vyústit ve ztrátu milionů dolarů.

Jako první kontaktní místo pro nové uživatele kryptografů musí být peněženky Ethereum snadno použitelné, bezpečné a přizpůsobitelné tak, aby vyhovovaly potřebám každého uživatele. To vyžaduje, aby vývojáři integrovali jednoduchost finančních produktů Web2 s funkcemi Web3.

Přesně to je to, čeho se dosahuje abstrakce.

Abstrakce účtu zlepšuje bezpečnost a zabezpečení produktů peněženky s vlastní vazbou tím, že odstraňuje závislost uživatelů na soukromém klíči a činí peněženky programovatelnějšími. Pomocí tohoto vylepšeného UX se mohou peněženky bez úschovy konečně zvětšit na miliony uživatelů hlavního proudu.

Abychom však plně pochopili dopad abstrakce účtů, musíme se obnovit na to, jak fungují účty Ethereum.

### Základy účtů Ethereum

Existují dva typy účtů Ethereum:

1. Externě vlastněné účty
2. Smluvní účty (CA)

Rozeberme se o něco dále.

### Externí účty

Externě vlastněné účty, jako jsou MetaMask a Coinbase Wallet, jsou typickým typem účtu pro uživatele Ethereum. Každá EOA se skládá ze soukromého a veřejného klíče, nazývaného párem klíčů.

Všechny transakce jsou autorizovány a podepsány soukromými klíči. Jakmile je transakce podepsána, ověřuje EVM, že podpis je platný pomocí adresy účtu EOA. Pevně kódovaná logika v EVM znamená, že účet (objekt držící váš token) a soukromý klíč (podpis) jsou jako jeden spojeny.

Ztráta vašeho soukromého klíče znamená ztrátu Vašich prostředků, nebo dokonce kontrolu nad vaším účtem navždy.

### Smluvní účty

Mezitím jsou smluvní účty, synonymem abstrakce účtu, chytré kontrakty uplatňované na blockchainu Ethereum. Tyto smlouvy jsou kontrolovány logikou kódu a nevyžadují soukromé klíče. Na rozdíl od EOA nemohou smluvní účty iniciovat transakce. Místo toho se jejich transakce uskutečňují na základě pokynů od EOA.

### Proč je důležité abstrakce účtu

Abstrakce účtu vede k abstrakci abstrakce těžce kódované autorizační logiky vzdálené od EOA, přeměnit každý účet na programovatelnou chytrou smlouvu, která může být šitá na míru potřebám každého jednotlivce.

Jak vysvětluje spoluzakladatel Argentu a vrchní vědecký úředník Julien Niset v nedávné události[Stark @ Home](https://www.crowdcast.io/e/7olimxqv)Tato pružná autorizační logika dává vývojářům možnost hrát si s funkcemi účtu, jako je…

**Hardwarové signátory:**Pomocí zabezpečeného rozhraní iPhone nebo Androidu, aby se jakýkoli chytrý telefon změnil v hardwarovou peněženku. Odtud mohou uživatelé ověřovat transakce pomocí biometrických údajů, jako je otisk prstu nebo Apple Face ID. Již jsme začali vidět samoobslužné peněženky, jako je Braavos[tuto funkci.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Povolit uživatelům platit poplatky za plyn v libovolném žetonu nebo dokonce mít mechanismus navržený třetí stranou za transakce.

**Obnovení sociálních sítí:**V případě ztráty nebo kompromitování soukromého klíče mohou uživatelé autorizovat nový klíč jako legitimní majitel peněženky. To může zahrnovat různé metody obnovy prostřednictvím důvěryhodných kontaktů, hardwarových peněženek nebo služeb třetích stran. Myšlenka je zajistit, aby obnova přístupu k vašemu účtu byla tak snadná jako obnovení hesla k vašemu bankovnímu účtu prostřednictvím e-mailu.

**Multifactor Authentication:**Podobné běžným Web2 2FA postupům, uživatelé mohou nastavit dvě (nebo více) metody ověřování pro své kryptoměny, pokud je transakce podepsána pouze tehdy, když uživatel potvrdí schválení prostřednictvím druhé možnosti jako je e-mail nebo SMS. Uživatelé mohou také nastavit denní limity transferů nebo seznamy adres účtu, z nichž je peněženka automaticky zablokována v interakci.

**Quantum Resistant and Gas-Efficient Signatures:** Ethereum’s current signature scheme, ECDSA, is computationally extensive (read: higher gas fees) and can be broken by quantum computers. Prostřednictvím abstrakce podpisů využívají různé smlouvy na účtu účinnější a kvantově bezpečnější podpisové systémy. StarkNet používá svou vlastní vlastní křivku přátelskou ke STARKu.

Nejenže tyto funkce poskytují uživatelům větší bezpečnost a větší flexibilitu, ale co je důležitější, vedou k mnohem lepšímu****uživatelům.

Na seznamu Vitalika Buterina jako „dlouholetý sen“ pro vývojářskou komunitu Etherea, inovace kolem abstrakce účtů, zejména EIP-2938 a EIP-3074, se od roku 2020 prudce zvýšily. Oba požadované kompromisy týkající se bezpečnosti a provádění. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), zatím nejslibnější vývoj, navrhuje verzi abstrakce účtu bez nutnosti změn Ethereum protokolu.

### **Abstrakce účtu a Starknet**

Na rozdíl od Bitcoinu a Etherea, které doplňují své současné protokoly na podporu abstrakce účtu,[StarkNet](https://starkware.co/starknet/)od prvního dne provedl abstrakci účtu. Pokud je spolu s škálovatelností a schopnostmi našich důkazů STARK, potenciál inovací peněženky je neomezený. Proto se na naší síti v současné době buduje další generace samozásobitelských peněženek, jako Argent a Braavos.

Přístup StarkNetu je podobný EIP-4337,[uznává, že](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)kompletní abstrakce účtu by stále vedla k záměně UX a[by mohly otevřít dveře](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)útokům na sekvence. Spíše se snaží dosáhnout jak abstrakce podpisů, tak abstrakce plateb vzájemným sdílením některé z požadovaných infrastruktur v řetězci, tak mimo něj.

A přestože je ještě třeba vykonat ještě mnoho práce, abstrakce účtů nabývají na síle mimo malý kruh kryptoměnců. V prosinci[Visa navrhl](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)použít abstrakci účtu k nastavení automatických opakujících se plateb na StarkNet. Pomocí pověřeného účtu mohou uživatelé udělit povolení k iniciování platby pro předem schválenou chytrou smlouvu. Odtud bude chytrá smlouva naprogramována tak, aby odečetla nastavenou částku platby na konkrétní den, po stanovenou dobu trvání. Přestože Visa ještě neodhalila své plány na vlastní služby, samotný zájem hovoří o svazcích, a může se stát předstíráním světa, kde by platformy pro předplatné velkých technologií, jako je Netflix a Spotify mohly přijmout přijetí kryptoměn.

Co se týče toho, co drží budoucnost, jen čas ukáže. Jedna věc je však jistá. Usnadněním a bezpečností používání peněženek abstrakce účtu bude sloužit jako silný katalyzátor pro samoobslužné peněženky blockchainu, aby se zvětšily na miliony uživatelů hlavního proudu. Do té doby budeme dál stavět.