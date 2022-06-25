function somaNumero(numero) {
  soma = 0;
  for (let i = 1; i <= numero; i += 1) {
    soma += i;
  }
  return soma;
}

console.log(somaNumero(5));