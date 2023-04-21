### TL;DR

* StarkNet Token (STRK) 现在部署在Ethereum Mainnet上
* **正在注意故障！**StarkNet 令牌未被出售。
* 基金会需要时间来决定其代币的分配机制
* StarkWare股东、雇员和独立伙伴软件开发者持有的令牌被锁定四年。 一年后开始逐步发布
* 由于StarkNet用于投票、订购和支付费用，代币将会进一步放权。

今天，[StarkNet](https://starknet.io/)正在向权力下放迈出另一步。 StarkNet 令牌现在是[在 Etherum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766) 上。 快速重新设计：STRK将被用作参与StarkNet的协商一致机制、作为施政令牌和支付交易费的一种标记。 我们在[我们的权力下放提案](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)中提出了每个实用工具的基本原理。 在题为“代币将用于什么？”

***正在了解故障:**写入时无法购买 StarkNet 令牌; 在[StarkNet 基金会](https://twitter.com/StarkNetFndn)发出进一步通知之前，这种无销售期将保持不变； 根据StarkNet基金会的官方来函，了解关于STRK状况的任何更新。 您可以在[StarkNet Discord 上的[scam-report](https://discord.gg/qypnmzkhbc)通道上报告垃圾邮件并检查其他垃圾邮件报告。](http://starknet.io/discord)服务器。*

这个帖子解释了token分配过程，以及部署的token合约是如何为代币三个设计的公用事业中的两个，即投票和标记。 第三个公用事业——支付StarkNet的费用——将在以后讨论。

### 正在规划令牌分配进程

We’ve previously proposed a [plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6) for initial allocation of the tokens. 分配给股东、员工和独立软件开发者的代币被锁定4年，一年后开始逐步发布计划。 锁定的令牌可以用于投票和标记，但不能转移或交易。 有些代币是通过专门的智能合同在 Ethereum 上锁定的，而其他代币是通过保管人锁定的。

另外，现有StarkNet 令牌的50.1%分配给StarkNet 基金会，用于实现其[目标](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(参见)。[StarkWare的帖子](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)。 这些代币未被锁定。 然而，基金会将需要时间来制定确切的机制来进一步分配这些代币，并将适时分享其计划。

#### 为什么锁定？

锁定上述期间的令牌确保当前贡献者符合StarkNet的长期激励措施。 它还阻止为预定目的广泛使用代币投机：确保网络、支付费用和分散治理。

接下来，我们解释象征性的实现如何支持投票和标记。

### 表 决

基金会将负责促进健全的治理和制定投票机制。 StarkNet令牌旨在允许直接投票和一系列代表团机制。

#### L1 投票

现在安装的 ERC-20 实现包括**可选的**使用Compound's[授权模块](https://docs.compound.finance/v2/governance/)。 此模块广泛用于在链中投票。 它在 StarkNet上是可选的，默认情况下是关闭的原因是成本考虑。 转而讲，这意味着每次传输L1StarkNet 令牌都需要额外的气体，只是为了跟踪投票力的变化而需要额外的气体。

#### Non-L1 voting

与Compound的授权模块进行L1在链上投票的替代办法包括超链投票以及基于StarkNet的链上投票系统(例如[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU))。 这些替代品大大减少了L1转让的气体消耗，无需目前安装的ERC-20代码的明确支持，因此得到了内在支持。

如上文所述，所有令牌——锁定和解锁——将可在StarkNet的投票机制中使用。

### 加载中

StarkNet没有权限，阻止检查的操作需要随机选择测序器。 某个节点被选中来排序和提出一个方块的概率与节点触发的 StarkNet 令牌的数目成比例。 使用 StarkNet 令牌的原理(例如以太币或比特币为单位) 已在[施政提案](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)中作了解释， 以及标记的确切细节， StarkNet上的顺序和区块创建正在进行[社区](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671)的讨论，尚未完成。

如同投票一样，代币即使被锁定，也可以被用作藏匿。 这有助于StarkNet运营商的多样性和StarkNet的复原力。

### Summary

将StarkNet Token合同部署到Etherum是StarkNet权力下放的另一个步骤。

我们促请开发者和用户警惕故障！ 在出版时，没有任何代币可以交易，在StarkNet基金会发出进一步通知之前，这种非贸易地位将保持不变。

欲了解更多问题，您可以前往[StarkNet Discord 上的[Token-discord](https://discord.gg/qypnmzkhbc)频道](http://starknet.io/discord)服务器。