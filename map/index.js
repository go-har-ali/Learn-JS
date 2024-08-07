const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(square);
const cubedNumbers = numbers.map(cube);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
console.log(cubedNumbers); // [1, 8, 27, 64, 125]

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
const upperCasedStudents = students.map(upperCase);
const lowerCasedStudents = students.map(lowerCase);
console.log(upperCasedStudents); // ["ALICE", "BOB", "CHARLIE", "DAVID", "EVE"]
console.log(lowerCasedStudents); // ["alice", "bob", "charlie", "david", "eve"]

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

const dates = ["2024-1-10", "2025-2-10", "2026-3-10", "2027-4-10", "2028-5-10"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates); // ["1/10/2024", "2/10/2025", "3/10/2026", "4/10/2027", "5/10/2028"]

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}