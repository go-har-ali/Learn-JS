// inheritance in JS
// 1. prototype inheritance
// 2. class inheritance

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating` );
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Dog extends Animal {
    name = 'Dog';
    bark() {
        console.log('Dog is barking');
    }
}

class Fish extends Animal {
    name = 'Fish';
    swim() {
        console.log('Fish is swimming');
    }
}

class Hawk extends Animal {
    name = 'Hawk';
    fly() {
        console.log('Hawk is flying');
    }
}

const dog = new Dog();
const fish = new Fish();
const hawk = new Hawk();

//dog.alive = false;

console.log(dog.alive);
dog.eat();
dog.sleep();
dog.bark();

