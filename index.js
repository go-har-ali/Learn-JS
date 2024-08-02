// Counting with buttons
//console.log('Hello World!');
const decreaseBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('inc-btn');
const counter = document.getElementById('counter'); 

let count = 0;

increaseBtn.onclick = () => {
    count++;
    counter.textContent = count;
};

decreaseBtn.onclick = () => {
    count--;
    counter.textContent = count;
};

resetBtn.onclick = () => { 
    count = 0;
    counter.textContent = count;
};

// Math Functions

let x = 3.99;
let y = 2;
let z;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.abs(x);
//z = Math.min(x, y);
z = Math.max(x, y);
//z = Math.random();
//z = Math.log(x);
//z = Math.exp(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);

console.log(z); 

// Turnary operators

let age = 21;
let message = age >= 18 ? console.log('You are an adult') : console.log('You are a minor');
console.log(message);
let message2;

if (age >= 18) {
    message2 = 'You are an adult';
} else {    
    message2 = 'You are a minor';
}

let time = 16;
let greeting = time < 12 ? 'Good morning' : time < 18 ? 'Good afternoon' : 'Good evening';
console.log(greeting);

let isStudent = true;
let message3 = isStudent ? "You are a student" : "You are not a student";
console.log(message3);

let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);

//switch statement

let day = 1;
if (day === 1) {
    console.log('Monday');
} else if (day === 2) {
    console.log('Tuesday');
} else if (day === 3) {
    console.log('Wednesday');
} else if (day === 4) {
    console.log('Thursday');
} else if (day === 5) {
    console.log('Friday');
} else if (day === 6) {
    console.log('Saturday');
} else if (day === 7) {
    console.log('Sunday');
} else {
    console.log('Invalid day');
}

let day2 = 1;
switch (day2) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
        break;
}

let testScore = 85;
let letterGrade;

switch (true) { 
    case testScore >= 90:
        letterGrade = 'A';
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore >= 70:
        letterGrade = 'C';
        break;
    case testScore >= 60:
        letterGrade = 'D';
        break;
    default:
        letterGrade = 'F';
        break;
}

console.log(`Your grade is ${letterGrade}`);

// String methods
let username = 'John Doe';

username.charAt(0); // J
console.log(username.charAt(0));

username.indexOf('o'); // 1
console.log(username.indexOf('o'));

console.log(username.length);

username = username.trim();
console.log(username);

// String Slicing in JS
const fullName = 'John Doe';

let firstName = fullName.slice(0, 4);

let lastName = fullName.slice(5);

console.log(lastName);

let firstChar = fullName.slice(0, 1);

let lastChar = fullName.slice(-1);

console.log(firstName); 

const email = "gohar@gmail.com";

let username2 = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@') + 1);
console.log(username2);
console.log(extension);

// Method Chaining

let username3 = window.prompt('Enter your username: ');

username3 = username3.trim();
let letter = username3.charAt(0);
letter = letter.toUpperCase();

let extraChars = username3.slice(1);
extraChars = extraChars.toLowerCase();
username3 = letter + extraChars;

console.log(username3);

// Method Chaining

let username4 = window.prompt('Enter your username: ');
username4 = username4.trim().charAt(0).toUpperCase() + username4.slice(1).toLowerCase();
console.log(username4);

// Logical Operators

const temp = 25;

if (temp > 0) {
    console.log('The temperature is Good');
}
else if (temp < 30) {
    console.log('The temperature is Good');
}
else {
    console.log('The temperature is Bad');
}

// Using Logical Operators
if (temp > 0 && temp < 30) {
    console.log('The temperature is Good');
}

if (temp < 0 || temp > 30) {
    console.log('The temperature is Bad');
}
else {
    console.log('The temperature is Good');
}

const isSunny = true;

if (!isSunny){
    console.log('It is cloudy');
}
else {
    console.log('It is sunny');
}

// = assignment operator
// == equality operator (checks only value)
// === strict equality operator (checks value and type)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

if (PI === "3.14") {
    console.log('The value of PI is 3.14');
}
else {
    console.log('The value of PI is not 3.14');
}

if (PI !== "3.14") {
    console.log('The value of PI is not 3.14');
}
else {
    console.log('The value of PI is 3.14');
}

if (PI === 3.14) {
    console.log('The value of PI is 3.14');
}else {
    console.log('The value of PI is not 3.14');
}

// While Loop in JS
let username5 = "";

while (username5 === "" || username5 === null) {
    username5 = window.prompt('Enter your username: ');
}

console.log(`Welcome ${username5}`);

let loggedIn = false;
let username6;
let password;

while (!loggedIn) {
    username6 = window.prompt('Enter your username: ');
    password = window.prompt('Enter your password: ');

    if (username6 === 'admin' && password === '12345') {
        loggedIn = true;
        console.log('You are logged in');
    }
    else {
        console.log('Invalid username or password');
    }
}

// For Loop in JS

for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 5; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if(i == 13) {
        continue;
    }
    else {
        console.log(i);
    }
}

for (let i = 1; i <= 20; i++) {
    if(i == 13) {
        break;
    }
    else {
        console.log(i);
    }
}
