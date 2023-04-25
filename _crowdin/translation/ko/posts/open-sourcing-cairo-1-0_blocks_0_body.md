### TL; DR

* **카이로 1.0은 오픈 소스입니다! 이것은 StarkNet 스택을 오픈 소싱하기 위한 첫 번째 단계일 뿐입니다.**
* 우리는 이제 Cairo 1.0 컴파일러에[첫 번째 보기](https://github.com/starkware-libs/cairo)제공합니다. 이제 기본 Cairo 1.0 코드로 실험을 시작할 수 있습니다.
* Cairo 1.0의 핵심은 Rust와 매우 유사합니다.
* 릴리스가 아닌 첫 번째 맛이라고 생각하십시오. 더 많은 개선이 진행 중입니다. 컴파일러의 첫 번째 버전은 내년 1분기 초로 예정되어 있습니다.
* Cairo 1.0은 아직 StarkNet에서 지원되지 않습니다. 내년 1분기 스타크넷에서 지원할 예정이다.

### 소개

2020년에는 검증 가능한 계산을 지원하는 Turing-complete 프로그래밍 언어인[Cairo](https://eprint.iacr.org/2021/1063.pdf)출시했습니다. Cairo는 어셈블리 언어로 시작하여 점차 표현력이 향상되었습니다. 두 달 전에 우리는 현재 상황에서 몇 가지 주요 문제를 해결하는[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)발표했습니다.

* Cairo의 구문은 처음부터 상당한 개선을 보였지만 개발자 경험은 항상 개선될 수 있습니다. Cairo 1.0은 녹슬지 않는 완전한 형식의 언어로, 동일한 논리를 훨씬 쉽게 작성하고 오류가 덜 발생합니다.
* 기존 컴파일러는 StarkNet 자체와 동일한 저장소에서 개발되어 언어 변경 사항을 추적하기가 더 어렵습니다. Cairo 1.0 컴파일러는 기초부터 작성되어 더 빠른 기능 개발과 더 많은 커뮤니티 참여를 허용합니다.
* 이제 모든 계산을 증명할 수 있습니다. 현재 Cairo 프로그램은 특정 입력(예: 일부 계산 분기에서 \`assert 1=2\` 명령에 도달하여)으로 실패하여 계산을 증명할 수 없게 만들 수 있습니다. Cairo 1.0을 사용하면 가능한 모든 분기에서 프로그램을 증명할 수 있습니다. 이는 StarkNet의 DOS 보호 및 검열 저항에 특히 중요합니다.

오늘 우리는 개발을 공개 저장소로 옮기고**오픈 소스 Cairo 1.0으로 위의 목표를 달성하는 첫 번째 이정표를 세웠습니다!**개발자는 이제 처음으로 간단한 Cairo 1.0 프로그램을 컴파일하고 실행할 수 있습니다. 이를 통해 개발자는 Cairo 1.0으로 실험을 시작하고 이 단계에서 아직 StarkNet에 구현할 수 없더라도 점차 새로운 기능에 익숙해질 수 있습니다.

### 현재 기능

현재 기본 기본 Cairo 프로그램을 컴파일하고 실행할 수 있습니다. 많은 구문/언어 개선이 아직 진행 중이지만 이를 통해 Cairo 1.0에 익숙해지고 업그레이드를 즐길 수 있습니다.

**StarkNet 계약 작성은 아직 지원되지 않습니다.**StarkNet 구문(스토리지 변수/계약 호출/이벤트 및 기타 시스템 호출)이 몇 주 안에 추가될 예정입니다.

### 코드 예제

이전 구문과 카이로 1.0의 차이점을 설명하기 위해 n번째 피보나치 수를 찾는 몇 가지 다른 구현/맛을 보여 주기로 했습니다.

### 예 I: 표현식 일치

카이로 1.0에서는 녹슬지 않는[매치](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)표현식을 사용할 수 있습니다. 더 이상 참조 취소를 유발할 수 있는 if/else 문을 두려워하지 않을 것입니다!

![](/assets/code01.png)

### 예 II: 데이터 유형

Cairo 0은 펠트와 포인터로 작업했지만 Cairo 1.0에서는 언어의 복잡한 데이터 유형에 기본적으로 액세스할 수 있습니다. 아래에서 처음 n 피보나치 수의 배열을 생성하는 예제를 찾을 수 있습니다.

![](/assets/code02.png)

위에서 볼 수 있듯이 메모리 포인터로 직접 작업하는 대신 `Array::<felt>\` 유형 및 \`array_append\`함수.

### 예 III: 구조체 & 소유권

다음 코드는 Cairo 1.0에서 구조체의 사용법을 보여줍니다.

![](/assets/code03.png)

> 다음 단락은 청중 중 Rustaceans를 위한 것입니다. Cairo 1.0은 Rust와 유사한 방식으로 메모리를 관리합니다. 특히 소유권[과 차용](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)의 개념을 사용한다. 따라서 \`FibResult\` 구조체(이 경우 \`result.value\`)의 멤버에 액세스하여 \`result\`를 이동했습니다. \`result.index\`에서 다시 액세스하십시오. 이를 극복하기 위해 \`FibResult\` 유형의 \`#\[derive(Copy)]\` 속성을 추가합니다. 향후 버전에서는 구조체에 대한 자동 분해를 추가할 것입니다. 이렇게 하면 다른 구성원을 건드리지 않고 한 구성원의 소유권을 이동할 수 있습니다(특히 위의 코드는 \`FibResult\`에 copy 속성이 없더라도 컴파일됩니다).

**특히, Cairo 1.0은 Cairo의 원래(결정론적이지 않은 읽기 전용) 메모리 모델을 완전히 추상화하고 있다는 점에 유의하십시오.**

## 예 IV: 오류 전파

다음 코드는 n번째 피보나치 수를 계산하지만 이전 예제와 달리 모든 입력은 uint128 유형입니다. 이것은 Cairo 0에서 uint를 처리하는 주요 문제점을 해결합니다. 여기서 uint128(및 향후 uint256)은 기본 유형입니다.

![](/assets/0_s8bhjf_ade3carmi.png)

두 개의 128비트 정수를 추가하면 오버플로가 발생할 수 있습니다. 위의 코드는[옵션 열거형](https://doc.rust-lang.org/rust-by-example/std/option.html)과[물음표 연산자](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)사용하여 중간 추가 중 하나에서 오버플로의 경우를 처리합니다. 이를 건전성을 보장하기 위해 \`unit256_check\` 함수를 호출해야 하는[현재](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 추가 구문과 비교하십시오. 또한 가까운 장래에 언어에 \`panic\` 개념을 추가할 예정이며(rust의[panic](https://doc.rust-lang.org/rust-by-example/std/panic.html)매크로와 유사) 추가 오버플로와 같은 간단한 오류는 포착할 수 없고 자동으로 전파됩니다. 단위를 추가할 때 \`Option\` 또는 \`?\`를 사용할 필요가 없습니다.

## 직접 해보십시오

이제 현재 지원되는 Cairo 1.0 프로그램을 컴파일하고 실행할 수 있습니다! \`cairo-run\` 명령을 사용하는 방법은 다음[지침](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)따르십시오. 내부적으로는[Lambdaclass](https://lambdaclass.com/)에서 개발한[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs)실행에 사용됩니다.

여기[](https://github.com/starkware-libs/cairo2/tree/main/examples)시작하는 데 도움이 되는 더 많은 예를 찾을 수 있습니다. 이것은 컴파일러 개발에 대한 첫 번째 엿보기일 뿐입니다. 앞으로 몇 주 안에 컴파일러와 함께 CLI를 개선할 것입니다.

## 향후 계획

1분기 초에 계획된 컴파일러의 첫 번째 버전의 초점은 Cairo 1.0에서 StarkNet의 모든 기존 기능을 지원하는 것입니다. 또한 Cairo 1.0 컴파일러의 기능을 확장하기 위해 노력하고 있습니다. 앞으로 몇 주 동안 다음을 기대할 수 있습니다.

* StarkNet 기능 — 스마트 계약 작성 및 시스템 호출 사용.
* 루프
* 새로운 라이브러리 기능
* 향상된 언어 서버
* StarkNet 가스의 기본 개념

계속 지켜보고 컴파일러 진행 상황을 추적하십시오!