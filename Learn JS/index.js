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