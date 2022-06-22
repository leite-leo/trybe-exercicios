let salarioBruto = 3000.00;
let descontoInss = 0;
let descontoIr = 0;
let salarioBase = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 0.11;
} else {
    descontoInss = 570.88;
}

salarioBase = salarioBruto - descontoInss;

if(salarioBase <= 1903.98) {
    descontoIr = 0;
} else if (salarioBase <= 2826.66) {
    descontoIr = ((salarioBase * 0.075) - 142.8);
} else if (salarioBase <= 3751.05) {
    descontoIr = ((salarioBase * 0.15) - 354.8);
} else if (salarioBase <= 4664.68) {
    descontoIr = ((salarioBase * 0.225) - 636.13);
} else {
    descontoIr = ((salarioBase * 0.275) - 869.36);
}

salarioLiquido = salarioBase - descontoIr;
console.log(salarioLiquido);
