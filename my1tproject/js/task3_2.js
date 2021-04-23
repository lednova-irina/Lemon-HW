//task 3.2

function stringRevers(str, index) {
  let result = "";
  index = index == undefined ? str.length - 1 : index;
  if (index === 0) {
    return str[index];
  }
  result += str[index];
  return result + stringRevers(str, --index);
}
printResult(
  "3.2: 2.1",
  stringRevers("Эта строка должна выводиться в обратном порядке")
);

function calcFactorialWithRecursion(value) {
  if (value <= 1) {
    return value;
  }
  return value * calcFactorialWithRecursion(--value);
}
printResult("3.2: 2.2", calcFactorialWithRecursion(6));

function outputDividersArr(inputNum, dividersAmount) {
  function calc(inputNum, dividersAmount, i, outputDividers) {
    i = i || 2;
    outputDividers = outputDividers || [];
    if (i <= inputNum) {
      if (outputDividers.length < dividersAmount) {
        if (inputNum % i == 0) {
          outputDividers.push(i);
        }
        calc(inputNum, dividersAmount, ++i, outputDividers);
      }
    }
    return outputDividers;
  }
  return calc(inputNum, dividersAmount);
}
printResult("3.2: 2.3", outputDividersArr(30, 3));

function numbersForEach(number) {
  const temp = parseInt(number / 10);
  const modulo = number % 10;
  if (number == 0) {
    return 0;
  }
  if (modulo % 2 === 0) {
    return modulo + numbersForEach(temp);
  }
  return numbersForEach(temp);
}
printResult("3.2: 2.4", numbersForEach(9894763));

function findNumberDividedBy(minValue, divider) {
  if (minValue % divider == 0) {
    return minValue;
  }
  return findNumberDividedBy(++minValue, divider);
}
printResult("3.2: 2.5", findNumberDividedBy(300, 17));

function maxValueDivision(x, y) {
  if (x == y) {
    return x;
  }
  if (x > y) {
    return maxValueDivision(x - y, y);
  }
  return maxValueDivision(x, y - x);
}
printResult("3.2: 2.6", maxValueDivision(200, 780));
