// Задание 1
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
  ];
  const compareByAge = (person1, person2) => {
    return person1.age - person2.age;
  };
  console.log(people1.sort(compareByAge));

  // Задание 2
  function isPositive(el) {
    return el>0;
    }
    function isMale(el) {
   return el.gender === 'male'
    }
    function filter(arr, callback) {
        const result = [];
        arr.map(el => {
            if(callback(el)){
            result.push(el)
        }
    })
    return result;
    }
    console.log(filter([3, -4, 1, 9], isPositive));
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    console.log(filter(people, isMale));
    
    // Задание 3
let secondsPassed = 0;
function printCurrentDate() {
  let currentDate = new Date();
  console.log(currentDate);
}
function intervalFunction() {
  printCurrentDate();
  secondsPassed += 3;
  if (secondsPassed >= 30) {
    clearInterval(intervalID); 
    console.log('30 секунд прошло');
  }
}
let intervalID = setInterval(intervalFunction, 3000);
setTimeout(function() {
  clearInterval(intervalID);
}, 30000);
    
// Задание 4
function delayForSecond(callback) {
    setTimeout(handler:() => {callback()}, timeout: 1000)
}
delayForSecond(callback: function () {
  console.log('Привет, Глеб!');
})

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
const callback = () =>sayHi(name:'Глеб')
delayForSecond(callback)