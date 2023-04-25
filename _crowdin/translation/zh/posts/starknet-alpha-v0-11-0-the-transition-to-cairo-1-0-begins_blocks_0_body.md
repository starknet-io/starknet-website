## TL;DR

* Starknet alpha v0.11.0 已经退出并生活在测试网
* 您现在可以在 Starknet 测试网上部署并与Cairo 1.0 合约交互！
* Starknet上的计算比较便宜！
* Mainnet 升级到Starknet alpha v0.11.0 将首次投到治理投票
* 这标志着[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4) 之前的过渡期的开始
* 部署开罗1 在我们确保新系统顺利运行后，Mainnet上的合同将只能在几周内运行。

## 导 言

我们很高兴地宣布，人们期待已久的Starknet alpha v0.11.0已经生活在测试网上！ 为什么这是Starknet的一大步？ 在 Starknet v0.11.0中，您可以声明、部署和运行[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)智能合同。 我们还采用了一种新的系统号召，使现有合同能够顺利过渡到开罗1.0的执行阶段。

开罗1.0在两个不同方面改进Starknet。 首先，它通过提供一种更丰富的编程语言来改善发展经验，这种语言在开罗引入（除其他外）类型/通用/特性/错误处理。 第二，开罗1.0在Starknet的权力下放旅程中发挥了关键作用：开罗1.0合同，发送到Starknet alpha v0.11.0，编入Sierra。 塞拉利昂保证每一项合同的执行都是可以证明的，这是一个分散的Starknet的重要财产。

这个版本中的另一个重要改进是计算费用减少5x。 这将使Starknet更方便于计算机密集应用程序。 更多细节如下。

## 正在为生殖器做好准备

Starknet alpha v0.11.0 标志着过渡期的开始，这将允许Starknet的生殖器之前的准备工作。 Starknet的 Regenesis 计划是几个月前[发布的](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)它的重点是从以开罗0为基础的系统过渡到以开罗1.0为基础的系统。

在过渡期间，现有的开罗0合同(如果可以升级的话)有机会维持其地址和储存。 并将其执行工作无缝地过渡到开罗1。 （见下一节）。

作为Starknet 用户，这意味着你只需要在新的开罗1之后升级你的钱包。 实现您的帐户已发布(您将能够在任何时间之前做到Regenesis本身)。 不需要任何故障时间，系统中的所有dapp都将继续像往常一样运行。

在Regenesis之后，Starknet将停止在全系统支持其余的开罗0合同。 这将事先很好地传达，开发人员将有足够的时间迁移他们的合同。 预计过渡期将持续几个月，开发者已经可以开始将他们的执行迁移到开罗1.0。 在过渡期结束时，将会出现后代。

## 平滑迁移到Cairo 1.0

随着向开罗1.0的过渡，现有的开罗0合同已经废止，在雷杰尼斯将不再得到支持。 允许可升级的Cairo 0合同继续运作，即使是在雷杰西斯之后， 并保持状态的构建直到那个时候，我们添加了一个新的系统调用 — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall)。 可升级的合同对于升级到开罗1没有任何问题。 但是，作为基础的代理人(保持实际状态的合同)仍将因开罗0的执行而停滞不前。 \`replace_class\`sysall通过允许代理合同替换其底层类来解决这个问题。 。保留相同的地址和存储，但替换实现。

## 计算现在是5倍便宜！

今天，Starknet交易费有两个主要组成部分：计算和链上数据。 Starknet 交易费用的计算元素是由L1上核实其证据的边际成本确定的(见[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)关于更多细节)。

最初，我们开罗会议采取了200米的步骤，以证明需要5米气体进行核查，结果导致每开罗会议零5种气体的估计是虚幻的。 自那时起， 我们已经移动到[递归证明](https://medium.com/starkware/recursive-starks-78f8dd401025), 它允许大幅降低L1验证成本(只有递归树的根值达到L1)。 现在应该相应地更新我们最初的估计——关于L2的每个开罗步骤的价格将减少5x， 现在将花费0。 1 天然气。

这种费用降低对于计算密集型应用具有重要意义，如与非本地签名签定的账户合同。 简单的交易成本将略有降低（~5%）。 在未来的版本中，我们将处理第二个组件：链上的数据成本。 一旦Starknet(又名Voli)引进了链上数据的替代品，成本降低就会全面感觉到。

## Starknet施政第一次投票

Starknet治理的第一阶段已经启动(更多详情[在这里](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40))。 社区成员现在能够通过一个额外的渠道参与Starknet的形成，即就协议更改进行投票。

Starknet治理的最初阶段将侧重于Starknet协议的升级。 每一个 Starknet 版本升级将首先部署在 Testnet上； 选民将有6天时间在Goerli运行时检查和测试升级版本。 在此期间将提出快照建议，社区可以就是否批准新版本的主流化部署进行表决。

如果提案在6天的表决期间获得多数“是”投票，提案将通过，而Starknet Mainnet将相应升级。

Starknet alpha v0.11.0 是第一个Starknet 版本，需要投票。 Starknet alpha v0.11.0投票将从测试网部署开始开放六天。

相关联系：

* [快照空间](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [代表团发现页面](https://delegate.starknet.io/)
* [社区论坛上的 Starknet alpha v0.11.0 讨论线程](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## 开罗1.0与塞拉利昂

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**estent**a**a </strong> ) 是一种中间代表，可以编译到开罗大会(CASM)。 Starknet alpha v0.11.0前开发者会将开罗0编译成CASM并将结果发送到Starknet 序列器。 通过开罗1.0，开发人员将他们的代码编译到Sierra，并将此中间代表权发送到序列器。 测序器将编译成CASM。 塞拉利昂保证汇编成“安全的小武器问题协调机制”，即一个不能失败的小武器问题协调机制的子集，使每一项执行都可以得到证明。 这保证了序列器甚至能够对恢复交易收取费用，从而免受DOS的保护。 欲了解更多信息，请参阅[文档](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)。

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 将使用[Cairo 1.0-alpha.6 版本](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6)。 这个版本与开罗0接近[特性相等](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)，所有Starknet系统呼叫已经存在。

注意Starknet 序列器使用固定的编译器版本， 这意味着语言改进可能无法立即在Starknet上提供，只有在Starknet版本更新后才能使用。 具体而言，在影响到开罗1的改善方面。 → 火星编译可能立即生效。 更改 Sierra -> CASM 编译器(详情请参阅[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/))将需要等待Starknet 升级。

## 其他什么是新的？

### 新交易类型 — 申报v2

我们正在添加[个新的交易类型](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)用于声明开罗1.0类。

这个新的 \`declare\` 交易版本类似于现有的 \`declare\`，具有两个重要的区别：

* 现在正在发送的类对象是Sierra 而不是CASM，即类的语义是由Sierra representation定义的。
* 用户还正在签名编译的类哈希。 这是一个关键步骤，直到Sierra——CASM编译将被证明是Starknet OS的一部分。

欲了解更多详情，请参阅[文档](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect)。

从开发者的角度来看，经验保持不变。 在编写您的 Cairo 1.0 代码后，您可以使用 CLI 声明该类。

**请注意，\`声明v2\`交易将不会在Starknet Mainnet上被接受。 在测试网上经过一段时间的试验后，新的交易类型将在Mainnet上启用，开罗1.0类将可用。**

### Poseidon 在这里

[Poseidon](https://www.poseidon-hash.info/)是一种散列函数类，其设计目的是具有非常有效的代数电路。 因此，它们在ZK证明诸如STARK和SNARK等系统中可能非常有用。 从Starknet alpha v0.11.0开始，开发人员将能够使用Poseidon。 此外，作为Starknet协议一部分的一些散列计算将过渡到Poseidon(具体而言，阶级哈希)。 编译的类哈哈哈，州的部分承诺将使用 Poseidon，查看[文档](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)了解更多细节)。 今后，更多的内部组件将过渡到使用 Poseidon 散列函数。

Starknet所使用的确切版本和参数可以在这里找到[](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash)。

### 杂项变化

像以前的 Starknet 版本一样，升级也会对我们的 API 和其他低级组件产生影响。 我们以下列出了这些问题，并讨论了所做的具体修改：

* v0 不再支持援引/声明交易
* L1- L2消息现在需要[费用](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees)。 也就是说，零收费发送的消息将不会被Starknet 序列器处理
* 链上的数据格式是[更改了](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API 更改](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(并非这里列出所有更改，请参阅文档以获取详尽列表) :
* 添加新的 \`get_compiled_class_by_class_hash\` 终点
* \`get_class_by_hash\` 返回 Cairo 0 / Cairo 1.0 类 (取决于请求的哈希)
* \`get_state_update\` 有一个新的章节用于替换类，声明则在开罗0 和 Cairo 1 类之间分割。
* \`estimate_fe\` 和 \`simulate_tx\` 现在可以跳过验证
* [新](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON RPC 版本

## 接下来是什么？

既然所有开罗1.0相关基础设施已经建立，你就可以期待：

* 在开罗进一步改进语言 1.0
* 性能改进：[正如承诺的那样](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)，我们继续朝着显着提高 TPS 的方向前进。 行进图中的下一步是过渡到[Rust 测序器](https://github.com/starkware-libs/blockifier)， 它是在 Apache 2 下的开放式开发的。 许可协议。 新的序列器将使用[rust CairroVM](https://github.com/lambdaclass/cairo-rs)and[Papyrus](https://github.com/starkware-libs/papyrus)完整节点，形成性能三角。
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! 在这个版本中，我们处理了交易成本的计算组件。 在即将到来的版本中，我们将处理链上的数据成本，这是今天平均交易的主要成本。

![](/assets/starknet-alpha-v0.11.0-diagram.png)