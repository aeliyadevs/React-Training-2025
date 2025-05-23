// variables - (let, var, const)
// conditional statments - (if else, switch)
// operators - + - / % & ++ -- ==
// loops (for, while, do-while)

let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    // console.log(i);
    sum = sum + i;
  }
}

const answer1 = document.getElementById("answer1");
answer1.innerText = sum;

// let num = 600851475143;
let num = 600851751;
let largestPrimeFactor = 0;

function problem3soution(num) {
  for (let i = 3; i < num / 2; i += 2) {
    // console.log(i);
    if (num % i == 0) {
      // console.log("factor-" + i);
      if (isPrime(i)) {
        console.log("prime factor - " + i);
        largestPrimeFactor = i;
      }
    }
  }
  console.log(largestPrimeFactor);
}
problem3soution(num);

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

const answer3 = document.getElementById("answer3");
answer3.innerHTML = largestPrimeFactor;

// console.log(isPrime(53));

// Print integers 1-to-100, but print “Fizz” if an integer is
// divisible by three,
// “Buzz” if an integer is divisible by five,
// and “FizzBuzz” if an integer is
// divisible by both three and five.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}