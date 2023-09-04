### TL;DR

* [Starknet Planets Alpha](https://voyager.online/) 我们迈向主网之路的第一步——现已在测试网上上线！
* [Starknet](https://starkware.co/product/starknet/) 是一个无需许可的图灵完备的 ZK-Rollup1。
* 开发人员可以在智能合约中实现他们选择的业务逻辑，并无需许可地将其部署在 Starknet 上。
* Starknet 的状态转换在链下进行证明，然后在链上进行验证。
* 就像以太坊一样，用户可以直接与这些智能合约交互。

### 导 言

我们 [于 2021 年 1 月宣布](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880) [Starknet](https://starkware.co/product/starknet/) 的路线图。 可扩展性解决方案的圣杯将支持（i）任意智能合约，（ii）可组合性，（iii）在去中心化网络上运行。 今天，我们宣布在测试网上部署第 1 步：Starknet Planets Alpha。 Alpha系统支持任意智能合约。 今年晚些时候将支持可组合性，随后将进行去中心化。

对我们来说，完全透明并正确设定期望非常重要。 这篇文章的目的是清楚地列出已经支持的功能以及仍然缺少的功能。 我们今天发布的是测试网上的正在进行的工作。 我们相信，这个早期版本将有助于围绕 Starknet 及其工具形成一个健康的生态系统。 我们渴望让开发人员与我们一起构建网络，并从社区获得持续的反馈。

### 星网阿尔法行星里有什么？

功能：Alpha 允许开发人员编写和部署 Starknet 合约以进行一般计算。 没有白名单——任何开发人员都可以编写和部署他们想要的任何合约。 用户可以通过向这些合约发送交易并检查它们的状态来与这些合约进行交互。 所有合约都存在于单一状态²。 此状态的更新在链外进行了验证，并在链上进行了验证——在 Alpha 版本中，验证是在测试网上完成的。

Starknet OS：上述功能由我们称为 Starknet OS 的新“操作系统”支持。 它在 Starknet 上提供可证明的状态转换。 以太坊开发者可能会认为它相当于EVM：它负责调用智能合约函数、处理合约存储等。 我们将发布一篇单独的文章，详细介绍 Starknet 操作系统的架构。

Alpha 中没有什么？ Alpha 仍然缺少一些关键能力，例如 L1<>L2 交互、链上数据和可组合性。 下面详细介绍这些内容。

#### 让你的脚湿透

从我们的 [教程和文档](https://www.cairo-lang.org/docs/hello_starknet/)开始。

然后，您可以阅读我们在 Starknet 上编写并部署的 [示例 AMM 智能合约](http://cairo-lang.org/docs/hello_starknet/amm.html)。 这是一个简单的 AMM，您可以在此处与它交互 [](https://starkware-amm-demo.netlify.app/swap)。 您现在已准备好在 Starknet 上编写和部署智能合约。 Starknet 的区块浏览器 - [Voyager](https://voyager.online/) - 允许任何人检查 Starknet 的状态。\
通过实践，我们相信您会为在 Starknet 上构建做好更好的准备，因为我们将继续推出其他功能。 我们已经在忙于计划第一届黑客马拉松以及开发人员研讨会。

### Starknet 的后续步骤

Alpha 中仍缺少的关键功能将在未来几周内推出。 这些都是：

* L1<>L2 交互，例如在 L1 中存入和提取资金的能力。
* 链上数据：发布以太坊上的所有存储变化。
* 可组合性：允许合约相互通信。

有了这些功能，我们就准备好将 Starknet 引入以太坊主网。 我们将 Starknet 演化中的这一步骤称为 Constellations，当我们实现这一步骤时，您将能够在以太坊主网上构建和无需许可地部署可扩展的 L2 dApp。

#### Starknet 生态系统

我们对 Starknet 周围形成的生态系统感到非常兴奋，所以我们要停下来感谢迄今为止我们的合作者。

我们正在与 [Nethermind](https://twitter.com/nethermindeth) 和 Nubia 团队、 [Alexey Akhunov](https://twitter.com/realLedgerwatch) (Erigon) & [Igor Mandrigin](https://twitter.com/mandrigin) (gateway.fm), [Iddo Bentov](https://www.cs.cornell.edu/~iddo/), [dOrg](https://twitter.com/dOrg_tech), [Prof. Tim Roughgarden](https://twitter.com/algo_class), [Prof. 密切合作Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/) & Yoav Seginer，最后但并非最不重要的 — [Paradigm](https://twitter.com/paradigm) 团队。\
我们的早期合作伙伴 — [dYdX](https://twitter.com/dydxprotocol)、 [Immutable](https://twitter.com/Immutable)、 [DeversiFi](https://twitter.com/deversifi)以及 [Sorare](https://twitter.com/SorareHQ)、 [Celer](https://twitter.com/CelerNetwork)等 — 从第一天起就为我们提供了宝贵的意见，并让我们能够构建一个产品适合真实用户的级网络。\
我们仍然对社区创建的内容质量感到惊讶，这些人包括 [Bobbin Threadbare](https://twitter.com/bobbinth)、 [Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md)、 [Adrian Hamelink](https://twitter.com/adr1anh)、 [perama](https://twitter.com/eth_worm)、 [Francesco Ceccon](https://twitter.com/ceccon_me)、 [Ilian Malchev](http://twitter.com/imalchev)、和 [亚历山大队](https://blockchainpartner.fr/)。

我们渴望看到社区将在各个方面创建什么：开发人员工具、内容，当然还有他们将构建的 Starknet 应用程序。 让我们在您最喜欢的媒体上继续对话： [不和谐](https://discord.gg/uJ9HZTUk2Y)、 [Twitter](https://twitter.com/CairoLang)、电子邮件，并且很快会使用最去中心化的通信形式：f2f。

1 我们不喜欢 ZK-Rollup 这个术语，因为从数学上来说，它不是零知识，但你们都知道我们的意思

² 与当前 StarkEx 在主网上的部署维护的单独状态不同

更新（2021 年 11 月）：Starknet Alpha 在以太坊主网上上线