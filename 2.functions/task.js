// Задача 1

function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: null, max: null, avg: null };
  }
  
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }
  
  let avg = +(sum / arr.length).toFixed(2);
  
  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let evenSum = 0;
  let oddSum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let evenElements = arr.filter(num => num % 2 === 0);
  if (evenElements.length === 0) return 0;
  let sum = evenElements.reduce((sum, num) => sum + num, 0);
  return +(sum / evenElements.length).toFixed(2);
}

function makeWork(arrOfArr, func) {
  let results = arrOfArr.map(subArr => func(...subArr));
  return Math.max(...results);
}

console.log([-99, 99, 10], '=>', getArrayParams(-99, 99, 10));
console.log([1, 2, 3, -100, 10], '=>', getArrayParams(1, 2, 3, -100, 10));
console.log([5], '=>', getArrayParams(5));


// Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) return 0;
  return sumEvenElement / countEvenElement;
}

function printArrayOperationsOutput() {
    console.log("насадка суммирования элементов");
    console.log("[] => 0");
    console.log("[10, 10, 11, 20, 10] => 61");
    console.log("0, 0, 0, -1, -100 => 0");
    console.log("");
    console.log("насадка вычисления разницы максимального и минимального элементов");
    console.log("[] => 0");
    console.log("[10, 10, 11, 20, 10] => 20 - 10 => 10");
    console.log("0, 0, 0, -1, -100 => 0 - (-100) => 100");
    console.log("");
    console.log("насадка вычисления разницы сумм четных и нечетных элементов");
    console.log("[] => 0");
    console.log("[1, 2, 3, 4, 5, 6, 7, 8, 9] => 20 - 25 => -5");
    console.log("[94, 51, 57, 41, 47, 66, 58, 10, 38, 17] => 266 - 213 => 53");
    console.log("15, 97, 85, 64, 67, 10, 69, 40, 15, 35 => 114 - 383 => -269");
    console.log("");
    console.log("насадка вычисления среднего значения четных элементов");
    console.log("[] => 0");
    console.log("[1, 2, 3, 4, 5, 6, 7, 8, 9] => [2, 4, 6, 8] => 5");
    console.log("[15, 97, 85, 64, 67, 10, 69, 40, 15, 35] => [64, 10, 40] => 38");
}

printArrayOperationsOutput();

// Задача 3

// Насадка суммирования элементов
function summElementsWorker(...arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Насадка вычисления разницы максимального и минимального элементов
function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

// Насадка вычисления разницы сумм четных и нечетных элементов
function differenceEvenOddWorker(...arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) evenSum += num;
        else oddSum += num;
    }
    return evenSum - oddSum;
}

// Насадка вычисления среднего значения четных элементов
function averageEvenElementsWorker(...arr) {
    const evens = arr.filter(num => num % 2 === 0);
    if (evens.length === 0) return 0;
    const sum = evens.reduce((acc, num) => acc + num, 0);
    return sum / evens.length;
}

// Функция makeWork - агрегатор преобразований
function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let subArr of arrOfArr) {
        const result = func(...subArr);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}

// Вывод названий насадок в консоль
console.log("Насадка суммирования значений");
console.log("Насадка разницы элементов");
console.log("насадка разницы четных и нечетных элементов");
console.log("насадка среднего значения четных элементов");



