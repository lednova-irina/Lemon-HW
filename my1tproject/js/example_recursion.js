function calcFactorialWithWhile(value) {
  let result = 1;
  while (value > 0) {
    result *= value--;
  }
  return result;
}
console.warn(calcFactorialWithWhile(6));

function calcFactorialWithFor(value) {
  let result;
  for (result = 1; value > 0; value--) {
    result *= value;
  }
  return result;
}
console.warn(calcFactorialWithFor(6));

function calcFactorialWithRecursion(value) {
  if (value <= 1) {
    return value;
  }
  return value * calcFactorialWithRecursion(--value);
}

console.warn(calcFactorialWithRecursion(6));
