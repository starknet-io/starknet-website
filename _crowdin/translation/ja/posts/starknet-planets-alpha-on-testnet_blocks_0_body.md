### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)- Mainnetへの最初のステップは、Testnetでライブになりました！
* [StarkNet](https://starkware.co/product/starknet/)は権限のない Turing-complete ZK-Rollup1 です。
* 開発者は、スマートコントラクトで選択したビジネスロジックを実装し、StarkNet 上で許可なくデプロイできます。
* StarkNetの状態遷移は、オフチェーンで証明され、その後、チェーン上で検証されます。
* Ethereumと同様に、ユーザーはこれらのスマートコントラクトと直接やり取りできます。

### **はじめに**

[は](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)1月に[StarkNet](https://starkware.co/product/starknet/)のロードマップをformat@@4発表しました。 スケーラビリティソリューションの聖杯は、(i)任意のスマートコントラクト、(ii)組成性、(iii)分散ネットワーク上で操作することをサポートします。 今日はステップ1:StarkNet Planets Alphaのテストネット展開を発表します。 Alpha システムは任意のスマートコントラクトをサポートしています。 包括性は今年後半にはサポートされ、分散化も続くでしょう。

私たちが完全に透明であり、期待をきちんと立てることが非常に重要です。 この投稿の目的は、既にサポートされているものと、どのような機能がまだ欠けているかを明確にリストすることです。 今日リリースされるのは、テストネットでの作業です。 私たちは、この早期リリースがStarkNetとそのツーリングの周りに健全なエコシステムの形成を助けると信じています。 私たちは、私たちとネットワークを構築し、コミュニティからの継続的なフィードバックを得るために開発者を巻き込むことを熱望しています。

### **StarkNet Planets Alphaに何がありますか？**

**機能:**Alpha を使用すると、開発者は StarkNet コントラクトを一般計算用に書き、展開できます。 ホワイトリストはありません。開発者は任意のコントラクトを書き、デプロイできます。 ユーザーは、取引を送信し、状態を検査することによって、これらの契約とやり取りできます。 すべてのコントラクトは単一の状態に存在します2。 この状態の更新はオフチェーンで証明され、Alphaではオンチェーンで検証されます。testnetで検証が行われます。

**StarkNet OS:**上記の機能は、StarkNet OS と呼ばれる新しい「オペレーティングシステム」によってサポートされています。 StarkNet で*provable*状態遷移を提供します。 Ethereum開発者はそれをEVMと同等のものと考えるかもしれません。スマートコントラクト機能、コントラクトストレージの処理などを呼び出す責任があります。 StarkNet OSのアーキテクチャを詳述した別の記事を公開します。

**アルファにないことは何ですか？**アルファはL1<>L2の操作、オンチェーンデータ、そして構成性などのいくつかの重要な機能がまだ欠けています。 これらの詳細については以下をご覧ください。

#### **足が濡れています**

[チュートリアルとドキュメント](https://www.cairo-lang.org/docs/hello_starknet/) から始めましょう。

その後、StarkNetに記述・導入した[サンプルAMMスマートコントラクト](http://cairo-lang.org/docs/hello_starknet/amm.html)をご覧ください。 シンプルなAMMで、ここ[](https://starkware-amm-demo.netlify.app/swap)で操作できます。 これでStarkNetにスマートコントラクトを書いてデプロイする準備が整いました。 The block explorer for StarkNet — [Voyager](https://voyager.online/) — allows anyone to inspect StarkNet’s state.\
By getting your feet wet, we believe you will be better prepared to build on StarkNet, as we continue to roll out additional features. 私たちはすでに最初のハッカソンや開発者向けのワークショップを計画しています。

### **StarkNetの次のステップ**

Alphaにまだ欠けている主要機能は、今後数週間以内にリリースされます。 これらは次のとおりです。

* L1<>L2の相互作用、例えばL1で資金を入出金する機能。
* オンチェーンデータ:Ethereumですべてのストレージ変更を公開します。
* コンスタビリティ:コントラクトが互いにコミュニケーションできるようにします。

これらの機能を使用すると、StarkNetをEthereum Mainnetにもたらす準備が整います。 StarkNetの進化星座のこのステップを、そして到達したらこのステップと呼びます。 Ethereum MainnetでスケーラブルなL2 dAppsを構築し、許可なくデプロイすることができます。

#### **StarkNetエコシステム**

私たちはStarkNetの周りに形成されているエコシステムに非常に興奮しているので、これまでの協力者に感謝します。

We’re working closely with [Nethermind](https://twitter.com/nethermindeth) and the Nubia team, [Alexey Akhunov](https://twitter.com/realLedgerwatch) (Erigon) & [Igor Mandrigin](https://twitter.com/mandrigin) (gateway.fm), [Iddo Bentov](https://www.cs.cornell.edu/~iddo/), [dOrg](https://twitter.com/dOrg_tech), [Prof. Tim Roughgarden](https://twitter.com/algo_class), [Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/) & Yoav Seginer, last but not least — the [Paradigm](https://twitter.com/paradigm) team.\
Our early partners — [dYdX](https://twitter.com/dydxprotocol), [Immutable](https://twitter.com/Immutable), [DeversiFi](https://twitter.com/deversifi), as well as [Sorare](https://twitter.com/SorareHQ), [Celer](https://twitter.com/CelerNetwork), and others — have been providing us with invaluable input from Day One, and allow us to build a production-grade network for real users.\
We continue to be amazed by the quality of content created by the community, by people such as [Bobbin Threadbare](https://twitter.com/bobbinth), [Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md), [Adrian Hamelink](https://twitter.com/adr1anh), [perama](https://twitter.com/eth_worm), [Francesco Ceccon](https://twitter.com/ceccon_me), [Ilian Malchev](http://twitter.com/imalchev), and the [Alexandria team](https://blockchainpartner.fr/).

私たちは、コミュニティがすべての面で何を生み出すかを見たいと思っています:開発者ツール、コンテンツ、そしてもちろん、彼らが構築する StarkNet アプリケーション。 Let’s keep the conversation going in your favorite media of choice: [discord](https://discord.gg/uJ9HZTUk2Y), [Twitter](https://twitter.com/CairoLang), [email](mailto:info@starkware.co), and soon using the most decentralized of communication forms: f2f.

1 私たちはZK-Rollupという用語のファンではありません。数学的に言えば、それは知識ゼロではありませんが、皆さんは私たちが何を意味するか知っています。

2 Mainnet で現在の StarkEx 配備のために維持されている別の状態とは異なります。

**Update (2021年11月):**StarkNet Alpha is live on Ethereum Mainnet