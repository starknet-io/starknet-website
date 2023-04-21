### TL;DR

* StarkNet Alpha 0.7.0 がGoerliにリリースされました。改善点が満載です
* Proxy Upgrade Pattern を使用して契約をアップグレードできるようになりました。
* 契約はイベントを発行できるようになりました
* 待望のブロック番号とブロックタイムスタンプシステムコールのサポート

### はじめに

Alpha 0.7.0は新機能と改善点が満載のバージョンです。 過去数ヶ月間のStarkNetへの最高の刺激の一つは、StarkNetの将来を形作るためのコミュニティの関与の増加でした。 このバージョンはコミュニティの燃焼ニーズのいくつかに対応しています。

#### 命名条約の変更

観測的な読者は、以前のStarkNet AlphaリリースがAlpha 4と呼ばれているのに対し、Alpha 0.7.0をリリースしていることに気づいたかもしれません。 私たちは、専用のアルファ版番号を省略し、代わりに関連付けられたカイロラング版に依存することにしました。

### 新機能

#### 契約のアップグレード

OpenZeppelinの[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)が StarkNet でのコントラクトアップグレードで完全にサポートされるようになりました。 Proxy パターンは、Ethereum上での契約のアップグレードを可能にする一般的な方法です。 Alpha 0.7.0 では、StarkNet 上でこのパターンを有効にします。

We made a short [tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html) to demonstrate a basic implementation of the pattern, and OpenZeppelin is already hard at work implementing a standard contract for the proxy pattern; see the [prototype](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### ブロック番号とブロックのタイムスタンプ

Alpha 0.7.0 では、多くの開発者が求めてきた2つの新しいシステムコールが追加されました。 これらの呼び出しにより、コントラクトはブロック番号とブロックタイムスタンプにアクセスできます。 ブロック番号は、現在実行されているブロックの数を返します。 ブロックタイムスタンプは、ブロックの作成時にシーケンサーから与えられたタイムスタンプを返します。

これらの機能の使用方法の例は、[チュートリアル](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp) で見ることができます。

#### イベント

びっくり! 将来のバージョンに向けて計画された機能は、この前のバージョンにその方法を忍び込ませています。

StarkNet契約は、イベントの定義と発生をサポートし、オフチェーンアプリケーションが消費する実行情報を公開できるようになりました。 Ethereum開発者は、Solidityと非常によく似たセマンティクスと構文を見つけるでしょう。 [ドキュメント](https://starknet.io/documentation/events/)を読むか、[チュートリアル](https://starknet.io/docs/hello_starknet/events.html)に従ってこの機能を説明できます。

#### %builtins Directive を削除しました

StarkNet契約で %builtin ディレクティブはもう必要ありません。 この変更は、[StarkNet Shamans](https://community.starknet.io/t/contract-extensibility-pattern/210)の[コントラクト拡張パターン](https://community.starknet.io/) についてのコミュニティディスカッションに続いたものです。 この拡張性パターンの使いやすさを大幅に簡素化します。

たとえば、次のコントラクトが変更されます。

```
%lang starknet

# これは "%builtins" ディレクティブです。
# それはもう必要ありません。
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

以下に説明します:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

新しいパターンを使用する[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)標準コントラクトを確認できます。

#### 外部関数は、構造の配列をサポートします。

Alpha 0.7.0 は外部関数での構造体の配列の渡しと返却をサポートしています。 この追加機能により、アカウント契約は[マルチコール](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751)をより良くサポートできるようになります。

Multicall は Account Abstraction の強力な機能で、1 つのトランザクションで複数の呼び出しを行うことができます。 明らかなユースケースは、許容値を呼び出す**単一トランザクション**を作成し、次にtransferFromを作成することです。

コミュニティが何をしているのか楽しみにしています。

#### StarkNet CLI の改善

**ペンディングブロックのサポート**

[ペンディングブロック](https://starknet.io/documentation/block-structure-and-hash/#pending_block)は、最後のマイナーバージョン (v0.6.2) で[](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)を導入し、トランザクションの確認を高速化しました。 このバージョンには、StarkNet CLI 経由でこれらのブロックをクエリするサポートが含まれています。

これを使用するには、すべての CLI コマンドで block_number を引数とします (contract_call/get_block/get_code/get_storage_at) block_number=pending を指定することで、StarkNet に保留中のブロックを照会できます。

**アカウント契約のサポート**

StarkNetはアカウント抽象化を使用します。すなわち、すべてのアカウントはスマートコントラクトとして実装されます。 口座契約の最初の実装は、[Argent](https://github.com/argentlabs/argent-contracts-starknet)と[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)によって行われましたが、さらに多くの人が来ることを期待しています。

StarkNetでは、すべてのトランザクションがアカウント契約を通過する必要があり、CLIはアカウント契約を通じてStarkNet Alphaと直接やり取りを可能にします。 設定方法については、[チュートリアル](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)を参照してください。

先月の[StarkNet.py](https://github.com/software-mansion/starknet.py/)と[ナイル](https://github.com/OpenZeppelin/nile)にも同様の機能が追加されました。

#### テストフレームワークの L1<>L2 メッセージ

Alpha 0.7.0 ではPostman が導入されます。 Postmanにより、開発者はテストフレームワークを使用してより複雑なフローをテストすることができます。

高いレベルでは、StarkNet SequencerのL1からL2、L2へのメッセージの受け渡し責任を嘲笑します。 Solidityメッセージングコントラクトを介して送信されるメッセージが宛先StarkNetコントラクトに表示され、StarkNetコントラクトから送信されるメッセージがSolidityメッセージングコントラクトに表示されます。

#### その他の機能

Alpha 0.7.0 は、数学共通ライブラリに効率的な平方根関数を追加するなど、より多くの機能と変更を提供します。 [changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0) に完全なリストが表示されます。

### 次へ？

初期の[手数料メカニズム](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)のサポートは、StarkNetのサブバージョンとして数週間でリリースされます。

### 詳しい情報は？

[starknet.io](https://starknet.io/): すべての StarkNet 情報、チュートリアル、アップデート用。

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): あなたの質問への回答を得るために参加し、開発者のサポートを受けてコミュニティの一員になりましょう。

[StarkNet Shamans](https://community.starknet.io/): StarkNet の研究に関する議論に参加(そして参加)しましょう。