console.log('countries');
// const body = document.querySelector('body');

// function setCSSVariable(element, variable, value) {
//   element.style.setProperty(`--${variable}`, value);
// }

// setCSSVariable(body, 'color', '#c8ff00');

// function square() {
//   let num = 2;
//   let sq = num * num;
//   console.log(sq);
// }
// square();

// function addTwoNumbers() {
//   let num0 = 10;
//   let num1 = 20;
//   let sum = num0 + num1;
//   return sum;
// }
// console.log(addTwoNumbers());

// function printFullName() {
//   let first = 'Jackson';
//   let last = 'Mills';
//   let fullName = `${first} ${last}`;
//   return fullName;
// }
// console.log(printFullName());

// function printName(name) {
//   return name;
// }
// console.log(printName('jackson'));

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(16));

// function square(n) {
//   return n * n;
// }
// console.log(square(3));

// function sumTwoNumbers(a, b) {
//   return a + b;
// }
// console.log(sumTwoNumbers(999, 888));

// function printFullName(firstName, surname) {
//   if (!(typeof firstName === 'string')) return 'name is not a string';
//   if (!(typeof surname === 'string')) return 'surname is not a string';
//   return `${firstName} ${surname}`;
// }

// let firstName = 'Jackson';
// let surname = 'Mills';
// console.log(printFullName(firstName, surname));

// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArrayValues([1, 2, 3]));

// function sumAll() {
//   let sum = 0;
//   for (number of arguments) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(sumAll(1, 2, 3, 4));
// console.log(sumAll(10, 20, 13, 40, 10));
// console.log(sumAll(15, 20, 30, 25, 10, 33, 40));

// const sumAll = (...args) => {
//   let sum = 0;
//   for (num of args) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(sumAll(1, 2, 3, 4));
// console.log(sumAll(10, 20, 13, 40, 10));
// console.log(sumAll(15, 20, 30, 25, 10, 33, 40));

// const anonymousFunc = function () {
//   console.log('I am anon');
// };
// console.log(anonymousFunc());

// const addTwo = function (a, b) {
//   return a + b;
// };
// console.log(addTwo(1, 2));

// (function (n) {
//   console.log(n * n);
// })(2);

// let squaredNum = (function (n) {
//   return n * n;
// })(10);
// console.log(squaredNum);

// function square(n) {
//   return n * n;
// }
// console.log(square(2));

// // const squared = (n) => {
// //   return n * n;
// // };

// const squared = (n) => n * n;
// console.log(squared(2));

// const changeToUpperCase = (array) => {
//   const newArr = [];
//   for (item of array) {
//     newArr.push(item.toUpperCase());
//   }
//   return newArr;
// };
// console.log(changeToUpperCase(countries));

// print full name of person
// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(printFullName('jackson', 'mills'));

// function greet(name = 'asshat') {
//   let message = `${name}, welcome to hell`;
//   return message;
// }
// console.log(greet());

// const genFullName = (firstName = 'poop', lastName = 'balls') => {
//   return `${firstName} ${lastName}`;
// };
// console.log(genFullName());

// function calcAge(birthYear, currentYear = new Date().getFullYear()) {
//   return currentYear - birthYear;
// }
// console.log(calcAge(1991));

// const weightOfItem = (mass, gravity = 9.81) => {
//   let weight = `${mass * gravity}N`;
//   return weight;
// };
// console.log(weightOfItem(100));

// Declare a function fullName and it print out your full name.
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };
// console.log(printFullName('poop', 'balls'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
// const addNumbers = (a, b) => a + b;
// console.log(addNumbers(1, 2));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// const areaOfRectangle = (l, w) => {
//   return l * w;
// };
// console.log(areaOfRectangle(4, 3));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// function perimeterOfRectangle(l, w) {
//   return 2 * (l + w);
// }
// console.log(perimeterOfRectangle(3, 4));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// function volumeOfRectPrism(l, w, h) {
//   let volume = l * w * h;
//   return volume;
// }
// console.log(volumeOfRectPrism(3, 4, 8));

// // Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// const areaOfCircle = (r, pi = Math.PI) => {
//   return pi * r * r;
// };
// console.log(areaOfCircle(33));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// const circumOfCircle = (r, pi = Math.PI) => {
//   return 2 * pi * r;
// };
// console.log(circumOfCircle(33));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

// function densityOf(m, v) {
//   return m / v;
// }
// console.log(densityOf(100, 999));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// function speedOf(distance, time) {
//   return distance / time;
// }
// console.log('mi/hr: ', speedOf(60, 2.6));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// const weightOf = (mass, gravity = 9.81) => {
//   return mass * gravity;
// };
// console.log(weightOf(100));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
// function convertCelciusToFahrenheit(oC) {
//   return oC * 1.8 + 32;
// }
// console.log(convertCelciusToFahrenheit(26));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
// function bodyMassIndex(w, h) {
//   return w / (h * h);
// }
// console.log(bodyMassIndex(113, 1.78));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// function checkSeason(month) {
//   const seasons = [
//     {
//       name: 'autumn',
//       months: ['september', 'october', 'november'],
//     },
//     {
//       name: 'winter',
//       months: ['december', 'january', 'february'],
//     },
//     {
//       name: 'spring',
//       months: ['march', 'april', 'may'],
//     },
//     {
//       name: 'summer',
//       months: ['june', 'july', 'august'],
//     },
//   ];
//   for (season of seasons) {
//     if (season.months.includes(month)) {
//       return season.name;
//     }
//   }
// }
// let userMonth = prompt('Enter the month:');
// console.log(checkSeason(userMonth));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// function findMax(n1, n2, n3) {
//   const arr = [n1, n2, n3];
//   return arr.reduce((a, b) => (a > b ? a : b));
// }
// console.log(findMax(100, 333, 8));

// const findMax = (...args) => {
//   const arr = [...args];
//   return arr.reduce((a, b) => (a > b ? a : b));
// };
// console.log(findMax(1, 3, 4, 800, -999999999999, -1000, -10000000));

// const printArray = (array) => {
//   for (item of array) {
//     console.log(item);
//   }
// };
// console.log(printArray(countries));

// function showDateTime() {
//   const now = new Date();
//   const date = { month: 0, day: 0, year: 0 };
//   const time = { hours: 12, minutes: 0 };
//   date.month = now.getMonth() + 1;
//   date.day = now.getDate();
//   date.year = now.getFullYear();
//   time.hours = now.getHours();
//   time.hours = time.hours > 12 ? `0${time.hours - 12}` : time.hours;
//   time.minutes = now.getMinutes();
//   return {
//     date: `${date.day}/${date.month}/${date.year}`,
//     time: `${time.hours}:${time.minutes}`,
//   };
// }
// console.log(showDateTime().date);
// console.log(showDateTime().time);

// const swapValues = (a, b) => {
//   let temp = a;
//   a = b;
//   b = temp;
//   return `a:  ${a}, b: ${b}`;
// };
// console.log(swapValues(2, 4));

// const reverseArray = (arr) => {
//   const newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// };
// console.log(reverseArray([1, 2, 3]));

// function capitalizeArray(arr) {
//   const result = [];
//   for (item of arr) {
//     result.push(item.toUpperCase());
//   }
//   return result;
// }
// console.log(capitalizeArray(countries));

// const list = [];
// function addItem(item) {
//   list.push(item);
//   console.log(list);
// }
// console.log(addItem('La croix'));
// console.log(addItem('Toilet paper'));
// console.log(addItem('Paper towels'));
// console.log(addItem('Wet cat food'));
// console.log(addItem('Dry cat food'));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// function removeItem(item) {
//   list.splice(item, 1);
//   console.log(list);
// }
// console.log(removeItem('La croix'));
// console.log(removeItem('Toilet paper'));
// console.log(removeItem('Paper towels'));
// console.log(removeItem('Wet cat food'));
// console.log(removeItem('Dry cat food'));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// function sumOfNumbers(max) {
//   let numbers = [];
//   for (let i = 0; i < max + 1; i++) {
//     numbers.push(i);
//   }
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sumOfNumbers(100));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// function sumOfOdds(max) {
//   let numbers = [];
//   for (let i = 0; i < max + 1; i++) {
//     if (!(i % 2)) {
//       numbers.push(i);
//     }
//   }
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sumOfOdds(100));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// function sumOfEvens(max) {
//   let numbers = [];
//   for (let i = 0; i < max + 1; i++) {
//     if (i % 2) {
//       numbers.push(i);
//     }
//   }
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sumOfEvens(100));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// const evensAndOdds = (max) => {
//   const evens = [];
//   const odds = [];
//   for (let i = 0; i < max + 1; i++) {
//     if (i % 2) {
//       evens.push(i);
//     } else {
//       odds.push(i);
//     }
//   }
//   return { evens: evens.length, odds: odds.length };
// };
// console.log(evensAndOdds(100));

// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// const sumOfArgs = (...args) => {
//   const array = [...args];
//   return array.reduce((a, b) => a + b, 0);
// };
// console.log(sumOfArgs(1, 2, 3));
// console.log(sumOfArgs(1, 2, 3, 4));

// Writ a function which generates a randomUserIp.
// function randomUserIp() {
//   const ip = [];
//   const max = 255;
//   for (let i = 0; i < 4; i++) {
//     ip.push(Math.floor(Math.random() * max));
//   }
//   return ip.join('.');
// }
// console.log(randomUserIp());

// Write a function which generates a randomMacAddress
// const randomMacAddress = () => {
//   const mac = [];
//   const characters = '0123456789ABCDEF';
//   for (let i = 0; i < 6; i++) {
//     let chars = [];
//     for (let j = 0; j < 2; j++) {
//       chars.push(
//         characters.charAt(Math.floor(Math.random() * characters.length))
//       );
//     }
//     mac.push(chars.join(''));
//   }
//   return mac.join(':');
// };
// console.log(randomMacAddress());

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// ('#ee33df');

// const body = document.querySelector('body');

// const randomHexcode = () => {
//   let hexcode = '#';
//   const characters = '1234567890abcdef';
//   for (let i = 0; i < 6; i++) {
//     hexcode += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return hexcode;
// };

// body.addEventListener('click', () => {
//   const hexcode = randomHexcode();
//   console.log(hexcode);
//   body.style.setProperty('--color', hexcode);
// });

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

// function userIdGenerator() {
//   let id = '';
//   const characters =
//     'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
//   for (let i = 0; i < 7; i++) {
//     id += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return id;
// }
// console.log(userIdGenerator());

// Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// function userIdGenerator() {
//   let length = prompt('length?');
//   let count = prompt('count?');
//   let ids = [];
//   const characters =
//     'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
//   for (let i = 0; i < count; i++) {
//     let id = '';
//     for (let i = 0; i < length; i++) {
//       id += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     ids.push(id);
//   }
//   return ids;
// }
// console.log(userIdGenerator());

// Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator();
// rgb(125, 244, 255);

// const rgbGen = () => {
//   const max = 255;
//   const values = [];
//   for (let i = 0; i < 3; i++) {
//     values.push(Math.round(Math.random() * max));
//   }
//   return `rgb(${values.join(',')})`;
// };
// console.log(rgbGen());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
// function arrayOfHexcodes(count) {
//   const hexcodes = [];
//   const characters = '1234567890abcdef';
//   for (let i = 0; i < count; i++) {
//     let hexcode = '#';
//     for (let j = 0; j < 6; j++) {
//       hexcode += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     hexcodes.push(hexcode);
//   }
//   return hexcodes;
// }
// console.log(arrayOfHexcodes(3));

// // Write a function arrayOfRgbColors which return any number of RGB colors in an array.
// function arrayOfRgbColors(count) {
//   const colors = [];
//   const max = 255;
//   for (let i = 0; i < count; i++) {
//     let values = [];
//     for (let j = 0; j < 3; j++) {
//       values.push(Math.floor(Math.random() * max));
//     }
//     colors.push(`rgb(${values.join(',')})`);
//   }
//   return colors;
// }
// console.log(arrayOfRgbColors(3));

// // Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
// function convertHexToRgb(hexcode) {
//   let r = 0,
//     g = 0,
//     b = 0;

//   if (hexcode.length == 4) {
//     r = '0x' + hexcode[1] + hexcode[1];
//     g = '0x' + hexcode[2] + hexcode[2];
//     b = '0x' + hexcode[3] + hexcode[3];
//   } else if (hexcode.length == 7) {
//     r = '0x' + hexcode[1] + hexcode[2];
//     g = '0x' + hexcode[3] + hexcode[4];
//     b = '0x' + hexcode[5] + hexcode[6];
//   }
//   return `rgb(${+r},${+g},${+b})`;
// }
// console.log(convertHexToRgb('#75a9be'));

// // Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
// function convertRgbToHex(r, g, b) {
//   r = r.toString(16);
//   g = g.toString(16);
//   b = b.toString(16);

//   if (r.length == 1) {
//     r = `0${r}`;
//   }
//   if (g.length == 1) {
//     g = `0${g}`;
//   }
//   if (b.length == 1) {
//     b = `0${b}`;
//   }

//   return `#${r}${g}${b}`;
// }
// console.log(convertRgbToHex(117, 169, 190));

// // Write a function generateColors which can generate any number of hexa or rgb colors.
// const generateColors = (type, count) => {
//   if (type === 'hexcode') {
//     const hexcodes = [];
//     const characters = '1234567890abcdef';
//     for (let i = 0; i < count; i++) {
//       let hexcode = '#';
//       for (let j = 0; j < 6; j++) {
//         hexcode += characters.charAt(
//           Math.floor(Math.random() * characters.length)
//         );
//       }
//       hexcodes.push(hexcode);
//     }
//     return hexcodes;
//   } else if (type === 'rgb') {
//     const colors = [];
//     const max = 255;
//     for (let i = 0; i < count; i++) {
//       let values = [];
//       for (let j = 0; j < 3; j++) {
//         values.push(Math.floor(Math.random() * max));
//       }
//       colors.push(`rgb(${values.join(',')})`);
//     }
//     return colors;
//   } else {
//     return 'ERROR: INVALID TYPE';
//   }
// };
// console.log(generateColors('hexcode', 100));

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// const shuffleArray = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     if (!result.includes(arr[randomIndex])) {
//       result.push(arr[randomIndex]);
//     }
//   }
//   return result;
// };
// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 12, 999]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// function isEmpty(param) {
//   if (!param) {
//     return true;
//   }
//   return false;
// }
// console.log(isEmpty());

// Call your function sum, it takes any number of arguments and it returns the sum.
// const sum = (...args) => {
//   let sum = 0;
//   const arr = [...args];
//   sum = arr.reduce((a, b) => a + b, 0);
//   return sum;
// };
// console.log(sum(1, 2, 3, 999));

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// 'Not Found'

// Write a function called isPrime, which checks if a number is prime number.

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers() // [(1, 4, 5, 7, 9, 8, 0)];

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
