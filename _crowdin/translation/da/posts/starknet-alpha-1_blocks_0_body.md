### TL;DR

StarkNet Alpha 1 har to nye funktioner:

* L1<>L2 interaktion
* Data om kæden

### Indledning

I begyndelsen af året annoncerede vi, at StarkWare er ved at bygge[StarkNet](https://starkware.co/product/starknet/), en tilladelsesfri decentraliseret STARK-baseret ZK-Rollup1, der opererer som et L2-netværk over Ethereum. StarkNet giver mulighed for enhver dApp til at opnå ubegrænset skala for sin beregning - uden at gå på kompromis Ethereum ‘ s kompostering og sikkerhed.

Sidste måned,[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)blev udgivet til verden. For første gang er udviklere i stand til at[skrive](https://kobi.one/2021/07/14/stardrop.html)enhver smart kontrakt og implementere det, tilladelsesfrit, til en ZK-Rollup. Brugere er i stand til at sende transaktioner til netværket, Ethereum-stil.

I dag frigiver vi en ny version; Alpha 1. Vi frigiver funktioner på rullende basis, så udviklere kan interagere med nye funktioner så hurtigt som muligt. Vi forventer, at dette vil stramme feedback cyklus og tillade community feedback til hurtigt at forbedre StarkNet.

### **Alfa 1 Funktioner**

#### L1<>L2 Interaktion

Alpha 1 omfatter en L1<>L2 messaging-protokol, som giver udviklere mulighed for at gennemføre problemfri transaktionsstrømme mellem L1 og L2. Udviklere kan nu sende beskeder fra kontrakter på L1 til kontrakter på L2 og omvendt.

En af de skønheder af ZK-Rollups er, at staten opdateringer er endelig, uden nogen forsinkelse. Det betyder, at meddelelser, der blev sendt fra L2 til L1, kan straks videresendes til deres destination kontrakt. Dette åbner vejen for at bygge apps, der virkelig er interoperable mellem lagene.

Er du interesseret i at prøve det ud? Den bedste måde at komme i gang på er at følge tutorial[her](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Vores L1<>L2-protokol skylder meget til andre L2s (specifikt Optimisme og Arbitrum), hvis tidligere arbejde på dette område påvirkede vores design.

#### On-Chain Data-Tilgængelighed

StarkNet ‘ s state opdatering er nu også offentliggjort som on-chain data om Ethereum. Dette giver enhver bruger mulighed for fuldt ud at konstruere StarkNet tilstand fra L1 data. Hver stat opdatering indeholder staten diff, dvs., hvad lagring blev ændret og dens nye værdi.

Her viser ZK-Rollup også sin styrke. I modsætning til Optimistiske Rollups, hvor de fulde transaktionsdata skal sendes on-chain, i ZK-Rollups sendes kun de absolut minimale data, der er nødvendige for at udlede staten diff til kæden.

Overvej et førsteklasses eksempel, pris oracles. En transaktion for at opdatere en pris oracle indeholder normalt flere transaktioner, men opdaterer kun en lagringscelle; parrets pris. De data om kæden, der kræves for en statusopdatering indeholdende prisorakel transaktioner i en Optimistisk Rollup vokser lineært med antallet af opdateringer, mens i en ZK-Rollup, vil det altid være en enkelt opbevaring opdatering.

Desuden kan komprimeringsalgoritmer anvendes på de offentliggjorte data, og deres gyldighed vil blive bekræftet af STARK-beviset og yderligere reducere on-chain fodaftrykket. Fremtidige versioner af StarkNet vil indføre innovative optimeringer på dette område.

#### StarkNet OS

Vi frigiver også StarkNet Operating System kode. Den StarkNet OS er Cairo program, der kører StarkNet. OS håndterer alt, hvad der gøres på netværket — kontraktimplementering, udførelse af transaktioner, L1<>L2 beskeder og meget mere. Den StarkNet OS arkitektur og design vil blive forklaret i detaljer i et separat indlæg.

#### Ekstra Funktioner

Ikke alene har StarkNet Alpha udviklet sig, vi er også konstant forbedre Cairo. For en fuldstændig beskrivelse af de nye funktioner i Cairo v0.3.0, tjek udgivelsesbemærkningerne[her](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Økosystemet vokser sig

Bortset fra det konstante arbejde på StarkNet Core, økosystemets arbejde på StarkNet er kontinuerligt ekspanderende. Vi er begejstrede for at samarbejde med nogle af de mest talentfulde hold fra økosystemet.

Fermion, StarkNet ‘ s første Full Node indsats, er udviklet af Erigon (tidligere TurboGeth) team. Baseret på deres enorme viden opnået ved at arbejde på Ethereum, er vi i stand til at arbejde sammen med dem om at opbygge en kraftfuld Full Node, som inkorporerer mange erfaringer under bygningen for Ethereum, samtidig med at drage fordel af den skala, der tilbydes af STARK beviser.

Hollandsk arbejder på Warp, en compiler fra EVM til Cairo. Bundet af vores kultur med at præsentere nye værktøjer, først når de er klar, Alt hvad vi kan sige er, forventer spændende nyheder på denne front meget snart! Vi kan dog sige, at de bevæger sig med en hastighed på vugge.

### Hvad fremtiden har

Det næste stop på vores vej til StarkNet vil være komposterbarhed-tillader kontrakter at interagere med hinanden. Hold dig opdateret.

[StarkWare](https://starkware.co/)

1 Som vi tidligere har sagt, ZK-Rollup er nu en almindeligt anvendt term, men meget misvisende: disse løsninger ikke (nuværende) tilbyde nul-viden.

**Opdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet