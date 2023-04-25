### TL; DR

* 스타크넷 토큰(STRK)이 이제 이더리움 메인넷에 배포됩니다.
* **사기를 조심하세요!**StarkNet 토큰은 판매용으로 제공되지 않습니다.
* 재단이 토큰 분배 메커니즘을 결정하는 데 시간이 걸릴 것입니다.
* StarkWare 주주, 직원 및 독립 파트너 소프트웨어 개발자가 보유한 토큰은 4년 동안 잠겨 있으며 1년 후 점진적 릴리스가 시작됩니다.
* 토큰은 투표, 스테이킹 및 수수료 지불에 대한 사용 덕분에 StarkNet의 분산화를 더욱 촉진할 것입니다.

오늘날[StarkNet](https://starknet.io/)탈중앙화를 향한 또 다른 발걸음을 내딛고 있습니다. StarkNet 토큰은 이제 Ethereum</a>에서

입니다. 빠르게 요약: STRK는 거버넌스 토큰으로서 StarkNet의 합의 메커니즘에 참여하고 거래 수수료를 지불하기 위한 스테이킹 토큰으로 사용될 것입니다. 이러한 각 유틸리티에 대한 이론적 근거는 "토큰은 무엇에 사용됩니까?" 섹션의[분권화 제안](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)에 제시되어 있습니다.</p> 

***사기에 주의하십시오:**작성 시점에는 StarkNet 토큰을 구매할 수 있는 방법이 없습니다. 이 비판매 기간은[StarkNet Foundation](https://twitter.com/StarkNetFndn)의 추가 공지가 있을 때까지 유지됩니다. STRK의 상태에 대한 업데이트를 알아보려면 StarkNet Foundation의 공식 커뮤니케이션을 따르십시오. [StarkNet Discord](http://starknet.io/discord)서버의[scam-report](https://discord.gg/qypnmzkhbc)채널에서 사기를 신고하고 다른 사기 신고를 확인할 수 있습니다.*

이 게시물은 토큰 할당 프로세스와 배포된 토큰 계약이 토큰의 세 가지 설계된 유틸리티 중 두 가지, 즉 투표 및 스테이킹을 제공하는 방법을 설명합니다. StarkNet 수수료를 지불하는 세 번째 유틸리티는 나중에 논의될 것입니다.



### 토큰 할당 프로세스 계획

우리는 이전에 토큰의 초기 할당을 위해[계획](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)을 제안했습니다. 주주, 직원 및 독립 소프트웨어 개발자에게 할당된 토큰은 4년 동안 잠겨 있으며 1년 후에 점진적인 릴리스 일정이 시작됩니다. 잠긴 토큰은 투표 및 스테이킹에 사용할 수 있지만 양도하거나 거래할 수는 없습니다. 일부 토큰은 이더리움의 전용 스마트 계약을 통해 잠기고 다른 토큰은 관리인을 통해 잠깁니다.

이와 별도로 기존 StarkNet 토큰의 50.1%는 StarkNet Foundation에 할당되어[목표](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)를 달성하는 데 사용됩니다(cf.[StarkWare의 게시물](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). 이러한 토큰은 잠겨 있지 않습니다. 그러나 재단은 이러한 토큰을 추가로 할당하기 위한 정확한 메커니즘을 공식화하는 데 시간이 필요하며 적시에 계획을 공유할 것입니다.



#### 왜 잠그나요?

앞서 언급한 기간 동안 토큰을 잠그면 현재 기여자가 StarkNet의 장기 인센티브에 부합하도록 보장할 수 있습니다. 또한 네트워크 보안, 수수료 지불 및 거버넌스 분산과 같은 의도된 목적을 위해 널리 사용되기 전에 토큰에 대한 투기를 권장하지 않습니다.

다음으로 토큰 구현이 어떻게 투표 및 스테이킹을 지원하는지 설명합니다.



### 투표

재단은 건전한 거버넌스를 촉진하고 투표 메커니즘을 공식화하는 일을 담당할 것입니다. StarkNet 토큰은 직접 투표와 다양한 위임 메커니즘을 허용하도록 설계되었습니다.



#### L1 투표

이제 배포된 ERC-20 구현에는**선택적**Compound의[위임 모듈](https://docs.compound.finance/v2/governance/)사용이 포함됩니다. 이 모듈은 온체인 투표에 널리 사용됩니다. StarkNet에서 선택 사항이고 기본적으로 꺼져 있는 이유는 비용을 고려하기 때문입니다. 이를 켜면 L1에서 StarkNet 토큰을 전송할 때마다 보팅 파워의 변화를 추적하기 위한 목적으로만 필요한 추가 가스가 필요합니다.



#### 비 L1 투표

Compound의 위임 모듈을 사용한 L1 온체인 투표의 대안으로는 오프체인 투표와 StarkNet 기반 온체인 투표 시스템(예:[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU))이 있습니다. L1 전송의 가스 소비를 크게 줄이는 이러한 대안은 현재 배포된 ERC-20 코드의 명시적 지원이 필요하지 않으므로 본질적으로 지원됩니다.

위에서 언급했듯이 모든 토큰(잠금 및 잠금 해제)은 StarkNet의 투표 메커니즘에서 사용할 수 있습니다.



### 스테이킹

StarkNet의 무허가 및 검열 방지 작업에는 임의의 시퀀서 선택이 필요합니다. 블록을 시퀀싱하고 제안하기 위해 노드가 선택될 확률은 노드가 스테이크하는 스타크넷 토큰의 수에 비례합니다. StarkNet 토큰(이더리움이나 비트코인이 아닌)을 사용하는 근거는[거버넌스 제안](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)에 설명되어 있으며 StarkNet의 스테이킹, 시퀀싱 및 블록 생성에 대한 정확한 세부 사항은 커뮤니티</a>에서 진행 중인토론 중 3이며 다음과 같습니다. 아직 확정되지 않았습니다.</p> 

투표와 마찬가지로 토큰은 잠긴 상태에서도 스테이킹에 사용할 수 있습니다. 이것은 StarkNet 운영자의 다양성과 StarkNet의 탄력성에 기여합니다.



### 요약

Ethereum에 StarkNet 토큰 계약을 배포하는 것은 StarkNet 분산화의 또 다른 단계입니다.

우리는 개발자와 사용자가 사기에 주의할 것을 촉구합니다! 게시 시점에는 거래할 수 있는 토큰이 없으며 이 거래 금지 상태는 StarkNet Foundation의 추가 공지가 있을 때까지 그대로 유지됩니다.

더 많은 질문이 있는 경우[StarkNet Discord](http://starknet.io/discord)서버의[Token-discussions](https://discord.gg/qypnmzkhbc)채널로 이동할 수 있습니다.