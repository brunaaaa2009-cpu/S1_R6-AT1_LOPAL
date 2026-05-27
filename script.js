let produtos = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let nome;

    while (true) {
        nome = prompt("Digite o nome do produto:");

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
}

let mensagem = "---PRODUTOS---\n\n";

for (let i = 0; i < produtos.length; i++) {
    mensagem += "Produto: " + produtos[i].nomeProduto + "\n";
    mensagem += "Preço: R$ " + produtos[i].precoProduto + "\n";
    mensagem += "----------------------------\n";
}
mensagem += "Soma: " + soma
alert(mensagem);