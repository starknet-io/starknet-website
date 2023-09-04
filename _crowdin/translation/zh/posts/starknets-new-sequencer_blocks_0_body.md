### TL;DR

* 正在开发新的 StarkNet 测序仪
* 它是在 Apache 2.0 许可证下开源的
* 它的首要目标是提高 StarkNet 的吞吐量

### 闪亮的新音序器

我们很高兴地宣布新的 StarkNet 测序仪正在开发中。 随着 StarkNet 的技术堆栈转向开源，继[Cairo 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)和[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)之后，我们现在继续使用 StarkNet 的新排序器。 它将是开源的，可在 Apache 2.0 许可证下使用，您现在可以查看[存储库](https://github.com/starkware-libs/blockifier)！

构建新的 Sequencer 是我们几个月前提出的[StarkNet 路线图](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)的一部分。 新定序器的实现将从替换**Blockifier**开始，该模块是定序器内执行块执行的模块。 正如路线图中所解释的，它预计将为 StarkNet 的性能带来好处。

我们构建此测序器的方法与 StarkNet Alpha 中指导我们的方法相同。 定序器**将在阶段**中实现，我们今天分享它的第一个模块。 随着时间的推移，定序器的新组件将会完成，直到最终基于 Rust 的定序器将完全取代当前基于 Python 的定序器。

### 定序器有什么作用？

在 StarkNet 上，用户发送交易后，交易 STARK 扩展之旅的第一站是排序器。 在 StarkNet 协议中，排序器负责对交易进行排序并生成区块。 在序列器创建区块并获得共识协议批准后，证明者接管并生成 L1 的证明。

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### 开源

StarkNet Alpha 于 2021 年 11 月在主网上启动。 从一开始，它就致力于与世界分享 STARK 扩展的力量。

今天，我们发布了新的开源定序器一系列模块中的第一个。 所有模块和子模块的部署需要几个月的时间。 开源一切将使社区成员能够为开发做出贡献并审核代码库。

这将使 StarkNet 更接近去中心化的无许可排序。 我们现在正在设计 StarkNet 的去中心化协议，我们鼓励社区参与[研究和讨论](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386)。

### 表现

StarkNet 的原始测序器很大程度上是 StarkEx 基础设施的改编。 现在，需要专门针对去中心化高性能网络的要求而构建的基础设施。

新的音序器采用 Rust 构建，在设计和开发时充分考虑了性能。 新的排序器还建立在坚实的基础上：Papyrus，新的[StarkNet 全节点，](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)将处理状态管理，而 cairo-rs，LambdaClass 的新 Cairo-VM，将加快 Cairo 的执行速度。 我们期望新的定序器能够在各个方面改进现有的定序器。 通过将此排序器集成到 StarkNet 中，网络的吞吐量和延迟预计将显着改善。

我们还期望其他基础设施和开发工具能够使用新的排序器来改善开发体验。 预计全节点性能以及所有测试框架都会得到改善。

### 概括

我们今天很高兴地宣布推出新的开源测序仪。 它的第一个模块已经可供社区审查，并将在接下来的几个月内推出更多模块。 我们也很高兴在增强 StarkNet 性能的路线图中又迈出了一步。 我们的目标是使网络更加高效和易于访问，我们感谢所有加入我们这一旅程的人的支持。