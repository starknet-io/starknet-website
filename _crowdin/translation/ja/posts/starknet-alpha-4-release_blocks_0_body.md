### 今後のエキサイティング時間

Alpha 4は今日Goerliでリリースされました。 このバージョンは Mainnet リリースの候補者であり、計画通りに進めば月末までには、Mainnet にデプロイされます。

Alpha 4は、とりわけ含まれるAlpha 3の機能満載のリリースに続きます。 カイロのコンパイル時間、コントラクトのコンストラクタなどの改善については、[全リリースノート](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0) をご覧ください。

重要な注意事項: これはまだアルファ版です — コントラクトを Mainnet 展開にデプロイするためのものです。 新しいアプリの[初期登録](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)ガイドラインに従ってください。

### 新機能

このバージョンの主な焦点は、Mainnet 展開の準備にありますが、いくつかの新機能も含まれています。

#### この契約の住所を取得する

コントラクトは新しい syscall \`get_contract_address\` で独自のアドレスを取得できるようになりました。 最後に、セルフィー契約を休ませることができます。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIPselfie契約：2021年9月～2021年11月</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">2021年11月10日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### ブロックハッシュ

ブロックが Id ではなくハッシュで識別されるようになりました。 これは、トランザクションハッシュへの当社の最新の移行に続くものです。 すべての API はそれに応じて更新されました。 ブロック構造の仕様も含め、システムの完全な技術文書をまもなくリリースする予定です。

#### 契約アドレス

このバージョンでは、コントラクトアドレスの計算方法に変更が導入されました。 アドレスは呼び出し元のアドレス、ソルト(デプロイによってランダムまたは選択された)に対するPedersenハッシュです。 コントラクトコードのハッシュとコンストラクタ引数のハッシュはすべてプレフィックスによって追加されます

```
Hash(PREFIX, caller_address, salt contract_hash, ctr_args_hash)
```

現在のバージョンでは、発信者アドレスは常に0になりますが、将来のバージョンでは、これは既存の契約から直接コントラクトの展開を可能にします。

このスキームは CREATE2 によく似ていることに注意してください。

[全てのリリースノートを見る](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### トークンブリッジ

トークンブリッジはStarkNetインフラストラクチャの重要な部分です。 彼らはStarkNetとの間とから資金を移すことを可能にします。 この橋は出版時には配備されていません しかし、それは数日で入手可能になるはずです — その機能と使用方法の完全なドキュメントと共に。 重要なことは、ブリッジが[L1<>L2メッセージング](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)プロトコルを使用していることです。 そのため、短い引き出し時間を提供します。一度引き出しがバッチに含まれ、L1に受け入れられます。 資金は、L1のユーザーに即座に利用可能です。

これがトークンブリッジの最初のバージョンであり、エコシステムからのフィードバックを得たいと思います。

### StarkNetに参加

成長を続けるStarkNetコミュニティに参加するのに最適な時期はありませんでした。 [StarkNet discord](https://discord.gg/uJ9HZTUk2Y)で会話に参加したり、[オンライン ワークショップに参加したり](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)たり、[のチュートリアル](https://www.cairo-lang.org/docs/hello_starknet/index.html)のいずれかを使用して、最初の独自のアプリの構築を開始したりできます。

**Update (2021年11月):**StarkNet Alpha is live on Ethereum Mainnet