### TL; DR

* EIP-4337 정신의 계정 추상화 개선

1. Validate — 분리 실행
2. 트랜잭션 고유성은 이제 프로토콜(Nonce)에서 보장됩니다.

* 수수료 메커니즘은 다음을 포함하도록 확장됩니다.

1. L1→L2 메시지
2. 트랜잭션 선언

* 약간의 카이로 구문 변경

### 소개

StarkNet Alpha 0.10.0을 발표하게 되어 기쁩니다. 이 버전은 보안 및 분산화를 손상시키지 않고 Ethereum을 확장하기 위한 또 다른 단계입니다.

이 블로그 게시물은 이 버전의 주요 기능을 간략하게 설명합니다. 변경 사항의 전체 목록은[릴리스 정보](https://github.com/starkware-libs/cairo-lang/releases)확인하십시오. 자세한 내용은[설명서](https://docs.starknet.io/)확인하십시오.

### 계정 추상화 변경

[StarkNet의 계정 추상화](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)로 진행합니다. 이 버전은[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337)에서 영감을 받은 변경 사항을 소개합니다.

#### 분리 확인/실행

지금까지 계정의 \_\_execute\_\_ 기능은 트랜잭션 유효성 검사와 실행을 모두 담당했습니다. 0.10.0에서는 이 결합을 깨고 별도의 \_\_validate\_\_ 기능을 계정에 도입했습니다. 트랜잭션을 수신하면 계정 계약은 먼저 \_\_validate\_\_를 호출한 다음 성공하면 \_\_execute\_\_를 진행합니다.

유효성 검사/실행 분리는 유효하지 않은 트랜잭션과 복귀된(아직 유효한) 트랜잭션 간의 프로토콜 수준 구분을 제공합니다. 덕분에 시퀀서는 되돌려졌는지 여부에 관계없이 유효한 트랜잭션 실행에 대해 수수료를 부과할 수 있습니다.

#### 목하

버전 0.10.0에서는 프로토콜 수준에서 트랜잭션 고유성을 적용하기 위해 nonce 필드가 추가되었습니다. 지금까지 nonce는 계정 계약 수준에서 처리되었으며, 이는 동일한 해시를 가진 거래가 이론적으로 두 번 실행될 수 있음을 의미했습니다.

이더리움과 유사하게 이제 모든 계약에는 이 계정에서 실행된 트랜잭션 수를 계산하는 nonce가 포함됩니다. 계정 계약은 일치하는 논스가 있는 트랜잭션만 수락합니다. 즉, 계정의 현재 논스가 X인 경우 논스가 X인 트랜잭션만 수락합니다.

#### 새 트랜잭션 버전

이전 버전과의 호환성을 허용하기 위해 새로운 트랜잭션 버전 —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C)을 통해 이러한 두 가지 변경 사항을 도입할 것입니다. 이러한 변경 사항은 새 버전에만 적용되며 이전 계정은 여전히 버전 0 트랜잭션을 실행할 수 있습니다.

참고 — 트랜잭션 v0은 이제 더 이상 사용되지 않으며 StarkNet Alpha v0.11.0에서 제거됩니다. 새 트랜잭션 버전을 사용하도록 업그레이드했는지 확인하십시오.

트랜잭션 버전에 대한 자세한 내용은[설명서](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C)을 참조하십시오.

#### 수수료 메커니즘

새 버전에서는 두 가지 필수 구성 요소에 대한 수수료를 포함할 수 있습니다.

* [L1→L2 메시지](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [트랜잭션 선언](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

이 수수료는 이 버전에서 필수가 아니며 StarkNet Alpha v0.11.0부터 시행됩니다.

#### 카이로 구문 변경

Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU)의 업그레이드를 향한 점진적인 진행을 위해 이 버전에는 몇 가지 구문 변경 사항이 포함되어 있습니다.

불편을 최소화하기 위해 버전 릴리스에는 위의 변경 사항을 자동으로 적용하는[마이그레이션 스크립트](https://www.youtube.com/watch?v=kXs59zaQrsc)포함됩니다. 자세한 내용은[여기](https://github.com/starkware-libs/cairo-lang/releases)에서 확인할 수 있습니다.

### 무엇 향후 계획?

* 몇 주 안에 시퀀서에 병렬화를 도입하여 더 빠른 블록 생산을 가능하게 할 계획입니다(V0.10.1).
* 수수료 지불에 포함되어야 하는 마지막 부분인 계정 배포를 곧 완료할 것입니다.
* 카이로 1.0 출시! 향후 게시물에서 더 많은 정보를 얻을 수 있습니다.

### 어떻게 하면 더 몰입할 수 있습니까?

* 모든 StarkNet 정보, 설명서, 자습서 및 업데이트를 보려면[starknet.io](https://starknet.io/)로 이동하십시오.
* 개발자 지원, 생태계 발표 및 커뮤니티의 일원이 되려면[StarkNet Discord](http://starknet.io/discord)에 가입하세요.
* 최신 정보를 유지하고 StarkNet 연구 토론에 참여하려면[StarkNet 포럼](http://community.starknet.io/)을 방문하십시오.

우리는 항상 우리의[문서](https://docs.starknet.io/)에 대한 피드백을 받는 것을 기쁘게 생각합니다!