### TL;DR

* **Cairo 1.0 是开源！ 这只是打开StarkNet 堆栈的第一步。**
* We now present a [first look](https://github.com/starkware-libs/cairo) into the Cairo 1.0 compiler. 您现在可以开始实验基本的 Cairo 1.0 代码
* 开罗1.0的核心非常类似于Rust
* 认为它是第一个口味，而不是一个释放。 正在进行更多的改进。 第一版编译器计划于明年初提出Q1。
* StarkNet尚不支持开罗1.0。 明年将在StarkNet上提供支持。

### 简介

2020年，我们发布了[Cairo](https://eprint.iacr.org/2021/1063.pdf)，一个支持可核查计算的Turing完整编程语言。 开罗开始是一种集合语言，逐渐变得更加明确。 两个月前，我们宣布[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)，它涉及当前局势中的一些主要问题：

* 虽然开罗语法从一开始就有了重大改进，但开发者的体验总是可以改进。 开罗1.0是一种精灵启发的完全打字的语言，使得书写相同的逻辑变得更容易，错误也更少。
* 现有编译器是在与StarkNet本身相同的版本中开发的，从而更难跟踪语言更改。 开罗1.0汇编器是从头编写的，可以更快地开发地物和让社区更多地参与。
* 每次计算现在都是可以验证的。 目前，开罗程序可能因特定输入而失败(例如在某些计算分支中达到\`claim1=2\`指令)，使计算无法证明。 通过开罗1.0，每个可能的分支程序都是可以验证的。 这对于StarkNet的监督事务司的保护和检查制度抵抗尤其重要。

今天，当我们将发展推向一个公共仓库时，我们是实现上述目标的第一个里程碑。 和**开放源 Cairo 1。 ！**开发者现在可以首次编译和执行简单的 Cairo 1.0 程序。 这使得开发人员能够开始试验开罗1。 并且逐渐习惯于新的功能，即使在这个阶段，他们还不能在StarkNet上实现它。

### 现有能力

目前，您可以编纂和执行基本的开罗方案。 虽然许多语法/语言改进仍在进行中，但这可以用于开罗1.0版并在即将进行时享受升级。

**注意写入StarkNet合约仍然不受支持。**StarkNet语法(存储变量/调用合同/事件和其他系统调用)将在今后几周内添加。

### 代码示例

用来说明旧语法和开罗语法之间的差异。 ，我们选择了显示几种不同的实现方法/风味来找到 nh Fibonacci 号码。

### 示例一：匹配表达式

在 Cairo 1.0，您可以使用生灵类的[匹配](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)表达式。 你不再担心会导致引用被撤销的语句！

![](/assets/code01.png)

### 例子二：数据类型

在开罗0与神父和诗人合作时，在开罗1.0，我们能够以当地语言获得复杂的数据类型。 下面你可以找到一个示例生成第一个nFibonacci 数字数组。

![](/assets/code02.png)

正如你可以看到的那样，我们不会直接与内存指针一起工作，而是使用 `数组:<felt>\`array_append\`function。

### 例三：结构 &

下面的代码说明了开罗1.0的结构使用情况。

![](/assets/code03.png)

> 以下段落针对读者中的Rustaceans。 开罗1.0以类似的方式管理内存。 尤其是，它使用[所有权和借出](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html) 的概念。 因此，通过访问 \`FibResult\` 结构的成员 (在这种情况下，\`结果)。 alue\`, 我们移动了 \`result\`, 这意味着除非FibResult是可复制的，否则我们无法在\`result.index\`中再次访问它。 为了克服这一点，我们添加 \`FibResult\` 类型的 \`#\[arrive(Copy)]\` 属性。 在未来的版本中，我们将为结构添加自动除名。 这将允许移动一个成员的所有权而不触及其他成员(特别是)。 即使\`FibResult\`没有复制属性也会编译上述代码)。

**尤其要注意的是，开罗1.0版正在完全抽取开罗原始（没有只读的确定式）记忆模型。**

## 例四：错误传播

下面的代码计算 nth Fibonacci 数字，但与前面的例子不同，所有输入都是uint128类型。 请注意，这解决了开罗0号油轮处理的一个主要疼痛点。 这里uint128（今后uint256）是本土类型。

![](/assets/0_s8bhjf_ade3carmi.png)

添加两个128位整数可能导致溢出。 上面的代码使用[选项](https://doc.rust-lang.org/rust-by-example/std/option.html)和[问题标记运算符](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)来处理中间添加的溢出情况。 Compare this to the [current](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31) uint256 addition syntax, where the \`unit256_check\` function had to be called to guarantee soundness. 此外，在不久的将来， 我们会将 \`panic\` 的概念添加到语言中 (类似于rust中的[恐慌](https://doc.rust-lang.org/rust-by-example/std/panic.html)宏), 像添加溢出这样的简单错误将会被取消和自动传播，这意味着您将不需要使用 \`Option\` 或 \`？ 添加uints时

## 试试你自己

您现在可以编译和运行当前支持的 Cairo 1.0 方案！ Follow these [instructions](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner) on how to use the \`cairo-run\` command. 请注意，由[兰巴克拉斯](https://lambdaclass.com/)开发的[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs)正在被执行中。

您可以找到更多的示例来帮助您开始[这里](https://github.com/starkware-libs/cairo2/tree/main/examples)。 请注意，这只是编译器开发的第一条线；在今后几个星期里，我们将与编译器一起改进CLI。

## 今后的计划

《编译员》第一版计划于早期Q1版，其重点是支持开罗StarkNet现有的所有功能。 此外，我们正在努力扩展开罗1.0编译器的能力。 在今后几周内，你可以期待：

* StarkNet能力 — 编写智能合约和使用系统呼叫。
* 循环
* 新建库功能
* 改进语言服务器
* StarkNet 气体的原生概念

请务必继续关注并跟踪编译器的进展！