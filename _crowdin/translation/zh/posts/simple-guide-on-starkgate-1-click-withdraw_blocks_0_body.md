您是否曾经发现自己在通过 Starkgate 桥接资产后忘记从主网撤回资产？ 好吧，感谢我们开发人员的出色工作，您现在可以告别这种担忧了。

### 我们很高兴地宣布，[SpaceShard](https://www.spaceshard.io/)为 Starkgate 引入了一项令人兴奋的新功能：一键提款！

借助一键提现功能，您现在可以轻松地从主网检索桥接资产，而无需启动单独的提现交易。 不再担心忘记提款或处理复杂的提款手续。 🥳🥳🥳

![此功能简化了流程，只需单击一下即可轻松提取资产。](/assets/meme-image-spaceshard.jpg "此功能简化了流程，只需单击一下即可轻松提取资产。")

## 加入我们的早期测试者计划！

我们邀请您加入我们的早期测试计划，亲身体验 Starkgate 一键提现功能的便捷和高效。 立即访问**[Starkgate 网站](https://starkgate.starknet.io/terms)**成为早期测试者并探索桥接技术这一令人兴奋的进步。

## 如何使用它？

前往**[https://goerli.starkgate.starknet.io](https://goerli.starkgate.starknet.io/)获取测试网选项**或前往**\[https://starkgate.starknet.io/](https://starkgate.starknet.io/**)\ *\* 用于主网。

确保您连接了 Metamask 和 Argent/Braavos 钱包。

![确保您连接了 Metamask 和 Argent/Braavos 钱包。](/assets/metamask-argent-braavos-connection.jpg)

进入提现选项卡，输入您要提现的金额，然后勾选“*使用SpaceShard*的自动提现服务”。

![](/assets/withdrawl-tab.jpg)

根据您使用的钱包，将会出现弹出窗口。 在这种情况下，Argent 钱包连接到 Starkgate（见下图）。

![](/assets/argent-popup.jpg)

在 Argent 钱包上确认交易。 它将把代币存入 Starkgate 桥中，并向一键服务提供商收取少量 ETH 费用。

交易确认后，您可以在**[Starkscan](https://starkscan.co/)**或**[Voyager](https://voyager.online/)上查看交易状态。**

![](/assets/transaction-is-being-processed-on-sn.jpg)

一键提现服务将等待 L1 接受交易。

![](/assets/transaction-gets-accepted-on-l1.-.jpg)

同时，用户可以返回Starkgate查看提现请求的状态。 要查看提款历史记录，请单击右上角的 Argent 小部件。 一旦 L1 被接受，用户将在 Starkgate 上通过弹出窗口收到通知。

![](/assets/starkgate-page.jpg)

以下是对提款历史记录的详细查看。 提款完成后，用户可以通过单击以太坊 Tx 按钮来访问确认。 这会将它们重定向到 StarkScan。

![](/assets/withdrawal-history-confirmation.jpg)

双重检查始终是必须的，用户也可以在**[Etherscan](https://etherscan.io/)**上找到确认信息。 提款的最后阶段应如下图所示，其中 USDC 代币已转移至 L1 接收账户。

![](/assets/etherscan.jpg "瞧！ 如此简单，如此星网！")

*瞧！ 如此简单，如此星网！*

## Q&A 如何让 Starkgate 中继器处理我的交易？

> *获取处理交易的当前 Gas 成本，然后在 L2 上创建多重调用。 该交易必须包含将 Gas 费用转移到中继者地址，并从桥接合约中提取代币。 您的交易将在 L1 被接受后得到处理。 此处提供了节点应用程序示例。*

## 我可以使用哪些代币来支付天然气费用？

> *目前，我们接受 L2 ETH 代币。 稍后我们会将费用支付选项扩展到其他代币，例如 WBTC 和 USDC/T。*

## 中继器支持哪些代币？

> *在主网上，中继器处理 4 种代币：ETH、USDC、USDT 和 WBTC。 有关更多详细信息，请查看此地址列表。 在测试网上，只有 ETH 代币可用。*

## 你如何计算天然气成本？

> *Gas 成本是使用过去 8 小时内 L1 区块上记录的基本费用价格的平均值来计算的。 未来，由于我们实施了批处理机制，gas 成本将会更低。 基本上，随着越来越多的用户使用该服务，每个人的费用都会变得更便宜！ 纯粹的魔法🪄✨*

## 中继者需要多长时间来处理我的提款？

> *中继器将尝试尽快执行您的交易。 但在某些情况下，L1 网络费用高于预期，这意味着中继者将等待更好的价格再执行提现。*

## 中继者如何执行提现？

> *中继者按批次执行提款。 因此，每次中继器检测到有效提款时，都会对其进行缓冲，然后通过多次调用执行提款功能。 这种方法使我们能够降低用户的天然气成本。*

## 如果我犯了一个错误并且没有设置正确的天然气成本怎么办？

> *在这种情况下，中继者将忽略您的交易，并且支付的 Gas 费用将不会被退还。 获取代币的唯一方法是手动调用以提取代币。 我们正在开发一个版本，您将能够获得交易退款，并且如果您愿意支付更多的汽油，则可以按需更快地完成交易。*

## 我可以进行第二笔交易来弥补缺少的天然气费用吗？

> *目前，这是不可能的，但我们正在开发一种解决方案，因此您将能够在正常提款速度和更快的提款速度之间进行选择。*

## 我支付了正确的 Gas 费用，但我的交易没有被处理，为什么？

> *要么您的交易没有很好地执行：*
> 
> \- 该交易不是多次调用
> 
> \- 用于支付 Gas 费用的代币不是 ETH
> 
> *或者：*
> 
> \- 中继器正在等待 L1 上的 Gas 价格下降。 如果情况并非如此，请随时通过[Discord](https://discord.gg/6PKcsRPQKC)联系 SpaceShard 团队。

## 在哪里可以测试 Starkgate 中继器？

> *您将可以通过官方 Starknet 网桥 Starkgate 访问中继器功能。*

我们希望本指南对您展示如何在 Starkgate 上使用 SpaceShard 一键提现功能有所帮助。

如果您有任何疑问或需要更多信息，请随时通过我们的**Discord**社区与我们联系。 我们正在不断努力增强桥接体验，并很高兴您能作为早期测试者加入。

快乐退出！

[](https://medium.com/tag/starkware?source=post_page-----5e96e5dc152c---------------starkware-----------------)