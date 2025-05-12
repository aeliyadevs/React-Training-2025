// variables - (let, var , const)
// conditional statments - (if else, switch)
// operators - + - / % & ++ -- ==
// loops (for, while, do-while)

let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(i);
    sum = sum + i;
  } else {
    console.log(false);
  }
}

console.log(sum);
