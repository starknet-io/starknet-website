### Excitent timp înainte

Alpha 4 a fost lansată astăzi pe Goerli. Această versiune este candidatul la lansarea Mainnet și, dacă totul merge conform planului, va fi instalată pe Mainnet până la sfârșitul lunii.

Alpha 4 urmează eliberarea de Alpha 3, ambalată în cutii de caracteristici, care cuprinde, printre altele, îmbunătățiri pentru timpii de compilare Cairo, constructori contractuali și multe altele (a se vedea[notele de lansare completă](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Important de remarcat: aceasta este încă o versiune Alpha – pentru a implementa contractul privind implementarea Mainnet, te rugăm să urmezi liniile directoare[de înregistrare](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)ale aplicațiilor.

### Caracteristici noi

Deși această versiune se concentrează în principal pe pregătirea pentru implementarea rețelei multinaționale, ea include, de asemenea, mai multe caracteristici noi:

#### Obțineți adresa acestui contract

Contractele pot obține acum propria adresă prin intermediul noii syscall \`get_contract_address\`. În cele din urmă, putem pune contractul cu selfie să se odihnească.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Contractul de selfie prin RIP: septembrie 2021-noiembrie 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">noiembrie 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Hash Bloc

Blocurile sunt acum identificate mai degrabă prin hash decât prin Id. Aceasta urmează celei mai recente tranziții către hash-urile noastre. Toate API au fost actualizate în consecință. Vom publica în curând documentaţia tehnică completă a sistemului, care va include şi specificaţia structurii pe bloc.

#### Adrese contractuale

Această versiune introduce o modificare în modul în care sunt calculate adresele contractului. Adresa este un hash Pedersen pe adresa apelantului, o sare (aleatorie sau aleasă de implementator), codul contractual și hash-ul argumentelor constructorului, toate atașate de un prefix.

```
Hash(PREFIX, caller_address, sare, contract_hash, ctr_args_hash)
```

În versiunea actuală, adresa apelantului este întotdeauna egală cu 0, dar, în versiunile viitoare, acest lucru va permite desfășurarea de contracte direct din contractele existente.

Trebuie remarcat faptul că această schemă este foarte asemănătoare cu CREATE2.

[Vezi notele complete de lansare](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Punți simbolice

Podurile token reprezintă o parte esențială a infrastructurii StarkNet. Permite transferul de fonduri către şi de la StarkNet. Podul nu este utilizat în momentul publicării, dar ar trebui să fie disponibil în câteva zile – împreună cu documentarea completă a funcționalității și utilizării sale. Un lucru important de notat este că podul folosește protocolul[L1<>L2 pentru mesagerie](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). Ca atare, oferă termene scurte de retragere – odată ce o retragere este inclusă în lot și acceptată în lotul L1; fondurile sunt disponibile instantaneu utilizatorului pe L1.

Aceasta este prima versiune a podurilor tokene, și ne-ar plăcea să primim feedback de la ecosistem cu privire la asta.

### Alătură-te StarkNet

Nu a existat niciodată un moment mai bun pentru a se alătura comunităţii StarkNet în creştere. Poți să te alături conversației în[discordul StarkNet](https://discord.gg/uJ9HZTUk2Y), să participi la un[workshop online](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), sau folosește unul dintre[tutorialele](https://www.cairo-lang.org/docs/hello_starknet/index.html)pentru a începe construirea primei tale aplicații.

**Actualizare (Nov. 2021):**StarkNet Alpha este live pe Ethereum Mainnet