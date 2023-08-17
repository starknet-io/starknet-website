### TL;DR

* StarkWare erbjuder ett utbud av Data Availability (DA) lägen för kunder att välja mellan, enligt deras prioritet
* Det finns tre metoder för datatillgänglighet för STARK korrektur, alla av dem är redan tillgängliga i produktionen:\
  —**Rollup**: huvudboken publiceras direkt på blockkedjan\
  —**Validium**: en Data Availability Committee säkrar avsatsen, med endast en hash som lagras i kedjan\
  —**Volition**: appar kan låta användare välja sitt DA-läge — Rollup eller Validium — för varje transaktion
* Oavsett vilken DA som används — giltigheten av alla transaktioner garanteras av STARKs

### Introduktion

Från och med november 2022,[StarkEx](https://starkware.co/starkex/)har bosatt över 750 miljarder dollar i handelsvolym, och över 270 miljoner transaktioner på Ethereum. I NFT-utrymmet driver appar som ImmutableX och Sorare, StarkEx har präglat över 85 miljoner NFTs till ett pris som är 1000x billigare än att göra detta direkt på Ethereum. STARK-baserad teknik är skalning Ethereum. Till exempel, i en enda vecka, StarkEx körde 1,6x antalet transaktioner som Ethereum (12m på StarkEx vs 7. m på Ethereum) samtidigt som mindre än 0,1 % av Ethereum blockspace. Och det gör allt detta samtidigt som användarna ges samma nivå av säkerhet som om de bosatte sig direkt på Ethereum.

### Hur uppnår StarkWare detta?

Användare skickar transaktioner på Layer 2 (antingen StarkEx eller StarkNet), som satsas och skickas till ett STARK-prover. Denna STARK prover vet tillståndet av huvudboken före och efter dessa transaktioner har behandlats. Provern producerar ett STARK bevis som vittnar om giltigheten av den nya staten av huvudboken efter att dessa transaktioner har genomförts. Den nya staten och STARK bevis skickas till on-chain STARK verifier. Verifieringen av detta bevis sker självständigt via ett oföränderligt smart kontrakt på Ethereum.

Denna arkitektur ger det bästa av två världar: vi kan ha låga transaktionskostnader, samtidigt som vi fortfarande har Ethereum i mitten som en neutral skiljeman. Ethereum som en skiljedomare är inte bara en trevlig att ha; det ger kritisk säkerhet till slutanvändaren. En användartransaktion kan nu vara säker på att deras fonder är säkrade av Ethereum, och transaktioner är oföränderliga när de väl har verifierats på Ethereum. Användaren har också fullständig självvård av sina pengar. Självförvar är viktigt eftersom det säkerställer att användaren har tillgång till sina pengar hela tiden, utan att förlita sig på någon tredje part.

### Var passar tillgången till data in i allt detta?

Det är viktigt att betona både vad detta bevis gör och vad det är*inte*gör. Beviset bekräftar giltigheten av den nya staten, men det är inte att tala om för dig vad den nya staten är. För det behöver du data tillgänglighet. Om vi bara har bevis, då blockkedjan vet att vad som lämnades in är giltigt, men det vet inte vad det nya tillståndet (t.ex. ledger balans) är! Konsumenter av denna information inkluderar användare som har transaktioner inom dessa bevis. Uppgifterna bör göras tillgängliga för dem om de vill ta ut pengar på Ethereum utan att behöva lita på Layer 2-operatören. Detta ger användarna full självvård av sina pengar.

En analogi för detta är din gymnasielärare ber dig att bevisa att x är lika med x. Detta är trivialt att bevisa. Vad är svårare att svara: vad är x faktiskt lika med? För det behöver du en separat information. Det kan vara att x är lika med 5, eller ett annat värde. På blockkedjan kan också ett STARK-bevis skickas till en STARK-verifierare smart kontrakt för verifiering. Och verifieraren kan intyga att beviset är giltigt (dvs x=x). Men du behöver en separat ingång för att berätta vad x (den nya huvudboksbalansen) är.

Det finns tre metoder för att göra dessa data tillgängliga:

#### Upprullningsläge

Rollup läget ser till att statusen på huvudboken lagras på Ethereum tillsammans med bevisen. Rollup mode används för närvarande av[dYdX](https://dydx.exchange/)i produktion, och används även av[Public StarkNet](http://starknet.io/)L2 nätverk. Fördelarna här är tydliga: man kan återskapa läget i huvudboken genom att bara interagera med Ethereum blockchain. Innebörden av detta är att du, som slutanvändare, kan lita på att tala med relevanta smarta kontrakt på Ethereum, och ta ut dina pengar även om Layer 2-systemet stängs.

#### Validium

Under Rollup Mode, majoriteten av Ethereum gaskostnader går till Data Availability, och inte bevis verifiering. Detta beror på att det är mycket gasintensiv att lagra data på blockkedjan. I Validium-läge skickas inte huvudboksinformationen till Ethereum. Snarare lagras den off-chain med en Data Availability Committee. Ethereum lagrar en hash av denna huvudbok information. Denna Data Availability Committee består av ett beslutförhet av oberoende medlemmar som övervakar korrekt statlig uppdatering samt behålla en kopia av de data som behandlades. Varje StarkEx instans kan skapa sitt eget beslutförhet. Quorum-medlemmar för befintliga appar som körs på StarkEx inkluderar enheter som[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)och[Cephalopod](https://cephalopod.equipment/).

Fördelarna här är tydliga. Det finns ingen anledning att betala Ethereum gasavgifter för att lagra huvudboken information on-chain. Snarare är det enda som lagras på Ethereum ett enda hasch av huvudboksinformationen. Om du vill ta ut pengar från Layer 2 på ett pålitligt sätt genom att prata med Ethereum, du behöver bara den digitala signaturen av en av medlemmarna i Data Availability kommittén. DAC medlemmar kommer att använda kryptografi för att bevisa att du har äganderätt till dessa medel.

En annan dold fördel med Validium Data Availability är sekretess från personer som läser blockchain. Under Rollup Mode, är saldot på varje konto vid den tidpunkt som varje bevis lämnas in känd för allmänheten. Med Validium är denna data dold från blockkedjan – endast Data Availability Committee är medveten om detta, eftersom den hålls utanför kedjan. Denna nivå av sekretess möjliggör en mängd olika användningsfall där det är viktigt att fördunkla transaktionsdata.

#### Vilja

Volition är en arkitektur för datatillgänglighet som ger valet mellan Validium och Rollup Mode på transaktionsnivå. Det gör detta genom att hålla en huvudbok på kedja, och en annan huvudbok med en Data Availability Committee. Användare kan välja mellan Validium och Rollup för varje enskild transaktion.

Föreställ dig att du köper en riktigt dyr NFT som en Bored Ape eller en Cryptopunk, på en app som körs på StarkEx. Du kanske vill använda Rollup Mode för att skydda data för den NFT, eftersom du vill ha ett register över den specifika transaktionen som lagras på Ethereum. Du kan dock köpa en riktigt billig NFT (t.ex. en kappa för din karaktär i ett blockchain-spel), och under den omständigheten kommer du gärna att spara pengar genom att använda Validium.

Om du är intresserad av den skala som uppnåtts genom STARK korrektur, kom då och bygg på oss.



Du kan alltid maila[info@starkware.co](mailto:info@starkware.co)och en människa kommer till din e-post.