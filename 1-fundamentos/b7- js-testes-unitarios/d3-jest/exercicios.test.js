const modExercicios = require('./exercicios');
const modChallenge = require('./challenges');

// 1 - Testa a função sum
const sum = modExercicios.sum;
describe('1 - Teste a Função "sum" que retorna a soma de 2 valores.', () => {
	it('Testa se a soma 4+5 retorna 9.', () => {
		expect(sum(4, 5)).toBe(9);
	});

	it('Testa se a soma 0+0 retorna 0.', () => {
		expect(sum(0, 0)).toBe(0);
	});

	it('Testa se um erro é disparado ao tentar somar um numero com uma string.', () => {
		expect(() => (sum(4, "5"))).toThrow(Error);
		expect(() => (sum(4, "5"))).toThrow('parameters must be numbers');
	});
});

// 2 - Testa a função myRemove
const myRemove = modExercicios.myRemove;
describe('2 - Testa a função myremove que retira um elemento do array', () => {
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.', () => {
		expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
	});

	it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) NãO retorna o array esperado.', () => {
		expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
	});

	it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
		expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
});

// 3 - Testa a função myFizzBuzz
const myFizzBuzz = modExercicios.myFizzBuzz;
describe('3 - Testa a função myFizzbuzz.', () => {
	it('Verifica se a chamada com um número divisível por 3 e 5 retorna o valor esperado', () => {
		expect(myFizzBuzz(15)).toMatch('fizzbuzz');
	});

	it('Verifica se a chamada com um número divisível apenas por 3 retorna o valor esperado', () => {
		expect(myFizzBuzz(9)).toMatch('fizz');
	});

	it('Verifica se a chamada com um número divisível apenas por 5 retorna o valor esperado', () => {
		expect(myFizzBuzz(20)).toMatch('buzz');
	});

	it('Verifica se a chamada com um número que não é divisível por 3 ou 5 retorna o valor esperado', () => {
		expect(myFizzBuzz(7)).toBe(7);
	});

	it('Verifica se a chamada com um parâmetro que não é um número retorna o valor esperado', () => {
		expect(myFizzBuzz('2')).toBeFalsy();
	});
});

// 4 - Teste se encode e decode são funções (em challenge.js)
const encode = modChallenge.encode;
const decode = modChallenge.decode;
describe('4 - Testa as funções encode e decode de Challenge.js', () => {
	it('Testa se encode e decode são funções.', () => {
		expect(typeof encode === 'function');
		expect(typeof decode === 'function');
	})

	it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.', () => {
		expect(encode('aeiou')).toEqual('12345');
		expect(encode('mute kagofe')).toEqual('m5t2 k1g4f2');
	})

	it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
		expect(decode('12345')).toEqual('aeiou');
		expect(decode('m5t2 k1g4f2')).toEqual('mute kagofe');
	})

	it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
		expect(encode('12345').length).toEqual(5);
		expect(encode('mute kagofe').length).toEqual(11);
		expect(encode('aeiou').length).toEqual(5);
		expect(decode('m5t2 k1g4f2').length).toEqual(11);
	})
})