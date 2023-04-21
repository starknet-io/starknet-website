### TL;DR

L2-原生dapps现在可以在不受传统L1气体限制的情况下蓬勃发展。

### 导 言

由于Etherum(L1)块气体限制，dApp 开发者总是面临严重的限制。 It limits not only *how* those dApps operate but also *what* those dApps are capable of doing.

第二层 (L2) 为开发者提供一个可计算的绿地，无此气体玻璃天花板。 我们认为，绝大多数的dapps在几年内将是L2-土著的：它们将是从L2基础上建立起来的，以便从这种计算自由程度中获益。

### L1 气体限制形状L1-原生dapps

*让我们想一想两个受L1气体约束影响设计的流行飞毛腿的例子：AMM和DEX聚合器。*

自动化市场制造商(AMM)基本上是基于订单簿的交易所的低气体近似值。 不允许用户放置和移除限制、停止丢失或其他各种订单类型， L1 AMM仅允许使用中央基本流动资金池进行简单的互换——以满足L1的大量计算成本。

在理想的情况下，DEX总汇必须能够利用所有可能的流动资金池，即使是最小的流动资金池，才能使用户获得最佳价格。 然而，由于查询许多不同集合的成本，根本不值得在L1上进行交易。 只有当流动性集合拥有足够大的流动性时，才有理由使用联合资金并支付相关的交易费。 本着同样的精神， 如果清算折扣和交易费之间的差额要小得多，借贷/借贷和其他以抵押品为基础的舞台应用软件的清算就会更加准确。

许多L1 dapps功能和设计的有限直接来自开发人员优化他们的代码以遵守Etherum的气体限制。 为什么你可能要问，我们要说以太斯姆吗？ 无法在许多L1s甚至一些L2上运行团结代码？ 事实上，除非如此，以太坊是最昂贵的（因而也是安全的）环境。 联合应用软件是为了“最昂贵的链接”，即以太坊设计的。 因此，他们不能受益于费用较低的运行环境所提供的计算优势。 为了解锁功能，为最昂贵的运行环境设计一个 dApp 来解锁功能，必须修改dApp的代码。

### L2-本机应用程序出厂情况

Validity Rollup(aka ZK-Rollups) 启用了极其廉价的计算方法。 与任何其他缩放解决方案不同——L2计算方法能够成指数增长，只会对链上核查气体成本产生小小的影响。 此外，一个有效率的滚动处理对计算的投入——“证人数据”——，而不需要额外的L1资源，可以用许多投入进行计算。

Coding dApps natively on L2 in **[Cairo](https://www.cairo-lang.org/)** (a Turing-complete language to scale dApps via STARK proofs) unlocks a vast realm of possibilities for developers. 它使他们能够使用他们以前无法使用的大量数据——包括计算数据和证人数据。

我们来探索这种L2-本地的应用程序及其新的、丰富的功能。

#### DeFi

在登入StarkEx之前，StarkWare的有效性滚动，dYdX在 Etherum上作为L1 dApp 操作。 它为其用户提供了合成资产x10的杠杆，并且只为一个合成资产的位置提供了支持。 在开罗重建dYdX作为L2-本机应用程序提供了一个更可缩放、更便宜和效率更高的 DeFi平台：

* Oracle价格更新：这种更新通常包括数十种价格和各种来源的签名来计算一个中间值。 Rollup的有效性使得价格摩拉克逻辑（签字核实和中位价格的计算）呈指数尺度，而没有向L1报告这些见证人的数据。 将此与dYdX的L1实现相比较，每次更新花费大约300K气体的花费。 因此，价格报告的频率和数量有限。
* 杠杆：准确的价格饲料允许dYdX实时估计位置的风险，并为用户提供更高的杠杆。 由于改进了oracle price update, dYdX 提高了L1上的 x10 倍的杠杆作用到 x25 上的 L2。
* 交叉溢价：在L2上有dYdX, 市场制造商可以使用同一种抵押品对许多资产下出长/短订单。 dYdXL2上的平均结算涉及10个以上合成资产的位置！ 与此相对照，如果在L1上具备这种跨余值能力，则连锁气体成本将增加一倍以上。

#### 游戏和生成Art

当前L1-本机游戏的作物通常在 L1 上存储游戏资产，同时在受信任的非链应用程序中实现整个游戏逻辑。 这种模式是L1气体限制的直接结果。 感谢您在 L2 上的便宜计算 L2-本机游戏dApp的开发者现在可以在智能合同中实现游戏逻辑，并且无需信任地操纵游戏资产， 而不是仅仅储存它们。 将游戏逻辑带入不可信的计算领域，是朝着一个基于区块链的游戏更加丰富的世界迈出的重要一步。 L2-本机游戏已经在StarkNet、StarkWare无权限网络上开发(如[Dope Wars](https://github.com/dopedao/RYO)and[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a))。

但是，基于区块链的游戏真的会是多么复杂？ 例如，在链上直接处理图形似乎是不可能的 —[还是是](https://twitter.com/guiltygyoza/status/1449637155001798657)？ 在智能合约中解决差分方程和模拟行星动作是朝着将来可以成为区块链物理引擎迈出的重要一步。 其影响是巨大的。 想象一种多人游戏，如反击游戏。 如果可以在链上模拟游戏逻辑， 许多可怕的黑人将成为过去的事情——玩家可能会享受一场经证明是公平的游戏。

常规艺术使用计算、随机性和其他数据创建基于 blockchain 的艺术。 一个艺术家可以不信任地使用越复杂的逻辑和计算方法，就会有更多的选项来生成独特的单个艺术块。 [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)正在StarkNet上启动首批Gen Art 项目，利用StarkNet的无限计算资源。

### 接下来是什么？

有效率滚动-和开罗驱动的StarkEx 和 StarkNet， 特别是——提供了一种环境，使人们能够开发和操作消耗大量计算或证人数据的dapps。 由于分配的分类账技术带来的所有好处，我们预测L2-本机应用软件将有一个非常令人振奋的未来。

What can *you* create with general computation supported by composability, trustlessness, and decentralization?