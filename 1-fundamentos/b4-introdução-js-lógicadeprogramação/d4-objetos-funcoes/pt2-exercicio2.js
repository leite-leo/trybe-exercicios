function indexDoMaiorValor(lista) {
  maiorValor = lista[0];
  indexDoMaior = 0;
  for (let index in lista) {
    if (lista[index] > maiorValor) {
      maiorValor = lista[index];
      indexDoMaior = index;
    }
  }
  return indexDoMaior;
}

console.log(indexDoMaiorValor([2, 3, 6, 7, 10, 1]));
