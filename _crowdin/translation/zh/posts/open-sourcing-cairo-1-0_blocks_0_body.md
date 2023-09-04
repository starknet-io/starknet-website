### TL;DR

* **开罗1.0开源了！ 这只是 StarkNet 堆栈开源的第一步。**
* 我们现在介绍[第一眼](https://github.com/starkware-libs/cairo)Cairo 1.0 编译器。 您现在可以开始尝试基本的 Cairo 1.0 代码
* Cairo 1.0 的核心与 Rust 非常相似
* 将其视为初体验，而不是发布。 更多改进正在进行中。 该编译器的第一个版本计划于明年第一季度初发布。
* StarkNet 尚不支持 Cairo 1.0。 明年第一季度将在 StarkNet 上得到支持。

### 介绍

2020 年，我们发布了[Cairo](https://eprint.iacr.org/2021/1063.pdf)，这是一种支持可验证计算的图灵完备编程语言。 Cairo 最初是一种汇编语言，后来逐渐变得更具表现力。 两个月前，我们发布了[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)，它解决了当前情况下的一些主要问题：

* 虽然 Cairo 的语法自诞生以来已经有了显着的改进，但开发人员的体验始终可以改善。 Cairo 1.0 是一种受 Rust 启发的完全类型化语言，使编写相同的逻辑变得更加容易且不易出错。
* 现有的编译器是在与 StarkNet 本身相同的存储库中开发的，这使得跟踪语言更改变得更加困难。 Cairo 1.0 编译器是从头开始编写的，可以实现更快的功能开发和更多的社区参与。
* 现在每个计算都是可证明的。 目前，Cairo 程序可能因特定输入而失败（例如，通过在某些计算分支中到达“assert 1=2”指令），从而导致计算无法证明。 使用 Cairo 1.0，程序可以在每个可能的分支中得到证明。 这对于 StarkNet 中的 DOS 保护和审查抵抗尤为重要。

今天，我们将开发转移到公共存储库，并**开源 Cairo 1.0，标志着实现上述目标的第一个里程碑！**开发人员现在第一次可以编译和执行简单的 Cairo 1.0 程序。 这使得开发人员可以开始尝试 Cairo 1.0 并逐渐习惯新功能，即使在这个阶段他们还无法在 StarkNet 上实现它。

### 目前的能力

目前，您可以编译并执行基本的开罗本地程序。 虽然许多语法/语言改进仍在进行中，但这可以让您习惯 Cairo 1.0 并享受升级带来的乐趣。

**请注意，仍然不支持编写 StarkNet 合约。**StarkNet 语法（存储变量/调用合约/事件和其他系统调用）将在未来几周内添加。

### 代码示例

为了说明旧语法和 Cairo 1.0 之间的差异，我们选择展示一些查找第 n 个斐波那契数的不同实现/风格。

### 示例一：匹配表达式

在 Cairo 1.0 中，您可以使用类似 Rust 的[匹配](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)表达式。 您将不再担心可能导致引用撤销的 if/else 语句！

![](/assets/code01.png)

### 示例二：数据类型

虽然 Cairo 0 使用毡和指针，但在 Cairo 1.0 中，我们可以本地访问该语言中的复杂数据类型。 下面您可以找到一个生成前 n 个斐波那契数列的示例。

![](/assets/code02.png)

正如你在上面看到的，我们没有直接使用内存指针，而是使用 `Array::<felt>\` 类型和 \`array_append\` 函数。

### 示例三：构造 & 所有权

以下代码说明了 Cairo 1.0 中结构体的用法。

![](/assets/code03.png)

> 以下段落是为观众中的 Rustaceans 准备的。 Cairo 1.0 以与 Rust 类似的方式管理内存。 特别是，它使用[所有权和借用](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)的概念。 因此，通过访问“FibResult”结构体的成员（在本例中为“result.value”），我们移动了“result”，这意味着除非 FibResult 是可复制的，否则我们不能在“result.index”中再次访问它。 为了克服这个问题，我们添加了“FibResult”类型的“#[derive(Copy)]”属性。 在未来的版本中，我们将为结构添加自动解构。 这将允许移动一个成员的所有权而不触及其他成员（特别是，即使 FibResult 没有复制属性，上面的代码也会编译）。

**特别要注意的是，Cairo 1.0 完全抽象了 Cairo 的原始（非确定性只读）内存模型。**

## 示例 IV：错误传播

以下代码计算第 n 个斐波那契数，但与前面的示例不同，所有输入的类型均为 uint128。 请注意，这解决了 Cairo 0 中处理 uint 的一个主要痛点。 在这里，uint128（以及将来的 uint256）是本机类型。

![](/assets/0_s8bhjf_ade3carmi.png)

两个 128 位整数相加可能会导致溢出。 上面的代码使用[选项枚举](https://doc.rust-lang.org/rust-by-example/std/option.html)和[问号运算符](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)来处理中间加法之一发生溢出的情况。 将此与[current](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 加法语法进行比较，其中必须调用“unit256_check”函数来保证健全性。 另外，在不久的将来，我们将在语言中添加“panic”的概念（类似于rust中的[panic](https://doc.rust-lang.org/rust-by-example/std/panic.html)宏），像加法溢出这样的简单错误将无法捕获并自动传播，这意味着添加 uint 时不必使用 \`Option\` 或 \`?\`。

## 自己尝试一下

您现在可以编译并运行当前支持的 Cairo 1.0 程序！ 请按照以下[说明](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)了解如何使用“cairo-run”命令。 请注意，在底层，由[Lambdaclass](https://lambdaclass.com/)开发的[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs)用于执行。

您可以在此处找到更多示例来帮助您入门[](https://github.com/starkware-libs/cairo2/tree/main/examples)。 请注意，这只是编译器开发的第一次了解；在接下来的几周内，我们将改进 CLI 和编译器。

## 未来的计划

编译器的第一个版本计划在第一季度初发布，其重点是支持 Cairo 1.0 中 StarkNet 的所有现有功能。 此外，我们正在努力扩展 Cairo 1.0 编译器的功能。 在接下来的几周内，您可以期待：

* StarkNet 功能——编写智能合约和使用系统调用。
* 循环
* 新的库函数
* 改进的语言服务器
* StarkNet 气体的原生概念

请务必保持关注并跟踪编译器进度！