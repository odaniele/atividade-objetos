const prompt = require('prompt-sync')();


function carrinho() {
    let produtos = []; // Array para armazenar os produtos no carrinho

    while (true) {
        let nomeProduto = prompt("Adicione um produto ao carrinho (ou digite 'fim' para encerrar):");
        if (!nomeProduto) {
            break; // Encerra o loop se o usuário clicar em "Cancelar" ou fechar o prompt
        }
        if (nomeProduto.toLowerCase() === "fim") {
            break; // Encerra o loop se o usuário digitar 'fim'
        }
        let precoProduto = parseFloat(prompt("Informe o preço do produto: "));
        let quantidadeProduto = parseInt(prompt("Informe a quantidade do produto: "));

        // Adiciona o produto ao carrinho
        produtos.push({
            nome: nomeProduto,
            preco: precoProduto,
            quantidade: quantidadeProduto
        });
    }

    // Imprime os produtos no carrinho
    console.log("Produtos no carrinho:");
    produtos.forEach(produto => {
        console.log(produto.nome + " - R$ " + produto.preco + " - Quantidade: " + produto.quantidade);
        console.log("Subtotal: R$ " + produto.preco * produto.quantidade);
    });
}

carrinho();