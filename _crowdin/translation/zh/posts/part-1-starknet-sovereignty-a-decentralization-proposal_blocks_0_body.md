### TL;DR

* Starknet 的去中心化涉及原生代币和新的基础。
* Starknet 代币用于治理并作为网络的支付和质押资产。
* 一百亿个代币已经铸造完毕，分配也已经开始。
* 目前正在成立的 Starknet 基金会的使命是维持 Starknet 的公共利益。

Starknet 是一个无需许可的去中心化第 2 层 (L2) 有效性汇总，旨在允许以太坊通过称为 STARK 的加密协议进行扩展，而不损害以太坊的去中心化、透明性、包容性和安全性的核心原则。

Starknet 的 Alpha 版于 2021 年 11 月在主网上发布。 不到一年的时间，一个生态系统正在形成，全球有数十个团队致力于此。 现在是推进网络去中心化的时候了，这样它就能实现以太坊 L2 所要求的活跃性、抗审查性、透明度和包容性。

去中心化意味着网络的运营和发展将不依赖于任何单一实体，包括 StarkWare。 无需许可的权益证明领导者选举机制和交易费用的链上支付（均使用原生代币）将使网络能够作为以太坊上的 L2 可靠运行，即使 StarkWare 不复存在。 有关 Starknet 持续维护的决策将从 StarkWare 转移到社区。 Starknet 代币和基金会将是这项工作的关键要素。

这篇文章是同时发布的三篇文章中的第一篇，总结了 Starknet 迄今为止的历程，并介绍了 Starknet 代币和 Starknet 基金会。 第 [篇文章](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778) 讨论 Starknet 治理模型，第 [篇文章](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6) 重点讨论 Starknet 的代币模型。

我们感谢以下 Starknet 支持者（按字母顺序排列）对这些帖子草稿的评论：Guily_Gioza (Topology)、Itamar Lesuisse (Argent)、Jonas Nelle (Pontis)、Martin Triay (OpenZeppelin)、Polynya、Sylve Chevet (Briq) 、Tomasz Stańczak（Nethermind）。

### 故事到目前为止

[Starknet](https://starknet.io/) 由密码学和开放生态系统构建而成。 密码学是 [STARKs](https://eprint.iacr.org/2018/046.pdf)。 这些是基于数学的协议，可以将以太坊扩展几个数量级。 它们不需要可信设置，具有后量子安全性，并且可以以任何规模简洁部署。 该生态系统由核心开发人员组成，他们多年来一直希望构建用于扩展区块链技术的基础设施和工具，以及随着以太坊计算能力的扩展而成为可能的新的创意应用领域。

Starknet 使所有开发人员和用户都能获得 STARK 的规模和安全优势，以扩展以太坊的规模，同时保持以太坊的核心价值。 STARK 由 StarkWare 联合创始人发明，他们首先使用它们为客户构建 [StarkEx](https://starkware.co/starkex/) 扩展解决方案。 随后，StarkWare 和其他开发团队（统称为“核心贡献者”）构建了 [Starknet](https://starkware.co/starknet/)，这是一个公共、去中心化且无需许可的基础设施，以确保所有人都可以永久使用这些扩展技术。

近一年前 Starknet Alpha 的推出促使了一个致力于构建和培育 Starknet 的更大生态系统的出现。 全球有许多开发团队正在构建其核心基础设施以及其上的新应用程序。

### 去中心化的方式

STARK技术成熟且安全，但Starknet还没有达到像以太坊或互联网那样的公共产品的地位。 为了实现这一目标，Starknet 的治理、运营和发展必须继续去中心化。 这将通过两种机制来促进：Starknet 基金会和 Starknet 代币。

#### 基金会

作为一个非营利组织，基金会的使命是维持 Starknet 作为一种公共产品——一种向社会所有成员提供的商品或服务。 Starknet 是无需许可的基础设施，应该向所有人开放。 它必须得到良好的维护，以便安全有效地供公众使用。 它还不得歧视用户。

该基金会将通过一次性授予 Starknet 代币来资助。 它将鼓励开发自下而上的社区决策机制，以解决协议更新、争议解决和公共产品资助等基本技术问题。

#### 令牌

Starknet 代币用于运营生态系统、维护和保护生态系统、决定其价值和战略目标并指导其发展。 该代币将用于 (i) 治理、(ii) 支付 Starknet 上的交易费用，以及 (iii) 参与 Starknet 的共识机制。

我们已经铸造了最初的 100 亿枚代币，这些代币将分配给 Starknet 生态系统的核心贡献者，包括 StarkWare 和 StarkWare 的投资者、Starknet 软件开发合作伙伴以及基金会。 很快（目标：2022 年 9 月）该代币将作为 ERC-20 代币出现在以太坊上，并被要求用于网络升级的治理和投票。 以后，Starknet 费用将仅以该代币支付，同时确保有兴趣使用 ETH 支付费用的用户获得良好的用户体验。 稍后，将开始自动铸造额外的 Starknet 代币（即流通代币数量将超过 100 亿）。

Starknet 代币模型强调对开发人员的工作进行补偿。 一部分新的铸币费和交易费（为使用 Starknet 评估的费用）将授予核心基础设施开发商和智能合约开发商，以表彰他们为设计和启动协议所做的工作，此外还补偿 Starknet 运营商所做的工作已经做了操作它。

我们的 [第二篇文章](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)解释了新的专用 Starknet 代币背后的完整原理， [第三篇文章](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)讨论了 Starknet 代币的设计原则和初始分配。