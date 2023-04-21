### TL;DR

* *StarkNet Alpha 正在11月之前在Mainnet Etherum上启动*
* 现在是在StarkNet上建造的时间

### 简要历史

我们在年初宣布了我们对[StarkNet](https://starkware.co/product/starknet/)的愿景：在维护L1安全的同时，将大规模的可伸缩性带给以太坊。 无权限的互动和权力下放。\
我们在6月份在公共测试网上发布了**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)** 这个版本支持完全无权限的一般计算智能合同。 我们已经将其升级了两次：第一次升级到**Alpha 1**— 提供[L1<>L2 短信和链上数据](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)， 然后到**Alpha 2**— 支持[composability](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc)

StarkNet Alpha 2 现在支持类似于以太空的状态进行一般计算的可混成智能合同。 L1和L2合同能够相互作用。 Read more [here](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Mainnet上的StarkNet Alpha是什么？

StarkNet Alpha on Mainnet将支持类似于Goerli公共测试网上现有功能的功能。

#### **期望什么**

由于StarkNet仍在开发之中，我们希望逐步引进能力，并确保每一步都能满足开发者的期望。 我们要强调的两个特别重要的方面：

* **允许的智能合同部署**: 我们将遵循我们最优秀的滚动同事介绍的明智的播放簿：从*权限开始*合同部署。 指定如何在这个初始白名单中包含您智能合同的协议将在今后几周内发布。
* **无法保证后向兼容性**: 我们期望将来从StarkNet Alpha 到StarkNet Beta 的过渡将包括州的regenesis 。 该网络将从区块0开始，应用程序将不得不重新部署其合同。 此外，开发者和用户应该注意到，预计StarkNet Beta可能不会落后于StarkNet Alpha，e。 . 开发人员可能需要修改其合同。 显然，我们将设法使申请的过渡变得容易，所需的修改也很少。

#### 额外的近期功能

作为StarkNet Alpha从测试网向Mainnet过渡的一部分，我们将：

1. 在合同中添加构造器。
2. 改进测试框架。
3. 对于方块和交易，请从使用ID到使用哈希。

我们计划继续定期部署新的功能，就像我们在公共测试网上所做的那样。 在近期，我们计划进行以下升级：

1. 帐户合同和令牌合同 — 为Defi 应用程序与StarkNet交互他们熟悉的方式打开了道路。
2. 改善合同功能——支持合同升级和事件。
3. 战争：荷兰开发的开罗团结汇编器将使团结智能合同顺利过渡到StarkNet智能合同。
4. 太基签名：本机在256k1节上支持ECDS，这样可以更容易地与现有钱包合并。
5. StarkNet 全节点：完整节点将使用户能够以符合Ethereum 全节点要求的硬件要求参与网络。

#### 收费机制

一旦账户合同和代币合同被添加到StarkNet Alpha，费用机制将立即投入使用。

提交StarkNet的所有交易将产生一笔费用，以支付L1和非链上的费用。 这笔费用最初将以ETH收取。 随着StarkNet扩大其规模(如所有现有的STARK系统的情况)，单项交易的成本将会下降。 在制定初始收费机制时，我们倾向于简单化，而不是根据交易所消耗的资源准确定价。 期望这一机制随着时间的推移得到改进和改进。

着眼于使StarkNet成为一个可持续的网络，并激励其经营者和开发者， 从收费中收取的部分收入将分配给应用程序开发商和StarkNet核心开发商。

#### 安全

StarkNet Alpha在Mainnet上的安全模型将沿用当前测试网模型：

* 每个国家的过渡都有一份STARK证明，因此确保有效。
* 所有状态数据将在链上发布，因此状态将从L1完全可以构造。
* 将有一个单一的序列器。
* 网络可以随时更新。

### StarkNet 生态系统正在增长

向世界开放StarkNet吸引了大批有兴趣学习开罗和通过StarkNet开发的开发者。 他们提供了宝贵的反馈，看到关于StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y) 的热烈讨论确实令人高兴。

此外，StarkNet不仅由StarkWare团队开发，而且也由区块链生态系统中一些最强大的团队开发：

* 荷兰正在开展两个项目：

1. **[Warp](https://github.com/NethermindEth/warp)**: 团结到开罗编译器

2. **[Voyager](https://voyager.online/)**: StarkNet 区块浏览器

* Open Zepelin正在为 StarkNet 进行[标准合同](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)实现，并且也开始在开发者的环境中工作：[Nile](https://github.com/martriay/nile)。
* ShardLabs 正在开发一个[StarkNet HardHat 插件](https://github.com/Shard-Labs/starknet-hardhat-plugin)和一个更好的测试框架。
* Erigon队正在努力扩大其以太坊全节点，以支持StarkNet（代号：费尔蒙）。 他们正在与我们合作设计StarkNet的核心机制。
* 平衡正在俄罗斯的StarkNet 全节点实现中。
* 开罗审计事务：今后几个月，ABDK将进行开罗审计。
* StarkNet审计：我们开始审计网络的基础：

1. **CryptoExperts**将对开罗团结验证程序进行审计。
2. 最近完成了开罗观众的正式的**LEA 证明**，并以[paper](https://arxiv.org/abs/2109.14534)和 GitHub[repo](https://github.com/starkware-libs/formal-proofs) 的形式发表。

期待在今后几个月内发布更多有趣的协作！

### STARK正在缩放今天的比例

我们满怀信心地接近启动StarkNet Alpha，就像StarkEx一样，我们单独的缩放SaaS显示了STARK如何能够大规模缩放以太坊应用。 我们为[dYdX](https://dydx.exchange/)(永久合同),[DeversiFi](https://www.deversifi.com/)(现货交易和付款), 启动了StarkEx 。 以及[不可变的](https://www.immutable.com/)和[按顺序排列](https://sorare.com/)(NFT 采矿和交易)。 我们看到它们的气体/吨成本减少了100X-200X, 在Validium(脱链数据)中减少到约650种气体/吨，ZK-Rollup则减少到1,100种气体/吨量。

迄今为止，StarkEx已经结算了交易80B美元和27M美元以上的交易，远远超过了任何其他的L2解决办法，所有这一切都合在一起。

### 立即操作

现在比以往任何时候都更适合通过构建您的下一台应用程序或有用的开发者工具加入正在成长的StarkNet生态系统。

我们邀请您：

1. 加入[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), 你可以在那里与StarkNet 社区会面并进行接触。
2. [开始学习](https://www.cairo-lang.org/docs/hello_starknet/index.html)如何写入 StarkNet 智能合同。
3. [管理我们](https://twitter.com/StarkWareLtd)— — 我们的团队渴望帮助您的想法和倡议得以实现。

**更新 (Nov. 2021):**StarkNet Alpha 在Ethereum Mainnet上