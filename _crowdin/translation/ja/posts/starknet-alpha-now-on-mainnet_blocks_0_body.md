### TL;DR

* Alpha is live on Mainnet
* 一般的な計算と構成をサポートしています
* 急成長中のコミュニティ、ツール開発、アプリケーション
* 今後数週間で継続的にリリースされる追加機能
* 免責事項: これはアルファ版です（下記の細かい版をご覧ください）

### はじめに

StarkNet Alphaは今日、Ethereum Mainnetで発売します!

StarkNetは、Ethereum上でL2ネットワークとして動作する権限のない分散ロールアップです。 StarkNetは、Ethereumの構成性とセキュリティを損なうことなく、あらゆるdAppが計算のために無限のスケールを達成することを可能にします。 最も安全でスケーラブルな暗号プルーフシステムに依存しているおかげで —[STARK](https://starkware.co/stark/). StarkNetは、Ethereum上の最初の生産グレードのチューリング完全なvon-Neumann検証器である[カイロ](https://starkware.co/cairo/)プログラミング言語に基づいて構築されています。 Cairo と STARK は、StarkWare 社内で開発され、当社のすべての生産グレードのアプリケーションに電力を供給しています。 2020年夏から50Mのtxsと250Bを超えています。

他の機能の中でも、StarkNet Alphaは、他のStarkNet契約とL1<>L2契約とL1契約でメッセージを送ることで、コンポジット性をサポートする一般的な計算スマートコントラクトを可能にします。 StarkNet Alpha は Rollup モードで動作します。つまり、状態差分データはすべてチェーン上で送信されます。

1月にはStarkNet[ロードマップ](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880) を共有しました。 6月には、StarkNet Alphaがパブリックテストネット上でライブ配信され、ローリングベースで新機能を追加して更新されました。 私たちは、スケジュールの前にあることを喜んでいます, おかげで, 部分的に, 私たちの生産グレードの戦闘硬化STARK/カイロソフトウェアスタックに依存しています.

### StarkNet Alphaをどのように扱うべきですか?

まず、細心の注意を払って、「アルファ」ラベルがあるのに理由があります。 変更、修正、改善を期待しています。 StarkNet Alpha はまだ監査されていません さらにネットワークが成熟するまで、そのような監査を遅らせることがあります(詳細については、この記事の最後に免責事項をお読みください)。

一般的に、私たちは楽観的なロールアップの同僚、すなわちによって定義された慎重で賢明なパスに従います。 仲裁と最適化:開発者が関与するリスクを理解するために、シングルシーケンサーでネットワークを起動し、アプリケーションをホワイトリストに登録します。 私たちは引き続きStarkNetの完全な分散化に全力で取り組んでいます。

StarkNet Alphaの経済学をどのように扱うべきですか？ アルファは取引手数料なしで始まります。 次回のアップグレードでは、わずか数週間後に料金制度が導入されます。詳細については、別の記事でご紹介します。

### 建築開始

私たちは、(新しい!)チェックすることによってStarkNet上で独自のアプリケーションを書き始めることをお勧めします。 [ウェブサイト](http://starknet.io/), または[チュートリアル](https://starknet.io/docs/) に直接ジャンプ.

デプロイの準備ができている場合は、こちらの[オンボーディングプロセス](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)に従ってください すべての開発者がシステムの予備的な状態を十分に把握するために作成されました。

### エコシステム

過去数ヶ月間、StarkNetコミュニティの規模と活動の驚くべき成長が見られました。 これは、[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y) に集まっています。 ブロックチェーンエコシステム全体で、数多くの開発者(チームと個人)がこの努力に貢献しています。 （本稿末尾の免責事項を参照）

#### 開発ツール

* OpenZeppelinは標準契約を定義しています。 彼らの[リポジトリ](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)と[ディスカッション](https://github.com/OpenZeppelin/cairo-contracts/discussions)は以下の価値があります。
* The[Warp](https://github.com/NethermindEth/warp)Solidity–>Cairo transpiler, developed by Nethermind
* Shard Labsの[ハードハットプラグイン](https://github.com/Shard-Labs/starknet-hardhat-plugin)と[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argentは、[Sean Han](https://twitter.com/seanjameshan)と並んで、StarkNet.jsでの共同作業を含むツールを開発しています

#### インフラストラクチャ

**ブロックエクスプローラー**:

* [The Voyager](http://voyager.online/)project by Nethermind
* [Eth.tx](https://ethtx.info/)は StarkNet トランザクションのサポート分析と詳細なビューを提供します

**フル ノード**: 2 つの取り組みが進行中です。1 つは Erigon が率いる Fermion プロジェクト、もう 1 つは Equilibrium が率いる[Pathfinder](https://github.com/eqlabs/pathfinder)プロジェクトです。

**財布**:

* [ArgentX](https://github.com/argentlabs/argent-x)は、開発者がすでに利用できる Argent によって開発されたブラウザ拡張機能です。
* Torusの鍵管理ソリューションはStarkNet対応です
* LedgerはネイティブStarkNetアプリを開発しています。年末までに利用できるようにします

**Cairo Audits**: ConsenSys 勤勉, Bits, Peckshield, ABDKはすでにカイロの監査を行っているか、すぐに開始しようとしています。

**APIサービス**: StarkNetのフルノードが利用可能になった後、Figment、Chainstack、InfuraによってAPIサービスが提供されます。

**インデクサー**: StarkNetとFigmentチームと一緒に作業するためにTheGraphの統合に取り組む予定です。

### 前方の道

今後数週間、数ヶ月でアルファ版を以下の機能でアップグレードします。

* 契約のアップグレードのメカニズム
* 手数料メカニズム
* イベント
* 不足しているシステムスコールの追加 (get_block_number, get_block_timestamp, more)
* スケルタル・バージョンのVolition
* その他 …

この取り組みを継続的に監視するには、機能の[暫定ロードマップ](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)を参照してください。

さらに詳しくみると、私たちは複数の面で活発な研究に多額の投資を続けています（[Shamans](https://community.starknet.io/)の努力に参加してください）：

* 分権化
* 拡大縮小
* データの有効化
* 無許可のインセンティブ化

### アクションを呼び出す

* Goerliで権限のないStarkNetテストネットで契約を書き始めてください
* [StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)に参加する
* コミュニティ通話に参加する
* 最初の[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27-28 2022, Stanford CA)
* [StarkNet Shamans](https://community.starknet.io/)に参加して、研究課題を深めましょう。

### 免責事項

***StarkNet Alphaは、完全に監査されていない新しい複雑なシステムです。 すべての複雑なソフトウェアシステムと同様に、StarkNetシステムには、極端な場合には、すべての資金が失われる可能性のあるバグが含まれている可能性があります。 だから、***慎重に歩き、気をつけてください！******

*StarkNetエコシステムは、大きく急成長している独立したチームと個人の集合であり、StarkWareは監督を受けておらず、責任を負いません。 エコシステムメンバーによって開発されたプロジェクトには、極端な場合には、すべての資金が失われる可能性のあるバグが含まれている可能性があります。 さらに、よりスマートな契約が導入されるにつれて、意図しない有害なバグや悪意のある詐欺やラグの可能性が高まります。 だから、Ethereumでスマートコントラクトを扱う際にStarkNet上のすべてのスマートコントラクトを扱います。 安全だと信じる理由があるものだけを使うのです*