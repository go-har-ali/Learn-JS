// function expressions are not hoisted

function hello1 () {
    console.log('Hello World 1');
}

setTimeout(hello1, 3000);

const hello = function () {
    console.log('Hello World');
}

hello();

setTimeout(function () {
    console.log('Set Timeout');
}, 1000);

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers);

function square (num) {
    return Math.pow(num, 2);
}

const cubedNumbers = numbers.map(function (num) {
    return Math.pow(num, 3);
});

console.log(cubedNumbers);

const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

const oddNumbers = numbers.filter(function (num) {
    return num % 2 !== 0;
});

console.log(oddNumbers);

const sum = numbers.reduce(function (acc, num) {
    return acc + num;
});

console.log(sum);

// arrow functions in JS are anonymous functions
// arrow functions are not hoisted
// arrow functions do not have their own 'this' context
// arrow functions do not have their own 'arguments' object
// arrow functions do not have their own 'super' object
// arrow functions do not have their own 'new.target' object
// arrow functions do not have their own 'prototype' object
// arrow functions do not have their own 'new' keyword
// arrow functions do not have their own 'call', 'apply', 'bind' methods
// arrow functions do not have their own 'arguments' object
// arrow functions do not have their own 'yield' keyword
// arrow functions do not have their own 'this' object
// arrow functions do not have their own 'prototype' object

const hello2 = () => {
    console.log('Hello World 2');
}

hello2();

const hello3 = () => console.log('Hello World 3');
hello3();

const hello4 = () => 'Hello World 4';
console.log(hello4());

const hello5 = () => ({ message: 'Hello World 5' });
console.log(hello5());

const hello6 = (name) => `Hello ${name}`;
console.log(hello6('John'));

const hello7 = (name) => {
    console.log(`Hello ${name}`);
}

hello7('Ali');

setTimeout(() => {
    console.log('Set Timeout');
}, 2000);

setTimeout(hello8, 2000);

function hello8 () {
    console.log('Hello World 8');
}

const numbers2 = [1, 2, 3, 4, 5];

const squaredNumbers2 = numbers2.map((num) => Math.pow(num, 2));

console.log(squaredNumbers2);

const cubedNumbers2 = numbers2.map((num) => Math.pow(num, 3));
console.log(cubedNumbers2);

const evenNumbers2 = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers2);

const oddNumbers2 = numbers2.filter((num) => num % 2 !== 0);
console.log(oddNumbers2);

const sum2 = numbers2.reduce((acc, num) => acc + num);
console.log(sum2);