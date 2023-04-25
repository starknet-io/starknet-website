### TL;DR

* StarkNet Bridge, StarkGate Alpha, 第一个版本在**[Testnet](https://goerli.starkgate.starknet.io/)**, 并在**[Mainnet](https://starkgate.starknet.io/)** 上直播！
* 我们期待着社区就如何改善情况提出反馈意见。 您可以发送您对[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)和[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx) 的反馈。
* Mainnet 部署将很快完成(更新，2022年5月9日：StarkGate 已在Mainnet上运行)

激动！ 我们很想要释放StarkNet桥的第一版StarkGate Alpha，现在住在Goerli testnet上，即将部署Mainnet。*

\*(更新，2022年5月9日：StarkGate在Mainnet上在线

**重要的免责声明：这是StarkGate Alpha 上的 Alpha 版本 (请阅读下面的精细打印!)。**

![](/assets/starkgate_01.png)

在你继续之前，去看看吧！ [StarkGate 测试网](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate充当Etherum和[StarkNet](https://starknet.io/)之间的网关，允许用户做他们可以从桥上期望的一切。

#### **从哪里可以找到StarkGate如何工作的信息？**

要了解StarkGate 如何工作，请阅读[技术文档](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)并查看[代码](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)。 注意这是第一个版本， 我们邀请您就如何改进[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)和[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx) 的反馈和建议。

#### **StarkGate将支持哪个代币？**

* StarkGate Alpha on Goerli支持ETH和其他几个ERC-20代币。 完整列表和相关的合同地址，无论是在Ethereum 还是StarkNet上，都可以在此[repo](https://github.com/starkware-libs/starknet-addresses) 中找到。
* 在Mainnet上，StarkGate Alpha将只支持ETH，允许使用收费机制。 稍后，我们将增加对WBTC、USDC、USDT和DAI的支持。 您可以在此[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json) 中看到相关的合约地址。

在更远的道路上，我们将公布增加对额外令牌的支持的机制。

#### **StarkGate Alpha 对Mainnet有什么安全限制？**

StarkGate Alpha on Mainnet有两个限制——为了减少使用Alpha 版本所涉及的风险：

1. L1桥中已锁定的总值 (TVL) 将限制每个令牌类型的数量。
2. 通过StarkGate从L1到L2(因此——StarkNet)发送的每笔交易的最大金额将是有限的。

我们计划随着信心的增强而逐步减轻这些限制并完全取消这些限制。 更新的参数可以在 StarkGate 的[文档](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge) 中找到。

![](/assets/starkgate_02.png)

### 阿尔法和它意味着什么

一如既往，我们提醒您StarkNet目前处于**Alpha**阶段：

* 事情可以打破。 如果他们灾难性地失败，您的资金可能会丢失（**阅读下面的免责声明**！）。
* StarkNet Alpha 和 StarkGate 的合同都可以在没有时限的情况下升级。 虽然我们期望提前很长时间宣布这种升级，但是在安全风险迫在眉睫的情况下（例如： 如果发现了一个关键错误，升级可能会在几乎没有或没有警告的情况下应用。
* 桥的代码以及StarkNet Alpha的部分内容尚未得到审计。 ABDK和荷兰将很快完成StarkGate Alpha的审计工作。

我们鼓励所有用户通过使用以下平台之一提供反馈来帮助改善桥梁：

1. [StarkGate 前端repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate 合同](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

对于问题和开发支持, 加入[StarkNet Discord 服务器](https://discord.gg/uJ9HZTUk2Y)。

### 免责声明

***StarkNet Alpha是一个新的复杂系统，尚未得到充分审计。 StarkNet 桥也是如此。 像所有复杂的软件系统一样，StarkNet和桥都可能包含的 bug 在极端情况下，可能导致你们所有资金的损失。 所以,***树木很精心, 并且很舒适!******

*StarkNet生态系统是一组庞大和迅速成长的独立小组和个人，StarkWare对此没有监督，也没有责任。 生态系统成员开发的任何一个项目都可能含有在极端情况下可能导致您所有资金损失的漏洞。 此外，随着更多智能合约的部署，出现意外的有害缺陷甚至恶意的故障和废墟拉动的可能性增加。 因此，当您处理太空智能合同时，处理StarkNet上的所有智能合同， 并且只使用那些你有充分理由信任的安全者。*