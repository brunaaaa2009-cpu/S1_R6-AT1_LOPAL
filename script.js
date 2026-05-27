let produtos = [];
let soma = 0;
let produtoMaisCaro;
let produtoMaisBarato;

for (let i = 0; i < 5; i++) {
    let nome;

    while (true) {
        nome = prompt("Digite o nome do produto:");        
// trim remove espaços em branco
        if (nome.trim() == "") {
            alert("Nome inválido");
        } else {
            break;
        }
    }

    let preco;

    while (true) {
        preco = Number(prompt("Digite o preço do produto:"));

        if (isNaN(preco)) {
            alert("Preço inválido");
        } else {
            break;
        }
    }
    produtos[i] = {
        nomeProduto: nome,
        precoProduto: preco
    }
    soma += produtos[i].precoProduto;
    if (i == 0) {
        produtoMaisBarato = produtos[i];
        produtoMaisCaro = produtos[i];
    } else {
        if (produtos[i].precoProduto > produtoMaisCaro.precoProduto) {
            produtoMaisCaro = produtos[i];
        }
        if (produtos[i].precoProduto < produtoMaisBarato.precoProduto) {
            produtoMaisBarato = produtos[i];
        }
    }
}

// \n quebra a linha
let mensagem = "---PRODUTOS---\n\n";

for (let i = 0; i < produtos.length; i++) {
    mensagem += "Produto: " + produtos[i].nomeProduto + "\n";
    mensagem += "Preço: R$ " + produtos[i].precoProduto + "\n";
    mensagem += "----------------------------\n";
}
mensagem += "Soma: " + soma + "\n"
mensagem += "Produto mais caro: " + produtoMaisCaro.nomeProduto + "\n";
mensagem += "Produto mais barato: " + produtoMaisBarato.nomeProduto + "\n";
alert(mensagem);