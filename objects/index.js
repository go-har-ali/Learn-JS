// objects in JS

const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    isEmployed: true,
    sayHello: function() {
        console.log('Hi! I am ' + this.firstname + ' ' + this.lastname)
    },
    sayBye: function() {
        console.log('Goodbye!')
    },
    eat: () => { 
        console.log('I am eating pizza')
    }
};

const person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
    age: 25,
    isEmployed: false,
    sayHello: function() {
        console.log('Hi! I am ' + this.firstname + ' ' + this.lastname)
    },
    sayBye: function() {
        console.log('Goodbye!')
    },
    eat: () => { 
        console.log('I am eating sushi')
    }
};

person.sayHello();
person.sayBye();
person.eat();

person2.sayHello();
person2.sayBye();
person2.eat();

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.isEmployed);
