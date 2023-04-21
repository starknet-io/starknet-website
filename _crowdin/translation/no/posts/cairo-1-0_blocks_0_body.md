### TL;DR

* Cairo 1.0 er den første store utgivelsen etter[introduksjon av Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)for to år siden
* Cairo 1.0 vil gi utviklerne et tryggere, enklere, mer brukbart programmeringsspråk
* I hjertet av Cairo 1.0 vil være**Sierra**, et mellomliggende representasjonslag som lover større langsiktig stabilitet for Kairo programmer
* Sierra advare Cairo til å fungere i permisjonsløse nettverk:\
  -**Beskytting av nettverk**: Det tillater mer robust DoS-beskyttelse\
  -**Beskytter brukeren**: Det tillater Ethereum-grads censorship resistanceCairo 1. StarkNet vil påvirke på mange måter. Den vil også påvirke[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Vi vil legge ut mer informasjon om Regenesis de neste ukene.

### Introduksjon

I 2020 utga vi et altomfattende programmeringsspråk, og vi tok et stort skritt i å støtte verifiserbar databehandling med STARKs. I dag kunngjør vi**Kairo 1.0**den største prosessen i Kairo hittil. Det vil introdusere et forbedret språk, med funksjoner som vil øke brukervennheten, sikkerheten og bekvemmeligheten. Den er utviklet for å støtte StarkNetts krav som et tillatelsesløst nett, slik at protokollen kan bli enklere og tryggere.\
Utviklingen er allerede pågående, og vi forventer at den første utgaven skjer snart.

I dette innlegget vil vi beskrive Kairos reise så langt og dele detaljer om de kommende funksjonene.

### The Cairo Journey

Fram til 2020 var nisjiktkunnskap nødvendig for å bygge opp STARK-bevisste programmer for generell databehandling. Det var kun mulig for dem som forsto kompliserte spørsmål bak STARKene. Spesielt for hver logikk i virksomheten, dvs. hver beregning – en nødvendig for å generere en Algebraic Intermediate Representasjon (AIR) – et sett med polynomiske begrensninger som representerer den spesifikke dataen.

Cairo ble født av realiseringen som verifiserbar databehandling bør gjøres tilgjengelig for utviklere overalt. Kairo gjør det mulig for utviklerne å utnytte kraften til STARK-er.

Utviklerfellesskapet har siden sin innlagt Kairo for å bygge entusiastisk. Alt i det trivende StarkNet ecosystem er i dag basert på Cairo. Mellom[StarkNet](https://starkware.co/starknet/)og[StarkEx](https://starkware.co/starkex/), Kairo-drevne applikasjoner har behandlet over 20M-transaksjoner, utvunnet mer enn 65M NFT, og håndterte $700B verdt av handler, alle avgjort på Ethereum.

Mens Cairo gjorde STARKs tilgjengelig, var den opprinnelig utformet som et forsamlingsspråk, og slik ble den skrevet som et språk på lavt nivå.

![Et eksempel på de tidlige programmene som ble skrevet i Kairo](/assets/cairocode_01.png "Et eksempel på de tidlige programmene som ble skrevet i Kairo")

Tilbakemeldinger fra utviklere og oppover[StarkNet](https://starkware.co/starknet/), vi gjorde Kairo gradvis mer uttrykkelig og mer utviklende.

![Et eksempel fra ERC-20 Cairo-kontrakten som viser støtte til variabler, hvis erklæringer, feil og UINT256-biblioteket](/assets/cairocode_02.png "Et eksempel fra ERC-20 Cairo-kontrakten som viser støtte til variabler, hvis erklæringer, feil og UINT256-biblioteket")

Men vi konkluderte snart med at det er på tide å ta et stort sprang videre og i stedet for trinnvise forbedringer til Kairo, går for en skruetransformasjon.

### Cairo 1.0

For Kairo 1. vi har bygget en helt ny kompilator fra bakken opp, som vil gi utviklerne trygghet, og vil la de skrive kontrakter på en enklere og mer uttrykkelig måte.

#### Introduserer Sierra: At hver Kairo går kan bevises

Det viktigste tillegget i Cairo 1. er Sierra (**S**afe**Jeg**nt**e**rmediat**R**ep**r**esent**en**)). Sierra utgjør et nytt delrepresentasjonslag mellom Cairo 1.0 og Cairo byte-kode. Målet til Siar er å sikre at hver kairo kjører – dvs. et Kairo-program og dens innsats – kan påvises (se mer nedenfor).

Sierra lover Cairo en bedre fremtidssikret kode. Videre stabilitet tilbys av at det ikke er behov for rekompilering av kontrakten med StarkNet ved forbedringer av underliggende system (e. ., CPU AIR-arkitektur endret, forbedringer av den endelige oversettelsen fra Sierra til Cairo byte kode).

**For alle Kairo kjører.**I gamle Cairos kan en kairo streng resultere i tre tilfeller — TRUE , FALSE, eller feil. Mislyktes kan ikke bli påvist. Sierra sørger for at et Kairo aldri vil mislykkes og bare resultere i en TRUE eller FALSE. Det sikrer i sin tur at alle flyreiser kan påkjennes.

Innføringen av Sierra har stor betydning for StarkNet som et tillatelsesløst nett. Sierra sørger for at også transaksjoner kan bli tatt med i StarkNet blokker. Denne egenskapen vil gjøre det mulig for StarkNet protocol å holde seg magre og enkelt uten behovet for å legge til komplekse krypto-økonomiske mekanismer.\
to meningsfulle eksempler:

1. Sekretsørgere kan samle inn avgifter på reverserte transaksjoner, slik at StarkNet kan forhindre sekvenser DoS på en veletablert måte.
2. Det vil være mulig å gjennomføre tvangsL1-transaksjoner som gir StarkNet muligheten til å arve hele endefestet for Ethereum.

### **Språk Funksjoner**

Cairo 1.0 vil tilby mange forbedringer til programmeringsspråket selv. Ikke alt nedenfor vil være en del av den første utgivelsen, men er en del av veikartet.

#### **Forbedret syntaks**

* Ingen flere*lokale*og*tempo*. Vi trenger nå bare*la*for å bestemme dem alle variablene.
* Forbedret*hvis*instruksjoner syntaks

```python
#Gammel
hvis en kule ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
hvis cond { x = x + 1; }
```

#### **Type sikkerhetsgarantier**

Komileren vil bruke en sterk skriving for å forbedre kodens sikkerhet. For eksempel:

* Pointers vil alltid peke på initialisert minne.
* Ordbøker vil alltid bli kastet, i motsetning til å overlate ansvaret for å ringe squash_dict til programmeret.

#### **Enklere å bruke språkkonstruksjoner**

For eksempel:

* For-løkker

```
let sum = 0
for x hos iter {
  sum = sum + x;
}
```

* Boolske uttrykk
* Heltall (med vanlig heltalldivisjon 👯)
* Overflytsbeskyttelse for de aktuelle typene
* Boolske betingelser

```
#Old
If cond1:
  if cond2:
       # Noe kode
  else hvis cond3:
       # Samme kode
__________________________________
#New
If cond1 && (cond2 δcond3) { … }
```

#### **Et fullstendig flommt typesystem**

* Sammendrag av datatyper (dvs. Rust-lignende nummer)

```
Enum Option<T> {
 Some: T,
 Ingen,
}
matcher resultatet {
 Noen (r) => {..},
 Ingen => {..},
}
```

* Egenskap

```
trekk til<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // evaluert til 5 av type Uint256.
```

#### **Flere intuitive biblioteker**

(f.eks. dietter, matriser)

* Dikt<Uint256, MyStruct>;
* Matrise<MyOtherStruct>;

#### **Mer optimalisert kode**

Ingen behov for eksplisitt fordeling av lokale variabler - automatisk detektert og utført automatisk.

#### **Bedre kompileringsintegrering**

Tilrettelegging for bedre IDE-støtte, pakkehåndtering og bedre tilrettelegging av samfunnsbidrag.

### **Konklusjon**

To år etter at Cairo var første i produksjon, utvikler vi Cairo 1.0, som vil levere forbedret uttrykksbilitet, sikkerhet og syntaks. Det vil ta en stor innsats fremover, slik at utviklere lettere kan skrive sine StarkNet kontrakter.

I en annen post, snart vil vi dele mer detaljer om hvordan Kairo 1. vil påvirke StarkNetts regenese og hvordan utviklerne skal forberede seg på frigivelse.