## TL;DR

* Starknet alpha v0.11.0 は Testnet で公開されています
* Starknet Testnet で Cairo 1.0 コントラクトを展開して対話できるようになりました。
* Starknet での計算は 5x より安いです!
* 初めて、MainnetのStarknetアルファv0.11.0へのアップグレードはガバナンス投票に追加されます。
* これは、[再発](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4) 前の遷移期間の始まりを示します。
* カイロを配置する 1. 新しいシステムがスムーズに動作するようになると、Mainnetの契約はTestnet上で数週間実行された後に有効になります。

## はじめに

待望のStarknetalpha v0.11.0 が Testnet で公開されていることをお知らせします! これはなぜStarknetにとって大きなステップなのでしょうか? Starknet v0.11.0 では、[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)スマートコントラクトを宣言、デプロイ、実行できます。 また、既存契約をカイロ1.0の実装にスムーズに移行できるシステムコールを新たに導入しました。

カイロ1.0は2つの異なる側面でStarknetを改善します。 最初に、カイロに(とりわけ)型/generics/traits/error ハンドリングを導入する、より豊かなプログラミング言語を提供することで、開発エクスペリエンスを向上させます。 第二に、Cairo 1.0 は、Starknet alpha v0.11.0 がシエラにコンパイルされた Cairo 1.0 契約という、Starknet の分散型ジャーニーにおいて重要な役割を果たしています。 Sierraは、分散型Starknetの重要な財産である、すべての契約実行が証明可能であることを保証します。

このバージョンで来ているもう一つの重要な改善は、計算のための5倍のコスト削減です。 これにより、Starknet は計算集約型アプリケーションに対してさらに使いやすくなります。 詳細は以下をご覧ください。

## 生まれ変わりの準備

Starknet alpha v0.11.0 は、Starknet Regenesis に先立って準備を可能にするトランジション期間の始まりを示します。 Starknetの新生計画は[数ヶ月前に](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)に公開されました カイロ0からカイロ1.0に基づくシステムへの移行に焦点を当てています

トランジション期間中、既存のCairo 0契約(アップグレードされている場合)には、住所とストレージを維持する機会があります。 継ぎ目なくカイロ1に移行します (次のセクションを参照)。

Starknetユーザーとして、これは新しいカイロ1に一度だけウォレットをアップグレードする必要があることを意味します。 アカウントの実装がリリースされました（再発行まではいつでも可能です）。 ダウンタイムは予想されず、システム内のすべてのdappsは通常通り動作し続けます。

Regenesisの後、Starknetはシステム全体で残りのCairo 0契約のサポートを停止します。 これは事前にうまく伝えられ、開発者は契約を移行するのに十分な時間を与えられます。 移行期間は数ヶ月で、dapp開発者はすでにカイロ1.0への移行を開始することができます。 移行期間の終わりには、再発が起こります。

## カイロ1.0へのスムーズな移行

Cairo 1.0への移行に伴い、既存のCairo 0契約は廃止され、Regenesisではサポートされなくなります。 アップグレード可能なカイロ0の契約は、再生後も継続的に動作することができます。 そして、その時まで状態を構築しておきます。新しいシステムコール ( ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall)) を追加しました。 カイロ1へのアップグレードについては、アップグレード可能な契約に問題はありません。 実装ですが、基本的なプロキシ(実際の状態を保持する契約)は、Cairo 0の実装ではまだ立ち往生します。 \`replace_class\` syscallはこの問題を解決します。 をクリックします。

## 計算は5倍安くなりました！

今日、Starknetの取引手数料には、計算とチェーン上のデータという2つの主要な構成要素があります。 Starknetのトランザクション手数料の計算要素は、L1上の証明を検証する限界コストによって決定されます(詳細については、[ドキュメント](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)を参照してください)。

当初、当社の200mカイロのステップは、検証に5mのガスを必要とする証拠であり、カイロのステップあたり0.05ガスの素朴な推定につながりました。 それ以来。 私たちは、L1検証コストの大幅な削減を可能にする[再帰的証明](https://medium.com/starkware/recursive-starks-78f8dd401025)に移行しました(再帰ツリーのルートのみがL1に達します)。 当初の見積もりを更新する時が来ました — L2の各Cairoステップの価格は5倍になります。 そして今度は0ドルになります ガス1杯。

このコスト削減は、非ネイティブ署名を持つアカウント契約など、計算集約型アプリケーションにとって重要です。 シンプルな取引では、わずかなコスト削減(〜5%)が見られます。 将来のバージョンでは、2番目のコンポーネント、すなわちオンチェーンデータコストを処理します。 Starknet(別名Volition)にオンチェーンデータの代替品が導入されると、コスト削減が全面的に感じられます。

## Starknet Governance First Vote

Starknetガバナンスの第一段階が開始されました(詳細はこちら[](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40))。 コミュニティメンバーは追加のチャネルを通じてStarknetの形成に参加できるようになりました。すなわち、プロトコル変更に投票することです。

Starknetのガバナンス 最初のフェーズでは、Starknetプロトコルのアップグレードに焦点を当てます。 Starknetのすべてのバージョンアップグレードは、最初にTestnetにデプロイされます。 有権者はGoerliで実行されるアップグレードされたバージョンを調べてテストするための6日間の期間を持つでしょう。 この間、スナップショットの提案が開かれ、コミュニティはMainnet展開の新しいバージョンを承認するかどうかを投票できます。

この提案が6日間の投票期間中に「はい」の投票の大部分を獲得した場合、提案は合格し、Starknet Mainnetはそれに応じてアップグレードされます。

Starknet alpha v0.11.0 は投票のためにアップされた Starknet 最初のバージョンです。 Starknet alpha v0.11.0 投票は Testnet デプロイから 6 日間開始されます。

関連リンク:

* [スナップショットスペース](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [代理発見ページ](https://delegate.starknet.io/)
* Starknet alpha v0.11.0 ディスカッションスレッド on[Community forum](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Cairo 1.0 and Sierra

Sierra (**S**afe **I**nt**e**rmediate **R**ep**r**esent**a**tion) is an intermediate representation that compiles to Cairo assembly (CASM). 開発者がCairo 0をCASMにコンパイルし、その結果をStarknetシーケンサーに送信します。 Cairo 1.0では、開発者はコードをSierraにコンパイルし、この中間表現をシーケンサーに送信します。 シーケンサーはそれをCASMにコンパイルします。 Sierraは「安全なCASM」にコンパイルすることが保証されています。すなわち、失敗することができないCASMのサブセットであり、すべての実行が証明可能になります。 これにより、シーケンサーはDOSから保護され、元に戻された取引でも料金を請求することができます。 詳細については、[ドキュメント](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/) を参照してください。

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 では、[Cairo 1.0-alpha.6 version](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6) が使用されます。 このバージョンはCairo 0の[機能パリティ](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)に近く、すべてのStarknetシステムコールがすでに存在しています。

Starknetシーケンサーは、固定コンパイラバージョンを使用することに注意してください。 これは、言語の改善が Starknet で即座に利用できない可能性があり、Starknet バージョンの更新後にのみ利用可能になることを意味します。 具体的には、カイロ1に影響を与える改善があります。 → シエラコンパイルは直ちに有効になる場合があります Sierra → CASMコンパイラの変更 (詳細は[ドキュメント](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)を参照) は Starknet のアップグレードを待つ必要があります。

## 他には何がありますか?

### 新しいトランザクションタイプ: Declare v2

Cairo 1.0 クラスを宣言するための[新しいトランザクションタイプ](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)を追加しました。

この新しい \`declare\` トランザクションバージョンは、既存の \`declare\` と似ています。2つの重要な区別があります：

* 送信されるクラスオブジェクトは、CASMではなくSierraを表します。つまり、クラスのセマンティクスはシエラ表現によって定義されます。
* ユーザはコンパイルされたクラスハッシュにも署名しています。 これは、Sierra→CASMコンパイルがStarknet OSの一部として証明されるまでの重要なステップです。

詳細については、[ドキュメント](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect) を参照してください。

開発者の観点からは、経験は変わりません。 Cairo 1.0 コードを書いた後、CLIを使ってクラスを宣言することができます。

**最初に \`declare v2\` トランザクションはStarknet Mainnet では受け付けられないことに注意してください。 テストネット上での実験期間が終わると、Mainnet上で新しいトランザクションタイプが有効になり、Cairo 1.0クラスが利用可能になります。**

### Poseidonはここにあります

[Poseidon](https://www.poseidon-hash.info/)は、非常に効率的な代数回路を持つように設計されたハッシュ関数のファミリーです。 そのため、彼らは、STARKやSNARKなどのZK証明システムで非常に有用である可能性があります。 Starknet alpha v0.11.0 では、開発者は Poseidon を使用できるようになります。 さらに、Starknetプロトコルの一部であるハッシュ計算の一部は、Poseidon(具体的には、クラスのハッシュ)に移行します。 compiled class hash, and part of the state commitation will use Poseidon, see[the docs](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)for more details). 将来的には、より多くの内部コンポーネントが Poseidon ハッシュ関数を使用するように移行するでしょう。

Starknetで使用されている正確なバージョンとパラメータは、[こちら](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash)にあります。

### その他の変更

以前の Starknet バージョンと同様に、アップグレードは API やその他の低レベルコンポーネントにも影響を与えます。 以下にそれらをリストし、作成された特定の変更に対処します:

* v0 の呼び出し/宣言トランザクションはサポートされなくなりました
* L1→L2 メッセージには[手数料](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees) が必要になりました。 つまり、料金ゼロで送信されるメッセージはStarknetシーケンサーでは処理されません。
* チェーン上のデータフォーマットは[変更](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [APIの変更](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(ここにすべての変更がリストされているわけではありません。完全なリストについてはドキュメントを参照してください) :
* 新しい \`get_compiled_class_by_class_hash\' エンドポイントを追加しました
* \`get_class_by_hash\' はカイロ0/カイロ1.0クラスを返します (要求されたハッシュに応じて)
* \`get_state_update\` に置き換えられたクラスの新しいセクションがあり、宣言は Cairo 0 と Cairo 1 のクラスに分割されます。
* \`estimate_fee\` と \`simulate_tx\` は検証をスキップできるようになりました
* [新しい](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPCバージョン

## 次は何をしますか？

カイロ1.0関連のインフラがすべて整備された今、あなたは期待することができます:

* カイロ1.0への言語のさらなる改善
* パフォーマンス改善:[約束した](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)のように、私たちは大幅にTPSを増やす方向に進んでいます。 ロードマップの次のステップは、[Rust シーケンサー](https://github.com/starkware-libs/blockifier)への遷移です。 Apache 2の下で公開されています ライセンス 新しいシーケンサーは、[錆CairoVM](https://github.com/lambdaclass/cairo-rs)と[パピルス](https://github.com/starkware-libs/papyrus)フルノードを使用してパフォーマンストリオを形成します。
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! このバージョンでは、トランザクションのコストの計算成分を処理しました。 今後のバージョンでは、我々は、現在、平均的なトランザクションのための支配的なコストであるオンチェーンデータコストを処理します。

![](/assets/starknet-alpha-v0.11.0-diagram.png)