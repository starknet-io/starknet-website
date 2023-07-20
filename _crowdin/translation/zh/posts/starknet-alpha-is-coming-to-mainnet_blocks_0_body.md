### TL;DR

* Starknet Alpha 将于 11 月在以太坊主网上线
* 现在是在 Starknet 上构建的时候了

### 一个简短的历史

我们在年初宣布了 [Starknet](https://starkware.co/product/starknet/) 的愿景：为以太坊带来巨大的可扩展性，同时保留 L1 安全性、无需许可的交互和去中心化。\
我们于 6 月份在公共测试网上发布了 [Starknet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)。 该版本支持完全无需许可的通用计算智能合约。 此后，我们对其进行了两次升级：第一次升级到 Alpha 1 — 提供 [L1<>L2 消息传递和链上数据](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)，然后升级到 Alpha 2 — 支持 [可组合性](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc)。

Starknet Alpha 2 现在支持类似以太坊状态下的通用计算的可组合智能合约，具有 L1 和 L2 合约相互交互的能力。 阅读更多内容 [此处](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### 主网上的 Starknet Alpha 是什么？

主网上的 Starknet Alpha 将支持与 Goerli 公共测试网上当前可用的功能类似的功能。

#### 期待什么

由于 Starknet 仍处于开发阶段，我们希望逐步引入功能，并确保每一步都满足开发人员的期望。 我们要强调的两个特别重要的方面是：

* 许可的智能合约部署：我们将遵循 Optimistic Rollup 同事介绍的明智剧本：从许可的合约部署开始。 指定如何请求将您的智能合约纳入此初始白名单的协议将在未来几周内发布。
* 不保证向后兼容性：我们预计未来从 Starknet Alpha 到 Starknet Beta 的过渡将包括状态的再生。 网络将从区块 0 开始，应用程序必须重新部署其合约。 此外，开发人员和用户应注意，预期的 Starknet Beta 可能无法向后兼容 Starknet Alpha，例如开发人员可能需要修改其合约。 显然，我们将尝试让应用程序轻松过渡，所需的更改最少。

#### 其他近期功能

作为 Starknet Alpha 从测试网过渡到主网的一部分，我们将：

1. 将构造函数添加到合约中。
2. 完善测试框架。
3. 对于区块和交易，从使用 ID 转向使用哈希。

我们计划继续定期部署新功能，就像我们在公共测试网上所做的那样。 短期内，我们计划进行以下升级：

1. 账户合约和代币合约——为 DeFi 应用程序以他们熟悉的方式与 Starknet 交互开辟了道路。
2. 改进的合约功能——支持合约升级和事件。
3. Warp：Nethermind 开发的 Solidity-to-Cairo 编译器将允许从 Solidity 智能合约平滑过渡到 Starknet 智能合约。
4. 以太坊签名：通过 secp256k1 对 ECDSA 的本机支持将允许更轻松地与现有钱包集成。
5. Starknet 全节点：全节点将允许用户参与网络，其硬件要求与以太坊全节点相同。

#### 收费机制

Starknet Alpha 中添加账户合约和代币合约后，费用机制将立即开启。

提交给 Starknet 的所有交易都将产生费用，旨在支付 L1 和链下成本。 费用最初将以 ETH 形式收取。 随着 Starknet 规模的扩大（所有现有的基于 STARK 的系统都是如此），单笔交易的成本将会降低。 在制定初始费用机制时，我们更倾向于简单性，而不是根据交易消耗的资源准确定价交易。 预计这一机制将随着时间的推移得到完善和改进。

为了使 Starknet 成为一个可持续发展的网络并激励其运营商和开发商，从费用中收取的部分收入将分配给应用程序开发商和 Starknet 核心开发商。

#### 安全

Starknet Alpha 在主网上的安全模型将遵循测试网上的当前模型：

* 每个状态转换都有 STARK 证明支持，因此确保有效。
* 所有状态数据都将在链上发布，因此状态将完全可以从 L1 构建。
* 将有一个音序器。
* 网络将可以立即升级。

### Starknet 生态系统正在不断发展

Starknet 向全世界开放吸引了大批有兴趣学习 Cairo 并通过 Starknet 进行开发的开发人员。 他们提供了宝贵的反馈，很高兴看到 Starknet [Discord](https://discord.gg/uJ9HZTUk2Y)上充满活力的讨论。

此外，Starknet 不仅由 StarkWare 团队开发，还由区块链生态系统中一些最强大的团队开发：

* Nethermind 正在开发两个项目：\
  \
  1. [Warp](https://github.com/NethermindEth/warp): Solidity 到 Cairo 编译器\
     \
  2. [Voyager](https://voyager.online/)：Starknet 区块浏览器
* Open Zeppelin 正在为 Starknet 开发 [标准合约](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) 实现，并且还开始开发开发人员环境： [Nile](https://github.com/martriay/nile)。
* ShardLabs 正在开发 [Starknet HardHat 插件](https://github.com/Shard-Labs/starknet-hardhat-plugin) 和更好的测试框架。
* Erigon 团队正在致力于扩展其以太坊全节点以支持 Starknet（代号：Fermion）。 他们正在与我们合作设计 Starknet 的核心机制。
* Equilibrium 正在致力于 Rust 中的 Starknet 全节点实现，
* 开罗审计服务：未来几个月，ABDK、ConsenSys Diligence、Peckshield 和 Trail of Bits 将进行开罗审计。
* Starknet 审计：我们从审计网络的基础开始：

1. CryptoExperts 将对 Cairo Solidity Verifier 进行审核。
2. Cairo 规范的正式精益证明最近已完成并作为 [论文](https://arxiv.org/abs/2109.14534) 和 GitHub [存储库](https://github.com/starkware-libs/formal-proofs)发布。

预计未来几个月会有更多有趣的合作发布！

### STARK 如今正在扩展

我们满怀信心地迎接 Starknet Alpha 的推出，因为我们的独立扩展 SaaS StarkEx 已经展示了 STARK 如何大规模扩展以太坊应用程序。 我们为 [dYdX](https://dydx.exchange/) （永续合约）、 [DeversiFi](https://www.deversifi.com/) （现货交易和支付）以及 [Immutable](https://www.immutable.com/) 和 [Sorare](https://sorare.com/) （NFT 铸造和交易）推出了 StarkEx。 我们看到他们的 Gas/tx 成本降低了 100-200 倍，在 Validium（链下数据）中降至约 650 Gas/tx，而 ZK-Rollup 则降至 1100 Gas/tx。

迄今为止，StarkEx 已结算了 800 亿美元的交易和超过 2700 万笔交易，远远超过任何其他 L2 解决方案 - 以及所有这些交易的总和。

### 现在就采取行动

现在是加入不断发展的 Starknet 生态系统、构建下一个 dApp 或有用的开发人员工具的最佳时机。

我们邀请您：

1. 加入 [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)，您可以在这里结识并参与 Starknet 社区。
2. [开始学习](https://www.cairo-lang.org/docs/hello_starknet/index.html) 如何编写 Starknet 智能合约。
3. [DM 我们](https://twitter.com/StarkWareLtd) — 我们的团队渴望帮助您的想法和计划变为现实。

更新（2021 年 11 月）：Starknet Alpha 在以太坊主网上上线



### TL;DR

* Starknet Alpha 将于 11 月在以太坊主网上线
* 现在是在 Starknet 上构建的时候了

### 一个简短的历史

我们在年初宣布了 [Starknet](https://starkware.co/product/starknet/) 的愿景：为以太坊带来巨大的可扩展性，同时保留 L1 安全性、无需许可的交互和去中心化。\
我们于 6 月份在公共测试网上发布了 [Starknet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)。 该版本支持完全无需许可的通用计算智能合约。 此后，我们对其进行了两次升级：第一次升级到 Alpha 1 — 提供 [L1<>L2 消息传递和链上数据](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)，然后升级到 Alpha 2 — 支持 [可组合性](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc)。

Starknet Alpha 2 现在支持类似以太坊状态下的通用计算的可组合智能合约，具有 L1 和 L2 合约相互交互的能力。 阅读更多内容 [此处](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### 主网上的 Starknet Alpha 是什么？

主网上的 Starknet Alpha 将支持与 Goerli 公共测试网上当前可用的功能类似的功能。

#### 期待什么

由于 Starknet 仍处于开发阶段，我们希望逐步引入功能，并确保每一步都满足开发人员的期望。 我们要强调的两个特别重要的方面是：

* 许可的智能合约部署：我们将遵循 Optimistic Rollup 同事介绍的明智剧本：从许可的合约部署开始。 指定如何请求将您的智能合约纳入此初始白名单的协议将在未来几周内发布。
* 不保证向后兼容性：我们预计未来从 Starknet Alpha 到 Starknet Beta 的过渡将包括状态的再生。 网络将从区块 0 开始，应用程序必须重新部署其合约。 此外，开发人员和用户应注意，预期的 Starknet Beta 可能无法向后兼容 Starknet Alpha，例如开发人员可能需要修改其合约。 显然，我们将尝试让应用程序轻松过渡，所需的更改最少。

#### 其他近期功能

作为 Starknet Alpha 从测试网过渡到主网的一部分，我们将：

1. 将构造函数添加到合约中。
2. 完善测试框架。
3. 对于区块和交易，从使用 ID 转向使用哈希。

我们计划继续定期部署新功能，就像我们在公共测试网上所做的那样。 短期内，我们计划进行以下升级：

1. 账户合约和代币合约——为 DeFi 应用程序以他们熟悉的方式与 Starknet 交互开辟了道路。
2. 改进的合约功能——支持合约升级和事件。
3. Warp：Nethermind 开发的 Solidity-to-Cairo 编译器将允许从 Solidity 智能合约平滑过渡到 Starknet 智能合约。
4. 以太坊签名：通过 secp256k1 对 ECDSA 的本机支持将允许更轻松地与现有钱包集成。
5. Starknet 全节点：全节点将允许用户参与网络，其硬件要求与以太坊全节点相同。

#### 收费机制

Starknet Alpha 中添加账户合约和代币合约后，费用机制将立即开启。

提交给 Starknet 的所有交易都将产生费用，旨在支付 L1 和链下成本。 费用最初将以 ETH 形式收取。 随着 Starknet 规模的扩大（所有现有的基于 STARK 的系统都是如此），单笔交易的成本将会降低。 在制定初始费用机制时，我们更倾向于简单性，而不是根据交易消耗的资源准确定价交易。 预计这一机制将随着时间的推移得到完善和改进。

为了使 Starknet 成为一个可持续发展的网络并激励其运营商和开发商，从费用中收取的部分收入将分配给应用程序开发商和 Starknet 核心开发商。

#### 安全

Starknet Alpha 在主网上的安全模型将遵循测试网上的当前模型：

* 每个状态转换都有 STARK 证明支持，因此确保有效。
* 所有状态数据都将在链上发布，因此状态将完全可以从 L1 构建。
* 将有一个音序器。
* 网络将可以立即升级。

### Starknet 生态系统正在不断发展

Starknet 向全世界开放吸引了大批有兴趣学习 Cairo 并通过 Starknet 进行开发的开发人员。 他们提供了宝贵的反馈，很高兴看到 Starknet [Discord](https://discord.gg/uJ9HZTUk2Y)上充满活力的讨论。

此外，Starknet 不仅由 StarkWare 团队开发，还由区块链生态系统中一些最强大的团队开发：

* Nethermind 正在开发两个项目：\
  \
  1. [Warp](https://github.com/NethermindEth/warp): Solidity 到 Cairo 编译器\
     \
  2. [Voyager](https://voyager.online/)：Starknet 区块浏览器
* Open Zeppelin 正在为 Starknet 开发 [标准合约](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) 实现，并且还开始开发开发人员环境： [Nile](https://github.com/martriay/nile)。
* ShardLabs 正在开发 [Starknet HardHat 插件](https://github.com/Shard-Labs/starknet-hardhat-plugin) 和更好的测试框架。
* Erigon 团队正在致力于扩展其以太坊全节点以支持 Starknet（代号：Fermion）。 他们正在与我们合作设计 Starknet 的核心机制。
* Equilibrium 正在致力于 Rust 中的 Starknet 全节点实现，
* 开罗审计服务：未来几个月，ABDK、ConsenSys Diligence、Peckshield 和 Trail of Bits 将进行开罗审计。
* Starknet 审计：我们从审计网络的基础开始：

1. CryptoExperts 将对 Cairo Solidity Verifier 进行审核。
2. Cairo 规范的正式精益证明最近已完成并作为 [论文](https://arxiv.org/abs/2109.14534) 和 GitHub [存储库](https://github.com/starkware-libs/formal-proofs)发布。

预计未来几个月会有更多有趣的合作发布！

### STARK 如今正在扩展

我们满怀信心地迎接 Starknet Alpha 的推出，因为我们的独立扩展 SaaS StarkEx 已经展示了 STARK 如何大规模扩展以太坊应用程序。 我们为 [dYdX](https://dydx.exchange/) （永续合约）、 [DeversiFi](https://www.deversifi.com/) （现货交易和支付）以及 [Immutable](https://www.immutable.com/) 和 [Sorare](https://sorare.com/) （NFT 铸造和交易）推出了 StarkEx。 我们看到他们的 Gas/tx 成本降低了 100-200 倍，在 Validium（链下数据）中降至约 650 Gas/tx，而 ZK-Rollup 则降至 1100 Gas/tx。

迄今为止，StarkEx 已结算了 800 亿美元的交易和超过 2700 万笔交易，远远超过任何其他 L2 解决方案 - 以及所有这些交易的总和。

### 现在就采取行动

现在是加入不断发展的 Starknet 生态系统、构建下一个 dApp 或有用的开发人员工具的最佳时机。

我们邀请您：

1. 加入 [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)，您可以在这里结识并参与 Starknet 社区。
2. [开始学习](https://www.cairo-lang.org/docs/hello_starknet/index.html) 如何编写 Starknet 智能合约。
3. [DM 我们](https://twitter.com/StarkWareLtd) — 我们的团队渴望帮助您的想法和计划变为现实。

更新（2021 年 11 月）：Starknet Alpha 在以太坊主网上上线