//Задание 1
const numbs = [1, 5, 4, 10, 0, 38];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

//Задание 2
const numbs =[1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));

//Задание 3
let numb = [1, 3, 5, 10, 20]
numb = numb.join(' ');
console.log(numb);

//Задание 4
let table = [];

for (let i = 0; i < 3; i++) {
  table[i] = [];
  for (let j = 0; j < 3; j++) {
    table[i][j] = 1;
  };
};
console.log(table);

//Задание 5
let arr = [1, 1, 1]
arr.push (2,2,2);
console.log(arr);

//Задание 6
let arr = [9, 8, 7, 'a', 6, 5]
arr.sort((a,b) =>a-b).pop();
// delete arr[3];
// arr.pop();
console.log(arr);


//Задание 7
let arr = [9, 8, 7, 6, 5];
let num = Number(prompt('Введите число от 1 до 10'));
if (arr.includes(num)) {
  console.log(`Угадал.`);
} else {
  console.log(`Не угадал.`);
}

//Задание 8
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const newStr = reverseString('abcdef'); 
console.log(newStr);

//Задание 9
const arrDouble=[[1, 2, 3,], [4, 5, 6]];
const flatArr = arrDouble.flat();
console.log(flatArr);

//Задание 10
let arr = [2,7,6,9,8,6,5,4,3,1];
for (let i = 0; i< arr.length-1; i++) {
    console.log(arr[i] + arr [i+1]);  
}
//Задание 11
let mass = [2,7,6,3,1];
let result = mass.map (el => el**2);
console.log(result);

//Задание 12
const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква']
const newArray = [];
for (let i = 0; i < getLengthWords.length; i++) {
    newArray.push(getLengthWords[i].length);
    console.log(newArray);
}
//Задание 12-2
const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква']
return  result =getLengthWords.map(getLengthWords => getLengthWords.length);
console.log(result);


//Задание 13
  function filterPositive(array) {
    const negative = []; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) { 
            negative.push(array[i])
        }
    }
    return negative 
}
console.log(filterPositive([-1, 0, 5, -10, 56])); 