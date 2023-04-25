A blokklánc technológiai innovációja virágzott az elmúlt néhány évben – a STARK-ok, a SNARK-ok, az EIP-1559, az Ethereum Merge – mind hatalmas technológiai vívmányok. Az UX és a felhasználói felület kialakítása azonban nem tudott lépést tartani. Az emberek még mindig leragadnak a 16 szavas mag-kifejezéseknél, és a DeFi-be való belépés központi közvetítő nélkül még mindig túlságosan megfélemlítő sokak számára. A következő egymilliárd felhasználó Web3-ba való bekapcsolásához elengedhetetlen a felhasználói beépítési élmény javítása.

Ahogy az FTX (és a Gemini, a Celsius és a Mt. Gox) bebizonyította, a vagyon feletti öngondnok megőrzése rendkívül fontos. Mindazonáltal egészen a közelmúltig az öngondoskodó pénztárcák nehézkesek és zavaróak voltak az átlagfelhasználók számára. A legtöbb ember havonta elfelejti a Web2 jelszavát; hogyan várják el a felhasználóktól, hogy az örökkévalóságig biztonságban tartsák magfrázisukat és privát kulcsaikat?

Egyszerűen fogalmazva, ez egy biztonsági rémálom. Amint azt számtalanszor láthattuk, egyetlen rossz lépés, akár rossz színészek, akár hanyagság kezdeményezte, dollármilliók elvesztését eredményezheti.

Az új kriptográfiai felhasználók első kapcsolati pontjaként az Ethereum pénztárcáknak könnyen használhatónak, biztonságosnak és személyre szabhatónak kell lenniük, hogy megfeleljenek az egyes felhasználók igényeinek. Ez megköveteli a fejlesztőktől, hogy integrálják a Web2 pénzügyi termékek egyszerűségét a Web3 szolgáltatásaival.

A fiókabsztrakció pontosan ezt éri el.

A fiókabsztrakció javítja az önmegőrző pénztárcatermékek biztonságát azáltal, hogy megszünteti a felhasználók magánkulcstól való függőségét, és programozhatóbbá teszi a pénztárcákat. Ezzel a továbbfejlesztett felhasználói élménynek köszönhetően a nem őrizetbe vett pénztárcák végre több millió mainstream kripto-felhasználóhoz is méretezhetők.

De ahhoz, hogy teljes mértékben megértsük a fiókabsztrakció hatását, fel kell frissítenünk magunkat az Ethereum-fiókok működésére.

### Az Ethereum-fiókok alapjai

Kétféle Ethereum-fiók létezik:

1. Külső tulajdonú fiókok (EOA)
2. Szerződéses számlák (CA)

Bontsuk mindegyiket egy kicsit tovább.

### Külső tulajdonú fiókok

A külső tulajdonú fiókok, mint például a MetaMask és a Coinbase Wallet, a tipikus fióktípusok az Ethereum-felhasználók számára. Minden EOA egy privát és egy nyilvános kulcsból, úgynevezett kulcspárból áll.

Minden tranzakciót privát kulcsok engedélyeznek és írnak alá. A tranzakció aláírását követően az EVM az EOA számlacímével ellenőrzi, hogy az aláírás érvényes-e. Az EVM keménykódolt logikája azt jelenti, hogy a fiók (a tokeneket tároló objektum) és a privát kulcs (aláíró) egyként van összekapcsolva.

A privát kulcs elvesztése azt jelenti, hogy örökre elveszíti pénzeszközeit, vagy akár a fiókja feletti ellenőrzést is.

### Szerződéses számlák

Eközben a szerződéses számlák, amelyek a fiókabsztrakció szinonimája, az Ethereum blokkláncon telepített intelligens szerződések. Ezeket a szerződéseket kódlogika vezérli, és nem igényelnek privát kulcsot. Az EOA-kkal ellentétben a szerződéses számlák nem kezdeményezhetnek tranzakciókat. Ehelyett tranzakcióikat az EOA-k utasításai váltják ki.

### Miért számít a fiókabsztrakció?

A fiókabsztrakció azt jelenti, hogy a kemény kódolt engedélyezési logikát el kell távolítani az EOA-któl, és minden fiókot programozható intelligens szerződéssé alakítanak, amely bármely személy igényeihez igazítható.

Amint azt Argent társalapítója és tudományos igazgató, Julien Niset kifejtette a közelmúltban egy[Stark @ Home eseményben](https://www.crowdcast.io/e/7olimxqv), ez a rugalmas engedélyezési logika szabadságot ad a fejlesztőknek, hogy kijátszhassanak olyan fiókfunkciókkal, mint például….

**Hardveres aláíró:**iPhone vagy Android biztonságos enklávéjával bármilyen okostelefont hardveres pénztárcává alakíthat. Innen a felhasználók biometrikus adatok, például ujjlenyomat vagy Apple Face ID segítségével ellenőrizhetik a tranzakciókat. Már láttuk, hogy a Braavos[hoz hasonló önvédelmi pénztárcák bevezetik ezt a funkciót.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Fizetősök:**Lehetővé teszi a felhasználók számára, hogy bármilyen tokenben fizessenek gázdíjat, vagy akár egy harmadik fél által tervezett fizetési mechanizmust kérjenek a tranzakciókért.

**Közösségi helyreállítás:**Abban az esetben, ha egy privát kulcs elveszik vagy feltört, a felhasználók új kulcsot engedélyezhetnek a pénztárca törvényes tulajdonosaként. Ez magában foglalhat különféle helyreállítási módszereket megbízható kapcsolatokon, hardveres pénztárcákon vagy harmadik féltől származó szolgáltatásokon keresztül. Az ötlet az, hogy a fiókjához való hozzáférés helyreállítása olyan egyszerű legyen, mint a bankszámlajelszó visszaállítása e-mailben.

**Többtényezős hitelesítés:**A szokásos Web2 2FA gyakorlatokhoz hasonlóan a felhasználók két (vagy több) hitelesítési módszert állíthatnak be kriptopénztárcájukhoz, ahol a tranzakciót csak akkor írják alá, ha a felhasználó megerősíti a jóváhagyást egy második lehetőséggel, például e-mailben vagy SMS-ben. A felhasználók napi átutalási limiteket vagy számlacímlistákat is beállíthatnak, amelyekkel a pénztárca automatikusan blokkolva van.

**Kvantumellenálló és gázhatékony aláírások:**Az Ethereum jelenlegi aláírási rendszere, az ECDSA számításilag kiterjedt (értsd: magasabb gázdíjak), és a kvantumszámítógépek feltörhetik. Az aláírás-absztrakció révén a különböző számlaszerződések hatékonyabb és kvantumbiztonságosabb aláírási sémákat használnak. A StarkNet saját szabadalmaztatott STARK-barát görbéjét használja.

Ezek a funkciók nemcsak nagyobb biztonságot és nagyobb rugalmasságot biztosítanak a felhasználóknak, de ami még fontosabb, sokkal****felhasználói élményt eredményeznek.

Vitalik Buterin az Ethereum fejlesztői közösség „régi álmaként” szerepelt, és a fiókabsztrakcióval kapcsolatos innovációk, főként az EIP-2938 és az EIP-3074, 2020 óta kavarognak. Azonban mindkettő kompromisszumot igényelt a biztonság és a megvalósítás körül. [Az EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), az eddigi legígéretesebb fejlesztés, a fiókabsztrakció egy változatát javasolja anélkül, hogy az Ethereum protokollon módosítani kellene.

### **Fiókabsztrakció és Starknet**

Ellentétben a Bitcoinnal és az Ethereummal, amelyek utólag módosítják jelenlegi protokolljaikat, hogy támogassák a számlaabsztrakciót, a[StarkNet](https://starkware.co/starknet/)az első nap óta alkalmazza a fiókabsztrakciót. STARK proofjaink méretezhetőségével és képességeivel párosítva a pénztárca innovációjának lehetősége határtalan. Ez az oka annak, hogy az öngondozó pénztárcák következő generációja, mint például az Argent és a Braavos, jelenleg hálózatunk tetejére épül.

A StarkNet megközelítése hasonló az EIP-4337-hez,[elismerve, hogy](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)teljes fiókabsztrakció továbbra is zavaros UX-hez vezet,[pedig megnyithatja az ajtót](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)a szekvenszerek elleni támadások előtt. Inkább az aláírás-absztrakciót és a fizetési elvonást kívánja elérni a szükséges láncon belüli és azon kívüli infrastruktúrák egyesítése révén.

És bár még mindig sok a tennivaló, a fiókabsztrakció egyre nagyobb teret hódít a kriptobennszülöttek szűk körében. Decemberben a[Visa azt az ötletet](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)javasolta, hogy számlaabsztrakciót alkalmazzanak az automatikus ismétlődő fizetések beállítására a StarkNeten. Egy átruházható fiók használatával a felhasználók engedélyt adhatnak fizetés kezdeményezésére egy előre jóváhagyott intelligens szerződés alapján. Innentől kezdve az intelligens szerződés úgy lesz programozva, hogy egy meghatározott napon, meghatározott időtartamon keresztül levonjon egy meghatározott fizetési összeget. Bár a Visa még nem fedte fel saját szolgáltatásaival kapcsolatos terveit, az érdeklődés önmagában sokat mond, és előrevetítheti azt a világot, ahol a nagytechnológiás előfizetési platformok, például a Netflix és a Spotify felkarolhatják a kriptográfiai átvételt.

Hogy mit hoz a jövő, azt csak az idő fogja megmondani. De egy dolog biztos. A pénztárcák egyszerűbbé és biztonságosabbá tételével a fiókabsztrakció hatékony katalizátorként fog szolgálni az önőrző blokklánc-pénztárcák számára, amelyek több millió mainstream kripto-felhasználóhoz is eljuthatnak. Addig is folytatjuk az építkezést.