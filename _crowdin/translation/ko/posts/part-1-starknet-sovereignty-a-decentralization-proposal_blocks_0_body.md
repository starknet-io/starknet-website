### TL; DR

* StarkNet의 분산화에는 기본 토큰과 새로운 기반이 포함됩니다.
* StarkNet 토큰은 거버넌스와 네트워크의 결제 및 스테이킹 자산으로 사용됩니다.
* 100억 개의 토큰이 발행되었으며 할당이 시작되었습니다.
* 현재 설립 중인 스타크넷 재단은 스타크넷을 공공재로 유지하는 사명을 갖게 될 것입니다.

StarkNet은 이더리움이 탈중앙화, 투명성, 포용성 및 보안이라는 이더리움의 핵심 원칙을 손상시키지 않고 STARKs라는 암호화 프로토콜을 통해 확장할 수 있도록 구축된 무허가 분산 레이어 2(L2) 유효성 롤업입니다.

StarkNet의 Alpha는 2021년 11월 메인넷에서 출시되었습니다. 1년이 채 되지 않아 전 세계 수십 개의 팀이 작업하는 생태계가 형성되고 있습니다. 이제 네트워크의 탈중앙화를 발전시켜 이더리움의 L2에 요구되는 활성, 검열 저항, 투명성 및 포용성을 달성할 때입니다.

탈중앙화는 네트워크의 운영과 발전이 StarkWare를 포함한 단일 엔티티에 의존하지 않음을 의미합니다. 무허가 지분증명 리더 선거 메커니즘과 거래 수수료의 온체인 지불은 둘 다 네이티브 토큰을 사용하여 StarkWare가 존재하지 않는 경우에도 네트워크가 Ethereum의 L2로 안정적으로 작동할 수 있도록 합니다. StarkNet의 지속적인 유지 관리에 관한 결정은 StarkWare에서 커뮤니티로 전환됩니다. StarkNet 토큰과 재단은 이러한 노력의 핵심 요소가 될 것입니다.

동시에 게시된 세 개 중 첫 번째 게시물인 이 게시물은 지금까지의 StarkNet의 여정을 요약하고 StarkNet 토큰과 StarkNet 재단을 소개합니다. [다음 게시물](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)StarkNet 거버넌스 모델에 대해 논의하고[](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)StarkNet의 토큰 모델에 중점을 둡니다.

*다음 StarkNet 지지자(알파벳순)에게 이 게시물의 초안에 대한 의견을 주신 Guily_Gioza(토폴로지), Itamar Lesuisse(Argent), Jonas Nelle(Pontis), Martin Triay(OpenZeppelin), Polynya, Sylve Chevet(Briq)에게 감사드립니다. , Tomasz Stańczak (Nethermind).*

### 지금까지의 이야기

[StarkNet](https://starknet.io/)은 암호화와 개방형 생태계로 구축되었습니다. **암호화****[STARKs](https://eprint.iacr.org/2018/046.pdf)**입니다. 이들은 Ethereum을 수십 배로 확장하는 수학 기반 프로토콜입니다. 신뢰할 수 있는 설정이 필요하지 않고 양자 이후에 안전하며 모든 규모에서 간결하게 배포할 수 있습니다. 생태계는 이더리움의 계산 능력이 확장될 때 가능해지는 새롭고 창의적인 애플리케이션 도메인뿐만 아니라 블록체인 기술을 확장하기 위한 인프라와 도구를 수년 동안 구축하기를 원했던 핵심 개발자들로 구성됩니다.

StarkNet은 Ethereum의 핵심 가치를 유지하면서 Ethereum을 확장하기 위해 모든 개발자와 사용자에게 STARK의 규모와 보안 이점에 대한 액세스를 제공합니다. STARK는 StarkWare의 공동 설립자에 의해 발명되었으며, 처음으로 고객을 위한[StarkEx](https://starkware.co/starkex/)스케일링 솔루션을 구축하는 데 사용되었습니다. 그 후 StarkWare 및 기타 개발자 팀(총칭하여 "핵심 기여자")은 이러한 확장 기술을 모든 사람이 영구적으로 액세스할 수 있도록 하기 위해 퍼블릭, 분산형 및 무허가 인프라인[StarkNet](https://starkware.co/starknet/)을 구축했습니다.

거의 1년 전에 StarkNet Alpha가 출시되면서 StarkNet을 구축하고 육성하는 데 전념하는 더 큰 생태계가 등장했습니다. 전 세계적으로 수많은 개발자 팀이 핵심 인프라와 여기에 새로운 애플리케이션을 구축하고 있습니다.

### **탈중앙화의 길**

STARK 기술은 성숙하고 안전하지만 StarkNet은 Ethereum이나 인터넷과 같은 공공재의 지위를 얻지 못했습니다. StarkNet이 이 목표를 달성하려면 거버넌스, 운영 및 개발이 계속해서 분산되어야 합니다. 이는**StarkNet Foundation**및**StarkNet Token**의 두 가지 메커니즘을 통해 촉진됩니다.

#### 기반

비영리 단체로서 재단의 임무는 StarkNet을 사회의 모든 구성원이 사용할 수 있는 상품 또는 서비스인 공공재로 유지하는 것입니다. StarkNet은 모두가 사용할 수 있어야 하는 무허가 인프라입니다. 공공 사용을 위해 안전하고 효율적으로 사용하려면 잘 관리되어야 합니다. 또한 사용자를 차별해서는 안 됩니다.

재단은 StarkNet 토큰의 일회성 보조금으로 자금을 조달할 것입니다. 프로토콜 업데이트, 분쟁 해결 및 공공재 자금 조달과 같은 필수 기술 문제에 대한 커뮤니티 의사 결정을 위한 상향식 메커니즘의 개발을 장려할 것입니다.

#### 토큰

StarkNet 토큰은 생태계를 운영하고 유지 및 보호하며 가치와 전략적 목표를 결정하고 진화를 지시하는 데 필요합니다. 이 토큰은 (i) 거버넌스, (ii) StarkNet의 거래 수수료 지불 및 (iii) StarkNet의 합의 메커니즘 참여에 필요합니다.

우리는 StarkWare 및 StarkWare의 투자자를 포함한 StarkNet 생태계의 핵심 기여자, StarkNet 소프트웨어 개발자 파트너 및 재단에 할당되는 초기 100억 개의 토큰을 발행했습니다. 곧(목표: 2022년 9월) 토큰은 이더리움에서 ERC-20 토큰으로 이동하고 네트워크 업그레이드에 대한 거버넌스 및 투표에 사용하도록 요청될 것입니다. 나중에 StarkNet 수수료는 ETH로 수수료를 지불하는 데 관심이 있는 사용자에게 좋은 사용자 경험을 보장하면서 이 토큰으로만 지불됩니다. 나중에 추가 스타크넷 토큰의 자동 발행이 시작됩니다(즉, 순환하는 토큰의 수가 100억 개 이상임).

StarkNet 토큰 모델은 개발자의 작업에 대한 보상을 강조합니다. 신규 발행 및 거래 수수료(StarkNet 사용에 대해 평가된 수수료)의 일부는 핵심 인프라 개발자와 스마트 계약 개발자가 프로토콜을 설계하고 출시하기 위해 수행한 작업에 대해 부여되며 StarkNet 운영자는 해당 작업에 대한 보상을 받습니다. 운영하기로 했습니다.

새롭고 전용인 StarkNet 토큰의 전체 근거는[초 게시물](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)에서 설명하고 StarkNet 토큰 설계 원칙 및 초기 할당은[세 번째 게시물](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)에서 논의합니다.