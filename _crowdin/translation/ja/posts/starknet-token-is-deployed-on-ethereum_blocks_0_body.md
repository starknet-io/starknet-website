### TL;DR

* StarkNetトークン(STRK)がEthereum Mainnetにデプロイされました
* **詐欺にご注意ください！**StarkNetトークンは販売されていません
* 財団がトークンを配布するメカニズムを決定するには時間がかかります
* StarkWare株主、従業員、および独立したパートナーソフトウェア開発者が保有するトークンは、4年間ロックされています。 1年後に徐々にリリースされるようになりました
* トークンは投票、ステーキング、および手数料の支払いのためにStarkNetの分散化をさらに進めます

今日、[StarkNet](https://starknet.io/)は分散化に向けてもう一歩踏み出しています。 StarkNetトークンはEthereum[で](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766)になりました。 すばやく再現：STRKは、StarkNetのコンセンサスメカニズム、ガバナンス・トークンとしての参加、およびトランザクション手数料の支払いのためのステーキングトークンとして使用されます。 これらのユーティリティのそれぞれに対する根拠は、[私たちの分散提案](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)で提示されています 「トークンは何のために使用されますか？」というセクションにあります。

***Beware of scams:** at time of writing there is no way to purchase StarkNet Tokens; this no-sale period will remain in place until further notice by the [StarkNet Foundation](https://twitter.com/StarkNetFndn); follow official communication from the StarkNet Foundation to learn of any updates to the status of STRK. [StarkNet Discord](https://discord.gg/qypnmzkhbc)サーバーの[詐欺レポート](http://starknet.io/discord)チャンネルで、詐欺を報告し、他の詐欺の報告を確認できます。*

この記事では、トークン割り当てプロセスと、デプロイされたトークンコントラクトが、トークンの3つの設計されたユーティリティ、すなわち投票とステークの2つをどのように提供するかについて説明します。 3 番目のユーティリティ - StarkNet手数料を支払う-後で議論されます。

### トークン割り当てプロセスの計画

以前にトークンの初期割り当てのための[計画](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)を提案しました。 株主、従業員、および独立したソフトウェア開発者に割り当てられたトークンは、1年後に段階的なリリーススケジュールで4年間ロックされています。 ロックされたトークンは投票や投資に使用できますが、転送や取引はできません。 トークンの一部はEthereumの専用スマートコントラクトによってロックされていますが、他のトークンはカストディアンを介してロックされています。

Separately, 50.1% of the existing StarkNet tokens are allocated to the StarkNet Foundation, to be used to meet its [goals](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59) (cf. [StarkWare’s post](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). これらのトークンはロックされていません。 ただし、財団は、これらのトークンをさらに割り当てるための正確なメカニズムを策定するための時間が必要であり、その計画を期限内に共有します。

#### なぜ監禁されたのですか？

前述の期間のトークンをロックすることで、現在の貢献者がStarkNetの長期的なインセンティブと一致することが保証されます。 また、ネットワークの保護、手数料の支払い、分散化などの目的で広く使用される前に、トークンに対する憶測を妨げます。

次に、トークンの実装が投票と投資をどのようにサポートしているかを説明します。

### 投票

財団は、健全なガバナンスの促進と投票メカニズムの策定を担当する。 StarkNetトークンは、直接投票と一連の委任メカニズムの両方を可能にするように設計されています。

#### L1投票

デプロイされた ERC-20 実装には、****Compoundの[委任モジュール](https://docs.compound.finance/v2/governance/) の任意の</a> 使用が含まれます。 このモジュールは、チェーン上の投票に広く使用されています。 StarkNetではオプションであり、デフォルトではオフになっている理由はコストを考慮することです。 オンにすると、L1上のStarkNetトークンのすべての転送には、投票権のシフトを追跡するためだけに必要な余分なガスが必要であることを意味します。

#### Non-L1 voting

Compoundの委任モジュールを使用したL1オンチェーン投票の代替には、オフチェーン投票、およびStarkNetベースのオンチェーン投票システム([SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)など)が含まれます。 L1転送のガス消費を大幅に削減するこれらの代替手段は、現在展開されているERC-20コードからの明示的なサポートを必要とせず、本質的にサポートされています。

上記のように、すべてのトークン（ロックとロック解除）はStarkNetの投票メカニズムで使用可能になります。

### ステーキング

StarkNetの権限がなく検閲に強い操作には、シーケンサーをランダムに選択する必要があります。 シーケンスするためにノードが選択され、ブロックを提案する確率は、ノードがステークするStarkNetトークンの数に比例します。 The rationale for using StarkNet Tokens (rather than, say, Ethereum or Bitcoin) is explained in the [governance proposal](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), and the exact details of staking, sequencing and block creation on StarkNet are under ongoing [discussion by the community](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), and are yet to be finalized.

投票と同様に、トークンはロックされていてもステーキングに使用できます。 これはStarkNetオペレータの多様性とStarkNetの回復力に貢献します。

### Summary

Ethereum上でのStarkNetトークン契約の展開は、StarkNetの分散化のもう一つのステップです。

私たちは開発者やユーザーが詐欺に注意することを強く勧めます! 出版時点では、トークンは取引可能ではなく、StarkNet財団によってさらに通知されるまで、この取引なしステータスが維持されます。

詳細な質問については、[StarkNet Discord](https://discord.gg/qypnmzkhbc)サーバーの[トークンディスカッション](http://starknet.io/discord)チャンネルをご覧ください。