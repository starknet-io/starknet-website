### TL;DR

* Eliberăm Cairo 1.0-alfa.2, care aduce o mulțime de caracteristici noi în limbă
* Acum este posibilă punerea în aplicare a unui contract ERC20
* Aceste noi caracteristici lingvistice vor fi aplicabile în viitoarea versiune StarkNet-v0.11.0

### Caracteristici noi noi!

Cairo 1.0 îşi continuă ritmul de îmbunătăţire rapidă. Eliberarea de astăzi introduce, printre altele, toate caracteristicile necesare pentru redactarea unui contract ERC-20.

Pentru a menţiona câteva dintre noile caracteristici:

* Dicţionare
* Evenimente în contracte
* Mapare variabilele de stocare
* Suport tren
* Inferență de tip
* Metode

Vezi lista completă în depozitul GitHub [.](https://github.com/starkware-libs/cairo)

Să ne uităm la un exemplu de contract ERC20 (exemplul complet concret este, desigur, pe[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) pentru a demonstra un caz de utilizare a unui eveniment și cartografiere în spațiul de stocare:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Sari în apă!

Continuăm să lucrăm la doi vectori paraleli:

1. Evolve Cairo 1.0 la viteză maximă către compatibilitatea cu vechea Cairo.
2. Dezvoltă Starknet v0.11.0 care va sprijini contractele scrise în Cairo 1.0

Între timp, încurajăm dezvoltatorii să înceapă să scrie cu Cairo 1.0 şi să se familiarizeze cu el.

Pentru orice întrebare — poți folosi canalul Discord[Cairo 1.0](https://discord.com/channels/793094838509764618/1065544063245365288).

Pentru sugestii sau feedback — nu ezitați să deschideți o[problemă](https://github.com/starkware-libs/cairo/issues)în repo-ul Cairo.