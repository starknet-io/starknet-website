### TL;DR

* 正在开发一个新的 StarkNet 序列器
* 它是在 Apache 2.0 许可下开源的
* 第一个目标是增加StarkNet的传输量

### 一个小的新序列器

我们高兴地宣布一个新的StarkNet Sequencer正在工作中。 StarkNet的科技堆栈走向开源，继[Cair1之后。](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)and[Papyrus 全节点](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), 我们现在继续使用StarkNet的新序列器。 它将是开源的，在 Apache 2.0 许可下可用，您现在可以查看[仓库](https://github.com/starkware-libs/blockifier)！

构建一个新序列器是我们几个月前提交的[StarkNet 路线图](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)的一部分。 新序列器的实现将从替换执行方块执行的序列器中的**Blockifier**开始。 正如行进图所解释的那样，预计它将为StarkNet的性能带来好处。

我们建设这个序列器的方法与StarkNet Alpha指导我们的方法相同。 序列器**将在阶段**中实施，我们今天正在分享它的第一个模块。 随着时间的推移，序列器的新组件将会完成，直到最终基于Rus的序列器完全取代当前基于 Python 的序列器。

### 测序器做什么？

在StarkNet上，用户发送交易后，交易中前往STARK缩放的第一个站点是序列器。 在StarkNet协议中，序列器负责订购交易和生产区块。 在由测序器创建该块并经协商一致议定书批准之后，支持者接管并为L1生成证据。

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### 开放源

StarkNet Alpha于2021年11月在Mainnet上发射。 它从一开始就致力于与世界分享STARK缩放的力量。

今天，我们正在发布新的开放源码测序器中的第一个模块。 部署所有单元和子单元需要几个月时间。 开放源码将使社区成员能够为发展做出贡献，并审计代码。

这将使StarkNet靠近一个分散的无权限顺序点。 我们正在设计StarkNet的分散协议，我们正在鼓励社区参与[的研究和讨论](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386)。

### 业绩

StarkNet最初的测序器主要是对StarkEx基础设施的改造。 现在需要建设基础设施，特别是为了满足分散的高绩效网络的需要。

新的测序器是在Rust构建的，其设计和开发是考虑到性能的。 新序列器还建立在坚实的基础上：Papyrus，新的[StarkNet 全节点，](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)将处理国家管理，而LambdaClass公司的新的开罗-VM将加快开罗执行工作。 我们期望新的测序器在各个方面改进现有的测序器。 随着StarkNet中这个序列器的整合，网络的输送量和延迟性预计将大大改善。

我们还期望其他基础设施和发展工具能够利用新的测序器来改进发展经验。 预计完整节点性能以及所有测试框架都会改进。

### Summary

我们今天很高兴宣布新的开源顺序。 它的第一个模块已经可供社区审查，今后几个月将有更多的模块。 我们也很高兴在我们的路线图中采取另一个步骤来提高StarkNet的性能。 我们的目标是使网络更有效率和更便于使用，我们感谢在这个旅途中与我们一起的每一个人的支持。