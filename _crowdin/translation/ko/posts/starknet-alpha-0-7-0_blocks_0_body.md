### TL; DR

* Goerli에 출시된 StarkNet Alpha 0.7.0; 개선 사항이 가득
* 이제 프록시 업그레이드 패턴을 사용하여 계약을 업그레이드할 수 있습니다.
* 계약은 이제 이벤트를 방출할 수 있습니다.
* 오랫동안 기다려온 블록 번호 및 블록 타임스탬프 시스템 호출 지원

### 소개

새로운 기능과 개선 사항이 포함된 버전인 Alpha 0.7.0을 출시하게 되어 기쁩니다. 지난 몇 달 동안 StarkNet에 대한 최고의 자극제 중 하나는 StarkNet의 미래를 형성하는 데 커뮤니티의 참여가 증가한 것입니다. 이 버전은 커뮤니티의 불타는 요구 사항 중 일부를 해결합니다.

#### 명명 규칙 변경

관찰력이 뛰어난 독자라면 이전 StarkNet Alpha 릴리스의 이름이 Alpha 4인 반면 현재 Alpha 0.7.0을 릴리스하고 있음을 알아차렸을 것입니다. 우리는 전용 Alpha 버전 번호를 생략하고 대신 관련된 cairo-lang 버전에만 의존하기로 결정했습니다.

### 새로운 기능

#### 계약 업그레이드 가능성

OpenZeppelin의[프록시 업그레이드 패턴](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)이제 StarkNet의 계약 업그레이드에 대해 완전히 지원됩니다. 프록시 패턴은 Ethereum을 통해 계약 업그레이드를 활성화하는 일반적인 방법입니다. Alpha 0.7.0은 StarkNet을 통해 이 패턴을 활성화합니다.

우리는 패턴의 기본 구현을 보여주기 위해 짧은 튜토리얼[](https://starknet.io/docs/hello_starknet/default_entrypoint.html)만들었고 OpenZeppelin은 이미 프록시 패턴에 대한 표준 계약을 구현하는 작업에 열심히 노력하고 있습니다.[프로토타입](https://github.com/OpenZeppelin/cairo-contracts/pull/129)참조하십시오.

#### 블록 번호 및 블록 타임스탬프

Alpha 0.7.0은 많은 개발자들이 요청한 두 가지 새로운 시스템 호출을 추가합니다. 이러한 호출을 통해 컨트랙트는 블록 번호와 블록 타임스탬프에 액세스할 수 있습니다. 블록 번호는 현재 실행된 블록의 번호를 반환합니다. 블록 타임스탬프는 블록 생성 시 Sequencer가 제공한 타임스탬프를 반환합니다.

[자습서](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp)에서 이러한 기능을 사용하는 방법에 대한 예를 볼 수 있습니다.

#### 이벤트

놀라다! 향후 버전을 위해 계획된 기능이 이 이전 버전에 몰래 들어왔습니다.

StarkNet 계약은 이제 이벤트 정의 및 방출을 지원하여 오프체인 애플리케이션이 사용할 실행 정보를 노출할 수 있습니다. Ethereum 개발자는 의미 체계와 구문이 Solidity와 매우 유사하다는 것을 알게 될 것입니다. 이 기능을 설명하는[설명서](https://starknet.io/documentation/events/)읽거나[자습서](https://starknet.io/docs/hello_starknet/events.html)따를 수 있습니다.

#### %builtins 지시어 제거

%builtin 지시문은 StarkNet 계약에서 더 이상 필요하지 않습니다. 이 변경 사항은[계약 확장성 패턴](https://community.starknet.io/t/contract-extensibility-pattern/210)on[StarkNet Shamans](https://community.starknet.io/)에 대한 커뮤니티 토론에 이어졌습니다. 이 확장성 패턴의 유용성을 크게 단순화합니다.

예를 들어 다음 계약은 다음에서 변경됩니다.

```
%lang starknet

# 이것은 "%builtins" 지시문입니다.
# 더 이상 필요하지 않습니다.
%builtins range_check

@view
func add(x : 펠트, y : 펠트) -> (res : 펠트):
return (res=x + y)
end
```

이에:

```
%lang starknet
@view
func add(x : 펠트, y : 펠트) -> (res : 펠트):
return (res=x + y)
end
```

새로운 패턴을 사용하는[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)표준 계약을 확인할 수 있습니다.

#### 외부 함수는 구조체 배열을 지원합니다.

Alpha 0.7.0은 외부 함수에서 구조체 배열 전달 및 반환을 지원합니다. 이 추가 기능을 통해 계정 계약은[다중 호출](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751)더 잘 지원할 수 있습니다.

다중 호출은 계정이 단일 트랜잭션에서 여러 호출을 할 수 있도록 하는 계정 추상화의 강력한 기능입니다. 명백한 사용 사례는 허용을 호출한 다음 transferFrom을 호출하는**단일 트랜잭션**생성하는 것입니다.

우리는 커뮤니티가 그것으로 무엇을 할지 기대하고 있습니다.

#### StarkNet CLI 개선 사항

**보류 중인 블록 지원**

[대기 중인 블록](https://starknet.io/documentation/block-structure-and-hash/#pending_block)은 마지막 마이너 버전(v0.6.2)에서[도입](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)되었으며 거래에 대한 더 빠른 확인을 제공했습니다. 이 버전에는 StarkNet CLI를 통해 해당 블록을 쿼리하기 위한 지원이 포함되어 있습니다.

이를 사용하려면 block_number를 인수로 사용하는 모든 CLI 명령(contract_call/get_block/get_code/get_storage_at)에서 block_number=pending을 지정하여 보류 중인 블록과 관련하여 StarkNet을 쿼리할 수 있습니다.

**계정 계약 지원**

StarkNet은 계정 추상화를 사용합니다. 즉, 모든 계정은 스마트 계약으로 구현됩니다. 계정 계약의 첫 번째 구현은[Argent](https://github.com/argentlabs/argent-contracts-starknet)및[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)에 의해 수행되었지만 우리는 더 많은 것이 올 것으로 기대합니다.

StarkNet에서 모든 트랜잭션은 계정 계약을 거쳐야 하며 CLI는 이제 계정 계약을 통해 StarkNet Alpha와 직접 상호 작용할 수 있습니다. 설정 방법은[자습서](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)참조하십시오.

유사한 기능이 지난 달에[StarkNet.py](https://github.com/software-mansion/starknet.py/)과[Nile](https://github.com/OpenZeppelin/nile)에도 추가되었습니다.

#### 테스트 프레임워크의 L1<>L2 메시징

Alpha 0.7.0은 Postman을 소개합니다. Postman을 사용하면 개발자가 테스트 프레임워크를 사용하여 더 복잡한 흐름을 테스트할 수 있습니다.

높은 수준에서 — L1에서 L2로, L2에서 L1로 메시지를 전달하는 StarkNet Sequencer의 책임을 조롱합니다. Solidity 메시징 계약을 통해 전송된 메시지가 대상 StarkNet 계약에 표시되고 StarkNet 계약에서 전송된 메시지가 Solidity 메시징 계약에 표시되는지 확인합니다.

#### 기타 기능

Alpha 0.7.0은 수학 공용 라이브러리에 효율적인 제곱근 함수를 추가하는 등 더 많은 기능과 변경 사항을 제공합니다. 전체 목록은[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0)에 나타납니다.

### 다음?

초기[수수료 메커니즘](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)지원은 몇 주 안에 StarkNet의 하위 버전으로 출시될 예정입니다.

### 추가 정보?

[starknet.io](https://starknet.io/): 모든 StarkNet 정보, 튜토리얼 및 업데이트.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): 가입하여 질문에 대한 답변을 얻고 개발 지원을 받고 커뮤니티의 일원이 되십시오.

[StarkNet Shamans](https://community.starknet.io/): StarkNet 연구 토론을 팔로우하고 참여하세요!