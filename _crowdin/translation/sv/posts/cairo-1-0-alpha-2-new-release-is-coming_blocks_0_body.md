### TL;DR

* Vi släpper Kairo 1.0-alpha.2, vilket ger en mängd nya funktioner till språket
* Det är nu möjligt att genomföra ett ERC20-avtal
* Dessa nya språkliga funktioner kommer att tillämpas i den kommande StarkNet-v0.11.0 versionen

### Nya fräscha funktioner!

Kairo 1.0 fortsätter sin snabba förbättring. Dagens utgåva introducerar bland annat alla nödvändiga funktioner för att skriva ett ERC-20-kontrakt.

För att nämna några av de nya funktionerna:

* Ordböcker
* Händelser i kontrakt
* Kartläggning av lagringsvariabler
* Stöd för egenskap
* Typ inferens
* Metoder

Se hela listan i GitHub [utvecklingskatalogen.](https://github.com/starkware-libs/cairo)

Låt oss ta en titt på ett exempel på ett ERC20-avtal (det fullständiga konkreta exemplet är naturligtvis på[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) för att demonstrera ett användningsfall av en händelse och mappningar i lagring:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Hoppa i vattnet!

Vi fortsätter att arbeta med två parallella vektorer:

1. Evolve Cairo 1.0 i full fart mot fullfunktionskompatibilitet med det gamla Kairo.
2. Utveckla Starknet v0.11.0 som kommer att stödja kontrakt skrivna i Kairo 1.0

Under tiden uppmuntrar vi devs att börja skriva med Kairo 1.0 och bekanta sig med det.

För eventuella frågor – du kan använda Cairo 1.0 Discord[kanal](https://discord.com/channels/793094838509764618/1065544063245365288).

För några förslag eller feedback — tveka inte att öppna en[fråga](https://github.com/starkware-libs/cairo/issues)i Kairo repo.