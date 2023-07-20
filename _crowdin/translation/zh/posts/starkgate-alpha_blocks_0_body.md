### TL;DR

* StarkNet Bridge 的第一个版本 StarkGate Alpha 已在**[Testnet](https://goerli.starkgate.starknet.io/)**和**[Mainnet](https://starkgate.starknet.io/)**上线！
* 我们等待社区对如何改进的反馈。 您可以发送针对[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)和[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)的反馈。
* 主网部署即将进行（更新，2022 年 5 月 9 日：StarkGate 在主网上上线）

激动！ 我们很高兴发布 StarkGate Alpha，这是 StarkNet Bridge 的第一个版本，现已在 Goerli 测试网上上线，主网部署也将很快进行。*

\*（更新，2022 年 5 月 9 日：StarkGate 在主网上上线）

**重要免责声明：这是 StarkGate Alpha 上的 alpha 版本（请阅读下面的细则！）。**

![](/assets/starkgate_01.png)

在继续之前，请先检查一下！ [StarkGate 测试网](https://goerli.starkgate.starknet.io/),[StarkGate 主网](https://starkgate.starknet.io/)

StarkGate 充当以太坊和[StarkNet](https://starknet.io/)之间的网关，并允许用户完成他们期望从桥中获得的一切。

#### **在哪里可以找到有关 StarkGate 如何工作的信息？**

要了解 StarkGate 的工作原理，请阅读[技术文档](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)并查看[代码](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)。 请注意，这是第一个版本，我们邀请您就如何改进[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)和[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)提供反馈和建议。

#### **StarkGate 将支持哪些代币？**

* Goerli 上的 StarkGate Alpha 支持 ETH 和其他一些 ERC-20 代币。 以太坊和 StarkNet 上的完整列表和相关合约地址可在[repo](https://github.com/starkware-libs/starknet-addresses)中找到。
* 在主网上，StarkGate Alpha 最初将仅支持 ETH 以允许使用费用机制。 稍后，我们将添加对 WBTC、USDC、USDT 和 DAI 的支持。 您可以在这个[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)中看到相关合约地址。

下一步，我们将发布添加对其他代币的支持的机制。

#### **StarkGate Alpha 在主网上有哪些安全限制？**

StarkGate Alpha 在主网上的推出有两个限制——为了降低使用 Alpha 版本所涉及的风险：

1. L1 桥中锁定的总价值（TVL）将限制每种代币类型的数量。
2. 通过 StarkGate 从 L1 发送到 L2（以太坊→StarkNet）的每笔交易的最大金额将受到限制。

我们计划逐步放宽这些限制，并随着信心的增强而完全解除它们。 更新后的参数可以在 StarkGate 的[文档](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)中找到。

![](/assets/starkgate_02.png)

### 阿尔法及其含义

一如既往，我们提醒您 StarkNet 目前处于**Alpha**阶段：

* 事情可能会破裂。 如果他们灾难性地失败，您的资金可能会丢失（**阅读下面的免责声明**！）。
* StarkNet Alpha 和 StarkGate 合约都可以在没有时间锁的情况下升级。 虽然我们希望提前宣布此类升级，但在迫在眉睫的安全风险的情况下（例如，如果发现严重错误），升级可能会在很少或没有警告的情况下进行。
* 该桥的代码以及 StarkNet Alpha 的部分内容尚未经过审核。 ABDK 和 Nethermind 对 StarkGate Alpha 的审核即将完成。

我们鼓励所有用户通过使用以下平台之一提供反馈来帮助改进桥梁：

1. [StarkGate 前端存储库](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate 合约仓库](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [斯塔克网络萨满](http://community.starknet.io/)

如需疑问和开发支持，请加入[StarkNet Discord 服务器](https://discord.gg/uJ9HZTUk2Y)。

### 免责声明

***StarkNet Alpha 是一个新的复杂系统，尚未经过全面审核。 这同样适用于 StarkNet Bridge。 与所有复杂的软件系统一样，StarkNet 和桥接器都可能包含错误，在极端情况下，可能会导致您损失所有资金。 所以，***小心谨慎！******

*StarkNet 生态系统是一个庞大且快速增长的独立团队和个人集合，StarkWare 对其没有任何监督，也不承担任何责任。 生态系统成员开发的任何一个项目都可能包含错误，在极端情况下，可能会导致您损失所有资金。 此外，随着越来越多的智能合约的部署，出现意外有害错误甚至恶意诈骗和拉扯的可能性也会增加。 因此，请像对待以太坊上的智能合约一样对待 StarkNet 上的所有智能合约，并且仅使用那些您有充分理由相信安全的智能合约。*