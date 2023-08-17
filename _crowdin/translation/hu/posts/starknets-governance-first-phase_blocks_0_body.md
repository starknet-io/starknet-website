Izgatottan várjuk, hogy bejelenthessük a StarkNet decentralizációs folyamatának következő lépését – a protokollmódosítások megszavazását.

Az elmúlt néhány hét során a StarkNet jelentős lépéseket tett a további decentralizáció érdekében: létrehozta[a StarkNet Foundationt](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59), elindította a[STRK Tokent az Ethereum](https://medium.com/starkware/starknet-token-is-deployed-on-ethereum-f27f0000b00c)on, és[nyílt forráskódú Cairo 1.0-t](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0).

Ez a bejegyzés a következő lépéssel, nevezetesen a StarkNet kormányzásának első szakaszával foglalkozik, amely az elkövetkező hónapokra terjed ki.

### TL;DR

* Hamarosan lezajlik az első szavazás a StarkNet protokoll javasolt módosításainak jóváhagyásáról vagy elutasításáról
* Az első szakaszban a szavazás résztvevői:\
  — Token birtokosok\
  — A szavazati jogaikat inkább átruházó tokentulajdonosok által kiválasztott küldöttek\
  — A StarkNet Alapítvány által kiválasztott küldöttek szavazati jogai egy részének gyakorlására\
  — A StarkNet Alapítvány által létrehozott professzionális Építőipari Tanács
* Mindenkit felkérnek, hogy jelölje ki magát a StarkNet irányításába
* A megbeszélések a[StarkNet közösségi fórumon](https://community.starknet.io/)zajlanak

### Háttér

Két folyamatot fejlesztenek egyszerre annak érdekében, hogy a StarkNet cenzúraálló nyilvános hálózattá váljon: (i) a StarkNet rendszerelemeinek[decentralizálása](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), pl. a szekvencerek és proversek, és (ii) a protokollmódosításokkal kapcsolatos irányítási mechanizmusok megvalósítása.

Komoly kihívást jelent olyan minőségirányítási mechanizmusok kiépítése, amelyek lehetővé teszik egy nyitott közösség számára a protokollfrissítések kezelését. Ez egy fokozatos és feltáró folyamat, amely széles körű közösségi együttműködést igényel.

A StarkNet irányításának első szakaszainak megtervezése és lebonyolítása érdekében a StarkNet Alapítvány irányító bizottságot hozott létre. Az Alapítvány további részleteket a bizottság hatásköréről és küldetéséről külön bejegyzésben tesz közzé. A bizottság tagjai Deven Matthews (Nethermind), Manor Bareli (StarkWare) és Sylve Chevet (briq). Az alábbiakban látható a StarkNet Governance első szakaszának terve, amelyet a bizottság tagjai a StarkNet ökoszisztéma különböző közreműködőivel együtt fogalmaztak meg, és amelyet az Alapítvány igazgatósága hagyott jóvá.

### A Starknet irányítási első fázisának terve

Elindult a StarkNet Governance első szakasza. Ezentúl a közösség tagjai egy további csatornán, mégpedig a protokollmódosítások szavazásán keresztül vehetnek részt a StarkNet alakításában. Ez csak az első szakasza a StarkNet irányításának; ahogy a StarkNet a következő fázisba lép, az irányítási mechanizmusok és a résztvevők köre bővülni fog. Íme a**első**fázis részletei:

#### Szavazás tárgya

Javasolt frissítések a StarkNet protokollhoz. Ebben a szakaszban minden frissítést az Alapítvány javasol. A javaslatok tükrözik a StarkNet közösségi fórumon felvetett vitákat, ötleteket és visszajelzéseket.

#### Szavazás típusa

Láncon kívüli jelszavazás (pillanatfelvételen keresztül)

#### Szavazási folyamat

1. Az Alapítvány a StarkNet frissített verzióját telepíti a Goerlire.
2. A szavazóknak 6 nap áll rendelkezésükre, hogy megvizsgálják a frissített verziót, mivel az fut a Goerli-n. Ez idő alatt szavazhatnak arról, hogy jóváhagyják-e a Mainnet telepítését.
3. Ha a szavazók jóváhagynak egy javaslatot, akkor több mint 24 órás késéssel kell alkalmazni a frissítést a Mainnetre.

Ezekről a frissítésekről a StarkNet Foundation[Twitter-fiókjában, valamint](https://twitter.com/StarkNetFndn)[StarkNet Community Forum](https://community.starknet.io/)ban kerül sor.

#### Küszöb és szükséges határozatképesség

* A küszöb az egyszerű többség (azaz a küszöb a leadott szavazatok 50%-a)
* Határozatképességhez nincs szükség, ami azt jelenti, hogy nincs minimális részvételi szint a szavazás érvényességéhez

### Az első szakasz szavazás résztvevői

Íme azoknak a listája, akik részt vehetnek az irányítási folyamat első szakaszában:

#### Zsetontartók

* A StarkNet kormányzásának első szakaszában a legtöbb token-tulajdonos korai központi közreműködő és befektető, akik felépítették és támogatták a hálózatot annak korai szakaszában ([további részletekért olvassa el ezt a bejegyzést](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)).
* Idővel a tokent kiosztják a fejlesztőknek és más feleknek, akik a hálózat karbantartásán és frissítésén dolgoznak. Mint ilyenek, ezek a felek biztosíthatják a hálózatot, használhatják, működtethetik és részt vehetnek annak irányításában.

#### Küldöttek

**Indoklás**:\
A szavazati jog átruházása lehetővé teszi a tokentulajdonosok számára, hogy irányítási mandátumukat a közösség érintett, tájékozott és szakmai tagjaira ruházzák át. Ennek köszönhetően:

* A token-tulajdonosok dönthetnek úgy, hogy a közvetlen demokrácia helyett a képviseleti demokrácia révén részt vesznek a döntéshozatalban.
* Az elhivatott, tehetséges közösség tagjai hírnevük alapján jelentős szerepet vállalhatnak a kormányzásban. Nincs szükség token birtoklására ahhoz, hogy küldöttként kiállhassa magát.

**Felelősségek**:\
Végezzen komoly tanulási folyamatot minden döntésnél, amely megalapozott, önálló döntések meghozatalához vezet, amelyek a StarkNet és annak hosszú távú jövőképét szolgálják.

****művelet:

* Mindenekelőtt a delegálási mechanizmus sikeres működéséhez minőségi küldöttek csoportjára van szükség.
* A delegálttá válás útja engedély nélküli – nincs előfeltétele –, de azoknak, akik szeretnék, létrehoztak egy szekciót a fórumban, ahol a leendő delegáltak profilokat tehetnek közzé ([ezen a linken](https://community.starknet.io/t/delegate-profile-thread/4049)).
* A token tulajdonosok szabadon választhatnak bármely Ethereum L1 címet, amellyel szavazati jogukat át kívánják ruházni.
* További részletekért olvassa el a[dedikált bejegyzést a StarkNet közösségi fórumon](https://community.starknet.io/t/delegate-profile-thread/4049).

#### A StarkNet építői tanácsa

Az Alapítvány által kijelölt szakmai bizottság.

**Indoklás**:\
Olyan irányítási mechanizmusok megvalósítása, amelyek a közösségi részvételen és a szakmai hírnéven alapulnak, nem csak a token-tartáson.

**Felelősségek**:

* Minden döntésnél komoly tanulási és vitafolyamat lefolytatása, amely megalapozott döntésekhez vezet, amelyek a StarkNet és annak hosszú távú jövőképének javát szolgálják.
* Aktív részvétel a vitákban és szavazásokban az első szakaszban
* Megbeszéléseik és döntéshozatali folyamataik átláthatóságának biztosítása
* Elérhető a közösség számára a StarkNet közösségi fórumon folyó nyílt beszélgetéseken keresztül

****művelet:

* Az Alapítvány által kijelölt 17 bizottsági tag
* Mandátumidő – StarkNet irányítási első szakasz (több hónap)
* További részletekért olvassa el a[dedikált bejegyzést a StarkNet közösségi fórumon](https://community.starknet.io/t/delegate-profile-thread/4049).

### Az első fázis szavazati joga

A StarkNet Governance első szakaszában a StarkWare nem vesz részt a szavazásban. A StarkNet Alapítvány a szavazati jogot az Építőipari Tanácsra és a csoport több küldöttére ruházza át, és nem szavaz közvetlenül.

A szavazati erő megoszlása a**első fázisban**a következő lesz:

* Befektetők: 33,3%
* A StarkNet korai fő közreműködői (a StarkWare kivételével): 33,3%
* Az Alapítvány képviselői: 33,3%\
  — StarkNet Építőipari Tanács: 23,3%\
  — Az Alapítvány nevében szavazó küldöttek: 10%

### Első szavazás – a StarkNet 0.11-es verziója

Az első szavazásra a következő hetekben kerül sor. A szavazás a StarkNet Alpha 0.11-es verziójára való frissítésére vonatkozik.

A szavazás nem sokkal a Goerli megjelenése után kezdődik, és a hivatalos csatornákon keresztül lesz bejelentve:[StarkNet Foundation Twitter fiókja](https://twitter.com/StarkNetFndn)és[StarkNet Community Forum](https://community.starknet.io/). Maradjon velünk!