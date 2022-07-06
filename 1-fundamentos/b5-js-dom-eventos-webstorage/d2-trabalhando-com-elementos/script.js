// arquivo script.js

//console.log(document.getElementById('start').nextSibling) // nó

//console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

const ondeEuTo = document.getElementById('elementoOndeVoceEsta');
console.log(ondeEuTo);

const paiDeOndeEuTo = ondeEuTo.parentNode;
paiDeOndeEuTo.style.color = 'red';
console.log(paiDeOndeEuTo);

const primeiroFdoF = document.getElementById('primeiroFilhoDoFilho');
primeiroFdoF.innerHTML = 'Texo de PrimeiroFilhoDoFilho'
console.log(primeiroFdoF);

const primeiroF = document.getElementById('pai').firstElementChild;
console.log(primeiroF);

console.log(ondeEuTo.previousElementSibling);

console.log(ondeEuTo.nextSibling);

console.log(ondeEuTo.nextElementSibling);

console.log(document.getElementById('pai').lastElementChild);