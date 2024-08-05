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
