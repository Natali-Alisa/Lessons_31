'use strict';

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let symbolKey = prompt('Вкажіть число від 0 до 9');

switch (symbolKey) {
    case '0': alert(`~`);
        break
    case '1': alert(`!`);
        break
    case '2': alert(`@`);
        break
    case '3': alert(`#`);
        break
    case '4': alert(`$`);
        break
    case '5': alert(`%`);
        break
    case '6': alert(`^`);
        break
    case '7': alert(`&`);
        break
    case '8': alert(`*`);
        break
    case '9': alert(`(`);
        break
    default: alert(`Ви вказали більше число, потрібно від 0 до 9`);
}


// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.


let userAge = +prompt('Вкажіть скільки Вам років');

if (userAge <= 11) {
    console.log(`Користувач дитина`);} 
    else if (userAge >= 12 && userAge <= 17) {
    console.log(`Користувач підліток`);}

    else if (userAge >= 18 && userAge <= 59) {
    console.log(`Користувач дорослий`); }

    else if (userAge >= 60) {
    console.log(`Користувач пенсіонер`); }

    else {
    console.log (`Ви вказали не вірні дані`)};


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let firstNumber = +prompt('Вкажіть діапазон чисел. Перше число ""');
let secondNumber = +prompt('Останнє число ""');
let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
    sum +=i;
    }
    console.log (sum);


// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10

    for (let n = 2; n <= 9; n++){  
    console.log('Таблиця множення на ${n}');
        for (let i = 1; i <=9; i++)  
        { 
            console.log(i + "*" + n + "=" +(i*n));  
        }  
        } 

//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let fiveNumber = prompt('Напишіть п\'ятизначне число')
let fiveNumberRevers = fiveNumber.split('').reverse().join('');

if (fiveNumber===fiveNumberRevers) {
    console.log ("Число поліндром");
}
else {
    console.log ("Число не поліндром");
}