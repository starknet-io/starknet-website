### TL;DR

* Starknet 现在支持可组合性，这是定义 Starknet 星座阶段的主要功能。
* 我们正在发布 Starknet 的测试框架——开发人员现在可以在本地有效地测试他们的合约。
* 此版本包括多项显着的性能改进，例如对 Merkle-Patricia Tries 的支持和内置的按位运算。
* 生态系统前沿：

1. 标准化合约：OpenZeppelin 将为 Starknet 开发标准化合约，就像他们为以太坊所做的那样！
2. EVM->Cairo 编译器：Warp 团队 @ Nethermind 演示了将 ERC-20 Solidity 代码编译到 Starknet 合约

### 背景

Starknet 是一个无需许可的去中心化 Validity-Rollup（又名“ZK-Rollup”）。 我们在年初公布了它的 [路线图](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)。 目前在公共以太坊测试网上运行的 [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)已经支持实现任何业务逻辑的智能合约的无许可部署，具有 L1<>L2 消息传递和链上数据。 此外，它允许任何用户无需许可地将交易发送到网络，就像以太坊风格一样。

此版本：Starknet Alpha 2，包含使我们能够从行星推进到星座的核心功能：已部署的智能合约之间的可组合性。

### 特征

Starknet Alpha 2 引入了以下功能：

* 可组合性：Starknet Alpha 现在支持智能合约之间的交互——提前了！ 这次升级的美妙之处在于，开发者可以期待与以太坊几乎相同的体验；调用是同步的，可以用作函数调用。 我们热切地等待 Starknet 释放的新应用程序将受益于无限的计算规模和合约可组合性。 要了解如何使用此功能，您可以从这个 [教程](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html)开始。 我们很乐意听到您的反馈并了解您在 [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)上构建的内容。
* 本地测试框架：您提出要求，我们提供了 - [更好的测试框架](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing)。 这将使开发人员能够通过在本地测试 Starknet 合约部署和交互来加快 dApp 开发，而无需任何外部依赖。 此版本仅包含 L2 交互，下一版本将扩展功能和易用性。 请在此处查看教程 [](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)，我们很乐意听到您对该功能的反馈。
* 性能改进：

Patricia Trees：我们改进了 Starknet 的设计，通过转向 Merkle-Patricia Tree 状态承诺来支持更高的吞吐量和更短的证明生成时间（[文档](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)）。 这一变化允许创建更大的区块，从而降低每笔交易的成本。 向更复杂的国家承诺的转变是由 Cairo 实现的，ZKP 语言是 Starknet 操作系统的核心组件。

按位运算：我们添加了 [内置](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html) 以支持 Starknet 合约中更高效的按位运算（[文档](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)）。

* Goerli：Starknet 正在从 Ropsten 迁移到 [Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)！ 最后，我们将我们的系统从 Ropsten Gods 的突发奇想中解放出来。 Alpha 2 现在将在更稳定的开发环境上运行。

### 生态

Starknet 生态系统正在不断发展，我们很高兴分享最新消息：

* 标准化合约：我们很荣幸能够与 OpenZeppelin 合作开发 Starknet 的标准合约库。 他们在以太坊标准化合约方面的规范工作每天为我们所有人服务，我们相信他们将在这里发挥同样的影响力。
* EVM->Cairo 编译器：Nethermind 的 Warp 团队 [演示了将 ERC-20 合约从 EVM 字节](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0) 转译为 Starknet 合约并在 Starknet 上部署。 这项工作进展迅速，我们的下一个目标是将任意智能合约从 Yul 转译到开罗。
* Maker-on-Starknet：向 Maker DAO 提交了 [提案](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745) ，以在 Starknet 上实施 Maker 协议。 第一阶段提出从以太坊到 Starknet 的 DAI 桥梁，随后在 Starknet 上铸造 DAI。
* Starknet/Cairo 审计服务：我们正在聘请多家审计公司来提供 Starknet 智能合约和 Cairo 程序审计服务。

### 主网即将到来

我们正在为 Starknet Alpha 主网的发布做好准备，从一组白名单应用程序开始逐步启动。 多个项目正在进行中，并且每天都会积极添加更多项目。 要加入聚会，请通过 [Discord](https://discord.gg/uJ9HZTUk2Y)联系。

更新（2021 年 11 月）：Starknet Alpha 在以太坊主网上上线