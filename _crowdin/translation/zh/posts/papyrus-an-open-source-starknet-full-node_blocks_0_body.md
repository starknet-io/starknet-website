# Papyrus：一个开源的StarkNet全节点
## Papyrus将成为分散的StarkNet基础设施的关键组成部分。
**TL;DR**
* Papyrus is a Rust implementation of a StarkNet full node * It will provide foundations for the new StarkNet Sequencer, which will dramatically enhance StarkNet’s throughput * Papyrus will help advance performance and decentralization. 现在StarkNet已经实现了出色的可用性，以下是它的主要开发重点。
## 导 言
今天我们介绍Papyrus，这是一个用Rust实现的StarkNet全节点，它将有助于铺平通向大规模使用StarkNet的道路。 Papyrus全节点将跟踪StarkNet随时间演变的状态，并允许用户和开发人员通过StarkNet的JSON-RPC查询此状态。 Papyrus将为新的StarkNet Sequencer提供基础，这将在几个月内显著增强StarkNet的吞吐量。 Papyrus加入了其他StarkNet全节点——Pathfinder和Juno——它们负责与StarkNet同步并维护其状态。 为了配合我们持续推进开源 StarkNet 技术栈的计划，Papyrus 已经在 Apache 2.0 许可证下开源。
## Papyrus - 优化序列控制器的基础
早期我们就声明了[StarkNet开发的阶段](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)是：（i）首先是功能和易用性，其次是（ii）规模和性能，最后是（iii）去中心化。 StarkNet已经实现了出色的易用性，现在系统性能是主要优先事项，而去中心化正在加速推进。 提高系统性能的问题正在通过增强Sequencer的性能来解决，Sequencer负责StarkNet块生产。 Sequencer是在提交交易后对其进行排序和执行的“机器”。 Papyrus将为StarkNet Sequencer提供高效的存储层，有助于提高吞吐量。 首先，这意味着Sequencer将维护一个本地数据库而不是云数据库。 此外，Papyrus将存储平面键/值存储，也就是说它将直接与状态进行交互，而不是通过Merkle-Patricia路径访问它。
## 加强和分散StarkNet堆栈
目前有两个团队正在开发StarkNet全节点。 Equilibrium实现的Rust版本[Pathfinder](https://github.com/eqlabs/pathfinder)，以及Nethermind开发的Golang版本[Juno](https://github.com/NethermindEth/juno)，他们正在努力推出第一个官方版本。 今天，Papyrus加入了这个健康的组合，并推进了去中心化和冗余。 添加另一个完整节点并使其开源有助于提供客户端实现的多样性，这是分散网络强度的重要指标，并巩固其作为公共产品的地位。
## 当前版本和未来计划
当前版本允许您与StarkNet的状态同步，并获得对StarkNet完整历史记录的访问权限。 目前，JSON-RPC规范仅部分受支持，您可以在[此处](https://github.com/starkware-libs/papyrus#endpoints)跟踪进展。 Papyrus现在正在开源，预计几个月内完全发布以供公众使用。 除了致力于与[JSON-RPC规范](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json)的完全兼容性外，Papyrus团队将与Pathfinder和Juno一起努力构建[StarkNet P2P层](https://github.com/starknet-io/starknet-p2p-specs)的基础。 不同节点能够通过P2P层进行通信和同步是迈向去中心化的StarkNet的重要一步。 此外，从对等方进行同步（而不是今天每个节点与集中式API通信的情况）应该大大提高同步时间。 总之，Papyrus是加入StarkNet生态系统的第三个完整节点。 它采用开源许可证（Apache 2.0）发布，并将成为去中心化StarkNet基础设施的重要组成部分。