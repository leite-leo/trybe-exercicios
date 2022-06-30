/*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName()
  1 - Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
  2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  3 - Crie uma função que mude a cor do quadrado vermelho para branco.
  4 - Crie uma função que corrija o texto da tag <h1>.
  5 - Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
  6 - Crie uma função que exiba o conteúdo de todas as tags <p> no console.
  */

function changeText() {
  let text = document.getElementsByTagName('p')[1];
  text.innerText = 'Espero que daqui a 2 anos eu esteja empregado e acumulando pelo menos 1 ano de experiencia como desenvolvedor back-end!';
}
changeText();

function changeMainContentBackgroundColor() {
  let mainContentBgColor = document.getElementsByClassName('main-content')[0];
  mainContentBgColor.style.background = 'rgb(76,164,109)';
}
changeMainContentBackgroundColor();

function changeCenterContentBackground() {
  let mainContentBg = document.getElementsByClassName('center-content')[0];
  mainContentBg.style.background = 'white';
}
changeCenterContentBackground();

function changeH1Text() {
  let text = document.getElementsByTagName('h1')[0];
  text.innerText = 'Exercício 5.1 - JavaScript';
}
changeH1Text();

function changeTextToUpperCase() {
  let text = document.getElementsByTagName('p')[0];
  text.innerText = text.innerText.toUpperCase();
}
changeTextToUpperCase();

function changeText() {
  let text = document.getElementsByTagName('p');
  for (value of text) {
    console.log(value.innerText);
  }
}
changeText();