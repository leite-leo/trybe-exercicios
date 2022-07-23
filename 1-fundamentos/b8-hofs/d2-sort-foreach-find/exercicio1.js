const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.(Find)
const bornIn1947 = () => {
  const bookFound = books.find((book) => book.author.birthYear === 1947);
  return bookFound.author.name;
};
console.log(bornIn1947());

 // 2 - Retorne o nome do livro de menor nome.
const shortName = books.sort((bookA, bookB) => bookA.name.length - bookB.name.length);
console.log(shortName[0].name);

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  const BookName26 = books.find((book) => book.name.length === 26);
  return BookName26;
};
console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {
  const decNewOrderByYear = books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
  return decNewOrderByYear;
}
console.log(booksOrderedByReleaseYearDesc());

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX() {
  let secxx = true;
  books.forEach((book) => {
    if (book.author.birthYear < 1901 || book.author.birthYear > 2000){
      secxx = false;
    }
  });
  return secxx;
}
console.log(everyoneWasBornOnSecXX());


// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

console.log(someBookWasReleaseOnThe80s());
 
// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique() {
  
}
