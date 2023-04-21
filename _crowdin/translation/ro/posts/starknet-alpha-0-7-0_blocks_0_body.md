### TL;DR

* StarkNet Alpha 0.7.0 lansat la Goerli; plin cu îmbunătățiri
* Contractele pot fi acum îmbunătățite folosind modelul de actualizare Proxy
* Contractele pot emite acum evenimente
* Suport pentru mult-așteptatul număr al blocului și pentru apelurile de sistem de timp

### Introducere

Suntem bucuroşi să-l eliberăm pe Alpha 0.7.0, o versiune împachetată cu noi caracteristici şi îmbunătăţiri. Unul dintre cei mai buni stimulanţi ai lui StarkNet din ultimele luni a fost implicarea sporită a comunităţii în modelarea viitorului lui StarkNet. Această versiune se adresează unora dintre nevoile de ardere ale comunității.

#### Modificări aduse Convenției privind desemnarea

Cititorul observant ar fi putut observa că precedenta versiune StarkNet Alpha a fost numită Alpha 4, în timp ce noi o publicăm pe Alpha 0.7.0. Am decis să omitem numărul versiunii dedicate Alpha și să ne bazăm doar pe versiunea asociată cairo-lang.

### Caracteristici noi

#### Actualizare contract

Modelul[de actualizare proxy](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)al OpenZeppelin este acum pe deplin acceptat pentru upgradări contractuale în StarkNet. Modelul de proxy este metoda comună pentru a permite upgradarea contractului peste Ethereum. Alpha 0.7.0 permite acest model peste StarkNet.

Am făcut un scurt tutorial[](https://starknet.io/docs/hello_starknet/default_entrypoint.html)pentru a demonstra o implementare de bază a modelului, iar OpenZeppelin lucrează deja la punerea în aplicare a unui contract standard pentru modelul proxy; vedeți[prototipul](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Blochează numărul și marca de timp

Alpha 0.7.0 adaugă două apeluri noi pe care mulţi devi le-au cerut. Aceste apeluri permit unui contract să acceseze numărul blocului și marcajul de timp al blocului. Numărul blocului returnează numărul blocului executat curent. Marca temporală a blocului returnează marcajul temporal oferit de Sequencer la crearea blocului.

Puteți vedea un exemplu despre cum să folosiți aceste caracteristici în[tutorialul](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Evenimente

Surpriză! O caracteristică planificată pentru o versiune viitoare s-a strecurat în acest sens mai devreme.

Contractele StarkNet sprijină acum evenimentele care definesc şi emit evenimente, permiţându-le să expună la consum informaţiile privind execuţia aplicaţiilor în afara lanţului. Dezvoltatorii Ethereum vor găsi semantica și sintaxa foarte asemănătoare cu Soliditatea. Puteți citi documentația[](https://starknet.io/documentation/events/), sau să urmați[tutorialul](https://starknet.io/docs/hello_starknet/events.html), care explică această caracteristică.

#### A fost eliminată directiva %builtins

Directiva %builtin nu mai este necesară în contractele StarkNet. Această schimbare a urmat discuției comunității despre[modelul de extensibilitate contract](https://community.starknet.io/t/contract-extensibility-pattern/210)pe[StarkNet Shamans](https://community.starknet.io/). Aceasta simplifică în mod semnificativ utilizarea acestui model de extensibilitate.

De exemplu, următorul contract va fi modificat de la:

```
%lang starknet

# Aceasta este directiva "%builtine".
# Nu mai este necesar.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

În acest sens:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Puteți vizualiza contractele standard[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)care utilizează noul model.

#### Arazele structurilor de suport pentru funcții externe

Alfa 0.7.0 suportă trecerea şi revenirea de raze de lovituri în funcţii externe. Această funcționalitate suplimentară permite Contractelor de Cont să sprijine mai bine[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall este o caracteristică puternică a Abstracției Contului care permite unui cont să facă mai multe apeluri într-o singură tranzacție. Un caz de utilizare evident este acela de a crea o**tranzacție unică**care apelează alocația și apoi transferFrom.

Aşteptăm cu nerăbdare să vedem ce face această comunitate.

#### Îmbunătăţiri ale CLI StarkNet

**Suport pentru Blocuri în așteptare**

[Blocurile în așteptare](https://starknet.io/documentation/block-structure-and-hash/#pending_block)au fost[introduse](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)în ultima versiune minoră (v0.6.2) și au oferit confirmări mai rapide privind tranzacțiile. Această versiune include suport pentru interogarea acestor blocuri prin intermediul StarkNet CLI.

Pentru a o folosi, în fiecare comandă CLI care ia block_number ca argument (contract_call/get_block/get_code/get_storage_at), putem interoga StarkNet cu privire la blocul în așteptare prin specificarea block_number=pending.

**Sprijin pentru contractele de cont**

StarkNet folosește captarea contului, adică toate conturile sunt implementate ca contracte inteligente. Primele implementări de contracte de cont au fost făcute de[Argent](https://github.com/argentlabs/argent-contracts-starknet)și[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), dar ne așteptăm la multe altele.

În StarkNet, toate tranzacțiile trebuie să treacă printr-un contract de cont, iar acum CLI permite interacțiunea cu StarkNet Alpha direct prin intermediul contractelor de cont. Vezi tutorialul[](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)despre cum să îl setezi.

Funcționalitate similară a fost adăugată la[StarkNet.py](https://github.com/software-mansion/starknet.py/)și la[Nilul](https://github.com/OpenZeppelin/nile)în ultima lună.

#### L1<>Mesagerie L2 în Cadrul de Testare

Alfa 0.7.0 îl introduce pe Postman. Postman permite dezvoltatorilor să folosească cadrul de testare pentru a testa fluxuri mai complicate.

La un nivel înalt — se simulează responsabilitatea Secquencerului StarkNet de a transmite mesaje de la L1 la L2 și L2 la L1. Aceasta se asigură că mesajele care sunt trimise prin contractul de mesagerie soliditate vor apărea la destinația contractului StarkNet, iar mesajele trimise de un contract StarkNet vor apărea în contractul de mesagerie solidă.

#### Și mai multe caracteristici

Alpha 0.7.0 oferă mult mai multe caracteristici şi schimbări, cum ar fi adăugarea unei funcţii de bază pătrate eficiente la biblioteca comună de matematică. O listă completă apare în[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Continuați?

[Mecanismul de taxare](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)inițial va fi lansat în câteva săptămâni, ca o sub-versiune a StarkNet.

### Mai multe informații?

[starknet.io](https://starknet.io/): pentru toate informațiile StarkNet, tutoriale și actualizări.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): alătură-te pentru a primi răspunsuri la întrebările tale, a obține suport pentru dezvoltatori și a deveni parte a comunității.

[StarkNet Shamans](https://community.starknet.io/): alătură-te pentru a urmări (și a participa!) la discuțiile de cercetare StarkNet.