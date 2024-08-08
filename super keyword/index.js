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

class Janwar {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} is moving at a speed of ${speed}mph`);
    }
}

class Rabbit extends Janwar {
    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed;

    }

    run() {
        console.log(`${this.name} is running...`);
        super.move(this.runspeed);
    }

}

class Machli extends Janwar {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`${this.name} is swimming...`);
        super.move(this.swimSpeed);
    }
}

class Hawky extends Janwar {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`${this.name} is flying...`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit('Rabbit', 2, 10);
const fishy = new Machli('Fish', 1, 5);
const hawky = new Hawky('Hawk', 3, 20);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);

console.log(fishy.name);
console.log(fishy.age);
console.log(fishy.swimSpeed);

console.log(hawky.name);
console.log(hawky.age);
console.log(hawky.flySpeed);

rabbit.run();
fishy.swim();
hawky.fly();