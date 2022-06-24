let peca = "RAINHA";

let pacaLowCase = peca.toLowerCase();

switch (pacaLowCase) {
    case "peao":
        console.log("Uma casa para frente");
        break;
    case "torre":
        console.log("Movimentos laterais, para frente e para trás");
        break;
    case "cavalo":
        console.log("Movimentos em L para qualquer lado- sendo sempre 3+2 casas");
        break;
    case "bispo":
        console.log("Movimentos diagonais");
        break;
    case "rainha":
        console.log("Todos os movimentos");
        break;
    case "rei":
        console.log("Uma casa para qualquer lado");
        break;
    default:
        console.log("Erro: Peça inválida");
}

