let array = ['java', 'javascript', 'python', 'html', 'css'];
let aux = array[0];
let menor = aux.length;
let palavra = "";

for (let index = 1; index < array.length; index += 1) {
  let cont = array[index].length;
  if (cont < menor) {
    menor = cont;
    palavra = array[index];
  }
}

console.log(palavra);

