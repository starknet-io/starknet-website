### TL;DR

* 我们正在释放Cairo 1.0-alpha.2，它给语言带来了许多新的功能
* 现在有可能执行一项ERC20合同
* 这些新的语言功能将适用于即将到来的 StarkNet-v0.11.0 版本

### 新功能！

开罗1.0继续其快速改进的步伐。 今天的版本除其他外引入了写入ERC-20合同的所有必要功能。

提一下一些新功能：

* 词典
* 合约事件
* 映射存储变量
* 特性支持
* 输入参数
* 方法

查看 GitHub [仓库中的完整列表](https://github.com/starkware-libs/cairo)

让我们看看一个ERC20合同的例子(当然，完全具体的例子是) 在[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)上演示一个事件和映射的实例：

![](/assets/0_i4ch5-4rxxal4rkt.png)

### 跳入水源！

我们继续致力于两个平行的矢量：

1. 全速Evolve Cairo 1.0 以便与旧的Cairo兼容。
2. Develop Starknet v0.11.0 支持在开罗写入的合同

与此同时，我们鼓励devs开始与开罗1.0书写并熟悉它。

任何问题 — — 您可以使用 Cairo 1.0 Discord[频道](https://discord.com/channels/793094838509764618/1065544063245365288)。

对于任何建议或反馈——请不要犹豫，在 Cairo 存储库中打开[issue](https://github.com/starkware-libs/cairo/issues)。