### TL;DR

* *StarkNet Alphaは11月までにMainnet Ethereumでローンチします*
* StarkNetで構築する時間は今

### 略歴

We announced our vision for [StarkNet](https://starkware.co/product/starknet/) at the beginning of the year: to bring massive scalability to Ethereum while preserving L1 security, permissionless interactions, and decentralization.\
We released **[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)** on a public testnet in June. このバージョンでは、完全な権限なしの一般的な計算スマートコントラクトをサポートしています。 We’ve since upgraded it twice: first to **Alpha 1** — providing [L1<>L2 messaging and on-chain data](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), and then to **Alpha 2** — supporting [composability](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2はEthereumのような状態で一般的な計算の複合スマートコントラクトをサポートするようになりました L1とL2の契約が互いに相互作用する能力を備えています。 もっと読む[ここ](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### メインネット上のStarkNet Alphaとは何ですか?

MainnetのStarkNet Alphaは、Goerliパブリックテストネットで現在利用可能な機能と同様の機能をサポートします。

#### **期待するもの**

StarkNetはまだ開発中ですので、段階的な方法で機能を導入し、開発者の期待がすべてのステップで満たされるようにしたいと考えています。 特に重要な点は次のとおりです。

* **許可されたスマートコントラクトのデプロイ**: 楽観的なロールアップの同僚によって導入された賢明なプレイブックに従います:*許可された*契約の展開から始めます。 この最初のホワイトリストにスマートコントラクトを含める方法を指定するプロトコルは、今後数週間で公開されます。
* **下位互換性の保証なし**: StarkNet Alpha から StarkNet Beta への将来の移行には、状態の回帰が含まれることを期待しています。 ネットワークはブロック 0 から始まり、アプリケーションは契約を再デプロイする必要があります。 さらに、開発者とユーザーは、予想されるStarkNetベータがStarkNet Alphaと下位互換性がないかもしれないことに注意する必要があります。 をクリックします。 明らかに、必要な変更を最小限に抑えながら、アプリケーションの簡単な移行を可能にしようとしています。

#### 追加の近期機能

StarkNet AlphaのtestnetからMainnetへの移行の一環として、以下を行います。

1. コントラクトにコンストラクタを追加します。
2. テストフレームワークを改善します。
3. ブロックとトランザクションの場合は、IDを使用することからハッシュを使用することに移動します。

公開テストネットで行ったように、定期的に新機能の導入を継続する予定です。 近い将来、以下のアップグレードを計画しています。

1. アカウント契約とトークン契約 — DeFiアプリケーションがStarkNetと親しみやすいやり取りを可能にします。
2. コントラクト機能の改善 — コントラクトのアップグレードとイベントをサポートします。
3. Warp: Nethermindが開発したSolidity-to-Cairo コンパイラは、SolidityスマートコントラクトからStarkNetスマートコントラクトへのスムーズな移行を可能にします。
4. Ethereum署名:secp256k1を介したECDSAのネイティブサポートにより、既存のウォレットとの統合が容易になります。
5. StarkNetフルノード:フルノードは、ユーザーがEthereumフルノードと同等のハードウェア要件でネットワークに参加することを可能にします。

#### 手数料メカニズム

StarkNet Alphaにアカウント契約とトークン契約が追加されるとすぐに料金メカニズムが有効になります。

StarkNetに送信されたすべての取引には、L1とオフチェーンコストをカバーするように設計された手数料がかかります。 料金はETHで最初に請求されます。 StarkNetが規模を拡大するにつれて、単一のトランザクションのコストは減少します(既存のすべてのSTARKベースのシステムの場合と同様)。 最初の手数料メカニズムを作成するとき、私たちは、彼らが消費するリソースに応じて正確に取引を価格設定するよりもシンプルにすることを好みます。 このメカニズムは時間の経過とともに改良されることを期待してください。

StarkNetを持続可能なネットワークにし、オペレータと開発者にインセンティブを与えることを目指しています。 料金から収入の一部はアプリケーション開発者とStarkNetのコア開発者に配布されます。

#### セキュリティ

MainnetのStarkNet Alphaのセキュリティモデルは、testnetの現在のモデルに従います：

* すべての状態遷移は、STARK証明書に裏付けられているため、有効であることが保証されています。
* すべての状態データはチェーン上で公開されるため、状態はL1から完全に構築可能になります。
* 単一のシーケンサーがあります。
* ネットワークは、任意の時間遅延なしでアップグレードできます。

### StarkNetエコシステムは成長中

StarkNetを世界に展開すると、カイロを学び、StarkNetで開発することに関心を持つ開発者の大規模な波が集まりました。 彼らは非常に貴重なフィードバックを提供し、StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y) で活発な議論を見ることは本当に喜びでした。

さらに、StarkNetはStarkWareチームだけでなく、ブロックチェーンエコシステムで最も強力なチームによっても開発されています。

* ネザーマインドは2つのプロジェクトに取り組んでいます:

1. **[ワープ](https://github.com/NethermindEth/warp)**: カイロコンパイラへの不安定度

2. **[ボイジャー](https://voyager.online/)**: StarkNet ブロックエクスプローラー

* Open ZeppelinはStarkNetの[標準契約](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)の実装に取り組んでおり、開発者の環境でも作業を開始しました:[ナイル](https://github.com/martriay/nile)。
* ShardLabsは[StarkNet HardHatプラグイン](https://github.com/Shard-Labs/starknet-hardhat-plugin)とより良いテストフレームワークに取り組んでいます。
* Erigonチームは、StarkNet(コードネーム:Fermion)をサポートするために、Ethereumフルノードの拡張に取り組んでいます。 彼らはStarkNetのコアメカニズムの設計に私たちと協力しています。
* 平衡はRustのStarkNetフルノード実装に取り組んでいます
* カイロ監査サービス:今後数ヶ月間、ABDK、ConsenSys Diligence、Peckshield、Trail of Bitsがカイロ監査を実施します。
* StarkNet監査：ネットワークの基盤を監査することから始めました。

1. **Crypto専門家**は、カイロのSolidity Verifierの監査を実施します。
2. カイロ仕様の正式な**LEAN proof**が最近完成し、[paper](https://arxiv.org/abs/2109.14534)と GitHub[repo](https://github.com/starkware-libs/formal-proofs) として公開された。

今後数ヶ月でさらに多くの興味深いコラボレーションが発表されることを期待してください!

### STARKsは今日スケーリング中

スタンドアロンスケーリングSaaSであるStarkNet Alphaの発売に自信を持ってアプローチすることで、STARKがEthereumアプリケーションを大規模に拡張できる方法を実証しました。 We launched StarkEx for [dYdX](https://dydx.exchange/) (perpetual contracts), [DeversiFi](https://www.deversifi.com/) (spot trading and payments), as well as for [Immutable](https://www.immutable.com/) and [Sorare](https://sorare.com/) (NFT minting and trading). これらのガス/txコストは100X-200X、バリウム(オフチェーンデータ)では650ガス/tx、ZK-ロールアップでは1100ガス/txとなりました。

今日まで、StarkExは、取引で$ 80Bを決済し、27M以上の取引を行っています。他のL2ソリューションを大幅に上回っています。

### 今すぐ実行

次のdAppまたは有用な開発ツールを構築することによって、StarkNetエコシステムに参加するのが良い時期ではありませんでした。

あなたを招待します：

1. [StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)に参加し、StarkNetコミュニティに参加しましょう。
2. [StarkNetスマートコントラクトの書き方](https://www.cairo-lang.org/docs/hello_starknet/index.html)の学習を開始します。
3. [DM 私たち](https://twitter.com/StarkWareLtd)— 私たちのチームは、あなたのアイデアやイニシアチブが実現するのを助けたいと思っています。

**Update (2021年11月):**StarkNet Alpha is live on Ethereum Mainnet