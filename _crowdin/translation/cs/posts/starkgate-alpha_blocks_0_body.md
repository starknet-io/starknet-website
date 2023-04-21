### TL;DR

* První verze StarkNet Bridge, StarkGate Alpha, je živá na**[Testnet](https://goerli.starkgate.starknet.io/)**a na**[Mainnet](https://starkgate.starknet.io/)**!
* Čekáme na zpětnou vazbu komunity ohledně toho, jak lze věci zlepšit. Svou zpětnou vazbu můžete odeslat jak[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh), tak[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Nasazení Mainnet bude brzy následovat (aktualizace, 9. května 2022: StarkGate je živý na Mainnet)

Vzrušení! Jsme nadšeni vydáním StarkGate Alpha, první verze StarkNetu Bridge, nyní žije na Goerli testnet, kde bude brzy následovat Mainnet.*

\*(update, 9. května 2022: StarkGate je živý na Mainnet)

**Důležité upozornění: Toto je alfa verze na Alfa StarkGate (přečtěte si jemný tisk níže!).**

![](/assets/starkgate_01.png)

Než budete pokračovat, jděte na to! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate slouží jako brána mezi Ethereem a[StarkNet](https://starknet.io/)a umožňuje uživatelům dělat vše, co mohou očekávat od mostu.

#### **Kde najdu informace o tom, jak funguje StarkGate?**

Abychom pochopili, jak funguje StarkGate, přečtěte si[technickou dokumentaci](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)a podívejte se na kód[](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Všimněte si, že se jedná o první verzi, a zveme Vaše názory a návrhy, jak zlepšit jak[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)a[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Které tokeny podpoří StarkGat?**

* StarkGate Alpha na Goerli podporuje ETH a několik dalších žetonů ERC-20. Úplný seznam a příslušné adresy smlouvy, jak na Ethereu, tak na StarkNet, jsou k dispozici v tomto[repo](https://github.com/starkware-libs/starknet-addresses).
* Na Mainnet bude StarkGate Alpha zpočátku podporovat pouze ETH, aby bylo možné použít mechanismus poplatku. Později přidáme podporu pro WBTC, USDC, USDT a DAI. V tomto[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json) můžete vidět příslušné smluvní adresy.

Dále po silnici, zveřejníme mechanismus pro přidávání podpory pro další tokeny.

#### **Jaká bezpečnostní omezení budou mít StarkGate Alpha na Mainnet?**

StarkGate Alpha on Mainnet je spuštěn se dvěma omezeními – za účelem snížení rizik spojených s používáním alfa verze:

1. Celková uzamčená hodnota (TVL) v mostě na L1 omezí množství každého typu tokenu.
2. Maximální částka v každé transakci odeslané z L1 do L2 (Ethereum→StarkNet) přes StarkGate bude omezená.

Plánujeme tato omezení postupně zmírnit a úplně je pozvednout s rostoucí důvěrou. Aktualizované parametry naleznete v[dokumentaci StarkGate’s](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa a co to znamená

Jako vždy vám připomínáme, že StarkNet je v současné době ve fázi**Alpha**:

* Věci se mohou rozpadnout. Pokud katastrofálně selžou, vaše prostředky by mohly být ztraceny (**přečtěte si prohlášení pod**!).
* Bez časového rámce lze smlouvy StarkNet Alpha i StarkGate modernizovat. I když očekáváme, že taková vylepšení vyhlásíme dlouho dopředu, v případě bezprostředních bezpečnostních rizik (například například: pokud je zjištěna kritická chyba, může být aktualizace provedena s malým nebo žádným varováním.
* Kodex mostu a části Alfa StarkNet ještě nebyly auditovány. Audity ABDK a nepaměti StarkGate Alpha budou brzy dokončeny.

Doporučujeme všem uživatelům, aby pomohli vylepšit most poskytnutím jejich zpětné vazby pomocí jedné z následujících platforem:

1. [Repozitář StarkGate frontend](https://github.com/starkware-libs/starkgate-frontend)
2. [Repozitář smluv StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

Pro otázky a podporu vývojáře se připojte k[StarkNet discord serveru](https://discord.gg/uJ9HZTUk2Y).

### Odmítnutí odpovědnosti

***StarkNet Alpha je nový a komplexní systém, který nebyl plně auditován. Totéž platí pro StarkNet Bridge. Stejně jako všechny komplexní softwarové systémy i StarkNet mohou obsahovat chyby, které: v extrémních případech by mohlo vést ke ztrátě všech vašich prostředků. Takže***běhoun opatrně a chovat se!******

*StarkNet ekosystém je velkým a rychle rostoucím souborem nezávislých týmů a jednotlivců, nad nimiž StarkWare nemá dohled a nepřevezme žádnou odpovědnost. Kterýkoli z projektů vyvinutých členy ekosystému může obsahovat chyby, které by v extrémních případech mohly vést ke ztrátě všech vašich prostředků. Navíc vzhledem k tomu, že se zavádějí chytrější smlouvy, zvyšuje se potenciál nechtěných škodlivých chyb a dokonce i škodlivých podvodů a tahání koberců. Takže přistupujte ke všem chytrým smlouvám na StarkNet jako k chytrým smlouvám na Ethereu a používejte pouze ty, kterým máte dobrý důvod důvěřovat jako bezpečné.*