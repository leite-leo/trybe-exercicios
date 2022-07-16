function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let lista = document.querySelector('#days');
  for (i = 0; i < decemberDaysList.length; i += 1) {
    let eachDay = decemberDaysList[i];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = eachDay;
    if (eachDay === 24 || eachDay === 25 || eachDay === 31) {
      dayItem.className = 'day holiday';
    } else {
      dayItem.className = 'day';
    } 
    if(eachDay === 4 || eachDay === 11 || eachDay === 18 || eachDay === 25) {
      dayItem.classList.add('friday');
    }
    lista.appendChild(dayItem);
  }
}
createDaysOfTheMonth();

// Exercício 2:
function holidayBtn(string) {
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = string; 
  buttonContainer.appendChild(button);
}
holidayBtn('Feriados');

// Exercício 3:
let btnFeriados = document.getElementById('btn-holiday');
btnFeriados.addEventListener('click', function() {
  let newColor = 'yellow';
  let originalColor = 'rgb(238,238,238)';
  liDay = document.getElementsByClassName('holiday');
  for(index = 0; index < liDay.length; index += 1){
    if (liDay[index].style.backgroundColor === newColor) {
      liDay[index].style.backgroundColor = originalColor;
    } else {
      liDay[index].style.backgroundColor = newColor;
    }
  }
})

// Exercicio 4:
function fridayBtn(string) {
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerHTML = string; 
  buttonContainer.appendChild(button);
}
fridayBtn('Sexta-feira');

// Exercicio 5:

let btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', function() {
  let newText = 'Sextou!';
  liDay = document.getElementsByClassName('friday');
  for(index = 0; index < liDay.length; index += 1){
    if (liDay[index].innerHTML === newText) {
      liDay[index].innerHTML = originalText;
    } else {
      liDay[index].innerHTML = newText;
    }
  }
})

//Exercicio 6:


