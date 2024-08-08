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


