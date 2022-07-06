function MaiorNome(lista) {
  maior = lista[0];
  for (let valor of lista) {
    if (valor.length > maior.length) {
      maior = valor;
    }
  }
  return maior;
}

console.log(MaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))