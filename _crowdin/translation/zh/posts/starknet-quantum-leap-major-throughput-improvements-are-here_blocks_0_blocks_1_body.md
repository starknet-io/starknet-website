## TL;DR

* Starknet alpha V0.12.0 已部署在测试网上
* Starknet 通过在 Rust 中实现 Sequencer，吞吐量显着提高了 10 倍。 这是由 StarkWare 和 LambdaClass 之间的密切合作推动的
* 由于交易的“PENDING”状态已被删除，因此将提供更流畅的用户体验
* 引入了新的系统调用，可以轻松检索过去的块哈希值
* Starknet alpha V0.12.0 将支持注重安全性的新 Cairo 语法
* 该版本的网络升级将经过社区投票，确保广泛的参与和投入

## 导 言

我们很高兴地宣布 Starknet Alpha V0.12.0 发布。 该版本是一个重要的里程碑，将标志着在提供增强的性能和可扩展性方面实现重大飞跃的开始。 该版本是 Starknet 扩展以太坊之旅的又一步，重点是解决吞吐量和延迟问题。 为了应对这些挑战，我们以 Starknet 的 Sequencer 为目标，因为吞吐量的大部分限制是由其性能决定的。\
Starknet Alpha V0.12.0 的开发很大程度上是 [LambdaClass](https://lambdaclass.com/) 和 StarkWare 之间长达一年的富有成效且愉快的合作的结果。 我们很自豪能够与 LambdaClass 团队一起构建 Starknet。

该版本是主要版本，将进行社区投票。 我们邀请社区参与塑造 Starknet 的未来。

## 性能 - 吞吐量就在这里！

该版本专注于性能，特别是吞吐量的提高，从而显着提高了 10 倍。 吞吐量从 v0.11.0 上的平均每秒 30K Cairo 步 (CSPS) 飙升至最新版本中令人印象深刻的 220K CSPS。 这一非凡的成就源自有针对性的优化，这些优化支撑了 Starknet 测序仪的效率，正如我们之前在 [性能路线图](https://www.starknet.io/en/posts/engineering/starknet-performance-roadmap)中分享的那样。 Starknet 性能提升的三个关键要素：Cairo-rs、Blockifier 和 Papyrus，它们都受益于 Rust 的强大功能。

Sequencer 的第一个改进是集成 **[Cairo-rs](https://github.com/lambdaclass/cairo-vm)**，这是一个用 Rust 编写的高效 Cairo 运行器，由 **LambdaClass**开发。 通过利用 Rust 的强大功能，Cairo-rs 增强了 Cairo 合约的执行，为用户带来了更加简化的体验。

此外，基于 Rust 的块执行逻辑 **[Blockifier](https://github.com/starkware-libs/blockifier)**的引入，在提高吞吐量方面发挥了至关重要的作用。 通过优化事务执行时间，该实现有效减少了等待时间并缓解了网络拥塞。本地存储解决方案 **[Papyrus](https://github.com/starkware-libs/papyrus)**的加入有助于对 Sequencer 本地状态进行高效管理。 这一增强进一步优化了系统的整体性能和响应能力。

### 这只是第一步

此版本中的 Sequencer 优化还远未达到性能改进之路的终点。

#### 开罗本地人

Starknet 将集成 LambdaClass 的 [cairo_native 编译器](https://github.com/lambdaclass/cairo_sierra2mlir)，这将使 Cairo 合约以更高效的方式执行。 通过允许合约在 Rust 等“本机代码”中运行，而不是在 Cairo 环境中执行，我们预计 Starknet 会获得更高的效率和性能提升。

#### 并行化

Starknet 之前的 Pythonic Sequencer 引入了事务</a>的

并行化，这显着提高了其性能。 然而，值得注意的是，V0.12.0 版本中包含的 Rust 中的 Sequencer 初始实现尚不包括并行化。 本着 [block-STM](https://malkhi.com/posts/2022/04/block-stm/)的精神，正在进行的开发工作重点是在块内并行执行事务。 借鉴 Pythonic 实现的成功演示，这种优化将进一步提高 Starknet 的吞吐量，使其能够有效处理增加的交易量。</p> 



## 不再有待处理的交易

在以前的版本中，“PENDING”状态表示已由 Sequencer 执行但尚未满的有效块，表示仍可以添加其他交易。 然而，在这个最新版本中，“PENDING”状态已替换为 ACCEPTED_ON_L2，反映了交易的最终状态。 这一变化简化了交易确认流程，为用户提供了更流畅的体验。 



## get_block_hash 系统调用

Starknet Alpha V0.12.0 中的另一个新增功能是引入了“get_block_hash”系统调用。 这个新的系统调用允许开发人员检索“[first_v0_12_0_block, current_block-10]”范围内特定 Starknet 区块的哈希值。 这个 [系统调用](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/system-calls-cairo1/) 的签名是“fn get_block_hash(u64 block_number) -> Feel252”。

与此场景相关的错误消息是：“块编号超出范围”。

为了实现此更改，操作系统将在每个块的开头写入一个映射，该映射位于“address = 0x1”下，其中“current_block - 10”为键，其相应的哈希为值。

通过 get_block_hash 系统调用，开发人员可以方便地检索块哈希，这是构建和验证 [存储证明](https://www.starknet.io/en/posts/developers/what-are-storage-proofs-and-how-can-they-improve-oracles)的重要组成部分。 这些证明可以实现高效的跨链数据访问，并增强区块链数据的可信度，甚至无需依赖第三方预言机。 通过此系统调用获取块哈希，开发人员可以准确引用 [块头](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/header/#block_header)中提交的特定块的状态、交易或任何其他信息



## 开罗 - 改进的合约语法

在此版本中，我们对智能合约语法进行了重大改进。 新语法注重安全性并为可扩展性奠定基础。 在这种情况下，安全意味着对合约的面向外部的组件（接口/存储/事件）更加明确，这使开发人员可以更好地了解与合约交互时会发生什么。 可扩展性将在后续版本中最终确定，允许合约使用外部库中的组件。 这是任何智能合约语言的一个关键特性，并将解决 Starknet 开发社区中的一个重大问题。 要详细了解动机和变化，请参阅 [开罗路线图博客文章](https://www.starknet.io/en/posts/ecosystem/cairo-roadmap-join-the-ride) 和 [社区论坛文章](https://community.starknet.io/t/cairo-1-contract-syntax-is-evolving/94794)。

虽然 [新编译器版本](https://github.com/starkware-libs/cairo/releases/tag/v2.0.0-rc0) 包含重大更改，但 **您可以继续使用旧编译器版本 (v1.1.0) 并在接下来的六个月内将生成的合约部署在 Starknet 上**。 这体现了我们新的编译器升级协议的重大变化：在新的编译器版本之后，旧编译器版本编译的合约将继续被接受至少六个月，以便社区进行调整。 当然，一旦在 Starknet 上声明了 Cairo 合约（不是 Cairo 0），它将无限期地可供部署和交互。



## 下一步是什么？



### 短期目标：版本 0.12.1

短期来看，Starknet 的重点是增强用户体验和交易可靠性。 下一个版本 0.12.1 将引入另一个重大改进：在区块中包含失败的交易。 到目前为止，失败的交易并未包含在区块中，因此排序器无法收取费用并为它们提前提供随机数。 这给开发人员带来了用户体验问题。 他们不能依赖随机数的推进，这迫使他们在发送新交易之前不断监控交易状态。 此更改还可以保护排序器免受用户向系统发送垃圾邮件而无需支付失败的交易的影响。 本次更新旨在为用户在与 Starknet 交互时提供更流畅、更无缝的体验。



### 长期愿景：吞吐量、延迟和成本

[展望未来](https://www.starknet.io/en/roadmap)Starknet 的总体愿景是在规模和成本方面实现大幅可扩展性。 议程上的下一个优先事项是大幅降低交易成本。

通过降低成本，Starknet 的目标是使交易变得更加经济实惠和更具包容性，从而实现更广泛的用例并为开发人员和用户提供支持。 对降低成本的承诺与 Starknet 的使命相一致，即为去中心化应用程序提供可扩展、灵活且经济高效的基础设施。



## Starknet Alpha V0.12.0 投票

[Starknet 治理第 1 阶段](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40) 重点关注主要 Starknet 协议升级。\
每个主要的 Starknet 版本升级都会首先部署在测试网上，为 Starknet 社区提供几天的时间来检查和测试升级版本。 在此审查期间，将开放快照提案，让社区投票决定是否批准升级版本用于主网部署。

如果该提案在投票期间获得多数“是”票，则该提案获得通过，Starknet 主网将进行相应升级。

Starknet Alpha V0.12.0 投票即将到来！\
邀请所有人注册 Starknet [快照空间的通知服务。](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef) 查看 [代表简介主题](https://community.starknet.io/t/delegate-profile-thread/4049) & [委托发现](https://delegate.starknet.io/)成为代表或选择一名代表，并在社区论坛上讨论 [Starknet alpha v0.12.0 提案](https://community.starknet.io/t/proposal-starknet-alpha-v0-12-0/95997)。



## 概括

Starknet Alpha V0.12.0 专注于增强性能和用户体验。 新版本引入了基于 Rust 的 Sequencer 实现，将吞吐量提高了 10 倍并减少了事务延迟。 其他功能包括新的编译器版本、删除待处理事务状态以及添加块哈希系统调用。 

Starknet 开发人员有权编写具有影响力的解决方案。 开始您的 Cairo [开发之旅](https://twitter.com/Starknet/status/1674689343758168065?s=20)、阅读 [Cairo 文档](https://www.cairo-lang.org/docs/)、注册 [Cairo Basecamp](https://docs.google.com/forms/d/e/1FAIpQLSf2k9vjPpeymbUpJMRDuN3QqNcHtjWx8whX2wY4EbihF1EaPg/viewform)或完成教程 [](https://www.starknet.io/en/tutorials)。 想要了解所有版本更新吗？ 订阅我们的 [Starknet 开发者通讯](https://starknet.substack.com/)。