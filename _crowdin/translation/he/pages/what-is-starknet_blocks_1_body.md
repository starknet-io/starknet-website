## I﻿ntroduction

Starknet is a Validity Rollup Layer 2. It provides high throughput, low gas costs, and retains Ethereum Layer 1 levels of security

Given a sudoku puzzle, verifying a solution is easier than solving from scratch. If our goal is to convince people of the statement “this puzzle has been solved”, we can save a lot of computation by having one person compute a solution and then propagate it for others to verify. In this strategy, each computation of a solution becomes a one-time event which does not require replication by society. In a similar vein, Starknet scales Ethereum by replacing heavy L1 computation with lighter (hence cheaper!) L1 verification using STARK proofs computed off-chain.

## H﻿ow it works

With the above analogy in mind, the time is ripe for some jargon. Starknet is a permissionless Validity-Rollup (also known as a “ZK-Rollup”) that supports general computation and currently operates in production as an L2 network over Ethereum. The eventual L1 security of Starknet is ensured by its use of the safest and most scalable cryptographic proof system – [STARK](https://starkware.co/stark/).

Starknet contracts are (for the most part) written in the Cairo language – A Turing complete programming language designed for STARK proofs.