const numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);
console.log(evenNumbers); // [2, 4]
console.log(oddNumbers); // [1, 3, 5]

function isEven (element) {
    return element % 2 === 0;
}

function isOdd (element) {
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults); // [18, 19, 20, 60]
console.log(children); // [16, 17]

function isAdult (age) {
    return age >= 18;
}

function isChild (age) {
    return age < 18;
}

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const shortWords = fruits.filter(getShortWords);
const longWords = fruits.filter(getLongWords);


console.log(shortWords); // ['apple', 'mango', 'orange']
console.log(longWords); // ['banana', 'grapes']

function getShortWords (word) {
    return word.length <= 5;
}

function getLongWords (word) {
    return word.length > 5;
}