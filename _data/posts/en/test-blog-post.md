---
id: hello-world
title: hello world
image: /assets/cleanshot-2023-01-17-at-14.01.12-2x.png
category: engineering
topic: events
short_desc: StarkNet launched on Mainnet almost a year ago. We started building
  StarkNet by focusing on functionality. Now, we shift the focus to improving
  performance with a series of steps that will help enhance the StarkNet
  experience.
---
# Cairo 1.0 is Here

## Or, as the ancient Egyptians would say, ‘Hieroglyphics just got a whole lot easier’

## TL;DR

* Cairo 1.0 first release is here!
* Developers can start writing and testing Cairo 1.0 programs
* Feature parity with the older version of Cairo will be reached in the coming weeks
* Support for StarkNet contracts will be added in the upcoming StarkNet Alpha version

## Background

We are excited to announce that the first public version of Cairo 1.0 is now available. This marks a major milestone in the evolution of Cairo, which was first introduced in 2020 as a Turing-complete programming language for efficiently writing STARK-provable programs. Cairo 1.0 is a Rust-like high-level language. Like Rust, it is intended to allow developers to easily write code that is efficient and safe.

Since its inception, Cairo has been used to build Layer-2 applications that have [handled](https://dashboard.starkware.co/starkex) over $790 billion worth of trades, processed over 300 million transactions and minted more than 90 million NFTs, all performed off-chain and settled on Ethereum with the mathematical integrity guaranteed by STARK proofs. Cairo became the 4th most used programming language in the blockchain [ecosystem](https://defillama.com/languages) at large. With the release of Cairo 1.0, we aim to make the language even more accessible and user-friendly while also introducing new features that enhance safety and convenience.

One of the most significant changes in Cairo 1.0 is the syntax. We have taken inspiration from **Rust** to create a more developer-friendly language that is easier to read and write. The new version of Cairo allows writing safer code (strongly typed, ownership and borrowing, etc.), while also being more expressive.

Cairo 1.0 also introduces Sierra, a new intermediate representation that ensures **every** Cairo run can be proven. This makes Cairo 1.0 particularly well-suited for use in a permissionless network like StarkNet, where it can provide robust DoS protection and censorship resistance. You can read more about Sierra in our [previous](https://medium.com/starkware/cairo-1-0-aa96eefb19a0) post.

# First Taste!