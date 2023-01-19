---
id: papyrus
title: "Papyrus: An Open-Source StarkNet Full Node"
image: /assets/cleanshot-2023-01-17-at-14.00.56-2x.png
category: governance
topic: cairo
short_desc: >-
  Papyrus is a Rust implementation of a StarkNet full node 
  It will provide foundations for the new StarkNet Sequencer, which will dramatically enhance StarkNet’s throughput
---

Papyrus: An Open-Source StarkNet Full Node Papyrus will be a key component of the decentralized StarkNet infrastructure TL;DR

Papyrus is a Rust implementation of a StarkNet full node It will provide foundations for the new StarkNet Sequencer, which will dramatically enhance StarkNet’s throughput Papyrus will help advance performance and decentralization. Now that StarkNet has achieved excellent usability, these are its major development priorities Introduction Today we are introducing Papyrus, a Rust implementation of a StarkNet full node, which will help pave the way to mass use of StarkNet.

The Papyrus full node will track StarkNet’s state as it evolves over time and allow users and developers to query this state via StarkNet’s JSON-RPC.

Papyrus will provide the foundations for the new StarkNet Sequencer, which will dramatically enhance StarkNet’s throughput in a few months time. Papyrus joins other StarkNet full nodes — Pathfinder and Juno — which are responsible for syncing with and maintaining the StarkNet state.

In line with our ongoing move to open-source the StarkNet stack, Papyrus is open source under the Apache 2.0 license.

Papyrus — Foundations for an Optimized Sequencer Early on we stated that the phases of StarkNet development are: (i) Functionality and usability first, followed by (ii) scale and performance, and, finally, (iii) decentralization. StarkNet has achieved excellent usability, and now system performance is the main priority, with decentralization picking up steam.

Improving the system’s performance is being addressed by enhancing the performance of the Sequencer, which is responsible for StarkNet block production. The Sequencer is the “machine” that orders and executes transactions after they are submitted.

Papyrus will provide the StarkNet Sequencer with an efficient storage layer, which will help to improve throughput. Firstly, this means that the sequencer will maintain a local DB rather than a cloud-based DB. Additionally, Papyrus will store a flat key/value storage, meaning, it will interact directly with the state, rather than reaching it through Merkle-Patricia paths.

Strengthening and Decentralizing the StarkNet Stack Currently, there are two teams developing a StarkNet full node. There is s Pathfinder by Equilibrium, implemented in Rust, and Juno by Nethermind, who are working towards the first official version of their Golang implementation.

Papyrus today joins this healthy mix and furthers decentralization and redundancy. Adding another full node and making it open source helps to provide the variety of client implementations, which is an important indicator of the strength of a decentralized network and for cementing its status as a public good.

Current Release and Future Plans The current version allows you to sync with the state of StarkNet and get access to StarkNet’s entire history. Currently, the JSON-RPC spec is only partially supported, you can track progress here.

Papyrus is being open sourced now, pending full release for public use within a few months. In addition to working on full compatibility with the JSON-RPC spec, the Papyrus team, alongside Pathfinder and Juno, will work to form the foundation of the StarkNet P2P layer. Having different nodes being able to communicate and sync through the P2P layer is a big leap towards a decentralized StarkNet. Furthermore, the ability to sync from peers (as opposed to the situation today where each node communicates with a centralized API) should drastically improve sync time.

To summarize, Papyrus is the third full node to join the StarkNet ecosystem. It is released under an open source license (Apache 2.0) and will form a crucial part of the infrastructure of the decentralized StarkNet.