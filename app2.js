//Desafio Aula 01
//Exercicio 2
let titulo = document.querySelector ("h1");
titulo.innerHTML = "Hora do Desafio"
//Exercicio 3
function verificarChute() {
    console.log("O botão foi clicado");
}
//Exercicio 4
function verificarChute() {
    alert("Eu amo JS")
}
//Exercicio 5
function verificarChute() {
    let cidade = prompt("Digite o nome de uma cidade brasileira")
    alert(`Eu estive em ${cidade} e lembrei de você`)
} 
//Exercicio 6
function verificarChute() {
    let numero1 = parseInt(prompt("Digite um numero"))
    let numero2 = parseInt(prompt("Digite outro numero"))
    let resultado = numero1 + numero2
    alert(`O resultado da soma dos numeros é ${resultado}`)
}

//Desafio Aula  02
//Exercicio 1
function exibirOla () {
    console.log("Olá, mundo!");
}
  exibirOla();
//Exercicio 2
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
  exibirOlaNome("Guilherme");
//Exercicio 3
function calcularDobro(numero) {
    return numero * 2;
}  
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);
//Exercicio 4
function calcularMedia(a,b,c) {
    return (a + b + c) / 3;
}
let media = calcularMedia(5,4,7);
console.log(media);
//Exercicio 5
function numeroMaior(a,b) {
    return a > b ? a : b;
}
let maior = numeroMaior(20,35);
console.log(maior);
//Exercicio 6  eleVezes(a/numero)
function eleVezes(a) {
    return a * a; 
}
let resultado = eleVezes(7);
console.log(resultado);

//Desafio Aula 03
//Exercicio 1

//Desafio Aula 04
//Exercicio 1
let listaGenerica = [];

//Exercicio 2
let linguagensDeProgramação = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//Exercicio 3
linguagensDeProgramação.push ("Java", "Ruby", "GoLang");
//Exercicio 4,5,6
let listaNomes = ["Guilherme", "Giovanni", "Lucerys"];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[2]);