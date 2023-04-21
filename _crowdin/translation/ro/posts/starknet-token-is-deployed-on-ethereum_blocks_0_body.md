### TL;DR

* StarkNet Token (STRK) este acum instalat pe Ethereum Mainnet
* **Aveți grijă de escrocheri!**Tokenurile StarkNet nu sunt oferite spre vânzare
* Va fi nevoie de timp pentru ca Fundația să stabilească mecanismul de distribuire a jetoanelor sale
* Token-uri deţinute de acţionarii StarkWare, angajaţii şi dezvoltatorii de software parteneri independenţi sunt blocaţi pentru o perioadă de patru ani, cu eliberare treptată începând după un an
* Tokenul va continua descentralizarea StarkNet, datorită utilizării sale pentru a vota, a pune în joc și a plăti taxe

Astăzi,[StarkNet](https://starknet.io/)face încă un pas către descentralizare. Token-ul StarkNet este acum[pe Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Recuperare rapidă: STRK va fi folosit ca un token important pentru participarea la mecanismele de consens ale StarkNet, ca jeton pentru guvernanţă, şi pentru plata taxelor de tranzacţie. Motivul pentru fiecare dintre aceste utilități este prezentat în[propunerea noastră de descentralizare](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), în secțiunea intitulată „Pentru ce vor fi folosite tokeni?”

***Fii atent la înșelătorii:**la momentul scrierii nu există nicio modalitate de a cumpăra StarkNet Tokens; această perioadă de interdicție va rămâne în vigoare până la o nouă notificare de către[Fundația StarkNet](https://twitter.com/StarkNetFndn); urmați comunicarea oficială a Fundației StarkNet pentru a afla despre orice actualizări ale statutului STRK. Poți raporta escrocherii și verifica alte rapoarte de escrocherii în canalul[raport de înșelătorie](https://discord.gg/qypnmzkhbc)de pe serverul[StarkNet Discord](http://starknet.io/discord).*

Această postare explică procesul de alocare a tokenurilor, precum și modul în care contractele tokenuri implementate deservesc două dintre cele trei utilități concepute ale tokenului, și anume votul și participarea. A treia utilitate – plata taxelor StarkNet – va fi discutată ulterior.

### Planificarea procesului de alocare token

Am propus anterior un[plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)pentru alocarea inițială a token-urilor. Tokeni alocați acționarilor, angajaților și dezvoltatorilor de software independenți sunt blocați timp de patru ani, cu un program de lansare treptată începând de la un an. Tokeni blocați pot fi utilizați pentru vot și miză, dar nu pot fi transferați sau tranzacționați. Unele jetoane sunt blocate printr-un contract inteligent dedicat pentru Ethereum, în timp ce alte tokeni sunt blocați prin intermediul custozilor.

Separat, 50,1 % din tokenurile existente StarkNet sunt alocate Fundației StarkNet, pentru a fi utilizate pentru a îndeplini obiectivele[](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(cf.[Postul lui StarkWare](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Aceste jetoane nu sunt blocate. Cu toate acestea, fundația va avea nevoie de timp pentru a formula mecanismul exact pentru a aloca în continuare acele jetoane și își va împărtăși planurile în timp util.

#### De ce să blocați?

Blocarea jetoanelor pentru perioada menționată anterior asigură alinierea contribuitorilor actuali cu stimulentele pe termen lung ale StarkNet. Acesta descurajează de asemenea speculaţiile asupra tokenului, înaintea utilizării pe scară largă a acestuia în scopurile avute în vedere: asigurarea reţelei, plata taxelor şi descentralizarea guvernării.

În continuare, explicăm modul în care punerea în aplicare a tokenului sprijină votul și participarea.

### Votare

Fundația va fi responsabilă de facilitarea bunei guvernanțe și de formularea mecanismelor de vot. Simbolul StarkNet a fost conceput pentru a permite atât votarea directă, cât şi o serie de mecanisme de delegare.

#### Votul L1

Implementarea ERC-20 implementată acum include**opțional**utilizarea modulului[de delegare al compusului](https://docs.compound.finance/v2/governance/). Acest modul este utilizat pe scară largă pentru votarea în lanț. Motivul pentru care este opţional pe StarkNet şi a devenit implicit rentabil. A porni înseamnă că fiecare transfer al Token-urilor StarkNet pe L1 necesită gaze suplimentare necesare doar în scopul urmăririi deplasărilor în puterea de vot.

#### Non-L1 voting

Alternativele la votarea în lanț L1 cu modulul pentru delegații Compound includ votarea în afara lanțului, precum și sistemele de votare în lanț StarkNet(ca de exemplu[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Aceste alternative, care reduc semnificativ consumul de gaze pentru transferurile L1, nu necesită sprijin explicit din partea codului ERC-20 implementat în prezent, fiind astfel sprijinite în mod inerent.

După cum s-a menționat mai sus, toate jetoanele – blocate și deblocate – vor putea fi utilizate în mecanismul de vot al StarkNet.

### Mâncărimi

Operațiunea fără permisiune și rezistentă la cenzură a StarkNet-ului necesită selecția aleatorie a secvențelor. Probabilitatea ca un nod să fie selectat pentru secvențiere și propunerea unui bloc este proporțională cu numărul de StarkNet Tokens care node miza. The rationale for using StarkNet Tokens (rather than, say, Ethereum or Bitcoin) is explained in the [governance proposal](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), and the exact details of staking, sequencing and block creation on StarkNet are under ongoing [discussion by the community](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), and are yet to be finalized.

Ca și în cazul votării, tokeni pot fi utilizați pentru a se implica chiar și atunci când sunt blocați. Acest lucru contribuie la diversitatea operatorilor StarkNet și la reziliența sistemului StarkNet.

### Summary

Desfășurarea contractelor StarkNet Token pe Ethereum reprezintă încă un pas în descentralizarea StarkNet.

Îndemnăm dezvoltatorii şi utilizatorii să fie atenţi la înşelători! La momentul publicării, niciun simbol nu este tranzacționabil, iar acest statut de interdicție comercială va rămâne în vigoare până la o nouă notificare din partea Fundației StarkNet.

Pentru mai multe întrebări, poți merge la canalul[Token-discussions](https://discord.gg/qypnmzkhbc)de pe serverul[StarkNet Discord](http://starknet.io/discord).