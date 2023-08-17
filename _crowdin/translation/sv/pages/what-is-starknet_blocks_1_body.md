## I<unk> ntroduction

Starknet är ett Validity Rollup Layer 2. Den ger hög genomströmning, låga gaskostnader och behåller Ethereum Layer 1-säkerhetsnivåer

Med tanke på ett sudoku pussel, är det lättare att verifiera en lösning än att lösa från grunden. Om vårt mål är att övertyga människor om påståendet “detta pussel har löstes”, vi kan spara en hel del beräkningar genom att ha en person beräkna en lösning och sedan propagera för andra att kontrollera. I denna strategi, varje beräkning av en lösning blir en engångshändelse som inte kräver replikering av samhället. I liknande vener, Starknet skalor Ethereum genom att ersätta tung L1 beräkning med lättare (därmed billigare!) L1-verifiering med STARK-korrekturer beräknade utanför kedjan.

## Hur fungerar det

Med ovanstående analogi i åtanke är tiden mogen för någon jargong. Starknet är en behörighetslös Validity-Rollup (även känd som en “ZK-Rollup”) som stöder allmän beräkning och fungerar för närvarande i produktion som ett L2-nätverk över Ethereum. Den slutliga L1-säkerheten i Starknet säkerställs genom dess användning av det säkraste och mest skalbara kryptografiska säkra systemet – [STARK](https://starkware.co/stark/).

Starknet kontrakt är (för det mesta) skrivet i Kairo språk – ett Turing komplett programmeringsspråk som är utformat för STARK korrektur.