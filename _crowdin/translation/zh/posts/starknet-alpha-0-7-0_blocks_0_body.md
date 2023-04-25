### TL;DR

* StarkNet Alpha 0.7.0释放到Goerli；装有改进
* 合同现在可以通过代理升级模式升级
* 合同现在可以发布事件
* 支持期待已久的方块编号和方块时间戳系统调用

### 简介

我们很乐意释放Alpha 0.7.0, 这是一个带有新功能和改进内容的版本。 在过去几个月中，StarkNet的最佳刺激因素之一是社区更多地参与了StarkNet的未来的形成。 这个版本解决了社区的一些迫切需要。

#### 更改命名公约

观测器可能已经注意到，先前的StarkNet Alpha 版本叫做Alpha 4，我们现在正在释放Alpha 0.7.0。 我们决定省略专用的 Alpha 版本号，而只依靠相关的 cairolang版本。

### 新功能

#### 合同可升级性

OpenZepelin's[Proxy 升级模式](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)现在完全支持StarkNet的合同升级。 代理模式是在Etherum上启用合同升级的常见方法。 Alpha 0.7.0 通过 StarkNet启用此模式。

我们制作了一个简短的[教程](https://starknet.io/docs/hello_starknet/default_entrypoint.html)来演示该模式的基本实现，并且 OpenZeppelin 已经在努力实现代理模式的标准契约；参见[原型](https://github.com/OpenZeppelin/cairo-contracts/pull/129)。

#### 阻止号码和方块时间戳

Alpha 0.7.0添加了两个新的系统调用，许多开发者一直在要求这样做。 这些通话允许合同访问方块编号和方块时间戳。 方块编号返回当前已执行方块的数量。 方块时间戳返回由序列器在创建方块时给出的时间戳。

你可以看到一个如何在[教程](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp) 中使用这些功能的例子。

#### 事件

惊喜！ 计划用于未来版本的一个功能已经深入到这个早期版本。

StarkNet合同现在支持定义和排放事件，使它们能够揭露非链应用的执行信息。 以太坊开发者会发现语义和语法非常类似于Solid。 您可以阅读[文档](https://starknet.io/documentation/events/), 或者按照[教程](https://starknet.io/docs/hello_starknet/events.html), 来解释这个功能。

#### 已删除 %builtins 指令

StarkNet合同不再需要 %builtin指令。 此更改是在[StarkNet Shamans](https://community.starknet.io/)上关于[合同可扩展性模式](https://community.starknet.io/t/contract-extensibility-pattern/210)社区讨论之后进行的。 它大大简化了这种扩展模式的可用性。

例如，下列合同将从以下来源更改：

```
%lang starknet

# 这是"%builtins"指令。
# 不再需要。
%builtins range_check

@view
func add(x : felt, y: felt) -> (res : felt):
return (res=x + y)
end
```

这里：

```
%lang starknet
@view
真菌添加(fx : felt, y: felt) -> (res : felt):
return (res=x + y)
end
```

您可以签出[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)标准合约，使用新的模式。

#### 外部函数支持结构数组

Alpha 0.7.0支持外部函数中结构的通过和返回数组。 这个附加功能可以让账户合约更好地支持[多任务类](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751)。

Multicall是帐户摘要的一个强大功能，允许帐户在一次交易中多次呼叫。 一个明显的用例是创建一个**单笔交易**来调用，然后传输From。

我们期待着看到社区对它做些什么。

#### StarkNet CLI 的改进

**支持待定块**

[待处理块](https://starknet.io/documentation/block-structure-and-hash/#pending_block)[已在最后一个次要版本 (v0.6.2) 中介绍](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)，并提供了更快的交易确认。 此版本包括支持通过 StarkNet CLI 查询这些块。

若要使用它，每个CLI 命令将block_number 作为参数(contract_call/get_block/get_code/get_storage_at)， 我们可以指定 block_number =pended 来查询StarkNet有关待处理方块的信息。

**账户合同支持**

StarkNet使用账户抽象，即所有账户都作为智能合约执行。 账户合约的第一次实现由[Argent](https://github.com/argentlabs/argent-contracts-starknet)and[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)完成，但我们期望更多的完成。

在StarkNet中，所有交易都必须通过账户合约，CLI现在允许直接通过账户合约与StarkNet Alpha互动。 关于如何设置它，请参阅[教程](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)。

上个月，[StarkNet.py](https://github.com/software-mansion/starknet.py/)and[Nile](https://github.com/OpenZeppelin/nile)也添加了类似的功能。

#### L1<>L2 测试框架中的消息

Alpha 0.7.0 引入了邮政官。 Postman让开发者能够使用测试框架来测试更复杂的流量。

在高级别 — 它模拟StarkNet 序列器将消息从L1传递到 L2 和 L2 传递到 L1的责任。 它确保通过团结电文合同发送的电文将出现在目的地StarkNet合同中，StarkNet合同发送的电文将出现在团结电文合同中。

#### 以及更多功能

Alpha 0.7.0 提供了更多的功能和更改，例如在数学共同库中添加了一个有效的方根函数。 完整列表出现在[更新日志](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0) 中。

### 下一步？

最初的[手续费机制](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)支持将在几周内释放，作为StarkNet的子版本。

### 更多信息？

[starknet.io](https://starknet.io/): 所有StarkNet 信息、教程和更新。

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): 加入以获得您的问题的答案, 获得开发支持并成为社区的一部分。

[StarkNet Shamans](https://community.starknet.io/): 加入关注(并参与!) StarkNet的研究讨论。