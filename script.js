let inputnome = document.querySelector(".inputnome");
var botaocomecar = document.querySelector(".botaocomecar");
let fulano = document.querySelector(".fulano");
let numeromaior = document.querySelector(".numeromaior");
let tentativas = document.querySelector(".tentativas");
let botaojogar = document.querySelector(".botaojogar");
let numSorteado = 0;
let contadorTentativas = 3;

//função para desativar o botão começar se o usuário não insira nenhum dado.
inputnome.addEventListener("input", function () {
  if (inputnome.value === "") {
    botaocomecar.disabled = true;
    botaocomecar.style.backgroundColor = "#b0a3a3";
  } else {
    botaocomecar.disabled = false;
    botaocomecar.style.backgroundColor = "#1180e6";
  }
});

// trocar o nome Fulano para o nome do usuário, clicar e sortear um número.
botaocomecar.addEventListener("click", function () {
  tentativas.innerHTML = "Você tem 3 tentativas!";
  fulano.innerHTML = inputnome.value;
  sortear();
});

//função criada para sortear o número dentro do intervalo que o usuário selecionou.
function sortear() {
  let opcoes = document.querySelector("#opcoes");
  let valor = opcoes.options[opcoes.selectedIndex].value;
  let min;
  let max;

  console.log(valor);

  // switch case para o usuário selecionar as opcões de jogo e um contador incluso do número de tentativas.
  switch (valor) {
    case "opcao1":
      min = 1;
      max = 10;
      numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(numSorteado);
      return numSorteado;
    case "opcao2":
      min = 1;
      max = 100;
      numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(numSorteado);
      return numSorteado;
    case "opcao3":
      min = 1;
      max = 200;
      numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(numSorteado);
      return numSorteado;
    default:
      break;
  }
}

//função com IF ELSE para contar as quantidades de tentativas que o usuário jogou. O botão jogar é desabilitado antes do usuário começar o jogo e após encerrar!
function jogarJogo() {
  let jogada = parseInt(document.querySelector("#jogada").value);
  let dica = document.querySelector(".dica");

  if (jogada == numSorteado) {
    dica.innerHTML = "Parabéns, você conseguiu advinhar!";
    botaojogar.disabled = true;
  } else if (jogada > numSorteado) {
    dica.innerHTML = "O número é maior!";
    contadorTentativas--;
  } else if (jogada < numSorteado) {
    dica.innerHTML = "O número é menor!";
    contadorTentativas--;
  }
  tentativas.innerHTML = `Você ainda tem ${contadorTentativas} tentativas!`;
  if (contadorTentativas == 0) {
    botaojogar.disabled = true;
    dica.innerHTML = "FIM! Comece novamente!";
  }
}

botaojogar.addEventListener("click", jogarJogo);
