### TL; DR

* *StarkNet Alpha는 11월까지 Mainnet Ethereum에서 출시됩니다.*
* 지금이 바로 StarkNet을 구축할 때입니다.

### 짧은 역사

우리는 연초에[StarkNet](https://starkware.co/product/starknet/)에 대한 비전을 발표했습니다. L1 보안, 무허가 상호 작용 및 분산화를 유지하면서 Ethereum에 대규모 확장성을 제공하는 것입니다.\
6월 공개 테스트넷에서**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**출시했습니다. 이 버전은 완전히 무허가 일반 계산 스마트 계약을 지원했습니다. 이후 두 번 업그레이드했습니다. 먼저**Alpha 1**—[L1<>L2 메시징 및 온체인 데이터 제공](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), 그리고**Alpha 2**—[구성 가능성](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc)지원.

StarkNet Alpha 2는 이제 L1 및 L2 계약이 서로 상호 작용할 수 있는 기능을 통해 Ethereum과 같은 상태에서 일반 계산의 구성 가능한 스마트 계약을 지원합니다. 더 읽어보기[여기](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### 메인넷의 StarkNet Alpha는 무엇입니까?

메인넷의 StarkNet Alpha는 Goerli 퍼블릭 테스트넷에서 현재 사용 가능한 기능과 유사한 기능을 지원합니다.

#### **뭘 기대 할까**

StarkNet은 아직 개발 중이기 때문에 단계적으로 기능을 도입하고 모든 단계에서 개발자의 기대치를 충족하고자 합니다. 우리가 강조하고 싶은 두 가지 특히 중요한 측면은 다음과 같습니다.

* **허가된 스마트 계약 배포**: Optimistic Rollup 동료가 소개한 현명한 플레이북을 따를 것입니다.*허가된*계약 배포로 시작합니다. 이 초기 화이트리스트에 귀하의 스마트 계약 포함을 요청하는 방법을 지정하는 프로토콜은 앞으로 몇 주 안에 게시될 것입니다.
* **이전 버전과의 호환성에 대한 보장 없음**: StarkNet Alpha에서 StarkNet Beta로의 향후 전환에는 상태 재생성이 포함될 것으로 예상됩니다. 네트워크는 블록 0에서 시작하고 응용 프로그램은 계약을 재배포해야 합니다. 또한 개발자와 사용자는 예상되는 StarkNet Beta가 StarkNet Alpha와 역호환되지 않을 수 있다는 점에 유의해야 합니다. 예를 들어 개발자는 계약을 수정해야 할 수 있습니다. 분명히 최소한의 변경으로 애플리케이션을 쉽게 전환할 수 있도록 노력할 것입니다.

#### 추가 단기 기능

테스트넷에서 메인넷으로의 StarkNet Alpha 전환의 일환으로 다음을 수행합니다.

1. 계약에 생성자를 추가합니다.
2. 테스트 프레임워크를 개선합니다.
3. 블록 및 트랜잭션의 경우 ID 사용에서 해시 사용으로 이동하십시오.

공개 테스트넷에서 했던 것처럼 정기적으로 새로운 기능을 계속 배포할 계획입니다. 가까운 시일 내에 다음과 같은 업그레이드를 계획하고 있습니다.

1. 계정 계약 및 토큰 계약 — DeFi 애플리케이션이 친숙한 방식으로 StarkNet과 상호 작용할 수 있는 길을 열어줍니다.
2. 향상된 계약 기능 — 계약 업그레이드 가능성 및 이벤트 지원.
3. Warp: Nethermind에서 개발한 Solidity-to-Cairo 컴파일러를 사용하면 Solidity 스마트 계약에서 StarkNet 스마트 계약으로 원활하게 전환할 수 있습니다.
4. 이더리움 서명: secp256k1을 통한 ECDSA의 기본 지원을 통해 기존 지갑과 더 쉽게 통합할 수 있습니다.
5. StarkNet 전체 노드: 전체 노드를 통해 사용자는 이더리움 전체 노드와 동등한 하드웨어 요구 사항으로 네트워크에 참여할 수 있습니다.

#### 수수료 메커니즘

계정 계약과 토큰 계약이 StarkNet Alpha에 추가되는 즉시 수수료 메커니즘이 활성화됩니다.

StarkNet에 제출된 모든 거래에는 L1 및 오프체인 비용을 충당하도록 설계된 수수료가 부과됩니다. 수수료는 초기에 ETH로 청구됩니다. 단일 트랜잭션 비용은 StarkNet의 규모가 증가함에 따라 감소할 것입니다(기존의 모든 STARK 기반 시스템의 경우와 마찬가지로). 초기 수수료 메커니즘을 만들 때 우리는 그들이 소비하는 리소스에 따라 거래 가격을 정확하게 책정하는 것보다 단순함을 선호합니다. 시간이 지남에 따라 이 메커니즘이 개선되고 개선될 것으로 기대합니다.

StarkNet을 지속 가능한 네트워크로 만들고 운영자와 개발자에게 인센티브를 제공하기 위해 수수료에서 징수된 수익의 일부는 애플리케이션 개발자와 StarkNet 핵심 개발자에게 분배됩니다.

#### 보안

메인넷에서 StarkNet Alpha의 보안 모델은 테스트넷에서 현재 모델을 따릅니다.

* 모든 상태 전환은 STARK 증명에 의해 뒷받침되므로 유효함을 보장합니다.
* 모든 상태 데이터는 온체인에 게시되므로 상태는 L1에서 완전히 구성할 수 있습니다.
* 단일 시퀀서가 있습니다.
* 네트워크는 시간 지연 없이 업그레이드할 수 있습니다.

### StarkNet 생태계는 성장하고 있습니다

StarkNet을 세계에 공개하자 카이로를 배우고 StarkNet을 통해 개발하는 데 관심이 있는 개발자들이 엄청나게 몰려들었습니다. 그들은 귀중한 피드백을 제공했으며 StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y)에서 활발한 토론을 보는 것은 정말 기뻤습니다.

또한 StarkNet은 StarkWare 팀뿐만 아니라 블록체인 생태계에서 가장 강력한 팀에 의해 개발되고 있습니다.

* Nethermind는 두 가지 프로젝트를 진행하고 있습니다.

1. **[Warp](https://github.com/NethermindEth/warp)**: Solidity to Cairo 컴파일러

2. **[Voyager](https://voyager.online/)**: StarkNet 블록 탐색기

* Open Zeppelin은 StarkNet을 위한[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)구현 작업을 하고 있으며 개발자 환경인[Nile](https://github.com/martriay/nile)작업도 시작했습니다.
* ShardLabs는[StarkNet HardHat 플러그인](https://github.com/Shard-Labs/starknet-hardhat-plugin)과 더 나은 테스트 프레임워크에서 작업하고 있습니다.
* Erigon 팀은 StarkNet(코드명: Fermion)을 지원하기 위해 Ethereum Full Node를 확장하는 작업을 하고 있습니다. 그들은 StarkNet의 핵심 메커니즘을 설계하기 위해 우리와 함께 일하고 있습니다.
* Equilibrium은 Rust에서 StarkNet Full Node 구현 작업을 하고 있습니다.
* 카이로 감사 서비스: 앞으로 몇 개월 동안 ABDK, ConsenSys Diligence, Peckshield 및 Trail of Bits가 카이로 감사를 실시할 예정입니다.
* StarkNet 감사: 우리는 네트워크의 기반을 감사하는 것으로 시작했습니다.

1. **CryptoExperts**Cairo Solidity Verifier의 감사를 수행할 것입니다.
2. 카이로 사양의 공식**LEAN 증명**최근 완료되어[논문](https://arxiv.org/abs/2109.14534)및 GitHub[저장소](https://github.com/starkware-libs/formal-proofs)로 게시되었습니다.

앞으로 몇 달 안에 더 많은 흥미로운 협업이 게시될 예정입니다!

### STARK는 현재 확장 중입니다.

당사의 독립 실행형 확장 SaaS인 StarkEx가 STARK가 이더리움 애플리케이션을 대규모로 확장할 수 있는 방법을 시연했기 때문에 우리는 확신을 가지고 StarkNet Alpha 출시에 접근합니다. 우리는[dYdX](https://dydx.exchange/)(영구 계약),[DeversiFi](https://www.deversifi.com/)(현물 거래 및 결제),[Immutable](https://www.immutable.com/)및[Sorare](https://sorare.com/)(NFT 발행 및 거래)에 대한 StarkEx를 출시했습니다. 우리는 그들의 가스/tx 비용이 100X–200X 감소하여 Validium(오프체인 데이터)에서 약 650 가스/tx, ZK-Rollup의 경우 1100 가스/tx로 감소하는 것을 보았습니다.

지금까지 StarkEx는 800억 달러의 거래와 2,700만 건 이상의 거래를 해결했으며, 이는 다른 어떤 L2 솔루션보다 훨씬 뛰어납니다.

### 지금 행동하세요

차세대 dApp 또는 유용한 개발자 도구를 구축하여 성장하는 StarkNet 생태계에 합류하기에 지금보다 더 좋은 때는 없었습니다.

우리는 당신을 초대합니다:

1. StarkNet 커뮤니티를 만나고 참여할 수 있는[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)에 가입하세요.
2. [StarkNet 스마트 계약 작성](https://www.cairo-lang.org/docs/hello_starknet/index.html)학습을 시작하십시오.
3. [DM us](https://twitter.com/StarkWareLtd)— 저희 팀은 귀하의 아이디어와 이니셔티브가 실현되도록 기꺼이 도와드립니다.

**업데이트(2021년 11월):**StarkNet Alpha가 이더리움 메인넷에서 실행 중입니다.