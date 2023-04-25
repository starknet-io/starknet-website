## TL; DR

* Starknet alpha v0.11.0이 테스트넷에 출시되었습니다.
* 이제 Starknet Testnet에서 Cairo 1.0 계약을 배포하고 상호 작용할 수 있습니다!
* Starknet의 계산은 5배 더 저렴합니다!
* 처음으로 Starknet alpha v0.11.0으로의 메인넷 업그레이드가 거버넌스 투표에 포함됩니다.
* 이것은[재생](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)이전 전환 기간의 시작을 표시합니다.
* 메인넷에 Cairo 1.0 계약을 배포하는 것은 새로운 시스템이 원활하게 실행되는지 확인한 후 테스트넷에서 실행한 후 몇 주 후에야 활성화됩니다.

## 소개

오랫동안 기다려온 Starknet alpha v0.11.0이 Testnet에 출시되었음을 발표하게 되어 기쁩니다! 이것이 Starknet에게 중요한 단계인 이유는 무엇입니까? Starknet v0.11.0에서는[카이로 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)스마트 계약을 선언, 배포 및 실행할 수 있습니다. 또한 기존 계약을 카이로 1.0 구현으로 원활하게 전환할 수 있는 새로운 시스템 호출을 도입합니다.

Cairo 1.0은 두 가지 측면에서 Starknet을 개선합니다. 첫째, Cairo에 유형/제네릭/특성/오류 처리를 도입하는 풍부한 프로그래밍 언어를 제공하여 개발 환경을 개선합니다. 둘째, Cairo 1.0은 Starknet의 탈중앙화 여정에서 핵심적인 역할을 합니다. Sierra는 모든 계약 실행이 증명 가능함을 보장하며 이는 분산형 Starknet의 중요한 자산입니다.

이 버전에서 제공되는 또 다른 중요한 개선 사항은 계산 비용이 5배 감소한 것입니다. 이로 인해 Starknet은 계산 집약적인 응용 프로그램에 더욱 친숙해집니다. 자세한 내용은 아래를 참조하십시오.

## 재생을 위한 준비

Starknet alpha v0.11.0은 전환 기간의 시작을 표시하여 Starknet의 Regenesis에 앞서 준비할 수 있도록 합니다. Starknet의 Regenesis 계획은 몇 달 전에[게시](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)되었으며 Cairo 0 기반 시스템에서 Cairo 1.0 기반 시스템으로 전환하는 데 중점을 둡니다.

전환 기간 동안 기존 Cairo 0 계약(업그레이드 가능한 경우)은 주소와 스토리지를 유지하고 구현을 Cairo 1.0으로 원활하게 전환할 수 있는 기회를 갖습니다(다음 섹션 참조).

Starknet 사용자로서 이것은 계정의 새로운 Cairo 1.0 구현이 릴리스된 후에만 지갑을 업그레이드하면 된다는 것을 의미합니다(Regenesis 자체까지 언제든지 수행할 수 있음). 중단 시간이 예상되지 않으며 시스템의 모든 dapp은 평소와 같이 계속 작동합니다.

Regenesis 이후 Starknet은 시스템 전체에서 나머지 Cairo 0 계약 지원을 중단합니다. 이것은 사전에 잘 전달될 것이며 개발자에게는 계약을 마이그레이션할 충분한 시간이 주어질 것입니다. 전환 기간은 몇 달 동안 지속될 것으로 예상되며 dapp 개발자는 이미 구현을 Cairo 1.0으로 마이그레이션할 수 있습니다. 전환 기간이 끝나면 재생이 발생합니다.

## 카이로 1.0으로의 원활한 마이그레이션

Cairo 1.0으로 전환하면서 기존 Cairo 0 계약은 더 이상 사용되지 않으며 Regenesis에서 더 이상 지원되지 않습니다. 업그레이드 가능한 Cairo 0 계약이 Regenesis 이후에도 계속 작동하고 그 때까지 구성된 상태를 유지하기 위해 새로운 시스템 호출인 ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall)추가했습니다. 업그레이드 가능한 계약은 Cairo 1.0 구현으로 업그레이드하는 데 문제가 없지만 기본 프록시(실제 상태를 보유하는 계약)는 여전히 Cairo 0 구현으로 고정됩니다. \`replace_class\` 시스템 호출은 프록시 계약이 기본 클래스를 대체하도록 허용하여 이 문제를 해결합니다. 즉, 동일한 주소와 저장소를 유지하지만 구현을 대체합니다.

## 이제 연산이 5배 더 저렴해졌습니다!

오늘날 Starknet 거래 수수료에는 컴퓨팅 및 온체인 데이터라는 두 가지 주요 구성 요소가 있습니다. Starknet 거래 수수료의 계산 요소는 L1에서 증명을 확인하는 한계 비용에 의해 결정됩니다(자세한 내용은[문서](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)참조).

원래 검증을 위해 5m 가스가 필요한 증명의 200m 카이로 단계는 카이로 단계당 0.05 가스의 순진한 추정으로 이어졌습니다. 그 이후로 우리는 L1 검증 비용을 크게 줄일 수 있는[재귀 증명](https://medium.com/starkware/recursive-starks-78f8dd401025)로 이동했습니다(재귀 트리의 루트만 L1에 도달함). 이제 그에 따라 원래 추정치를 업데이트할 때입니다. L2의 각 카이로 단계 가격은 5배 감소하고 이제 0.01가스 비용이 듭니다.

이러한 비용 절감은 예를 들어 고유하지 않은 서명이 있는 계정 계약과 같이 계산 집약적인 애플리케이션에 중요합니다. 간단한 거래는 약간의 비용 절감(~ 5%)을 볼 수 있습니다. 향후 버전에서는 두 번째 구성 요소인 온체인 데이터 비용을 처리할 것입니다. 온체인 데이터에 대한 대안이 Starknet(일명 Volition)에 도입되면 전반적으로 비용 절감이 느껴질 것입니다.

## 스타크넷 거버넌스 1차 투표

스타크넷 거버넌스의 첫 번째 단계가 시작되었습니다(자세한 내용은[여기](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). 커뮤니티 구성원은 이제 추가 채널, 즉 프로토콜 변경에 대한 투표를 통해 Starknet 형성에 참여할 수 있습니다.

Starknet Governance 첫 번째 단계는 Starknet 프로토콜 업그레이드에 중점을 둘 것입니다. 모든 Starknet 버전 업그레이드는 먼저 Testnet에 배포됩니다. 유권자는 6일 동안 Goerli에서 실행되는 업그레이드된 버전을 검사하고 테스트할 수 있습니다. 이 기간 동안 스냅샷 제안이 공개되고 커뮤니티는 메인넷 배포를 위한 새 버전을 승인할지 여부에 대해 투표할 수 있습니다.

제안이 6일의 투표 기간 동안 '예' 투표의 과반수를 얻으면 제안이 통과되고 이에 따라 스타크넷 메인넷이 업그레이드됩니다.

Starknet alpha v0.11.0은 투표 대상인 첫 번째 Starknet 버전입니다. Starknet alpha v0.11.0 투표는 Testnet 배포를 시작으로 6일 동안 진행됩니다.

관련 링크:

* [스냅샷 공간](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [위임 검색 페이지](https://delegate.starknet.io/)
* [커뮤니티 포럼의 Starknet alpha v0.11.0 토론 스레드](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## 카이로 1.0 및 시에라

Sierra(**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**)는 Cairo 어셈블리(CASM)로 컴파일되는 중간 표현입니다. Starknet alpha v0.11.0 이전에는 개발자가 Cairo 0을 CASM으로 컴파일하고 결과를 Starknet 시퀀서로 보냅니다. Cairo 1.0을 사용하여 개발자는 코드를 Sierra로 컴파일하고 이 중간 표현을 시퀀서로 보냅니다. 그러면 시퀀서가 이를 CASM으로 컴파일합니다. Sierra는 "안전한 CASM", 즉 실패할 수 없는 CASM의 하위 집합으로 컴파일하여 모든 실행을 증명할 수 있도록 보장합니다. 이렇게 하면 시퀀서가 되돌린 트랜잭션에 대해서도 수수료를 부과할 수 있으므로 DOS로부터 보호할 수 있습니다. 자세한 내용은[the docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)참조하십시오.

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0은[Cairo 1.0-alpha.6 버전](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6)을 사용합니다. 이 버전은 모든 Starknet 시스템 호출이 이미 존재하는 카이로 0과[기능 패리티](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)에 가깝습니다.

Starknet 시퀀서는 고정 컴파일러 버전을 사용하므로 Starknet에서 언어 개선 사항을 즉시 사용할 수 없으며 Starknet 버전 업데이트 후에만 사용할 수 있습니다. 특히 Cairo 1.0 → Sierra 컴파일에 영향을 미치는 개선 사항은 즉시 적용될 수 있지만 Sierra → CASM 컴파일러(자세한 내용은[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)참조)에 대한 변경 사항은 Starknet 업그레이드를 기다려야 합니다.

## 새로운 기능은 무엇입니까?

### 새로운 트랜잭션 유형 — 선언 v2

Cairo 1.0 클래스를 선언하기 위해[에 새 트랜잭션 유형](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)추가하고 있습니다.

이 새로운 \`declare\` 트랜잭션 버전은 기존 \`declare\`와 유사하지만 두 가지 중요한 차이점이 있습니다.

* 전송되는 클래스 개체는 이제 CASM이 아닌 Sierra를 나타냅니다. 즉, 클래스의 의미는 Sierra 표현에 의해 정의됩니다.
* 사용자는 또한 컴파일된 클래스 해시에 서명합니다. 이것은 Sierra→CASM 컴파일이 Starknet OS의 일부로 입증될 때까지 중요한 단계입니다.

자세한 내용은[the docs](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect)참조하십시오.

개발자의 관점에서 경험은 동일하게 유지됩니다. Cairo 1.0 코드를 작성한 후 CLI를 사용하여 클래스를 선언할 수 있습니다.

**초기에 \`declare v2\` 트랜잭션은 Starknet 메인넷에서 허용되지 않습니다. Testnet에서 일정 기간 동안 실험한 후 Mainnet에서 새로운 트랜잭션 유형이 활성화되고 Cairo 1.0 클래스를 사용할 수 있게 됩니다.**

### 포세이돈이 여기있다

[Poseidon](https://www.poseidon-hash.info/)매우 효율적인 대수 회로를 갖도록 설계된 해시 함수 제품군입니다. 따라서 STARK 및 SNARK와 같은 ZK 증명 시스템에서 매우 유용할 수 있습니다. Starknet alpha v0.11.0부터 개발자는 Poseidon을 사용할 수 있습니다. 또한 Starknet 프로토콜의 일부인 일부 해시 계산은 Poseidon으로 전환됩니다(특히 클래스 해시, 컴파일된 클래스 해시 및 상태 커밋의 일부는 Poseidon을 사용합니다. 자세한 내용은[문서](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)참조). 앞으로 더 많은 내부 구성 요소가 Poseidon 해시 함수를 사용하도록 전환될 것입니다.

Starknet에서 사용되는 정확한 버전과 매개변수는 여기[](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash)찾을 수 있습니다.

### 기타 변경 사항

이전 Starknet 버전과 마찬가지로 업그레이드는 API 및 기타 하위 수준 구성 요소에도 영향을 미칩니다. 아래에 이러한 항목을 나열하고 적용된 특정 변경 사항을 설명합니다.

* v0 호출/선언 트랜잭션은 더 이상 지원되지 않습니다.
* L1→L2 메시지는 이제 수수료가 필요하지[](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). 즉, 무료로 전송된 메시지는 Starknet 시퀀서에서 처리되지 않습니다.
* 온체인 데이터 형식은[변경됨](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API 변경 사항](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(모든 변경 사항이 여기에 나열되어 있지는 않습니다. 전체 목록은 문서를 참조하십시오):
* 새로운 \`get_compiled_class_by_class_hash\` 엔드포인트 추가
* \`get_class_by_hash\`는 Cairo 0 / Cairo 1.0 클래스를 모두 반환합니다(요청된 해시에 따라 다름).
* \`get_state_update\`에는 교체된 클래스에 대한 새 섹션이 있으며 선언은 Cairo 0과 Cairo 1 클래스 간에 분할됩니다.
* \`estimate_fee\` 및 \`simulate_tx\`는 이제 유효성 검사를 건너뛸 수 있습니다.
* [새로운](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC 버전

## 다음은 무엇입니까?

카이로 1.0 관련 인프라가 모두 구축되었으므로 다음을 기대할 수 있습니다.

* 카이로 1.0에 대한 추가 언어 개선 사항
* 성능 개선:[약속대로](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), 우리는 TPS를 크게 높이기 위해 계속 전진하고 있습니다. 로드맵의 다음 단계는 Apache 2.0 라이선스에 따라 공개적으로 개발된[Rust 시퀀서](https://github.com/starkware-libs/blockifier)로 전환하는 것입니다. 새로운 시퀀서는[녹 CairoVM](https://github.com/lambdaclass/cairo-rs)및[Papyrus](https://github.com/starkware-libs/papyrus)전체 노드를 사용하여 성능 트리오를 구성합니다.
* 오프체인[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! 이 버전에서는 트랜잭션 비용의 계산 구성 요소를 처리했습니다. 다음 버전에서는 오늘날 평균 트랜잭션의 지배적인 비용인 온체인 데이터 비용을 처리할 것입니다.

![](/assets/starknet-alpha-v0.11.0-diagram.png)