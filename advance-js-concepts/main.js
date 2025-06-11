import { multiply, add, subtract, divide } from "./imports/js/calculations.js";
import { studentInfo, schoolInfo } from "./imports/js/data.js";
import changeName from "./imports/js/data.js";
import percentage from "./imports/js/calculations.js";
import { person, fruits } from "./imports/js/data.js";
// JavaScript Function
// named exports and default exports
console.log(percentage(50, 300));
// function syntax
// function functionName() {
//   //
// }

// Arrow function

function printName() {
  console.log("Aeliya Tamang");
  console.log("Hello Everyone!");
}
printName();

// arrow function variant
const printNameArrow = () => console.log("Aeliya Tamang - Arrow");
printNameArrow();

function greeting(name) {
  console.log("Hello " + name);
}
greeting("Aeliya Tamang");

const greetingArrow = (name, surname) =>
  console.log("Hello " + name + " " + surname);
greetingArrow("Aeliya Arrow", "Tamang");

let test = greeting("Raj");
console.log(test);

function calculateSum(x, y) {
  let sum = x + y;
  return sum;
}
let sum = calculateSum(12, 31);
console.log(sum);

const sumArrow = (x, y) => x + y;
let testSum = sumArrow(3, 6);
console.log(testSum);

() => console.log("Hey!");
() => {};

document.getElementById("btnId").addEventListener("click", () => {
  console.log("Hey!");
});

// short
// easy
// advance look / modern practice
// =>
// return

// Import and Export in JavaScript
let multi = multiply(3, 6);
console.log(multi);

console.log(add(2, 5));
console.log(subtract(2, 5));
console.log(divide(2, 5));

console.log("Name : " + studentInfo.name);
console.log("Age : " + studentInfo.age);
console.log("School Name : " + schoolInfo.name);
changeName("Kamala");
console.log("Name : " + schoolInfo.name);
console.log("Name : " + studentInfo.name);

// Destructuring

// let [] = person;

let [f1, f2, f3, ...rest] = fruits;
console.log(fruits[2]);
console.log(f1);
console.log(f3);
console.log(rest);

let { firstName, age, email } = person;
console.log(age);
console.log(email);
console.log(firstName);

console.log(person.age);
console.log(person.firstName);
console.log(person.email);

// template literals
console.log(
  "Hello! My name is " +
    person.firstName +
    " " +
    person.middleName +
    " " +
    person.lastName +
    ". I am " +
    person.age +
    " years old. My nationality is " +
    person.nationality +
    "."
);

const bio = `Hello! My name is ${person.firstName} ${person.middleName} ${person.lastName}. I am ${person.age} years old. My nationality is ${person.nationality}.`;
console.log(bio);
