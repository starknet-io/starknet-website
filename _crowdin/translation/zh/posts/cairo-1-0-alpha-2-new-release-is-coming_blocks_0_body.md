### TL;DR

* 我们正在发布 Cairo 1.0-alpha.2，它为该语言带来了许多新功能
* 现在可以实施 ERC20 合约
* 这些新的语言功能将适用于即将推出的 StarkNet-v0.11.0 版本

### 新鲜的新功能！

Cairo 1.0 正在继续快速改进。 今天的版本介绍了编写 ERC-20 合约的所有必要功能等。

提及一些新功能：

* 词典
* 合同中的事件
* 映射存储变量
* 特质支持
* 类型推断
* 方法

请参阅 GitHub [存储库中的完整列表。](https://github.com/starkware-libs/cairo)

让我们看一下 ERC20 合约的示例（当然，完整的具体示例位于[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)上），以演示事件和存储中的映射的用例：

![](/assets/0_i4ch5-4rxxal4rkt.png)

### 跳入水中！

我们继续研究两个平行向量：

1. 全速发展 Cairo 1.0，以实现与旧 Cairo 的全功能兼容性。
2. 开发 Starknet v0.11.0，支持 Cairo 1.0 编写的合约

同时，我们鼓励开发人员开始使用 Cairo 1.0 进行编写并熟悉它。

如有任何问题 - 您可以使用 Cairo 1.0 Discord[频道](https://discord.com/channels/793094838509764618/1065544063245365288)。

对于任何建议或反馈 - 请随时在 Cairo 存储库中打开[问题](https://github.com/starkware-libs/cairo/issues)。