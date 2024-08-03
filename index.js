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