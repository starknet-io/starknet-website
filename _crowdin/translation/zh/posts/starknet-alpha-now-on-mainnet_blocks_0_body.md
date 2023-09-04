### TL;DR

* Alpha 已在主网上上线
* 它支持通用计算和可组合性
* 快速增长的社区、开发工具和应用程序
* 其他功能将在未来几周内持续推出
* 免责声明：这是 Alpha 版本（请阅读下面的细则）

### 导 言

Starknet Alpha 今天在以太坊主网上发布！

Starknet 是一个无需许可的去中心化 Rollup，作为以太坊上的 L2 网络运行。 Starknet 允许任何 dApp 实现无限的计算规模，而不会影响以太坊的可组合性和安全性，这要归功于它依赖于最安全和最具可扩展性的加密证明系统 - [STARK](https://starkware.co/stark/)。 Starknet 基于 [Cairo](https://starkware.co/cairo/) 编程语言构建，是以太坊上第一个生产级图灵完备的冯诺依曼验证器。 Cairo 和 STARK 均由 StarkWare 内部开发，并为我们所有的生产级应用程序提供支持，自 2020 年夏季以来，这些应用程序已结算超过 5000 万笔交易和 250B 美元。

除其他功能外，Starknet Alpha 还支持支持可组合性的通用计算智能合约，既可以与其他 Starknet 合约进行组合，也可以通过 L1<>L2 消息传递与 L1 合约进行组合。 Starknet Alpha 以 Rollup 模式运行，这意味着所有状态差异数据都在链上发送。

早在一月份，我们就分享了 Starknet [路线图](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)。 6 月，Starknet Alpha 在公共测试网上上线，并滚动更新新功能。 我们很高兴能够提前完成计划，这在一定程度上要归功于我们对经过考验的生产级 STARK/Cairo 软件堆栈的依赖。

### 你应该如何对待星网阿尔法？

首先，要非常小心，因为“Alpha”标签的存在是有原因的。 期待即将到来的变化、修复和改进。 Starknet Alpha 尚未经过审核，我们可能会推迟此类审核，直到网络更加成熟为止（请阅读本文末尾的免责声明以获取更多信息）。

一般来说，我们遵循 Optimistic Rollup 同事定义的谨慎和明智的路径，即 Arbitrum 和 Optimism：使用单个排序器启动网络，并将应用程序列入白名单，以确保其开发人员了解所涉及的风险。 我们将继续全力致力于 Starknet 的完全去中心化。

你应该如何看待 Starknet Alpha 的经济状况？ Alpha 启动时不收取任何交易费用。 几周后的下一次升级将引入收费机制——我们将在另一篇文章中分享更多细节。

### 开始建造

我们邀请您通过检查（新！） [网站](http://starknet.io/)，或者直接跳到 [教程](https://starknet.io/docs/)。

如果您已准备好部署，请遵循此 [入门流程](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)；创建的目的是确保所有开发人员都清楚系统的初步状态。

### 生态

在过去的几个月里，我们看到 Starknet 社区的规模和活动出现了惊人的增长，该社区聚集在 [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)上。 区块链生态系统中的数十名开发人员（团队和个人）正在为这项工作做出贡献。 （请参阅本文末尾的免责声明）

#### 开发者工具

* OpenZeppelin 正在定义标准合约。 他们的 [回购](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) 和 [次讨论](https://github.com/OpenZeppelin/cairo-contracts/discussions) 值得关注
* [Warp](https://github.com/NethermindEth/warp) Solidity –>Cairo 转译器，由 Nethermind 开发
* Shard Labs 的 [HardHat 插件](https://github.com/Shard-Labs/starknet-hardhat-plugin) 和 [Starknet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent 正在开发工具，包括与其创建者 [Sean Han](https://twitter.com/seanjameshan)共同开发 Starknet.js

#### 基础设施

区块浏览器：

* [Nethermind 的 Voyager](http://voyager.online/) 项目
* [Eth.tx](https://ethtx.info/) 将提供 Starknet 交易的支持分析和详细视图

全节点：两项工作正在进行中：一项是Erigon领导的Fermion项目，另一项是Equilibrium领导的 [Pathfinder](https://github.com/eqlabs/pathfinder) 项目

钱包：

* [ArgentX](https://github.com/argentlabs/argent-x) 是 Argent 开发的浏览器扩展，已可供开发人员使用
* Torus 密钥管理解决方案已为 Starknet 做好准备
* Ledger 正在开发原生 Starknet 应用程序；将于年底前推出

开罗审计：ConsenSys Diligence、Trail of Bits、Peckshield 和 ABDK 要么已经在进行开罗审计，要么即将开始

API服务：Starknet全节点上线后，Figment、Chainstack、Infura将提供API服务

Indexer：我们将与 Figment 团队一起致力于将 TheGraph 集成到 Starknet 中

### 前方的路

在接下来的几周和几个月里，我们将升级 Alpha 并提供以下功能：

* 合约升级机制
* 收费机制
* 事件
* 添加缺少的系统调用（get_block_number、get_block_timestamp 等）
* 意志的骨骼版本
* 还有更多 …

要持续监控这项工作，请参阅功能的 [暂定路线图](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)。

展望未来，我们将继续大力投资于多个领域的积极研究（加入 [Shamans](https://community.starknet.io/) 努力）：

* 去中心化
* 缩放
* 可用数据
* 无需许可的激励

### 呼吁采取行动

* 开始在 Goerli 上的无需许可的 Starknet 测试网上编写合约
* 加入 [星网不和谐](https://discord.gg/uJ9HZTUk2Y)
* 加入社区呼吁
* 参加第一届 [Starknet 生态系统峰会](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157) （2022 年 1 月 27-28 日，加利福尼亚州斯坦福）
* 加入 [Starknet Shamans](https://community.starknet.io/) ，深入探讨研究挑战

### 免责声明

\*Starknet Alpha 是一个新的复杂系统，尚未经过全面审核。 与所有复杂的软件系统一样，Starknet 系统可能包含错误，在极端情况下，可能会导致您损失所有资金。 所以，谨慎行事并小心！\*

Starknet 生态系统是一个庞大且快速增长的独立团队和个人集合，StarkWare 对其没有任何监督，也不承担任何责任。 生态系统成员开发的任何一个项目都可能包含错误，在极端情况下，可能会导致您损失所有资金。 此外，随着越来越多的智能合约的部署，出现意外有害错误甚至恶意诈骗和拉扯的可能性也会增加。 因此，请像对待以太坊上的智能合约一样对待 Starknet 上的所有智能合约，并且仅使用那些您有充分理由相信安全的智能合约。