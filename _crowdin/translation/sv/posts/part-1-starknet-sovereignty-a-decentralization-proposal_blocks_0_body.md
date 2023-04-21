### TL;DR

* StarkNet’s decentralisering innebär ett inhemskt tecken och en ny grund.
* StarkNet token används för styrning och som nätverkets betalning och insats.
* Tio miljarder tokens har präglats och fördelningen av dem har börjat.
* StarkNet Foundation, som nu startas, kommer att ha ett uppdrag att upprätthålla StarkNet som en allmännyttig nyttighet.

StarkNet är ett tillståndsfritt decentraliserat lager 2 (L2) giltighet rollup, byggt för att tillåta Ethereum att skala via kryptografiska protokoll som kallas STARKs, utan att äventyra Ethereums centrala principer om decentralisering, öppenhet, inkludering och säkerhet.

StarkNet’s Alpha lanserades på Mainnet i november 2021. Mindre än ett år i ett ekosystem håller på att bildas, med dussintals team över hela världen arbetar med det. Nu är det dags att främja decentraliseringen av nätverket, så det uppnår livskraften, Censur motstånd, öppenhet och inkludering krävde ett L2 på Ethereum.

Decentralisering innebär att nätverkets verksamhet och utveckling inte kommer att förlita sig på någon enskild enhet, inklusive StarkWare. En tillståndsfri proof-of-stake valmekanism och on-chain betalning av transaktionsavgifter, båda med en inhemsk token, kommer att göra det möjligt för nätverket att fungera tillförlitligt som en L2 på Ethereum även om StarkWare skulle upphöra att existera. Beslut om det pågående underhållet av StarkNet kommer att flyttas från StarkWare till samhället. En StarkNet Token och Foundation kommer att vara viktiga delar i detta arbete.

Detta inlägg, den första av tre som publiceras samtidigt, sammanfattar Starknets resa hittills och introducerar StarkNet Token och StarkNet Foundation. Nästa inlägg[](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)diskuterar StarkNet styrningsmodell och den[tredje](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)fokuserar på StarkNet token modell.

*Vi tackar följande StarkNet supportrar (alfabetiskt ordnat) för deras kommentarer på ett utkast av dessa inlägg: Guily_Gioza (Topologi), Itamar Lesuisse (Argentina), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) och Tomasz Stan<unk> czak (Nethermind).*

### Berättelsen hittills

[StarkNet](https://starknet.io/)är byggt av kryptografi och ett öppet ekosystem. **kryptografi**är**[STARKs](https://eprint.iacr.org/2018/046.pdf)**. Dessa är protokoll baserade på matematik som skala Ethereum av storleksordningar. De kräver ingen betrodd inställning, är post-quantum säker, och kan användas kortfattat i alla skalor. Ekosystemet består av kärnutvecklare som i åratal har velat bygga infrastruktur och verktyg för att skala blockkedjeteknik, såväl som nya och kreativa tillämpningsområden som blir möjliga när beräkningskapaciteten i Ethereum utökas.

StarkNet ger alla utvecklare och användare tillgång till skalan och säkerhetsfördelarna med STARKs, i syfte att skala Ethereum samtidigt som Ethereums kärnvärden bibehålls. STARKs uppfanns av grundarna av StarkWare, som först använde dem för att bygga[StarkEx](https://starkware.co/starkex/)skalningslösning för kunder. Därefter byggde StarkWare och andra utvecklarteam (gemensamt “Core Contributors”)[StarkNet](https://starkware.co/starknet/), en publik, decentraliserad, och tillståndsfri infrastruktur, för att se till att dessa skalningstekniker är tillgängliga för alla i evighet.

Lanseringen av StarkNet Alpha för nästan ett år sedan ledde till uppkomsten av ett större ekosystem som har åtagit sig att bygga och vårda StarkNet. Det finns många team av utvecklare över hela världen bygga sin kärninfrastruktur, liksom nya program på den.

### **Vägen till decentralisering**

STARK tekniken är mogen och säker, men StarkNet har inte uppnått status som en offentlig bra som Ethereum eller Internet. För att StarkNet ska nå detta mål måste styrning, drift och utveckling fortsätta att decentraliseras. Detta kommer att underlättas genom två mekanismer:**StarkNet Foundation**och**StarkNet Token**.

#### Stiftelse

Som en ideell organisation, Stiftelsens uppdrag är att upprätthålla StarkNet som en allmännyttig vara eller tjänst som görs tillgänglig för alla samhällsmedlemmar. StarkNet är tillåten infrastruktur som ska vara tillgänglig för alla. Den måste upprätthållas väl för att vara säker och effektiv för allmänhetens bruk. Den får inte heller diskriminera mellan användare.

Stiftelsen kommer att finansieras genom ett engångsbidrag av StarkNet Tokens. Det kommer att uppmuntra utvecklingen av nedifrån och upp-mekanismerna för gemenskapens beslutsfattande i viktiga tekniska frågor, såsom protokolluppdateringar, tvistlösning och finansiering av kollektiva nyttigheter.

#### Token

StarkNet Token behövs för att driva ekosystemet, upprätthålla och säkra det, besluta om sina värderingar och strategiska mål och styra dess utveckling. Detta tecken kommer att krävas för (i) styrning, (ii) betalning av transaktionsavgifter på StarkNet och (iii) deltagande i Starknets konsensusmekanism.

Vi har präglat en första tio miljarder tokens som tilldelas Core Contributors av StarkNet ekosystem inklusive StarkWare och StarkWares investerare, till StarkNet mjukvaruutvecklare partners och till stiftelsen. Snart (mål: September 2022) kommer att gå på Ethereum som en ERC-20-token och begäras för användning i styrningen och röstning på nätverksuppgraderingar. Senare kommer StarkNet avgifter endast betalas i detta tecken, samtidigt som bra användarupplevelse garanteras för användare som är intresserade av att betala avgifter i ETH. Senare fortfarande, automatisk minting av ytterligare StarkNet Tokens kommer att börja, (dvs antalet cirkulerande polletter kommer att vara större än tio miljarder).

StarkNet Token modellen betonar att kompensera utvecklare för deras arbete. En del av nya präglings- och transaktionsavgifter — avgifter som bedöms för användning av StarkNet — kommer att beviljas till kärninfrastrukturutvecklare och smarta kontraktsutvecklare för det arbete de har gjort för att utforma och lansera protokollet, Förutom att kompensera StarkNet-operatörer för det arbete de har gjort för att driva den.

Den fullständiga logiken bakom en ny och dedikerad StarkNet Token förklaras i vår[andra inlägget](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), och StarkNet Token designprinciper och initial allokering diskuteras i[tredje inlägget](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).