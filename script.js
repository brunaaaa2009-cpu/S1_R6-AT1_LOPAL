let numeros = [];

for (let i = 0; i < 5; i++) {
    
     while (true) {
       numeros[i] = prompt("Digite o número");

        // trim remove os espaços em branco da variável
        if (numeros[i].trim() == "") {
            alert("Número inválido");
        } else {
            break; // Vai "brecar" o looping
        }
    }
}

// \n quebra a linha no alert!
let mensagem = "=== NÚMEROS ===\n\n";

for (let i = 0; i < numeros.length; i++) {
    mensagem += "Número digitado: " + numeros[i] + "\n";
    mensagem += "----------------\n";
}

alert(mensagem);
//dhushdushdis