### TL; DR

* Alpha는 메인넷에서 라이브로 진행됩니다.
* 일반적인 계산 및 구성 가능성을 지원합니다.
* 빠르게 성장하는 커뮤니티, 개발 도구 및 애플리케이션
* 향후 몇 주 동안 지속적으로 출시될 추가 기능
* 고지 사항: 이것은 알파 버전입니다(아래의 작은 글씨를 읽으십시오).

### 소개

StarkNet Alpha가 오늘 이더리움 메인넷에서 출시됩니다!

StarkNet은 Ethereum을 통해 L2 네트워크로 작동하는 무허가 분산 롤업입니다. StarkNet은 가장 안전하고 확장 가능한 암호화 증명 시스템인[STARK](https://starkware.co/stark/)에 의존하기 때문에 모든 dApp이 이더리움의 구성 가능성 및 보안을 손상시키지 않고 계산을 위한 무제한 확장을 달성할 수 있도록 합니다. StarkNet은 이더리움의 최초 생산 등급 Turing 완전한 von-Neumann 검증기인[Cairo](https://starkware.co/cairo/)프로그래밍 언어를 기반으로 합니다. Cairo와 STARK는 모두 StarkWare에서 자체 개발했으며 2020년 여름 이후로 5천만 txs 이상 및 2500억 달러 이상을 처리한 모든 프로덕션 등급 애플리케이션에 전원을 공급했습니다.

다른 기능 중에서도 StarkNet Alpha는 다른 StarkNet 계약 및 L1 계약과의 L1<>L2 메시징을 통해 구성 가능성을 지원하는 일반적인 계산 스마트 계약을 가능하게 합니다. StarkNet Alpha는 롤업 모드에서 작동합니다. 즉, 모든 상태 diff 데이터가 온체인으로 전송됩니다.

지난 1월에 우리는 StarkNet[로드맵](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)공유했습니다. 6월에 StarkNet Alpha는 퍼블릭 테스트넷에 출시되었으며 새로운 기능으로 계속 업데이트되었습니다. 부분적으로는 프로덕션 등급 전투 강화 STARK/Cairo 소프트웨어 스택에 대한 의존 덕분에 일정보다 앞서게 되어 기쁩니다.

### StarkNet Alpha를 어떻게 다루어야 합니까?

첫째, "알파" 레이블이 있는 데에는 이유가 있기 때문에 각별히 주의해야 합니다. 변경, 수정 및 개선이 있을 것으로 예상합니다. StarkNet Alpha는 아직 감사를 받지 않았으며 네트워크가 더 성숙해질 때까지 이러한 감사를 연기할 수 있습니다(자세한 내용은 이 게시물 끝에 있는 면책 조항을 읽으십시오).

일반적으로 우리는 Optimistic Rollup 동료, 즉 Arbitrum 및 Optimism이 정의한 신중하고 합리적인 경로를 따릅니다. 단일 시퀀서로 네트워크를 시작하고 개발자가 관련 위험을 이해할 수 있도록 애플리케이션을 화이트리스트에 추가합니다. 우리는 StarkNet의 완전한 탈중앙화를 위해 최선을 다하고 있습니다.

그리고 StarkNet Alpha의 경제성을 어떻게 다루어야 할까요? Alpha는 거래 수수료 없이 시작됩니다. 몇 주밖에 남지 않은 다음 업그레이드에서는 수수료 메커니즘을 도입할 예정입니다. 자세한 내용은 별도의 게시물에서 공유하겠습니다.

### 구축 시작

(new!) [웹사이트](http://starknet.io/), 또는[튜토리얼](https://starknet.io/docs/)으로 바로 이동합니다.

배포할 준비가 되었다면 이[온보딩 프로세스](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)따르십시오. 모든 개발자가 시스템의 예비 상태를 잘 알 수 있도록 만들어졌습니다.

### 생태계

지난 몇 달 동안 우리는[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)에 모인 StarkNet 커뮤니티의 규모와 활동에서 놀라운 성장을 보았습니다. 블록체인 생태계 전반에 걸쳐 수십 명의 개발자(팀 및 개인)가 이러한 노력에 기여하고 있습니다. (포스팅 마지막에 면책조항 참조)

#### 개발자 도구

* OpenZeppelin은 표준 계약을 정의하고 있습니다. 그들의[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)및[토론](https://github.com/OpenZeppelin/cairo-contracts/discussions)따를 가치가 있습니다
* Nethermind에서 개발한[Warp](https://github.com/NethermindEth/warp)Solidity–>Cairo 트랜스파일러
* Shard Labs의[HardHat 플러그인](https://github.com/Shard-Labs/starknet-hardhat-plugin)및[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent는 제작자인[Sean Han](https://twitter.com/seanjameshan)과 함께 StarkNet.js에 대한 공동 노력을 포함하여 도구를 개발하고 있습니다.

#### 하부 구조

**블록 탐색기**:

* [Nethermind의 Voyager](http://voyager.online/)프로젝트
* [Eth.tx](https://ethtx.info/)지원 분석 및 StarkNet 거래에 대한 자세한 보기를 제공합니다.

**전체 노드**: 두 가지 노력 진행 중: 하나는 Erigon이 주도하는 Fermion 프로젝트이고, 다른 하나는 Equilibrium이 주도하는[Pathfinder](https://github.com/eqlabs/pathfinder)프로젝트입니다.

**지갑**:

* [ArgentX](https://github.com/argentlabs/argent-x)은 Argent에서 개발한 브라우저 확장 기능으로 개발자가 이미 사용할 수 있습니다.
* Torus 키 관리 솔루션은 StarkNet 지원
* Ledger는 네이티브 StarkNet 앱을 개발하고 있습니다. 연말 이전에 제공될 예정

**카이로 감사**: ConsenSys Diligence, Trail of Bits, Peckshield 및 ABDK는 이미 카이로 감사를 수행 중이거나 곧 시작할 예정입니다.

**API 서비스**: StarkNet 전체 노드를 사용할 수 있게 되면 Figment, Chainstack 및 Infura에서 API 서비스를 제공합니다.

**인덱서**: Figment 팀과 함께 StarkNet과 함께 작동하도록 TheGraph를 통합하는 작업을 할 것입니다.

### 앞으로의 길

앞으로 몇 주, 몇 달 안에 Alpha를 다음과 같은 기능으로 업그레이드할 예정입니다.

* 계약 업그레이드 가능성 메커니즘
* 수수료 메커니즘
* 이벤트
* 누락된 시스템 호출 추가(get_block_number, get_block_timestamp 등)
* 볼리션의 스켈레톤 버전
* 그리고 훨씬 더 …

이러한 노력을 지속적으로 모니터링하려면 기능의[임시 로드맵](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)을 참조하십시오.

더 멀리 내다보면, 우리는 계속해서 여러 방면에 대한 활발한 연구에 막대한 투자를 하고 있습니다([Shamans](https://community.starknet.io/)노력에 동참하세요).

* 분산
* 스케일링
* 데이터 가용성
* 무허가 인센티브

### 행동을 요구하다

* Goerli의 무허가 StarkNet 테스트넷에서 계약서 작성 시작
* [스타크넷 디스코드 가입](https://discord.gg/uJ9HZTUk2Y)
* 커뮤니티 통화에 참여
* 제1회[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(2022년 1월 27~28일, Stanford CA)에 참석하십시오.
* [StarkNet Shamans](https://community.starknet.io/)에 가입하여 연구 과제에 대해 자세히 알아보세요.

### 부인 성명

***StarkNet Alpha는 완전히 감사되지 않은 새롭고 복잡한 시스템입니다. 모든 복잡한 소프트웨어 시스템과 마찬가지로 StarkNet 시스템에는 극단적인 경우 모든 자금 손실로 이어질 수 있는 버그가 포함될 수 있습니다. 그래서,***조심하고 조심하세요!******

*StarkNet 생태계는 크고 빠르게 성장하는 독립적인 팀 및 개인의 집합이며 StarkWare는 이에 대한 감독이나 책임이 없습니다. 생태계 구성원이 개발한 프로젝트 중 하나에는 극단적인 경우 모든 자금 손실로 이어질 수 있는 버그가 포함될 수 있습니다. 또한 더 많은 스마트 계약이 배포됨에 따라 의도하지 않은 유해한 버그와 악의적인 사기 및 러그 풀의 가능성이 증가합니다. 따라서 StarkNet의 모든 스마트 계약은 Ethereum의 스마트 계약을 취급하는 것처럼 취급하고 안전하다고 믿을만한 타당한 이유가 있는 계약만 사용하십시오.*