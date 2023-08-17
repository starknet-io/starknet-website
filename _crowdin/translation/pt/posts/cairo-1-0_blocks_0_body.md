### TL;DR

* Cairo 1.0 é a primeira grande liberação após a[introdução do Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)há dois anos atrás
* O Cairo 1.0 dará aos desenvolvedores uma linguagem de programação mais segura, mais simples e mais utilizável
* No coração do Cairo 1.0 será**Serra**, uma camada de representação intermediária que promete maior estabilidade a longo prazo para os programas do Cairo
* Sierra desenvolve o Cairo para servir em uma rede sem permissão:\
  -**Protegendo a rede**: ele permite uma proteção DoS mais robusta\
  -**Protegendo o usuário**: permite a resistência à censura na Ethereum-grade 1. Irá afetar StarkNet de muitas maneiras. Também afetará a[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Publicaremos mais informações sobre Regenesis nas próximas semanas.

### Introdução

Em 2020, lançamos o Cairo, uma linguagem de programação completa e demos um grande passo para apoiar a computação verificável usando o STARKs. Hoje, anunciamos**Cairo 1.0**, o maior avanço do Cairo até hoje. Introduzirá uma linguagem melhorada, com características que reforçarão a usabilidade, a segurança e a conveniência. Foi projetado para suportar os requisitos da StarkNety, como uma rede sem permissão, permitindo que o protocolo se torne mais simples e mais seguro.\
O desenvolvimento já está em curso, e esperamos que a primeira versão aconteça em breve.

Nesta postagem descreveremos a jornada do Cairo até agora e compartilharemos detalhes sobre as próximas funcionalidades.

### A Jornada do Cairo

Até 2020, o conhecimento de nicho era necessário para construir programas prováveis de STARK, para uma computação em geral. Isso só foi possível para aqueles que entenderam a matemática complexa por trás do STARKs. Especificamente, por cada lógica empresarial, ou seja, a cada cálculo, é necessário gerar uma Representação Intermediária Algebraica (AIR) - um conjunto de restrições polinomiais que representam o cálculo específico.

O Cairo nasceu da percepção de que a computação verificável deve ser disponibilizada aos desenvolvedores em todos os lugares. O Cairo torna possível que os desenvolvedores aproveitem o poder dos STARKs.

Desde então, a comunidade de desenvolvedores conquistou no Cairo para construir com entusiasmo. Tudo no próspero ecossistema StarkNet hoje é baseado no Cairo. Entre[StarkNet](https://starkware.co/starknet/)e[StarkEx](https://starkware.co/starkex/), aplicativos movidos a Cairo têm processado mais de 220M transações, mentalizado mais de 65M NFT e administrado negociações com $700B, todas resolvidas na Ethereum.

Embora o Cairo tenha tornado o STARKs acessível, ele foi originalmente projetado como uma linguagem de montagem, e como tal foi escrito como uma linguagem de baixo nível.

![Um exemplo para os primeiros programas que foram escritos no Cairo](/assets/cairocode_01.png "Um exemplo para os primeiros programas que foram escritos no Cairo")

Solicitado por comentários de desenvolvedores e o aumento da[StarkNet](https://starkware.co/starknet/), nós gradualmente tornamos o Cairo mais expressivo e mais amigável para o desenvolvedor.

![Um exemplo do contrato ERC-20 Cairo que demonstra suporte a variáveis, se declarações, erros e biblioteca UINT256](/assets/cairocode_02.png "Um exemplo do contrato ERC-20 Cairo que demonstra suporte a variáveis, se declarações, erros e biblioteca UINT256")

Mas em breve concluímos que é tempo de dar um grande salto em frente e, em vez de melhorias incrementais no Cairo, faça uma transformação mais ousada.

### Cairo 1.0

Para o Cairo 1. construímos um novo compilador a partir do zero, que fornecerá aos desenvolvedores recursos de segurança, e permitir-lhes-á escrever contratos de uma forma mais simples e expressiva.

#### Introdução a Sierra: garantir que todas as execuções do Cairo possam ser comprovadas

A adição principal no Cairo 1. é Sierra (**S**distante**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra constitui uma nova camada de representação intermediária entre o código Cairo 1.0 e o código Cairo. O objetivo de Sierra é garantir que cada execução do Cairo — ou seja, um programa do Cairo e sua entrada — possam ser comprovados (veja mais abaixo).

Sierra promete ao Cairo um código melhor à prova de futuro. Mais estabilidade é fornecida pelo fato de que os contratos da StarkNet não precisarão ser recompilados no caso de melhorias do sistema subjacente (e. A arquitetura da CPU AIR muda, melhorias da tradução final do Sierra para o código byte do Cairo).

**Prova de cada execução do Cairo.**No antigo Cairo, uma corrida do Cairo pode resultar em três casos — TRUE, FALDE ou falha. As execuções falhadas não podem ser provadas. A Sierra assegura que uma corrida do Cairo nunca falhará e só pode resultar em TRUE ou FALSE. Isto, por sua vez, garante que todas as operações do Cairo possam ser comprovadas.

Esta introdução da Serra tem implicações importantes para o StarkNet como rede sem permissão. A Sierra garante que mesmo transações revertidas possam ser incluídas em blocos StarkNet. Esta propriedade permitirá que o protocolo StarkNet permaneça magro e simples sem a necessidade de adicionar mecanismos cripto-econômicos complexos.\
Dois exemplos significativos:

1. Os sequenciadores poderão cobrar taxas em transações revertidas, permitindo que a StarkNet impeça o Sequencer DoS de uma forma bem estabelecida.
2. Implementar transações L1 forçadas será possível, permitindo que StarkNet herde a resistência total da censura do Ethereum.

### **Recursos de Linguagem**

O Cairo 1.0 vai oferecer muitas melhorias na própria linguagem de programação. Nem tudo listado abaixo será parte do primeiro lançamento, mas faz parte do Roteiro.

#### **Sintaxe melhorada**

* Chega de**local e*tempvar*. Agora só precisamos que*seja permitido*para regra de todas as variáveis.
* Melhorada a sintaxe de*if*statements

```python
#Old
se consd ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
se cond { x = x + 1; }
```

#### **Garantias de segurança**

O compilador usará fortes digitações para melhorar a segurança do código. Por exemplo:

* Os ponteiros sempre apontarão para memória inicializada.
* Os dicionários serão sempre escamoteados, em vez de deixar a responsabilidade de chamar squash_dict ao programador.

#### **Mais fácil de usar construções de linguagem**

Por exemplo:

* Laços para

```
let sum = 0
for x in iter {
  sum = soma + x;
}
```

* Expressões booleanas
* Inteiros (com uma divisão normal de inteiros 👯)
* Proteção de estouro para os tipos relevantes
* Condições booleanas

```
#Antigo
Se cond1:
  se cond2:
       # Algum código
  senão se cond3:
       # Mesmo código
__________________________________
#New
Se cond1 && (cond2 ├cond3) { … }
```

#### **Um sistema de tipo completo**

* Tipos de dados abstratos (ou seja, enumano parecido com rust)

```
enum Opção<T> {
 Some: T,
 Nenhum,
}
corresponde ao resultado {
 Some(r) => {..},
 None => {..},
}
```

* Traços

```
característica Adicionar<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // Avaliado para 5 do tipo Uint256.
```

#### **Mais bibliotecas intuitivas**

(por exemplo, dito, matrizes)

* Divisão<Uint256, MyStruct>;
* Matriz<MyOtherStruct>;

#### **Mais código otimizado**

Não há necessidade de declarar explicitamente alocação de variáveis locais — auto detectado e feito automaticamente.

#### **Melhor integração do compilador**

Permitir melhor suporte a IDE, gerenciamento de pacotes e melhor facilitação de contribuições comunitárias.

### **Conclusão**

Dois anos depois de o Cairo ter sido utilizado pela primeira vez na produção, estamos a desenvolver o Cairo 1.0, o que proporcionará uma maior expressão, segurança e sintaxe. Ele levará um grande passo em frente, permitindo que os desenvolvedores escrevam mais facilmente seus contratos StarkNet.

Em outro lugar, em breve, iremos compartilhar mais detalhes sobre como o Cairo 1. irá afetar a regenesis da StarkNett, e como os desenvolvedores devem se preparar para sua versão.