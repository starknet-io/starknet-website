### TL; DR

* Ons stel Cairo 1.0-alpha.2 vry, wat 'n magdom nuwe kenmerke na die taal bring
* Dit is nou moontlik om 'n ERC20-kontrak te implementeer
* Daardie nuwe linguistiese kenmerke sal in die komende StarkNet-v0.11.0-weergawe van toepassing wees

### Vars nuwe funksies!

Cairo 1.0 gaan voort met sy vinnige verbeteringstempo. Vandag se vrystelling stel onder andere al die nodige kenmerke bekend om 'n ERC-20-kontrak te skryf.

Om sommige van die nuwe kenmerke te noem:

* Woordeboeke
* Gebeurtenisse in kontrakte
* Kartering van stoorveranderlikes
* Eienskap ondersteuning
* Tik afleiding
* Metodes

Sien die volledige lys in die GitHub [-bewaarplek.](https://github.com/starkware-libs/cairo)

Kom ons kyk na 'n voorbeeld van 'n ERC20-kontrak (die volledige konkrete voorbeeld is natuurlik op[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) om 'n gebruiksgeval van 'n gebeurtenis en kartering in die stoor te demonstreer:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Spring in die water!

Ons gaan voort om aan twee parallelle vektore te werk:

1. Ontwikkel Cairo 1.0 teen volle spoed na volle funksie-versoenbaarheid met die ou Kaïro.
2. Ontwikkel Starknet v0.11.0 wat kontrakte sal ondersteun wat in Kaïro 1.0 geskryf is

Intussen moedig ons ontwikkelaars aan om met Cairo 1.0 te begin skryf en daarmee vertroud te raak.

Vir enige vrae — jy kan die Cairo 1.0 Discord[kanaal](https://discord.com/channels/793094838509764618/1065544063245365288)gebruik.

Vir enige voorstelle of terugvoer — moet asseblief nie huiwer om 'n[uitgawe](https://github.com/starkware-libs/cairo/issues)in die Kaïro-repo oop te maak nie.