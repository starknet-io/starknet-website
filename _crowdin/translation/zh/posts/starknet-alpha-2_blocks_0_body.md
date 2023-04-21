### TL;DR

* StarkNet现在支持可编辑性，这是定义StarkNet的星座阶段的主要功能。
* 我们正在为StarkNet发布一个测试框架——开发人员现在可以在当地有效地测试他们的合同。
* 这个版本包括几项显著的性能改进，如支持Merkle-Patricia Tries和一个内置的比特式操作。
* 生态系统战线：

1. **标准化合同**: OpenZepelin将为StarkNet开发标准合同，就像他们对Etherum那样！
2. **EVM->Cairo Compiler**: Warp team @ Netherlands 演示了ERC-20 Solidity code to StarkNet contracts

### 二. 背景

StarkNet是一个无权限分散的 Valide-Rollup (aka a “ZK-Rollup”)。 我们在年初宣布了它的[行进图](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)。 [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)，目前正在公共以太坊测试网上运行， 已经支持无权限部署智能合同来执行任何商业逻辑，L1<>L2消息传递和链上数据。 此外，它允许任何用户将交易发送到网络无权限的 Ethium风格。

这个版本：StarkNet Alpha 2，包括使我们能够从行星向星座推进的核心功能：部署的智能合约之间的可混合。

### 功能

StarkNet Alpha 2 引入了以下功能：

* **Compposability:**StarkNet Alpha 现在支持智能合约之间的交互——提前计划！ 这个升级的美丽，是开发人员可以指望他们的体验几乎与以太太空一样； 调用是同步的，可以用作函数调用。 我们热切期待着StarkNet释放的无限计算比额表和合约可变性的新应用程序。 要理解如何使用此功能，您可以先关注这个[教程](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html)。 我们很乐意听到您的反馈，看看您在[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y) 上的建树。
* **本地测试框架：**您询问并且我们已经递交了 —[更好的测试框架](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing)。 这将使开发人员能够通过测试他们的 StarkNet 合同部署和当地互动来加快他们的 dApp 开发——没有任何外部依赖关系。 此版本仅包含 L2 互动，下一个版本将扩展功能和使用难度。 在这里检查教程[](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), 我们很乐意听到您对该功能的反馈。
* **性能改进：**

**Patricia Tres:**我们改进了StarkNet的设计，通过移动到Merkle-Patricia Tree 状态承诺来支持较高的吞吐量和较短的防护生成时间([文档](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py))。 这种变化可以创建更大的区块，从而降低每笔交易的成本。 开罗这种ZKP语言——StarkNet操作系统的核心组成部分——促成了向更加复杂的国家承诺的转变。

**按位操作：**我们已经添加了一个[内置的](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)来支持StarkNet 更有效的比特操作([文档](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise))。

* **Goerli:**StarkNet正从Ropsten 移动到[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)！ 最后，我们使我们的制度摆脱了罗伯斯坦上帝的狂热。 Alpha 2现在将在一个更稳定的发展环境中运行。

### 生态

StarkNet生态系统正在不断发展，我们高兴地分享最新消息：

* **标准化合同**: 我们很荣幸在StarkNet的标准合同库上与 OpenZepelin 合作。 他们对以太标准合同的规范性工作每天都为我们大家服务，我们相信，他们在这里将产生同样的影响。
* **EVM->Cairo Compiler**: 荷兰的Warp 团队[演示了](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)将ERC-20 合同从 EVM 字节代码转换成StarkNet 合同并部署在StarkNet。 这项努力正在迅速进行，我们的下一个目标是把武断的智能合同从尤尔转化到开罗。
* **Maker-on-StarkNet**: a[proposal](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)已提交Maker DAO 以通过StarkNet执行Maker协议。 第一阶段建议在StarkNet挖掘DAI桥，接着在StarkNet挖掘DAI桥。
* **StarkNet/Cairo Auditing Services**: 我们正在聘用多家审计公司来提供StarkNet智能合同和开罗方案审计服务。

### 保存在角周围的网络

我们正在为StarkNet Alpha Mainnet的启动做好准备，开始从白名单应用程序开始。 有几个项目正在进行之中，还有更多的项目在当天得到积极补充。 要加入组队，您将被邀请通过[discord](https://discord.gg/uJ9HZTUk2Y) 联系我们。

**更新 (Nov. 2021):**StarkNet Alpha 在Ethereum Mainnet上