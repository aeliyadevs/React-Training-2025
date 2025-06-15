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

// template literals syntax `String ${variable}`;

let sentence = document.createElement("p");
// sentence.innerHTML = `<div>
//                         <p>My name is <strong>Aeliya Tamang</strong></p>
//                         <p>My address: Lalitpur</p></div>
//                       <button>Click Me</button>
//                     `;

sentence.innerHTML = `Lorem ipsum dolor <strong>${person.firstName}</strong>, sit amet consectetur adipisicing elit. Nemo cumque natus dolorum debitis 
  vitae quas beatae quos eos minima. Repellendus nulla adipisci quaerat fuga suscipit itaque 
  facilis ullam quisquam, ${person.age} consequatur ab voluptates reprehenderit aperiam beatae minima corporis 
  sunt, quam perferendis? Ipsa eaque libero rerum, incidunt eveniet, quis odit illo, dolorem est 
  modi consequuntur recusandae quos ducimus nisi commodi atque fugiat blanditiis alias veniam 
  nulla sunt consequatur consectetur fugit sint! Rerum inventore fugiat temporibus quasi animi 
  debitis, unde sint alias provident, iure, corrupti reprehenderit. Quae repudiandae rerum ipsam 
  consequuntur aperiam minus ea ex, non sit, incidunt accusantium itaque, dignissimos aliquid 
  eveniet.`;
let contentDiv = document.getElementById("content");
contentDiv.appendChild(sentence);
console.log(contentDiv);

// synchronous vs asynchronous operations