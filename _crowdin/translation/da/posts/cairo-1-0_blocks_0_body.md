### TL;DR

* Cairo 1.0 er den første store udgivelse efter[indførelsen af Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)for to år siden
* Cairo 1.0 vil give udviklerne et sikrere, enklere, mere brugbart programmeringssprog
* Kernen i Cairo 1.0 vil være**Sierra**, en mellemmand repræsentation lag, der lover større langsigtet stabilitet for Kairo programmer
* Sierra fremmer Cairo at tjene i et tilladelsesfrit netværk:\
  -**Beskyttelse af netværket**: det giver mulighed for mere robust DoS-beskyttelse\
  -**Beskyttelse af brugeren**: det giver Ethereum-grade censurs-modstandCairo 1. vil påvirke StarkNet på mange måder. Det vil også påvirke[Gengenese](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Vi vil skrive mere information om Gengenesis i de kommende uger.

### Indledning

I 2020 har vi udgivet Cairo, en Turing-komplet programmeringssprog, og tog et stort skridt mod at støtte verificerbar beregning ved hjælp af STARKs. I dag, vi annoncerer**Cairo 1,0**, den største fremskridt i Kairo til dato. Det vil indføre et forbedret sprog med funktioner, der vil øge brugervenligheden, sikkerheden og bekvemmeligheden. Det er designet til at understøtte StarkNet krav som en tilladelsesfri netværk, så protokollen bliver enklere og sikrere.\
Udviklingen er allerede i gang, og vi forventer, at den første udgivelse snart vil ske.

I dette indlæg vil vi beskrive rejsen af Cairo indtil videre og dele detaljer om de kommende funktioner.

### Kairo Rejsen

Indtil 2020, niche viden var nødvendig for at opbygge STARK-provable programmer til generel beregning. Det var kun muligt for dem, der forstod den komplekse matematik bag STARKs. Specifikt for enhver forretningslogik, dvs. hver beregning, en nødvendig for at generere en Algebraisk Intermediate Representation (AIR) — et sæt af polynomielle begrænsninger, der repræsenterer den specifikke beregning.

Kairo blev født ud af den erkendelse, at verificerbare beregning bør gøres tilgængelig for udviklere overalt. Kairo gør det muligt for udviklere at udnytte kraften i STARKs.

Udviklerfællesskabet har siden beslaglagt Kairo til at bygge entusiastisk. Alt i det blomstrende StarkNet økosystem i dag er baseret på Cairo. Mellem[StarkNet](https://starkware.co/starknet/)og[StarkEx](https://starkware.co/starkex/), Cairo-drevne applikationer har behandlet over 220M transaktioner, minted mere end 65M NFTs, og håndterede $ 700B værdi af handler, alle afvikles på Ethereum.

Mens Kairo gjorde STARKs tilgængelige, blev det oprindeligt designet som et samlesprog, og som sådan blev det skrevet som et lavt niveau sprog.

![Et eksempel på de tidlige programmer, der blev skrevet i Kairo](/assets/cairocode_01.png "Et eksempel på de tidlige programmer, der blev skrevet i Kairo")

Promperet af feedback fra udviklere og fremkomsten af[StarkNet](https://starkware.co/starknet/)har vi gradvist gjort Cairo mere ekspressiv og mere udviklervenlig.

![Et eksempel fra ERC-20 Cairo kontrakt, der demonstrerer støtte til variabler, hvis udsagn, fejl og UINT256 bibliotek](/assets/cairocode_02.png "Et eksempel fra ERC-20 Cairo kontrakt, der demonstrerer støtte til variabler, hvis udsagn, fejl og UINT256 bibliotek")

Men vi konkluderede snart, at det er på tide at tage et stort spring fremad, og i stedet for trinvise forbedringer til Cairo, gå til en dristigere transformation.

### Cairo 1.0

For Kairo 1. vi har bygget en helt ny compiler fra bunden, som vil give udviklere med sikkerhedsfunktioner, og vil give dem mulighed for at skrive kontrakter på en enklere og mere udtryksfuld måde.

#### Introduktion af Sierra: At sikre, at alle Kairo kører kan bevises

Den vigtigste tilføjelse i Cairo 1. er Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra udgør et nyt mellemliggende repræsentationslag mellem Cairo 1.0 og Cairo byte kode. Sierras mål er at sikre, at hver Kairo kører – dvs. et Kairo program og dens input – kan bevises (se mere nedenfor).

Sierra lover Cairo devs bedre fremtidssikret kode. Yderligere stabilitet er tilvejebragt ved, at StarkNet kontrakter ikke behøver at udbygge i tilfælde af forbedringer af det underliggende system (f. eks. ., CPU AIR arkitektur ændringer, forbedringer af den endelige oversættelse fra Sierra til Cairo byte kode).

**Beviser hver Kairo kører.**I gamle Kairo, kan en Kairo køre resultere i tre tilfælde — SAND, FALD eller fiasko. Mislykkede kørsler kan ikke bevises. Sierra, sikrer, at en Kairo køre aldrig vil mislykkes, og kan kun resultere i TRUE eller FALSE. Dette sikrer igen, at hver Kairo køre kan bevises.

Denne introduktion af Sierra har stor betydning for StarkNet som et tilladelsesfrit netværk. Sierra sikrer, at selv tilbageførte transaktioner kan medtages i StarkNet blokke. Denne egenskab vil gøre det muligt for StarkNet protokollen at forblive magert og enkel uden behov for at tilføje komplekse krypto-økonomiske mekanismer.\
To meningsfulde eksempler:

1. Sequencers vil være i stand til at indsamle gebyrer på tilbageførte transaktioner, så StarkNet at forhindre Sequencer DoS på en veletableret måde.
2. Gennemførelse af tvungne L1-transaktioner vil være mulig, så StarkNet arver Ethereums fulde censurerede modstand.

### **Sprog Funktioner**

Cairo 1.0 vil tilbyde mange forbedringer til selve programmeringssproget. Ikke alt anført nedenfor vil være en del af den første udgivelse, men det er en del af køreplanen.

#### **Forbedret syntaks**

* Ikke mere*lokal*og*tempvar*. Vi behøver nu kun*lad*regere dem alle variabler.
* Forbedret*hvis*udsagn syntaks

```python
#Gammel
hvis cond ! 0 {
  tempvar x = x+1;
} ellers {
  tempvar x = x;
}
__________________________________
#Ny
if cond { x = x + 1; }
```

#### **Sikkerhedsgarantier for typen**

compileren vil bruge stærk skrive for at forbedre sikkerheden af koden. For eksempel:

* Pointers vil altid pege på initialiseret hukommelse.
* Ordbøger vil altid blive knust, i modsætning til at forlade ansvaret for at kalde squash_dict til programmøren.

#### **Lettere at bruge sprogkonstruktioner**

For eksempel:

* For sløjfer

```
let sum = 0
for x in iter {
  sum = sum + x;
}
```

* Booleske udtryk
* Integere (med regelmæssig heltal division 👯)
* Overstrømsbeskyttelse for de relevante typer
* Booleske forhold

```
#Gammel
Hvis cond1:
  if cond2:
       # Noget kode
  ellers hvis cond3:
       # Samme kode
__________________________________
#Nyt
Hvis cond1 && (cond2 occur occur cond3) { … }
```

#### **Et fuldt udbygget typesystem**

* Abstrakte datatyper (dvs. Rust-lignende enummer)

```
enum Option<T> {
 Noget: T,
 Ingen,
}
matchresultat {
 Nogen (r) => {..},
 Ingen => {..},
}
```

* Egenskaber

```
træk Tilføj<Uint256> {
    fn add(…) { … }
}

lad a: Uint256 = 1;
lad b: Uint256 = 4;
a + b; / / Vurderet til 5 af typen Uint256.
```

#### **Flere intuitive biblioteker**

(f.eks. dict, arrays)

* Dict<Uint256, MyStruct>
* Array<MyOtherStruct>;

#### **Mere optimeret kode**

Ingen grund til udtrykkeligt at angive tildeling af lokale variabler - auto opdaget og gjort automatisk.

#### **Bedre compiler integration**

Aktivering af bedre IDE-support, pakkestyring og bedre facilitering af fællesskabsbidrag.

### **Konklusion**

To år efter, at Kairo blev brugt første gang i produktionen, er vi ved at udvikle Kairo 1,0, som vil levere forbedret udtryksfrihed, sikkerhed og syntaks. Det vil tage et stort skridt fremad, så udviklere til lettere at skrive deres StarkNet kontrakter.

I et andet indlæg, der kommer snart, vil vi dele flere detaljer om, hvordan Kairo 1. vil påvirke StarkNet genskabelse, og hvordan udviklere bør forberede sig til sin udgivelse.