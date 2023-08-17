Technologische innovatie in blockchain heeft de afgelopen jaren gefloreerd — STARKs, SNARKs, EIP-1559, de samenvoeging van Ethereum — zijn allemaal enorme technologische prestaties. Het ontwerp van UX en UI is echter niet bijhouden. Mensen stoppen nog steeds met 16-woord-seed-frasen en het is voor veel mensen nog te intimiderend om zonder een gecentraliseerde tussenpersoon in het departement te komen. Het is cruciaal om de volgende miljard gebruikers in Web3 op te nemen, de onboardingervaring van de gebruiker te verbeteren.

Zoals FTX heeft aangetoond (en Gemini, Celsius en Mt. Gox) is het behoud van zelfvoogdij over zijn activa van cruciaal belang. Eigen voogdiale portemonnees zijn tot voor kort echter onhandig en verwarrend geweest voor de gemiddelde gebruiker. De meeste mensen vergeten hun Web2-wachtwoorden op maandelijkse basis; hoe worden gebruikers geacht hun herstelzin en privé sleutels voor eeuwig veilig te houden?

Eenvoudig gezegd: het is een veiligheidsnachtmerrie. Zoals we ontelbare keren hebben gezien, kan één verkeerde stap, of deze nu is geïnitieerd door slechte spelers of nalatigheid, leiden tot het verlies van miljoenen dollars.

Als eerste contactpunt voor nieuwe crypto-gebruikers moet Ethereum wallets makkelijk te gebruiken, veilig en aanpasbaar zijn om aan de behoeften van elke gebruiker te voldoen. Dit vereist dat ontwikkelaars de eenvoud van Web2 financiële producten integreren met de functies van Web3.

Dat is precies wat een rekeningsabstractie oplevert.

Account abstractie verbetert de veiligheid en beveiliging van zelfbewakingsportemonnee-producten door het verwijderen van het vertrouwen van gebruikers op de private sleutel en het maken van portemonnees meer programmeerbaar. Met deze verbeterde UX kunnen non-custodiale portemonnees eindelijk schalen naar miljoenen mainstream crypto-gebruikers.

Maar om de impact van abstractie van de rekening volledig te begrijpen, moeten we onszelf vernieuwen op hoe Ethereum-rekeningen werken.

### De basis van Ethereum-accounts

Er zijn twee soorten Ethereum-accounts:

1. Extern eigendom accounts (EOA)
2. Contract Accounts (CA)

Laten we alles wat verder opsplitsen.

### Extern eigendom accounts

Extern eigendom accounts, zoals MetaMask en Coinbase Wallet, zijn typische accounttype voor Ethereum-gebruikers. Elke EOA bestaat uit een private en publieke sleutel, genaamd een sleutelpaar.

Alle transacties zijn geautoriseerd en ondertekend door private keys. Zodra een transactie is ondertekend, controleert het EVM of de handtekening geldig is met behulp van het account van EOA. De hard gecodeerde logica in het EVM duidt erop dat het account (het object dat je tokens behoudt) en de persoonlijke sleutel (signer) als één zijn gekoppeld.

Het verliezen van uw private key betekent het verliezen van uw geld, of zelfs het beheren van uw rekening, voor altijd.

### Contractaccounts

Ondertussen zijn contractaccounts, synoniem met account-abstractie, smart contracts geïmplementeerd op de Ethereum-blockchain. Deze contracten worden bepaald door code logica en vereisen geen private keys. In tegenstelling tot EOA's kunnen contractrekeningen geen transacties initiëren. In plaats daarvan worden hun transacties geactiveerd door instructies van EOA's.

### Waarom de samenvatting van het account belangrijk is

Account abstractie houdt in dat de hard gecodeerde autorisatie logica van EOA's wordt abstract, maak van elke rekening een programmeerbaar slim contract dat kan worden afgestemd op de behoeften van elk individu.

Zoals uitgelegd door Argent medeoprichter en Chief Science Officer Julien Niset in een recente[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv), deze flexibele autorisatie logica geeft ontwikkelaars vrijheid om te spelen met accountfuncties zoals…

**Hardware Signers:**Gebruik een iPhone of Android beveiligde enclave om een smartphone om te zetten in een hardware wallet. Vanaf daar kunnen gebruikers transacties verifiëren met biometrische gegevens zoals een vingerafdruk of Apple Face ID. We zijn al begonnen met het bekijken van zelfbewakingsportemonnees zoals Braavos[uitrol van deze functie.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Sta gebruikers toe om gaskosten in een token te betalen, of zelfs een derde-partij-ontworpen mechanisme te gebruiken voor transacties.

**Sociale Herstel:**Als een persoonlijke sleutel verloren gaat of in het gedrang komt, kunnen gebruikers een nieuwe sleutel gebruiken als een legitieme eigenaar. Dit kan verschillende herstelmethoden omvatten via vertrouwde contacten, hardware wallets of diensten van derden. Het idee is om het herstellen van de toegang tot je account zo eenvoudig mogelijk te maken als het herstellen van het wachtwoord van je bankrekening via een e-mail.

**Multifactor Authentication:**Vergelijkbaar met de gangbare Web2 2FA practices gebruikers kunnen authenticatie methoden instellen voor hun crypto portemonnees, waar een transactie wordt ondertekend zodra een gebruiker de goedkeuring heeft bevestigd via een tweede optie zoals e-mail of SMS. Gebruikers kunnen ook dagelijkse overdrachtslimieten instellen of lijsten met accountadressen waarvan de portemonnee automatisch wordt geblokkeerd voor interactie.

**Quantum Resistant and Gas-Efficient Signatures:**Ethereum huidige handtekeningsschema, ECDSA, is rekenkundig uitgebreid (lezen: hogere gaskosten) en kan gebroken worden door quantum computers. Door ondertekening abstractie, gebruiken verschillende accountcontracten efficiëntere en quantumveilige handtekeningssystemen. StarkNet gebruikt zijn eigen proprietaire STARK-vriendelijke curve.

Deze functies bieden gebruikers niet alleen meer zekerheid en meer flexibiliteit, maar resulteren ook in een veel**betere**gebruikerservaring.

Vermeld door Vitalik Buterin als een 'lang durende droom' voor de Ethereum-ontwikkelaarsgemeenschap, innovaties rond accountsabstractie, voornamelijk EIP-2938 en EIP-3074, hebben sinds 2020 gezwicht. Beide zaken waren echter vereist op het gebied van veiligheid en uitvoering. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), de meest veelbelovende ontwikkeling tot nu toe, stelt een abstractie van de rekening voor zonder dat wijzigingen in het Ethereum-protocol nodig zijn.

### **Account abstractie en Starknet**

In tegenstelling tot Bitcoin en Ethereum die hun huidige protocollen aanpassen om account-abstractie te ondersteunen, heeft[StarkNet](https://starkware.co/starknet/)accountabstractie sinds dag één geïmplementeerd. Wanneer gekoppeld aan de schaalbaarheid en capaciteiten van onze STARK-proeven, is het potentieel voor innovatie in portefeuille onbegrensd. Daarom wordt de volgende generatie van zelfbewakingsportemonnees, zoals Argent en Braavos, momenteel bovenop ons netwerk gebouwd.

StarkNet's benadering lijkt op EIP-4337,[erkennen dat](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)complete account abstractie nog steeds zou leiden tot verwarring tussen UX en[zou de deur kunnen openen](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)naar aanvallen op sequencers. Het doel is veeleer abstractie van ondertekeningen en abstractie van betalingen te bereiken door een deel van de benodigde infrastructuur op en buiten de keten te combineren.

En terwijl er nog veel meer te doen is, wint abstractie van account tracering over een kleine cirkel van crypto-inheemse bewoners. In december heeft[Visa het idee voorgesteld](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)om accountabstractie te gebruiken voor het opzetten van automatische terugkerende betalingen op StarkNet. Met behulp van een gedelegeerde account kunnen gebruikers toestemming geven om een betaling te starten naar een vooraf goedgekeurde smart contract. Vanaf daar zal het smart contract worden geprogrammeerd om een bepaald betalingsbedrag af te trekken op een specifieke dag, over een ingestelde duur van de tijd. Terwijl Visa nog niet heeft onthuld wat haar plannen voor haar eigen diensten zijn, spreekt de rente alleen maar boekdelen uit, en kan vooruitlopen op een wereld waar grote tech-abonnementsplatforms zoals Netflix en Spotify crypto-adoptie kunnen omarmen.

Wat de toekomst betreft, de tijd zal het leren. Eén ding is echter zeker. Door portemonnees gemakkelijker en veilig te gebruiken de abstractie van een account zal dienen als een krachtige katalysator voor self-custodiale blockchain-portemonnees die kunnen worden geschaald naar miljoenen mainstream crypto-gebruikers. In de tussentijd zullen we verder gaan.