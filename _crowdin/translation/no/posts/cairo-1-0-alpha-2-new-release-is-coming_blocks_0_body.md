### TL;DR

* Vi lanserer Cairo 1.0-alpha.2, som gir deg en rekke nye funksjoner til språket
* Nå er det mulig å implementere en ERC20-kontrakt
* De nye språklige funksjonene vil bli anvendbare i den kommende StarkNet-v0.11.0 versjonen

### Nye funksjoner er ferske!

Cairo 1.0 fortsetter sin raske forbedringshastighet. Dagens løslatelse innfører blant annet alle nødvendige elementer for å skrive en ERC-20-kontrakt.

For å nevne noen av de nye funksjonene:

* Ordlister
* Hendelse i kontrakter
* Tilordning av lagringsvariabler
* Egenskapsstøtte
* Skriv inn preferanse
* Metoder

Se den komplette listen i GitHub [-arkivet.](https://github.com/starkware-libs/cairo)

La oss se på en eksempel på en ERC20-kontrakt (fullstendig konkret eksempel er, selvsagt på[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) for å demonstrere et brukstilfelle av en hendelse og tilordninger på butikken:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Hopp ned i vannet!

Vi fortsetter å arbeide med to parallelle vektorer:

1. Utvikle Kairo 1.0 i full hastighet mot fullfunksjons kompatibilitet med den gamle Kaifra.
2. Utvikle Starknet v0.11.0 som vil støtte kontrakter skrevet i Cairo 1.0

I mellomtiden oppfordrer vi oss til å begynne å skrive med Cairo 1.0 og bli kjent med det.

For spørsmål — du kan bruke Cairo 1.0 Discord[-kanalen](https://discord.com/channels/793094838509764618/1065544063245365288).

For alle forslag eller tilbakemeldinger — ikke nøl med å åpne et[problem](https://github.com/starkware-libs/cairo/issues)i Kairo repo.