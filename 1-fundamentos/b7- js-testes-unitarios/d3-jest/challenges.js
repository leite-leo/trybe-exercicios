// Desafio 1
function compareTrue(valor1, valor2) {
  let result = true;
  if (valor1 === true && valor2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  result = ((base * height) / 2);
  return result;
}

// Desafio 3
function splitSentence(frase) {
  let array = [];
  let word = '';
  for (let i = 0; i <= frase.length; i += 1) {
    if ((frase[i] !== ' ') && (i !== frase.length)) {
      word += frase[i];
    } else {
      array.push(word);
      word = '';
    }
  }
  return array;
}

// Desafio 4
function concatName(lista) {
  let primeiro = lista[0];
  let ultimo = lista[lista.length - 1];
  let result = ultimo + ', ' + primeiro;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(lista) {
  let maiorValor = lista[0];
  let contador = 0;
  for (let index in lista) {
    if (lista[index] > maiorValor) {
      maiorValor = lista[index];
    }
  }
  for (let k = 0; k < lista.length; k += 1) {
    if (lista[k] === maiorValor) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let difCat1 = 0;
  let difCat2 = 0;
  let result = '';
  difCat1 = cat1 - mouse;
  difCat2 = cat2 - mouse;
  if (difCat1 < 0) {
    difCat1 = difCat1 * -1;
  }
  if (difCat2 < 0) {
    difCat2 = difCat2 * -1;
  }
  if (difCat1 > difCat2) {
    result = 'cat2';
  } else if (difCat1 < difCat2) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let resultArray = [];
  for (let l = 0; l < array.length; l += 1) {
    if (array[l] % 3 === 0 && array[l] % 5 === 0) {
      resultArray.push('fizzBuzz');
    } else if (array[l] % 3 === 0) {
      resultArray.push('fizz');
    } else if (array[l] % 5 === 0) {
      resultArray.push('buzz');
    } else if (array[l] % 3 !== 0 && array[l] % 5 !== 0) {
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

// Desafio 9
function encode(frase) {
  let encodedFrase = '';
  for (let m = 0; m < frase.length; m += 1) {
    if (frase[m] === 'a') {
      encodedFrase += '1';
    } else if (frase[m] === 'e') {
      encodedFrase += '2';
    } else if (frase[m] === 'i') {
      encodedFrase += '3';
    } else if (frase[m] === 'o') {
      encodedFrase += '4';
    } else if (frase[m] === 'u') {
      encodedFrase += '5';;
    } else {
      encodedFrase += frase[m];
    }
  }
  return encodedFrase;
}

console.log(encode('Sera que troca as letras?'));

function decode(phrase) {
  let encodedFrase = '';
  for (let n = 0; n < phrase.length; n += 1) {
    if (phrase[n] === '1') {
      encodedFrase += 'a';
    } else if (phrase[n] === '2') {
      encodedFrase += 'e';
    } else if (phrase[n] === '3') {
      encodedFrase += 'i';
    } else if (phrase[n] === '4') {
      encodedFrase += 'o';
    } else if (phrase[n] === '5') {
      encodedFrase += 'u';
    } else {
      encodedFrase += phrase[n];
    }
  }
  return encodedFrase;
}

// Desafio 10
function techList(listaTech, nome) {
  if (listaTech.length !== 0) {
    let listaOrdenada = listaTech.sort();
    let novaLista = [];
    for (let p = 0; p < listaOrdenada.length; p += 1) {
      let objeto = {
        tech: listaOrdenada[p],
        name: nome,
        };
      novaLista.push(objeto);
    }
    return novaLista;
  } else {
    return 'Vazio!';
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
