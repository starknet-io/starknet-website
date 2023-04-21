### TL;DR

* Prima versiune a Podului StarkNet, StarkGate Alpha, este în direct pe**[Testnet](https://goerli.starkgate.starknet.io/)**, şi pe**[Mainnet](https://starkgate.starknet.io/)**!
* Aşteptăm feedback din partea comunităţii cu privire la modul în care lucrurile pot fi îmbunătăţite. Poți trimite feedback atât pentru[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)cât și[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Implementarea principală va urma în curând (actualizare, 9 mai 2022: StarkGate este în direct pe Mainnet)

Excitență! Suntem încântați să îl lansăm pe StarkGate Alpha, prima versiune a Podului StarkNet, acum locuiește pe testul Goerli, cu desfășurarea Mainnet în curând.*

\*(actualizare, 9 mai 2022: StarkGate este in direct pe Mainnet)

**Important disclaimer: aceasta este o versiune alfa pe StarkGate Alpha (citiți tiparul fin de mai jos!).**

![](/assets/starkgate_01.png)

Înainte de a continua, verifică-l! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate servește ca poartă între Ethereum și[StarkNet](https://starknet.io/)și permite utilizatorilor să facă tot ce se poate aștepta de la o punte.

#### **Unde pot găsi informaţii despre cum funcţionează StarkGate?**

Pentru a înțelege cum funcționează StarkGate, citiți[documentația tehnică](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)și aruncați o privire la[codul](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Țineți cont că aceasta este prima versiune, și vă invităm feedback-ul și sugestiile cu privire la modul de îmbunătățire a[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)și[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Care jetoane vor fi suportate de StarkGate?**

* StarkGate Alpha despre Goerli sprijină ETH și alte câteva tokeni ERC-20. Lista completă și adresele relevante ale contractului, atât pe Ethereum cât și pe StarkNet, sunt disponibile în acest[repo](https://github.com/starkware-libs/starknet-addresses).
* Pe Mainnet, StarkGate Alpha va sprijini ETH doar pentru a permite utilizarea mecanismului de taxe. Mai târziu, vom adăuga suport pentru WBTC, USDC, USDT, și DAI. Puteți vedea adresele relevante ale contractului în acest[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

În continuare, vom publica mecanismul de adăugare a sprijinului pentru alte tokenuri.

#### **Ce limite de siguranţă va avea StarkGate Alpha pe Mainnet?**

Se lansează StarkGate Alpha on Mainnet cu două limitări – pentru a reduce riscurile pe care le implică utilizarea unei versiuni Alpha:

1. Valoarea totală blocată (TVL) în punte pe L1 va limita cantitatea fiecărui tip de token.
2. Suma maximă pentru fiecare tranzacţie trimisă de la L1 la L2 (Ethereum→StarkNet) prin intermediul StarkGate va fi limitată.

Intenţionăm să reducem treptat aceste limitări şi să le ridicăm complet pe măsură ce creşte încrederea. Parametrii actualizați pot fi găsiți în documentația[a StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa şi ce înseamnă

Ca întotdeauna, vă amintim că StarkNet se află în prezent în etapa sa**Alpha**:

* Lucrurile se pot rupe. Dacă eșuează în mod catastrofal, fondurile tale ar putea fi pierdute (**citește returnarea de mai jos**!).
* Atât contractele StarkNet Alpha cât şi cele StarkGate pot fi modernizate fără a avea cronologie. Deși ne așteptăm să anunțăm astfel de îmbunătățiri cu mult timp înainte, în cazul unor riscuri de securitate iminente (de exemplu, dacă o eroare critică este găsită), upgrade-ul poate fi aplicat cu un avertisment mic sau inexistent.
* Codul podului, precum şi porţiunile lui StarkNet Alpha, nu au fost încă auditate. Auditurile ABDK şi Nethermind ale StarkGate Alpha vor fi finalizate în curând.

Încurajăm toți utilizatorii să contribuie la îmbunătățirea punții prin furnizarea feedback-ului lor folosind una dintre următoarele platforme:

1. [Repetă frontend StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [Repartizarea contractelor StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [Şamani StarkNet](http://community.starknet.io/)

Pentru întrebări şi suport de dezvoltare, alăturaţi-vă serverului[StarkNet discord](https://discord.gg/uJ9HZTUk2Y).

### Notificare

***StarkNet Alpha este un sistem nou şi complex care nu a fost pe deplin auditat. Acelaşi lucru este valabil şi pentru Podul StarkNet. Ca toate sistemele software complexe, StarkNet şi podul pot conţine erori care, în cazuri extreme, ar putea duce la pierderea tuturor fondurilor dumneavoastră. Asa ca***mergi cu atentie si poate!******

*Ecosistemul StarkNet este un set mare şi în creştere de echipe şi persoane independente, asupra căruia StarkWare nu are nicio legătură şi nu îşi asumă responsabilitate. Oricare dintre proiectele dezvoltate de membrii ecosistemului poate conţine erori care, în cazuri extreme, ar putea duce la pierderea tuturor fondurilor dumneavoastră. În plus, pe măsură ce sunt implementate mai multe contracte inteligente, crește potențialul pentru erorile dăunătoare neintenționate și chiar pentru escrocherii rău intenționate. Deci, tratați toate contractele inteligente pe StarkNet așa cum tratați contractele inteligente pe Ethereum, și folosiți doar cei pe care aveți motive întemeiate să aveți încredere în siguranță în ei.*