// Задача 1

const compareArrays = (arr1, arr2) => {
  // Проверяем, равны ли длины массивов
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Используем every для поэлементного сравнения
  return arr1.every((elem, index) => elem === arr2[index]);
};

console.log("[1,2,3] === [1,2,3] true");
console.log("[1, 2], [1, 2, 3] false");
console.log("[1, 2, 3] === [3, 2, 1] false");
console.log("[0, 1, 2] === [0, 1] false");
console.log("[0, 1] === [0, 1, 2] false");
console.log("[8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5] false");

// Задача 2

function getUsersNamesInAgeRange(users, gender) {
  // Фильтруем пользователей по указанному полу
  const filteredUsers = users.filter(user => user.gender === gender);
  
  // Если пользователей нет, возвращаем 0
  if (filteredUsers.length === 0) {
    return 0;
  }
  
  // Получаем массив возрастов с помощью map
  const ages = filteredUsers.map(user => user.age);
  
  // Вычисляем сумму возрастов с помощью reduce
  const sum = ages.reduce((acc, age) => acc + age, 0);
  
  // Возвращаем среднее значение
  return sum / ages.length;
}

const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
];

console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0



