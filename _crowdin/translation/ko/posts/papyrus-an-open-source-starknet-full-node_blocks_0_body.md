# Papyrus: 오픈 소스 StarkNet 전체 노드
## Papyrus는 분산형 StarkNet 인프라의 핵심 구성 요소가 될 것입니다.
**TL; DR**
* Papyrus는 StarkNet 전체 노드의 Rust 구현입니다. * 새로운 StarkNet Sequencer의 기반을 제공하여 StarkNet의 처리량을 크게 향상시킵니다. * Papyrus는 성능 및 분산화를 향상시키는 데 도움이 됩니다. 이제 StarkNet이 뛰어난 사용성을 달성했으므로 주요 개발 우선 순위는 다음과 같습니다.
## 소개
오늘 우리는 StarkNet 전체 노드의 Rust 구현인 Papyrus를 소개합니다. 이는 StarkNet의 대량 사용을 위한 길을 닦는 데 도움이 될 것입니다. [Papyrus 전체 노드](https://github.com/starkware-libs/papyrus)은 시간이 지남에 따라 진화하는 StarkNet의 상태를 추적하고 사용자와 개발자가[StarkNet의 JSON-RPC](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json)을 통해 이 상태를 쿼리할 수 있도록 합니다. Papyrus는 몇 달 안에 StarkNet의 처리량을 극적으로 향상시킬 새로운 StarkNet Sequencer의 기반을 제공할 것입니다. Papyrus는 StarkNet 상태와의 동기화 및 유지를 담당하는 Pathfinder 및 Juno와 같은 다른 StarkNet 전체 노드에 합류합니다. StarkNet 스택의 오픈 소스로의 지속적인 움직임에 따라 Papyrus는 Apache 2.0 라이선스에 따라 오픈 소스입니다.
## Papyrus — 최적화된 시퀀서의 기초
초기에 우리는 StarkNet 개발</a>의 단계가
과 같다고 말했습니다: (i) 먼저 기능과 유용성, (ii) 규모와 성능, 그리고 마지막으로 (iii) 분산화. StarkNet은 뛰어난 사용성을 달성했으며 이제 시스템 성능이 최우선 순위이며 탈중앙화가 힘을 얻고 있습니다. 시스템의 성능 향상은 StarkNet 블록 생성을 담당하는 Sequencer의 성능 향상으로 해결되고 있습니다. Sequencer는 제출된 트랜잭션을 주문하고 실행하는 "기계"입니다. Papyrus는 StarkNet Sequencer에 효율적인 스토리지 계층을 제공하여 처리량을 향상시키는 데 도움이 됩니다. 첫째, 이것은 시퀀서가 클라우드 기반 DB가 아닌 로컬 DB를 유지한다는 것을 의미합니다. 또한 Papyrus는 평평한 키/값 저장소를 저장합니다. 즉, Merkle-Patricia 경로를 통해 도달하지 않고 상태와 직접 상호 작용합니다.</p> 


## StarkNet 스택 강화 및 분산화

현재 StarkNet 전체 노드를 개발하는 두 팀이 있습니다. Rust로 구현된 Equilibrium의[Pathfinder](https://github.com/eqlabs/pathfinder)과 Golang 구현의 첫 번째 공식 버전을 위해 노력하고 있는 Nethermind의 Juno</a>가 있습니다. 오늘 Papyrus는 이 건강한 조합에 합류하여 분산화와 이중화를 촉진합니다. 또 다른 풀 노드를 추가하고 오픈 소스로 만드는 것은 다양한 클라이언트 구현을 제공하는 데 도움이 되며, 이는 탈중앙화 네트워크의 강점과 공공재로서의 위상을 확고히 하는 중요한 지표입니다.</p> 


## 현재 릴리스 및 향후 계획

현재 버전을 사용하면 StarkNet 상태와 동기화하고 StarkNet의 전체 기록에 액세스할 수 있습니다. 현재 JSON-RPC 사양</a>진행 상황을 추적할 수 있습니다. Papyrus는 현재 오픈 소스로 제공되고 있으며, 몇 달 안에 일반에 공개될 예정입니다. [JSON-RPC 사양](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json)과의 완전한 호환성 작업 외에도 Papyrus 팀은 Pathfinder 및 Juno와 함께[StarkNet P2P 계층](https://github.com/starknet-io/starknet-p2p-specs)의 기반을 형성하기 위해 노력할 것입니다. 서로 다른 노드가 P2P 계층을 통해 통신하고 동기화할 수 있다는 것은 분산형 StarkNet을 향한 큰 도약입니다. 또한 피어에서 동기화하는 기능(각 노드가 중앙 집중식 API와 통신하는 오늘날의 상황과 반대)은 동기화 시간을 크게 개선해야 합니다. 요약하면 Papyrus는 StarkNet 생태계에 합류하는 세 번째 전체 노드입니다. 오픈 소스 라이센스(Apache 2.0)로 출시되며 분산형 StarkNet 인프라의 중요한 부분을 형성합니다.</p>