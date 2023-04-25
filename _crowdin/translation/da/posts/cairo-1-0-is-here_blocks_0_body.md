### TL;DR

* Cairo 1.0 første udgivelse er her!
* Udviklere kan begynde at skrive og teste Cairo 1.0-programmer
* Feature paritet med den ældre version af Cairo vil blive nået i de kommende uger
* Støtte til StarkNet kontrakter vil blive tilføjet i den kommende StarkNet Alpha version

### Baggrund

Vi er glade for at kunne meddele, at den første offentlige version af Cairo 1.0 nu er tilgængelig. Dette markerer en vigtig milepæl i udviklingen af Kairo, som først blev introduceret i 2020 som en Turing-komplet programmeringssprog for effektivt at skrive STARK-bevislige programmer. Cairo 1.0 er et Rust-lignende sprog på højt niveau. Ligesom Rust, er det beregnet til at give udviklere til nemt at skrive kode, der er effektiv og sikker.

Siden starten har Cairo været brugt til at bygge lag-2 applikationer, der har[håndteret](https://dashboard.starkware.co/starkex)over 790 mia. USD handel; behandlede over 300 mio. transaktioner og prægede mere end 90 mio. NFT'er alle udført off-chain og afgjort på Ethereum med den matematiske integritet garanteret af STARK beviser. Kairo blev det 4. mest anvendte programmeringssprog i blokkæden[økosystem](https://defillama.com/languages)på fri fod. Med frigivelsen af Cairo 1. , Vi sigter mod at gøre sproget endnu mere tilgængeligt og brugervenligt og samtidig indføre nye funktioner, der forbedrer sikkerheden og bekvemmeligheden.

En af de vigtigste ændringer i Cairo 1.0 er syntaksen. Vi har hentet inspiration fra**Rust**for at skabe et mere udviklervenligt sprog, der er lettere at læse og skrive. Den nye version af Cairo giver mulighed for at skrive sikrere kode (stærkt skrevet, ejerskab og låntagning osv.), samtidig med at den er mere udtryksfuld.

Cairo 1.0 introducerer også Sierra, en ny mellemliggende repræsentation, der sikrer, at**alle**Kairo kørsler kan bevises. Dette gør Cairo 1.0 særlig velegnet til brug i et tilladelsesfrit netværk som StarkNet, hvor det kan give robust DoS-beskyttelse og censur modstand. Du kan læse mere om Sierra i vores[tidligere](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)indlæg.

## Første smag!

### Hvad kan du gøre i dag?

Udviklere kan begynde at skrive, kompilere og teste Cairo 1.0-programmer! Vi opfordrer udviklere til at begynde at eksperimentere med Cairo 1.0 og vænne sig til den nye syntaks og funktioner.

Da Cairo 1.0 stadig er aktivt udviklet, og nye funktioner tilføjes konstant, så tjek[Cairo repository](https://github.com/starkware-libs/cairo/)for de seneste opdateringer.

### Hvad er det næste?

I øjeblikket Cairo 1. mangler stadig nogle af de funktioner, der understøttes i den ældre version af Cairo ([se denne tabel for detaljer](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Vores næste milepæl, der forventes i de næste par uger, vil give Cairo 1.0 funktion paritet med den ældre version. Du kan spore fremskridt mod denne milepæl[her](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Starknet støtte

Skrive StarkNet kontrakter i Cairo 1.0 understøttes (selvom visse funktioner stadig mangler). Men StarkNet understøtter endnu ikke implementeringen og udførelsen af Cairo 1.0-kontrakter. StarkNet Alpha V0.11.0, planlagt i de kommende uger, vil introducere evnen til at implementere og køre Cairo 1.0 kontrakter. Opgraderingen til v0.11.0 markerer begyndelsen af overgangsperioden mod et system, der kun kører Cairo 1.0 kontrakter. Denne overgangsperiode slutter med[Gengenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), forventet et par måneder senere.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Lad os bygge!

Målet med StarkNet er at eksponentielt skalere Ethereum ved hjælp af den matematiske integritet af STARKs, og målet med Cairo er at gøre denne eksponentielle skala tilgængelig for udviklere. Tilgængelighed betyder et programmeringssprog, der er effektivt, let at læse og skrive, og sikkert at bruge. Vi håber, at udgivelsen af Cairo 1.0 vil inspirere endnu flere udviklere til at deltage StarkNet og skala Ethereum til at opfylde den globale efterspørgsel.