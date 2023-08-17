### TL;DR

* Kairo 1.0 är den första stora versionen efter[införandet av Kairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)för två år sedan
* Cairo 1.0 kommer att ge utvecklare ett säkrare, enklare, mer användbart programmeringsspråk
* I hjärtat av Kairo 1.0 kommer att vara**Sierra**, ett mellanliggande representationslager som lovar större långsiktig stabilitet för Kairo program
* Sierra avancerar Kairo för att fungera i ett behörighetslöst nätverk:\
  -**Skydda nätverket**: det tillåter mer robust DoS-skydd\
  -**Skydda användaren**: det tillåter Ethereum-grad censur motståndKairo 1. kommer att påverka StarkNet på många sätt. Det kommer också att påverka[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Vi kommer att lägga upp mer information om Regenesis under de kommande veckorna.

### Introduktion

År 2020 släppte vi Kairo, en Turing-komplett programmeringsspråk, och tog ett stort steg mot att stödja verifierbar beräkning med STARKs. Idag tillkännager vi**Kairo 1.0**, den största utvecklingen av Kairo hittills. Det kommer att införa ett förbättrat språk, med funktioner som kommer att förbättra användbarhet, säkerhet och bekvämlighet. Den är utformad för att stödja Starknets krav som ett behörighetslöst nätverk, vilket gör att protokollet blir enklare och säkrare.\
Utvecklingen pågår redan, och vi förväntar oss att den första versionen kommer att ske snart.

I det här inlägget kommer vi att beskriva Kairo resa hittills och dela detaljer om de kommande funktionerna.

### Kairo resa

Fram till 2020 behövdes nischkunskap för att bygga STARK-bevisbara program för allmän beräkning. Det var bara möjligt för dem som förstod den komplexa matematik som låg bakom STARKEN. Specifikt, för varje affärslogik, dvs varje beräkning, en som behövs för att generera en algebraisk mellanliggande representation (AIR) - en uppsättning polynom begränsningar som representerar den specifika beräkningen.

Kairo föddes ur insikten att verifierbara beräkningar bör göras tillgängliga för utvecklare överallt. Kairo gör det möjligt för utvecklare att utnyttja kraften i STARKs.

Utvecklarsamhället har sedan dess beslagtagit Kairo för att bygga entusiastiskt. Allt i det blomstrande StarkNet-ekosystemet idag är baserat på Kairo. Mellan[StarkNet](https://starkware.co/starknet/)och[StarkEx](https://starkware.co/starkex/)har Cairo-drivna applikationer behandlat över 220M transaktioner, präglade mer än 65M NFTs, och hanterade $700B värde av affärer, alla bosatte sig på Ethereum.

Medan Kairo gjorde STARKs tillgänglig, var det ursprungligen utformad som ett monteringsspråk, och som sådan var det skrivet som ett lågt språk nivå.

![Ett exempel för de tidiga program som skrevs i Kairo](/assets/cairocode_01.png "Ett exempel för de tidiga program som skrevs i Kairo")

Förstärkt av feedback från utvecklare och ökningen av[StarkNet](https://starkware.co/starknet/), Vi gjorde Kairo gradvis mer uttrycksfull och mer utvecklarvänlig.

![Ett exempel från ERC-20 Kairo kontraktet visar stöd för variabler, om uttalanden, fel, och UINT256 bibliotek](/assets/cairocode_02.png "Ett exempel från ERC-20 Kairo kontraktet visar stöd för variabler, om uttalanden, fel, och UINT256 bibliotek")

Men vi kom snart fram till att det är dags att ta ett stort steg framåt och, istället för inkrementella förbättringar till Kairo, gå för en djärvare omvandling.

### Cairo 1.0

För Kairo 1. vi har byggt en helt ny kompilator från grunden, som kommer att ge utvecklare med säkerhetsfunktioner, och kommer att tillåta dem att skriva kontrakt på ett enklare och mer uttrycksfullt sätt.

#### Vi presenterar Sierra: att se till att varje Kairo kör kan bevisas

Huvudtillägget i Kairo 1. är Sierra (**S**har**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra utgör ett nytt mellanliggande representationslager mellan Kairo 1.0 och Kairo byte kod. Sierras mål är att se till att varje Kairo kör - dvs. ett Kairo program och dess ingång - kan bevisas (se mer nedan).

Sierra lovar Kairo devs bättre framtidssäker kod. Ytterligare stabilitet tillhandahålls av det faktum att StarkNet kontrakt inte kommer att behöva kompilera om i fallet med förbättringar av det underliggande systemet (e. ., CPU AIR arkitektur förändringar, förbättringar av den slutliga översättningen från Sierra till Kairo byte kod).

**Bevisa varje Kairo körning.**I gamla Kairo kan en Kairo köra resultera i tre fall — TRUE, FALSE, eller misslyckande. Misslyckade körningar kan inte bevisas. Sierra, ser till att en Kairo kör aldrig kommer att misslyckas, och kan bara resultera i TRUE eller FALSE. Detta i sin tur, ser till att varje Kairo kör kan bevisas.

Denna introduktion av Sierra har viktiga konsekvenser för StarkNet som ett behörighetslöst nätverk. Sierra ser till att även återställda transaktioner kan inkluderas i StarkNet block. Denna egenskap gör det möjligt för StarkNet protokollet att förbli mager och enkel utan att behöva lägga till komplexa kryptoekonomiska mekanismer.\
Två meningsfulla exempel:

1. Sequencers kommer att kunna samla in avgifter på återställda transaktioner, vilket gör det möjligt för StarkNet att förhindra Sequencer DoS på ett väletablerat sätt.
2. Det kommer att bli möjligt att genomföra påtvingade L1-transaktioner, vilket gör det möjligt för StarkNet att ärva Ethereums fulla censurmotstånd.

### **Språk funktioner**

Kairo 1.0 kommer att erbjuda många förbättringar av programmeringsspråket i sig. Inte allt som listas nedan kommer att vara en del av den första utgåvan, men det är en del av färdplanen.

#### **Förbättrad syntax**

* Inga fler*lokala*och*tempvar*. Vi behöver nu bara*låta*styra dem alla variabler.
* Förbättrad*om*-uttryckssyntax

```python
#Gammal
om cond ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
if cond { x = x + 1; }
```

#### **Typ av säkerhetsgaranti**

Kompilatorn kommer att använda stark skrivande för att förbättra säkerheten för koden. Till exempel:

* Pekare kommer alltid peka på initierat minne.
* Ordböcker kommer alltid att krossas, i motsats till att överlåta ansvaret att ringa squash_dict till programmeraren.

#### **Lättare att använda språkkonstruktioner**

Till exempel:

* För slingor

```
let sum = 0
för x i iter {
  summa = summa + x;
}
```

* Boolska uttryck
* Heltal (med regelbunden heltal division 👯)
* Överflödesskydd för relevanta typer
* Booleska förhållanden

```
#Old
If cond1:
  if cond2:
       # Some code
  else if cond3:
       # Samma kod
__________________________________
#New
If cond1 && (cond2 <unk> cond3) { … }
```

#### **Ett fullfjädrat typsystem**

* Abstrakta datatyper (dvs Rostliknande enum)

```
enum Alternativ<T> {
 Några: T,
 Ingen,
}
matchningsresultat {
 Some(r) => {..},
 Ingen => {..},
}
```

* Egenskaper

```
Egenskap Lägg till<Uint256> {
    fn add(…) { … }
}

låt a: Uint256 = 1;
låt b: Uint256 = 4;
a + b; // Utvärderas till 5 av typ Uint256.
```

#### **Mer intuitiva bibliotek**

(t.ex. dikter, arrayer)

* Dikt<Uint256, MyStruct>
* Array<MyOtherStruct>;

#### **Mer optimerad kod**

Inget behov av att explicit tillståndsfördelning av lokala variabler — automatisk upptäckt och görs automatiskt.

#### **Bättre kompileringsintegrering**

Möjliggöra bättre IDE-stöd, pakethantering och bättre underlättande av bidrag från samhället.

### **Slutsats**

Två år efter det att Kairo först användes i produktionen, utvecklar vi Kairo 1.0, som kommer att leverera förbättrad uttryckbarhet, säkerhet och syntax. Det kommer att ta ett stort steg framåt, vilket gör det möjligt för utvecklare att lättare skriva sina StarkNet-kontrakt.

I ett annat inlägg, kommer snart, kommer vi att dela mer information om hur Kairo 1. kommer att påverka StarkNet regenesis, och hur utvecklare bör förbereda sig för sin utgivning.