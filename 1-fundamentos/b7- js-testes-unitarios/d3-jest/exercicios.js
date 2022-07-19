function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function hydrate(consumo) {
  let qty = 0;
  for (let index = 0; index < consumo.length; index += 1) {
    if ((consumo[index] === '1') || (consumo[index] === '2') || (consumo[index] === '3') || (consumo[index] === '4' ) || (consumo[index] === '5') || (consumo[index] === '6') || (consumo[index] === '7') || (consumo[index] === '8') || (consumo[index] === '9')) {
      qty += parseInt(consumo[index]);
    }
  }
  if (qty === 1) {
    return qty + ' copo de água';
  } else {
    return qty + ' copos de água';
  }  
}

module.exports = {sum, myRemove, myFizzBuzz, hydrate};

