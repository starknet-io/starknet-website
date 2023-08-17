### 引发性的前期时间

Alpha 4今天在戈尔利获释。 这个版本是Mainnet版本的候选版本，如果一切按照计划进行，将在本月底之前在 Mainnet上部署。

Alpha 4遵循了Alpha 3的包装释放特征，其中除其他外包括： 开罗编译时间的改进，合同构造者，以及更多的(见[完整版注释](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0))。

注意：这仍然是一个 Alpha 版本——用于在Mainnet部署时部署您的合同 请遵循新应用程式的[在船上](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)指南。

### 新功能

虽然这个版本的主要重点是为Mainnet部署做好准备，但它也包括几个新功能：

#### 获取此合同的地址

合约现在可以通过新的 syscall \`get_contract_address\`获取他们自己的地址。 最后，我们可以结束自私合同。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP selfie合同： 2021年9月21日至11月</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">November 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### 块哈希值

区块现在是通过散列而不是Id来识别的。 这是在我们最近向交易哈希转换之后进行的。 所有API都已相应更新。 我们很快将发布该系统的全部技术文件，其中还将包括区块结构的具体规定。

#### 合同地址

此版本对合同地址的计算方式作了修改。 地址是调用地址上的Pedersen 散列，一个盐(随机或由部署者选择)。 合同代码和构造商参数的散列都附有一个前缀。

```
哈希(PREFIX, caller_address, Salt, contract_hash, ctr_args_hash)
```

在当前版本中，调用地址总是等于0，但在未来版本中，这将使得能够直接根据现有合同部署合同。

请注意，这一计划与CREATE2非常相似。

[查看完整版本便笺](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### 令牌桥接

Token桥是StarkNet基础设施的一个关键部分。 它们允许向StarkNet和从StarkNet转移资金。 这座桥在出版时尚未部署。 但应该在几天内提供——连同关于其功能和用途的全部文件。 需要注意的一件事是，桥使用[L1<>L2 消息](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)协议。 因此，它提供了短暂的退约时间——一旦退约被包括在一批退约中并在L1上被接受。 L1上的用户可以即时获得资金。

这是代币桥的第一个版本，我们很想从它上的生态系统得到反馈。

### 加入 StarkNet

加入日益壮大的StarkNet社区的时机从未好过。 您可以在[StarkNet discord](https://discord.gg/uJ9HZTUk2Y)中加入对话，参加[在线讲习班](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)或者使用[教程中的一个](https://www.cairo-lang.org/docs/hello_starknet/index.html)来开始构建您自己的第一个应用程序。

**更新 (Nov. 2021):**StarkNet Alpha 在Ethereum Mainnet上