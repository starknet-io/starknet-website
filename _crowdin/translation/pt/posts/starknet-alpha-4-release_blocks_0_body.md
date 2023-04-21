### Vezes excitantes à frente

A Alfa 4 foi lançada hoje em Goerli. Esta versão é a principal candidata à liberação e, se tudo correr de acordo com o plano, será implantada na Mainnet até o final do mês.

A Alfa 4 segue a liberação empacotada da Alfa 3, que inclui, entre outras coisas, melhorias para os tempos de compilação do Cairo e muito mais (veja as[notas de lançamento completas](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Importante a notar: esta ainda é uma versão Alfa — para implantar seu contrato na implantação principal siga as diretrizes de[integração](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)dos novos aplicativos.

### Novos recursos

Embora o foco desta versão seja em se preparar para a implantação principal da rede, ela também inclui várias novas funcionalidades:

#### Obter o endereço deste contrato

Os contratos agora podem obter seu próprio endereço através do novo syscall \`get_contract_address\`. Finalmente, podemos despojar o contrato de selfie.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Contrato de selfie RIP: Setembro de 2021-novembro de 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10 de novembro, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Hash do Bloco

Os blocos agora são identificados via hash, em vez do Id. Isso segue nossa última transição para o hash de transação. Todas as APIs foram atualizadas em conformidade. Em breve disponibilizaremos toda a documentação técnica do sistema, que incluirá também a especificação da estrutura bloco.

#### Endereços do contrato

Esta versão introduz uma mudança na forma como os endereços do contrato são calculados. O endereço é um hash da Pedersen no endereço da chamada, um sal (aleatório ou escolhido pelo deployer), o hash do código do contrato e o hash dos argumentos do construtor, todos anexados por um prefixo.

```
Hash(PREFIX, endereço_chamadores, sal, contrato, hash, ctr_args_hash)
```

Na versão atual, o endereço do chamador é sempre igual a 0, mas em versões futuras, isso permitirá a implantação de contratos diretamente de contratos existentes.

Observe que este esquema é muito semelhante ao CREATE2.

[Veja as notas completas do lançamento](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Pontes de Token

Pontes de token são uma parte crucial da infra-estrutura StarkNet. Eles permitem a transferência de fundos para a StarkNet. A ponte não é implantada no momento da publicação, mas deve estar disponível em alguns dias — juntamente com a documentação completa de sua funcionalidade e uso. Uma coisa importante de notar é que a ponte usa o protocolo[L1<>L2 em mensagens](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). Como tal, oferece curtos tempos de retirada — uma vez que um lote é incluído e aceito no L1, os fundos estão disponíveis instantaneamente para o usuário em L1.

Esta é a primeira versão das pontes dos tokens, e gostaríamos muito de obter feedback do ecossistema nele.

### Entrar no StarkNet

Nunca houve um momento melhor para participar da crescente comunidade StarkNet. Você pode participar da conversa na[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), participar de uma[oficina online](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), ou use um dos[tutoriais](https://www.cairo-lang.org/docs/hello_starknet/index.html)para começar a construir seu primeiro aplicativo.

**Atualização (Nov. 2021):**StarkNet Alpha está ao vivo na Ethereum Mainnet