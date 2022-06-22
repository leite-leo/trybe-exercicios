const a = 60;
const b = 60;
const c = 60;

let soma = a+b+c;
let validador = (a > 0) && (b > 0) && (c > 0)

if (validador === true && soma === 180){
    console.log("true");
} else if (soma != 180) {
    console.log("false");
} else if (validador === false){
    console.log("Erro: Os angulos devem ser maior que 0");
}
