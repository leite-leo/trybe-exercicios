/* hof - 3 parametros
primeiro será um array de respostas corretas (Gabarito);
O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
Uma resposta correta adiciona 1 ponto à pontuação final;
A ausência de uma resposta não altera a pontuação (quando for "N.A");
Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

*/

const respostasCertas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasAluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrige = (rc, re) => {
	if (re === rc) {
		return 1;
	} else if (re === 'N.A') {
		return 0;
	} else {
		return -0.5;
	}
}

const hofDivulgaNota = (gabarito, prova, funcCorrecao) => {
	let total = 0;
	for (let i = 0; i < gabarito.length; i += 1) {
		total += funcCorrecao(gabarito[i], prova[i]);
		console.log(`Total = ${total} em ${i}`);
	} 
	return console.log(total);
};

hofDivulgaNota(respostasCertas, respostasAluno, corrige);