Teknologisk innovasjon i blokkkjede har blomstret de siste årene – STARKs, SNARKs, EIP-1559, Ethereum Merge – representerer alle store teknologiske prestasjoner. UX og UI design klarte ikke å holde oppe. Folk står fortsatt fast på 16 ord frøfraser, og å komme seg inn i DeFi uten en sentralisert mellommann er fortsatt for skremmende for mange . For å bli medlem av de neste milliardene brukerne på Web3 er det kritisk å forbedre Onboarding-opplevelsen.

Som FTX-demonstrert (og Gemini, Celsius og Mt. Gox) er det kritisk viktig å beholde selvjournaler over sine eiendeler. Selekustodial lommebøker har imidlertid vært klunkelt og forvirret for gjennomsnittlig bruker. De fleste har glemt Web2-passordene på en månedlig basis og hvordan forventes brukere å beholde sin frase og privatnøkler til evig tid?

Enkelt sagt, det er et sikkerhetsmareritt. Som vi har sett utallige tider, kan en feil flytte, enten den er igangsatt av dårlige aktører eller uaktsomhet, gi et tap av millioner av dollar.

Som det første kontaktpunktet for nye krypto-brukere, må det enten være lett å bruke, sikre og tilpasse hver brukers behov. Dette krever at utviklerne integrerer enkelheten i Web2 finansielle produkter med funksjonene til Web3.

Det er akkurat dette som det gjør bruk av abstraksjoner.

Kontoabstraksjon forbedrer sikkerheten til selvgående lommebokprodukter ved å fjerne brukernes avhengighet av den private nøkkelen og gjøre lommebøker mer programmerbart. Med dette forbedrede UX, kan ikke-kyndige lommebøker endelig skalere til millioner av mainstream krypto-brukere.

Men for å forstå effektene av kortstokkene, må vi friske oss opp i hvordan Ethereum kontoer fungerer.

### Grunnleggende kunnskaper i Ethereum kontoer

Det finnes to typer emnekontoer:

1. Eksternt egne kontoer (EOA)
2. Kontrakt- regnskap (CA)

La oss bryte ned litt lenger.

### Eksterneide kontoer

Eksterneide kontoer, som MetaMask og Coinbase Wallet, er den typiske kontotypen for brukere i Ethereum. Hver EOA består av en privat og offentlig nøkkel, kalt en tastatur.

Alle transaksjoner er autorisert og signert av private nøkler. Når en transaksjon er signert, bekrefter EVM at signaturen er gyldig ved hjelp av EOAs kontoadresse. Den hardkodede logikken i EVM betyr at kontoen (objektet som holder tokenet ditt) og den private nøkkelen (signeren) er koblet sammen.

Hvis du mister fondene dine, eller det er til og med kontroll over kontoen din, for alltid.

### Kontrakt konto

Samtidig er avtalekontoer, synonymt med abstraksjon i kontoen, smarte kontrakter som er plassert på Ethereum-blokkjeden. Disse kontraktene kontrolleres med logikk og krever ingen private nøkkeler. I motsetning til EOA, kan ikke kontraktskontoene initiere transaksjoner. De utløses i stedet av instrukser fra EOA.

### Hvorfor ta hensyn til abstraksjon

Konto-abstraksjon innebærer å abstrakte den hardkoderte autorisasjonslogikken bort fra EOA-er, gjøre hver enkelt beregning til en programmerbar smartkontrakt som kan tilpasses for å oppfylle hver persons behov.

Som forklart av Argent medgrunnlegger og Chief Science Officer Julien Niset i en nylig[Starte @ Home event](https://www.crowdcast.io/e/7olimxqv), denne fleksible autorisasjonslogikken gir dem frihet til utviklere å spille rundt med kontofunksjoner som…

**Maskinvare Signere:**Bruk av en iPhone eller Androids sikre hule til å gjøre smarttelefonen om til en maskinvarelommebok. Derfra kan brukerne verifisere transaksjoner ved hjelp av biometriske data som en fingeravtrykk eller Apple Face ID. Vi har allerede begynt å se selvkustodial lommebøker som Braavos[ruller ut denne funksjonen.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Tillat brukere å betale gasspriser i alle tokene, eller til og med ha en tredjepartsstyrt mekanisme betaling for transaksjoner.

**Sosial Recovery:**I arrangementet kan en privat nøkkel gå tapt eller kompromitteres, brukere kan autorisere ny nøkkel som en legitim lommebokeier. Dette kan omfatte en rekke metoder for gjenoppretting gjennom betrodde kontakter, maskinvaremapper eller tredjepartstjenester. Idéen er å gjøre det enklere å gjenopprette bankpassordet ditt via en e-post.

**Multifaktor-autentisering:**Som for de vanligste Web2 2FA praksis, brukere kan sette opp to (eller flere) autentiseringsmetoder for sin krypteringslommebok, der en transaksjon bare signeres når en bruker bekrefter godkjenningen via et annet alternativ som e-post eller SMS. Brukere kan også sette opp daglige overføringsgrenser eller lister over kontoadresser som lommeboken automatisk blir blokkert fra å samvirke.

**Quantum Resistant og Gas-Efficient Signatures:**Ethereums gjeldende signaturordning, ECDSA har omfattende databehandling (lese: høyere gassavgifter) og kan brytes av kvantedatamaskiner. Ved hjelp av signaturabstraksjon bruker ulike kontogabletter mer effektive og kvan- kaverne signaturordninger. StarkNet bruker sin egen proprietære STARK-vennlige kurve.

Ikke bare gjør disse funksjonene til å gi brukerne større sikkerhet og mer fleksibilitet, men viktigere, resultere i en mye**bedre**brukeropplevelse.

Oppført av Vitalik Buterin som en «lang drømme» for lokalutviklersamfunnet i Ethereum, har innovasjoner rundt kontoabstraksjon, hovedsaklig EIP-2938 og EIP-3074, gått i flukt siden 2020. Imidlertid krevde både byttedyr rundt sikkerhet og implementering. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), den mest lovende utviklingen så langt foreslår en versjon av kontohold uten at det kreves endringer i Ethereum-protokollen.

### **Kontoabstraksjon og Starknet**

I motsetning til Bitcoin og Ethereum, som endrer sine gjeldende protokoller for å støtte kontoen, har[StarkNet](https://starkware.co/starknet/)gjennomført en abstraksjon fra dag én. Når vi er koblet til skalabiliteten og evnene til våre STARK-demonstrasjoner, er potensialet for innovasjon i lommeboken begrenset. Derfor bygges neste generasjon av selvstyrte vegger, som Argent og Braavos, på toppen av vårt nettverk.

Starkons tilnærming til prosjektet ligner EIP-4337,[anerkjenner at](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)komplett abstraksjon på konto vil fortsatt resultere i forvirring UX og[kan åpne døren](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)for angrep på sekvenser. Det har som mål å oppnå både signatur abstraksjon og betalings abstraksjon ved å mutalisere noe av nødvendig infrastruktur på og utenfor kjeden.

Så lenge det er mye mer arbeid å gjøre med hensynstendenser, får en overføring til formål utover en liten sirkel med kryptil medaljer. I desember,[Visa foreslo ideen](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)om å bruke konto-abstraksjon for å sette opp automatiske periodiske betalinger på StarkNet. Bruker en delegert konto kan brukere gi tillatelse til å sette i gang en betaling til en forhåndsgodkjent smartkontrakt. Derfra vil den smarte kontrakten programmeres til å trekke ut et sett betalingsbeløp på en bestemt dag i løpet av en bestemt periode. Selv om visum ennå ikke har avdekket sine planer for egne tjenester, har interessen alene ført til volum. og kan forutse en verden der store teknologiske abonnementsplattformer som Netflix og Spotify kan omfatte krypto-adopsjon.

Hva framtiden innebærer, vil det bare være på gang. Men én ting er sikkert. Ved å gjøre lommebøker enklere og trygt å bruke, konto abstraksjon vil tjene som en kraftig katalysator for selvbeskjeder blokkjede lommebøker for å skalere til millioner av brukere av mainstream kryptil brukere. Vi fortsetter å bygge i mellomtiden.