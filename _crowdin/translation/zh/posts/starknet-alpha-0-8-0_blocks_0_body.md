### TL;DR

* Starknet Alpha 0.8.0 提出了初始版本的费用机制（在 Starknet Alpha 0.9.0 之前可选。）
* 新的 API 调用用于估算获取交易跟踪的交易费用，从而提供更好的可见性和调试功能
* Starknet 测序仪的性能改进
* L1→L2消息取消

### 介绍

正如我们在 [路线图](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)中所分享的，在 Starknet 的功能和特性最新增加之后，我们的注意力转向性能增强和协议设计（包括费用、账户抽象、去中心化等）。 Starknet Alpha 0.8.0 开始增加交易费用并提高排序器的性能。

Starknet 的路线图包括收费机制，通过该版本的进展，我们正在向该平台的全面性能迈出重要一步。

添加收费机制是Starknet性能设计的重要组成部分。 如果没有最低费用，我们将面临无限交易的风险：无论排序器如何优化，这都将导致系统无法保持高性能。

### 特征

#### 费用支持

Starknet Alpha 现在支持第一个版本的费用机制。 即使在早期阶段，甚至在测试网上，这种机制也是必不可少的，原因有两个：

1. 它允许开发者根据 Starknet 的成本模型开始优化他们的合约。
2. 它是提高系统性能的重要对应部分，因为它通过发送无数交易来防止垃圾邮件。

该版本引入了开发人员将费用支付纳入其工具和应用程序所需的组件。 开发人员现在可以通过调用“estimate_fee”端点来估算交易费用，并将费用支付作为交易执行的一部分。

由于此功能不向后兼容，因此我们目前不会强制执行费用支付，而是仅从几周后发布的 0.9.0 版本开始。 这种逐步过渡将使用户和开发人员能够适应新模型。

#### 0.8.0 的费用结构

在0.8.0上，将仅根据计算复杂度收取费用，而StarkWare仍将补贴L1通信费用。 我们将在接下来的几周内更新费用机制，以包含这些 L1 运营和通信费用。 付款将通过 Starknet L2 上的交易执行以原子方式收取。 有关详细说明，请参阅 [费用文档](https://starknet.io/documentation/fee-mechanism/)。

值得注意的是，我们将与开发者社区密切合作，随着 Starknet 的发展调整和开发费用机制。

#### L2歌尔丽ETH龙头

我们推出了 [L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/) ，使用户能够在测试网上支付费用。 此 Faucet 会向您在 Starknet Goerli 上的账户地址发送少量 L2 Goerli ETH，您可以用它来支付交易费用。

#### 追踪API

我们向 Starknet 的 API 添加了检索事务执行跟踪的功能。 在事务的跟踪中，所有内部调用都是可见的，并附有消耗的执行资源、返回值、发出的事件和发送的消息等信息。 这个新的调用简化了对合约行为或调试交易的理解。 此外， [Voyager](https://voyager.online/) 或 [StarkTx](https://starktx.info/) 等工具可以合并这些数据；为用户提供更详细的分析，特别是账户合约交互。

要获取跟踪，您可以在 Starknet 的 CLI 中使用“get_transaction_trace”。 要查看如何使用它的示例，请查看 [教程](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace)。

#### 消息取消

该版本的一个附加功能是能够取消 L1→L2 消息。 为什么这有用？ 想象一个场景，用户将资产从 L1 转移到 L2。 该流程从用户将资产发送到 Starknet 网桥以及相应的 L1→L2 消息生成开始。 现在，假设 L2 消息消费不起作用（这可能是由于 dApps 的 Cairo 合约中的错误而发生的）。 这可能会导致用户永远失去对其资产的保管权。

为了减轻这种风险，我们允许发起 L1→L2 消息的合约在声明这样做的意图并等待适当的时间后取消它（请参阅 [文档](https://starknet.io/l1-l2-messaging/#cancellation)）。

### 性能改进

该版本显着减少了定序器执行传入开罗交易流所需的时间。

这只是第一步！ 我们即将推出的下一个主要性能里程碑（0.9.0）是定序器的并行执行，并且预计未来还会有更多优化。

### 现在怎么办？

请阅读技术文档 [此处](https://starknet.io/documentation/fee-mechanism/)。

请转至 [starknet.io](https://starknet.io/)，获取所有 Starknet 信息、文档、教程和更新。

加入 [Starknet Discord](https://discord.gg/uJ9HZTUk2Y) 以获得开发支持、生态系统公告并成为社区的一部分。

访问 [Starknet Shamans](https://community.starknet.io/) 以了解最新动态并参与所有 Starknet 研究讨论。