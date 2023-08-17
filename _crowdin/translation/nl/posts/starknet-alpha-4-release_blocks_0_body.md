### Overschrijdende tijden

Alfa 4 werd vandaag op Goeri vrijgelaten. Deze versie is de vrijgave-kandidaat voor Mainnet en als alles volgens plan verloopt, zal het eind van de maand op Mainnet worden ingezet.

Alfa 4 volgt de uitgave van Alpha 3, die onder meer bestaat verbeteringen in de compilatietijden van Cairo, aannemers en veel meer (zie de[volledige release-notities](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Belangrijke opmerking: dit is nog steeds een Alpha versie - om je contract te implementeren op de Mainnet implementatie, volg alstublieft de richtlijnen van nieuwe apps[onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)van de app.

### Nieuwe functies

Hoewel deze versie zich vooral concentreert op het voorbereiden van de implementatie van Mainnet, bevat het ook verschillende nieuwe kenmerken:

#### Ontvang dit contractadres

Contracts kunnen nu hun eigen adres krijgen via de nieuwe syscall \`get_contract_address\`. We kunnen eindelijk het selfie contract rusten.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP selfie contract: September 2021-november 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">November 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Hash van blok

Blokken worden nu via hash geïdentificeerd in plaats van via Id. Dit volgt onze laatste overgang naar transactiehashes. Alle API's zijn aangepast. We zullen binnenkort de volledige technische documentatie van het systeem openbaar maken, die ook de specificatie van de blokstructuur zal omvatten.

#### Contract adressen

Deze versie introduceert een wijziging van de manier waarop de adressen van het contract worden berekend. Het adres is een Pedersen hash op het beller adres, een zout (willekeurig gekozen door de deployer), de contractcode hash, en de hash van de constructor argumenten, allemaal toegevoegd door een prefix.

```
Hash(PREFIX, caller_adres, zout, contract_hash, ctr_args_hash)
```

In de huidige versie is het belleradres altijd gelijk aan 0, maar in toekomstige versies zal dit het mogelijk maken om contracten direct op basis van bestaande contracten te gebruiken.

Merk op dat deze regeling veel lijkt op CREATE2.

[Bekijk de volledige release notes](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Bruggen

Tokenbruggen vormen een cruciaal onderdeel van StarkNet-infrastructuur. Ze maken het mogelijk om fondsen over te maken van StarkNet. De brug wordt niet ingezet op het moment van publicatie, maar het zou binnen enkele dagen beschikbaar moeten zijn - samen met de volledige documentatie van de functionaliteit en het gebruik. Belangrijk om op te merken is dat de bridge gebruik maakt van het[L1<>L2 messaging](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)protocol. Als zodanig biedt het korte opnametijden - zodra een opname is opgenomen in een batch en geaccepteerd op L1, het saldo is direct beschikbaar voor de gebruiker op L1.

Dit is de eerste versie van de token bridges, en we zouden graag feedback krijgen van het ecosysteem erop.

### Deelnemen aan StarkNet

Er is nog nooit een beter moment geweest om toe te treden tot de groeiende StarkNet-gemeenschap. Je kunt deelnemen aan het gesprek in de[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), neem deel aan een[online workshop](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), of gebruik een van de[tutorials](https://www.cairo-lang.org/docs/hello_starknet/index.html)om te beginnen met het maken van je eigen app.

**Update (Nov. 2021):**StarkNet Alpha is live op Ethereum Mainnet