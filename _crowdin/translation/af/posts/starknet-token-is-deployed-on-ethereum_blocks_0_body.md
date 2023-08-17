### TL; DR

* Die StarkNet Token (STRK) word nou op Ethereum Mainnet ontplooi
* **Pasop vir swendelary!**StarkNet-tokens word nie te koop aangebied nie
* Dit sal tyd neem vir die Stigting om die meganisme vir die verspreiding van sy tokens te bepaal
* Tokens wat deur StarkWare-aandeelhouers, werknemers en deur onafhanklike vennootsagteware-ontwikkelaars gehou word, word vir 'n tydperk van vier jaar gesluit, met 'n geleidelike vrystelling wat na een jaar begin
* Die teken sal StarkNet se desentralisasie bevorder danksy die gebruik daarvan vir stem-, steek- en betaling van fooie

Vandag neem[StarkNet](https://starknet.io/)nog 'n stap in die rigting van desentralisasie. Die StarkNet-token is nou[op Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Herhaal vinnig: STRK sal gebruik word as 'n steekpenning vir deelname aan StarkNet se konsensusmeganismes, as 'n Bestuursbewys en vir die betaling van transaksiefooie. Die rasionaal vir elk van hierdie nutsdienste word aangebied in[ons desentralisasievoorstel](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), in die afdeling getiteld "Waarvoor sal die tokens gebruik word?"

***Pasop vir swendelary:**met die skryf hiervan is daar geen manier om StarkNet-tokens te koop nie; hierdie geen-verkope tydperk sal in plek bly tot verdere kennisgewing deur die[StarkNet Foundation](https://twitter.com/StarkNetFndn); volg amptelike kommunikasie van die StarkNet-stigting om te wete te kom van enige opdaterings aan die status van STRK. Jy kan swendelary rapporteer en kyk vir ander verslae van swendelary in die[swendelary-verslag](https://discord.gg/qypnmzkhbc)kanaal op die[StarkNet Discord](http://starknet.io/discord)bediener.*

Hierdie pos verduidelik die tokentoewysingsproses, en hoe die ontplooide tokenkontrakte twee van die teken se drie ontwerpte nutsdienste dien, naamlik stemming en staking. Die derde nutsprogram - die betaling van StarkNet-fooie - sal later bespreek word.

### Beplan die token-toekenningsproses

Ons het voorheen 'n[plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)voorgestel vir die aanvanklike toekenning van die tokens. Tokens wat aan aandeelhouers, werknemers en onafhanklike sagteware-ontwikkelaars toegeken word, word vir vier jaar gesluit, met 'n geleidelike vrystellingskedule wat na een jaar begin. Geslote tokens kan gebruik word om te stem en te steek, maar kan nie oorgedra of verhandel word nie. Sommige van die tokens word gesluit via 'n toegewyde slim kontrak op Ethereum, terwyl ander tokens deur bewaarders gesluit word.

Afsonderlik word 50.1% van die bestaande StarkNet-tokens aan die StarkNet-stigting toegeken, om gebruik te word om sy[doelwitte](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)te bereik (vgl.[StarkWare se plasing](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Hierdie tekens is nie gesluit nie. Die Stigting sal egter tyd nodig hê om die presiese meganisme te formuleer om daardie tokens verder toe te ken en sal sy planne betyds deel.

#### Hoekom toesluit?

Deur die tokens vir die bogenoemde tydperk te sluit, verseker dat huidige bydraers ooreenstem met die langtermyn-aansporings van StarkNet. Dit ontmoedig ook spekulasie oor die teken vooraf van wydverspreide gebruik vir die beoogde doeleindes: beveiliging van die netwerk, betaling van fooie en desentralisering van bestuur.

Vervolgens verduidelik ons hoe die token-implementering stem en staking ondersteun.

### Stem

Die Stigting sal in beheer wees van die fasilitering van gesonde bestuur en die formulering van die stemmeganismes. Die StarkNet-token is ontwerp om beide direkte stemming en 'n reeks delegeringsmeganismes toe te laat.

#### L1 stem

Die ERC-20-implementering wat nou ontplooi is, sluit**opsionele**gebruik van Compound se[delegeringsmodule](https://docs.compound.finance/v2/governance/)in. Hierdie module word wyd gebruik vir on-chain stemming. Die rede waarom dit op StarkNet opsioneel is, en by verstek afgeskakel is, is koste-oorweging. As u dit aanskakel, beteken dit dat elke oordrag van die StarkNet-tokens op L1 ekstra gas benodig slegs vir die doel om verskuiwings in stemkrag op te spoor.

#### Nie-L1-stemming

Alternatiewe vir L1-aan-ketting-stemming met Compound se delegasie-module sluit buite-ketting-stemming in, sowel as StarkNet-gebaseerde on-ketting stemstelsels (soos[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Hierdie alternatiewe, wat gasverbruik vir L1-oordragte aansienlik verminder, benodig nie eksplisiete ondersteuning van die ERC-20-kode wat tans ontplooi word nie, en word dus inherent ondersteun.

Soos hierbo genoem, sal alle tekens – gesluit en ontsluit – in StarkNet se stemmeganisme bruikbaar wees.

### Staking

StarkNet se toestemminglose en sensuurbestande werking vereis ewekansige seleksie van opeenvolgers. Die waarskynlikheid dat 'n nodus gekies word om 'n blok te volgorde en voor te stel, is eweredig aan die aantal StarkNet-tokens wat nodus inspan. Die rasionaal vir die gebruik van StarkNet-tokens (eerder as byvoorbeeld Ethereum of Bitcoin) word in die[bestuursvoorstel](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)verduidelik, en die presiese besonderhede van staking, volgordebepaling en blokskepping op StarkNet word deurlopend[bespreek deur die gemeenskap](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), en word nog afgehandel moet word.

Soos met stem, kan tokens gebruik word vir staking, selfs wanneer hulle gesluit is. Dit dra by tot die diversiteit van die StarkNet-operateurs en tot die veerkragtigheid van StarkNet.

### Opsomming

Die ontplooiing van die StarkNet Token-kontrakte op Ethereum is nog 'n stap in StarkNet-desentralisasie.

Ons doen 'n beroep op ontwikkelaars en gebruikers om versigtig te wees vir swendelary! Ten tyde van publikasie is geen tokens verhandelbaar nie, en hierdie geen-handelstatus sal in plek bly tot verdere kennisgewing deur die StarkNet-stigting.

Vir meer vrae kan jy na die[Token-discussions](https://discord.gg/qypnmzkhbc)kanaal op die[StarkNet Discord](http://starknet.io/discord)bediener gaan.