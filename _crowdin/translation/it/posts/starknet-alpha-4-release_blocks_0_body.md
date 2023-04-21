### Tempi Emozionanti Ahead

Alpha 4 è stato rilasciato oggi su Goerli. Questa versione è il candidato di rilascio Mainnet e, se tutto va secondo il piano, sarà distribuito su Mainnet entro la fine del mese.

Alpha 4 segue il rilascio ricco di caratteristiche di Alpha 3, che includeva, tra le altre cose, miglioramenti dei tempi di compilazione del Cairo, dei costruttori di contratti e molto altro ancora (vedi le[note di rilascio complete](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Importante da notare: questa è ancora una versione Alpha — per distribuire il contratto sulla distribuzione Mainnet, seguire le linee guida[onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)delle nuove applicazioni.

### Nuove Funzionalità

Anche se il focus principale di questa versione è quello di prepararsi per la distribuzione Mainnet, include anche diverse nuove funzionalità:

#### Ottieni l'indirizzo di questo contratto

I contratti possono ora ottenere il proprio indirizzo tramite il nuovo syscall \`get_contract_address\`. Possiamo infine mettere a riposo il contratto selfie.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP selfie contract: settembre 2021-novembre 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10 novembre 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blocca Hash

I blocchi sono ora identificati tramite hash piuttosto che Id. Questo segue la nostra ultima transizione agli hash delle transazioni. Tutte le API sono state aggiornate di conseguenza. Presto pubblicheremo la documentazione tecnica completa del sistema, che includerà anche le specifiche della struttura a blocchi.

#### Indirizzi Del Contratto

Questa versione introduce una modifica al modo in cui vengono calcolati gli indirizzi del contratto. L'indirizzo è un hash Pedersen sull'indirizzo del chiamante, un sale (casuale o scelto dal deployer), l'hash del codice del contratto e l'hash degli argomenti del costruttore, tutti allegati da un prefisso.

```
Hash(PREFIX, caller_address, salt, contract_hash, ctr_args_hash)
```

Nella versione corrente, l'indirizzo del chiamante è sempre uguale a 0, ma nelle versioni future questo permetterà l'implementazione di contratti direttamente da contratti esistenti.

Si noti che questo schema è molto simile a CREATE2.

[Vedi le note di rilascio complete](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Bridges

I ponti Token sono una parte cruciale dell'infrastruttura StarkNet. Consentono il trasferimento di fondi da e per StarkNet. Il ponte non è dispiegato al momento della pubblicazione, ma dovrebbe essere disponibile in pochi giorni — insieme alla documentazione completa della sua funzionalità e utilizzo. Una cosa importante da notare è che il bridge utilizza il protocollo[L1<>L2 di messaggistica](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). In quanto tale, offre tempi di prelievo brevi — una volta che un prelievo è incluso in un lotto e accettato su L1, i fondi sono immediatamente disponibili per l'utente su L1.

Questa è la prima versione dei ponti token, e ci piacerebbe ricevere un feedback dall'ecosistema su di esso.

### Unisciti A StarkNet

Non c'è mai stato un momento migliore per unirsi alla crescente comunità StarkNet. È possibile partecipare alla conversazione nel discord[StarkNet](https://discord.gg/uJ9HZTUk2Y), partecipare a un[workshop online](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), o usa uno dei[tutorial](https://www.cairo-lang.org/docs/hello_starknet/index.html)per iniziare a costruire la tua prima app.

**Aggiornamento (novembre 2021):**StarkNet Alpha è in diretta su Ethereum Mainnet