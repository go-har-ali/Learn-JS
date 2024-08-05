// Dice Roller Program

function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        // images.push(`<img  src="Dice_Images/${value}.png" alt="Dice ${value}" class="dice-image">`);
        images.push(`<img src="Dice_Images/${value}.png" alt="Dice ${value}" style="width: 100px; height: auto;" class="dice-image">`);

    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

// Random Password Generator

let length = 12;
let includeUppercase = true;
let includeLowercase = true;
let includeNumbers = true;
let includeSymbols = true;

function generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols, length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let characters = '';
    let password = '';

    if (includeUppercase) {
        characters += uppercaseLetters;
    }
    if (includeLowercase) {
        characters += lowercaseLetters;
    }
    if (includeNumbers) {
        characters += numbers;
    }
    if (includeSymbols) {
        characters += symbols;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    console.log(`Generated Password is: ${password}`);
    return password;
}

const pass = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols, length);
console.log(pass);