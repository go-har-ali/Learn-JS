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