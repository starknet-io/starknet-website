### Vzrušující časy vpřed

Alfa 4 byla dnes vydána na Goerli. Tato verze je kandidátem na vydání Mainnet, a pokud vše půjde podle plánu, bude do konce měsíce nasazena na Mainnet.

Alfa 4 sleduje vydání alfa 3 v balení, které mimo jiné zahrnuje vylepšení v Káhiře kompilační doby, smluvních konstruktorů a mnohem více (viz[poznámky k plnému vydání](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Důležité upozornění: toto je stále verze Alpha – pro nasazení vaší smlouvy v mainnetu postupujte podle pokynů[pro nové aplikace](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu).

### Nové funkce

Přestože se tato verze zaměřuje především na připravenost na nasazení Mainnet, obsahuje také několik nových funkcí:

#### Získat adresu této smlouvy

Smlouvy mohou nyní získat svou vlastní adresu prostřednictvím nového syscall \`get_contract_address\`. Konečně můžeme přestat uzavírat smlouvu o soběstačnosti.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Selektivní neproporcionální zajištění (pojištění majetku)</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10. listopadu, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Hash bloku

Bloky jsou nyní identifikovány spíše pomocí hash než Id. To následuje po posledním přechodu na hashy transakcí. Všechny schválené systémy pro uveřejňování informací byly odpovídajícím způsobem aktualizovány. Brzy zveřejníme úplnou technickou dokumentaci systému, která bude zahrnovat také specifikaci blokové struktury.

#### Adresa kontraktu

Tato verze zavádí změnu způsobu výpočtu smluvních adres. Adresa je hash Pedersen na adrese volajícího, sůl (náhodně nebo vybraná nasazovatelem), kód smlouvy hash a hash argumentů konstruktoru, všechny připojené prefixem.

```
Hash(PREFIX, caller_adresa, sůl, contract_hash, ctr_args_hash)
```

V současné verzi se adresa volajícího vždy rovná 0, ale v budoucích verzích umožní nasazení smluv přímo ze stávajících smluv.

Je třeba poznamenat, že tento režim je velmi podobný CREATE2.

[Viz poznámky k úplnému vydání](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Tokenské mosty

Tokenské mosty jsou klíčovou součástí infrastruktury StarkNet. Umožňují převod finančních prostředků na StarkNet. Most není v době zveřejnění nasazen, ale měl by být k dispozici během několika dnů – spolu s úplnou dokumentací jeho funkčnosti a používání. Jedna věc důležitá je to, že most používá protokol[L1<>L2 zprávy](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). Jako taková nabízí krátké lhůty pro výběr – jakmile je stažení zahrnuto do šarže a přijato na úrovni L1, finanční prostředky jsou okamžitě k dispozici uživateli na L1.

Toto je první verze symbolických mostů a rádi bychom na ni získali zpětnou vazbu od ekosystému.

### Připojit se k StarkNet

Nikdy nebyl lepší čas na připojení se k rostoucí komunitě StarkNet. Můžete se připojit ke konverzaci v[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), zúčastnit se[online workshopu](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8). nebo použijte jeden z[výukových kurzů](https://www.cairo-lang.org/docs/hello_starknet/index.html), abyste začali vytvářet svou první vlastní aplikaci.

**Aktualizace (Nov. 2021):**StarkNet Alpha je živá na Ethereum Mainnet