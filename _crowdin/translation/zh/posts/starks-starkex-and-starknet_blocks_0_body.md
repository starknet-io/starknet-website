### TL;DR

* STARK通过有效地证明计算的完整性来启用区块链缩放
* StarkEx 是一个针对应用程序的缩放引擎
* StarkNet是一个无权限、智能合同第二层网络

### **STARK**

STARKs(可透明的知识报关)是一种能够对计算进行证明和核实的验证系统。 它允许处理一个大的计算方法，为计算的正确性生成一个证据，然后在几个步骤中验证证据。

STARK允许在链外进行大型计算，从而在区块链的可扩展性中发挥关键作用。 如果核查费用较低，则只进行核查，而核查则需要一小部分计算才能在链上进行。 换言之，通过在链上执行很少的步骤，核查人肯定了一种更大的计算的完整性，这种计算是在链外进行的。

使用STARK，2级解决方案一并计算数千笔交易，然后用单一的STARK证据核实其在链上的有效性。 链上进程的成本是在批处理中的**所有**个交易之间进行分组。 这导致每笔交易以太基姆为单位的安全和气体成本较低。

计算费用低将带来以前在链上不可行的一类新的应用程序。 这些特性使STARK成为改进用户体验和降低气体成本的一个极好的构件。 所有这一切都会保持以太基姆定居点图层的安全。

StarkWare提供了两种用STARK缩放以太坊的解决方法：StarkEx和StarkNet。

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)是一个用于创建允许的、针对具体应用程序的缩放解决方案的框架。 StarkEx 是一个有用的[应用程序流程](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)的工具箱，项目可以用来实现廉价的脱链计算。 证明执行正确性的STARK证据是在链外生成的。 这种证明可以包括多达12,000-500,000笔交易(取决于交易类型)。 然后将证据送交STARK验证器以便在链上被接受。 这意味着对所有交易进行一次核查——每笔交易的分期摊销天然气费用低得令人难以置信。

部署在StarkEx上的应用程序的几个例子是 dYdX (永久交易)， Immutable and Sorare (NFTs - mining and trading), Deversifi (sotal trading), and Celer (Defi Pooling).

StarkWare按照市场及其客户的需要不断向StarkEx添加更多的应用程序流量。

### **星网**

*[StarkNet](https://starkware.co/starknet/)是一个无权限的第二层网络，任何用户或开发者都可以在那里部署以开罗语言开发的智能合同。*

与StarkNet生态系统内的以太坊智能合约体验相比, 您的合同可以与StarkNet上部署的任何其他合同交互，允许有丰富的合成协议。 StarkNet合同也可以通过异步消息传递与以太坊合同交互。

与StarkEx不同，StarkEx应用程序负责提交交易，StarkNet序列器批量交易，并将其发送到处理和验证。 (StarkNet的序列器目前由StarkWare操作，未来计划放权) 这意味着一旦应用程序部署了开罗合同，就不必担心运营商的基础设施会增加。 StarkNet支持Rollup 数据可用模式，表示滚动状态与STARK证明一起被写入以太基姆。

一个庞大的开发者社区深入参与StarkNet生态系统、建筑应用、工具和基础设施。 数十个应用程序已经在测试网上运行——Defi, 游戏, 投票, AI 等等。 更多的是开发者工具，如区块探险者、本地测试环境和框架。 StarkNet社区正在以多种语言构建SDK。 此外，在[Shamans平台](https://community.starknet.io/)中进行了积极的讨论，提出了改进、潜在特点和最佳做法的建议。

### **把它合成上方**

[StarkEx](https://youtu.be/P-qoPVoneQA)和 StarkNet都是基于 STARK 的缩放解决方案。 两者都能提供可伸缩性、低气体成本和安全性，但有不同的操作要求和互操作性。 StarkEx可能是一个基本上自成一体并适合StarkEx提供的 API 的应用程序的正确解决方案。 StarkNet可能更适合于需要与其他协议同步或需要超出StarkEx所提供的内容的协议。

STARK使得应用程序如何能够建立在以太坊上具有革命性的变化。 StarkEx 和 StarkNet将继续启用以前不可行的应用程序，并在区块链上提高可能的限制。

这篇文章是由[Tim Gestson](https://twitter.com/IcemanTim)和[StarkWare](https://starkware.co/)团队合作撰写的