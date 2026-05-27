let personagens;

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

    personagens = {
        personagemNome: nome,
        personagemObra: obra,
        personagemTipo: tipoDaObra
    }


alert(`O personagem ${personagens.personagemNome} é da obra ${personagens.personagemObra} que é um(a) ${personagens.personagemTipo}`);
