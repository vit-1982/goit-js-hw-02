let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число:");
  if (input === "") {
    continue;
  }
  const numberedInput = Number(input);
  if (Number.isNaN(numberedInput)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  if (numberedInput !== 0) {
    numbers.push(numberedInput);
  }
}

const sum = function (arr) {
  for (const number of arr) {
    total += number;
  }
  return `Общая сумма чисел равна ${total}`;
};

if (numbers.length !== 0) {
  console.log(sum(numbers));
}
