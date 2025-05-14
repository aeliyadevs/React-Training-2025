// variables - (let, var , const)
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

let num = 13195;
function problem3soution(num) {
  let largestPrimeFactor = 0;
  if (num % 6 == 0) {
    for (let i = 2; i < 6; i++) {
      if (6 % i == 0) {
        console.log(i);
        break;
      }
    }
    largestPrimeFactor = 5;
  }
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

console.log(isPrime(53));
