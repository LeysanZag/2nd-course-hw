// Задание 1
    const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort( compareFn:(a:{age:number,name:string), 
    b :{age:number, name:string)) => a.age - b.age);
    console.log(people);