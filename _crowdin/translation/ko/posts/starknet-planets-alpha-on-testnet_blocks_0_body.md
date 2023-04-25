### **TL; DR**

* [StarkNet Planets Alpha](https://voyager.online/)— 메인넷으로 가는 첫 번째 단계 — 이제 테스트넷에서 생중계됩니다!
* [StarkNet](https://starkware.co/product/starknet/)비허가 Turing-complete ZK-Rollup¹입니다.
* 개발자는 스마트 계약에서 선택한 비즈니스 논리를 구현하고 StarkNet에 허가 없이 배포할 수 있습니다.
* StarkNet의 상태 전환은 오프체인에서 검증된 다음 온체인에서 검증됩니다.
* Ethereum과 마찬가지로 사용자는 이러한 스마트 계약과 직접 상호 작용할 수 있습니다.

### **소개**

우리는 2021</a>1월에[StarkNet](https://starkware.co/product/starknet/)의 로드맵을

발표했습니다. 확장성 솔루션의 성배는 (i) 임의의 스마트 계약, (ii) 구성 가능성, (iii) 분산 네트워크를 통해 운영되는 것을 지원합니다. 오늘 우리는 1단계: StarkNet Planets Alpha의 테스트넷 배포를 발표합니다. Alpha 시스템은 임의의 스마트 계약을 지원합니다. 구성 가능성은 올해 후반에 지원될 예정이며, 탈중앙화가 뒤따를 것입니다.</p> 

완전히 투명하고 기대치를 적절하게 설정하는 것이 매우 중요합니다. 이 게시물의 목적은 이미 지원되는 기능과 아직 누락된 기능을 명확하게 나열하는 것입니다. 오늘 우리가 공개하는 것은 테스트넷에서 진행 중인 작업입니다. 우리는 이 초기 릴리스가 StarkNet과 그 도구를 중심으로 건강한 생태계를 형성하는 데 도움이 될 것이라고 믿습니다. 우리는 우리와 함께 네트워크를 구축하는 데 개발자를 참여시키고 커뮤니티로부터 지속적인 피드백을 받고자 합니다.



### **StarkNet Planets Alpha에는 무엇이 있습니까?**

**기능:**Alpha를 사용하면 개발자가 일반 계산을 위해 StarkNet 계약을 작성하고 배포할 수 있습니다. 허용 목록이 없습니다. 모든 개발자가 원하는 계약을 작성하고 배포할 수 있습니다. 사용자는 트랜잭션을 전송하고 상태를 검사하여 이러한 계약과 상호 작용할 수 있습니다. 모든 계약은 단일 상태²에 존재합니다. 이 상태에 대한 업데이트는 오프체인에서 검증되고 온체인에서 검증됩니다. 알파에서는 검증이 테스트넷에서 수행됩니다.

**StarkNet OS:**위의 기능은 StarkNet OS라고 하는 새로운 "운영 체제"에서 지원됩니다. StarkNet에서*증명 가능한*상태 전환을 제공합니다. Ethereum 개발자는 이를 EVM과 동일하게 생각할 수 있습니다. 스마트 계약 기능 호출, 계약 저장 처리 등을 담당합니다. StarkNet OS의 아키텍처를 자세히 설명하는 별도의 게시물을 게시할 예정입니다.

**알파에 없는 것은 무엇입니까?**Alpha에는 여전히 L1<>L2 상호 작용, 온체인 데이터 및 구성 가능성과 같은 일부 핵심 기능이 없습니다. 아래에서 이에 대해 자세히 알아보세요.



#### **발 젖기**

[자습서 및 설명서](https://www.cairo-lang.org/docs/hello_starknet/)로 시작하십시오.

그런 다음 StarkNet에서 작성하고 배포한[샘플 AMM 스마트 계약](http://cairo-lang.org/docs/hello_starknet/amm.html)통해 읽을 수 있습니다. 간단한 AMM이며 여기[](https://starkware-amm-demo.netlify.app/swap)상호 작용할 수 있습니다. 이제 StarkNet에서 스마트 계약을 작성하고 배포할 준비가 되었습니다. StarkNet용 블록 탐색기([Voyager](https://voyager.online/))를 사용하면 누구나 StarkNet의 상태를 검사할 수 있습니다.\
우리가 계속해서 추가 기능을 출시함에 따라 발을 담그면 StarkNet에서 구축할 준비가 더 잘 될 것이라고 믿습니다. 우리는 이미 첫 번째 해커톤과 개발자 워크숍을 계획하고 있습니다.



### **StarkNet을 위한 다음 단계**

Alpha에서 아직 누락된 주요 기능은 앞으로 몇 주 안에 출시될 예정입니다. 이것들은:

* L1<>L2 상호 작용, 예: L1에서 자금을 입금하고 인출하는 기능.
* 온체인 데이터: 모든 스토리지 변경 사항을 이더리움에 게시합니다.
* 구성 가능성: 계약이 서로 통신할 수 있도록 합니다.

이러한 기능을 갖추면 스타크넷을 이더리움 메인넷으로 가져올 준비가 될 것입니다. 우리는 StarkNet의 진화 Constellations에서 이 단계를 호출하고 도달하면 Ethereum Mainnet 확장 가능한 L2 dApp을 구축하고 무단으로 배포할 수 있습니다.



#### **스타크넷 생태계**

우리는 StarkNet을 중심으로 형성되고 있는 생태계에 매우 흥분하고 있으므로 지금까지 협력해 주신 분들께 감사드립니다.

[Nethermind](https://twitter.com/nethermindeth)및 Nubia 팀,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway.fm),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof . Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, 마지막으로[Paradigm](https://twitter.com/paradigm)팀.\
초기 파트너인[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi),[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)등은 첫날부터 귀중한 정보를 제공했으며 프로덕션을 구축할 수 있도록 했습니다. 실제 사용자를 위한 등급 네트워크.\
우리는[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), 그리고[알렉산드리아 팀](https://blockchainpartner.fr/).

우리는 커뮤니티가 개발자 도구, 콘텐츠, 물론 그들이 구축할 StarkNet 애플리케이션 등 모든 면에서 무엇을 만들 것인지 기대하고 있습니다. 좋아하는 미디어([discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co))에서 대화를 계속 이어나가고 곧 가장 분산된 커뮤니케이션 형식인 f2f를 사용합니다.

¹ 우리는 ZK-Rollup이라는 용어의 팬이 아닙니다. 수학적으로 말해서 ZK-Rollup은 영지식은 아니지만 여러분 모두 우리가 의미하는 바를 알고 있습니다.

² Mainnet의 현재 StarkEx 배포를 위해 유지되는 별도의 상태와 달리

**업데이트(2021년 11월):**StarkNet Alpha가 이더리움 메인넷에서 실행 중입니다.