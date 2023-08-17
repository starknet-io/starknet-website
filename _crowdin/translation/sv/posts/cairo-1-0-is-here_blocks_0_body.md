### TL;DR

* Cairo 1.0 första släppet är här!
* Utvecklare kan börja skriva och testa Kairo 1.0-program
* Feature parity med den äldre versionen av Kairo kommer att nås under de kommande veckorna
* Stöd för StarkNet-kontrakt kommer att läggas till i den kommande versionen av StarkNet Alpha

### Bakgrund

Vi är glada att kunna meddela att den första offentliga versionen av Kairo 1.0 nu är tillgänglig. Detta markerar en viktig milstolpe i utvecklingen av Kairo, som först introducerades 2020 som ett Turing-komplett programmeringsspråk för att effektivt skriva STARK-bevisbara program. Kairo 1.0 är ett rost liknande språk på hög nivå. Precis som Rust, är det avsett att tillåta utvecklare att enkelt skriva kod som är effektiv och säker.

Sedan starten har Kairo använts för att bygga Layer-2 program som[har hanterat](https://dashboard.starkware.co/starkex)över $790 miljarder till ett värde av affärer, bearbetade över 300 miljoner transaktioner och präglade mer än 90 miljoner NFTs, alla utförda off-chain och bosatte sig på Ethereum med den matematiska integritet garanteras av STARK bevis. Kairo blev det fjärde mest använda programmeringsspråket i blockkedjan[ekosystemet](https://defillama.com/languages)i stort. Med frisläppandet av Kairo 1. Vi strävar efter att göra språket ännu mer tillgängligt och användarvänligt samtidigt som vi introducerar nya funktioner som ökar säkerheten och bekvämligheten.

En av de mest betydande förändringarna i Kairo 1.0 är syntaxen. Vi har tagit inspiration från**Rust**för att skapa ett mer utvecklarvänligt språk som är lättare att läsa och skriva. Den nya versionen av Kairo gör det möjligt att skriva säkrare kod (starkt skrivet, ägande och lån, etc.), samtidigt som den är mer uttrycksfull.

Kairo 1.0 introducerar också Sierra, en ny mellanliggande representation som garanterar**varje**Kairo kör kan bevisas. Detta gör Cairo 1.0 särskilt väl lämpad för användning i ett behörighetslöst nätverk som StarkNet, där det kan ge robust DoS-skydd och censurmotstånd. Du kan läsa mer om Sierra i vårt[föregående](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)inlägg.

## Första smaken!

### Vad kan du göra idag?

Utvecklare kan börja skriva, kompilera och testa Kairo 1.0 program! Vi uppmuntrar utvecklare att börja experimentera med Kairo 1.0 och vänja sig vid den nya syntax och funktioner.

Eftersom Kairo 1.0 fortfarande är aktivt utvecklad, och nya funktioner ständigt läggs till, kolla in[Kairo utvecklingskatalogen](https://github.com/starkware-libs/cairo/)för de senaste uppdateringarna.

### Vad kommer härnäst?

För tillfället Kairo 1. saknar fortfarande några av de funktioner som stöds i den äldre versionen av Kairo ([se denna tabell för detaljer](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Vår nästa milstolpe, förväntas under de närmaste veckorna, kommer att ge Kairo 1.0 funktionen paritet med den äldre versionen. Du kan spåra framstegen mot denna milstolpe[här](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Stöd för Starknet

Skriva StarkNet kontrakt i Kairo 1.0 stöds (även om vissa funktioner fortfarande saknas). Men StarkNet stöder ännu inte utbyggnaden och genomförandet av Kairo 1.0 avtal. StarkNet Alpha V0.11.0, som planeras under de kommande veckorna, kommer att introducera möjligheten att distribuera och driva Kairo 1.0 kontrakt. Uppgraderingen till v0.11.0 kommer att markera början av övergångsperioden mot ett system som kör endast Kairo 1.0 kontrakt. Denna övergångsperiod kommer att avslutas med[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), förväntas några månader senare.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Låt oss bygga!

Målet med StarkNet är att exponentiellt skala Ethereum med hjälp av STARKs matematiska integritet, och målet med Kairo är att göra denna exponentiella skala tillgänglig för utvecklare. Tillgänglighet innebär ett programmeringsspråk som är effektivt, lätt att läsa och skriva, och säkert att använda. Vi hoppas att lanseringen av Cairo 1.0 kommer att inspirera ännu fler utvecklare att ansluta sig till StarkNet och skala Ethereum för att möta den globala efterfrågan.