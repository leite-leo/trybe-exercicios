function numeroQueMaisRepete(lista) {
  aux = 0;
  repeteMais = 0;
  for (let index = 0; index < lista.length; index += 1) {
    contador = 0;
    for (let j = 0; j < lista.length; j +=1) {
      if (lista[index] === lista[j]) {
        contador += 1;
      }
    }
    if (contador > aux) {
      aux = contador;
      repeteMais = lista[index];
    }
  }
  console.log("O numero que repede mais é o "+repeteMais);
}

numeroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]);