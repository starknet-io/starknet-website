### Opwindende tye wat voorlê

Alpha 4 is vandag op Goerli vrygestel. Hierdie weergawe is die Mainnet-vrystellingskandidaat en, as alles volgens plan verloop, sal dit teen die einde van die maand op Mainnet ontplooi word.

Alpha 4 volg die kenmerkbelaaide vrystelling van Alpha 3, wat onder andere verbeterings aan die Kaïro-samestellingstye, kontrakkonstruktors en nog baie meer ingesluit het (sien die[volledige vrystellingnotas](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Belangrik om daarop te let: dit is steeds 'n alfa-weergawe - om jou kontrak op die Mainnet-ontplooiing te ontplooi, volg asseblief die nuwe toepassings se[aanboord](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)riglyne.

### Nuwe kenmerke

Alhoewel hierdie weergawe se hooffokus daarop is om gereed te maak vir die Mainnet-ontplooiing, bevat dit ook verskeie nuwe kenmerke:

#### Kry hierdie kontrak se adres

Kontrakte kan nou hul eie adres kry via die nuwe syscall \`get_contract_address\`. Ons kan uiteindelik die selfie-kontrak tot rus bring.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP-selfiekontrak: September 2021-November 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10 November 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blokkeer Hash

Blokke word nou via hash eerder as Id geïdentifiseer. Dit volg op ons jongste oorgang na transaksie-hashes. Alle API's is dienooreenkomstig opgedateer. Ons sal binnekort volledige tegniese dokumentasie van die stelsel vrystel, wat ook die spesifikasie van die blokstruktuur sal insluit.

#### Kontrakadresse

Hierdie weergawe stel 'n verandering in die manier waarop kontrakadresse bereken word. Die adres is 'n Pedersen-hash op die oproeperadres, 'n sout (willekeurig of gekies deur die ontplooier), die kontrakkode-hash, en die hash van die konstruktorargumente, alles aangeheg deur 'n voorvoegsel.

```
Hash(PREFIX, beller_adres, sout, contract_hash, ctr_args_hash)
```

In die huidige weergawe is die oproeperadres altyd gelyk aan 0, maar in toekomstige weergawes sal dit die ontplooiing van kontrakte direk vanaf bestaande kontrakte moontlik maak.

Let daarop dat hierdie skema baie soortgelyk is aan CREATE2.

[Sien die volledige vrystellingnotas](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Bridges

Tekenbrûe is 'n belangrike deel van StarkNet-infrastruktuur. Hulle laat die oordrag van fondse na en van StarkNet toe. Die brug word nie ten tyde van publikasie ontplooi nie, maar dit behoort binne 'n paar dae beskikbaar te wees - saam met die volledige dokumentasie van die funksionaliteit en gebruik daarvan. Een ding wat belangrik is om daarop te let, is dat die brug die[L1<>L2-boodskappe](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)protokol gebruik. As sodanig bied dit kort onttrekkingstye - sodra 'n onttrekking in 'n bondel ingesluit is en op L1 aanvaar is, is die fondse onmiddellik vir die gebruiker op L1 beskikbaar.

Dit is die eerste weergawe van die tekenbrûe, en ons sal graag terugvoer van die ekosisteem daaroor wil kry.

### Sluit aan by StarkNet

Daar was nog nooit 'n beter tyd om by die groeiende StarkNet-gemeenskap aan te sluit nie. Jy kan by die gesprek aansluit in die[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), deelneem aan 'n[aanlyn werkswinkel](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), of een van die[tutoriale](https://www.cairo-lang.org/docs/hello_starknet/index.html)gebruik om jou eerste eie toepassing te begin bou.

**Opdatering (Nov. 2021):**StarkNet Alpha is regstreeks op Ethereum Mainnet