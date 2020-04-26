let input;
const numbers = [];
let total = 0;

for (
  input = prompt("Введите число:");
  input !== null;
  input = prompt("Введите число:")
) {
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(input);
}

const sum = function (arr) {
  for (const number of arr) {
    total += number;
  }
  return total;
};

sum(numbers);

console.log(total);
