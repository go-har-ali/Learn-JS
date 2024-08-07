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

