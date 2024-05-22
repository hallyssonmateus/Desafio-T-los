# Simulator Télos - Nível #0 (Lógica de Programação em Javascript)

Sejam muito bem vindos ao Simulator - Nível #0! Neste nível você teve a oportunidade de aprender sobre as opções de carreira na área de TI, o papel do programador na sociedade, bem como aprender sobre lógica de programação com Javascript. Que tal agora colocar todo esse conhecimento em um projeto mão na massa? 🙂

## Contextualização

A automação comercial é uma poderosa ferramenta que permite otimizar e agilizar os processos de negócios. Ao adotar a automação, os negócios comerciais podem reduzir a quantidade de tarefas manuais, economizando tempo e recursos, aumentando a eficiência operacional e possibilitando uma maior atenção aos clientes.

Portanto, a adoção de tecnologias de automação comercial é algo essencial para as empresas do setor de comércio e serviços. Desse modo, seu squad foi contratado pela T.E.L.O.S. (Tecnologia de Emissão de notas para Lojas e Otimização de Sistemas) para desenvolver o módulo balcão do sistema de emissão de notas fiscais em desenvolvimento, chamado TelosNF.

## Descrição

O sistema deve ser desenvolvido utilizando a linguagem Javascript e deve interagir com o usuário por meio do teclado para realizar o lançamento de produtos, calcular os totais e subtotais e gerar as notas fiscais para impressão.

Para isso, a equipe de produto da T.E.L.O.S. criou algumas histórias de usuário que deverão ser implementadas pela sua equipe:

1. **Exibição da lista de opções no sistema do balcão**
   - **Descrição:** Como atendente do balcão, desejo ter a capacidade de visualizar uma lista clara e completa de todas as opções disponíveis para interagir com o sistema. Isso me permitirá selecionar a opção apropriada, de acordo com a operação que eu precisar realizar.
   - **Critérios de aceitação:**
     - A lista deve ser apresentada como um menu de opções no prompt.
     - Cada item da lista deve ser associado a um número que deverá ser digitado pelo usuário.
     - As seguintes opções devem ser apresentadas: (1) Visualizar produtos cadastrados; (2) Lançar venda de produto; (3) Imprimir nota fiscal; (4) Iniciar uma nova venda; (5) Sair.
   - **#DicaTelos💡:** Para ficar lendo continuamente do menu, você pode usar um loop infinito da seguinte forma:
     ```
     while(true) {
       // mostre o menu e leia a opção
       // use um if ou um switch para testar a opção digitada
       // se o usuário digitou 5, pare o loop com o comando "break"
     }
     ```
   - **#DicaTelos 2💡:** Fica mais fácil organizar o raciocínio se você implementar cada opção em uma função separada.

2. **Visualizar produtos cadastrados no sistema do balcão**
   - **Descrição:** Como atendente do balcão, desejo ter a capacidade de visualizar uma lista completa de todos os produtos disponíveis para venda. Isso me permitirá localizar rapidamente os itens desejados pelos clientes e fornecer informações precisas sobre preços, disponibilidade e características dos produtos.
   - **Critérios de aceitação:**
     - O sistema deve fornecer uma página de listagem de produtos com uma visualização clara e organizada dos itens disponíveis.
     - A lista de produtos deve apresentar as seguintes informações para cada item: nome, código e preço de venda.
     - A lista de produtos pode ser fixada, não sendo necessário modificá-la. A seguinte lista pode ser utilizada como exemplo:
       ```
       1. 001 - Computador Desktop Intel Core i5 - R$ 3.199,00
       2. 002 - Laptop Ultrabook Intel Core i7 - R$ 4.799,00
       3. 003 - Monitor LED 24 polegadas Full HD - R$ 799,90
       4. 004 - Teclado Mecânico Gamer RGB - R$ 299,00
       5. 005 - Mouse Óptico Sem Fio - R$ 79,90
       ```
   - **#DicaTelos💡:** Para armazenar os produtos, use as estruturas de dados que você aprendeu!

3. **Lançamento da venda de um produto no módulo do balcão**
   - **Descrição:** Como atendente do balcão, desejo poder registrar a venda de um produto no sistema para fins de me permitir realizar a emissão de uma nota fiscal.
   - **Critérios de aceitação:**
     - Ao realizar o lançamento da venda de um produto, o sistema deverá listar os produtos disponíveis e solicitar ao usuário que digite o código do produto a ser adicionado.
     - Após informar qual o código do produto, o sistema deverá solicitar a quantidade de itens que estão sendo vendidos.
     - Ao terminar o lançamento do produto (código e quantidade), o sistema deverá exibir a mensagem "Produto adicionado com sucesso!" e voltar a exibir o menu principal de opções.
     - Após lançado o produto para venda, o produto deverá ser adicionado à lista de lançamentos para impressão da nota fiscal.
   - **ATENÇÃO:** não confundir a lista de produtos com a lista de lançamentos! Não é necessário que a lista de produtos seja alterada, mas a lista de lançamentos sim. Ela funciona como um "carrinho de compras".
   - **#DicaTelos💡:** Para armazenar os lançamentos, use as estruturas de dados que você aprendeu!

4. **Iniciar uma nova venda no módulo do balcão**
   - **Descrição:** Como atendente do balcão, desejo ter a opção de iniciar uma nova venda no sistema, limpando a lista de lançamentos de vendas anterior. Isso me permitirá criar uma nova venda sem misturar os produtos de duas vendas distintas.
   - **Critérios de aceitação:**
     - Ao iniciar uma nova venda, o sistema deve limpar o carrinho de compras (lista de lançamentos) ou quaisquer itens remanescentes de vendas anteriores.
     - Ao selecionar a opção de nova venda, o sistema deverá exibir a mensagem "Nova venda iniciada!" e voltar a exibir o menu principal de opções.
   - **ATENÇÃO:** Para limpar a lista de lançamentos, você pode atribuir um array vazio à sua variável (ex: listaDeLancamentos = []). Isso pode ter implicações no programa, mas que por hora não são importantes. Nos módulos seguintes nós conversamos mais sobre isso, ok? 😉
   - **#DicaTelos💡:** Sabia que você também pode limpar um array somente igualando a propriedade "length" dele a 0 (zero)? Ex:
     ```
     var a = [1, 4, 13]
     console.log(a) // imprimirá [1, 4, 13]
     a.length = 0
     console.log(a) // imprimirá o array vazio []
     ```

5. **Impressão da Nota Fiscal no módulo do balcão**
   - **Descrição:** Como atendente do balcão, desejo poder imprimir a nota fiscal da venda realizada no sistema para fornecer ao cliente um comprovante de compra. Isso permitirá que o cliente tenha uma documentação oficial de sua transação e facilite a resolução de eventuais problemas relacionados à compra.
   - **Critérios de aceitação:**
     - Após o lançamento de todos os produtos, o atendente pode realizar a geração da nota fiscal da venda.
     - Ao gerar a nota fiscal é importante imprimir as informações da venda, como nome e endereço da empresa, data da compra, detalhes dos produtos vendidos (nome, quantidade, preço unitário) e o valor total da compra.
     - Desde que tenha as informações necessárias, você pode gerar a nota fiscal em qualquer formato.

6. **Desafio Bônus! (OPCIONAL)**
   - Que tal deixar a sua nota fiscal com um formato mais profissional? Para cumprir esse desafio você pode imprimir a nota fiscal em um layout mais adequado, contemplando obviamente as informações descritas na história de usuário 5.
   - **Exemplo de layout para o desafio bônus da nota fiscal:**


- **Observação:** este é apenas um modelo. Sintam-se livres para testar outros modelos, desde que todas as informações estejam contidas.

## Tempo de desenvolvimento

Espera-se que a equipe seja capaz de desenvolver esta aplicação em um prazo máximo de 4 dias (4 horas de dedicação por dia). Sugere-se o seguinte cronograma de desenvolvimento (que pode ser modificado livremente pela equipe):

- **Dia 1:**
- 2h - Desenvolvimento da história de usuário 1.
- 2h - Desenvolvimento da história de usuário 2.

- **Dia 2:**
- 1h - Desenvolvimento da história de usuário 2.
- 3h - Desenvolvimento da história de usuário 3.

- **Dia 3:**
- 3h - Desenvolvimento da história de usuário 4.
- 1h - Desenvolvimento da história de usuário 5.

- **Dia 4:**
- 2h - Desenvolvimento da história de usuário 5.
- 2h - Tarefa bônus (opcional), revisão, ajustes e testes manuais da aplicação

## Avaliação

A avaliação desta atividade levará em consideração os critérios a seguir:

1. **Os alunos conseguiram utilizar a lógica de programação para resolver o problema de maneira efetiva com uma aplicação computacional?**
2. **Os alunos foram capazes de realizar a interação do usuário com a aplicação utilizando as funções de entrada e saída do javascript?**
3. **Os alunos dividiram adequadamente as funcionalidades em funções separadas?**
4. **Os alunos fizeram um uso adequado das estruturas de dados?**
5. **Os alunos conseguiram solucionar os problemas computacionais de uma maneira criativa?** (ex: condicionais e loops bem estruturados, estruturas de dados bem organizadas, etc).

## Competências avaliadas

Para o desenvolvimento deste Simulator, são necessárias aos alunos as seguintes competências:

- Uso de variáveis em Javascript
- Entrada e saída em Javascript (prompt, confirm, alert, console.log)
- Uso de estruturas condicionais em Javascript
- Uso de estruturas de looping em Javascript
- Estruturas de dados em Javascript (arrays e objetos)

