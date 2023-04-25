### TL; DR

* StarkNet Bridge의 첫 번째 버전인 StarkGate Alpha는**[Testnet](https://goerli.starkgate.starknet.io/)**,**[Mainnet](https://starkgate.starknet.io/)**에서 라이브로 진행됩니다!
* 개선할 수 있는 방법에 대한 커뮤니티 피드백을 기다리고 있습니다. [StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)및[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)모두에 대한 피드백을 보낼 수 있습니다.
* 메인넷 배포가 곧 이어집니다(업데이트, 2022년 5월 9일: StarkGate가 메인넷에서 활성화됨)

흥분! StarkNet's Bridge의 첫 번째 버전인 StarkGate Alpha를 출시하게 되어 기쁩니다. 이제 Goerli 테스트넷에 라이브로 제공되며 메인넷 배포는 곧 뒤따를 것입니다.*

\*(업데이트, 2022년 5월 9일: StarkGate가 메인넷에서 활성화됨)

**중요한 면책 조항: 이것은 StarkGate Alpha의 알파 버전입니다(아래의 작은 글씨를 읽으십시오!).**

![](/assets/starkgate_01.png)

계속하기 전에 확인하십시오! [StarkGate 테스트넷](https://goerli.starkgate.starknet.io/),[StarkGate 메인넷](https://starkgate.starknet.io/)

StarkGate는 이더리움과[StarkNet](https://starknet.io/)사이의 게이트웨이 역할을 하며 사용자가 브리지에서 기대할 수 있는 모든 것을 할 수 있도록 합니다.

#### **StarkGate 작동 방식에 대한 정보는 어디에서 찾을 수 있습니까?**

StarkGate의 작동 방식을 이해하려면[기술 문서](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)읽고[코드](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)을 살펴보십시오. 이것은 첫 번째 버전이며[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)및[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)을 개선하는 방법에 대한 피드백과 제안을 환영합니다.

#### **StarkGate는 어떤 토큰을 지원하나요?**

* Goerli의 StarkGate Alpha는 ETH 및 몇 가지 다른 ERC-20 토큰을 지원합니다. Ethereum 및 StarkNet의 전체 목록 및 관련 계약 주소는 이[repo](https://github.com/starkware-libs/starknet-addresses)에서 사용할 수 있습니다.
* 메인넷에서 초기에 StarkGate Alpha는 수수료 메커니즘을 사용할 수 있도록 ETH만 지원합니다. 나중에 WBTC, USDC, USDT 및 DAI에 대한 지원을 추가할 예정입니다. 이[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)에서 관련 계약 주소를 볼 수 있습니다.

앞으로 우리는 추가 토큰에 대한 지원을 추가하기 위한 메커니즘을 게시할 것입니다.

#### **StarkGate Alpha는 메인넷에서 어떤 안전 제한이 있습니까?**

메인넷의 StarkGate Alpha는 알파 버전 사용과 관련된 위험을 줄이기 위해 두 가지 제한 사항과 함께 시작됩니다.

1. L1의 브리지에서 잠긴 총 가치(TVL)는 각 토큰 유형의 양을 제한합니다.
2. StarkGate를 통해 L1에서 L2(Ethereum→StarkNet)로 보내는 각 트랜잭션의 최대 금액이 제한됩니다.

우리는 이러한 한계를 점진적으로 완화하고 자신감이 커짐에 따라 완전히 해제할 계획입니다. 업데이트된 매개변수는 StarkGate의[문서](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)에서 찾을 수 있습니다.

![](/assets/starkgate_02.png)

### 알파와 그 의미

항상 그렇듯이 StarkNet은 현재**Alpha**단계에 있습니다.

* 물건이 깨질 수 있습니다. 그들이 치명적으로 실패하면 자금을 잃을 수 있습니다(**아래 면책 조항을 읽으십시오**!).
* StarkNet Alpha와 StarkGate 계약 모두 타임록 없이 업그레이드할 수 있습니다. 우리는 이러한 업그레이드를 미리 발표할 것으로 예상하지만 임박한 보안 위험의 경우(예: 심각한 버그가 발견된 경우) 업그레이드가 경고 없이 적용될 수 있습니다.
* 브리지 코드와 StarkNet Alpha의 일부는 아직 감사되지 않았습니다. StarkGate Alpha의 ABDK 및 Nethermind 감사가 곧 완료될 예정입니다.

모든 사용자가 다음 플랫폼 중 하나를 사용하여 피드백을 제공하여 브리지 개선에 도움을 줄 것을 권장합니다.

1. [StarkGate 프런트엔드 저장소](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate 계약 저장소](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [스타크넷 샤먼스](http://community.starknet.io/)

질문 및 개발 지원을 받으려면[StarkNet discord 서버](https://discord.gg/uJ9HZTUk2Y)에 가입하십시오.

### 부인 성명

***StarkNet Alpha는 완전히 감사되지 않은 새롭고 복잡한 시스템입니다. StarkNet Bridge에도 동일하게 적용됩니다. 모든 복잡한 소프트웨어 시스템과 마찬가지로 StarkNet과 브리지에는 극단적인 경우 모든 자금 손실로 이어질 수 있는 버그가 포함될 수 있습니다. 그래서,***조심하고 조심하세요!******

*StarkNet 생태계는 크고 빠르게 성장하는 독립적인 팀 및 개인의 집합이며 StarkWare는 이에 대한 감독이나 책임이 없습니다. 생태계 구성원이 개발한 프로젝트 중 하나에는 극단적인 경우 모든 자금 손실로 이어질 수 있는 버그가 포함될 수 있습니다. 또한 더 많은 스마트 계약이 배포됨에 따라 의도하지 않은 유해한 버그와 악의적인 사기 및 러그 풀의 가능성이 증가합니다. 따라서 StarkNet의 모든 스마트 계약은 Ethereum의 스마트 계약을 취급하는 것처럼 취급하고 안전하다고 믿을만한 타당한 이유가 있는 계약만 사용하십시오.*