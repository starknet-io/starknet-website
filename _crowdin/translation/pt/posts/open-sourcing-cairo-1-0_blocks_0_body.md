### TL;DR

* **Cairo 1.0 é open source! Este é apenas o primeiro passo no sentido de uma pilha de código-fonte aberto do StarkNet.**
* Apresentamos agora uma[primeira olhada](https://github.com/starkware-libs/cairo)no compilador do Cairo 1.0. Você pode começar a experimentar com o código básico do Cairo 1.0
* O Cairo 1.0 em seu núcleo é muito semelhante ao Rust
* Considere isso um primeiro gosto, não uma liberação. Estão a ser feitas mais melhorias. A primeira versão do compilador está planejada para o início do primeiro Q1 no próximo ano.
* Cairo 1.0 não é suportado no StarkNet, ainda. Será apoiado no StarkNet no próximo ano.

### Introdução

Em 2020, lançamos o[Cairo](https://eprint.iacr.org/2021/1063.pdf), uma linguagem de programação completa que suporta computação verificável. O Cairo começou como uma linguagem de assembly e se tornou gradualmente mais expressivo. Há dois meses, anunciamos o[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), que aborda alguns dos principais problemas na situação atual:

* Embora a sintaxe do Caio tenha visto uma melhoria significativa desde a sua criação, a experiência do desenvolvedor pode sempre melhorar. O Cairo 1.0 é uma linguagem totalmente tipada em rusta, tornando a escrita da mesma lógica muito mais fácil e menos propensa a erros.
* O compilador existente é desenvolvido no mesmo repositório que o StarkNet em si, tornando mais difícil o controle das alterações de idiomas. O compilador 1.0 do Cairo está escrito desde o início, permitindo um desenvolvimento mais rápido de recursos e mais envolvimento com a comunidade.
* Todo cálculo agora é provável. Atualmente, um programa Cairo pode falhar com entradas específicas (por exemplo, atingindo uma instrução \`assert 1=2\` em algum ramo de computação), tornando a computação inprovável. Com o Cairo 1.0, os programas são prováveis em todos os ramos possíveis. Isto é particularmente importante para a protecção e a resistência à censura no StarkNet.

Hoje marcamos o primeiro marco na consecução dos objectivos acima enquanto transferimos o desenvolvimento para um repositório público, e**de código aberto do Cairo 1. !**Desenvolvedores podem agora, pela primeira vez, compilar e executar programas simples do Cairo 1.0. Isso permite que os desenvolvedores comecem a experimentar com o Cairo 1. e habitue-se gradualmente às novas funcionalidades, mesmo que, nesta fase, ainda não consigam implementá-las em StarkNet.

### Recursos atuais

Atualmente, você pode compilar e executar programas nativos básicos do Cairo. Embora muitas das melhorias de sintaxe/Idioma estejam ainda em curso, isso permite nos acostumar com o Cairo 1.0 e desfrutar de atualizações à medida que forem chegando.

**Note que a escrita de contratos StarkNet ainda não é suportada.**Sintaxe StarkNet (variáveis de armazenamento / contratos / eventos e outras chamadas de sistema) serão adicionados nas próximas semanas.

### Exemplos de código

Para ilustrar as diferenças entre a antiga sintaxe e o Cairo 1. , optámos por mostrar algumas implementações/sabores diferentes de encontrar o n° número de Fibonacci.

### Exemplo I: Corresponder expressões

No Cairo 1.0, você pode usar expressões[match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)semelhante a rust. Você não terá mais medo se/senão declarações que possam causar revogação de referência!

![](/assets/code01.png)

### Exemplo II: Tipos de dados

Enquanto o Cairo 0 funcionava com felts e ponteiros, no Cairo 1.0 temos acesso nativo a tipos de dados complexos na linguagem. Abaixo você pode encontrar um exemplo que gera uma matriz dos primeiros n Fibonacci.

![](/assets/code02.png)

Como você pode ver acima, ao invés de trabalhar diretamente com ponteiros de memória, nós usamos o `Array::<felt>\` tipo e a função \`array_append\`.

### Exemplo III: Instruções & Propriedade

O código a seguir ilustra o uso de construções no Cairo 1.0.

![](/assets/code03.png)

> O parágrafo seguinte destina-se à audiência dos Rustaceus. O Cairo 1.0 gerencia a memória de uma maneira semelhante a enferrujar. Em particular, usa os conceitos de[propriedade e empréstimo](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Assim, ao acessar um membro do \`FibResult\` struct (neste caso, \`resultar. aluguel\`), nós movemos o \`resultado\`, o que significa que, a menos que o Resultado de FibResult seja copiável, não poderemos acessá-lo novamente em \`result.index\`. Para superar isso, adicionamos o atributo \`#\[derive(Copy)]\` do tipo \`FibResult\`. Em versões futuras, acrescentaremos a desconstrução automática das estruturas. Isso permitirá mover a propriedade de um membro sem tocar nos outros (em particular, o código acima compilaria mesmo se \`FibResult\` não tivesse o atributo da cópia).

**Em particular, note que o Cairo 1.0 está abstraindo completamente o modelo de memória original (nenhum determinístico de leitura) do Cairo.**

## Exemplo IV: propagação de erro

O código a seguir calcula o número n'th Fibonacci, mas, ao contrário dos exemplos anteriores, todas as entradas são do tipo uint128. Note que isso resolve um grande ponto de dor no manuseio das dicas no Cairo 0. Aqui, uint128 (e no futuro uint256) são tipos nativos.

![](/assets/0_s8bhjf_ade3carmi.png)

A adição de dois inteiros de 128 bits pode causar um transbordo. O código acima usa a[Opção enum](https://doc.rust-lang.org/rust-by-example/std/option.html)e o[operador de ponto de interrogação](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)para lidar com o caso de excesso em uma das adições intermediárias. Compare this to the [current](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31) uint256 addition syntax, where the \`unit256_check\` function had to be called to guarantee soundness. Além disso, num futuro próximo, adicionaremos o conceito de \`pânico\` à linguagem (semelhante ao[pânico](https://doc.rust-lang.org/rust-by-example/std/panic.html)macro de pânico em pânico), e erros simples como overflow de adição serão desajustados e propagados automaticamente, o que significa que você não terá que usar o comando \`Option\` ou \`? ` ao adicionar uints.

## Experimente você mesmo

Agora você pode compilar e executar programas do Cairo 1.0 atualmente suportados! Siga estas[instruções](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)sobre como usar o comando \`cairo-run\`. Observe que a[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), desenvolvida por[Lambdaclass](https://lambdaclass.com/), é usada para execução.

Você pode encontrar mais exemplos para ajudá-lo a começar[aqui](https://github.com/starkware-libs/cairo2/tree/main/examples). Observe que esta é apenas a primeira página para o desenvolvimento do compilador; nas próximas semanas, vamos melhorar o CLI ao lado do compilador.

## Planos futuros

O foco da primeira versão do Compiler, que está planejada para o início do Q1, suporta todas as funcionalidades existentes do StarkNet no Cairo 1.0. Além disso, estamos trabalhando em estender os recursos do compilador 1.0 do Cairo. Nas próximas semanas, você pode esperar:

* Capacidades StarkNet — escrever contratos inteligentes e usar chamadas de sistema.
* Laços
* Novas funções da biblioteca
* Servidor de idioma melhorado
* Uma noção nativa de gás StarkNet

Certifique-se de permanecer atento e acompanhar o progresso do compilador!