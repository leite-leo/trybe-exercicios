let numero = 10;
let lista = [];


for (let i = numero; i > 0; i -= 1) {
 lista.push(i);
}

let fatorial = lista[0];
for(let index = 0; index < lista.length; index += 1) {
  if ((index+1) <= (numero-1)){
    fatorial = fatorial * lista[index+1];
  }
}
console.log("O fatorial de "+numero+" é "+fatorial+".")