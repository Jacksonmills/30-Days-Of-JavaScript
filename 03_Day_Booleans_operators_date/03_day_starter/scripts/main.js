// let isLightOn = true;
// let isRaining = false;
// let isHungry = false;
// let isMarried = false;
// let truValue = 4 > 3;
// let falseValue = 4 < 3;

// const lightSwitch = document.querySelector('.light-switch');
// lightSwitch.addEventListener('click', () => {
//   const loadingAnimation = ['.', '..', '...'];
//   if (isLightOn) {
//     for (let i = 0; i < 2; i++) {
//       lightSwitch.textContent = `Turning light off ${loadingAnimation[0]}`;
//       setTimeout(() => {
//         lightSwitch.textContent = `Turning light off ${loadingAnimation[1]}`;
//       }, 150);
//       setTimeout(() => {
//         lightSwitch.textContent = `Turning light off ${loadingAnimation[2]}`;
//       }, 300);
//     }

//     console.log('Turning light off...');
//     setTimeout(() => {
//       isLightOn = false;
//       lightSwitch.textContent = 'OFF';
//     }, 900);
//   } else {
//     lightSwitch.textContent = 'Turning light on...';
//     console.log('Turning light on...');
//     isLightOn = true;
//     setTimeout(() => {
//       lightSwitch.textContent = 'ON';
//     }, 400);
//   }
// });
// let falsy = null;
// if (falsy) {
//   console.log('falsy');
// } else {
//   console.log('truly');
// }
// let num0 = 4;
// let num1 = 3;

// let sum = num0 + num1;
// let diff = num0 - num1;
// let multi = num0 * num1;
// let divi = num0 / num1;
// let remain = num0 % num1;
// let power = num0 ** num1;

// console.log(sum, diff, multi, divi, remain, power);

// const PI = 3.14;
// let radius = 100;

// const areaOfCircle = PI * radius * radius;
// console.log(areaOfCircle);

// const gravity = 9.81;
// let mass = 24;

// const weight = mass * gravity;
// console.log(weight);

// const boilingPoint = 100;
// const bodyTemp = 37;

// console.log(
//   `The boiling point of water is ${boilingPoint} oC.\nHuman body temp is ${bodyTemp} oC.\nThe gravity of Earth is ${gravity} m/s2`
// );

// console.log('greater:', 3 > 2);
// console.log('greater or equal:', 3 >= 2);
// console.log('less(3, 2)', 3 < 2);
// console.log('less(2, 3)', 2 < 3);
// console.log('less or equal:', 3 <= 2);
// console.log('loose equal:', 3 == 2);
// console.log('loose not equal:', 3 != 2);
// console.log('loose equal (3, "3"):', 3 == '3');
// console.log('strict equal (3, "3"):', 3 === '3');
// console.log('strict not equal (3, "3"):', 3 !== '3');
// console.log('loose not equal:', 3 != 3);
// console.log('strict not equal:', 3 !== 3);
// console.log(0 == false);
// console.log(0 === false);
// console.log(0 == '');
// console.log(0 == ' ');
// console.log(0 === '');
// console.log(1 == true);
// console.log(1 === true);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(typeof NaN);

// console.log('meat'.length != 'milk'.length);

// let check = 4 > 3 && 10 > 5;
// check = 4 > 3 && 10 < 5;
// check = 4 < 3 && 10 < 5;

// check = 3 > 2 || 10 > 6;
// check = 3 > 2 || 10 < 6;
// check = 3 < 2 || 10 < 6;

// check = 4 > 3;
// check = !check;
// console.log(check);

// let isLightOn = true;
// let isLightOff = !isLightOn;
// let isMarried = !false;

// let arr = [1, 2, 3, 4];
// let count = 0;
// for (item in arr) {
//   count++;
// }
// for (item in arr) {
//   count--;
// }
// console.log(count);

// let isRaining = true;
// isRaining
//   ? console.log('Grab your raincoat!')
//   : console.log('Shorts and shirt today!');

// isRaining = false;
// isRaining
//   ? console.log('Grab your raincoat!')
//   : console.log('Shorts and shirt today!');

// let num = 5;
// num > 0
//   ? console.log(`${num} is positive number`)
//   : console.log(`${num} is negative number`);
// num = -3;
// num > 0
//   ? console.log(`${num} is positive number`)
//   : console.log(`${num} is negative number`);

// let message = 'Wow ethan great job, proud of you!';
// alert(message);

// let number = prompt('Number?', 0);
// console.log(number);

// const agree = confirm('Are you sure you want to delete? ');
// console.log(agree);

// let date = new Date();
// const clock = document.querySelector('.clock');
// let hours = clock.querySelector('[data-hours]');
// let minutes = clock.querySelector('[data-minutes]');
// let seconds = clock.querySelector('[data-seconds]');
// setInterval(() => {
//   date = new Date();
//   hours.textContent = date.getHours();
//   minutes.textContent = date.getMinutes();
//   seconds.textContent = date.getSeconds();
// }, 1000);
// console.log(date);

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const date = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

// ===EXERCISES===

// const now = new Date();
// const person = {
//   firstName: 'Jackson',
//   lastName: 'Mills',
//   country: 'USA',
//   city: 'Chicago',
//   age: 29,
//   isMarried: false,
//   year: now.getFullYear(),
// };
// console.log(
//   typeof person.firstName,
//   typeof person.age,
//   typeof person.year,
//   typeof person.isMarried
// );

// console.log(typeof '10' === typeof 10);
// console.log(parseInt('9.8') === 10);
// let str = '';
// if (str === ) {
//   console.log('falsey');
// } else {
//   console.log('truthy');
// }

// console.log('python'.length !== 'javascript'.length);

// console.log('dragon'.includes('on') && 'python'.includes('on'));

// let now = new Date();
// alert(`Today the year is ${now.getFullYear()}`);
// alert(`Today the month is ${now.getMonth() + 1}`);
// alert(`Today the date is ${now.getDate()}`);
// alert(`Today the day is ${now.getDay()}`);
// alert(`The hour is ${now.getHours()}`);
// alert(`The minute is ${now.getMinutes()}`);
// alert(`${now.getTime()} since 1970`);

// let base = Number(prompt('Enter base:'));
// let height = Number(prompt('Enter height:'));

// let sideA = Number(prompt('Enter side A:'));
// let sideB = Number(prompt('Enter side B:'));
// let sideC = Number(prompt('Enter side C:'));

// function findAreaTriangle(b, h) {
//   return (b * h) / 2;
// }

// function findPerimeterTriangle(a, b, c) {
//   return a + b + c;
// }

// console.log(findPerimeterTriangle(sideA, sideB, sideC));

// let width = Number(prompt('Enter width:'));
// let length = Number(prompt('Enter length:'));

// console.log(`area = ${width * length}, perimeter = ${2 * (length + width)}`);

// const PI = 3.14;
// let radius = Number(prompt('Enter radius:'));
// console.log(`circle's area is ${PI * radius * radius}`);
// console.log(`circle's circumference is ${2 * PI * radius}`);

// let hours = Number(prompt('Enter hours:'));
// let rate = Number(prompt(`Enter rate per ${hours} hours:`));
// console.log(`pay = ${hours * rate}`);

// const jackson = {
//   firstName: 'Katy',
//   lastName: 'Harper',
// };

// function compareNames(name, surname) {
//   return name.length > surname.length
//     ? `Your name, ${name} is longer than your surname, ${surname}`
//     : `Your surname, ${surname} is longer than your name, ${name}`;
// }

// console.log(compareNames(jackson.firstName, jackson.lastName));

// console.log(`value of y = ${(0 ** 2) + 6}`)

// let myAge = 29;
// let yourAge = 21;

// console.log(`I am ${myAge - yourAge} years older`);
// let currYear = new Date().getFullYear();
// let birthYear = Number(prompt('Enter birth year:'));
// let age = currYear - birthYear;
// console.log(
//   age > 21
//     ? `You are ${age} years old, drink em if you gotem!`
//     : `You are ${age} years old, no drinky for you!`
// );

// let now = new Date();
// let yearsAlive = Number(prompt('How many years have you lived?'));
// function secondsAlive(years) {
//   let weeksAlive = years * 52;
//   let daysAlive = weeksAlive * 7;
//   let hoursAlive = daysAlive * 24;
//   let minutesAlive = hoursAlive * 60;
//   let secondsAlive = minutesAlive * 60;
//   return secondsAlive;
// }
// console.log(secondsAlive(yearsAlive));

// let now = new Date();
// let date = now.getDate();
// let month = now.getMonth() + 1;
// let year = now.getFullYear();
// let todayDate = `${date}/${month}/${year}`;

// let hours = now.getHours();
// let minutes = now.getMinutes();
// let time = `${hours}:${minutes}`;
// console.log(todayDate, time);
