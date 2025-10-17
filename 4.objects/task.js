// Функция-конструктор Student
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; // Пустой массив для оценок
}

// Метод setSubject: устанавливает предмет
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

// Метод addMarks: добавляет несколько оценок с проверкой
Student.prototype.addMarks = function(...marksToAdd) {
  if (this.marks) { // Проверяем, существует ли marks (если студент не отчислен)
    this.marks.push(...marksToAdd);
  }
};

// Метод getAverage: возвращает средний балл с проверкой
Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

// Метод exclude: исключает студента и устанавливает причину
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

// Использование
let student1 = new Student("Васелиса", "женский", 19);
console.log(student1.name)
student1.setSubject("Algebra");
console.log(student1.age)
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);
console.log(student2.getAverage());



