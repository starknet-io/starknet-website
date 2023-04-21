Teknologisk innovation i blockchain har blomstret i de seneste par år — STARKs, SNARKs, EIP-1559, Ethereum Merge — er alle enorme teknologiske resultater. Men UX og UI design har undladt at holde op. Folk sidder stadig fast på 16-ord seed-fraser, og at komme ind i DeFi uden en centraliseret mellemmand er stadig for intimiderende for mange . At ombord på de næste milliarder brugere i Web3, forbedre brugeren onboarding oplevelse er afgørende.

Som FTX demonstrerede (og Gemini, Celsius og Mt. Gox), bevare selvforsynende over ens aktiver er afgørende vigtig. Men indtil for nylig har selvstændige custodial tegnebøger været klodset og forvirrende for den gennemsnitlige bruger. De fleste mennesker glemmer deres Web2 adgangskoder på månedsbasis; hvordan forventes brugerne at holde deres seed-frase og private nøgler sikre for evigheden?

Kort sagt, det er et sikkerhedsmareridt. Som vi har set utallige gange, én forkert træk, uanset om initieret af dårlige skuespillere eller forsømmelighed, kan resultere i tab af millioner af dollars.

Som det første kontaktpunkt for nye krypto-brugere, skal Ethereum tegnebøger være let at bruge, sikre og tilpasses til hver brugers behov. Dette kræver, at udviklere til at integrere enkelheden i Web2 finansielle produkter med funktionerne i Web3.

Dette er præcis, hvad konto abstraktion opnå.

Konto abstraktion forbedrer sikkerheden og sikkerheden af selv-custodial tegnebog produkter ved at fjerne brugernes tillid til den private nøgle og gøre tegnebøger mere programmerbare. Med denne forbedrede UX, kan ikke-custodial tegnebøger endelig skalere til millioner af mainstream krypto-brugere.

Men for fuldt ud at forstå virkningen af kontoens abstraktion, må vi genopfriske os selv med hensyn til, hvordan Ethereum regnskabet fungerer.

### Grundlæggende træk ved Ethereum konti

Der er to typer af Ethereum konti:

1. Eksternt Ejede Konti (EOA)
2. Kontrakt Konti (CA)

Lad os opdele hver en smule yderligere.

### Eksternt ejede konti

Eksternt ejede konti, som MetaMask og Coinbase Wallet, er den typiske kontotype for Ethereum brugere. Hver EOA består af en privat og offentlig nøgle, kaldet et keypair.

Alle transaktioner er autoriseret og signeret af private nøgler. Når en transaktion er underskrevet, kontrollerer EVM, at underskriften er gyldig ved hjælp af EOA's kontoadresse. Den hårdkodede logik i EVM betyder, at kontoen (objektet med dine tokens) og den private nøgle (underskriver) er koblet som én.

At miste din private nøgle betyder at miste dine penge eller endda kontrol over din konto for evigt.

### Kontrakt konti

I mellemtiden, kontrakt konti, synonymt med konto abstraktion, er intelligente kontrakter indsat på Ethereum blockchain. Disse kontrakter styres af kode logik og kræver ikke private nøgler. I modsætning til EOAs kan aftalekonti ikke igangsætte transaktioner. I stedet udløses deres transaktioner af instrukser fra EOA.

### Hvorfor konto abstraktion spørgsmål

Konto abstraktion indebærer abstraktion af den hårdt kodede autorisationslogik væk fra EOA at gøre hver konto til en programmerbar smart kontrakt, der kan skræddersys til at opfylde behovene hos enhver person.

Som forklaret af Argent medstifter og Chief Science Officer Julien Niset i en nylig[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv), denne fleksible autorisationslogik giver udviklere frihed til at lege med kontofunktioner som…

**Hardwaresignere:**Ved hjælp af en iPhone eller Androids sikre enklave til at gøre enhver smartphone til en hardwaretegnebog. Derfra kan brugerne verificere transaktioner ved hjælp af biometriske data som et fingeraftryk eller Apple Face ID. Vi er allerede begyndt at se self-custodial tegnebøger som Braavos[udrulle denne funktion.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Tillad brugere at betale gasgebyrer i et hvilket som helst token, eller endda have en tredjeparts-designet mekanisme betale for transaktioner.

**Social Recovery:**I tilfælde af at en privat nøgle er tabt eller kompromitteret, kan brugerne godkende en ny nøgle som en legitim tegnebogsejer. Dette kan omfatte en række genoprettelsesmetoder gennem betroede kontakter, hardwaretegnebøger eller tredjepartstjenester. Ideen er at gøre inddrive adgang til din konto så let som at gendanne din bankkonto adgangskode via en e-mail.

**Multifaktor Authentication:**I lighed med den almindelige Web2 2FA praksis, brugere kan konfigurere to (eller flere) godkendelsesmetoder for deres kryptotegnebøger, hvis en transaktion kun er underskrevet, når en bruger bekræfter godkendelsen via en anden mulighed såsom e-mail eller SMS. Brugere kan også oprette daglige overførselsgrænser eller lister over kontoadresser, som tegnebogen automatisk blokeres for at interagere med.

**Quantum Resistant and Gas-Efficient Signatures:**Ethereums current signature scheme, ECDSA, er beregningsmæssigt omfattende (læs: højere gasgebyrer) og kan brydes af kvante computere. Gennem signaturabstraktion, bruger forskellige kontokontrakter mere effektive og kvantesikre signaturordninger. StarkNet bruger sin egen proprietære STARK-venlige kurve.

Disse funktioner giver ikke kun brugerne større sikkerhed og større fleksibilitet, men endnu vigtigere, et langt**bedre**brugeroplevelse.

Opført af Vitalik Buterin som en “lang tid drøm” for Ethereum udvikler samfund, innovationer omkring konto abstraktion, hovedsagelig EIP-2938 og EIP-3074, har hvirvlet siden 2020. Men begge krævede afvejninger omkring sikkerhed og gennemførelse. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), den hidtil mest lovende udvikling foreslår en version af kontoabstraktion uden at kræve ændringer i Ethereum-protokollen.

### **Konto abstraktion og Starknet**

I modsætning til Bitcoin og Ethereum, som eftermonterer deres nuværende protokoller til at understøtte kontoabstraktion, har[StarkNet](https://starkware.co/starknet/)implementeret kontoabstraktion siden første dag. Sammen med skalerbarheden og kapaciteten i vores STARK-beviser er potentialet for tegnebogsinnovation ubegrænset. Det er derfor, at den næste generation af selv-vognmænd som Argent og Braavos i øjeblikket er ved at blive bygget oven på vores netværk.

StarkNet ‘ s tilgang svarer til EIP-4337,[erkendelse af, at](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)fuldstændig kontoabstraktion stadig ville resultere i forvirrende UX og[kunne åbne døren](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)til angreb på sequencere. Tværtimod har det til formål at opnå både signatur abstraktion og betaling abstraktion ved at forene nogle af de krævede på og off-chain infrastruktur.

Og mens der er stadig meget mere arbejde at gøre, konto abstraktion er at få trækkraft ud over en lille cirkel af krypto indfødte. I december foreslog[Visa idéen](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)om at bruge kontoabstraktion til at oprette automatiske tilbagevendende betalinger på StarkNet. Ved hjælp af en delegerbar konto, kan brugere give tilladelse til at indlede en betaling til en forhåndsgodkendt smart kontrakt. Derfra vil den smarte kontrakt blive programmeret til at fratrække et fastsat betalingsbeløb på en bestemt dag, over en fastsat varighed af tid. Mens Visa endnu ikke har afsløret sine planer for sine egne tjenester, interessen alene taler mængder, og kan forudse en verden, hvor big-tech abonnementsplatforme som Netflix og Spotify kunne omfavne krypto-adoption.

Med hensyn til hvad fremtiden holder, vil kun tiden vise. Men én ting er sikker. Ved at gøre tegnebøger nemmere og sikkert at bruge, kontoabstraktion vil tjene som en kraftfuld katalysator for selv-custodial blockchain tegnebøger til at skalere til millioner af mainstream krypto-brugere. Vi vil holde på at bygge i mellemtiden.