// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
console.log('---------------------------Задание 1---------------------------');

let cubeNumber = (number) => number ** 3;
console.log(cubeNumber(2) + cubeNumber(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
console.log('---------------------------Задание 2---------------------------');

let userNum = prompt('Введите число');
if (isNaN(userNum) == true) {
    console.log('Значение задано неверно, необходимо задать число');
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${userSalary(userNum, 0.13)}`);
}

function userSalary(userNum, tax) {
    let salary = userNum * (1 - tax);
    return salary;
}


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
console.log('---------------------------Задание 3---------------------------');

let inputNum1 = +prompt('Введите первое число inputNum1')
let inputNum2 = +prompt('Введите второе число inputNum2')
let inputNum3 = +prompt('Введите третье число inputNum3')

function maxNumber(inputNum1, inputNum2, inputNum3) {
    let max;
    if (inputNum1 > inputNum2) {
        max = inputNum1;
        if (max > inputNum3) {
            return max;
        } else {
            return inputNum3;
        }
    } else {
        max = inputNum2;
        if (max > inputNum3) {
            return max;
        } else {
            return inputNum3;
        }
    }
}

console.log(`Максимальным числом из чисел ${inputNum1}, ${inputNum2} и ${inputNum3} является число - ${maxNumber(inputNum1, inputNum2, inputNum3)}`)


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
console.log('---------------------------Задание 4---------------------------');

let num1 = 2;
let num2 = 6;

let sum = (num1, num2) => num1 + num2;

function difference(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }  
}

let multiplication = (num1, num2) => num1 * num2;

let division = (num1, num2) => num1 / num2;

console.log(`Сумма чисел ${num1} и ${num2} равна ${sum(num1, num2)}`);
console.log(`Разность чисел ${num1} и ${num2} равна ${difference(num1, num2)}`);
console.log(`Произведение чисел ${num1} и ${num2} равно ${multiplication(num1, num2)}`);
console.log(`Частное чисел ${num1} и ${num2} равно ${division(num1, num2)}`);