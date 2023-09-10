//Задание 1+
//Создайте массив myFirstArray содержащий строки, числа, булевы значения. Выведите его в консоль.
const myFirstArray = [2, 'item', true];
console.log(1, myFirstArray);

//Задание 2+
//Создайте массив mySecondArray, заполните его любыми значениями. Выведите длину массива.
const mySecondArray = [2, 5, 15, 'и так далее'];
console.log(2, mySecondArray.length);

//Задание 3+
//Создайте массив myInformation, который содержит ваше имя, день рождения, месяц рождения и знак зодиака. Выведите массив в консоль, разделяя элементы пробелами. Вам понадобится метод join().
myInformation = ['Мила', '27', 'март', 'Овен'];
myInformationDivided = myInformation.join(' ');
console.log(3, myInformationDivided);

//Задание 4+
//Добавьте в массив countries значения 'Italy' с индексом 5, 'Spain' с индексом 6 и 'France' с индексом 7. Добавление элементов произведите с помощью метода push().
let countries = ['Austria', 'Belgium', 'Netherlands', 'Czechia', 'Croatia'];
countries.push('Italy');
countries.push('Spain');
countries.push('France');
console.log(4, countries);

//Задание 5+
//У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива, выведите в консоль последний элемент массива. Для этого можно использовать свойство length и индексацию элементов.
//Обратите внимание, в JavaScript индексация элементов в массиве начинается с 0.
console.log(countries.length);
console.log(5, countries[7]);
//Задание 6+
//У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива shift, извлеките первый элемент массива и выведите его в консоль. Обратите внимание, что сам массив должен сохраниться в переменной.
console.log(6, countries.shift());//извлекли первый элемент массива и вывели его в консоль
console.log(6, countries);// в массиве сохранились все элементы, за исключением извлеченного
//Задание 7+
//У вас есть массив numbers, содержащий несколько чисел. Используя метод массива map, создайте новый массив squaredNumbers, в котором каждый элемент будет являться квадратом соответствующего элемента из массива numbers. Выведите полученный массив squaredNumbers в консоль.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(7, squaredNumbers);

//Задание 8+
//У вас есть массив colors, содержащий названия различных цветов. Используя метод массива forEach, выведите каждый элемент массива в консоль.
let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
colors.forEach(function(color) {
console.log(8, color);
});
//Задание 9+
//Добавьте в массив russianCities значения 'Санкт-Петербург' с индексом 0, 'Москва' с индексом 1 и 'Екатеринбург' с индексом 2. Добавление элементов выполните с помощью оператора spread.
let russianCities = ['Казань', 'Нижний Новгород'];
let newRussianCities = ['Санкт-Петербург', 'Москва', 'Екатеринбург', ...russianCities];
console.log(9, newRussianCities);

//или
// let russianCities = ['Казань', 'Нижний Новгород'];
// console.log(9, 'Санкт-Петербург', 'Москва', 'Екатеринбург', ...russianCities);

//Задание 10+
//Напишите функцию, которая вычисляет сумму первого (индекс 0) и последнего элемента массива numbers и выводит результат в консоль. При вычислении индекса последнего элемента используйте свойство length массива.
//Обратите внимание, что массив numbers создан в задании 7.
function sumElements () {
const sum = numbers[0] + numbers[numbers.length - 1];
return sum;
}
console.log(10, sumElements());
//Задание 11+
//У вас есть массив numbers, содержащий числа от 1 до 10. Напишите функцию filterEvenNumbers, которая принимает этот массив в качестве аргумента и выводт в консоль новый массив, содержащий только чётные числа из исходного массива, с использованием метода filter().

const filterEvenNumbers = numbers.filter(function (number) {
return number%2 ===0;
})

console.log(11, filterEvenNumbers);
//Задание 12+
//Напишите функцию sortAndPrint, которая принимает копию массива randomNumbers с помощью оператора spread и сортирует его в порядке возрастания с использованием метода sort(). Затем выведите отсортированный массив чисел в консоль.
let randomNumbers = [72, 45, 19, 84, 37, 56, 91, 23, 68, 10, 98, 32];
const sortAndPrint = [...randomNumbers];
sortAndPrint.sort((a, b) => a - b);
console.log(12, sortAndPrint);

