function printResult(taskNumber, taskResult) {
    console.log(`Result of the task ${taskNumber}: ${taskResult}`)
}

//task 1.1.1

const a = 6;

if (a == 0) {
    printResult("1.1.1", "ноль")
} else if (a == 1) {
    printResult("1.1.1", "один")
} else if (a == 2) {
    printResult("1.1.1", "два")
} else if (a == 3) {
    printResult("1.1.1", "три")
} else if (a == 4) {
    printResult("1.1.1", "четыре")
} else if (a == 5) {
    printResult("1.1.1", "пять")
} else if (a == 6) {
    printResult("1.1.1", "шесть")
} else if (a == 7) {
    printResult("1.1.1", "семь")
} else if (a == 8) {
    printResult("1.1.1", "восемь")
} else if (a == 9) {
    printResult("1.1.1", "девять")
}


// task 1.1.2

const b = 5;
let result;
switch (b) {
    case 0: result = 'ноль'; break;
    case 1: result = 'один'; break;
    case 2: result = 'два'; break;
    case 3: result = 'три'; break;
    case 4: result = 'четыре'; break;
    case 5: result = 'пять'; break;
    case 6: result = 'шесть'; break;
    case 7: result = 'семь'; break;
    case 8: result = 'восемь'; break;
    case 9: result = 'девять'; break;
}
printResult("1.1.2", result)


//task 1.2
const c = -3;

if (c == 0) {
    console.log("ноль")
} else if (c > 0) {
    console.log("положительное число");
} else if (c < 0) {
    console.log("отрицательное число");
}


//task 1.3
function calcuate(ext, number) {
    let quantitybyte;
    const n = 1024;
    if (ext == 'Byte') {
        quantitybyte = number;
    } else if (ext == 'KB') {
        quantitybyte = n * number;
    } else if (ext == 'MB') {
        quantitybyte = (n ** 2) * number;
    } else if (ext == 'GB') {
        quantitybyte = (n ** 3) * number
    }

    return quantitybyte;
}

console.log(calcuate('Byte', 6))
console.log(calcuate('KB', 6))
console.log(calcuate('MB', 6))
console.log(calcuate('GB', 6))


//task 1.4

const creditPercent = 0.2; //% ставка по кредиту 
const creditBody = 200000; // сумма займа
const duration = 5; //длительность договора

//Сколько процентов заплатит клиент за все время
const result1 = creditPercent * duration;
console.log(`Сколько процентов заплатит клиент за все время: ${result1}`);

//Сколько процентов заплатит клиент за один календарный год
const result2 = creditPercent;
console.log(`Сколько процентов заплатит клиент за один календарный год: ${result2}`);

//Какое общее количество денежных средств клиента банка выплатит за все года
const result3 = creditBody + (duration * creditBody * creditPercent);
console.log(`Какое общее количество денежных средств клиента банка выплатит за все года: ${result3}`);



// task 2.1.1

let str = "Эта строка должна выводиться в обратном порядке";
let strRev = "";
for (i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
}
printResult("2.1.1", strRev);

// task 2.1.2
function reverseStr(text) {
    return text.split('').reverse().join('');
}
printResult("2.1.2", reverseStr("Эта строка тоже должна выводиться в обратном порядке"))



// task 2.2.1

function factorial1(n) {
    let result = 1;
    while (n > 0) {
        result *= n--;
    }
    return result;
}
console.log(factorial1(5))

// task 2.2.2

function factorial2(n, result) {
    result = result || 1;
    if (n == 0) {
        return result;
    } else {
        return factorial2(n - 1, result * n);
    }
}
console.log(factorial2(3,))


// task 2.3

let inputNum = 30,
    outputDividers = [];
const dividersAmount = 3;
for (let i = 2; i != inputNum; i++) {
    if (inputNum % i == 0) {
        outputDividers.push(i);
    }
    if (outputDividers.length == dividersAmount) break;
}
printResult("2.3", outputDividers);



// task 2.4.1

let number = 8786592;
let sum = 0;
while (number > 0) {
    let t = number % 10;
    if (t % 2 === 0) {
        sum += t;
    }
    number = parseInt(number / 10);
}
printResult("2.4.1", sum)

// task 2.4.2
let string2 = '3654982';
let sum2 = 0;
function numbersForEach(stringToParse) {
    let numbers = stringToParse.split('');
    for (let i = 0; i < numbers.length; i++) {
        if (+numbers[i] % 2 === 0) {
            sum2 += +numbers[i];
        }
    }
    return sum2;
}
numbersForEach(string2);
printResult("2.4.2", sum2)


// task 2.5
let minValue;
let devider;
function findNumberDevidedBy(minValue, devider) {
    while (true) {
        if (minValue % devider == 0) {
            return minValue;
        } else {
            minValue++;
        }
    }
}
printResult(2.5, findNumberDevidedBy(300, 17));