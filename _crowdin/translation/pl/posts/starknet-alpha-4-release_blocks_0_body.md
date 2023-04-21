### Czas ekscytacji z góry

Alfa 4 została dziś wydana w Goerli. Ta wersja jest kandydatem do wydania Mainnet, a jeśli wszystko będzie zgodne z planem, zostanie wdrożona na Mainnet przed końcem miesiąca.

Alfa 4 jest następstwem uwalniania Alpha 3, które obejmowało między innymi ulepszenia czasu kompilacji Kaira, konstruktorów kontraktu i wiele więcej (patrz[notatki o pełnym wydaniu](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Ważne: nadal jest to wersja Alfa — aby wdrożyć umowę na wdrożenie Mainnet, proszę postępować zgodnie z wytycznymi[wdrożenia nowych aplikacji](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu).

### Nowe funkcje

Chociaż głównym celem tej wersji jest przygotowanie się do wdrożenia Mainnet, obejmuje ona również kilka nowych funkcji:

#### Uzyskaj adres umowy

Kontrakty mogą teraz otrzymać własny adres za pośrednictwem nowego syscalu \`get_contract_address\`. Na koniec możemy odpocząć umowę selfie.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Kontrakt selfie w ODP: wrzesień 2021–listopad 2021 r.</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">listopada 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Hash bloku

Bloki są teraz identyfikowane za pomocą skrótu zamiast identyfikatora. Jest to następstwem naszego ostatniego przejścia na hashy transakcji. Wszystkie API zostały odpowiednio zaktualizowane. Wkrótce opublikujemy pełną dokumentację techniczną systemu, która obejmie również specyfikację konstrukcji bloku.

#### Adresy umowne

Ta wersja wprowadza zmianę sposobu obliczania adresów umowy. Adres jest hasłem Pedersen na adresie dzwoniącego, soli (losowej lub wybranej przez dewelopera), kod umowy i skrót argumentów konstruktora, wszystkie dołączone prefiksem.

```
Hash(PREFIX, wywołujący_adres, salt, contract_hash, ctr_args_hash)
```

W obecnej wersji adres dzwoniącego zawsze jest równy 0, ale w przyszłych wersjach umożliwi to realizację umów bezpośrednio z istniejących umów.

Należy zauważyć, że program ten jest bardzo podobny do CREATE2.

[Zobacz informacje o pełnej wersji](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Mostki tokenów

Mosty tokenowe stanowią kluczowy element infrastruktury StarkNet. Pozwalają one na transfer środków do i z StarkNet. most nie jest rozmieszczony w momencie publikacji, ale powinien być dostępny w ciągu kilku dni – wraz z pełną dokumentacją jego funkcjonalności i zastosowania. Jedną z ważnych rzeczy jest to, że most używa protokołu[L1<>L2 messaging](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). W związku z tym oferuje on krótkie terminy wycofania – gdy wycofanie zostanie włączone do partii i zaakceptowane na L1, środki są natychmiast dostępne dla użytkownika na L1.

To pierwsza wersja tokenów mostów i chcielibyśmy uzyskać informacje zwrotne od ekosystemu.

### Dołącz do StarkNet

Nigdy nie było lepszego czasu na dołączenie do rosnącej społeczności StarkNet. Możesz dołączyć do rozmowy w[dysku StarkNet](https://discord.gg/uJ9HZTUk2Y), wziąć udział w[warsztatach online](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), lub użyj jednego z[samouczków](https://www.cairo-lang.org/docs/hello_starknet/index.html), aby rozpocząć budowę swojej pierwszej własnej aplikacji.

**Aktualizacja (listopad 2021):**StarkNet Alpha jest żywa na Ethereum Mainnet