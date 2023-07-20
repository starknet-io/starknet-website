### TL;DR

* Cairo 1.0 第一个版本来了！
* 开发者可以开始编写和测试 Cairo 1.0 程序
* 未来几周内将达到与旧版 Cairo 相同的功能
* 即将推出的 StarkNet Alpha 版本将添加对 StarkNet 合约的支持

### 背景

我们很高兴地宣布 Cairo 1.0 的第一个公共版本现已推出。 这标志着 Cairo 发展的一个重要里程碑，Cairo 于 2020 年首次推出，作为图灵完备的编程语言，用于高效编写 STARK 可证明的程序。 Cairo 1.0 是一种类似 Rust 的高级语言。 与 Rust 一样，它旨在让开发人员轻松编写高效且安全的代码。

自成立以来，Cairo 一直用于构建第 2 层应用程序，这些应用程序已处理[](https://dashboard.starkware.co/starkex)价值超过 7900 亿美元的交易，处理超过 3 亿笔交易并铸造了超过 9000 万个 NFT，所有这些都在链下执行并在以太坊上结算由 STARK 证明保证数学完整性。 Cairo 成为区块链[生态系统](https://defillama.com/languages)中第四大最常用的编程语言。 随着 Cairo 1.0 的发布，我们的目标是使该语言更加易于访问和用户友好，同时引入增强安全性和便利性的新功能。

Cairo 1.0 最重要的变化之一是语法。 我们从**Rust**中汲取灵感，创建了一种对开发人员更加友好、更易于阅读和编写的语言。 新版本的 Cairo 允许编写更安全的代码（强类型、所有权和借用等），同时也更具表现力。

Cairo 1.0 还引入了 Sierra，这是一种新的中间表示形式，可确保每</strong>Cairo 运行都可以得到**证明。 这使得 Cairo 1.0 特别适合在 StarkNet 这样的无许可网络中使用，它可以提供强大的 DoS 保护和审查抵抗能力。 您可以在我们的[前](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)文章中了解有关 Sierra 的更多信息。</p>

## 第一尝！

### 今天你能做什么？

开发人员可以开始编写、编译和测试 Cairo 1.0 程序！ 我们鼓励开发人员开始尝试 Cairo 1.0 并习惯新的语法和功能。

由于 Cairo 1.0 仍在积极开发中，并且不断添加新功能，请查看[Cairo 存储库](https://github.com/starkware-libs/cairo/)以获取最新更新。

### 下一步是什么？

目前，Cairo 1.0 仍然缺少旧版本 Cairo 支持的一些功能（[详细信息请参阅此表](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)）。 我们的下一个里程碑预计将在接下来的几周内实现，它将提供与旧版本相同的 Cairo 1.0 功能。 您可以在此处</a>跟踪该里程碑

进度。</p> 



### 星网支持

支持在 Cairo 1.0 中编写 StarkNet 合约（尽管仍然缺少某些功能）。 不过，StarkNet 尚不支持 Cairo 1.0 合约的部署和执行。 StarkNet Alpha V0.11.0 计划在未来几周内推出，将引入部署和运行 Cairo 1.0 合约的功能。 升级到 v0.11.0 将标志着向仅运行 Cairo 1.0 合约的系统过渡期的开始。 该过渡期预计将在几个月后以[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)结束。

![](/assets/0_odxbxeacqdwizlfw.jpg)



### 让我们来建造吧！

StarkNet 的目标是利用 STARK 的数学完整性以指数方式扩展以太坊，而 Cairo 的目标是让开发人员能够实现这种指数级扩展。 可访问性意味着一种高效、易于读写且使用安全的编程语言。 我们希望 Cairo 1.0 的发布能够激励更多开发者加入 StarkNet 并扩展以太坊以满足全球需求。