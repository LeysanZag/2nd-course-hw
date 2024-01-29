function gameStart(){
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const shuffledWords = [...words].sort(() => Math.random() - 0.5);
alert(shuffledWords);
const userGuessFirst = prompt("Чему равнялся первый элемент массива?");
const userGuessLast = prompt("Чему равнялся последний элемент массива?");
if (userGuessFirst === shuffledWords[0] &&
    userGuessLast=== shuffledWords[shuffledWords.length - 1]) {
  alert("Поздравляем! Вы угадали!");
} else if 
  (userGuessFirst === shuffledWords[0] || 
   userGuessLast === shuffledWords[shuffledWords.length - 1])
 {
  alert("Вы были близки к победе!");
} else {
  alert("Вы ответили неверно. Попробуйте еще раз!");
}
}

