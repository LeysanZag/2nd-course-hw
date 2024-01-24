//Задание 1
const message = "Строка в Нижнем РегиСтре";
console.log(message.toUpperCase());

//Задание 2
function strStart (arr, str) {
    return arr.filter(el => el.toLowerCase().startsWith(str));
}
console.log(strStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//Задание 3
const val= 32.58884;
console.log(Math.floor(val));
console.log(Math.ceil(val));
console.log(Math.round(val));

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.max(... numbers));
console.log(Math.min(... numbers));


//Задание 5
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//Задание 6
function getRandomNum(maxValue) {
    const getRandom = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++) {
        getRandom[i] = Math.floor(Math.random() * maxValue);
    }
    return getRandom;
}
console.log(getRandomNum(6));

//Задание 7
function getRandomInt(minValue, maxValue) {   
 return Math.round(Math.random() * (maxValue - minValue)) + minValue
    }                            
    console.log(getRandomInt(2, 12));

//Задание 8
let currentDate = new Date();
console.log(currentDate);

//Задание 9
const myDate =currentDate;
myDate.setDate(myDate.getDate() + 73);
console.log(myDate);

//Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
" " + myDate.getFullYear() + ", " + days[myDate.getDay()];
let fullTime =myDate.getHours() + "часов " + [myDate.getMinutes()]+ "минут "
+ [myDate.getSeconds() + "секунд "];
console.log("Дата: ", fullDate); 
console.log("Время: ", fullTime); 

