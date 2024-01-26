//Задание 1
function min(a, b) {

    return a < b ? a : b;
};

console.log(min(6, 6));

//Задание 2
function isEven(number) {
    var x = Boolean();
    if (number % 2 == 0) {
        alert("even");
    } else {
        alert("odd");
    }
    return x;

}

isEven(10);

//Задание 3
//3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
function squareRoot(num) {
    return num * num;
}
console.log(squareRoot(2));

//3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.
function squareRoot(num = 2) {

    return num * num;
}
//Задание 4
function ageTest() {
    let age = prompt('Введите возраст');
    if (age < 0) {
        return 'Отрицательное число'
    } if (age >= 0 && age <= 12) {
        return 'Привет друг'
    } if (age >= 13) {
        return 'Добро пожаловать!'
    }
}
console.log(ageTest());

//Задание 5
let a = prompt(`Введите первое число`);
let b = prompt(`Введите второе число`);

function isNumb(a, b) {

    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';

    } else {

        return a * b;
    }
}
console.log(isNumb(a, b));

//Задание 6
function isNumb(n) {
    if (isNaN(n)) {
        console.log("Переданный параметр не является числом");

    } else {
        console.log(`n в кубе равняется ${n ** 3}`);
    }
}
isNumb(prompt(`введи число`));

//Задание 7
const circle1 = {
    radius: 4,
    getArea() {
        return 3.14 * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * 3.14 * this.radius;
    }
}

const circle2 = {
    radius: 6,
    getArea() {
        return 3.14 * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * 3.14 * this.radius;
    }
}

