let word = "tryber";
let array = [];
let reverseArray = [];
let reverseWord = "";

for (let index = 0; index < word.length; index += 1) {
  array.push(word[index]);
}

for (let i = word.length-1; i >= 0; i -= 1) {
  reverseArray.push(array[i]);
}

for (let j = 0; j < word.length; j += 1) {
  reverseWord += reverseArray[j];
}
console.log(reverseWord);