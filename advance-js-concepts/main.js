import { multiply } from "./imports/js/calcul  
// JavaScript Function

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
