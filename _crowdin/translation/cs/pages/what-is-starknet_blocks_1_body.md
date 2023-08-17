## Úvod

Starknet je Validity Rollup Layer 2. Poskytuje vysoký výkon, nízké náklady na plyn a zachovává úroveň bezpečnosti Ethereum Layer 1.

Daný sudoku hádanka, ověření řešení je snazší než řešení od nuly. Pokud je naším cílem přesvědčit lidi o prohlášení „tato hádanka byla vyřešena“, spoustu výpočtů můžeme ušetřit tím, že jeden člověk spočítá řešení a poté je šíří a ověřuje ostatní. V této strategii se každý výpočet řešení stává jednorázovou událostí, která nevyžaduje replikaci ze strany společnosti. V podobném duchu se Starknet šupiny Ethereum nahradí těžkým výpočtem L1 zapalovačem (proto levnější!) L1 ověření pomocí průkazů STARK vypočtené mimo řetězec.

## Chápu, že to funguje

S ohledem na výše uvedenou analogii je čas zralý na nějaký jargon. Starknet je nepřípustná validity-Rollup (známá také jako „ZK-Rollup“), která podporuje obecný výpočet a v současné době působí ve výrobě jako síť L2 přes Ethereum. Konečné zabezpečení softwaru Starknet L1 je zajištěno použitím nejbezpečnějšího a nejškálovatelnějšího kryptografického důkazního systému – [STARK](https://starkware.co/stark/).

Starknet kontrakty jsou (z větší části) napsané v Káhiře – Turing kompletní programovací jazyk navržený pro důkazy STARK.