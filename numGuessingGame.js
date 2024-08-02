const minNum = 5;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`); // 5 and 100
    guess = Number(guess);
    console.log(typeof guess, guess);
    if (isNaN(guess)) {
        window.alert('Please enter a valid number');
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else{
        attempts++;
        if (guess < answer) {
            window.alert('TOO LOW! TRY AGAIN!');
        }
        else if (guess > answer) {
            window.alert('TOO HIGH! TRY AGAIN!');
        }
        else {
            window.alert(`CONGRATULATIONS! YOU GUESSED THE NUMBER IN ${attempts} ATTEMPT(S)`);
            running = false;
        }
    }
}