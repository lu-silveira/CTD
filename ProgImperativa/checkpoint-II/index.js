// 1.	Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.

//Criar uma variável com arrays de objetos
let produtos = [
    {
      nome: 'Notebook Dell',
      valor: 1500,
      qualidade: 7,
      status: true
    },
    {
      nome: 'Mouse Microsoft',
      valor: 80,
      qualidade: 9,
      status: false
    },
    {
      nome: 'Teclado Logitech',
      valor: 1300,
      qualidade: 9,
      status: true
    },
    {
      nome: 'Headset',
      valor: 182,
      qualidade: 9,
      status: true
    },

    
  ];
  
  // 2.	Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham: Valor entre 482 e 1600;
  // Qualidade superior a 06;
  // Status como disponível.
  
  //criar uma variável, pegar os produtos, utilizar o filter com uma função callback
  let carrinho = produtos.filter((produto) => {
    return produto.valor >= 480 &&
           produto.valor <= 1600 && 
           produto.qualidade > 6 &&
           produto.status === true
            
  });
  
  let somarValorDoCarrinho = carrinho.reduce((acumulador, preco) => {
    return  acumulador.valor + preco.valor;

  });
  
  let mostrarItensDoCarrinho = carrinho.map((item)=>{
  
    return (`${item.nome} ${item.valor}`);
  
  });
  
  console.log(`Os itens do carrinho são ${mostrarItensDoCarrinho}. 
  A soma total do carrinho é R$ ${somarValorDoCarrinho}`);