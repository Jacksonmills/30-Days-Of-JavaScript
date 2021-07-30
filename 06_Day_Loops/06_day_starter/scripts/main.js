const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// const newArray = [];
// for (let i = 0; i < countries.length; i++) {
//   newArray.push(countries[i].toUpperCase());
// }
// console.log(newArray);

// let sum = 0;
// for (let i = 0; i < numbers.length / 2; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// const newArr = [];
// let sum = 0;
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
// console.log(newArr);

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for (const num of numbers) {
//   console.log(num * num);
// }

// let sum = 0;
// for (const num of numbers) {
//   sum += sum + num;
// }
// console.log(sum);

// const webTechs = ['HTML', 'CSS', 'JavaScript'];
// for (const tech of webTechs) {
//   console.log(tech.toUpperCase());
//   console.log(tech[0]);
// }

// const newArray = [];
// for (const country of countries) {
//   newArray.push(country.toUpperCase());
// }
// console.log(newArray);

// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

const countriez = [
  'Ireland',
  'Kenya',
  'Germany',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Albania',
  'Finland',
  'Hungary',
  'Japan',
];

// const longest = countries.reduce((a, b) => (a.length > b.length ? a : b));
// console.log(longest);

// const fours = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length === 4) {
//     fours.push(countries[i]);
//   }
// }
// console.log(fours);

// const twoOrMore = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length >= 2) {
//     twoOrMore.push(countries[i]);
//   }
// }
// console.log(twoOrMore);

const reverseUpper = [];
for (let i = countries.length - 1; i >= 0; i--) {
  const country = countries[i].toUpperCase();
  reverseUpper.push(country);
}
console.log(reverseUpper);

// const lands = [];
// for (country of countries) {
//   if (country.includes('land')) {
//     lands.push(country);
//   }
// }
// console.log(lands);
// const copyOfCountriez = [];
// for (country of countriez) {
//   copyOfCountriez.push(country);
// }
// const copy = copyOfCountriez.sort();
// console.log(countriez);
// console.log(copy);

// const arrArr = [];
// for (const country of countriez) {
//   const name = country;
//   const tag = country.toUpperCase().slice(0, 3);
//   const length = country.length;
//   const countryArr = [name, tag, length];
//   arrArr.push(countryArr);
// }
// console.log(arrArr);

// const lands = [];
// for (const country of countriez) {
//   if (country.includes('land')) {
//     lands.push(country);
//   }
// }
// console.log(lands);

// const endsWith = [];
// for (country of countriez) {
//   if (country.endsWith('ia')) {
//     endsWith.push(country);
//   }
// }
// console.log(endsWith);

// let longest = countriez.reduce((a, b) => (a.length > b.length ? a : b));

// const fives = [];
// for (country of countriez) {
//   if (country.length === 5) {
//     fives.push(country);
//   }
// }
// console.log(fives);

// const upperArr = [];
// for (let i = 0; i < countriez.length; i++) {
//   upperArr.push(countriez[i].toUpperCase());
// }
// console.log(upperArr);

// const lenArr = [];
// for (let i = 0; i < countriez.length; i++) {
//   lenArr.push(countriez[i].length);
// }
// console.log(lenArr);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];
// const sortedTechs = webTechs.sort();
// console.log(webTechs);
// console.log(sortedTechs);

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ];

// for (stack of fullStack) {
//   for (lang of stack) {
//     console.log(lang);
//   }
// }

// for (tech of webTechs) {
//   console.log(tech);
// }

// const fruits = ['banana', 'orange', 'mango', 'lemon'];

// function reverseArray(array) {
//   const result = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     result.push(array[i]);
//   }
//   return result;
// }

// const reverseFruits = reverseArray(fruits);
// console.log(reverseFruits);

// longest = webTechs.reduce((a, b) => (a.length > b.length ? a : b));
// console.log(longest);

// const webTechsLengthsAndNames = [];
// for (let i = 0; i < webTechs.length; i++) {
//   const name = webTechs[i];
//   const length = name.length;
//   webTechsLengthsAndNames.push([name, length]);
// }
// console.log(webTechsLengthsAndNames);

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// console.log(mernStack.sort());

// let mern = '';
// for (framework of mernStack) {
//   const letter = framework[0];
//   mern += letter;
// }
// console.log(mern);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// for (n in numbers) {
//   console.log(n);
// }

// let userNum = Number(prompt('Enter number 1-8:'));
// let output = '';
// for (let i = 1; i <= userNum; i++) {
//   for (let j = 1; j <= i; j++) {
//     output += `# `;
//   }
//   console.log(output);
//   output = '';
// }

// for (const number in numbers) {
//   console.log(number * number);
// }

// for (const num in numbers) {
//   console.log(num);
//   console.log(num ** 2);
//   console.log(num ** 3);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let evens = 0;
// let odds = 0;
// for (let i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     evens += i;
//   } else if (i % 1 == 0) {
//     odds += i;
//   }
// }
// console.log(`evens: ${evens}, odds: ${odds}`);

// function randomNumbersArray(length, max) {
//   const newArray = [];
//   for (let i = 0; i < length; i++) {
//     let random = Math.floor(Math.random() * max);
//     if (newArray.includes(random)) {
//       random = Math.floor(Math.random() * max);
//     }
//     newArray.push(random);
//   }
//   return newArray;
// }
// const randomArray = randomNumbersArray(5, 10);
// console.log(randomArray);

// const characters =
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function randomString(length) {
//   let result = '';
//   const charLen = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charLen));
//   }
//   return result;
// }

// const ran1 = randomString(12);
// console.log(ran1);

// const body = document.querySelector('body');
// const hexadecimals = '0123456789abcdef';
// function randomHexcode() {
//   let hexcode = '#';
//   const hexLen = hexadecimals.length;
//   for (let i = 0; i < 6; i++) {
//     hexcode += hexadecimals.charAt(Math.floor(Math.random() * hexLen));
//   }
//   return hexcode;
// }

// function randomRgb() {
//   let rgb = '';
//   let rgbArr = [];
//   for (let i = 0; i < 3; i++) {
//     rgbArr.push(Math.floor(Math.random() * 255));
//   }
//   rgb += `rgb(${rgbArr.join(',')})`;
//   return rgb;
// }

// body.addEventListener('click', () => {
//   const color = randomRgb();
//   console.log(color);
//   body.style.setProperty('--color', color);
// });
