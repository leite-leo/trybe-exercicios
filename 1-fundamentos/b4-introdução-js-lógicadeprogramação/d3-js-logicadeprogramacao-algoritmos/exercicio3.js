let array = ['java', 'javascript', 'python', 'html', 'css'];
let aux = array[0];
let maior = aux.length;
let palavra = "";

for (let index = 1; index < array.length; index += 1) {
  let cont = array[index].length;
  if (cont > maior) {
    maior = cont;
    palavra = array[index];
  }
}

console.log(palavra);
