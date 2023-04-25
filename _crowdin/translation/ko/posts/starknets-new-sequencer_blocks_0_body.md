### TL; DR

* 새로운 StarkNet 시퀀서가 개발 중입니다.
* Apache 2.0 라이센스에 따라 오픈 소스입니다.
* 첫 번째 목표는 StarkNet의 처리량을 높이는 것입니다.

### 반짝이는 새 시퀀서

새로운 StarkNet Sequencer가 작업 중임을 발표하게 되어 기쁩니다. StarkNet의 기술 스택이[Cairo 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)및[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)에 이어 오픈 소스로 이동함에 따라 이제 StarkNet의 새로운 시퀀서를 계속 사용합니다. Apache 2.0 라이선스에 따라 사용할 수 있는 오픈 소스가 될 것이며 지금[the repo](https://github.com/starkware-libs/blockifier)확인할 수 있습니다!

새로운 시퀀서를 구축하는 것은 몇 달 전에 발표한[StarkNet 로드맵](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)의 일부입니다. 새로운 시퀀서의 구현은 블록 실행을 수행하는 시퀀서 내의 모듈인**Blockifier**의 교체로 시작됩니다. 로드맵에서 설명했듯이 StarkNet의 성능에 대한 이점을 제공할 것으로 예상됩니다.

이 시퀀서를 구축하기 위한 우리의 접근 방식은 StarkNet Alpha에서 우리를 안내했던 것과 동일한 접근 방식입니다. 시퀀서****단계에서 구현되며 오늘 첫 번째 모듈을 공유합니다. 시간이 지남에 따라 시퀀서의 새로운 구성 요소가 완성되고 결국 Rust 기반 시퀀서가 현재 Python 기반 시퀀서를 완전히 대체할 것입니다.

### 시퀀서는 무엇을 합니까?

StarkNet에서 사용자가 트랜잭션을 보낸 후 STARK 스케일링으로의 트랜잭션 여정에서 첫 번째 중지는 시퀀서입니다. StarkNet 프로토콜에서 시퀀서는 트랜잭션 주문 및 블록 생성을 담당합니다. 블록이 시퀀서에 의해 생성되고 합의 프로토콜에 의해 승인된 후 증명자는 L1에 대한 증명을 인계받아 생성합니다.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### 오픈 소싱

StarkNet Alpha는 2021년 11월 메인넷에서 출시되었습니다. 처음부터 STARK 스케일링의 힘을 전 세계와 공유하기로 약속했습니다.

오늘 우리는 새로운 오픈 소스 시퀀서의 첫 번째 모듈 라인을 출시합니다. 모든 모듈과 하위 모듈을 배포하는 데 몇 개월이 걸립니다. 모든 것을 오픈 소싱하면 커뮤니티 구성원이 개발에 기여하고 코드베이스를 감사할 수 있습니다.

이것은 StarkNet을 분산된 무허가 시퀀싱 지점에 더 가깝게 만들 것입니다. 우리는 현재 StarkNet의 분산형 프로토콜을 설계하고 있으며 커뮤니티가[연구 및 토론에 참여하도록 권장하고 있습니다](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### 성능

StarkNet의 원래 시퀀서는 주로 StarkEx 인프라를 채택한 것입니다. 이제 분산형 고성능 네트워크의 요구 사항을 위해 특별히 구축된 인프라가 필요합니다.

Rust에 내장된 새로운 시퀀서는 성능을 염두에 두고 설계 및 개발되었습니다. 새로운 시퀀서는 또한 견고한 토대 위에 구축됩니다. 새로운[StarkNet 전체 노드인 Papyrus,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)상태 관리를 처리하고 LambdaClass의 새로운 Cairo-VM인 cairo-rs는 카이로 실행 속도를 높일 것입니다. 우리는 새로운 시퀀서가 모든 측면에서 기존 시퀀서를 개선할 것으로 기대합니다. StarkNet에 이 시퀀서를 통합하면 네트워크의 처리량과 대기 시간이 크게 향상될 것으로 예상됩니다.

또한 다른 인프라 및 개발 도구에서 새로운 시퀀서를 사용하여 개발 환경을 개선할 수 있을 것으로 기대합니다. 전체 노드 성능은 모든 테스트 프레임워크와 마찬가지로 향상될 것으로 예상됩니다.

### 요약

오늘 새로운 오픈 소스 시퀀서를 발표하게 되어 기쁩니다. 첫 번째 모듈은 이미 커뮤니티에서 검토할 수 있으며 앞으로 몇 달 동안 더 많은 모듈이 뒤따를 것입니다. 우리는 또한 StarkNet의 성능 향상을 위한 로드맵에서 또 다른 단계를 밟게 되어 기쁩니다. 우리는 네트워크를 보다 효율적이고 접근하기 쉽게 만드는 것을 목표로 하고 있으며 이 여정에 함께 해주신 모든 분들의 지원에 감사드립니다.