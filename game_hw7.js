function gameStart(){
let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
list.sort(() => Math.random() - 0.5);
alert(list);
firstQuestion = prompt("Чему равнялся первый элемент массива?")
lastQuestion = prompt("Чему равнялся последний элемент массива?")
if (list === null){
    alert("Вы ответили неверно");
} else if (list[0].toLowerCase() === firstQuestion.toLowerCase() && list[6].toLowerCase)
{alert("Поздравляем, Вы угадали все верно!");
} else if ((list[0].toLowerCase() !== firstQuestion.toLowerCase() && list[6].toLowerCase))
{alert("Вы ответили неверно!");
} else {
    alert("Вы были близки к победе!")
}
}