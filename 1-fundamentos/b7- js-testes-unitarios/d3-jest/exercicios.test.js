const exercicios = require('./exercicios');
const challenge = require('./challenges');

// 1 - Testa a função sum
const sum = exercicios.sum;
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
const myRemove = exercicios.myRemove;
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
const myFizzBuzz = exercicios.myFizzBuzz;
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
const encode = challenge.encode;
const decode = challenge.decode;
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

// 5 - Testa a função TechList
const techList = challenge.techList;
describe('5 - Testa a função techList', () => {
	it('Testa se a função techList é definida', () => {
	  expect(techList).toBeDefined();
	});
	it('Testa se techList é uma função', () => {
	  expect(typeof techList).toBe('function');
	});
	it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
	  expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
		{
		  tech: 'CSS',
		  name: 'Lucas'
		},
		{
		  tech: 'HTML',
		  name: 'Lucas'
		},
		{
		  tech: 'JavaScript',
		  name: 'Lucas'
		},
		{
		  tech: 'Jest',
		  name: 'Lucas'
		},
		{
		  tech: 'React',
		  name: 'Lucas'
		}
	  ]);
	});
	it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
	  expect(techList([], 'Lucas')).toBe('Vazio!');
	});
  });

// 6 - Testa a função hydrate
const hydrate = exercicios.hydrate;
describe('6 - Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});