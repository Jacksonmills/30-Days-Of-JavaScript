// this is your main.js script
// let num = 3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// } else {
//   console.log(`${num} is a negative number`);
// }
// num = -3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// } else {
//   console.log(`${num} is a negative number`);
// }

// let isRaining = true;
// if (isRaining) {
//   console.log('Remember to take a rain coat');
// } else {
//   console.log('not raining today');
// }
// isRaining = false;
// if (isRaining) {
//   console.log('Remember to take a rain coat');
// } else {
//   console.log('not raining today');
// }

// let grind = 2.5;
// let grindTime = 8.4;
// let grindGrams = 18;
// let pullTime = 23;
// let pullGrams = 0;

// if (pullGrams > 33) {
//   console.log(`lower current grind setting (${grind}) to ${grind - 0.5}`);
// } else if (pullGrams < 30) {
//   console.log(`raise current grind setting (${grind}) to ${grind + 0.5}`);
// } else if (pullGrams === 33) {
//   console.log(`${grind} is the ideal grind setting`);
// } else {
//   console.log(`pull a shot to start simulation`);
// }

// let weather = 'rainy';
// switch (weather) {
//   case 'rainy':
//     console.log('rain!');
//     break;
//   case 'cloudy':
//     console.log('love them clouds');
//     break;
// }

// let userDay = prompt('what day is it?');
// let day = userDay.toLowerCase();

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday');
//     break;
//   case 'tuesday':
//     console.log('Today is Tuesday');
//     break;
//   case 'wednesday':
//     console.log('Today is Wednesday');
//     break;
//   case 'thursday':
//     console.log('Today is Thursday');
//     break;
//   case 'friday':
//     console.log('Today is Friday');
//     break;
//   case 'saturday':
//     console.log('Today is Saturday');
//     break;
//   case 'sunday':
//     console.log('Today is Sunday');
//     break;
// }

// let num = prompt('Number?');
// switch (true) {
//   case num > 0:
//     console.log(`${num} is positive`);
//     break;
//   case num == 0:
//     console.log(`${num} is zero`);
//     break;
//   case num < 0:
//     console.log(`${num} is negative`);
//     break;
//   default:
//     console.log('Not a number');
// }

// let isRaining = false;
// isRaining ? console.log('raining outside!') : console.log('no rain!');

// Get user input using prompt(“Enter your age:”)
// let age = prompt('Age?');
// // If user is 18 or older
// // give feedback:'You are old enough to drive'
// if (age >= 18) {
//   console.log('You are old enough to drive');
//   // but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
// } else if (age < 18) {
//   console.log(`Sorry you cannot drive yet... ${18 - age} years left!`);
// }

// Compare the values of myAge and yourAge
// let yourAge = Number(prompt('Your age:'));
// let myAge = 29;
// if (!(yourAge == myAge)) {
//   console.log(
//     `You are ${myAge < yourAge ? yourAge - myAge : myAge - yourAge} years ${
//       myAge < yourAge ? 'older' : 'younger'
//     } than me`
//   );
// } else {
//   console.log('same age!');
// }

// if a > b return 'a is greater than b' else 'a is less than b'
// let a = 4;
// let b = 12;
// console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);
// if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} is less than ${b}`);
// }

// let num = Number(prompt('Number?'));
// if (num % 2 == 0) {
//   console.log('even!');
// } else {
//   console.log('odd!');
// }

// 90 - 100, A;
// 70 - 89, B;
// 60 - 69, C;
// 50 - 59, D;
// 0 - 49, F;

// const classRoom = [
//   {
//     name: 'Katy',
//     grade: 89,
//   },
//   {
//     name: 'Ben',
//     grade: 100,
//   },
//   {
//     name: 'Jackson',
//     grade: 69,
//   },
//   {
//     name: 'Ilana',
//     grade: 55,
//   },
//   {
//     name: 'Jordan',
//     grade: 40,
//   },
// ];
// console.log(classRoom);
// classRoom.map((student) => {
//   console.log(`${student.name}'s grade is ${giveGrade(student.grade)}`);
// });

// function giveGrade(grade) {
//   if (grade >= 90 && grade <= 100) {
//     return 'A';
//   } else if (grade >= 70 && grade <= 89) {
//     return 'B';
//   } else if (grade >= 60 && grade <= 69) {
//     return 'C';
//   } else if (grade >= 50 && grade <= 59) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// const seasons = [
//   {
//     name: 'Autumn',
//     months: ['september', 'october', 'november'],
//   },
//   {
//     name: 'Winter',
//     months: ['december', 'january', 'february'],
//   },
//   {
//     name: 'Spring',
//     months: ['march', 'april', 'may'],
//   },
//   {
//     name: 'Summer',
//     months: ['june', 'july', 'august'],
//   },
// ];

// let today = prompt('Month?').toLowerCase();
// seasons.map((season) => {
//   if (season.months.includes(today)) {
//     console.log(`The season is ${season.name}!`);
//   }
//   return;
// });

// let weekend = ['saturday', 'sunday'];
// let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
// let today = prompt('day of the week?').toLowerCase();

// console.log(
//   weekend.includes(today)
//     ? `${today} is a weekend!`
//     : `${today} is a week day...`
// );

// const getDaysInMonth = (month, year) => {
//   return new Date(year, month, 0).getDate();
// };
// console.log(getDaysInMonth(2, 2021));
