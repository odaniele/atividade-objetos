//adicionar produtos ao carrinho
//visualizar os itens escolhidos
//calcular o subtotal de cada produto

function carrinho(){
    let nomeProduto = prompt("Adicione um produto ao carrinho:");
    let precoProduto = parseFloat(prompt("Informe o preço do produto"));
    let quantidadeProduto = parseInt(prompt("Informe a quantidade do produto"));
    console.log(nomeProduto);
    console.log("R$ " + precoProduto);
    console.log(quantidadeProduto);
}

carrinho ();

//teste
