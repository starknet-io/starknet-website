### TL;DR

* Starknet 代币（STRK）现已部署在以太坊主网上
* 谨防诈骗！ Starknet 代币不出售
* 基金会需要时间来确定分配其代币的机制
* StarkWare 股东、员工和独立合作伙伴软件开发商持有的代币锁定四年，一年后开始逐步释放
* 由于其用于投票、质押和支付费用，该代币将进一步推进 Starknet 的去中心化

今天， [Starknet](https://starknet.io/) 又向去中心化迈出了一步。 Starknet 代币在以太坊</a>上现在为

。 快速回顾一下：STRK 将用作参与 Starknet 共识机制的质押代币、治理代币以及支付交易费用。 [我们的去中心化提案](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)标题为“代币将用于什么？”的部分中介绍了每个实用程序的基本原理。</p> 

\*谨防诈骗：在撰写本文时，无法购买 Starknet 代币；此禁售期将一直有效，直至 [Starknet 基金会进一步通知](https://twitter.com/StarkNetFndn)；关注 Starknet 基金会的官方通讯，了解 STRK 状态的任何更新。 您可以在 [Starknet Discord](http://starknet.io/discord) 服务器上的 [诈骗报告](https://discord.gg/qypnmzkhbc) 频道中报告诈骗并检查其他诈骗报告。*

这篇文章解释了代币分配过程，以及部署的代币合约如何服务于代币的三个设计实用程序中的两个，即投票和质押。 第三个实用程序——支付 Starknet 费用——将在稍后讨论。



### 规划代币分配流程

我们之前针对代币的初始分配提出了 [计划](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)。 分配给股东、员工和独立软件开发商的代币锁定四年，并在一年后开始逐步释放。 锁定代币可以用于投票和质押，但不能转让或交易。 一些代币通过以太坊上的专用智能合约锁定，而其他代币则通过托管人锁定。

另外，现有 Starknet 代币的 50.1% 分配给 Starknet 基金会，用于实现其 [目标](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59) （参见 [StarkWare 的帖子](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)）。 这些代币没有被锁定。 然而，基金会将需要时间来制定进一步分配这些代币的确切机制，并将在适当的时候分享其计划。



#### 为什么要锁仓？

在上述期间锁定代币可确保当前贡献者与 Starknet 的长期激励保持一致。 它还阻止在代币广泛用于其预期目的之前对其进行投机：保护网络、支付费用和去中心化治理。

接下来，我们解释代币实现如何支持投票和质押。



### 表决

基金会将负责促进良好的治理并制定投票机制。 Starknet 代币的设计允许直接投票和一系列委托机制。



#### L1投票

现在部署的 ERC-20 实现包括可选使用Compound 的 [委托模块](https://docs.compound.finance/v2/governance/)。 该模块广泛用于链上投票。 它在 Starknet 上是可选的并且默认关闭的原因是出于成本考虑。 打开它意味着 L1 上 Starknet 代币的每次转移都需要额外的 Gas，仅用于跟踪投票权的变化。



#### 非L1投票

使用Compound的委托模块进行L1链上投票的替代方案包括链下投票，以及基于Starknet的链上投票系统（例如 [SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)）。 这些替代方案可以显着减少 L1 传输的 Gas 消耗，不需要当前部署的 ERC-20 代码的明确支持，因此本质上是受支持的。

如上所述，所有代币（锁定和解锁）都可以在 Starknet 的投票机制中使用。



### 质押

Starknet 的无需许可和抗审查的操作需要随机选择测序器。 选择节点进行排序并提出区块的概率与该节点质押的 Starknet 代币数量成正比。 使用 Starknet 代币（而不是以太坊或比特币）的基本原理在 [治理提案](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)中进行了解释，并且 Starknet 上的质押、排序和区块创建的具体细节正在社区</a>中进行 讨论，并且是尚未最终确定。</p> 

与投票一样，即使代币被锁定，也可以用于质押。 这有助于 Starknet 运营商的多样性和 Starknet 的弹性。



### 概括

在以太坊上部署 Starknet 代币合约是 Starknet 去中心化的又一步。

我们呼吁开发者和用户警惕诈骗！ 截至发布时，没有任何代币可交易，并且这种不可交易状态将保持不变，直至 Starknet 基金会进一步通知。

有关更多问题，您可以前往 [Starknet Discord](http://starknet.io/discord) 服务器上的 [Token-discussions](https://discord.gg/qypnmzkhbc) 频道。