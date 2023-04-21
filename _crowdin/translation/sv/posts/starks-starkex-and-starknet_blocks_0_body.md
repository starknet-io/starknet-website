### TL;DR

* STARKs möjliggör blockchain skalning genom att effektivt bevisa integriteten av beräkningar
* StarkEx är en applikationsspecifik skalningsmotor
* StarkNet är ett tillståndsfritt, smart kontrakt Layer 2-nätverk

### **STARKAR**

STARKs (Scalable, Transparent ARgument of Knowledge) är ett bevis system som möjliggör bevisning och verifiering av beräkningar. Det gör det möjligt att bearbeta en stor beräkning, vilket genererar ett bevis för beräkningens korrekthet, och sedan verifiera beviset i mycket få steg.

STARKs kan spela en nyckelroll i blockkedjans skalbarhet genom att låta stora beräkningar göras utanför kedjan, där det är billigare, lämnar bara verifiering, vilket kräver en bråkdel av beräkningen, att göras på kedjan. Med andra ord, genom att utföra mycket få steg på kedjan, verifieraren hävdar integriteten i en mycket större beräkning som gjordes utanför kedjan.

Använda STARKs, lager 2 lösningar parti tillsammans och beräkna tusentals transaktioner, och sedan verifiera deras giltighet på kedjan med en enda STARK bevis. Kostnaden för den kedjade processen delas mellan**alla**transaktioner i partiet. Detta resulterar i Ethereum säkerhet och låg gaskostnad per transaktion.

Den låga beräkningskostnaden kommer att inleda en ny klass av applikationer som tidigare inte var genomförbara på kedjan. Dessa egenskaper gör STARKs till en utmärkt byggsten för att förbättra användarupplevelsen och minska gaskostnaderna. hela tiden upprätthålla säkerheten i Ethereum bosättningsskiktet.

StarkWare erbjuder två lösningar för att skala Ethereum med STARKs: StarkEx och StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)är ett ramverk för att skapa behöriga, applikationsspecifika skalningslösningar. StarkEx är en verktygslåda med användbara[applikationsflöden](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)som projekt kan använda för att uppnå billig off-kedje-beräkning. En STARK bevis, intygar att exekveringen är korrekt, genereras utanför kedjan. Ett sådant bevis kan inkludera upp till 12.000–500.000 transaktioner (beroende på transaktionstyp). Beviset skickas sedan till STARK Verifier för att accepteras on-chain. Detta innebär en verifiering för alla transaktioner — för en otroligt låg upplupen gaskostnad per transaktion.

Några exempel på de program som används på StarkEx är dYdX (evigt handel), Oföränderliga och sorare (NFT:er – minting och handel), DeversiFi (spot trading), och Celer (DeFi Pooling).

StarkWare lägger kontinuerligt till fler applikationsflöden till StarkEx efter marknaden och kundernas behov.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)är ett behörighetslöst layer 2-nätverk där alla användare eller utvecklare kan distribuera smarta kontrakt som utvecklats på Kairo språk.*

Jämförbart med Ethereum smart kontrakt erfarenhet, inne i StarkNet ekosystem, ditt kontrakt kan interagera med alla andra kontrakt som distribueras på StarkNet, vilket möjliggör rikligt sammansatta protokoll. StarkNet kontrakt kan också interagera med Ethereum kontrakt via asynkront meddelande passera.

Till skillnad från StarkEx, där ansökningar är ansvariga för att skicka in transaktioner, StarkNet sekvenser batchtransaktioner och skicka dem för att behandlas och bevisas. (Starknets sekvenser drivs för närvarande av StarkWare med framtida planer på att decentralisera.) Detta innebär att när applikationerna väl använder sina Kairoavtal behöver de inte oroa sig för att köra ytterligare infrastruktur för operatörer. StarkNet stöder Rollup dataläge vilket innebär att tillståndet i rullningen är skrivet till Ethereum tillsammans med STARK bevis.

En stor utvecklare gemenskap är djupt engagerad med StarkNet ekosystem, bygga appar, verktyg och infrastruktur. Dussintals program är redan levande på testnet — DeFi, spel, röstning, AI och mer. Mer över, utvecklarverktyg som block explorer, lokal testmiljö och ramverk, SDK är på flera språk och mer, byggs av StarkNet Community. Dessutom pågår aktiva diskussioner i[Shamans plattform](https://community.starknet.io/), med förslag på förbättringar, potentiella funktioner och bästa praxis.

### **Att Summa Det Upp**

Både[StarkEx](https://youtu.be/P-qoPVoneQA)och StarkNet är STARK-baserade skalningslösningar. Båda ger skalbarhet, låga gaskostnader och säkerhet, men har olika driftskrav och driftskompatibilitet. StarkEx kan vara rätt lösning för ett program som till stor del är fristående och passar in i de API:er som StarkEx ger. StarkNet kan vara bättre lämpad för ett protokoll som kräver att interagera synkront med andra protokoll eller har behov som går utöver vad StarkEx erbjuder.

STARKs har revolutionerat hur applikationer kan byggas på Ethereum. StarkEx och StarkNet kommer att fortsätta att möjliggöra applikationer som tidigare var ogenomförbara och tänja gränserna för vad som är möjligt på blockkedjan.

Denna artikel har skrivits i samarbete med[Tim Gestson](https://twitter.com/IcemanTim)och[StarkWare](https://starkware.co/)teamet