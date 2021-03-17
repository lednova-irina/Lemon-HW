//task 1.1
const a = 6;

if (a == 0) {
    console.log("ноль")
} else if (a == 1) {
    console.log("один");
} else if (a == 2) {
    console.log("два");
} else if (a == 3) {
    console.log("три");
} else if (a == 4) {
    console.log("четыре");
} else if (a == 5) {
    console.log("пять");
} else if (a == 6) {
    console.log("шесть");
} else if (a == 7) {
    console.log("семь");
} else if (a == 8) {
    console.log("восемь");
} else if (a == 9) {
    console.log("девять");
}

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
console.log(result);

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

