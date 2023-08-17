### TL;DR

* Cairo 1.0 first release is here!
* Developers can start writing and testing Cairo 1.0 programs
* Feature parity with the older version of Cairo will be reached in the coming weeks
* Support for StarkNet contracts will be added in the upcoming StarkNet Alpha version

### Background

We are excited to announce that the first public version of Cairo 1.0 is now available. This marks a major milestone in the evolution of Cairo, which was first introduced in 2020 as a Turing-complete programming language for efficiently writing STARK-provable programs. Cairo 1.0 is a Rust-like high-level language. Like Rust, it is intended to allow developers to easily write code that is efficient and safe.

Since its inception, Cairo has been used to build Layer-2 applications that have [handled](https://dashboard.starkware.co/starkex) over $790 billion worth of trades, processed over 300 million transactions and minted more than 90 million NFTs, all performed off-chain and settled on Ethereum with the mathematical integrity guaranteed by STARK proofs. Cairo became the 4th most used programming language in the blockchain [ecosystem](https://defillama.com/languages) at large. With the release of Cairo 1.0, we aim to make the language even more accessible and user-friendly while also introducing new features that enhance safety and convenience.

One of the most significant changes in Cairo 1.0 is the syntax. We have taken inspiration from **Rust** to create a more developer-friendly language that is easier to read and write. The new version of Cairo allows writing safer code (strongly typed, ownership and borrowing, etc.), while also being more expressive.

Cairo 1.0 also introduces Sierra, a new intermediate representation that ensures **every** Cairo run can be proven. This makes Cairo 1.0 particularly well-suited for use in a permissionless network like StarkNet, where it can provide robust DoS protection and censorship resistance. You can read more about Sierra in our [previous](https://medium.com/starkware/cairo-1-0-aa96eefb19a0) post.

## First taste!

### What can you do today?

Developers can start writing, compiling, and testing Cairo 1.0 programs! We encourage developers to start experimenting with Cairo 1.0 and getting accustomed to the new syntax and features.

Since Cairo 1.0 is still actively developed, and new features are constantly added, check out the [Cairo repository](https://github.com/starkware-libs/cairo/) for the latest updates.

### What's next?

At the moment, Cairo 1.0 is still missing some of the features supported in the older version of Cairo ([see this table for details](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Our next milestone, expected in the next few weeks, will provide Cairo 1.0 feature parity with the older version. You can track the progress toward that milestone [here](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Starknet support

Writing StarkNet contracts in Cairo 1.0 is supported (although certain features are still missing). However, StarkNet does not yet support the deployment and execution of Cairo 1.0 contracts. StarkNet Alpha V0.11.0, planned in the upcoming weeks, will introduce the ability to deploy and run Cairo 1.0 contracts. The upgrade to v0.11.0 will mark the beginning of the Transition Period towards a system that runs only Cairo 1.0 contracts. This Transition Period will end with the [Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), expected a few months later.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Let's build!

The goal of StarkNet is to exponentially scale Ethereum using the mathematical integrity of STARKs, and the goal of Cairo is to make this exponential scale accessible to developers. Accessibility means a programming language that is efficient, easy to read and write, and safe to use. We hope the release of Cairo 1.0 will inspire even more developers to join StarkNet and scale Ethereum to meet global demand.