### TL;DR

* We are sharing a detailed plan for Regenesis, which has been shaped by extensive discussions with the StarkNet community. Special thanks to Kuba@SWM.
* Regenesis will follow the release of Cairo 1.0, making the system more secure by allowing simpler and safer StarkNet contracts
* Users should be prepared to update their wallet during the transition phase
* Developers will be required to port their contracts to Cairo 1.0

### Introduction

StarkNet Alpha is progressing towards Regenesis, an important step towards production. In this update we want to share more details on the main motivation for Regenesis — [Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0) — and to start explaining what it will require from users and developers. After Regenesis, StarkNet will work only with Cairo 1.0-based contracts, and will start from a new genesis block with the existing state.

What will Regenesis require from users? A simple update of their wallet. What will it require from the builders of StarkNet’s dapps? Porting their contracts to Cairo 1.0, and following a simple upgrade guideline. Specifically, there will be no restart from a clean state and we will stay with the same StarkNet instance, meaning there will be no need for a migration**.**

The Regenesis plan is to fully preserve the state of applications and to not incur any downtime to the applications. Thus, applications that follow the guidelines we’ll provide will be able to launch on StarkNet Alpha Mainnet right away without any disturbance to their operation and their users during the Regenesis process.We are committed to work with the community and provide all the support needed to make this process as smooth as possible.

We are taking this direction as a result of extensive discussions with the community, which included an important suggestion by the Software Mansion team.

### Why Regenesis?

#### Cairo 1.0 and Sierra

The main motivation for Regenesis is capitalizing on the new possibilities brought about by Cairo 1.0 — namely sequencers DOS protection, censorship resistance and gas metering, which are essential for StarkNet as a decentralized network.

Cairo 1.0 will ensure that every transaction can be proven. This will allow StarkNet to include reverted transactions in blocks, and generate a proof of their execution. This mechanism will allow sequencers to be paid on the execution of reverted transactions, increasing DOS protection against malicious actors. In addition, Cairo 1.0 will support gas metering, which will enable StarkNet to transition to a more intuitive fee market. Lastly, this will allow StarkNet to introduce forced transactions from L1, and will enhance the censorship resistance capabilities of the network.

To reap these benefits, Cairo v0 and Cairo 1.0 contracts cannot be mixed. Incorrect statements can’t be proven to be incorrect, nor can gas tracking happen, if we have bits of Cairo v0 contracts. To that end, we will need to phase out Cairo v0 code completely from StarkNet state, ergo Regenesis.

**After Regenesis, we will have a Starknet system fully based on Cairo 1.0.**

#### Simplifying the code and protocol

StarkNet, while still in Alpha, already underwent many changes. Every version so far altered the StarkNet OS, blocks and transactions structure. This caused some of the code to be obsolete. Yet, full nodes and infrastructure providers (such as indexers and state explorers) need to be aware, and implement, all the past behaviors of StarkNet Alpha versions in order to sync with the state trustlessly. Without Regenesis, this burden might be a major deterrent for developers who would consider building such services for StarkNet.

Therefore, before going to production, and as a preparation to a decentralized world with many infrastructure tools implementations, we intend to reduce the protocol’s complexity. We would achieve this by not requiring future infrastructure to execute any StarkNet 0.x code, and mark the first block after the transition period as the genesis point.

### Wen Regenesis? The overall timeline

Regenesis will follow the release of Cairo 1.0, which is planned to take place by the end of 2022. During Q1 of 2023, StarkNet will be updated to support Cairo 1.0, and we aim to migrate to a fully Cairo 1.0-based network by the end of Q1.

**Users and applications will have to make the transition during this period.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### So What Do I Need to Know?

Application developers need to be aware of the following aspects around Regenesis:

1. Ensure your contract is ready for the upgrade. The full technicalities of the plan are shared in the [StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Once the details will be finalized, we will share a concise guideline.
2. Ensure you are ready to port your code to Cairo 1.0. See next section for all the latest details.

#### Porting Your Contract to Cairo 1.0

Cairo 1.0 holds great promise for StarkNet developers. An improvement on existing Cairo that will be safer, better and easier for writing contracts, with improved syntax, fully fledged type system (native uint256 anyone?) and more. Developers will be required to port their existing StarkNet contracts to Cairo 1.0 syntax. However, as the logic and code structure will stay the same, this effort is expected to be negligible compared to the effort it took to develop the app in the first place.

In this context, it is worthwhile to note that you may choose to re-audit the Cairo 1.0 version of your app. If your app was already audited in the past, the re-audit process will be significantly cheaper and more straightforward, since the auditors are already familiar with your logic.

We will release all documentation around Cairo 1.0, along with tutorials and workshops during Q4 of 2022.

### I’m a StarkNet User. What Should I Do?

As a user, you will likely have to take a few actions during Regenesis. At the very least, you’ll have to upgrade your account contract. Not doing that over the (few months long) transition period will result in the loss of your account. Depending on the upgrade path chosen by the developers of the StarkNet apps you are using, you may have to take extra steps.

We remind everyone that StarkNet is still in Alpha phase, and users are required to stay attentive to communications of StarkNet and apps they are using. It is your responsibility to make sure you upgrade early to the new system. *Being an early adopter is not always easy, and we count on you to do your part!*

### To Conclude

Cairo 1.0 is just around the corner, providing many exciting benefits and improvements for StarkNet and its developers. To reap these, a Regenesis event of the network is needed. Luckily, we have a design in mind which makes this process minimally disruptive — completely seamless for users, and quite simple for applications.

We urge you to participate in the [community discussion](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080) and share your comments and concerns, as well as stay up to date regarding the steps you’ll need to take as an application developer on StarkNet.