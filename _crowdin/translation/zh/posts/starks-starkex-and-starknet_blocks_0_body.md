### TL;DR

* STARK 通过有效证明计算的完整性来实现区块链扩展
* StarkEx 是一个特定于应用程序的扩展引擎
* Starknet 是一个无需许可的智能合约第 2 层网络

### 斯塔克斯

STARK（可扩展、透明的知识论证）是一种证明系统，可以证明和验证计算。 它允许处理大量计算，生成计算正确性的证明，然后通过很少的步骤验证该证明。

STARK 可以在区块链可扩展性方面发挥关键作用，因为它允许在链外进行大型计算，这样成本更低，而只需要在链上完成需要一小部分计算的验证。 换句话说，通过在链上执行很少的步骤，验证者可以断言链下完成的更大规模计算的完整性。

使用 STARK，第 2 层解决方案可以批量处理并计算数千个交易，然后使用单个 STARK 证明在链上验证其有效性。 链上流程的成本在批次中的所有交易之间分摊。 这会带来以太坊的安全性和每笔交易的较低 Gas 成本。

低计算成本将带来一类新的应用程序，而这些应用程序以前在链上是不可行的。 这些特性使 STARK 成为改善用户体验和降低 Gas 成本的绝佳构建模块，同时保持以太坊结算层的安全性。

StarkWare 提供了两种使用 STARK 扩展以太坊的解决方案：StarkEx 和 Starknet。

### 斯塔克公司

[StarkEx](https://starkware.co/starkex/) 是一个用于创建许可的、特定于应用程序的扩展解决方案的框架。 StarkEx 是一个包含有用的 [应用程序流程](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows) 的工具箱，项目可以使用它来实现廉价的链下计算。 证明执行正确性的 STARK 证明是在链外生成的。 此类证明最多可包含 12,000–500,000 笔交易（取决于交易类型）。 然后，该证明被发送到 STARK 验证者以在链上被接受。 这意味着对所有交易进行一次验证——每笔交易的摊销天然气成本极低。

StarkEx 上部署的应用程序的一些示例包括 dYdX（永续合约交易）、Immutable 和 Sorare（NFT — 铸造和交易）、DeversiFi（现货交易）和 Celer（DeFi 池）。

StarkWare 不断向 StarkEx 添加更多应用程序流程，以满足市场和客户的需求。

### 星网

[Starknet](https://starkware.co/starknet/) 是一个无需许可的第 2 层网络，任何用户或开发人员都可以部署用 Cairo 语言开发的智能合约。

与以太坊智能合约体验相比，在 Starknet 生态系统内部，您的合约可以与 Starknet 上部署的任何其他合约进行交互，从而实现丰富的可组合协议。 Starknet 合约还可以通过异步消息传递与以太坊合约进行交互。

与应用程序负责提交交易的 StarkEx 不同，Starknet 排序器对交易进行批处理并将其发送以进行处理和证明。 （Starknet 的测序仪目前由 StarkWare 运营，未来计划进行分散化。） 这意味着一旦应用程序部署了 Cairo 合约，它们就不必担心运行额外的 Operator 基础设施。 Starknet 支持 Rollup 数据可用性模式，这意味着 Rollup 的状态与 STARK 证明一起写入以太坊。

庞大的开发者社区深入参与 Starknet 生态系统，构建应用程序、工具和基础设施。 数十个应用程序已经在测试网上上线——DeFi、游戏、投票、人工智能等等。 此外，Starknet 社区正在构建区块浏览器、本地测试环境和框架、多种语言的 SDK 等开发工具。 此外， [Shamans 平台](https://community.starknet.io/)中也进行了积极的讨论，其中包括改进建议、潜在功能和最佳实践。

### 把它们加起来

[StarkEx](https://youtu.be/P-qoPVoneQA) 和 Starknet 都是基于 STARK 的扩展解决方案。 两者都提供可扩展性、低天然气成本和安全性，但具有不同的操作要求和互操作性模式。 StarkEx 可能是应用程序的正确解决方案，该应用程序基本上是独立的并且适合 StarkEx 提供的 API。 Starknet 可能更适合需要与其他协议同步交互或具有超出 StarkEx 提供范围的需求的协议。

STARK 彻底改变了在以太坊上构建应用程序的方式。 StarkEx 和 Starknet 将继续启用以前不可行的应用程序，并突破区块链的可能性极限。

本文由 [Tim Gestson](https://twitter.com/IcemanTim) 和 [StarkWare](https://starkware.co/) 团队合作撰写