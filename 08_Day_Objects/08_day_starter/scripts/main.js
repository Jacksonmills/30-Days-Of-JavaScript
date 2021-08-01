// ===OBJECTS===

// const rectangle = {
//   length: 20,
//   width: 20,
// };
// console.log(rectangle);

// const person = {
//   firstName: 'Jackson',
//   lastName: 'Mills',
//   age: 30,
//   country: 'USA',
//   city: 'Chicago',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Next',
//     'Node',
//     'MongoDB',
//     'Python',
//   ],
//   isMarried: false,
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   phoneNumber: '708-261-1442',
// };
// console.log(person);
// person.title = 'Junior Designer';
// person.skills.push('SASS');
// person.isMarried = true;
// console.log(person.skills);

// person.getPersonInfo = function () {
//   const newSkillsArr = [];
//   for (let i = 0; i < this.skills.length - 1; i++) {
//     newSkillsArr.push(this.skills[i]);
//   }
//   const startSkills = newSkillsArr.join(', ');
//   const lastSkill = this.skills[this.skills.length - 1];
//   const fullName = this.getFullName();
//   const title = this.title;
//   const city = this.city;
//   const result = `${fullName} is a ${title}.\nThey live in ${city}.\nThey work with ${startSkills} and ${lastSkill}.`;
//   return result;
// };
// console.log(person.getPersonInfo());
// console.log(person.skills);

// const copyPerson = Object.assign({}, person);
// copyPerson.address = {
//   street: '3101 N Spaulding Ave',
//   pobox: 4200,
//   city: 'Chicago',
// };
// const keys = Object.keys(copyPerson);
// console.log(keys);
// const address = Object.keys(copyPerson.address);
// console.log(address);

// const values = Object.values(copyPerson);
// console.log(values);

// console.log(copyPerson.hasOwnProperty('name'));
// console.log(copyPerson.hasOwnProperty('address'));
// console.log(person.hasOwnProperty('address'));

// name: string,
// capital: string,
// languages: Array<string>,
// population: number,
// flag: string,
// currency: string,

// const cat = {};
// console.log(cat);
// cat.name = 'Nancy';
// cat.legs = 4;
// cat.color = ['#000000', '#ffffff'];
// cat.age = 6;
// cat.meow = function () {
//   return 'meow meow!';
// };

// console.log(cat.name);
// console.log(cat.legs);
// console.log(cat.color);
// console.log(cat.age);
// console.log(cat.meow());

// cat.breed = 'munchkin';
// cat.getCatInfo = function () {
//   return Object.values(cat);
// };
// console.log(cat.getCatInfo());
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'Redux',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node',
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node',
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// console.log(users);

// Alex: {
//   email: 'alex@alex.com',
//   skills: ['HTML', 'CSS', 'JavaScript'],
//   age: 20,
//   isLoggedIn: false,
//   points: 30,
// }

// const userData = Object.keys(users).map((key) => {
//   return users[key];
// });
// console.log(userData);

// function countLoggedInUsers(data) {
//   let count = 0;
//   for (user of data) {
//     if (user.isLoggedIn) count++;
//   }
//   return count;
// }
// console.log(`${countLoggedInUsers(userData)} users are logged in.`);

// count users having greater than equal to 50 points
// function countPoints(data, threshold) {
//   let count = 0;
//   for (user of data) {
//     if (user.points >= threshold) count++;
//   }
//   return count;
// }
// console.log(`${countPoints(userData, 50)} users have 50 or more points!`);

// function hasMostSkills(data) {
//   console.log(data);

//   let winner = {};
//   let max = 0;
//   for (obj of data) {
//     if (obj.skills.length > max) {
//       max = obj.skills.length;
//       winner = obj;
//     }
//   }
//   console.log(winner);
//   console.log(max);
// }
// hasMostSkills(userData);

// MERN: MongoDB, Express, React, Node
// const isMernStack = (users) => {
//   const mernDevs = [];
//   for (user of users) {
//     const skills = [];
//     for (skill of user.skills) {
//       skills.push(skill);
//     }
//     if (
//       skills.includes('MongoDB') &&
//       skills.includes('Express') &&
//       skills.includes('React') &&
//       skills.includes('Node')
//     ) {
//       mernDevs.push(user);
//     }
//   }
//   return mernDevs;
// };
// console.log(isMernStack(userData));

// Set your name in the users object without modifying the original users object
// const copyUsers = Object.assign({}, users);
// copyUsers.Jackson = {
//   email: 'jackson@jackson.com',
//   skills: ['HTML', 'CSS', 'JavaScript'],
//   age: 29,
//   isLoggedIn: true,
//   points: 9001,
// };
// console.log(copyUsers);

// Get all keys or properties of users object
// console.log(Object.keys(users));

// Get all the values of users object
// console.log(Object.values(users));

// Use the countries object to print a country name, capital, populations and languages.
// name: 'Afghanistan',
// capital: 'Kabul',
// languages: ['Pashto', 'Uzbek', 'Turkmen'],
// population: 27657145,
// flag: 'https://restcountries.eu/data/afg.svg',
// currency: 'Afghan afghani',

// const countries = countries_data;

// function printCountryInfo(countries) {
//   for (country of countries) {
//     let name = country.name;
//     let capital = country.capital;
//     let population = country.population;
//     let languages = country.languages;
//     if (country.languages.length <= 1) {
//       languages = country.languages.join('');

//       console.log(
//         `${name}'s capital city is ${capital}, the population is ${population} and the language is ${languages}.`
//       );
//     } else {
//       const newLanguagesArr = [];
//       for (let i = 0; i < country.languages.length - 1; i++) {
//         newLanguagesArr.push(country.languages[i]);
//       }
//       languages = newLanguagesArr.join(', ');
//       lastLanguage = country.languages[country.languages.length - 1];

//       console.log(
//         `${name}'s capital city is ${capital}, the population is ${population} and the languages spoken here are ${languages} and ${lastLanguage}.`
//       );
//     }
//   }
// }
// console.log(printCountryInfo(countries));

// const personAccount = {
//   firstName: '',
//   lastName: '',
//   incomes: new Set(),
//   expenses: new Set(),
//   totalIncome: function () {},
//   totalExpense: function () {},
//   accountInfo: function () {},
//   addIncome: function () {},
//   addExpense: function () {},
//   accountBalance: function () {},
// };
// console.log(personAccount);
