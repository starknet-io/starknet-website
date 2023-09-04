### TL;DR

Starknet Alpha 1 有两个新功能：

* L1<>L2 交互
* 链上数据

### 导 言

今年年初，我们宣布 StarkWare 正在构建 [Starknet](https://starkware.co/product/starknet/)，这是一个无需许可的、基于 STARK 的去中心化 ZK-Rollup1，作为以太坊上的 L2 网络运行。 Starknet 允许任何 dApp 实现无限的计算规模，而不会影响以太坊的可组合性和安全性。

上个月， [Starknet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95) 向全世界发布。 开发人员第一次能够 [编写](https://kobi.one/2021/07/14/stardrop.html) 任何智能合约，并无需许可地将其部署到 ZK-Rollup。 用户能够以以太坊的方式将交易发送到网络。

今天我们发布了新版本；阿尔法 1。 我们正在滚动发布功能，以便开发者能够尽快与新功能进行交互。 我们预计这将收紧反馈周期，并让社区反馈能够快速改进 Starknet。

### 阿尔法 1 特点

#### L1<>L2 交互

Alpha 1 包括 L1<>L2 消息传递协议，允许开发人员在 L1 和 L2 之间实现无缝交易流。 开发人员现在可以从 L1 合约向 L2 合约发送消息，反之亦然。

ZK-Rollups 的优点之一是状态更新是最终的，没有任何延迟。 这意味着从 L2 发送到 L1 的消息可以立即转发到其目标合约。 这为构建真正可在各层之间互操作的应用程序开辟了道路。

有兴趣尝试一下吗？ 最好的入门方法是按照教程 [这里](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)进行操作。

我们的 L1<>L2 协议很大程度上要归功于其他 L2（特别是 Optimism 和 Arbitrum），他们之前在该领域的工作影响了我们的设计。

#### 链上数据可用性

Starknet 的状态更新现在也作为以太坊上的链上数据发布。 这允许任何用户从 L1 数据完全构建 Starknet 的状态。 每个状态更新都包括状态差异，即更改了哪些存储及其新值。

在这里，ZK-Rollup 也展示了它的实力。 与 Optimistic Rollups（其中完整交易的数据必须在链上发送）相反，在 ZK-Rollups 中，仅在链上发送导出状态差异所需的绝对最小数据。

考虑一个典型的例子，价格预言机。 一笔更新价格预言机的交易通常包含多笔交易，但只更新一个存储单元；这对的价格。 在 Optimistic Rollup 中，包含价格预言机交易的状态更新所需的链上数据随着更新数量线性增长，而在 ZK-Rollup 中，它将始终是单个存储更新。

此外，压缩算法可以应用于已发布的数据，其有效性将由STARK证明来证明，进一步减少链上足迹。 Starknet 的未来版本将在该领域引入创新优化。

#### Starknet操作系统

我们还发布了 Starknet 操作系统代码。 Starknet OS 是运行 Starknet 的 Cairo 程序。 操作系统处理网络上完成的所有事情——合约部署、交易执行、L1<>L2 消息等等。 Starknet OS 架构和设计将在另一篇文章中详细解释。

#### 额外功能

Starknet Alpha 不仅不断发展，我们还在不断改进开罗。 有关 Cairo v0.3.0 中新功能的完整说明，请查看发行说明 [此处](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0)。

### 生态系统正在成长

除了 Starknet Core 上的持续工作之外，生态系统在 Starknet 上的工作也在不断扩展。 我们很高兴能与生态系统中一些最有才华的团队合作。

Fermion 是 Starknet 的第一个全节点成果，由 Erigon（以前称为 TurboGeth）团队开发。 基于他们在以太坊上获得的丰富知识，我们能够与他们合作构建一个强大的全节点，其中融合了在以太坊构建过程中学到的许多经验教训，同时受益于 STARK 证明提供的规模。

Nethermind 正在开发 Warp，这是一个从 EVM 到 Cairo 的编译器。 受我们只有在新工具准备好后才推出的文化的约束，我们只能说，很快就会有这方面的令人兴奋的消息！ 但我们可以说，它们正在以极快的速度移动。

### 未来是什么样子的

我们通往 Starknet 之路的下一站将是可组合性——允许合约相互交互。 敬请关注。

[StarkWare](https://starkware.co/)

1 正如我们之前所说，ZK-Rollup 现在是一个常用术语，但非常具有误导性：这些解决方案（目前）不提供零知识。

更新（2021 年 11 月）：Starknet Alpha 在以太坊主网上上线