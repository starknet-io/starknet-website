### TL;DR

* 本着 EIP-4337 的精神进行帐户抽象改进

1. 验证——执行分离
2. 现在协议中确保了交易的唯一性（Nonce）

* 收费机制扩展至包括：

1. L1→L2 消息
2. 申报交易

* Cairo 语法几乎没有变化

### 介绍

我们很高兴推出 Starknet Alpha 0.10.0。 该版本是在不影响安全性和去中心化的情况下扩展以太坊的又一步。

这篇博文简要介绍了该版本的主要功能。 有关更改的完整列表，请查看[发行说明](https://github.com/starkware-libs/cairo-lang/releases)。 有关更多详细信息，请查看[文档](https://docs.starknet.io/)。

### 账户抽象变化

我们继续推进[Starknet 的账户抽象](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)。 此版本引入了受[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337)启发的更改。

#### 验证/执行分离

到目前为止，帐户的 \_\_execute\_\_ 函数负责交易验证和执行。 在 0.10.0 中，我们打破了这种耦合，并在帐户中引入了一个单独的 \_\_validate\_\_ 函数。 收到交易后，账户合约首先会调用\_\_validate\_\_，如果成功，则继续\_\_execute\_\_。

验证/执行分离提供了无效和恢复（但有效）事务之间的协议级区别。 因此，排序者将能够对执行有效交易收取费用，无论交易是否被恢复。

#### 随机数

在版本 0.10.0 中添加了一个随机数字段，以在协议级别强制执行事务的唯一性。 到目前为止，随机数都是在账户合约级别处理的，这意味着具有相同哈希值的交易理论上可以执行两次。

与以太坊类似，现在每个合约都包含一个随机数，用于计算该账户执行的交易数量。 账户合约只会接受随机数匹配的交易，即如果账户当前的随机数是 X，那么它只会接受随机数为 X 的交易。

#### 新交易版本

为了实现向后兼容，我们将通过新的交易版本[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C)引入这两个更改。 这些更改仅适用于新版本，旧帐户仍然能够执行版本 0 交易。

注意 - 事务 v0 现已弃用，并将在 Starknet Alpha v0.11.0 中删除。 请确保您升级以使用新的交易版本。

有关交易版本的更多详细信息，请阅读[文档](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C)。

#### 收费机制

新版本允许包含两个必需组件的费用：

* [L1→L2 消息](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [申报交易](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

这些费用在此版本中不是强制性的，并且仅从 Starknet Alpha v0.11.0 开始强制执行。

#### 开罗语法变更

为了逐步升级 Cairo，[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU)，此版本包括一些语法更改。

为了最大程度地减少不便，该版本发布将包含一个自动应用上述更改的[迁移脚本](https://www.youtube.com/watch?v=kXs59zaQrsc)。 您可以在此处</a>找到更多详细信息

。</p> 



### 下一步是什么？

* 几周后，我们计划将并行化引入排序器，从而实现更快的块生产（V0.10.1）
* 我们很快就会完成费用支付中必须包含的最后一部分——账户部署
* 开罗1.0发布！ 有关更多信息，请参阅即将发布的帖子。



### 我怎样才能更加投入？

* 请转至[starknet.io](https://starknet.io/)以获取所有 Starknet 信息、文档、教程和更新。
* 加入[Starknet Discord](http://starknet.io/discord)以获得开发支持、生态系统公告并成为社区的一部分。
* 访问[Starknet 论坛](http://community.starknet.io/)了解最新动态并参与 Starknet 研究讨论。

我们总是很高兴收到有关我们[文档](https://docs.starknet.io/)的反馈！