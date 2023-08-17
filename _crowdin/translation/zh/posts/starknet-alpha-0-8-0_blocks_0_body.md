### TL;DR

* StarkNet Alpha 0.8.0 是费用机制的初始版本(可选直到StarkNet Alpha 0.9.0)
* 新 API 要求估计交易费用，以获取交易跟踪，提高可见度和调试能力
* StarkNet序列器性能改进
* L1- L2 消息取消

### 简介

正如我们的[路线图](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)所共享的那样，在最新添加StarkNet的功能和功能之后， 我们的注意力转向加强业绩和协议设计（包括费用、账户抽象、权力下放等）。 StarkNet Alpha 0.8.0 开始添加交易费和提高序列器性能的过程。

StarkNet路线图包括一个收费机制。 通过使用这个版本，我们正在迈出重要的一步，更接近于平台的全面性能。

添加收费机制是StarkNet性能设计的一个基本部分。 如果没有最低的费用，我们就会面临无限交易：这将使得系统不可能运行，不管是否有序列器优化。

### 功能

#### 费用支持

StarkNet Alpha现在支持费用机制的第一版本。 即使在这个早期阶段，甚至在测试网上，这种机制也是必不可少的，其主要原因有两个：

1. 它允许开发者开始根据StarkNet的成本模型优化他们的合同。
2. 它是改进系统性能的关键对应方，因为它可以通过发送无数次交易来防止垃圾信息。

此版本介绍了开发者将费用支付纳入其工具和应用程序所需的组件。 开发者现在可以通过调用 \`estimate_fee\` 端点来估计交易费用，并作为交易执行的一部分支付费用。

由于此功能不兼容，我们此时不会强制支付费用，而只能从版本 0执行。 0.0, 将在几周内释放。 这种逐步过渡将使用户和开发者能够适应新的模式。

#### 费用结构 0.8.0

0.8.0时，仅根据计算复杂性收取费用，而StarkWare仍将补贴L1通信费用。 我们将更新收费机制，在今后几周内纳入这些L1操作和通信费用。 付款将随StarkNet L2的交易执行而随身收取。 请参阅[手续费文档](https://starknet.io/documentation/fee-mechanism/)以获取深入的描述。

重要的是要注意到，我们将与开发者社区密切合作，随着StarkNet的发展，调整和开发收费机制。

#### L2 Goerli ETH Faucet

我们启动了[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)以使用户能够在测试网上支付费用。 这个Faucet将少量的L2 Goerli ETH发送到您StarkNet Goerli的帐户地址，您可以用来支付交易费用。

#### Trace API

我们添加了能够检索交易的执行跟踪到 StarkNet的 API。 在交易记录中，所有内部通话都是可见的，并附有执行资源消耗、退货值、释放事件和发送消息等信息。 这个新的通话简化了对合约的行为或调试交易的理解。 此外，[Voyager](https://voyager.online/)or[StarkTx](https://starktx.info/)等工具可以包含此数据; 向用户提供更详细的分析，特别是在账户合同相互作用方面。

要获取轨迹，您可以在 StarkNet's CLI 中使用 \`get_transaction_trace\` 。 要看看如何使用它的示例，请检查[教程](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace)。

#### 消息取消

此版本的另一个特点是能够取消L1——L2信息。 为什么这样有用？ 想象一种用户将资产从L1转移到L2的情景。 流程始于用户将资产发送到StarkNet桥和相应的L1——L2信息生成。 现在，想象一下L2消息消费不起作用(这可能是由于dApp的开罗合同中的错误)。 这可能导致用户永远失去对其资产的监管。

减轻这一风险， 我们允许发起L1——L2消息的合同——在声明打算这样做并等待适当的时间之后（见[文档](https://starknet.io/l1-l2-messaging/#cancellation)）。

### 性能改进

这个版本大大减少了序列器执行一流即将到来的开罗交易所需的时间。

这只是第一步！ 我们下一个即将推出的主要业绩里程碑(0.9.0)是同时执行测序器，预计还有更多的优化。

### 现在是什么？

在这里阅读技术文档[](https://starknet.io/documentation/fee-mechanism/)。

转到[starknet.io](https://starknet.io/), 以获取所有StarkNet信息、文档、教程和更新。

加入[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)以获取开发支持、生态系统通知并成为社区的一部分。

访问[StarkNet Shamans](https://community.starknet.io/)以随时更新并参与所有StarkNet的研究讨论。