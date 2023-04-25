### TL;DR

* Vi frigiver Cairo 1.0-alpha.2, som bringer et væld af nye funktioner til sproget
* Det er nu muligt at gennemføre en ERC20-kontrakt
* Disse nye sproglige funktioner vil være gældende i den kommende StarkNet-v0.11.0 version

### Fresh nye funktioner!

Cairo 1.0 fortsætter sin hurtige forbedring tempo. Dagens udgivelse introducerer blandt andet alle de nødvendige funktioner til at skrive en ERC-20 kontrakt.

For at nævne nogle af de nye funktioner:

* Ordbøger
* Begivenheder i kontrakter
* Variabler for kortlagring
* Understøttelse af træk
* Indtast inferens
* Metoder

Se den komplette liste i GitHub [repository.](https://github.com/starkware-libs/cairo)

Lad os se på et eksempel på en ERC20-kontrakt (det fulde konkrete eksempel er naturligvis på[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) for at demonstrere et tilfælde af brug af en begivenhed og tilknytninger i lagringen:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Hop ind i vandet!

Vi fortsætter med at arbejde på to parallelle vektorer:

1. Udvikle Cairo 1.0 ved fuld hastighed mod fuld funktion kompatibilitet med den gamle Cairo.
2. Udvikle Starknet v0.11.0, der vil støtte kontrakter skrevet i Cairo 1.0

I mellemtiden, opfordrer vi udviklere til at begynde at skrive med Cairo 1.0 og få kendskab til det.

For eventuelle spørgsmål — du kan bruge Cairo 1.0 Discord[kanal](https://discord.com/channels/793094838509764618/1065544063245365288).

For eventuelle forslag eller feedback — tøv ikke med at åbne et[problem](https://github.com/starkware-libs/cairo/issues)i Cairo repo.