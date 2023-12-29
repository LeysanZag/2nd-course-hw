// Задание 1
let password = 'пароль';
let userPassword = prompt("Введите ваш пароль");
userPassword==password ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

// Задание 2
let c =prompt("Введите число");
if (c>=0 && c<=10) {
    console.log("Верно");
}
else {
   console.log("Не верно");
}
// Задание 3
let d =prompt("Введите число 1");
let e =prompt("Введите число 2");
if (d>100 || e>100) {
    console.log("Верно");
}
else {
   console.log("Не верно");
}
// Задание 4 
let a = '2';
let b = '3';
alert(Number(a)+ Number(b));

// Задание 5
monthNumber = prompt("Введите номер месяца");
switch (monthNumber) {
    case '1':
    case '2':
    case'12':
        console.log('Зима')
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна')
        break;
     case '6':
     case '7':
     case '8':
        console.log('Лето')
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень')
        break;
        default:
            console.log('Введен неверный вариант');
        break;
}

// Задание 7
let peremen =Number(prompt ("Пожалуйста, введите любое число"));
let isNumber = !isNaN(peremen);
    if (peremen % 2) {
      console.log("не четное"); 
    } else  
       console.log ("четное");
  
      
// Задание 8-9
let clientOS = 1; // или 1
clientOS === 0 ? console.log(`Установите версию приложения для iOS по ссылке`) : console.log(`Установите версию приложения для Android по ссылке`);

let clientDeviceYear = 2010;

if ((clientOS === 1) && (clientDeviceYear >= 2015)) {
    console.log(`Установите версию приложения для Android по ссылке`);
} else if ((clientOS === 1) && (clientDeviceYear < 2015)) {
    console.log(`Установите облегченную версию приложения для Android по ссылке`);
} else if ((clientOS === 0) && (clientDeviceYear >= 2015)) {
    console.log(`Установите версию приложения для iOS по ссылке`);
} else {
    console.log(`Установите облегченную версию приложения для iOS по ссылке`);
}

