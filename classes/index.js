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