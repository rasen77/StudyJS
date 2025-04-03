function Salva_nota() {
    // Captura os elementos de input
    let inputNota1 = document.getElementById("nota1");
    let inputNota2 = document.getElementById("nota2");
    let inputNota3 = document.getElementById("nota3");
    let inputNota4 = document.getElementById("nota4");

    // Captura e converte os valores das notas
    let nota1 = parseFloat(inputNota1.value.trim());
    let nota2 = parseFloat(inputNota2.value.trim());
    let nota3 = parseFloat(inputNota3.value.trim());
    let nota4 = parseFloat(inputNota4.value.trim());

    // Valida se as notas são números válidos e estão no intervalo correto
    if (isNaN(nota1) || nota1 < 0 || nota1 > 25) {
        alert("Erro: Verifique a nota 1.");
        return;
    }
    if (isNaN(nota2) || nota2 < 0 || nota2 > 25) {
        alert("Erro: Verifique a nota 2.");
        return;
    }
    if (isNaN(nota3) || nota3 < 0 || nota3 > 25) {
        alert("Erro: Verifique a nota 3.");
        return;
    }
    if (isNaN(nota4) || nota4 < 0 || nota4 > 25) {
        alert("Erro: Verifique a nota 4.");
        return;
    }

    // Calcula a média
    let result = (nota1 + nota2 + nota3 + nota4) / 4;

    // Exibe o resultado no console (para depuração)
    console.log("Média calculada:", result);

    // Captura o elemento para exibir a mensagem
    let mensagem = document.getElementById("Enviar_mensagem");
    mensagem.innerHTML = ""; // Limpa a mensagem anterior

    // Verifica o resultado e exibe a mensagem correspondente
    if (result > 25) {
        mensagem.innerHTML = "<p>Erro: A média não pode ser maior que 25.</p>";
    } else if (result >= 15) {
        mensagem.innerHTML = `Média: ${result.toFixed(2)} <p>Você passou!</p>`;
    } else if (result > 10) {
        mensagem.innerHTML = `Média: ${result.toFixed(2)} <p>Recuperação</p>`;
    } else if (result < 0) {
        mensagem.innerHTML = "<p>Erro: A média não pode ser negativa.</p>";
    } else {
        mensagem.innerHTML = `Média: ${result.toFixed(2)} <p>Reprovação</p>`;
    }
}

