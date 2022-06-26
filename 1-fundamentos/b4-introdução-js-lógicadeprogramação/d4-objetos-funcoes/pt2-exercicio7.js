function verificaFimPalavra(word, ending) {
  indexIgnore = word.length - ending.length;
  aux = "";
  result = true;
  for ( i = indexIgnore; i < word.length; i +=1) {
    aux +=word[i]; 
  }
  if (aux === ending) {
    result = true;
  } else {
    result = false;
  }

  return console.log(result);
}

verificaFimPalavra("trybe", "be");
verificaFimPalavra("paralelepipedo", "pipedo");

