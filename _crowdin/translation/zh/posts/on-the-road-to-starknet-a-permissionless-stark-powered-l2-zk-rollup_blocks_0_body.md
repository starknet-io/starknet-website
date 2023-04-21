#### **TL;DR**

我们正在四个步骤建立StarkNet：

* 步骤0 - 基金会(已完成)
* 步骤 I - 星球：单一应用卷
* 步骤 II - 星座：多应用回收站
* 步骤三 - 宇宙：分散的滚动式

我们期待着在短短几个月内部署步骤一。 并且正在顺利走向到2021年年底前的步骤二 & III。

### **导 言**

StarkWare正在构建StarkNet，这是一个分散的、无权限的和不受检查的STARK驱动的L2 ZK-Rolup，它支持对Etherum进行通用计算。 它基于Turing-complete[Cairo language](https://www.cairo-lang.org/)。

开发者， 用户和 StarkNet 节点将能够做他从无权限的 L2 滚动所期望的所有事：开发者可以构建实现自己业务逻辑的应用程序并在 StarkNet上部署。 用户可以将交易发送到StarkNet以便执行，就像他们今天与 Ethereum 交互一样。 StarkNet节点和参与者将得到加密的经济奖励，以确保网络有效和公平地运作。

所有StarkNet交易都将定期批发，其有效性将在STARK的证明中得到证实，然后在Ethereas上加以核实。 由于核实STARK证明所需的计算努力与计算验证相比成指数很小，StarkNet将按数量顺序排列。

由于所有StarkNet 状态转换都将是STARK验证的，因此只有有效的转换将在Etherefore上被接受。 重建完整StarkNet状态所需的所有数据将在链上公布。 任何人都可以运行自己的StarkNet节点。 这些属性将使StarkNet成为安全和无权限的 Etherum。

我们已经停留了三年。 并且已经取得了一些显著的里程碑，将“Moon Math”变成了Etherese上运行的生产级和高效率的软件。 StarkWare做事的方式首先是解决各种棘手问题，首先是建立核心技术，然后以零敲碎打的方式将其用于生产。 随着StarkNet的完成，我们将继续以这种方式进行建设。

![](/assets/ontheroad_02.png)

**第 0 步——基础**

StarkWare已经完成为StarkNet奠定一些重要基础的工作。

#### **开罗**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)is the framework our Turing-complete High-Language & framework for producing STARK proofs for general consumption. 应用开发商不必手工制作复杂的“电路”或经认证的AIR，而是可以使用开罗来界定任何商业逻辑，如果它已证明是在链外并在链上进行核实。 Cairo is [in production on Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), and is also [available to developers](http://cairo-lang.org/).

几个星期后，我们将在一个公开的Ethereum 测试网上启动一个Alpha版本的Cairo的通用证明服务 (GPS)。 *这将允许开发者使用开罗来构建他们自己的应用程序，实现他们想要的任何商业逻辑。 他们将把他们的开罗代码发送到GPS验证并在链上进行验证。*

全球定位系统使得单一证据能够主张完全独立和独立的应用程序的执行工作的完整性。 这使这些应用能够在它们之间分摊气体核查费用。

开罗和全球定位系统是StarkNet的基础——我们决定将两者外包给开发人员，使他们能够早日接触到这种技术。 这不仅仅是为了让他们能够开始建筑在顶端，也是为了让他们能够影响StarkNet的进化。

我们将继续根据开发界的需要和反馈发展开罗。 我们将通过新的功能、语法和内置来提高这种语言的可用性。 我们将继续开发和改进开罗工具：汇编器、追踪器/调试器以及与共同的注重结果的实体的集成。

StarkNet将使开罗成为该大区。

#### **STARK软件包**

StarkWare has developed the most powerful proof system in the ecosystem, and it’s been [live on Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0) for months. StarkWare还开发了[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), 我们的开源技术支持者, 它比任何其它技术更快了 20X ; 它提供了[零知识和数量安全后签名](https://twitter.com/StarkWareLabs/status/1331930111227080709)

我们的缩放*测量*——不是推断，也不是许诺——包括在Mainnet上处理300K交易的单一证据。 在 Rollup 通道中实现[世界记录：3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20)。 在这个过程中，我们实现了滚动气体效率的世界记录：315种气体/吨，数量比以太基L1交易更便宜。

这种技术将成为分散的StarkNetProving Layer 因此，我们将发布额外和强化的助手作为StarkNet开发的一部分(在即将到来的博客文章中更多)。

#### **StarkEx**

StarkEx 是我们的L2伸缩引擎。 它自2020年6月以来一直在Mainnet上为[DeversiFi](https://twitter.com/deversifi)客户服务。 它将在短短几个星期内开始使用[dYdX](https://twitter.com/dydxprotocol)和[ImmutableX](https://twitter.com/Immutable)。 StarkEx可以处理复杂的交易逻辑(现货交易、衍生物、NFTs)和付款。

发展StarkEx是我们教导我们的工具链并根据现实世界的需要进行检验的方法。 实际应用程序和在线用户帮助工具成熟和进化的需求完全不一样。 这也有助于我们了解需要处理哪些因素，以便更好地为生态系统服务——例如，与钱包和区块探索者的一体化。

StarkEx 是一个能够使用基于 STARK 的 ZK Rollup 缩放应用程序的实况例子。 这是在开罗编写的第一份主建版应用。 因此，它也将成为StarkNet上运行的应用程序之一。

![](/assets/ontheroad_03.png)

### **前面的道路**

#### **步骤 I - 星球：单一应用卷**

此步骤将使开发人员能够在StarkNet上构建和部署自己的可缩放的应用程序。

此时此刻，每个StarkNet实例将能够运行一个单一的应用程序。 不同的实例可能会运行不同的应用程序。\
StarkNet 框架将包含以下内容：

* 需要有一些机制来为开罗武断的逻辑提供STARK证明，然后在Etheres上提交和核实。
* 与 L1 Etherum: 存取L1 令牌、发布链上的数据、Escape Mechanisms 保护StarkNet 用户免遭恶意StarkNet 运营商的侵害等。
* 管理L2用户余额以及应用程序的存储和内存。

开发者将能够专注于构建其应用程序的业务逻辑， 然后移动到生产上：在StarkNet上部署并运行它。

使我们能够构建一个可缩放的 ZK-Rollup 的通用计算方法：

* 开罗，它是一种通用的Turing-complete 编程语言
* 我们强大的STARK堆栈(Prover and Verifier)，它能够将大量的计算捆绑成单一的证据

#### **步骤 II - 星座：多应用回收站**

下一步将支持在相同StarkNet实例上运行的多个应用程序并访问相同的全局L2状态。 这将使不同应用之间能够互操作，并由于规模经济的改善而降低气体成本。

开罗，强大的STARK堆栈和GPS增强StarkNet在支持多应用滚动方面的竞争优势。

在现阶段， StarkNet将是一个完全功能的框架，用于运行*multiple*应用程序，并且在Etherum顶部有任意的业务逻辑。 每个实例由单个操作员运行。

运营商现在可以升级StarkNet节点，应用程序开发商可以在节点上部署他们的合同。 从用户的角度来看，StarkNet现在看起来并感觉像Etherum，更大的尺度。

#### **步骤三 - 宇宙：分散的滚动系统**

StarkNet发展的最后一步是分散其运作。

触发R&D 问题，我们现在正在处理影响到这个阶段的问题，包括(i) 使用 ZK-Rollup来改进达成共识的机制。 和（二）设计加密经济机制，激励分散的 StarkNet 贡献者和操作者(交易序列器、助推器等)。 (b) 有效、公平和安全地运作。

### **五. 结论**

StarkWare正在构建StarkNet，这是一个分散的无权操作的无STARK动力的L2 ZK-Rollup over Etherum, 它支持以开罗语为基础的通用计算。

StarkNet将使应用程序可以在不影响安全的情况下缩放。 • 使用者支付合理的交易费，并且整个生态系统能够大幅度增长和实现其承诺。

We gladly invite the developer community to [join us](https://twitter.com/StarkWareLtd) on this journey.

**更新 (Nov. 2021):**StarkNet Alpha 在Ethereum Mainnet上