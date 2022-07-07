let numero = 50;
let lista = [];
let primos = [];

for (let j = 2; j <= 50; j+=1){
    let cont = 0;    
    for (let k = 1; k <= j; k +=1) {
        if((j % k) === 0) {
            cont +=1;
        }
    }
      if (cont === 2) {
       primos.push(j);
    } 
}

let maior = primos[0];
for(let i = 1; i <= primos.length; i +=1) {
    if (primos[i] > maior) {
        maior = primos[i];
    }
}

console.log(maior);

