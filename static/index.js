// classes in JS

class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product name: ${this.name} and price: ${this.price}`);
    }

    calculateTax(salesTax){
        return this.price * salesTax;
    }
}

const salesTax = 0.05;

const product1 = new Products('Laptop', 1000);
const product2 = new Products('Mobile', 500);
const product3 = new Products('Tablet', 300);


product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const totalForProduct1 = product1.calculateTax(salesTax);

console.log(`Total for product1: ${totalForProduct1}`);

const  totalForProduct2 = product2.calculateTax(salesTax);
console.log(`Total for product2: ${totalForProduct2}`);

const totalForProduct3 = product3.calculateTax(salesTax);
console.log(`Total for product3: ${totalForProduct3}`);

// static keyword in JS
class MathUtil {
    static PI = 3.14159;

    static getDiameter (radius){
        return 2 * radius;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return MathUtil.PI * radius * radius;
    }    
}

//const MathUtil = new MathUtil(); // No need to make object of class to access static members

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumference(5));
console.log(MathUtil.getArea(5));

// Example 2

class User {
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello ${this.username}`);
    }
}

const user1 = new User('John');
const user2 = new User('Smith');
const user3 = new User('David');

console.log(User.userCount);
console.log(user1.username); 
console.log(user2.username);
console.log(user3.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();

