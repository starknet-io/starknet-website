### TL;DR

* StarkNetは、StarkNetの星座フェーズを定義する主な機能である構成性に対応しました。
* 私たちはStarkNetのテストフレームワークをリリースしています — 開発者は現在、ローカルで効果的に契約をテストできるようになりました。
* 今回のリリースには、Merkle-Patricia Triesのサポートやビット単位の操作用の組み込みなど、いくつかの顕著なパフォーマンス改善が含まれています。
* エコシステムの正面:

1. **標準契約**: OpenZeppelinはEthereumのためにしたようにStarkNetのための標準化された契約を開発しています!
2. **EVM->Cairo Compiler**: Warp team @ Nethermind はERC-20 SolidityコードのコンパイルをStarkNet契約に実証しました

### 背景

StarkNetは権限のない分散型Validity-Rollup（別名「ZK-Rollup」）です。 We announced its [roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880) at the beginning of the year. The[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), currently running on a public Ethereum testnet L1<>L2メッセージとオンチェーンデータを使用して、任意のビジネスロジックを実装するスマートコントラクトの無許可デプロイメントをすでにサポートしています。 さらに、任意のユーザーが許可なくネットワークにトランザクションを送信することを可能にします。

今回のリリース:StarkNet Alpha 2には、導入されたスマートコントラクト間の構成性:惑星から星座への進出を可能にするコア機能が含まれています。

### 特徴

StarkNet Alpha 2では、以下の機能が導入されています。

* **Composability:**StarkNet Alphaは、スマートコントラクト間のインタラクションをスケジュールよりも早くサポートするようになりました! このアップグレードの素晴らしさは、開発者がEthereumとほぼ同じ経験を期待できることです。 呼び出しは同期で関数呼び出しとして使用できます。 StarkNetによって解き放たれたように、無制限の計算規模と契約組成の両方から利益を得る新しいアプリケーションを熱心に待っています。 この機能の使い方を理解するには、この[チュートリアル](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html)に従うことから始めましょう。 [StarkNet discord](https://discord.gg/uJ9HZTUk2Y) で何を構築しているかご意見をお聞かせください。
* **ローカルテストフレームワーク:**あなたが質問し、私たちが提供しました -[より良いテストフレームワーク](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). これにより、開発者は、外部に依存しなくても、StarkNet契約の展開と相互作用をローカルでテストすることで、dApp開発を迅速に行うことができます。 このバージョンにはL2操作のみが含まれており、次のバージョンでは機能性と使いやすさが拡張されます。 チュートリアル[](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)をご覧ください。この機能についてのフィードバックをお聞きしたいと思います。
* **パフォーマンス改善:**

**Patricia Trees:**Merkle-Patricia Treeの状態コミットメント([ドキュメント](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py))に移行することで、より高いスループットをサポートし、証明時間を短縮するためのStarkNetの設計を改善しました。 この変更により、はるかに大きなブロックの作成が可能になり、トランザクションあたりのコストが低下します。 より洗練された状態への移行は、StarkNetオペレーティングシステムのコアコンポーネントであるZKP言語であるカイロによって可能になりました。

**ビットワイズ・オペレーション:**StarkNet contracts ([documentation](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)) でより効率的なビットワイズ・オペレーションをサポートする[組み込み](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise) を追加しました。

* **Goerli:**StarkNet は Ropsten から[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac) に移動しています! 最後に、私たちはRopsten神の気まぐれからシステムを解放しました。 Alpha 2 は、より安定した開発環境で動作するようになります。

### エコシステム

StarkNetエコシステムは絶えず成長しており、私たちは最新のニュースを共有して喜んでいます。

* **標準契約**: StarkNetの標準契約ライブラリでOpenZeppelinと協力できて光栄です。 Ethereumの標準化された契約での彼らの標準的な仕事は私たち全員に毎日役立ち、私たちは彼らがここで同じくらい影響力があると確信しています。
* **EVM->Cairo Compiler**: ネザーマインドのワープチーム[は、EVMバイトコードからStarkNetの契約と展開へのERC-20コントラクトの](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)トランスパイル化を実証しました。 この取り組みは急速に進んでおり、次のターゲットはユルからカイロへの任意のスマートコントラクトの移管です。
* **Maker-on-StarkNet**: StarkNet上でMakerプロトコルを実装するために[提案](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)がMaker DAOに提出された。 最初のフェーズでは、スタークネットでDAIを鋳造し、EthereumからStarkNetへのDAIブリッジを提案します。
* **StarkNet/Cairo Auditing Services**: 私たちは、StarkNetスマートコントラクトとカイロプログラムの監査サービスを提供するために、複数の監査会社に従事しています。

### メインネット コーナー周辺

StarkNet Alpha Mainnetのローンチに向けて、ホワイトリストに登録されたアプリケーションから始まります。 いくつかのプロジェクトが進行中で、日々積極的に追加されています。 パーティーに参加するには、[不和](https://discord.gg/uJ9HZTUk2Y)を介して連絡するように招待されています。

**Update (2021年11月):**StarkNet Alpha is live on Ethereum Mainnet