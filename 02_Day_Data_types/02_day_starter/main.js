// this is your main.js script

// ===primitive data types===

// let word = 'fuck';

// for (letter in word) {
//   console.log(word[letter]);
// }

// let numOne = 3;
// let numTwo = 3;

// console.log(numOne == numTwo); // true

// let js = 'JavaScript';
// let py = 'Python';

// console.log(js == py); //false

// let lightOn = true;
// let lightOff = false;

// console.log(lightOn == lightOff); // false

// ===Non-Primitive Data Types===

// let nums = [1, 2, 3];
// let numz = nums;

// console.log('numbers: ', nums == numz);

// let user0 = {
//   name: 'jackson',
//   role: 'developer',
//   country: 'US',
// };

// let user1 = user0;

// console.log('objects: ', user0 == user1);

// ===Numbers===

// let age = 35;
// const gravity = 9.81;
// let mass = 72;
// const PI = 3.14;

// const boilingPoint = 100;
// const bodyTemp = 37;

// console.log(
//   'age: ',
//   age,
//   'gravity: ',
//   gravity,
//   'mass: ',
//   mass,
//   'PI: ',
//   PI,
//   'boilingPoint: ',
//   boilingPoint,
//   'bodyTemp: ',
//   bodyTemp
// );

// const PI = Math.PI;

// console.log(PI);

// console.log(Math.round(PI));
// console.log(Math.round(9.45743));

// console.log(Math.floor(PI));
// console.log(Math.ceil(PI));

// console.log(Math.min(1, 2, 3));
// console.log(Math.max(1, 2, 3));

// const randomNum = Math.random();
// console.log(randomNum);

// const num = Math.floor(Math.random() * 11);
// console.log('random (1-10): ', num);

// console.log('absolute (-10): ', Math.abs(-10));

// console.log('square root (100): ', Math.sqrt(100));
// console.log('square root (2): ', Math.sqrt(2));

// console.log('power of 2 (3): ', Math.pow(3, 2));
// console.log('E: ', Math.E);

// console.log('log (2): ', Math.log(2));
// console.log('log (10): ', Math.log(10));

// let randNum = Math.random();
// let between0and10 = randNum * 11;
// console.log('0-10.99: ', between0and10);
// let floor0to10 = Math.floor(between0and10);
// console.log(floor0to10);

// ===Strings===

// let space = ' ';
// let firstName = 'jackson';
// let lastName = 'mills';
// let age = 29;
// let fullName = firstName + space + lastName;
// console.log(fullName + '. I am ' + age + '.');
// console.log(`I am ${firstName} ${lastName}. I am ${age} years old.`);

// const p =
//   'My name is Jackson Mills. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too.';

// console.log(p);

// console.log('object\ndo you?');
// console.log('object\tarray\tclass');
// console.log('Day 1\t3\t5');

// let a = 4;
// let b = 3;
// console.log(`the sum of ${a} and ${b} is ${a + b}`);
// console.log(`${a} is greater than ${b}: ${a > b}`);

// let js = 'JavaScript';
// console.log(js.length);
// let firstName = 'jackson';
// console.log(firstName.length);

// let s = 'JavaScript';
// console.log(s.substr(4, 6));

// let t = 'MyHeroAcademia';
// console.log(t.substr(2, 4));

// let s = '30 days of javascript';
// console.log(s.split(' '));
// let n = 'Jackson';
// console.log(n.split(''));

// let p = 'Finland, Sweden, Norway, Denmark, and Iceland';
// console.log(p.split(', '));

// let s = '   30 days of javascript    ';
// console.log(s);
// console.log(s.trim(' '));

// let s = 'my hero academia';
// function stringIncludes(str, arg) {
//   return str.includes(arg);
// }
// console.log(stringIncludes(s, 'my'));
// console.log(stringIncludes(s, 'dragon'));
// console.log(stringIncludes(s, 'cad'));

// let s = '30 days of javascript';
// function stringReplace(string, subString, newSubString) {
//   return string.replace(subString, newSubString);
// }
// console.log(stringReplace(s, 'javascript', 'react'));

// let s = 'Dragon Ball FighterZ';
// const findCharIndex = (string, index) => {
//   let lastIndex = string.length - 1;
//   return { target: string.charAt(index), last: string.charAt(lastIndex) };
// };
// console.log(findCharIndex(s, 8));

// let s = 'Dragon Ball FighterZ';
// const findCharIndex = (string, index) => {
//   let lastIndex = string.length - 1;
//   return {
//     target: string.charCodeAt(index),
//     last: string.charCodeAt(lastIndex),
//   };
// };
// const charCodes = findCharIndex(s, 8);
// console.log(charCodes.target);
// console.log(charCodes.last);

// let s = 'Twisted Pair';
// const getIndex = (string, subString) => {
//   const index = string.indexOf(subString);
//   return { index: index };
// };
// const w = getIndex(s, 'w');
// const r = getIndex(s, 'r');
// console.log(r.index);

// let s =
//   'I love JavaScript. If you do not love JavaScript what else can you love.';
// const getLastIndex = (string, subString) => {
//   const index = string.lastIndexOf(subString);
//   return { lastIndex: index };
// };
// const last = getLastIndex(s, 'love');
// console.log(last.lastIndex);

// let s = '30';
// const concatString = (string, ...args) => {
//   return s.concat(...args);
// };
// console.log(concatString(s, 'poop', 'balls', 'test'));

// let s = 'Love is the best to in this world';
// const startAndEndWith = (string, start, end) => {
//   const startsWith = string.startsWith(start);
//   const endsWith = string.endsWith(end);
//   return { start: startsWith, end: endsWith };
// };
// console.log(startAndEndWith(s, 'Love', 'ld'));
// console.log(startAndEndWith(s, 'Love', 'Z'));
// console.log(startAndEndWith(s, 'Dragon', 'Z'));

// let s = 'Love is the best to in this world';
// console.log(s.search('best'));
// console.log(s.search(/javascript/gi));

// let string = 'love';
// let pattern1 = /love/;
// let pattern2 = /love/gi;

// let string =
//   'I love JavaScript. If you do not love JavaScript what else can you love.';
// console.log(string.match('love'));
// let pattern = /love/gi;
// console.log(string.match(pattern));

// let string =
//   'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge';
// let regex = /\d+/;
// let regex1 = /\d+/g;

// console.log(string.match(regex));
// console.log(string.match(regex1));

// let string = 'poop';
// console.log(string.repeat(10));

// console.log(typeof 'poop');
// console.log(typeof true);
// console.log(typeof 1);
// console.log(typeof 1.9);
// console.log(typeof 1n);
// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof function something() {});
// console.log(typeof {});

// let num = '10';
// let int = parseInt(num);
// let int1 = Number(num);
// let int2 = +num;
// console.log(int, int1, int2);

// let num = '9.81';
// let flt = parseFloat(num);
// let flt1 = Number(num);
// let flt2 = +num;
// console.log(flt, flt1, flt2);

// let num = 9.817709;
// let int = parseInt(num);
// console.log(int);

// ===EXERCISES===

// let challenge = '30 days of JavaScript';
// console.log(`challenge: ${challenge}`);
// console.log(`length: ${challenge.length}`);
// console.log(`upper case: ${challenge.toUpperCase()}`);
// console.log(`lower case: ${challenge.toLowerCase()}`);

// let firstWord = challenge.substring(3, 7);
// console.log(`first word: ${firstWord}`);

// let phrase = challenge.slice(3, 21);
// console.log(`phrase: ${phrase}`);

// console.log(`contains 'Script': ${challenge.includes('Script')}`);
// let array = challenge.split(' ');
// console.log('array:');
// console.log(array);

// let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(`split commas:`);
// console.log(string.split(', '));

// console.log(`replace: ${challenge.replace('JavaScript', 'Python')}`);

// console.log(`character (15): ${challenge.charAt(15)}`);
// console.log(`character code ('J'): ${challenge.charCodeAt('J')}`);
// console.log(`index of: ${challenge.indexOf('a')}`);
// console.log(`last index of: ${challenge.lastIndexOf('a')}`);
// let string2 =
//   'You cannot end a sentence with because because because is a conjunction';
// console.log(`index of: ${string2.indexOf('because')}`);
// console.log(`last index of: ${string2.lastIndexOf('because')}`);
// console.log(`search: ${string2.search('because')}`);

// let whitespace = '       30 Days Of JavaScript        ';
// console.log(`trim (${whitespace}): ${whitespace.trim(' ')}`);

// console.log(`startsWith: ${challenge.startsWith('3')}`);
// console.log(`endsWith: ${challenge.endsWith('t')}`);
// let pattern2 = /a/gi;
// console.log(`match: ${challenge.match(pattern2)}`);

// let start = '30 days of';
// let end = 'JavaScript';
// console.log(`concat: ${start.concat(' ', end)}`);
// console.log(`repeat: ${challenge.repeat(2)}`);

// console.log(
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// );

// console.log(
//   '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
// );

// let strNum = '10';
// console.log(typeof Number(strNum) === typeof 10);

// let float = parseFloat('9.8');
// console.log(Math.ceil(float) === 10);

// let str0 = 'python';
// let str1 = 'jargon';
// console.log(str0.includes('on'));
// console.log(str1.includes('on'));

// let sent = 'I hope this course is not full of jargon.';
// console.log(sent.includes('jargon'));

// let min = 0;
// let max = 420;
// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// console.log(getRandomNumber(min, max));

// let js = 'JavaScript';
// let randomJs = getRandomNumber(0, js.length);
// console.log(randomJs);
// console.log(`random char: ${js.charAt(randomJs)}`);

// console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// let because =
//   'You cannot end a sentence with because because because is a conjunction';
// let target = 'because because because';
// let length = target.length;
// let startsAt = because.indexOf('because');
// console.log(because.substr(startsAt, length));

// let string =
//   'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// let apptern = /love/gi;
// console.log(string.match(apptern).length);

// string =
//   'You cannot end a sentence with because because because is a conjunction';

// function countWords(s, p) {
//   return s.match(p).length;
// }
// console.log(countWords(string, /because/gi));

// let string =
//   '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// let arr = string
//   .replace(/[%$&#;!@.,?]/g, '')
//   .toLowerCase()
//   .split(' ');
// console.log(arr);

// const countRepeatedWords = (arr) => {
//   const words = arr;
//   const wordMap = {};

//   for (let i = 0; i < words.length; i++) {
//     let currWordCount = wordMap[words[i]];
//     let count = currWordCount ? currWordCount : 0;
//     wordMap[words[i]] = count + 1;
//   }
//   return wordMap;
// };

// const words = countRepeatedWords(arr);
// console.log(Object.keys(words).reduce((a, b) => (words[a] > words[b] ? a : b)));

let string =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let incomeArr = string.match(/\d+/g);
const numArr = [];
incomeArr.map((income) => {
  numArr.push(Number(income));
});
const totalIncome = numArr.reduce((a, b) => a + b, 0);
console.log(totalIncome);
