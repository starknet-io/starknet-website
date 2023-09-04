### TL;DR

* Starknet Alpha 0.7.0 发布给 Goerli；充满改进
* 现在可以使用代理升级模式升级合约
* 合约现在可以发出事件
* 支持期待已久的区块编号和区块时间戳系统调用

### 介绍

我们很高兴发布 Alpha 0.7.0，该版本包含新功能和改进。 过去几个月对 Starknet 最好的刺激之一是社区越来越多地参与塑造 Starknet 的未来。 该版本解决了社区的一些迫切需求。

#### 命名约定的变更

细心的读者可能已经注意到，之前的 Starknet Alpha 版本被命名为 Alpha 4，而我们现在发布的是 Alpha 0.7.0。 我们决定省略专用的 Alpha 版本号，而仅依赖关联的 cairo-lang 版本。

### 新功能

#### 合约可升级性

OpenZeppelin 的[代理升级模式](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)现在完全支持 Starknet 中的合约升级。 代理模式是通过以太坊实现合约升级的常用方法。 Alpha 0.7.0 在 Starknet 上启用了这种模式。

我们制作了一个简短的[教程](https://starknet.io/docs/hello_starknet/default_entrypoint.html)来演示该模式的基本实现，并且 OpenZeppelin 已经在努力实现代理模式的标准合约；参见[原型](https://github.com/OpenZeppelin/cairo-contracts/pull/129)。

#### 区块号和区块时间戳

Alpha 0.7.0 添加了许多开发人员一直要求的两个新系统调用。 这些调用允许合约访问区块号和区块时间戳。 块编号返回当前执行的块的编号。 块时间戳返回 Sequencer 在创建块时给出的时间戳。

您可以在[教程](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp)中查看如何使用这些功能的示例。

#### 事件

惊喜！ 计划在未来版本中使用的一项功能已潜入早期版本中。

Starknet 合约现在支持定义和发出事件，允许它们公开执行信息以供链下应用程序使用。 以太坊开发人员会发现语义和语法与 Solidity 非常相似。 您可以阅读[文档](https://starknet.io/documentation/events/)，或按照[教程](https://starknet.io/docs/hello_starknet/events.html)进行操作，其中解释了此功能。

#### 删除了 %builtins 指令

Starknet 合约中不再需要 %builtin 指令。 此更改是在[Starknet Shamans](https://community.starknet.io/)上关于[合约可扩展性模式](https://community.starknet.io/t/contract-extensibility-pattern/210)社区讨论之后做出的。 它显着简化了这种可扩展性模式的可用性。

例如，以下合同将从：

```
%lang starknet

# 这是“%builtins”指令。
# 不再需要了。
%builtins range_check

@view
func add(x : 毛毡, y : 毛毡) -> (res : 毛毡):
return (res=x + y)
end
```

对此：

```
%lang starknet
@view
func add(x : 毛毡, y : 毛毡) -> (res : 毛毡):
return (res=x + y)
end
```

您可以查看使用新模式的[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)标准合约。

#### 外部函数支持结构数组

Alpha 0.7.0 支持在外部函数中传递和返回结构数组。 这一附加功能使帐户合约能够更好地支持[多重调用](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751)。

多重调用是帐户抽象的一项强大功能，允许帐户在单笔交易中进行多次调用。 一个明显的用例是创建**单笔交易**，该交易调用 grant，然后调用 transferFrom。

我们期待看到社区如何利用它。

#### Starknet CLI 的改进

**支持待处理块**

[待处理块](https://starknet.io/documentation/block-structure-and-hash/#pending_block)[在上一个次要版本 (v0.6.2) 中引入了](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)，并提供了更快的交易确认。 此版本支持通过 Starknet CLI 查询这些块。

要使用它，在每个以 block_number 作为参数的 CLI 命令（contract_call/get_block/get_code/get_storage_at）中，我们可以通过指定 block_number=pending 来查询 Starknet 的待处理块。

**支持账户合约**

Starknet使用账户抽象，即所有账户都以智能合约的形式实现。 账户合约的首次实现是由[Argent](https://github.com/argentlabs/argent-contracts-starknet)和[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)完成的，但我们预计还会有更多的实现。

在 Starknet 中，所有交易都必须通过账户合约，并且 CLI 现在允许直接通过账户合约与 Starknet Alpha 进行交互。 请参阅[教程](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)了解如何设置。

上个月，类似的功能也被添加到[Starknet.py](https://github.com/software-mansion/starknet.py/)和[Nile](https://github.com/OpenZeppelin/nile)中。

#### 测试框架中的 L1<>L2 消息传递

Alpha 0.7.0 引入了邮递员。 Postman 使开发人员能够使用测试框架来测试更复杂的流程。

在较高层面上，它嘲笑 Starknet 定序器将消息从 L1 传递到 L2 以及从 L2 传递到 L1 的责任。 它确保通过 Solidity 消息传递合约发送的消息将出现在目标 Starknet 合约中，并且从 Starknet 合约发送的消息将出现在 Solidity 消息传递合约中。

#### 以及更多功能

Alpha 0.7.0 提供了更多功能和更改，例如在数学公共库中添加了高效的平方根函数。 完整列表显示在[变更日志](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0)中。

### 下一步？

初始[费用机制](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)支持将在几周内发布，作为 Starknet 的子版本。

### 更多信息？

[starknet.io](https://starknet.io/)：所有 Starknet 信息、教程和更新。

[Starknet Discord](https://discord.gg/uJ9HZTUk2Y)：加入以获得问题的答案，获得开发支持并成为社区的一部分。

[Starknet Shamans](https://community.starknet.io/)：加入关注（并参与！）Starknet 研究讨论。