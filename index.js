let textBox = document.getElementById("textBox");
let result = document.getElementById("result");
let f = document.getElementById("f");
let c = document.getElementById("c");
let temp;

function convert() {
    if (f.checked) {
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (c.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a Unit";
    }
}

// arrays in JS
let arr = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango", "orange"];

fruits.push("grapes");
fruits.pop();
fruits.unshift("kiwi");
fruits.shift();

fruits[0] = "cheeku";
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

let index = fruits.indexOf("mango");
console.log(index);

console.log(arr[0]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.sort().reverse();
console.log(fruits);

// 2d arrays in JS
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; 

matrix[0][0] = "X";
matrix[0][1] = "O";
matrix[0][2] = "X";

matrix[1][0] = "O";
matrix[1][1] = "X";
matrix[1][2] = "O";

matrix[2][0] = "X";
matrix[2][1] = "O";
matrix[2][2] = "X";

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

for (let row of matrix) {
    for (let element of row) {
        console.log(element);
    }
}

for (let i = matrix.length - 1; i >= 0; i--) {
    const rowString = row.join(" ");
    console.log(rowString);
}

// Spread Operator
let arr1 = [1, 2, 3, 4, 5];
let maximum = Math.max(...arr1);
let minimum = Math.min(...arr1);
console.log(maximum);
console.log(minimum);

let username = "Gohar Ali";
let characters = [...username].join("-");
console.log(characters);

let fruits1 = ["apple", "banana", "mango"];
let vegetables = ["potato", "tomato", "onion"];

let foods = [...fruits1, ...vegetables, "rice", "bread"];

console.log(foods);
console.log(fruits1);

console.log(arr1);

// Rest Parameter in JS

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "fries";
const food4 = "coke";
const food5 = "salad";

openFridge(food1, food2, food3, food4, food5);
