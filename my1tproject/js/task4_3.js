// task 4.3
// Я считаю, что те задачи с фором, которые я здесь не переделала, переделывать не имеет смысла.
// task 2.4
function numbersForEachForIn(stringToParse) {
  let sum = 0;
  let numbers = stringToParse.split("");
  for (let i in numbers) {
    if (+numbers[i] % 2 === 0) {
      sum += +numbers[i];
    }
  }
  return sum;
}
printResult("4.3: 2.4", numbersForEachForIn("3654982"));

// 3.3
function transposeArrayForIn(arr) {
  const result = [];
  for (let i in arr) {
    for (let j in arr) {
      result[j] = result[j] || [];
      result[j][i] = arr[i][j];
    }
  }
  return result;
}
console.dir(arrayValue);
printResult("4.3: 3.3", transposeArrayForIn(arrayValue));

//3.5
function maxSumColumnForIn(arrayValue) {
  let columnSum = arrayValue[0];
  let maxColSum = 0;
  const result = {
    targetIndex: 0,
    maxSum: 0,
    colNumber: 0,
  };
  for (let str in arrayValue) {
    for (let col in columnSum) {
      columnSum[col] += arrayValue[str][col];
    }
  }
  for (let i in columnSum) {
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
  "4.3: 3.5",
  maxSumColumnForIn([
    [1, 2, 3],
    [8, 9, 0],
  ])
);

//task 3.6
function deleteColumnsWithZeroElementForIn(arr) {
  const columnIndexesToSave = [];
  for (let i = 0; i < arr.length; i++) {
    const isContainZero = arr[i].some((element) => element === 0);
    const isSumPositive =
      arr[i].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) > 0;

    if (isContainZero && isSumPositive) {
      columnIndexesToSave.push(i);
    }
  }
  const result = [];
  for (let j in columnIndexesToSave) {
    const columnIndexToSave = columnIndexesToSave[j];
    result.push(arr[columnIndexToSave]);
  }
  return result;
}
printResult(
  "4.3: 3.6",
  deleteColumnsWithZeroElementForIn([
    [1, 0, -13, 6],
    [8, -9, 2, 0],
    [3, 1, 9, -3],
    [4, -22, 9, 8],
  ])
);

// task 4.2
function calcPercentValueOfArrayForOf(arr) {
  let minusValues = [];
  let plusValues = [];
  let zeroValues = [];
  let inputArray = arr;
  let outputResult = [];
  for (let i of arr) {
    if (arr[i] < 0) {
      minusValues.push(arr[i]);
    } else if (arr[i] > 0) {
      plusValues.push(arr[i]);
    } else if (arr[i] == 0) {
      zeroValues.push(arr[i]);
    }
  }
  outputResult.push((zeroValues.length / arr.length) * 100);
  outputResult.push((minusValues.length / arr.length) * 100);
  outputResult.push((plusValues.length / arr.length) * 100);

  console.log(`Input array of the task 4.3: 4.2: `);
  console.log(inputArray);
  return outputResult;
}
printResult("4.3: 4.2", calcPercentValueOfArrayForOf(randomArray));
