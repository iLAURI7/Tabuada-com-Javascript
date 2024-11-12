/*pegando os valores digitados*/
let valorTabuada = document.getElementById("tabuada");
let valorMultiplicacao = document.getElementById("multiplicado");
 
/*pegando a div que será apresentado os resultados*/
let result = document.querySelector(".resultado");
let disable = document.querySelector(".disable");
let exibirValor = document.querySelector(".exibirValor");
 
/*evento ouvinte do btn*/
let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  createTable();
  limpaFormulario();
});
 
//Funcao que mostra a div de resultados
const createTable = () => {
  const number = parseInt(valorMultiplicacao.value);
  const tab = parseInt(valorTabuada.value);
  for (let i = 1; i <= number; i++) {
    isDisplayDisable();
    exibirTabuada(tab, i);
  }
  numeroTabuada();
};
 
//verifica se o display esta desabilitado e habilita a div de resultado
function isDisplayDisable() {
  if (disable.style.display === "none" || disable.style.display === "") {
    disable.style.display = "block";
  }
}
 
//insere o valor da tabuada no html
const numeroTabuada = () => {
  let numero = document.querySelector(".numeroTabuada");
  numero.innerHTML = valorTabuada.value;
};
 
const exibirTabuada = (tabuada, multiplicacao) => {
  resultado = `${tabuada} * ${multiplicacao} = ${tabuada * multiplicacao}`;
  const itemHtml = `<li>${resultado}</li>`;
  exibirValor.innerHTML += itemHtml;
  exibirValor.style.listStyleType = "none";
  exibirValor.style.fontSize = "22px";
  exibirValor.style.textAlign = "center";
  exibirValor.style.fontWeight = "bold";
};
 
const limpaFormulario = () => {
  exibirValor.innerHTML = "";
  createTable();
  document.body.style.overflow = "none";
};
 