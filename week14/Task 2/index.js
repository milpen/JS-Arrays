const showText = document.getElementById('showText');
const textGrades = document.getElementById('grade');

// const result = text.replace(/;/g, ";<br>");
// screen2.innerHTML = `2. Текст с переносами строк: \n ${result}`;

const grades = [];
for (let i = 0; i<12; i++) {
  grades.push(Math.floor(Math.random() * 100) + 1)
}
const line1 = document.createElement('p');
line1.textContent = grades;
showText.append(`12 студентов получили следующие оценки: ${line1.textContent}; `); //console.log(1, grades);

let sum = 0;
for (let i = 0; i < grades.length; i++) {
sum += grades[i];
}
const result = sum / grades.length; //console.log(2, result);
const line2 = document.createElement('p');
line2.textContent = result;
showText.append(`Средний балл всех полученных студентами оценок составил: ${line2.textContent}; `);

const maxGrade = Math.max(...grades); //console.log(3, maxGrade);
const line3 = document.createElement('p');
line3.textContent = maxGrade;
showText.append(`Максимальный балл составил: ${line3.textContent}; `);

const minGrade = Math.min(...grades); //console.log(4, minGrade);
const line4 = document.createElement('p');
line4.textContent = minGrade;
showText.append(`Минимальный балл составил: ${line4.textContent}; `);

const positiveGrades = grades.filter(function(grade) {
return grade >= 60;
 }); //console.log(5, positiveGrades);
const line5 = document.createElement('p');
line5.textContent = positiveGrades;
showText.append(`Положительные оценки: ${line5.textContent}; `);

let nonPositiveGradesNumber = 0;
for(let i = 0; i < grades.length; ++i){
    if(grades[i] <60)
        nonPositiveGradesNumber++;
} //console.log(5, nonPositiveGradesNumber);
const line6 = document.createElement('p');
line6.textContent = nonPositiveGradesNumber;
showText.append(`Количество остальных оценок: ${line6.textContent}; `);

const negativeGrades = grades.filter(function(grade) {
return grade <= 60;
 }); //console.log(6, negativeGrades);
const line7 = document.createElement('p');
line7.textContent = negativeGrades;
showText.append(`Отрицательные оценки: ${line7.textContent}; `);

let nonNegativeGradesNumber = 0;
for(let i = 0; i < grades.length; ++i){
    if(grades[i] >60)
        nonNegativeGradesNumber++;
} //console.log(6, nonNegativeGradesNumber);
const line8 = document.createElement('p');
line8.textContent = nonNegativeGradesNumber;
showText.append(`Количество остальных оценок: ${line8.textContent}; `);

grades.forEach(item => {
if (item >=80) {
const line9 = document.createElement('li');
line9.textContent = item;
textGrades.append(`Оценка А; `);
    //console.log(7, `Оценка А`);
} else if (item >=60 && item <=79) {
const line10 = document.createElement('li');
line10.textContent = item;
textGrades.append(`Оценка B; `);
      //console.log(7, `Оценка B`);
} else if (item >=40 && item <=59) {
const line11 = document.createElement('li');
line11.textContent = item;
textGrades.append(`Оценка C; `);
  //console.log(7, `Оценка C`);
}  else if (item >=20 && item <=39) {
const line12 = document.createElement('li');
line12.textContent = item;
textGrades.append(`Оценка D; `);
  //console.log(7, `Оценка D`);
} else {
const line13 = document.createElement('li');
line13.textContent = item;
textGrades.append(`Оценка E; `);
    //console.log(7, `Оценка E`);
}
});

