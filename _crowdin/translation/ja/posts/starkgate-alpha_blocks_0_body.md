### TL;DR

* StarkNet Bridgeの最初のバージョンは、**[Testnet](https://goerli.starkgate.starknet.io/)**、および**[Mainnet](https://starkgate.starknet.io/)** にあります!
* 私たちは、物事がどのように改善されるかについてのコミュニティのフィードバックを待っています。 [StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)と[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx) のフィードバックを送信できます。
* メインネットの導入はまもなく予定されています(更新、2022年5月9日: StarkGate is live on Mainnet)

興奮！ StarkNetの橋の最初のバージョンであるStarkGate Alphaをリリースできることを嬉しく思います。現在Goerli testnetでライブ配信されており、メインネット展開は間もなく予定されています。*

\*(update, May 9, 2022: StarkGate is live on Mainnet)

**重要な免責事項:これはStarkGate Alphaのアルファ版です(以下の細かい版をお読みください!)。**

![](/assets/starkgate_01.png)

続ける前にチェックしてみてください！ [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGateはEthereumと[StarkNet](https://starknet.io/)の間のゲートウェイとして機能し、ブリッジから期待できることをすべて行うことができます。

#### **StarkGateの仕組みについての情報はどこで見つけることができますか?**

StarkGate の仕組みを理解するには、[技術ドキュメント](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)を読み、[コード](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate) を見てください。 これは最初のバージョンであることに注意してください。 そして、[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)と[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx) の両方を改善する方法についてのフィードバックと提案をお寄せします。

#### **StarkGateでサポートされるトークンはどれですか？**

* GoerliのStarkGate AlphaはETHといくつかのERC-20トークンをサポートしています。 EthereumとStarkNetの両方で、完全なリストと関連するコントラクトアドレスは、この[repo](https://github.com/starkware-libs/starknet-addresses) で入手できます。
* Mainnetでは、StarkGate Alphaは料金メカニズムの使用を許可するためにETHのみをサポートします。 後で、WBTC、USDC、USDT、およびDAIのサポートを追加します。 この[レポ](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)で関連するコントラクトアドレスを確認できます。

さらに、追加トークンのサポートを追加するためのメカニズムを公開します。

#### **メインネットでStarkGate Alphaにはどのような安全制限がありますか?**

Mainnet の StarkGate Alpha は Alpha バージョンの使用に伴うリスクを軽減するために、2 つの制限があります。

1. L1のブリッジにロックされた合計値(TVL)は、各トークンタイプの量を制限します。
2. StarkGateを介してL1からL2に送信される各トランザクションの最大金額は制限されます。

これらの限界を徐々に緩和し、自信が高まるにつれて完全に解消していく予定です。 更新されたパラメータは StarkGate の[ドキュメント](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge) にあります。

![](/assets/starkgate_02.png)

### アルファ版とそれが意味するもの

いつものように、StarkNetは現在**アルファ**ステージにあります。

* 物事は壊れることがあります。 それらが破局的に失敗した場合、あなたの資金は失われる可能性があります (**下記の免責事項を読んで**!)。
* StarkNet AlphaとStarkGateの両方の契約は、タイムロックなしでアップグレードできます。 私たちは、このようなアップグレードを事前に発表することを期待していますが、差し迫ったセキュリティリスクの場合(例えば、 重大なバグが見つかった場合)、アップグレードはほとんど警告なしで適用される可能性があります。
* 橋のコードだけでなく、StarkNet Alphaの部分は、まだ監査されていません。 ABDKとオランダのスタークゲート アルファの監査はまもなく完了します。

以下のいずれかのプラットフォームを使用してフィードバックを提供することで、すべてのユーザーがブリッジの改善を支援することをお勧めします。

1. [StarkGateフロントエンドリポジトリ](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate契約リポジトリ](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

質問と開発者のサポートについては、[StarkNet discordサーバー](https://discord.gg/uJ9HZTUk2Y) に参加してください。

### 免責事項

***StarkNet Alphaは、完全に監査されていない新しい複雑なシステムです。 同じことがStarkNetブリッジにも適用されます。 すべての複雑なソフトウェアシステムのように、StarkNetとブリッジの両方にバグが含まれている可能性があります。 極端な場合は全ての資金が失われる可能性があります だから、***慎重に歩き、気をつけてください！******

*StarkNetエコシステムは、大きく急成長している独立したチームと個人の集合であり、StarkWareは監督を受けておらず、責任を負いません。 エコシステムメンバーによって開発されたプロジェクトには、極端な場合には、すべての資金が失われる可能性のあるバグが含まれている可能性があります。 さらに、よりスマートな契約が導入されるにつれて、意図しない有害なバグや悪意のある詐欺やラグの可能性が高まります。 だから、Ethereumでスマートコントラクトを扱う際にStarkNet上のすべてのスマートコントラクトを扱います。 安全だと信じる理由があるものだけを使うのです*