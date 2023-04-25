### 앞으로의 흥미로운 시간

Alpha 4는 Goerli에서 오늘 출시되었습니다. 이 버전은 메인넷 릴리스 후보이며 모든 것이 계획대로 진행된다면 이달 말까지 메인넷에 배포될 것입니다.

Alpha 4는 무엇보다도 Cairo 컴파일 시간, 계약 생성자 등에 대한 개선 사항이 포함된 기능이 가득한 Alpha 3 릴리스를 따릅니다([전체 릴리스 노트](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)참조).

중요 사항: 이것은 아직 알파 버전입니다. Mainnet 배포에 계약을 배포하려면 새 앱의[온보딩](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)지침을 따르십시오.

### 새로운 기능

이 버전의 주요 초점은 메인넷 배포 준비에 있지만 몇 가지 새로운 기능도 포함되어 있습니다.

#### 이 계약의 주소 가져오기

계약은 이제 새로운 syscall \`get_contract_address\`를 통해 자체 주소를 얻을 수 있습니다. 마침내 셀카 계약을 중단할 수 있습니다.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP 셀카 계약: 2021년 9월 ~ 2021년 11월</p>&mdash; 프란체스코 세콘(@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">2021년 11월 10일</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### 블록 해시

블록은 이제 ID가 아닌 해시를 통해 식별됩니다. 이것은 트랜잭션 해시로의 최신 전환을 따릅니다. 이에 따라 모든 API가 업데이트되었습니다. 우리는 곧 블록 구조의 사양을 포함하는 시스템의 전체 기술 문서를 발표할 것입니다.

#### 계약 주소

이 버전에서는 계약 주소가 계산되는 방식이 변경되었습니다. 주소는 호출자 주소의 Pedersen 해시, 소금(무작위 또는 배포자가 선택한), 계약 코드 해시 및 생성자 인수의 해시이며 모두 접두사가 추가됩니다.

```
해시(접두사, caller_address, 소금, contract_hash, ctr_args_hash)
```

현재 버전에서 호출자 주소는 항상 0이지만 향후 버전에서는 기존 계약에서 직접 계약을 배포할 수 있습니다.

이 체계는 CREATE2와 매우 유사합니다.

[전체 릴리스 정보 보기](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### 토큰 브리지

토큰 브리지는 StarkNet 인프라의 중요한 부분입니다. 그들은 StarkNet과 자금을 이체할 수 있습니다. 게시 시점에 브리지가 배포되지는 않았지만 기능 및 사용에 대한 전체 문서와 함께 며칠 내에 사용할 수 있습니다. 한 가지 중요한 점은 브리지가[L1<>L2 메시징](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)프로토콜을 사용한다는 것입니다. 따라서 인출 시간이 짧습니다. 인출이 배치에 포함되고 L1에서 승인되면 L1의 사용자가 자금을 즉시 사용할 수 있습니다.

이것은 토큰 브리지의 첫 번째 버전이며 이에 대한 생태계의 피드백을 받고 싶습니다.

### 스타크넷 가입

성장하는 StarkNet 커뮤니티에 합류하기에 지금보다 더 좋은 때는 없었습니다. [StarkNet discord](https://discord.gg/uJ9HZTUk2Y)에서 대화에 참여하거나[온라인 워크샵](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)에 참여하거나[자습서](https://www.cairo-lang.org/docs/hello_starknet/index.html)중 하나를 사용하여 첫 번째 앱 구축을 시작할 수 있습니다.

**업데이트(2021년 11월):**StarkNet Alpha가 이더리움 메인넷에서 실행 중입니다.