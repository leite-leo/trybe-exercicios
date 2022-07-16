let titulo = document.getElementsByTagName('header')[0];
let h1 = document.createElement('h1');
h1.innerHTML = 'Paleta de Cores';
titulo.appendChild(h1);

// Criando quadro da Paleta de Cores
let main = document.getElementsByTagName('main')[0];
let palette = document.createElement('section');
palette.id = 'color-palette';
main.appendChild(palette);

// Função que cria elementos do quadro da paleta de cores
let paletteBox = document.getElementById('color-palette');
function createPaletteElements(color) {
  let pixel = document.createElement('div');
  pixel.classList = 'pixelpalette';
  pixel.classList.add(color);
  paletteBox.appendChild(pixel);
}

// Criando cada elemento da paleta
createPaletteElements('black');
createPaletteElements('red');
createPaletteElements('blue');
createPaletteElements('green');

// Criando o Quado de pixel
let pixelBoard = document.createElement('section');
pixelBoard.id = 'pixel-board';
main.appendChild(pixelBoard);

// Função que cria elementos do quadro de pixel
function createPixelBoardElements(color) {
  let pixel = document.createElement('div');
  pixel.classList = 'pixelboard';
  pixel.classList.add(color);
  pixelBoard.appendChild(pixel);
}

// Criando 25 elementos do quadro de pixel
for (let index = 1; index <= 25; index += 1) {
  createPixelBoardElements('white');
}

// Adiciona a classe 'selected' á cor preta da paleta
colorBlack = document.getElementsByClassName('black')[0];
colorBlack.classList.add('selected');

colorRed = document.getElementsByClassName('red')[0];
colorBlue = document.getElementsByClassName('blue')[0];
colorGreen = document.getElementsByClassName('green')[0];

// Cria evento na cor preta da paleta, para que quando clicado, receba a classe 'selected'
colorBlack.addEventListener('click', function (event) {
  if (event.target.classList.contains('selected')) {
    console.log('Cor Preta já selecionada!')
  } else {
    event.target.classList.add('selected');
  }
  colorRed.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
})

// Cria evento na cor vermelha da paleta, para que quando clicado, receba a classe 'selected'
colorRed.addEventListener('click', function (event) {
  if (event.target.classList.contains('selected')) {
    console.log('Cor vermelha já selecionada!')
  } else {
    event.target.classList.add('selected');
  }
  colorBlack.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
})

// Cria evento na cor azul da paleta, para que quando clicado, receba a classe 'selected'
colorBlue.addEventListener('click', function (event) {
  if (event.target.classList.contains('selected')) {
    console.log('Cor azul já selecionada!')
  } else {
    event.target.classList.add('selected');
  }
  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.remove('selected');
})

// Cria evento na cor verde da paleta, para que quando clicado, recebaa classe 'selected'
colorGreen.addEventListener('click', function (event) {
  if (event.target.classList.contains('selected')) {
    console.log('Cor verde já selecionada!')
  } else {
    event.target.classList.add('selected');
  }
  colorBlack.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorRed.classList.remove('selected');
})

// Cria eventos nos elementos do quadro aplicando a cor que estiver selecionada na paleta
listaDePixels = document.querySelectorAll('.pixelboard');
for (let index = 0; index < listaDePixels.length; index += 1) {
  listaDePixels[index].addEventListener('click', function (event) {
    event.target.classList.remove('white');
    if (colorBlack.classList.contains('selected')) {
      event.target.className = 'pixelboard black';
    } else if (colorRed.classList.contains('selected')) {
      event.target.className = 'pixelboard red';
    } else if (colorBlue.classList.contains('selected')) {
      event.target.className = 'pixelboard blue';
    } else if (colorGreen.classList.contains('selected')) {
      event.target.className = 'pixelboard green';
    }
  })
}

// Cria botão para limpar o quadro
let divBtn = document.createElement('div');
divBtn.id = 'div-buton';
main.appendChild(divBtn);
let btnClear = document.createElement('input');
btnClear.value = 'Limpar';
btnClear.id = 'clear-board';
btnClear.type = 'button';
divBtn.appendChild(btnClear);

btnClear.addEventListener('click', function() {
  for(let index = 0; index < listaDePixels.length; index += 1) {
    listaDePixels[index].className = 'pixelboard white';
  }
})












