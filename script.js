let personagens = [];

for (let i = 0; i < 1; i++) {
    let nome;
    let obra;
    let tipoDaObra;

    while (true) {
        nome = prompt("Digite o nome do(a) personagem");

        if (nome.trim() == "") {
            alert("Nome invalido")
        } else {
            break; //vai "brecar" o looping
        }
    }
    while (true) {
        obra = prompt("Digite qual a obra que o personagem faz parte:");
        if (obra.trim() == "") {
            alert("Obra invalida");
        } else {
            break;
        }
    }
    while (true) {
        tipoDaObra = prompt("Escreva qualo tipo da obra: (filme, série ou jogo)");
        if (tipoDaObra.trim() == "") {
            alert("Tipo de obra invalido")
        } else {
            break;
        }
    }

    personagens[i] = {
        personagemNome: nome,
        personagemObra: obra,
        personagemTipo: tipoDaObra
    }
}
let mensagem = "===PERSONAGEM===\n\n";

for (let i = 0; i < personagens.length; i++) {
    mensagem += "Nome do personagem: " + personagens[i].personagemNome + "\n";
    mensagem += "Obra do personagem: " + personagens[i].personagemObra + "\n";
    mensagem += "Tipo da obra do personagem: " + personagens[i].personagemTipo + "\n";
    
}
alert (mensagem)
//jdudbusdgcius