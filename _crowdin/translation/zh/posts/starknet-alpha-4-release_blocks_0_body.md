### 激动人心的时刻即将到来

Alpha 4 今天在 Goerli 发布。 该版本是主网发布候选版本，如果一切按计划进行，将在本月底部署在主网上。

Alpha 4 继 Alpha 3 的功能丰富的版本之后，其中包括开罗编译时间、合约构造函数等方面的改进（请参阅 [完整发行说明](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)）。

需要注意的是：这仍然是 Alpha 版本 - 要在主网上部署您的合约，请遵循新应用程序的 [onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu) 指南。

### 新功能

尽管此版本的主要重点是为主网部署做好准备，但它还包括一些新功能：

#### 获取此合约的地址

合约现在可以通过新的系统调用“get_contract_address”获取自己的地址。 我们终于可以终止自拍合同了。

RIP 自拍合同：2021 年 9 月至 2021 年 11 月

— Francesco Ceccon (@ceccon_me) [2021 年 11 月 10 日](https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw)

#### 区块哈希

现在通过哈希值而不是 ID 来识别块。 这是我们最近向交易哈希的过渡。 所有 API 均已相应更新。 我们很快将发布系统的完整技术文档，其中还将包括块结构的规范。

#### 合约地址

此版本对合约地址的计算方式进行了更改。 该地址是调用者地址上的 Pedersen 哈希值、盐（随机或由部署者选择）、合约代码哈希值以及构造函数参数的哈希值，所有这些都附加了前缀。



在当前版本中，调用者地址始终等于 0，但在未来版本中，这将允许直接从现有合约部署合约。

请注意，此方案与 CREATE2 非常相似。

[查看完整的发行说明](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### 令牌桥

令牌桥是 Starknet 基础设施的重要组成部分。 它们允许在 Starknet 之间转移资金。 该桥在发布时尚未部署，但应该在几天内可用 - 以及其功能和用法的完整文档。 需要注意的一件事是，网桥使用 [L1<>L2 消息传递](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html) 协议。 因此，它提款时间短——一旦提款被纳入批量并在 L1 上接受，用户就可以立即在 L1 上使用资金。

这是令牌桥的第一个版本，我们很乐意获得生态系统的反馈。

### 加入星网

现在是加入不断壮大的 Starknet 社区的最佳时机。 您可以加入 [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)中的对话，参加 [在线研讨会](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)，或使用 [教程](https://www.cairo-lang.org/docs/hello_starknet/index.html) 中的一个开始构建您的第一个自己的应用程序。

更新（2021 年 11 月）：Starknet Alpha 在以太坊主网上上线