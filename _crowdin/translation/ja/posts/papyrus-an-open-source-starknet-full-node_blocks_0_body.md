# Papyrus: オープンソースのStarkNetフルノード
## Papyrusは分散型StarkNetインフラストラクチャの重要なコンポーネントになります
**TL;DR**
* Papyrus は StarkNet のフルノードの Rust 実装です。* 新しい StarkNet シーケンサーの基礎を提供します。 StarkNetのスループットを劇的に向上させることができる *Papyrusはパフォーマンスと分散化を促進するのに役立ちます。 StarkNetが優れたユーザビリティを達成した今、これらはその主要な開発優先事項です
## はじめに
今日はStarkNetの大量使用への道を開くのに役立つStarkNetフルノードのRust実装であるPapyrusを紹介します。 [Papyrus のフルノード](https://github.com/starkware-libs/papyrus)は、時間の経過とともに進化し、ユーザーと開発者が[StarkNetのJSON-RPC](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json) を介してこの状態をクエリできるようにするためのスタークネットの状態を追跡します。 パピルスは新しいStarkNet Sequencerの基盤を提供し、数ヶ月でStarkNetのスループットを劇的に向上させます。 Papyrus は StarkNet の状態と同期と維持を担当する StarkNet のフルノード(パスファインダーと Juno )を結合します。 StarkNetスタックへの継続的な移行に沿って、PapyrusはApache 2.0ライセンスの下でオープンソースです。
## Papyrus — 最適化されたシーケンサーの基礎
早い段階で、StarkNet 開発</a>のフェーズは
のとおりであると述べました。(i) 最初に機能性と使いやすさ、次に (ii) スケールとパフォーマンス、最後に (iii) 分散化。 StarkNetは優れたユーザビリティを達成し、今やシステム性能が主な優先事項であり、分散化は蒸気を拾います。 StarkNetのブロック生成を担当するシーケンサーのパフォーマンスを向上させることで、システムのパフォーマンスを向上させることができます。 シーケンサーは、送信後にトランザクションを注文して実行する「マシン」です。 パピルスはStarkNetシーケンサーに効率的なストレージ層を提供し、スループットを向上させるのに役立ちます。 まず、これはシーケンサーがクラウドベースのDBではなく、ローカルのDBを維持することを意味します。 さらに、Papyrusは、Merkle-Patriciaパスを通じて到達するのではなく、平らなキー/値のストレージを意味し、状態と直接やりとりします。</p> 


## StarkNetスタックの強化と分散化

現在、StarkNetフルノードを開発している2つのチームがあります。 There is s[Pathfinder](https://github.com/eqlabs/pathfinder)by Equilibrium, implemented in Rust, and[Juno](https://github.com/NethermindEth/juno)by Nethermind Golang実装の最初の公式版に向けて取り組んでいます パピルスは今日、この健全なミックスに加わり、分散化と冗長性をさらに高めています。 別のフルノードを追加してオープンソースにすることは、クライアントの実装の多様性を提供するのに役立ちます。 分散型ネットワークの強さと公共財としての地位を固めるための重要な指標です


## 現在のリリースと今後の予定

現在のバージョンでは、StarkNet の状態と同期して、StarkNetの全体の履歴にアクセスできます。 現在、JSON-RPCの仕様は部分的にのみサポートされており、進捗状況はこちら[](https://github.com/starkware-libs/papyrus#endpoints)で確認できます。 パピルスは現在オープンソース化されており、数ヶ月以内に一般公開される予定です。 Papyrus チームは、[JSON-RPC 仕様](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json)との完全な互換性に取り組むことに加えて、Pathfinder と Juno とともに、[StarkNet P2P レイヤー](https://github.com/starknet-io/starknet-p2p-specs)の基盤を形成するために取り組みます。 P2P層を通じて異なるノードが通信および同期できるようになることは、分散型StarkNetへの大きな飛躍です。 さらに、 ピアから同期する能力(今日の各ノードが集中型APIと通信する状況とは対照的に)は、同期時間を大幅に向上させる必要があります。 要約すると、PapyrusはStarkNetエコシステムに参加するための3番目のフルノードです。 これはオープンソースライセンス(Apache 2.0)の下でリリースされ、分散型StarkNetのインフラストラクチャの重要な部分を形成します。