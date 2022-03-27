// LEITURA DOS VALORES DOS INPUTS

let taxaDeConversao = document.getElementById("taxaConversao");
let qtdDolar = document.getElementById("qtdDolar");
let qtdReal = document.getElementById("qtdReal");

let buttonDolReal = document.getElementById("calculateDolReal");
let buttonRealDol = document.getElementById("calculateRealDol");
let confirmTax = document.getElementById("confirmTax");
let limpaDados = document.getElementById("Limpar");

let totalD = 0;
let totalR = 0;

// SCRIPT PARA REALIZAR CALCULOS E ALTERACOES NA DOM

buttonRealDol.disabled = true;
buttonDolReal.disabled = true;
buttonRealDol.style.backgroundColor = "#e0e9dd";
buttonDolReal.style.backgroundColor = "#e0e9dd";

function calcularDolReal() {
  totalR = taxaDeConversao.value * qtdDolar.value;
  qtdReal.value = totalR;
}

function calcularRealDolar() {
  totalD = qtdReal.value / taxaDeConversao.value;
  qtdDolar.value = totalD; 
}

function confirmButtonTax() {
  if (taxaDeConversao.value === "") {
    // se meu input estiver vazio, vai manter o botao ativo e com a cor verde
    document.getElementById("confirmTax").disabled = false;
    document.getElementById("confirmTax").style.backgroundColor = "#49aa26";
  } else {
    //se meu input estiver com algum valor, vai desativar o botao e mudar a cor para uma cor diferente
    document.getElementById("confirmTax").disabled = true;
    document.getElementById("confirmTax").style.backgroundColor = "#e0e9dd";
    buttonRealDol.disabled = false;
    buttonDolReal.disabled = false;
    buttonRealDol.style.backgroundColor = "#49aa26";
    buttonDolReal.style.backgroundColor = "#49aa26";
  }
}

function limparDados() {
  document.getElementsByName("qtdTotalReal")[0].value = "";
  document.getElementsByName("qtdTax")[0].value = "";
  document.getElementsByName("qtdTotalDolar")[0].value = "";

  document.getElementById("confirmTax").disabled = false;
  document.getElementById("confirmTax").style.backgroundColor = "#49aa26";

  buttonRealDol.disabled = true;
  buttonDolReal.disabled = true;
  buttonRealDol.style.backgroundColor = "#e0e9dd";
  buttonDolReal.style.backgroundColor = "#e0e9dd";
}
