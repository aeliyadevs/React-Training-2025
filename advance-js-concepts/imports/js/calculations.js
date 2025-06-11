export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => a / b;

export default function percentage(value, total) {
  let percent = (value / total) * 100;
  return percent;
}
