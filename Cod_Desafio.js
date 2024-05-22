// Definição da lista de produtos
var produtos1 = {
  codigo: "001",
  descricao: "Smartphone Samsung Galaxy S22",
  preco: 4999,
  disponivel: true,
};

var produtos2 = {
  codigo: "002",
  descricao: "Smart TV LED 55",
  preco: 3499,
  disponivel: true,
};

var produtos3 = {
  codigo: "003",
  descricao: "Câmera Fotográfica Canon T7",
  preco: 2299,
  disponivel: true,
};

var Produtos = [produtos1, produtos2, produtos3];

// Função para visualizar produtos
function visualizarProdutos(Produtos) {
  var mensagem =
    "Produtos Cadastrados: \nCódigo | Item | Preço | Disponibilidade\n";

  for (var i = 0; i < Produtos.length; i++) {
    mensagem +=
      Produtos[i].codigo +
      " - " +
      Produtos[i].descricao +
      " - R$ " +
      Produtos[i].preco.toFixed(2).replace(".", ",") +
      " - " +
      (Produtos[i].disponivel ? "Disponível" : "Indisponível") +
      "\n";
  }

  alert(mensagem);
}

// Função para exibir produtos disponíveis
function produDispo() {
  var mensagem =
    "Produtos Cadastrados: \nCódigo | Item | Preço | Disponibilidade\n";

  for (var i = 0; i < Produtos.length; i++) {
    mensagem +=
      Produtos[i].codigo +
      " - " +
      Produtos[i].descricao +
      " - R$ " +
      Produtos[i].preco.toFixed(2).replace(".", ",") +
      " - " +
      (Produtos[i].disponivel ? "Disponível" : "Indisponível") +
      "\n";
  }

  alert(mensagem);
}

// Função para registrar uma venda
var listaLancamentos = [];
function registarVenda(Produtos, listaLancamentos) {
  produDispo(Produtos);

  var codDese = prompt("Digite o código do produto que deseja vender:");

  for (var i = 0; i < Produtos.length; i++) {
    if (codDese === Produtos[i].codigo) {
      var quantprod = parseInt(prompt("Digite a quantidade de produtos:"));
      if (!isNaN(quantprod) && quantprod > 0) {
        listaLancamentos.push({
          codigo: Produtos[i].codigo,
          descricao: Produtos[i].descricao,
          preco: Produtos[i].preco,
          quantidade: quantprod,
          total: Produtos[i].preco * quantprod
        });
        alert("Produto adicionado com sucesso!");
        return;
      } else {
        alert("Quantidade inválida!");
        return;
      }
    }
  }
  alert("Produto não encontrado!");
}

//Imprimir Nota Fiscal
function imprimirNotaFiscal(listaLancamentos) {
  var empresa = "Télos NF";
  var cnpj = "12.345.678/0001-90";
  var endereco = "Rua das Flores, 123";
  var cidade = "Cidade Exemplo";
  var data = "12/08/2023"; // Data fixa como no exemplo original
  var numero = 123; // Número fixo como no exemplo original
  
  var notafiscal = 
  `| NOTA FISCAL                                |
|                                            |
| Empresa: ${empresa}                          |
| CNPJ: ${cnpj}                   |
| Endereço: ${endereco}              |
| Cidade: ${cidade}                     |
| Data: ${data}                           |
| Número: ${numero}                                |
|                                            |
|--------------------------------------------|
|                                            |
| Qtd  | Produto                | Preço (R$) |
|--------------------------------------------|`;

  var totalfinal = 0;
  for (var i = 0; i < listaLancamentos.length; i++) {
    var item = listaLancamentos[i];
    totalfinal += item.total;
    notafiscal += `\n| ${item.quantidade} | ${item.descricao} | R$${item.total.toFixed(2)} |`;
  }

  notafiscal += 
  `\n|                                            |
|--------------------------------------------|
|                                            |
| TOTAL: R$${totalfinal.toFixed(2)} |
|                                            |
|--------------------------------------------|`;

  alert(notafiscal);         
}

//Nova venda
function novaVenda() {
  listaLancamentos = []; // Limpa a lista de lançamentos para nova venda
  alert("Iniciar uma nova venda");
  registarVenda(Produtos, listaLancamentos);
}


//1. Exibição da lista de opções no sistema do balcão
while (true) {
  var operacao = prompt(
    "Escolha uma das opções abaixo e digite um número.\n(1) Visualizar produtos cadastrados; \n(2) Lançar venda de produto; \n(3) Imprimir nota fiscal; \n(4) Iniciar uma nova venda; \n(5) Sair"
  );
  operacao = parseInt(operacao);

  // Loop principal do menu
  switch (operacao) {
    case 1:
      visualizarProdutos(Produtos);
      break;
    case 2:
      produDispo();
      registarVenda(Produtos, listaLancamentos);
      for (var i = 0; i < listaLancamentos.length; i++) {
        console.log(listaLancamentos[i]);
      }
      break;
    case 3:
      imprimirNotaFiscal(listaLancamentos);
      break;
    case 4:
      novaVenda();
      break;
    case 5:
      alert("Você está na opção de sair.");
      break;
    default:
      alert("Opção inválida");
  }
  if (operacao === 5) {
    break;
  }
}

