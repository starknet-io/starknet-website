## TL;DR

* Starknet alpha v0.11.0 已发布并在测试网上上线
* 您现在可以在 Starknet 测试网上部署 Cairo 1.0 合约并与之交互！
* Starknet 上的计算便宜 5 倍！
* Starknet alpha v0.11.0 的主网升级将首次进行治理投票
* 这标志着[重生](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)之前过渡期的开始
* 一旦我们确保新系统顺利运行，在测试网上运行几周后，才会在主网上部署 Cairo 1.0 合约。

## 导 言

我们很高兴地宣布，期待已久的 Starknet alpha v0.11.0 已在测试网上上线！ 为什么这对 Starknet 来说是一大进步？ 在 Starknet v0.11.0 中，您可以声明、部署和运行[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)智能合约。 我们还引入了一个新的系统调用，可以将现有合约平稳过渡到 Cairo 1.0 实现。

Cairo 1.0 在两个不同方面改进了 Starknet。 首先，它通过提供更丰富的编程语言来改善开发体验，该语言向 Cairo 引入了（除其他外）类型/泛型/特征/错误处理。 其次，Cairo 1.0 在 Starknet 的去中心化之旅中发挥着关键作用：Starknet alpha v0.11.0 中发送的 Cairo 1.0 合约编译到 Sierra。 Sierra 保证每个合约的执行都是可证明的，这是去中心化 Starknet 的一个重要属性。

此版本中的另一个重要改进是计算成本降低了 5 倍。 这将使 Starknet 对计算密集型应用程序更加友好。 更多详细信息如下。

## 为重生做好准备

Starknet alpha v0.11.0 标志着过渡期的开始，这将允许在 Starknet 的重生之前做好准备。 Starknet的Regenesis计划是几个月前发布的[](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)，重点是从基于Cairo 0的系统过渡到基于Cairo 1.0的系统。

在过渡期间，现有的 Cairo 0 合约（如果可升级）有机会维护其地址和存储，并将其实施无缝过渡到 Cairo 1.0（请参阅下一节）。

作为 Starknet 用户，这意味着您只需要在您的帐户的新 Cairo 1.0 实现发布后升级您的钱包（您可以在 Regenesis 之前随时进行升级）。 预计不会出现停机，系统中的所有 dapp 将继续照常运行。

再生之后，Starknet 将停止支持整个系统中剩余的 Cairo 0 合约。 这将提前进行充分沟通，并且开发人员将有足够的时间来迁移他们的合约。 过渡期预计将持续几个月，dapp 开发人员已经可以开始将其实施迁移到 Cairo 1.0。 在过渡期结束时，重生将会发生。

## 平滑迁移至开罗1.0

随着过渡到 Cairo 1.0，现有的 Cairo 0 合约已被弃用，并且在 Regenesis 上将不再受支持。 为了允许可升级的 Cairo 0 合约即使在再生之后也能继续运行，并保持构建的状态直到那时，我们添加了一个新的系统调用 - ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall)。 可升级合约升级到 Cairo 1.0 实现没有问题，但底层代理（保存实际状态的合约）仍然会停留在 Cairo 0 实现上。 “replace_class”系统调用通过允许代理合约替换其底层类来解决这个问题，即保留相同的地址和存储，但替换实现。

## 计算成本现在便宜 5 倍！

如今，Starknet 交易费用有两个主要组成部分：计算和链上数据。 Starknet 交易费用的计算元素由在 L1 上验证其证明的边际成本决定（有关更多详细信息，请参阅[文档](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)）。

最初，我们的 200m Cairo 步骤需要 5m Gas 进行验证，导致我们天真地估计每个 Cairo 步骤需要 0.05 Gas。 从那时起，我们已经转向[递归证明](https://medium.com/starkware/recursive-starks-78f8dd401025)，这可以显着降低 L1 验证成本（只有递归树的根达到 L1）。 现在是时候相应地更新我们最初的估计了——L2 上每个开罗步骤的价格将降低 5 倍，现在将花费 0.01 天然气。

这种成本降低对于计算密集型应用程序（例如具有非本机签名的账户合约）而言意义重大。 简单交易的成本会小幅降低（约 5%）。 在未来的版本中，我们将处理第二个组成部分：链上数据成本。 一旦 Starknet（又名 Volition）引入链上数据的替代方案，成本就会全面降低。

## Starknet 治理第一次投票

Starknet 治理的第一阶段已经启动（更多详细信息[这里](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)）。 社区成员现在可以通过另一个渠道参与塑造 Starknet，即对协议变更进行投票。

Starknet 治理第一阶段将重点关注 Starknet 协议升级。 每个Starknet版本升级都会首先部署在测试网上；投票者将有 6 天的时间来检查和测试在 Goerli 上运行的升级版本。 在此期间，将开放快照提案，社区可以投票决定是否批准新版本部署主网。

如果该提案在 6 天的投票期内获得多数“是”票，则该提案通过，Starknet 主网将进行相应升级。

Starknet alpha v0.11.0 是第一个需要投票的 Starknet 版本。 Starknet alpha v0.11.0 投票将从测试网部署开始开放六天。

相关链接：

* [快照空间](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [委托发现页面](https://delegate.starknet.io/)
* Starknet alpha v0.11.0[社区论坛](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)上的讨论主题

## 开罗 1.0 和塞拉

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**) 是编译为开罗汇编 (CASM) 的中间表示形式。 在 Starknet alpha v0.11.0 之前，开发人员会将 Cairo 0 编译成 CASM 并将结果发送到 Starknet 定序器。 使用 Cairo 1.0，开发人员将代码编译到 Sierra，并将此中间表示发送到定序器。 然后定序器会将其编译为 CASM。 Sierra 保证编译为“安全 CASM”，即不会失败的 CASM 子集，使得每次执行都可证明。 这保证了排序器即使对于恢复的交易也能够收取费用，从而免受 DOS 的影响。 有关更多信息，请参阅[文档](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)。

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 将使用[Cairo 1.0-alpha.6 版本](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6)。 该版本接近[功能奇偶校验](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)与 Cairo 0，所有 Starknet 系统调用都已存在。

请注意，Starknet 定序器使用固定的编译器版本，这意味着语言改进可能不会立即在 Starknet 中可用，只有在 Starknet 版本更新后才可用。 具体来说，虽然影响 Cairo 1.0 → Sierra 编译的改进可能会立即生效，但对 Sierra → CASM 编译器的更改（更多详细信息请参阅[文档](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)）将需要等待 Starknet 升级。

## 还有什么是新的？

### 新交易类型 — Declare v2

我们添加[一个新的事务类型](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)来声明 Cairo 1.0 类。

这个新的“declare”交易版本与现有的“declare”类似，有两个重要的区别：

* 现在发送的类对象代表 Sierra 而不是 CASM，即类的语义由 Sierra 表示定义。
* 用户还对编译后的类哈希进行签名。 在 Sierra→CASM 编译被证明是 Starknet 操作系统的一部分之前，这是至关重要的一步。

有关更多详细信息，请参阅[文档](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect)。

从开发者的角度来看，体验保持不变。 编写 Cairo 1.0 代码后，您可以使用 CLI 来声明该类。

**请注意，最初 Starknet 主网上不会接受“声明 v2”交易。 经过一段时间在测试网上的试验后，新的交易类型将在主网上启用，并且开罗 1.0 课程将可用。**

### 波塞冬来了

[Poseidon](https://www.poseidon-hash.info/)是一系列哈希函数，旨在实现非常高效的代数电路。 因此，它们在 STARK 和 SNARK 等 ZK 证明系统中可能非常有用。 从 Starknet alpha v0.11.0 开始，开发人员将能够使用 Poseidon。 此外，属于 Starknet 协议一部分的一些哈希计算将转换为 Poseidon（具体来说，类哈希、编译类哈希和部分状态承诺将使用 Poseidon，请参阅[文档](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)了解更多详细信息）。 未来，更多内部组件将过渡到使用 Poseidon 哈希函数。

Starknet 中使用的确切版本和参数可以在这里找到[](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash)。

### 杂项变更

与之前的 Starknet 版本一样，升级也会对我们的 API 和其他低级组件产生影响。 下面我们列出了这些内容并解决了所做的具体更改：

* 不再支持 v0 调用/声明事务
* L1→L2 消息现在需要[费用](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees)。 也就是说，零费用发送的消息不会被 Starknet 排序器处理
* 链上数据格式[改](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API 更改](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)（此处未列出所有更改，请参阅文档以获取详尽列表）：
* 添加了新的“get_compiled_class_by_class_hash”端点
* \`get_class_by_hash\` 返回 Cairo 0 / Cairo 1.0 类（取决于请求的哈希值）
* \`get_state_update\` 有一个用于替换类的新部分，并且声明分为 Cairo 0 和 Cairo 1 类。
* \`estimate_fee\` 和 \`simulate_tx\` 现在可以跳过验证
* [新增](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC 版本

## 接下来会发生什么？

现在所有与开罗 1.0 相关的基础设施都已经到位，您可以期待：

* Cairo 1.0 的进一步语言改进
* 性能改进：[正如所承诺的](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)，我们不断朝着显着提高 TPS 的方向前进。 路线图的下一步是过渡到[Rust 序列器](https://github.com/starkware-libs/blockifier)，它是在 Apache 2.0 许可证下开放开发的。 新的排序器将利用[rust CairoVM](https://github.com/lambdaclass/cairo-rs)和[Papyrus](https://github.com/starkware-libs/papyrus)全节点，形成性能三重奏。
* 链下[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)！ 在此版本中，我们处理了交易成本的计算部分。 在即将推出的版本中，我们将处理链上数据成本，这是当今平均交易的主要成本。

![](/assets/starknet-alpha-v0.11.0-diagram.png)