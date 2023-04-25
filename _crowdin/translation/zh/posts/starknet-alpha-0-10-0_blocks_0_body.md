### TL;DR

* 本着EIP-4337的精神账户摘要改进

1. 验证 - 执行分隔符
2. 交易的唯一性现已在协议中确保(无)

* 收费机制扩大到包括：

1. L1- L2 消息
2. 申报交易

* 几乎没有开罗语法变化

### 导 言

我们很高兴看到StarkNet Alpha 0.10.0。 这个版本是在不影响安全和权力下放的情况下缩放以太坊的又一个步骤。

这篇文章简要描述了这个版本的主要特征。 对于更改的完整列表, 请检查[发布笔记](https://github.com/starkware-libs/cairo-lang/releases)。 欲了解更多详细信息，请查看[文档](https://docs.starknet.io/)。

### 账户摘要更改

我们正在移动[StarkNet的账户抽象](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)。 此版本引入了由[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) 启发的更改。

#### 验证/执行分隔符

直到现在，帐户的 \_\_execute\_\_ 函数同时负责交易验证和执行。 在 0.10.0 中，我们打破了这个连接，并在帐户中引入了一个独立的 \_validate\_\_ 函数。 收到交易时，帐户合同将首先调用 \_\_validate\_\_，然后如果成功，请继续 \_\_execute\_\_。

验证/执行分隔提供协议级别对无效和还原(尚有效)交易的区分。 由于这种情况，序列器将能够收取执行有效交易的费用，而不论是否恢复。

#### Nonce

在 0.10.0 版本中，为了在协议级别强制执行事务的独特性，添加了一个nonce 字段。 到目前为止，未交易是在账户合同一级处理的，这意味着在理论上可以两次执行具有相同散列的交易。

与以太坊类似，每一项合同现在都包括一个非交易，计算该账户完成交易的数量。 帐户合约只能接受没有匹配的交易, 例如: 如果当前帐户的 nonce 是 X，那么它将只接受与 nonce X 的交易。

#### 新交易版本

为了允许向后兼容，我们将通过新的交易版本进行这两项更改 —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C)。 这些更改将仅适用于新版本，旧账户仍然能够执行版本0交易。

注意——交易v0现已废弃，并将被删除在 StarkNet Alpha v0.11.0。 请确保您升级以使用新的交易版本。

欲了解更多交易版本详细信息，请阅读[文档](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C)。

#### 收费机制

新版本允许收取两个必需组件的费用：

* [L1- L2 消息](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [申报交易](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

在这个版本中，这些费用将不是强制性的，并且只能从 StarkNet Alpha v0.11.0开始。

#### 开罗语法更改

支持逐步升级开罗，[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), 此版本包含几个语法更改。

为了最大限度地减少不便，版本发布将包含一个[迁移脚本](https://www.youtube.com/watch?v=kXs59zaQrsc)自动适用上述更改。 您可以在[此处](https://github.com/starkware-libs/cairo-lang/releases)找到更多详细信息。

### 下一步是什么？

* 几周后，我们计划对测序器进行平行化，使区块生产速度更快(V0.10.1)
* 我们很快将完成必须包括在费用支付中的最后一部分——帐户部署
* 开罗1.0 发布！ 在即将发布的帖子中更多关于这个问题的信息。

### 如何更多地参与？

* 访问[starknet.io](https://starknet.io/)获取所有StarkNet 信息、文档、教程和更新。
* 加入[StarkNet Discord](http://starknet.io/discord)以获取开发支持、生态系统通知并成为社区的一部分。
* 访问[StarkNet论坛](http://community.starknet.io/)了解最新情况并参与StarkNet的研究讨论。

我们总是很高兴收到关于我们的[文档](https://docs.starknet.io/) 的反馈！