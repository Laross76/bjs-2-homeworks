// Задача 1

"use strict"

function solveEquation(a, b, c) {
  let arr = []; // Инициализируем массив для корней
  
  // Вычисляем дискриминант
  const d = b ** 2 - 4 * a * c;
  
  if (d < 0) {
    // Корней нет, возвращаем пустой массив
    return arr;
  } else if (d === 0) {
    // Один корень
    arr.push(-b / (2 * a));
    return arr;
  } else {
    // Два корня
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr;
  }
}

// Для проверки в консоли
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, -2, 1)); // [1]
console.log(solveEquation(1, 2, 3));  // []


// Задача 2

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  // Преобразуем процентную ставку в месячную (от 0 до 1)
  let P = (percent / 100) / 12;
  
  // Тело кредита: сумма минус взнос
  let S = amount - contribution;
  
  // Если тело кредита <= 0, дополнительных платежей нет
  if (S <= 0) {
      totalAmount = 0;
  } else {
      // Ежемесячный платеж по формуле аннуитета
      let payment = S * (P + (P / (((1 + P) ** date) - 1)));
      
      // Общая сумма платежей: платеж * месяцы (без учета взноса)
      let totalPayments = payment * date;
      
      // Округлим до двух знаков после запятой
      totalAmount = Math.round(totalPayments * 100) / 100;
  }

  return totalAmount;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  }

// Определяем кейсы на основе предыдущих примеров (первые 5)
const cases = [
    { percent: 10, contribution: 0, amount: 50000, date: 12 },
    { percent: 10, contribution: 1000, amount: 50000, date: 12 },
    { percent: 10, contribution: 0, amount: 20000, date: 24 },
    { percent: 10, contribution: 1000, amount: 20000, date: 24 },
    { percent: 10, contribution: 20000, amount: 20000, date: 24 }
];

// Выводим результаты для каждого кейса 
cases.forEach((caseData, index) => {
    const result = calculateTotalMortgage(caseData.percent, caseData.contribution, caseData.amount, caseData.date);
    console.log(`верно считать кредит: кейс #${index + 1}`);
});


