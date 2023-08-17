### TL; DR

* Geldigheidsopsommings word nie in deurset beperk op dieselfde manier as L1's nie. Dit gee aanleiding tot potensieel baie hoër TPS op L2-geldigheidsopsommings.
* StarkNet prestasie padkaart spreek 'n sleutelelement in die stelsel aan: die sequencer.
* Ons bied hier die padkaart vir prestasieverbeterings aan:\
  — Sequencer parallelization\
  — 'n Nuwe roesimplementering vir die Cairo VM\
  — Sequencer herimplementering in roes\
* Sprekers, wat gevegstoets is soos hulle is, is nie die bottelnek nie en kan veel meer hanteer as nou!

### Inleiding

StarkNet is amper 'n jaar gelede op Mainnet bekendgestel. Ons het begin om StarkNet te bou deur op funksionaliteit te fokus. Nou verskuif ons die fokus na die verbetering van prestasie met 'n reeks stappe wat sal help om die StarkNet-ervaring te verbeter.

In hierdie plasing verduidelik ons hoekom daar 'n wye reeks optimaliserings is wat slegs van toepassing is in geldigheidsopsommings, en ons sal ons plan deel om hierdie stappe op StarkNet te implementeer. Sommige van hierdie stappe is reeds geïmplementeer in StarkNet Alpha 0.10.2, wat op Testnet op 16 November en Gister op Mainnet vrygestel is. Maar voordat ons die oplossings bespreek, kom ons kyk na die beperkings en die oorsaak daarvan.

### Blokbeperkings: geldigheidsopsommings teenoor L1

'n Potensiële benadering tot die verhoging van blokkettingskaalbaarheid en die verhoging van TPS sou wees om die blokbeperkings (in terme van gas/grootte) op te hef terwyl die bloktyd konstant gehou word. Dit sal meer inspanning van die blokprodusente verg (valideerders op L1, opvolgers op L2) en vereis dus 'n meer doeltreffende implementering van daardie komponente. Vir hierdie doel verskuif ons nou die fokus na StarkNet sequencer-optimalisasies, wat ons in meer besonderhede in die volgende afdelings beskryf.

'n Natuurlike vraag ontstaan hier. Waarom word opeenvolgersoptimaliserings beperk tot geldigheidsopsommings, dit wil sê, hoekom kan ons nie dieselfde verbeterings op L1 implementeer en die kompleksiteite van geldigheidsopsommings heeltemal vermy nie? In die volgende afdeling beweer ons dat daar 'n fundamentele verskil tussen die twee is, wat 'n wye reeks optimaliserings op L2 moontlik maak wat nie op L1 van toepassing is nie.

### Waarom is L1-deurset beperk?

Ongelukkig ly die opheffing van die blokbeperkings op L1 aan 'n groot slaggat. Deur die groeikoers van die ketting te verhoog, verhoog ons ook die eise van vol nodusse, wat probeer om tred te hou met die mees onlangse toestand. Aangesien L1 volle nodusse al die geskiedenis moet heruitvoer, plaas 'n hoë toename in die blokgrootte (in terme van gas) 'n aansienlike spanning op hulle, wat weer lei tot swakker masjiene wat uit die stelsel val en die vermoë laat om volle nodusse te laat loop slegs aan groot genoeg entiteite. Gevolglik sal gebruikers nie self die staat kan verifieer en vertroueloos aan die netwerk deelneem nie.

Dit laat ons met die begrip dat L1-deurset beperk moet word om 'n werklik gedesentraliseerde en veilige stelsel te handhaaf.

### Waarom beïnvloed dieselfde struikelblokke nie geldigheidsopsommings nie?

**Slegs wanneer ons die volle nodusperspektief in ag neem, sien ons die ware krag wat deur geldigheid-opsommings gebied word.**'n L1-volle nodus moet die hele geskiedenis heruitvoer om die huidige toestand se korrektheid te verseker. StarkNet-nodusse hoef net STARK-bewyse te verifieer, en hierdie verifikasie neem 'n eksponensieel laer hoeveelheid berekeningshulpbronne. In die besonder, sinchronisasie van nuuts af hoef nie uitvoering te behels nie; 'n nodus kan 'n storting van die huidige toestand van sy eweknieë ontvang en slegs deur 'n STARK-bewys verifieer dat hierdie toestand geldig is. Dit stel ons in staat om die deurset van die netwerk te verhoog sonder om die vereistes vanaf die volle nodus te verhoog.

Ons kom dus tot die gevolgtrekking dat die L2-volgorder onderhewig is aan 'n hele spektrum van optimaliserings wat nie op 'n L1 moontlik is nie.

### Prestasiepadkaart vorentoe

In die volgende afdelings bespreek ons watter een tans vir die StarkNet-volgorder beplan word.

### Sequencer parallelisasie

Die eerste stap op ons padkaart was om parallelisering tot die uitvoering van die transaksie in te voer. Dit is bekendgestel in StarkNet alpha 0.10.2, wat Gister op Mainnet vrygestel is. Ons duik nou in wat parallelisering is (dit is 'n semi-tegniese afdeling, om voort te gaan op die padkaart, spring na die volgende afdeling).

So wat beteken "transaksieparallellisering"? Naïef, is dit onmoontlik om 'n blok transaksies in parallel uit te voer, aangesien verskillende transaksies afhanklik kan wees. Dit word in die volgende voorbeeld geïllustreer. Oorweeg 'n blok met drie transaksies van dieselfde gebruiker:

* Transaksie A: ruil USDC vir ETH
* Transaksie B: betaal ETH vir 'n NFT
* Transaksie C: ruil USDT vir BTC

Dit is duidelik dat Tx A voor Tx B moet gebeur, maar Tx C is heeltemal onafhanklik van beide en kan parallel uitgevoer word. As elke transaksie 1 sekonde benodig om uit te voer, kan die blokproduksietyd van 3 sekondes tot 2 sekondes verminder word deur parallelisering in te stel.

Die kern van die probleem is dat ons nie vooraf die transaksieafhanklikhede ken nie. In die praktyk, slegs wanneer ons transaksie B uit ons voorbeeld uitvoer, sien ons dat dit staatmaak op veranderinge wat deur transaksie A gemaak is. Meer formeel volg die afhanklikheid uit die feit dat transaksie B lees uit bergingselle waarna transaksie A geskryf het. Ons kan aan die transaksies dink dat dit 'n afhanklikheidsgrafiek vorm, waar daar 'n rand is van transaksie A na transaksie B iff A skryf na 'n stoorsel wat deur B gelees word, en dus uitgevoer moet word voor B. Die volgende figuur toon 'n voorbeeld van so 'n afhanklikheidsgrafiek:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

In die voorbeeld hierbo kan elke kolom parallel uitgevoer word, en dit is die optimale rangskikking (terwyl ons naïef sou transaksies 1–9 opeenvolgend uitgevoer het).

Om die feit te oorkom dat die afhanklikheidsgrafiek nie vooraf bekend is nie, stel ons***optimistiese parallelisering***, in die gees van[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)ontwikkel deur Aptos Labs, aan die StarkNet-volgorder bekend. Onder hierdie paradigma poog ons optimisties om transaksies parallel te laat loop en weer uit te voer wanneer ons 'n botsing vind. Byvoorbeeld, ons kan transaksies 1–4 vanaf figuur 1 parallel uitvoer, net om agterna uit te vind dat Tx4 afhanklik is van Tx1. Gevolglik was die uitvoering daarvan nutteloos (ons het dit relatief tot dieselfde staat waarteen ons Tx1 gehardloop het, terwyl ons dit moes bestuur het teen die staat as gevolg van die toepassing van Tx1). In daardie geval sal ons Tx4 weer uitvoer.

Let daarop dat ons baie optimaliserings kan byvoeg bo en behalwe optimistiese parallelisering. Byvoorbeeld, eerder as om naïef te wag vir elke uitvoering om te eindig, kan ons 'n uitvoering staak die oomblik wat ons 'n afhanklikheid vind wat dit ongeldig maak.

Nog 'n voorbeeld is die optimalisering van die keuse van watter transaksies om weer uit te voer. Veronderstel dat 'n blok wat uit al die transaksies van figuur 1 bestaan, in 'n volgordehouer met vyf SVE-kerns ingevoer word. Eerstens probeer ons om transaksies 1–5 parallel uit te voer. As die volgorde van voltooiing Tx2, Tx3, Tx4, Tx1 en uiteindelik Tx5 was, sal ons die afhanklikheid Tx1→Tx4 eers vind nadat Tx4 reeds uitgevoer is - wat aandui dat dit weer uitgevoer moet word. Naïef wil ons dalk Tx5 ook weer uitvoer, aangesien dit anders kan optree gegewe die nuwe uitvoering van Tx4. Maar eerder as om net al die transaksies na die nou ongeldige Tx4 weer uit te voer, kan ons die afhanklikheidsgrafiek deurkruis wat saamgestel is uit die transaksies waarvan die uitvoering reeds beëindig is en slegs transaksies wat van Tx4 afhang, weer uitvoer.

### 'n Nuwe Rust-implementering vir die Cairo-VM

Slim kontrakte in StarkNet word in Kaïro geskryf en word binne die Kaïro-VM uitgevoer, welke spesifikasie in die[Kaïro-vraestel](https://eprint.iacr.org/2021/1063.pdf)verskyn. Tans gebruik die sequencer 'n[python-implementering](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)van die Cairo-VM. Om die VM-implementeringsprestasie te optimaliseer, het ons 'n poging geloods om die VM in roes te herskryf. Danksy die groot werk van[Lambdaklas](https://lambdaclass.com/), wat nou 'n onskatbare span in die StarkNet-ekosisteem is, kom hierdie poging binnekort tot uitvoering.

Die VM se roesimplementering,[cairo-rs](https://github.com/lambdaclass/cairo-rs), kan nou inheemse Cairo-kode uitvoer. Die volgende stap is die hantering van slim-kontrakte uitvoering en integrasies met die pytoniese sequencer. Sodra dit met cairo-rs geïntegreer is, word verwag dat die sequencer se werkverrigting aansienlik sal verbeter.

### Volgorde herimplementering in Rust

Ons verskuiwing van luislang na roes om werkverrigting te verbeter, is nie beperk tot die Cairo VM nie. Benewens die verbeterings hierbo genoem, beplan ons om die sequencer van nuuts af in roes te herskryf. Benewens Rust se interne voordele, bied dit 'n geleentheid vir ander optimaliserings aan die volgorder. As ons 'n paartjie lys, kan ons die voordele van cairo-rs geniet sonder die oorhoofse koste van luislang-roes-kommunikasie, en ons kan die manier waarop die staat gestoor en toegang verkry word heeltemal herontwerp (wat vandag op die[Patricia-Trie-struktuur](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)gebaseer is).

### Wat van bewesers?

In hierdie plasing het ons nie die miskien bekendste element van geldigheidsopsommings genoem nie - die bewyser. Mens kan jou voorstel dat dit die waarskynlik mees gesofistikeerde komponent van die argitektuur is, dit die bottelnek moet wees en dus die fokus van optimalisering. Interessant genoeg is dit die meer "standaard" komponente wat nou die bottelnek van StarkNet is. Vandag, veral met[rekursiewe bewyse](https://medium.com/starkware/recursive-starks-78f8dd401025), kan ons baie meer transaksies as die huidige verkeer op Testnet/Mainnet in 'n bewys inpas. Trouens, vandag word StarkNet-blokke langs StarkEx-transaksies bewys, waar laasgenoemde soms 'n paar honderdduisend NFT-munte kan aangaan.

### Opsomming

Parallellisering, roes en meer - maak gereed vir 'n verbeterde TPS in die komende StarkNet-weergawes.