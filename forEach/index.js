// Call Back functions in JS

function hello() {
    setTimeout(() => {
        console.log("Hello");
    
    }, 2000);
}

function hello2(callback) {
    console.log("Hello");
    callback();
}


function goodbye() {
    console.log("Goodbye");
}

function sum(a, b, callback) {
    let result = a + b;
    callback(result);
}

function printResult(result) {
    console.log(result);
}

function displayResult(result) {
    //console.log("The result is: " + result);
    document.getElementById("myh1").textContent = result;
}

sum(2, 3, displayResult);
// hello();
hello2(goodbye);
//goodbye();

// forEach function in JS 

// forEach() = method used to iterate over an array and apply a function(callback) to each element.
// array.forEach(callback);

let numbers = [1, 2, 3, 4, 5];

function printElement(element) {
    console.log(element);
}

numbers.forEach(printElement);

function doubleElement(element) {
    console.log(element * 2);
}

numbers.forEach(doubleElement);

let fruits = ["apple", "banana", "orange", "grapes"];

function printFruit(fruit) {
    console.log(fruit);
}

fruits.forEach(printFruit);

function upperCaseFruit(fruit) {
    console.log(fruit.toUpperCase());
}

fruits.forEach(upperCaseFruit);

function upperCaseFruit2(fruit, index, array) {
    array[index] = fruit.toUpperCase();
}

fruits.forEach(upperCaseFruit2);

function printFruit2(fruit) {
    console.log(fruit);
}

fruits.forEach(printFruit2);

//capitalize the first letter of each fruit

function capitalizeFruit(fruit, index, array) {
    let firstLetter = fruit.charAt(0).toUpperCase();
    let restOfWord = fruit.slice(1);
    array[index] = firstLetter + restOfWord;
}

fruits.forEach(capitalizeFruit);

function printFruit3(fruit) {
    console.log(fruit);
}   
fruits.forEach(printFruit3);