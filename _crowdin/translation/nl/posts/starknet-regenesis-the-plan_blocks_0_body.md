### TL;DR

* We delen een gedetailleerd plan voor Regenesis, dat is gevormd door uitgebreide discussies met de StarkNet-gemeenschap. Speciale dank aan Kuba@SWM.
* Regenesis volgt de vrijlating van Cairo 1.0, waardoor het systeem veiliger wordt door eenvoudigere en veiliger Starknet-contracten toe te staan
* Gebruikers moeten voorbereid zijn op het bijwerken van hun portemonnee tijdens de overgangsfase
* Ontwikkelaars zullen verplicht zijn om hun contracten te porteren aan Cairo 1.0

### Introductie

StarkNet Alfa evolueert naar Regenesis, een belangrijke stap in de richting van productie. In deze update willen we meer details delen over de belangrijkste motivatie voor Regenesis —[Cairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)- en om uit te leggen wat gebruikers en ontwikkelaars nodig hebben. Na Regenesis werkt StarkNet alleen met Caïro 1.0-contracten, en zal beginnen bij een nieuw genesis-blok met de bestaande staat.

Wat zal Regenesis vereisen van gebruikers? Een eenvoudige update van hun portemonnee. Wat zal het vereisen van de bouwers van StarkNet's dapps? Het verzenden van hun contracten naar Caïro 1.0 en het volgen van een eenvoudige upgraderichtsnoer. Er zal geen sprake zijn van een schone staat en we zullen hetzelfde voorbeeld van StarkNet blijven volgen. betekent dat er geen behoefte is aan een migratie**.**

Het Regenesis-plan is om de status van de aanvragen volledig te behouden en niet af te wachten tot de aanvragen worden ingediend. Dus toepassingen die de richtlijnen volgen die we zullen aanbieden, kunnen direct starten op StarkNet Alpha Mainnet zonder dat ze hun werking verstoren en hun gebruikers tijdens het Regenesis-proces. e zet zich in om met de gemeenschap samen te werken en alle steun te bieden die nodig is om dit proces zo soepel mogelijk te laten verlopen.

We gaan die kant op als gevolg van uitgebreide discussies met de gemeenschap, die een belangrijke suggestie van het Software Mansion team omvatten.

### Waarom Regenesis?

#### Caïro 1.0 en Sierra

De belangrijkste motivatie voor Regenesis is het benutten van de nieuwe mogelijkheden die Caïro 1 biedt. – namelijk, sequencers DOS-bescherming, censuurweerstand en gasmeting, die essentieel zijn voor StarkNet als gedecentraliseerd netwerk.

Caïro 1.0 zorgt ervoor dat elke transactie kan worden bewezen. Dit zal StarkNet in staat stellen omgerekte transacties in blokken op te nemen en een bewijs van hun uitvoering genereren. Dit mechanisme maakt het mogelijk om sequencers te betalen voor de uitvoering van omgekeerde transacties, waardoor DOS bescherming tegen kwaadwillige actoren wordt verbeterd. Daarnaast ondersteunt Caïro 1.0 gasmeting, waardoor StarkNet kan overstappen op een meer intuïtieve transactiemarkt. Tot slot zal StarkNet hierdoor gedwongen transacties van L1 kunnen invoeren en de censuurbestendigheid van het netwerk kunnen verbeteren.

Om van deze voordelen te profiteren, kunnen de contracten van Caïro v0 en Caïro 1.0 niet gemengd worden. Onjuiste verklaringen kunnen niet onjuist blijken te zijn en gas kan ook niet worden gecontroleerd, als we stukjes Cairo v0 contracten hebben. Daarvoor zullen we Cairo v0 code volledig uit de StarkNet-staat moeten halen, ergo Regenesis.

**Na Regenesis, zullen we een Starknet systeem hebben dat volledig gebaseerd is op Caïro 1.0.**

#### Vereenvoudiging van de code en het protocol

StarkNet, terwijl het nog in Alpha, heeft al veel veranderingen ondergaan. Elke versie tot nu toe heeft de StarkNet OS, blokken en transacties aangepast. Hierdoor is een deel van de code verouderd. Maar volledige knooppunten en infrastructuuraanbieders (zoals indexers en staatverkenners) moeten zich bewust zijn van het bestaan en implementeer, alle eerdere gedragingen van StarkNet Alpha versies om vertrouwelijk te synchroniseren met de staat. Zonder Regenese zou deze last een grote afschrikwekkend effect kunnen hebben voor ontwikkelaars die zouden overwegen om dergelijke diensten voor Starknet te bouwen.

Voordat we naar de productie gaan, en als voorbereiding op een gedecentraliseerde wereld met veel infrastructurele instrumenten implementaties, zijn we daarom van plan de complexiteit van het protocol te verminderen. We zouden dit bereiken door toekomstige infrastructuren niet te eisen om StarkNet 0 uit te voeren. code en markeer het eerste blok na de overgangsperiode als het genesis-punt.

### Wen Regenseis? De algemene tijdlijn

Regenesis volgt de vrijlating van Caïro 1.0, die eind 2022 zal plaatsvinden. Gedurende Q1 van 2023 zal StarkNet worden bijgewerkt ter ondersteuning van Caïro 1. , en we streven ernaar om tegen het einde van Q1 te migreren naar een volledig op Cairo gebaseerd netwerk.

**Gebruikers en toepassingen zullen de overgang moeten maken gedurende deze periode.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Dus wat moet ik nu doen?

Applicatieontwikkelaars moeten zich bewust zijn van de volgende aspecten rond Regenesis:

1. Zorg ervoor dat je contract klaar is voor de upgrade. De volledige technische details van het plan worden gedeeld in het[StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Zodra de details zijn afgerond, zullen we een beknopt richtsnoer delen.
2. Zorg ervoor dat u klaar bent om uw code naar Caïro 1.0 te porteren. Bekijk volgende sectie voor alle laatste details.

#### Sportt je Contract naar Caïro 1.0

Caïro 1.0 heeft een geweldige belofte voor StarkNet ontwikkelaars. Een verbetering ten opzichte van het bestaande Caïro, dat veiliger, beter en gemakkelijker contracten zal schrijven met verbeterde syntaxis en volwaardig type systeem (iemand die deel uitmaakt van de autochtone uint256? en meer. Ontwikkelaars zullen verplicht zijn om hun bestaande StarkNet-contracten aan Cairo 1.0 syntax te porteren. Maar aangezien de logica en de code-structuur hetzelfde blijven. deze inspanning zal naar verwachting verwaarloosbaar zijn in vergelijking met de inspanningen die het heeft gekost om de app te ontwikkelen.

In deze context is het interessant om op te merken dat u kunt kiezen om de versie van Cairo 1.0 opnieuw te controleren. Als uw app in het verleden al is gecontroleerd, zal het her-audit proces aanzienlijk goedkoper en eenvoudiger zijn. omdat de auditors uw logica al kennen.

We zullen alle documentatie rond Caïro 1.0 vrijgeven, samen met tutorials en workshops tijdens Q4 van 2022.

### Ik ben een StarkNet gebruiker. Wat moet ik doen?

Als gebruiker zul je waarschijnlijk een paar acties moeten ondernemen tijdens Regenesis. Op zijn minst moet u uw accountcontract upgraden. Als u dat niet doet gedurende de (enkele maanden lang) overgangsperiode, zal uw account verloren gaan. Afhankelijk van het upgradepad dat is gekozen door de ontwikkelaars van de StarkNet apps die u gebruikt, moet u mogelijk extra stappen zetten.

We herinneren iedereen eraan dat StarkNet zich nog in een Alpha fase bevindt, en gebruikers zijn verplicht om aandachtig te blijven voor de communicatie van StarkNet en apps die ze gebruiken. Het is uw verantwoordelijkheid om ervoor te zorgen dat u vroegtijdig opwaardeert naar het nieuwe systeem. *Een vroege adopteur zijn is niet altijd gemakkelijk, en we rekenen op jou om je deel uit te maken!*

### Om te beëindigen

Cairo 1.0 staat voor de deur, met veel spannende voordelen en verbeteringen voor StarkNet en zijn ontwikkelaars. Om deze te kunnen oogsten, is een Regenesis-gebeurtenis van het netwerk nodig. Gelukkig hebben we een ontwerp in gedachten dat dit proces minimaal verstoort – volledig naadloos voor gebruikers en heel eenvoudig voor toepassingen.

We vragen u dringend deel te nemen aan de[community discussie](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)en uw opmerkingen en zorgen te delen. en blijf op de hoogte van de stappen die je moet nemen als applicatieontwikkelaar op StarkNet.