// inheritance in JS
// 1. prototype inheritance
// 2. class inheritance

// class Animal {
//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating` );
//     }
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Dog extends Animal {
//     name = 'Dog';
//     bark() {
//         console.log('Dog is barking');
//     }
// }

// class Fish extends Animal {
//     name = 'Fish';
//     swim() {
//         console.log('Fish is swimming');
//     }
// }

// class Hawk extends Animal {
//     name = 'Hawk';
//     fly() {
//         console.log('Hawk is flying');
//     }
// }

// const dog = new Dog();
// const fish = new Fish();
// const hawk = new Hawk();

// //dog.alive = false;

// console.log(dog.alive);
// dog.eat();
// dog.sleep();
// dog.bark();

// super  = keyword is used in classes to call the constructor or
//      access the properties and methods of a parent (superclass) 
//      this = this object
//      super = the parent

// super() = call the parent constructor

// super.method() = call the parent method

// super.property = access the parent property

// class Janwar {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     move(speed) {
//         console.log(`${this.name} is moving at a speed of ${speed}mph`);
//     }
// }

// class Rabbit extends Janwar {
//     constructor(name, age, runspeed) {
//         super(name, age);
//         this.runspeed = runspeed;

//     }

//     run() {
//         console.log(`${this.name} is running...`);
//         super.move(this.runspeed);
//     }

// }

// class Machli extends Janwar {
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim() {
//         console.log(`${this.name} is swimming...`);
//         super.move(this.swimSpeed);
//     }
// }

// class Hawky extends Janwar {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly() {
//         console.log(`${this.name} is flying...`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit('Rabbit', 2, 10);
// const fishy = new Machli('Fish', 1, 5);
// const hawky = new Hawky('Hawk', 3, 20);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runspeed);

// console.log(fishy.name);
// console.log(fishy.age);
// console.log(fishy.swimSpeed);

// console.log(hawky.name);
// console.log(hawky.age);
// console.log(hawky.flySpeed);

// rabbit.run();
// fishy.swim();
// hawky.fly();

// setter and getter methods

//getter = special method that makes a property readable
//setter = special method that makes a property writable

// validate and modify a value when reading/writing a property

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(value) {
        if (value < 0) {
            throw new Error('Width must be positive');
        }
        this._width = value;
    } 

    set height(value) {
        if (value < 0) {
            throw new Error('Height must be positive');
        }
        this._height = value;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._width * this._height;
    }
    // get area() {
    //     return this.width * this.height;
    // }

    // set area(value) {
    //     this.width = Math.sqrt(value);
    //     this.height = this.width;
    // }
}

const rectangle = new Rectangle(10, 4);

rectangle.width = 20;
rectangle.height = 10;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// Example 2

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname (value) {
        if (typeof value !== 'string') {
            throw new Error('Firstname must be a string');
        }
        this._firstname = value;
    }

    set lastname (value) {
        if (typeof value !== 'string') {
            throw new Error('Lastname must be a string');
        }
        this._lastname = value;
    }

    set age (value) {
        if (typeof value !== 'number') {
            throw new Error('Age must be a number');
        }
        this._age = value;
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

const person = new Person("Gohar", "Ali", 24);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullName);
console.log(person.age);