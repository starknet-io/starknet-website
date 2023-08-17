### TL;DR

StarkNet Alpha 1 has two new features:

* L1<>L2 interaction
* On-chain data

### Introduction

At the beginning of the year, we announced that StarkWare is building [StarkNet](https://starkware.co/product/starknet/), a permissionless decentralized STARK-based ZK-Rollup¹ operating as an L2 network over Ethereum. StarkNet allows any dApp to achieve unlimited scale for its computation — without compromising Ethereum’s composability and security.

Last month, [StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95) was released to the world. For the first time, developers are able to [write](https://kobi.one/2021/07/14/stardrop.html) any smart contract and deploy it, permissionlessly, to a ZK-Rollup. Users are able to send transactions to the network, Ethereum-style.

Today we are releasing a new version; Alpha 1. We are releasing features on a rolling basis to allow developers to interact with new features as soon as possible. We anticipate that this will tighten the feedback cycle and allow community feedback to quickly improve StarkNet.

### **Alpha 1 Features**

#### L1<>L2 Interaction

Alpha 1 includes an L1<>L2 messaging protocol, which allows developers to implement seamless transaction flows between L1 and L2. Developers can now send messages from contracts on L1 to contracts on L2 and vice versa.

One of the beauties of ZK-Rollups is that state updates are final, without any delay. This means that messages that were sent from L2 to L1 can be immediately forwarded to their destination contract. This opens the way to build apps that are truly interoperable between the layers.

Interested in trying it out? The best way to get started is to follow the tutorial [here](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Our L1<>L2 protocol owes much to other L2s (specifically Optimism and Arbitrum) whose previous work in this area influenced our design.

#### On-Chain Data-Availability

StarkNet’s state update is now also published as on-chain data on Ethereum. This allows any user to fully construct StarkNet’s state from L1 data. Each state update includes the state diff, i.e., what storage was changed and its new value.

Here also, ZK-Rollup shows its strength. In contrast to Optimistic Rollups, in which the full transactions’ data must be sent on-chain, in ZK-Rollups, only the absolute minimum data required to derive the state diff is sent on-chain.

Consider a prime example, price oracles. A transaction to update a price oracle usually contains multiple transactions but updates only one storage cell; the pair’s price. The on-chain data required for a state update containing price oracle transactions in an Optimistic Rollup grows linearly with the number of updates, while in a ZK-Rollup, it will always be a single storage update.

Moreover, compression algorithms can be applied to the published data, and their validity will be attested to by the STARK proof, further reducing the on-chain footprint. Future versions of StarkNet will introduce innovative optimizations in this area.

#### StarkNet OS

We are also releasing the StarkNet Operating System code. The StarkNet OS is the Cairo program that runs StarkNet. The OS handles everything which is done on the network — contract deployment, transaction execution, L1<>L2 messages and more. The StarkNet OS architecture and design will be explained in detail in a separate post.

#### Extra Features

Not only has StarkNet Alpha evolved, we are also constantly improving Cairo. For a full description of the new features in Cairo v0.3.0, check the release notes [here](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### The Ecosystem is Growing

Aside from the constant work on StarkNet Core, the ecosystem’s work on StarkNet is continuously expanding. We are thrilled to be collaborating with some of the most talented teams from the ecosystem.

Fermion, StarkNet’s first Full Node effort, is developed by the Erigon (formerly TurboGeth) team. Based on their enormous knowledge gained from working on Ethereum, we are able to work with them to build a powerful Full Node, which incorporates many lessons learned while building for Ethereum, while benefiting from the scale offered by STARK proofs.

Nethermind are working on Warp, a compiler from EVM to Cairo. Bound by our culture of presenting new tools only once they are ready, all we can say is, expect exciting news on this front very soon! We can say, though, that they are moving at warp speed.

### What the Future Holds

The next stop on our road to StarkNet will be composability — allowing contracts to interact with one another. Stay tuned.

[StarkWare](https://starkware.co/)

1 As we’ve said previously, ZK-Rollup is by now a commonly used term, yet very misleading: these solutions do not (currently) offer zero-knowledge.

**Update (Nov. 2021):** StarkNet Alpha is live on Ethereum Mainnet