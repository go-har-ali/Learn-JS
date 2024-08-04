// Spread Operators
// Spread Operator is a new feature in ES6 that allows you to expand an iterable like an array or object into its individual elements. 
//It is denoted by three dots (…). 
//The spread operator is used to pass an array to functions that normally require a list of many arguments.

let numbers = [1,2,3,4,5];
console.log(numbers); // [1, 2, 3, 4, 5]

let maximum = Math.max(...numbers);
console.log(maximum);

let minimum = Math.min(...numbers);
console.log(minimum);

let username = "Gohar Ali";
let letters = [...username];
console.log(letters);

let characters = [...username].join("-");
console.log(characters);

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

let newfruits = [...fruits];
console.log(newfruits);

let numbers2 = [...numbers, 6, 7, 8, 9, 10];
console.log(numbers2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let fruitsAndNumbers = [...fruits, ...numbers, "eggs", "milk"];
console.log(fruitsAndNumbers);

// Rest Parameters
// Rest parameters are used to pass a variable number of arguments to a function.
// The rest parameter is denoted by three dots (…).
// The rest parameter collects all the remaining arguments into an array.
// The rest parameter must be the last parameter in the function definition.

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "shawarma";
const food4 = "biryani";

openFridge(food1, food2, food3, food4);

function getFood(...foods){
    return foods;
}

let foods = getFood(food1, food2, food3, food4);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total}`);

function getAverage(...numbers){
    let res = 0;
    for (let number of numbers){
        res += number;
    }
    return res / numbers.length;
}

const Average = getAverage(1, 2, 3, 4, 5);
console.log(`Your average is ${Average}`);

// Combine Strings

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Gohar", "Ali", "Khan");
console.log(fullName);