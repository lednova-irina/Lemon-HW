function printResult(taskNumber, taskResult) {
  console.log(`Result of the task ${taskNumber}: ${taskResult}`);
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
