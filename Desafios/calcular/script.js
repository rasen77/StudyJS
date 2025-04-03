// Variáveis globais
let visor = document.getElementById("visor");
let operador = null;
let valorAnterior = "";

// Função para adicionar números ao visor
function adicionarNumero(numero) {
    visor.value += numero;
}

// Função para adicionar operadores
function adicionarOperador(op) {
    if (visor.value !== "") {
        valorAnterior = visor.value;
        visor.value = "";
        operador = op;
    }
}

// Função para adicionar ponto decimal
function adicionarPonto() {
    if (!visor.value.includes(".")) {
        visor.value += ".";
    }
}

// Função para limpar o visor
function limparVisor() {
    visor.value = "";
    valorAnterior = "";
    operador = null;
}

// Função para calcular o resultado
function calcularResultado() {
    if (visor.value !== "" && valorAnterior !== "" && operador !== null) {
        let resultado;
        let valorAtual = parseFloat(visor.value);
        let valorAnteriorNum = parseFloat(valorAnterior);

        switch (operador) {
            case "+":
                resultado = valorAnteriorNum + valorAtual;
                break;
            case "-":
                resultado = valorAnteriorNum - valorAtual;
                break;
            case "*":
                resultado = valorAnteriorNum * valorAtual;
                break;
            case "/":
                resultado = valorAnteriorNum / valorAtual;
                break;
            default:
                resultado = "Erro";
        }

        visor.value = resultado;
        valorAnterior = "";
        operador = null;
    }
}