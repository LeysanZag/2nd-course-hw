function gameStart() {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    alert(shuffledWords);
  
    const userGuessFirst = prompt("Чему равнялся первый элемент массива?");
    const userGuessLast = prompt("Чему равнялся последний элемент массива?");
  
    if (
      userGuessFirst.toLowerCase() === shuffledWords[0].toLowerCase() &&
      userGuessLast.toLowerCase() === shuffledWords[shuffledWords.length - 1].toLowerCase()
    ) {
      alert("Поздравляем! Вы угадали!");
    } else if (
      userGuessFirst.toLowerCase() === shuffledWords[0].toLowerCase() ||
      userGuessLast.toLowerCase() === shuffledWords[shuffledWords.length - 1].toLowerCase()
    ) {
      alert("Вы были близки к победе!");
    } else {
      alert("Вы ответили неверно. Попробуйте еще раз!");
    }
  }

