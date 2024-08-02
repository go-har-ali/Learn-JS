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
