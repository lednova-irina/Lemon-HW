function printResult(taskNumber, taskResult) {
  console.info(`Result of the task ${taskNumber}: `);
  console.dir(taskResult);
}

//task 1.1.1
function getNumber(numb) {
  const numbers = [
    "ноль",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
  ];
  return numbers[numb];
}
printResult("1.1.1", getNumber(9));

// task 1.1.2
const b = 5;
let result;
switch (b) {
  case 0:
    result = "ноль";
    break;
  case 1:
    result = "один";
    break;
  case 2:
    result = "два";
    break;
  case 3:
    result = "три";
    break;
  case 4:
    result = "четыре";
    break;
  case 5:
    result = "пять";
    break;
  case 6:
    result = "шесть";
    break;
  case 7:
    result = "семь";
    break;
  case 8:
    result = "восемь";
    break;
  case 9:
    result = "девять";
    break;
}
printResult("1.1.2", result);

//task 1.2
function definitionC(c) {
  if (c == 0) {
    return "ноль";
  } else if (c > 0) {
    return "положительное число";
  } else if (c < 0) {
    return "отрицательное число";
  }
}
printResult("1.2", definitionC(-3));

//task 1.3
function calcuateBytes(unit, number) {
  let quantityByte;
  const n = 1024;
  if (unit == "Byte") {
    quantityByte = number;
  } else if (unit == "KB") {
    quantityByte = n * number;
  } else if (unit == "MB") {
    quantityByte = n ** 2 * number;
  } else if (unit == "GB") {
    quantityByte = n ** 3 * number;
  }

  return quantityByte;
}

printResult("1.3", calcuateBytes("Byte", 6));
printResult("1.3", calcuateBytes("KB", 6));
printResult("1.3", calcuateBytes("MB", 6));
printResult("1.3", calcuateBytes("GB", 6));

//task 1.4
function calcTotalPerc(creditPercent, duration) {
  //Сколько процентов заплатит клиент за все время
  const result = creditPercent * duration;
  return result;
}
printResult(
  "1.4",
  `Сколько процентов заплатит клиент за все время: ${calcTotalPerc(0.2, 5)}`
);

function calcPercForOneYear(creditPercent) {
  //Сколько процентов заплатит клиент за один календарный год
  const result = creditPercent;
  return result;
}
printResult(
  "1.4",
  `Сколько процентов заплатит клиент за один календарный год: ${calcPercForOneYear(
    0,
    3
  )}`
);

function totalAmount(creditBody, creditPercent, duration) {
  //Какое общее количество денежных средств клиента банка выплатит за все года
  const result = creditBody + duration * creditBody * creditPercent;
  return result;
}
printResult(
  "1.4",
  `Какое общее количество денежных средств клиента банка выплатит за все года: ${totalAmount(
    20000,
    0.5,
    6
  )}`
);

// task 2.1.1
function stringRevers(str) {
  let strRev = "";
  for (i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev;
}
printResult(
  "2.1.1",
  stringRevers("Эта строка должна выводиться в обратном порядке")
);

// task 2.1.2
function reverseStr(text) {
  return text.split("").reverse().join("");
}
printResult(
  "2.1.2",
  reverseStr("Эта строка тоже должна выводиться в обратном порядке")
);

// task 2.2.1
function factorial1(n) {
  let result = 1;
  while (n > 0) {
    result *= n--;
  }
  return result;
}
printResult("2.2.1", factorial1(5));

// task 2.2.2
function factorial2(n, result) {
  result = result || 1;
  if (n == 0) {
    return result;
  } else {
    return factorial2(n - 1, result * n);
  }
}
printResult("2.2.2", factorial2(3));

// task 2.3
function outputDividersMass(inputNum, dividersAmount) {
  let outputDividers = [];
  for (let i = 2; i != inputNum; i++) {
    if (inputNum % i == 0) {
      outputDividers.push(i);
    }
    if (outputDividers.length == dividersAmount) break;
  }
  return outputDividers;
}
printResult("2.3", outputDividersMass(30, 3));

// task 2.4.1
function numbersForEach1(number) {
  let sum = 0;
  while (number > 0) {
    let temp = number % 10;
    if (temp % 2 === 0) {
      sum += temp;
    }
    number = parseInt(number / 10);
  }
  return sum;
}
printResult("2.4.1", numbersForEach1(9894763));

// task 2.4.2
function numbersForEach2(stringToParse) {
  let sum = 0;
  let numbers = stringToParse.split("");
  for (let i = 0; i < numbers.length; i++) {
    if (+numbers[i] % 2 === 0) {
      sum += +numbers[i];
    }
  }
  return sum;
}
printResult("2.4.2", numbersForEach2("3654982"));

// task 2.5
function findNumberDividedBy(minValue, divider) {
  while (true) {
    if (minValue % divider == 0) {
      return minValue;
    } else {
      minValue++;
    }
  }
}
printResult("2.5", findNumberDividedBy(300, 17));

// task 2.6
function maxValueDivision(x, y) {
  while (x != y) {
    if (x > y) {
      x = x - y;
    } else {
      y = y - x;
    }
  }
  return x;
}
printResult("2.6", maxValueDivision(200, 780));

// task 3.3

function generateArray(dimentionArray) {
  const result = [];
  for (let i = 0; i < dimentionArray; i++) {
    result[i] = [];
    for (let j = 0; j < dimentionArray; j++) {
      result[i][j] = Math.floor(Math.random() * 10);
    }
  }
  return result;
}
const arrayValue = generateArray(4);
console.dir(arrayValue);

function transposeArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result[j] = result[j] || [];
      result[j][i] = arr[i][j];
    }
  }
  return result;
}
console.dir(transposeArray(arrayValue));
printResult("3.3", transposeArray(arrayValue));

//task 3.4

function MultiplyMatrix(matrix1, matrix2) {
  let rowsM1 = matrix1.length;
  let colsM1 = matrix1[0].length;
  let rowsM2 = matrix2.length;
  let colsM2 = matrix2[0].length;
  let result = [];
  if (colsM1 != rowsM2) {
    return false;
  }
  for (let i = 0; i < rowsM1; i++) {
    result[i] = [];
  }
  for (let k = 0; k < colsM2; k++) {
    for (let i = 0; i < rowsM1; i++) {
      let t = 0;
      for (let j = 0; j < rowsM2; j++) t += matrix1[i][j] * matrix2[j][k];
      result[i][k] = t;
    }
  }
  return result;
}
printResult("3.4", MultiplyMatrix(generateArray(3), generateArray(3)));

//task 3.5.1

function maxSumColumn(arrayValue) {
  let columnSum = arrayValue[0];
  let maxColSum = 0;
  const result = {
    targetIndex: 0,
    maxSum: 0,
    colNumber: 0,
  };
  for (let str = 1; str < arrayValue.length; str++) {
    for (let col = 0; col < columnSum.length; col++) {
      columnSum[col] += arrayValue[str][col];
    }
  }
  for (let i = 0; i < columnSum.length; i++) {
    if (maxColSum < columnSum[i]) {
      maxColSum = columnSum[i];
      result.maxSum = maxColSum;
      result.targetIndex = i;
      result.colNumber = i + 1;
    }
  }
  return result;
}
printResult(
  "3.5.1",
  maxSumColumn([
    [1, 2, 3],
    [8, 9, 0],
  ])
);

//task 3.5.2
function maxSumString(arrayValue) {
  let transposedArray = transposeArray(arrayValue);
  return maxSumColumn(transposedArray);
}
printResult(
  "3.5.2",
  maxSumString([
    [1, 2, 3],
    [8, 9, 2],
    [3, 1, 6],
  ])
);
