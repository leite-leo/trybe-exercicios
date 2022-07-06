function indexDoMenorValor(lista) {
    menorValor = lista[0];
    indexDoMenor = 0;
    for (let index in lista) {
      if (lista[index] < menorValor) {
        menorValor = lista[index];
        indexDoMenor = index;
      }
    }
    return indexDoMenor;
  }
  
  console.log(indexDoMenorValor([2, 4, 6, 7, 10, 0, -3]));
  