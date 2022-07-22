//hof - gera numero aleatorio entre 1 e 5
//    - recebe como parametro o numero apostado e a função que 
//      verifica se o numero apostado é igual ao gerado
//    - retorna string ("Tente novamente" ou "Parabéns você ganhou")

const checkNum = (num, rn) => {
	if (num === rn) {
		return true;
	} else {
		return false;
	}
};

const promoCash = (verify, bet) => {
	const randomNumber = Math.floor((Math.random() * 5) + 1);
	if (verify(randomNumber, bet)) {
		return 'Parabéns você ganhou';
	} else {
		return 'Tente novamente';
	}
};


console.log(promoCash(checkNum, 3));
