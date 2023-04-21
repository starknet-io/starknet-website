### TL;DR

StarkNet Alpha 1 有两个新功能：

* L1<>L2 互动
* 联锁数据

### 导 言

年初，我们宣布StarkWare正在建造[StarkNet](https://starkware.co/product/starknet/)， a 一个无权限分散的以STARK为基础的 ZK-Rollup1 在以太空为基础的 L2 网络上运行。 StarkNet允许任何dApp 实现其计算的无限比例 — — 但不影响Etherum的合成性和安全性。

上个月，[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)发布到世界上。 For the first time, developers are able to [write](https://kobi.one/2021/07/14/stardrop.html) any smart contract and deploy it, permissionlessly, to a ZK-Rollup. 用户能够将交易发送到网络以太太空风格。

今天，我们正在发布一个新版本：Alpha 1。 我们正在滚动基础上发布功能，让开发者尽快与新功能互动。 我们预计，这将使反馈周期更加紧张，并使社区反馈能够迅速改进StarkNet。

### **Alpha 1 功能**

#### L1<>L2 互动

Alpha 1 包含一个 L1<>L2 消息协议，它允许开发者实现L1 和 L2 之间无缝的交易流。 开发者现在可以从L1上的合同发送消息到L2上的合同，反之亦然。

ZK-Rollup的美丽之一是，状态更新即刻是最后的。 这意味着从L2到L1发送的信息可以立即转给目的地合同。 这开启了构建图层之间真正可互操作的应用的途径。

有兴趣尝试它吗？ 开始的最佳方式是沿用教程[这里](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)。

我们的L1<>L2协议在很大程度上归功于其他的L2(特别是优待和仲裁)，他们以前在这方面的工作对我们的设计产生了影响。

#### 打开链数据可用性

StarkNet的状态更新现在也已经在Etherum上作为链上数据发布。 这允许任何用户从L1数据完全构建StarkNet的状态。 每个状态更新都包含状态差异，即已更改的存储和其新值。

这里也显示了它的强度。 与最优化的卷轴不同，交易的全部数据必须在链上发送， 在 ZK-Rollups 中，只有生成状态差异所需的绝对最低数据才会在链上发送。

考虑一个优秀的例子：价格oracles。 更新价格口令的交易通常包含多个交易，但只更新了一个存储单元；对方的价格。 状态更新所需的链上数据含有最优朗读器中的口服体验交易，随着更新数量的提升而成长， 在 ZK-Rollup 中，它将始终是一次存储更新。

此外，压缩算法可适用于已公布的数据。 “STARK”证据将进一步减少链上的足迹，证明其有效性。 今后的StarkNet版本将在这一领域引入创新的优化。

#### StarkNet OS

我们还正在发布StarkNet 操作系统代码。 StarkNetOS 是运行StarkNet的开罗方案。 操作系统处理网络上的所有操作——合同部署、交易执行、L1<>L2消息等等。 StarkNet OS 架构和设计将在一个单独的员额中详细解释。

#### 额外功能

StarkNet Alpha的发展不仅如此，我们还在不断改进开罗。 关于开罗v0.3.0的新功能的完整描述，请在这里勾选[的发行笔记](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0)。

### 生态系统正在增长

除了关于StarkNet核心的经常性工作外，生态系统关于StarkNet的工作也在不断扩大。 我们感到兴奋的是，我们正在与生态系统中最有才干的一些团队合作。

Fermion, StarkNet的第一个全节点努力是由Erigon（原为TurboGeth）团队开发的。 根据他们在以太坊工作中获得的巨大知识，我们能够与他们合作，建立一个强大的全节点， 它纳入了在为以太空为生建设时吸取的许多经验教训，同时也得益于STARK证据所提供的比额表。

荷兰正在编写Warp，这是EVM到开罗的一个编纂器。 我们的文化是只在新工具准备就绪后才提出， 我们可以说的是，很快就会有激动人心的新闻！ 但我们可以说，他们正在走上正轨。

### 未来所持的内容

我们通往StarkNet的道路上的下一个站点将是合成性——允许合同相互作用。 敬请期待。

[StarkWare](https://starkware.co/)

1 正如我们以前说过的那样，ZK-Rollup现在是一个常用的术语，但是非常误导：这些解决办法(目前)并不提供零知识。

**更新 (Nov. 2021):**StarkNet Alpha 在Ethereum Mainnet上