### **TL;DR**

* [StarkNet 行星Alpha](https://voyager.online/)- 我们通往Mainnet的道路上的第一步——现在已经生活在测试网上！
* [StarkNet](https://starkware.co/product/starknet/)是一个没有权限的无Turing-complete ZK-Rollup1。
* 开发者可以在智能合约中实现他们选择的商业逻辑，并在StarkNet上无限期地部署它。
* StarkNet的状态过渡被证明是脱链的，然后在链上核实。
* 就像以太，用户可以直接与这些智能合约交互。

### **导 言**

We [announced](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880) the roadmap for [StarkNet](https://starkware.co/product/starknet/) in Jan 2021. 圣杯可伸缩性解决办法将支持(一) 任意智能合同，(二) 复合性，(三) 通过分散的网络运作。 今天，我们宣布在测试网上部署步骤1：StarkNet 行星Alpha。 Alpha系统支持任意智能合约。 将于今年晚些时候支持合成性，随后将进行权力下放。

非常重要的是，我们必须做到充分透明并适当地确定期望。 这个帖子的目的是清楚地列出哪些已经支持的功能，以及哪些功能仍然缺失。 我们今天要释放的是正在测试网上进行的工作。 我们认为，这种早期释放将有助于形成StarkNet周围的健康生态系统及其工具。 我们渴望让开发者参与与我们一起建立网络，并从社区获得持续的反馈。

### **StarkNet 行星Alpha有什么东西？**

**函数：**Alpha允许开发者写入和部署StarkNet合同进行一般计算。 没有白名单-任何开发者都可以写和部署他们想要的合同。 用户可以通过向他们发送交易和检查他们的状态来与这些合同相互作用。 所有合同都存在于单一国家。 这种状态的更新被证明是在链外进行的，并在链上进行核查——在阿尔法州，核查是在测试网上进行。

**StarkNet OS:**我们叫做StarkNet OS的新“操作系统”支持上述功能。 它在 StarkNet上提供*可验证的*状态转换。 以太坊开发者可能认为它等同于EVM：它有责任援引智能合同功能、处理合同的储存等。 我们将发布一个单独的帖子，详细说明StarkNet OS的结构。

**Alpha不在哪里？**Alpha仍然缺少一些关键能力，例如L1<>L2互动、链上数据和复合能力。 更多关于这些问题的信息如下。

#### **获取您的脚点**

以我们的[教程和文档](https://www.cairo-lang.org/docs/hello_starknet/) 开始。

然后，你可以阅读[样本AMM 智能合同](http://cairo-lang.org/docs/hello_starknet/amm.html)我们已经写入并部署在StarkNet。 这是一个简单的AMM，您可以在这里</a> 与

交互。 您现在已准备好在StarkNet上写入和部署智能合同。 StarkNet的区块浏览器 —[Voyager](https://voyager.online/)— 允许任何人检查 StarkNet的状态。\
我们相信，通过获得您的脚，您将能更好地准备在StarkNet上建造， 随着我们继续推出更多功能。 我们已经在忙于规划第一个黑客问题，以及为开发者举办讲习班。</p> 



### **StarkNet的下一个步骤**

阿尔法中仍然缺少的关键能力将在今后几周内推出。 它们是：

* L1<>L2 交互作用，例如在L1中存入和提取资金的能力。
* 在链数据：在以太坊发布所有存储变化。
* 合成性：允许合同相互沟通。

有了这些功能，我们将准备把StarkNet带到Ethereum Mainnet。 我们在StarkNet的进化星座中调用这一步，当我们到达它时我们就把它调到它。 您将能够在 Ethereum Mainnet 可缩放的L2 dApp上建造和无权限部署。



#### **StarkNet Ecosystem**

我们对StarkNet周围形成的生态系统感到非常高兴，因此我们将暂停，感谢我们的合作者。

我们正在与荷兰和努比亚团队密切合作。[Alexey Akhunov](https://twitter.com/realLedgerwatch)(刚) &[Igor Mandrigin](https://twitter.com/mandrigin)(网关) (m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dorg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, 最后但不是最不重要的——[Paradigm](https://twitter.com/paradigm)团队。\
我们早期的合作伙伴——[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[Deversifi](https://twitter.com/deversifi)以及[Sorare](https://twitter.com/SorareHQ)[Celer](https://twitter.com/CelerNetwork)和其他人——从第一天起就为我们提供了宝贵的投入， 让我们能够为真正的用户建立一个生产级网络。\
我们继续对社区创建的内容质量感到惊奇。 如[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev)和[Alexandria 团队](https://blockchainpartner.fr/)</p> 

我们渴望看到社区将在所有战线上创造什么：开发者工具、内容，当然还有他们将构建的StarkNet应用程序。 让我们继续在您最喜欢的媒体中进行对话：[discord](https://discord.gg/uJ9HZTUk2Y)[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co), 并且很快使用最分散的通信表单： f2f。

1 我们并不是ZK-Rollup一词的粉丝，因为——从数学上说——这并不是零所知，但你都知道我们的意思。

2 不同于Mainnet上当前StarkEx 部署的单独状态

**更新 (Nov. 2021):**StarkNet Alpha 在Ethereum Mainnet上