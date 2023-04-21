### TL;DR

* Alpha 在Mainnet上在线
* 它支持一般的计算和合成性
* 快速增长的社区，开发工具和应用
* 今后几周将不断推出的其他特点
* 免责声明：这是一个 Alpha 版本(读取下面的细目打印)

### 导 言

StarkNet Alpha今天正在Ethereum Mainnet上启动！

StarkNet是一个无权限分散的Rollup网络，在Etherum上作为L2网络运行。 StarkNet允许任何dApp 实现其计算的无限比例，同时不损害Etherum的合成性和安全性。 由于依赖最安全和最可扩展的密码保护系统 —[STARK](https://starkware.co/stark/)。 StarkNet是建立在[开罗](https://starkware.co/cairo/)编程语言的基础上的，这是Etherum上的第一个生产级Ting full von-Neumann 校验器。 开罗和STARK都是由StarkWare公司内部开发的，并为我们所有的生产等级应用提供了动力。 他们在2020年夏季以来已经定居了超过50公吨和250公吨。

除其他功能外，StarkNet Alpha能够与其他StarkNet合同和通过L1<>L2短信与L1合同进行一般计算智能合同。 StarkNet Alpha 在滚动模式下操作，意味着所有状态差异数据都是在链上发送的。

回到1月份，我们分享了StarkNet[路线图](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)。 6月，StarkNet Alpha在公共测试网上运行，并在滚动基础上更新了新的功能。 我们很高兴比计划提前，这在一定程度上是因为我们依赖我们生产级的强化STARK/Cairo软件堆栈。

### 您应该如何对待StarkNet Alpha？

首先，非常谨慎，因为“阿尔法”标签是出于一种理由。 期望将来会有变化、修复和改进。 StarkNet Alpha 尚未审计， 而且我们可能会推迟这种审计，直到网络更加成熟(请参阅本帖末的免责声明以了解更多信息)。

一般而言，我们遵循我们的最优秀同事们所确定的谨慎和明智的道路，即： 仲裁和优化：用单一序列器和白名单应用程序启动网络，以确保其开发人员了解所涉及的风险。 我们继续充分致力于实现StarkNet的完全权力下放。

你应该如何对待StarkNet Alpha的经济？ Alpha 将以无交易费用开头。 下一次升级仅几个星期之后，将引入一个收费机制——我们将在一个单独的职位上分享更多的细节。

### 开始Building

我们邀请您通过 StarkNet开始编写自己的应用程序 (新!) [网站](http://starknet.io/), 或直接跳到[教程](https://starknet.io/docs/).

如果您准备好部署，请按照[登机流程](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); 创建是为了确保所有开发者都清楚系统的初步状态。

### 生态

在过去几个月里，我们看到StarkNet社区的规模和活动惊人地增长。 它聚合在[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y) 上。 区块链生态系统的数十名开发者——团队和个人——正在为这一努力作出贡献。 （见本文末尾的免责声明）

#### 开发者工具

* OpenZepelin正在界定标准合同。 他们的[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)和[讨论](https://github.com/OpenZeppelin/cairo-contracts/discussions)值得关注
* [Warp](https://github.com/NethermindEth/warp)Solidity->Cairo transpiler, developed by Netherlands
* Shard Labs'[HardHat 插件](https://github.com/Shard-Labs/starknet-hardhat-plugin)and[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* 正在开发工具，包括与[Sean Han](https://twitter.com/seanjameshan)及其创建者一起在StarkNet.js上共同进行的努力

#### B. 基础设施

**块浏览器**:

* [荷兰人的 Voyager](http://voyager.online/)项目
* [Eth.tx](https://ethtx.info/)将提供支持分析和StarkNet交易的详细视图

**完整节点**：正在进行两项努力：一项是由Erigon牵头的Fermion项目。 另一个是[开拓者](https://github.com/eqlabs/pathfinder)项目，由均衡器牵头。

**钱包**:

* [ArgentX](https://github.com/argentlabs/argent-x)是一个由Argent开发的浏览器扩展，已经可供开发者使用
* Torus 密钥管理解决方案已准备好
* Ledger正在开发一个原生StarkNet 应用程序，将在年底前提供

**开罗审计**: 共识勤奋、Bits跟踪、Pecksembd和ABDK 要么已经进行或即将开始进行开罗审计

**API 服务**: 在 StarkNet 提供完整节点后, API 服务将由 Figent, Chainstack 和 Infura 提供

**索引器**: 我们将致力于整合TheGraph, 与StarkNet一起工作

### 前面的道路

在今后几周和几个月内，我们将以以下能力升级阿尔法：

* 合同升级机制
* 收费机制
* 事件
* 添加缺失的 syscalls (get_block_number get_block_timestamp, 以及更多)
* Skeletal 版本的Voludy
* 还有更多 …

要持续地监测这种努力，请查看这些功能的[暂定路线图](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)。

再进一步，我们继续大量投资于多个战线上的积极研究(加入[Shamans](https://community.starknet.io/)的努力):

* 去中心化
* 缩放比例
* 可用数据
* 无权限激励措施

### 行动呼吁

* 开始在Goerli上的无权限StarkNet 测试网上撰写合同
* 加入[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* 加入社区电话
* 出席第一次[StarkNet生态系统首脑会议](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan27-28 2022, Stanford CA)
* 加入[StarkNet Shamans](https://community.starknet.io/)以更深入地潜入研究挑战

### 免责声明

***StarkNet Alpha是一个新的复杂系统，尚未得到充分审计。 像所有复杂的软件系统一样，StarkNet系统可能含有漏洞，在极端情况下可能导致您的所有资金损失。 所以,***树木很精心, 并且很舒适!******

*StarkNet生态系统是一组庞大和迅速成长的独立小组和个人，StarkWare对此没有监督，也没有责任。 生态系统成员开发的任何一个项目都可能含有在极端情况下可能导致您所有资金损失的漏洞。 此外，随着更多智能合约的部署，出现意外的有害缺陷甚至恶意的故障和废墟拉动的可能性增加。 因此，当您处理太空智能合同时，处理StarkNet上的所有智能合同， 并且只使用那些你有充分理由信任的安全者。*