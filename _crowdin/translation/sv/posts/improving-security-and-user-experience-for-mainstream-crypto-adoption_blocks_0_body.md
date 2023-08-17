Teknisk innovation i blockchain har blomstrat under de senaste åren — STARKs, SNARKs, EIP-1559, Ethereum Merge — är alla enorma tekniska landvinningar. Dock har UX och UI design misslyckats med att hänga med. Människor fastnar fortfarande på 16 ord fröfraser, och att komma in i DeFi utan en centraliserad mellanhand är fortfarande alltför skrämmande för många. Att ombord på nästa miljard användare i Web3, att förbättra användarens upplevelse ombord är kritiskt.

Som FTX demonstrerade (och Gemini, Celsius och Mt. Gox) är det ytterst viktigt att behålla sin egen vårdnad om sina tillgångar. Men tills nyligen, självförvarade plånböcker har varit klumpiga och förvirrande för den genomsnittliga användaren. De flesta människor glömmer sina Web2 lösenord på en månatlig grund; hur förväntas användare att hålla sina seed phrase och privata nycklar säkra i evigheten?

Enkelt uttryckt, det är en säkerhet mardröm. Som vi har sett otaliga gånger, ett felaktigt drag, vare sig initierat av dåliga aktörer eller försumlighet, kan resultera i förlust av miljontals dollar.

Som första kontaktpunkt för nya kryptoanvändare måste Ethereum plånböcker vara lätt att använda, säkra och anpassningsbara för att passa varje användares behov. Detta kräver utvecklare att integrera enkelheten i Web2 finansiella produkter med funktionerna i Web3.

Detta är exakt vad kontoutdrag åstadkommer.

Kontoabstraktionen förbättrar säkerheten och säkerheten för självförvarade plånboksprodukter genom att ta bort användarnas beroende av den privata nyckeln och göra plånböckerna mer programmerbara. Med denna förbättrade UX kan icke-förmyndarplånböcker slutligen skala till miljontals vanliga kryptoanvändare.

Men för att till fullo förstå effekterna av kontoabstraktion måste vi fräscha upp oss på hur Ethereums räkenskaper fungerar.

### Grunderna i Ethereum konton

Det finns två typer av Ethereum konton:

1. Externt ägda konton (EOA)
2. Kontraktskonton (CA)

Låt oss bryta ner varje lite längre.

### Externt ägda konton

Externt ägda konton, som MetaMask och Coinbase Wallet, är den typiska kontotypen för Ethereum-användare. Varje EOA består av en privat och offentlig nyckel, som kallas ett nyckelpar.

Alla transaktioner är auktoriserade och signerade av privata nycklar. När en transaktion är signerad verifierar EVM att signaturen är giltig med EOA:s kontoadress. Den hårdkodade logiken i EVM innebär att kontot (objektet som håller dina tokens) och den privata nyckeln (undertecknare) är kopplade som ett.

Att förlora din privata nyckel innebär att förlora dina pengar, eller ens kontroll över ditt konto, för evigt.

### Kontraktskonton

Samtidigt kontraktskonton, synonymt med kontosumning, är smarta kontrakt som distribueras på Ethereum blockchain. Dessa kontrakt styrs av kodlogik och kräver inga privata nycklar. Till skillnad från EOA kan kontraktskonton inte initiera transaktioner. Istället utlöses deras transaktioner av instruktioner från EOA.

### Varför kontots abstraktion spelar roll

Konto abstraktion innebär att abstrahera den hårdkodade auktoriseringslogiken från EOA, förvandla varje konto till ett programmerbart smart kontrakt som kan skräddarsys för att möta behoven hos alla individer.

Som förklaras av Argent medgrundare och Chief Science Officer Julien Niset i en nyligen[Stark @ Home Event](https://www.crowdcast.io/e/7olimxqv), denna flexibla auktoriseringslogik ger utvecklare frihet att spela runt med kontofunktioner som…

**Hårdvarusigners:**Använda en iPhone eller Android säker enklav för att förvandla någon smartphone till en hårdvaruplånbok. Därifrån kan användare verifiera transaktioner med hjälp av biometriska data som ett fingeravtryck eller Apple Face ID. Vi har redan börjat se självförvarade plånböcker som Braavos[rulla ut denna funktion.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Tillåt användare att betala gasavgifter i valfri form eller till och med ha en tredjepartsdesignad mekanism som betalar för transaktioner.

**Social Recovery:**I händelse av att en privat nyckel förloras eller äventyras kan användare godkänna en ny nyckel som legitim plånboksägare. Detta kan omfatta en mängd olika återvinningsmetoder genom betrodda kontakter, hårdvaruplånböcker eller tjänster från tredje part. Tanken är att återfå åtkomst till ditt konto lika enkelt som att återställa lösenordet till ditt bankkonto via ett e-postmeddelande.

**Multifactor Autentisering:**Liknande den vanliga Web2 2FA metoder, användare kan ställa in två (eller flera) autentiseringsmetoder för sina kryptoplånböcker, där en transaktion endast signeras när en användare bekräftar godkännandet via ett andra alternativ som e-post eller SMS. Användare kan också ställa in dagliga överföringsgränser eller listor över kontoadresser som plånboken automatiskt blockeras från att interagera.

**Kvantresistenta och gaseffektiva signaturer:**Ethereums nuvarande signatursystem, ECDSA, är beräkningsmässigt omfattande (läs: högre gasavgifter) och kan brytas av kvantdatorer. Genom signaturabstraktion använder olika kontoavtal effektivare och kvantsäkra signatursystem. StarkNet använder en egen STARK-vänlig kurva.

Dessa funktioner ger inte bara användarna större säkerhet och mer flexibilitet, utan ännu viktigare, resultera i en mycket**bättre**användarupplevelse.

Vitalik Buterin listas av Vitalik Buterin som en “lång tids dröm” för utvecklargemenskapen, innovationer kring kontoabstraktion, främst EIP-2938 och EIP-3074, har virvlat sedan 2020. Båda krävde dock kompromisser kring säkerhet och genomförande. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), den mest lovande utvecklingen hittills, föreslår en version av kontoabstraktion utan att kräva ändringar i Ethereum-protokollet.

### **Konto abstraktion och Starknet**

Till skillnad från Bitcoin och Ethereum som eftermonterar sina nuvarande protokoll för att stödja kontoabstraktion,[StarkNet](https://starkware.co/starknet/)har implementerat kontoabstraktion sedan dag ett. I kombination med skalbarheten och kapaciteten hos våra STARK-bevis är potentialen för plånboksinnovation obegränsad. Det är därför som nästa generation av självförvarade plånböcker, som Argent och Braavos, för närvarande byggs ovanpå vårt nätverk.

StarkNet’s tillvägagångssätt liknar EIP-4337,[Att erkänna att](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)fullständig kontoabstraktion fortfarande skulle resultera i förvirrande UX och[kunde öppna dörren](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)för attacker mot sequencers. Snarare syftar det till att uppnå både signatur abstraktion och betalning abstraktion genom att mutualisera en del av de krav på och utanför kedjans infrastruktur.

Och medan det fortfarande finns mycket mer arbete att göra, redovisningsabstraktion vinner dragkraft bortom en liten cirkel av kryptoinfödda. I december föreslog[Visa idén](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)att använda kontoutdrag för att ställa in automatiska återkommande betalningar på StarkNet. Genom att använda ett delegerat konto kan användare bevilja tillstånd att inleda en betalning till ett förgodkänt smart kontrakt. Därifrån kommer det smarta kontraktet att programmeras för att dra av ett fastställt betalningsbelopp på en viss dag, under en bestämd tidsperiod. Medan visum ännu inte har avslöjat sina planer för sina egna tjänster, bara intresset talar volymer, och kan förebåda en värld där stora tekniska prenumerationsplattformar som Netflix och Spotify kan omfamna kryptoadoption.

När det gäller vad framtiden håller så kommer bara tiden att berätta. Men en sak är säker. Genom att göra plånböcker enklare och säkrare att använda, kontoabstraktion kommer att fungera som en kraftfull katalysator för självförvarade blockkedjeplånböcker för att skala till miljontals vanliga kryptoanvändare. Vi kommer att fortsätta bygga under tiden.