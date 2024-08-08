// this in JS

// this in JS is a reference to the object that is executing the current function

const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.greet(); // Hello, my name is John.

const person2 = {
    name: 'Ali',
    age: 30,
    sayHello: () => {
        console.log(`Hello, my name is ${person2.name}`);
    }
};

person2.sayHello(); // Hello, my name is undefined


// constructor function in JS
function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {
        console.log('Vroom Vroom');
    };
}

const car1 = new Car('Toyota', 'Corolla', 2015, 'red'); // Car {make: "Toyota", model: "Corolla", year: 2015, color: "red", drive: ƒ}
const car2 = new Car('Honda', 'Civic', 2016, 'blue'); // Car {make: "Honda", model: "Civic", year: 2016, color: "blue", drive: ƒ}
const car3 = new Car('BMW', 'X5', 2018, 'black'); // Car {make: "BMW", model: "X5", year: 2018, color: "black", drive: ƒ}

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();




