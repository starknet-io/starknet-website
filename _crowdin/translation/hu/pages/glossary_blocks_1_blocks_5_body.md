A Starknet OS használatával futtatott Starknet-tranzakciók rendezett halmazai, amelyek egyetlen összesített állapotváltozást eredményeznek, amelyet ezután a Starknet L1 alapszerződéshez kötnek. Egy blokk a következőket tartalmazza:

* … a blokk hash – egyedi stabil azonosító, amellyel lekérdezhetünk és hivatkozhatunk a blokkra.
* … a blokkszám – egy sorszám, amely a blokk helyét jelöli a Starknetben elfogadott blokkok sorrendjében. Megjegyzés: egy blokk száma idővel változhat. Ezenkívül egy adott szám különböző blokkra utalhat különböző időpontokban, például L1 lánc újrarendelése esetén.