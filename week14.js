//Задание 1
//Создайте массив myFirstArray содержащий строки, числа, булевы значения. Выведите его в консоль.
const myFirstArray = [21, 'ночь', 'понедельник','очертания','столицы','во мгле','сочинил же','какой-то','бездельник','что бывает',true, 'love','на земле',]
console.log(myFirstArray);

//Задание 2
//Создайте массив mySecondArray, заполните его любыми значениями. Выведите длину массива.
const mySecondArray = ['это было у моря', 'где ажурная пена', 1910, 'Игорь еверянин']
console.log(mySecondArray.length);
//Задание 3
//Создайте массив myInformation, который содержит ваше имя, день рождения, месяц рождения и знак зодиака. Выведите массив в консоль, разделяя элементы пробелами. Вам понадобится метод join().
let myInformation = new Array('Ольга', '1 окятбря', 'весы');
console.log(myInformation.join(" "));
//Задание 4
//Добавьте в массив countries значения 'Italy' с индексом 5, 'Spain' с индексом 6 и 'France' с индексом 7. Добавление элементов произведите с помощью метода push().
let countries = ['Austria', 'Belgium', 'Netherlands', 'Czechia', 'Croatia'];
countries.push('Italy','Spain','France'),
console.log(countries);

//Задание 5
//У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива, выведите в консоль последний элемент массива. Для этого можно использовать свойство length и индексацию элементов.
//Обратите внимание, в JavaScript индексация элементов в массиве начинается с 0.
let lastIndex=countries.length-1;
console.log(countries[lastIndex]);
//Задание 6
//У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива shift, извлеките первый элемент массива и выведите его в консоль. Обратите внимание, что сам массив должен сохраниться в переменной.
let newCountries = countries.shift();
console.log(newCountries)
//Задание 7
//У вас есть массив numbers, содержащий несколько чисел. Используя метод массива map, создайте новый массив squaredNumbers, в котором каждый элемент будет являться квадратом соответствующего элемента из массива numbers. Выведите полученный массив squaredNumbers в консоль.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squaredNumbers= numbers.map(function(item){
    return item**2
});
console.log(squaredNumbers);
//Задание 8
//У вас есть массив colors, содержащий названия различных цветов. Используя метод массива forEach, выведите каждый элемент массива в консоль.
let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
colors.forEach(function(item){
    console.log(item);
});
//Задание 9
//Добавьте в массив russianCities значения 'Санкт-Петербург' с индексом 0, 'Москва' с индексом 1 и 'Екатеринбург' с индексом 2. Добавление элементов выполните с помощью оператора spread.
let moreCities = ['Санкт-Петербург', 'Москва', 'Екатеринбург'];
let russianCities = [...moreCities, 'Казань', 'Нижний Новгород'];
console.log(russianCities)

//Задание 10
//Напишите функцию, которая вычисляет сумму первого (индекс 0) и последнего элемента массива numbers и выводит результат в консоль. При вычислении индекса последнего элемента используйте свойство length массива.
//Обратите внимание, что массив numbers создан в задании 7.

    let sum = numbers[0] + numbers[numbers.length-1];

console.log(sum);
//Задание 11
//У вас есть массив numbers, содержащий числа от 1 до 10. Напишите функцию filterEvenNumbers, которая принимает этот массив в качестве аргумента и выводт в консоль новый массив, содержащий только чётные числа из исходного массива, с использованием метода filter().
let numbersNew = numbers.filter(function(el){
    if (el%2==0){
        return true;
    }
    else{
        return false;
    }
})
console.log(numbersNew);
//Задание 12
//Напишите функцию sortAndPrint, которая принимает копию массива randomNumbers с помощью оператора spread и сортирует его в порядке возрастания с использованием метода sort(). Затем выведите отсортированный массив чисел в консоль.
let randomNumbers = [72, 45, 19, 84, 37, 56, 91, 23, 68, 10, 98, 32];
let copyRandomNumber = [...randomNumbers];
console.log(copyRandomNumber);
function sortAndPrint(arr){
    arr.sort((a, b) => a-b);
    console.log(arr);
};
sortAndPrint(copyRandomNumber);