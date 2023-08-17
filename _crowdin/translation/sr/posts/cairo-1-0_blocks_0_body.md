### TL;DR

* Cairo 1.0 is the first major release following the [introduction of Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209) two years ago
* Cairo 1.0 will give developers a safer, simpler, more usable programming language
* At the heart of Cairo 1.0 will be **Sierra**, an intermediary representation layer that promises greater long term stability for Cairo programs
* Sierra advances Cairo to serve in a permissionless network:\
  - **Protecting the network**: it allows more robust DoS protection\
  - **Protecting the user**: it allows Ethereum-grade censorship resistanceCairo 1.0 will effect StarkNet in many ways. It will also effect the [Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). We will post more information about Regenesis in the coming weeks.

### Introduction

In 2020 we released Cairo, a Turing-complete programming language, and took a big step towards supporting verifiable computation using STARKs. Today, we announce **Cairo 1.0**, the biggest advancement of Cairo to date. It will introduce an improved language, with features that will enhance usability, safety and convenience. It is designed to support StarkNet’s requirements as a permissionless network, allowing the protocol to become simpler and safer.\
The development is already ongoing, and we expect the first release to happen soon.

In this post we will describe the journey of Cairo so far and share details on the upcoming features.

### The Cairo Journey

Until 2020, niche knowledge was needed to build STARK-provable programs for general computation. It was only possible for those who understood the complex math behind STARKs. Specifically, for every business logic, i.e. every computation, one needed to generate an Algebraic Intermediate Representation (AIR) — a set of polynomial constraints that represents the specific computation.

Cairo was born out of the realization that verifiable computation should be made available to developers everywhere. Cairo makes it possible for developers to harness the power of STARKs.

The developer community has since seized on Cairo to build enthusiastically. Everything in the thriving StarkNet ecosystem today is based on Cairo. Between [StarkNet](https://starkware.co/starknet/) and [StarkEx](https://starkware.co/starkex/), Cairo-powered applications have processed over 220M transactions, minted more than 65M NFTs, and handled $700B worth of trades, all settled on Ethereum.

While Cairo made STARKs accessible, it was originally designed as an assembly language, and as such it was written as a low level language.

![An example for the early programs that were written in Cairo](/assets/cairocode_01.png "An example for the early programs that were written in Cairo")

Prompted by feedback from developers and the rise of [StarkNet](https://starkware.co/starknet/), we gradually made Cairo more expressive and more developer-friendly.

![An example from the ERC-20 Cairo contract demonstrating support of variables, if statements, errors, and UINT256 library](/assets/cairocode_02.png "An example from the ERC-20 Cairo contract demonstrating support of variables, if statements, errors, and UINT256 library")

But we soon concluded that it is time to take a big leap forward and, instead of incremental improvements to Cairo, go for a bolder transformation.

### Cairo 1.0

For Cairo 1.0 we’ve built a whole new compiler from the ground up, which will provide developers with safety features, and will allow them to write contracts in a simpler and more expressive way.

#### Introducing Sierra: ensuring every Cairo run can be proven

The main addition in Cairo 1.0 is Sierra (**S**afe **I**nt**e**rmediate **R**ep**r**esent**a**tion). Sierra constitutes a new intermediate representation layer between Cairo 1.0 and Cairo byte code. Sierra’s goal is to ensure that every Cairo run — i.e. a Cairo program and its input — can be proven (see more below).

Sierra promises Cairo devs better future-proof code. Further stability is provided by the fact that StarkNet contracts won’t need recompiling in the case of improvements to the underlying system (e.g., CPU AIR architecture changes, improvements of the final translation from Sierra to Cairo byte code).

**Proving every Cairo run.** In old Cairo, a Cairo run can result in three cases — TRUE, FALSE, or failure. Failed runs can’t be proven. Sierra, ensures that a Cairo run will never fail, and can only result in TRUE or FALSE. This in turn, ensures that every Cairo run can be proven.

This introduction of Sierra has important implications for StarkNet as a permissionless network. Sierra ensures that even reverted transactions can be included in StarkNet blocks. This property will allow the StarkNet protocol to remain lean and simple without the need to add complex crypto-economic mechanisms.\
Two meaningful examples:

1. Sequencers will be able to collect fees on reverted transactions, allowing StarkNet to prevent Sequencer DoS in a well-established manner.
2. Implementing forced L1 transactions will be possible, allowing StarkNet to inherit the full censorship-resistance of Ethereum.

### **Language Features**

Cairo 1.0 will offer many improvements to the programming language itself. Not everything listed below will be part of the first release, but it is part of the roadmap.

#### **Improved syntax**

* No more *local* and *tempvar*. We now only need *let* to rule them all variables.
* Improved *if* statements syntax

```python
#Old
if cond != 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
if cond { x = x + 1; }
```

#### **Type safety guarantees**

The compiler will use strong typing to improve the security of the code. For example:

* Pointers will always point to initialized memory.
* Dictionaries will always be squashed, as opposed to leaving the responsibility to call squash_dict to the programmer.

#### **Easier to use language constructs**

For example:

* For loops

```
let sum = 0
for x in iter {
  sum = sum + x;
}
```

* Boolean expressions
* Integers (with regular integer division 👯)
* Overflow protection for the relevant types
* Boolean conditions

```
#Old
If cond1:
  if cond2:
       # Some code
  else if cond3:
       # Same code
__________________________________
#New
If cond1 && (cond2 || cond3) { … }
```

#### **A fully fledged type system**

* Abstract data types (i.e. Rust-like enum)

```
enum Option<T> {
 Some: T,
 None,
}
match result {
 Some(r) => {..},
 None => {..},
}
```

* Traits

```
trait Add<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // Evaluated to 5 of type Uint256.
```

#### **More intuitive libraries**

(e.g. dict, arrays)

* Dict<Uint256, MyStruct>;
* Array<MyOtherStruct>;

#### **More optimized code**

No need to explicitly state allocation of local variables — auto detected and done automatically.

#### **Better compiler integration**

Enabling better IDE support, package management and better facilitation of community contributions.

### **Conclusion**

Two years after Cairo was first used in production, we are developing Cairo 1.0, which will deliver improved expressibility, security, and syntax. It will take a large stride forward, allowing developers to more easily write their StarkNet contracts.

In another post, coming soon, we will share more details on how Cairo 1.0 will effect StarkNet’s regenesis, and how developers should prepare for its release.