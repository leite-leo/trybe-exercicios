const custo = 100;
const valorVenda = 350;
let imposto = custo * 0.2;
let custoComImposto = custo + imposto;
let lucro = 0;
let lucroTotal = 0;

if (custo <= 0 || valorVenda <=0){
    console.log("Erro: Valor do custo e da venda não podem ser menor ou igual a zero"); 
} else if (custoComImposto >= valorVenda){
    console.log("Cuidado! Você não está tendo lucro e seu negócio pode quebrar!"); 
} else { 
    lucro = valorVenda - custoComImposto;
    lucroTotal = lucro * 1000;
    console.log(lucroTotal);
}

