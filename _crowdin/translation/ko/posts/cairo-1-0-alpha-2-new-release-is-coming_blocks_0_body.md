### TL; DR

* 카이로 1.0-alpha.2를 출시합니다. 언어에 새로운 기능을 많이 제공합니다.
* 이제 ERC20 계약을 구현할 수 있습니다.
* 이러한 새로운 언어 기능은 곧 출시될 StarkNet-v0.11.0 버전에 적용됩니다.

### 신선한 새로운 기능!

Cairo 1.0은 빠른 개선 속도를 계속하고 있습니다. 오늘의 릴리스에서는 무엇보다도 ERC-20 계약을 작성하는 데 필요한 모든 기능을 소개합니다.

몇 가지 새로운 기능을 언급하자면 다음과 같습니다.

* 사전
* 계약의 이벤트
* 스토리지 변수 매핑
* 특성 지원
* 유형 추론
* 행동 양식

GitHub [리포지토리에서 전체 목록을 참조하세요.](https://github.com/starkware-libs/cairo)

스토리지에서 이벤트 및 매핑의 사용 사례를 보여주기 위해 ERC20 계약의 예를 살펴보겠습니다(전체 구체적인 예는 물론[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)에 있습니다).

![](/assets/0_i4ch5-4rxxal4rkt.png)

### 물속으로 뛰어들어라!

우리는 두 개의 병렬 벡터에 대해 계속 작업합니다.

1. 카이로 1.0을 전속력으로 진화시켜 구형 카이로와의 완전한 기능 호환성을 향합니다.
2. Cairo 1.0으로 작성된 계약을 지원하는 Starknet v0.11.0 개발

그동안 우리는 개발자들이 Cairo 1.0으로 작성을 시작하고 그것에 익숙해지도록 권장합니다.

질문이 있으시면 Cairo 1.0 Discord[채널](https://discord.com/channels/793094838509764618/1065544063245365288)을 사용하실 수 있습니다.

제안이나 피드백이 있으면 주저하지 말고 Cairo repo에서[이슈](https://github.com/starkware-libs/cairo/issues)을 여십시오.