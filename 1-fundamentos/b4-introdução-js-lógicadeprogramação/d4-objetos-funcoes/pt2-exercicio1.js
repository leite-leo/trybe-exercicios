function palindromo(string) {
  let newString = "";
  let result = true;
  for (let index = string.length-1; index >= 0; index -=1) {
    newString +=(string[index]);
  }
  console.log(newString);

  if (newString === string) {
    result = true;
  } else {
    result = false;
  }

  return console.log(result); 
}

palindromo("arara");