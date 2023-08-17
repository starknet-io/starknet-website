### TL; DR

* StarkNet은 이제 StarkNet의 Constellations 단계를 정의하는 주요 기능인 구성 가능성을 지원합니다.
* 우리는 StarkNet용 테스트 프레임워크를 출시하고 있습니다. 개발자는 이제 계약을 로컬에서 효과적으로 테스트할 수 있습니다.
* 이 릴리스에는 Merkle-Patricia Tries 지원 및 비트 연산 내장과 같은 몇 가지 주목할만한 성능 개선 사항이 포함되어 있습니다.
* 생태계 전면:

1. **표준화된 계약**: OpenZeppelin은 Ethereum과 마찬가지로 StarkNet에 대한 표준화된 계약을 개발할 것입니다!
2. **EVM->Cairo Compiler**: Warp 팀 @ Nethermind는 StarkNet 계약에 대한 ERC-20 Solidity 코드 컴파일을 시연했습니다.

### 배경

StarkNet은 무허가 분산 Validity-Rollup(일명 "ZK-Rollup")입니다. 연초에[로드맵](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)을 발표했습니다. 현재 퍼블릭 이더리움 테스트넷에서 실행 중인[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)이미 L1<>L2 메시징 및 온체인 데이터를 사용하여 모든 비즈니스 로직을 구현하는 스마트 계약의 무허가 배포를 지원합니다. 또한 모든 사용자가 이더리움 스타일의 허가 없이 네트워크에 거래를 보낼 수 있습니다.

이 릴리스: StarkNet Alpha 2에는 행성에서 별자리로 발전할 수 있는 핵심 기능인 배포된 스마트 계약 간의 구성 가능성이 포함되어 있습니다.

### 특징

StarkNet Alpha 2에는 다음과 같은 기능이 도입되었습니다.

* **결합 가능성:**StarkNet Alpha는 이제 일정보다 앞서 스마트 계약 간의 상호 작용을 지원합니다! 이 업그레이드의 장점은 개발자가 Ethereum과 거의 동일한 경험을 기대할 수 있다는 것입니다. 호출은 동기식이며 함수 호출로 사용할 수 있습니다. 우리는 StarkNet에 의해 공개된 것처럼 무제한 계산 규모와 계약 구성성 모두의 이점을 얻을 수 있는 새로운 애플리케이션을 간절히 기다리고 있습니다. 이 기능을 사용하는 방법을 이해하려면 이[자습서](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html)을 따라 시작할 수 있습니다. 우리는 귀하의 피드백을 듣고 귀하가[StarkNet discord](https://discord.gg/uJ9HZTUk2Y)에서 무엇을 만들고 있는지 보고 싶습니다.
* **로컬 테스팅 프레임워크:**당신이 요청했고, 우리는 —[더 나은 테스팅 프레임워크](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing)제공했습니다. 이를 통해 개발자는 외부 종속성 없이 로컬에서 StarkNet 계약 배포 및 상호 작용을 테스트하여 dApp 개발을 가속화할 수 있습니다. 이 버전에는 L2 상호 작용만 포함되어 있으며 다음 버전에서는 기능과 사용 편의성이 확장될 것입니다. 튜토리얼[여기](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)확인하고 해당 기능에 대한 피드백을 듣고 싶습니다.
* **성능 개선:**

**Patricia Trees:**Merkle-Patricia Tree 상태 약속으로 이동하여 더 높은 처리량과 더 짧은 증명 생성 시간을 지원하도록 StarkNet의 디자인을 개선했습니다([문서](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). 이 변경으로 훨씬 더 큰 블록을 생성할 수 있으므로 트랜잭션당 비용이 낮아집니다. StarkNet 운영 체제의 핵심 구성 요소인 ZKP 언어인 카이로(Cairo)를 통해 보다 정교한 상태 확약으로의 전환이 가능해졌습니다.

**비트 연산:**StarkNet 계약에서 훨씬 더 효율적인 비트 연산을 지원하기 위해[내장](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)추가했습니다([문서](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet이 Ropsten에서[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)으로 이동 중입니다! 마침내 Ropsten Gods의 변덕으로부터 시스템을 해방했습니다. Alpha 2는 이제 보다 안정적인 개발 환경에서 실행될 것입니다.

### 생태계

StarkNet 생태계는 지속적으로 성장하고 있으며 최신 뉴스를 공유하게 되어 기쁩니다.

* **표준화된 계약**: StarkNet의 표준 계약 라이브러리에서 OpenZeppelin과 협력하게 되어 영광입니다. 이더리움의 표준화된 계약에 대한 그들의 표준 작업은 매일 우리 모두에게 도움이 되며 여기에서도 그들이 영향력을 발휘할 것이라고 확신합니다.
* **EVM->카이로 컴파일러**: Nethermind의 Warp 팀[EVM 바이트코드에서 StarkNet 계약으로 ERC-20 계약을](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)파일하고 StarkNet에 배포하는 것을 시연했습니다. 이러한 노력은 빠르게 진행되고 있으며 다음 목표는 Yul에서 Cairo로 임의의 스마트 계약을 변환하는 것입니다.
* **Maker-on-StarkNet**: StarkNet을 통해 Maker 프로토콜을 구현하기 위해 Maker DAO에[제안](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)이 제출되었습니다. 첫 번째 단계는 이더리움에서 StarkNet으로의 DAI 브리지를 제안하고 StarkNet에서 DAI를 생성하는 것을 따릅니다.
* **StarkNet/Cairo 감사 서비스**: 우리는 StarkNet 스마트 계약 및 Cairo 프로그램 감사 서비스를 제공하기 위해 여러 감사 회사를 고용하고 있습니다.

### 모퉁이 돌면 메인넷

우리는 화이트리스트 애플리케이션 세트로 점진적으로 시작하여 StarkNet Alpha 메인넷 출시를 준비하고 있습니다. 여러 프로젝트가 진행 중이며 매일 더 많은 프로젝트가 추가됩니다. 파티에 참여하려면[discord](https://discord.gg/uJ9HZTUk2Y)을 통해 연락하도록 초대됩니다.

**업데이트(2021년 11월):**StarkNet Alpha가 이더리움 메인넷에서 실행 중입니다.