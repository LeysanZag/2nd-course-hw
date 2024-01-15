// Задание 1

for (let i = 0; i < 2; i++); {
    console.log("Привет");
}

//Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4
let obj = {
    "Kolya": "200",
    "Vasya": "300",
    "Petya": "400"
};
for (let key in obj)
    console.log(`${key} - salary ${obj[key]} dollars`);

//Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);

//Задание 6
let firstFriday = 5;
for (let i = firstFriday; i <= 31; i += 7) {
    console.log(`Today is Friday, ${i}-th`);
}