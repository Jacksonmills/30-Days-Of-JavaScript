console.log(countries);
// console.log(webTechs);

// if (countries.includes('Ethiopia')) {
//   console.log('ETHIOPIA');
// }
// webTechs.push('Sass');
// if (webTechs.includes('Sass')) {
//   console.log('Sass is a CSS preprocess');
// } else {
//   console.log(webTechs);
// }

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// const sortedAges = ages.sort();
// console.log(sortedAges);
// console.log(`Oldest is ${ages[ages.length - 1]}`);
// console.log(`Youngest is ${ages[0]}`);
// console.log(`Middlest is ${ages[ages.length / 2 - 1]}`);

// // all items divided by number of items
// console.log(`avg: ${ages.reduce((a, b) => a + b, 0) / ages.length}`);
// console.log(`range: ${ages[ages.length - 1] - ages[0]}`);

// let firstTen = countries.slice(9);
// console.log(firstTen);

// let middleCountries = firstTen.slice(
//   firstTen.length / 2 - 1,
//   firstTen.length / 2
// );
// console.log(middleCountries);

// const list = document.querySelector('.shopping-list');
// const addButton = document.querySelector('.add');

// let editButtons = document.querySelectorAll('.edit');
// let removeButtons = document.querySelectorAll('.remove');

// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// text = text.replace(/[.,]/g, '');
// text = text.split(' ');
// console.log(text);
// console.log(text.length);

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// let honeyAllergy = true;
// if (!shoppingCart.includes('Meat')) {
//   shoppingCart.push('Meat');
// }
// if (!shoppingCart.includes('Sugar')) {
//   shoppingCart.push('Sugar');
// }
// if (honeyAllergy) {
//   let honeyIndex = shoppingCart.indexOf('Honey');
//   shoppingCart.splice(honeyIndex, 1);
// }
// function modifyItem(item, newItem) {
//   let itemIndex = shoppingCart.indexOf(item);
//   shoppingCart.splice(itemIndex, 1, newItem);
// }
// modifyItem('Tea', 'Green Tea');
// modifyItem('Coffee', 'Espresso');
// console.log(shoppingCart);

// init list
// for (item in shoppingCart) {
//   const listItem = `
//     <li class='item'>
//       ${shoppingCart[item]}
//       <button class="edit">edit</button>
//       <button class="remove">remove</button>
//     </li>
//   `;
//   list.innerHTML += listItem;
// }
// editButtons = document.querySelectorAll('.edit');
// removeButtons = document.querySelectorAll('.remove');

// function addItemToCart(item) {
//   const newListItem = `
//     <li class='item'>
//       ${item}
//       <button class="edit">edit</button>
//       <button class="remove">remove</button>
//     </li>
//   `;
//   list.innerHTML += newListItem;
// }

// function removeItemFromCart(event) {
//   const parent = event.target.parentElement;
//   console.log(parent);
//   console.log('removed item!');
// }

// function editItemInCart(item) {
//   console.log('edited item!');
// }

// addButton.addEventListener('click', () => {
//   let userInput = prompt('Enter item name:');
//   if (userInput) {
//     addItemToCart(userInput);
//     editButtons = document.querySelectorAll('.edit');
//     removeButtons = document.querySelectorAll('.remove');
//   }
// });

// removeButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     removeItemFromCart();
//     console.log('hello');
//   });
// });

// editButtons.forEach((button) => {
//   button.addEventListener('click', editItemInCart);
// });
// const arr = Array();
// arr.push('poop', 'balls');
// console.log(arr);

// const arr = [];
// arr.push('poop', 'balls');
// console.log(arr);

// const numbers = [1, 2, 3, 3.14];
// const fruits = ['banana', 'cherry', 'apple'];
// const vegetables = ['potato', 'onion', 'carrot'];
// const webTechs = ['HTML', 'CSS', 'JavaScript'];

// console.log(webTechs);
// console.log(fruits.length);

// const diverseArray = [
//   'Jackson',
//   250,
//   true,
//   {
//     country: 'Finland',
//     city: 'Helsinki',
//   },
//   {
//     skills: ['HTML', 'CSS', 'JavaScript'],
//   },
// ];

// console.log(diverseArray);

// let js = 'JavaScript';
// const charsInJavaScript = js.split('');
// console.log(charsInJavaScript);

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const companies = companiesString.split(', ');
// console.log(companies);

// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// txt = txt.replace(/[,.]/g, '').toLowerCase();
// const words = txt.split(' ');
// console.log(words);

// let firstWord = words[0];
// let secondWord = words[1];
// let lastWord = words[words.length - 1];
// console.log(firstWord, secondWord, lastWord);

// const espressoSettings = [
//   'grind',
//   'grindTime',
//   'grindGrams',
//   'pullTime',
//   'pullWeight',
// ];

// let i = 0;
// for (setting in espressoSettings) {
//   console.log(espressoSettings[i]);
//   i++;
// }

// const numbers = [1, 2, 3];
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i] + 100;
// }
// console.log(numbers);

// const arr = [];
// console.log(arr);

// const eightEmptyValues = Array(8).fill(4);
// console.log(eightEmptyValues);

// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];
// const thirdList = firstList.concat(secondList);
// console.log(thirdList);

// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
// const fruitsAndVegetables = fruits.concat(vegetables);
// console.log(fruitsAndVegetables);

// const numbers = [1, 2, 3];
// console.log(numbers.indexOf(2));

// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// let index = fruits.indexOf('tomato');
// if (index != -1) {
//   console.log('This fruit exists in the array');
// } else {
//   console.log('This fruit does NOT exists in the array');
// }

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
// console.log(numbers.lastIndexOf(2));

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes('poop'));
// console.log(numbers.includes(4));

// const array = [1, 2, 3];
// console.log(Array.isArray(array));
// const string = 'string';
// console.log(Array.isArray(string));

// const array = [1, 2, 3, 4, 5];
// // console.log(array.toString());
// // console.log(array.join(' => '));
// // console.log(array.slice(1, 2));
// array.splice(3, 3, 'pp', 'popo', 'pewpie');
// for (let i = 0; i < 3; i++) {
//   array.pop();
// }
// array.shift();
// array.unshift(0);
// array.reverse();
// array.reverse();
// console.log(array);

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const arrayArr = [first, second];
// console.log(arrayArr[0]);

// const emptyArray = [];
// const six = [1, 2, 3, 4, 5, 6];
// console.log(six.length);
// const firstSix = six[0];
// const middleSix = six[six.length / 2 - 1];
// const lastSix = six[six.length - 1];
// console.log(`first is ${firstSix}, middle is ${middleSix}, last is ${lastSix}`);

// const mixedDataTypes = [
//   'jackson',
//   29,
//   1991,
//   true,
//   { city: 'chicago', state: 'illinois' },
//   [1, 2, 3],
//   { job: 'frontend engineer', skills: ['HTML', 'CSS', 'JavaScript'] },
// ];

// const itCompanies = [
//   'Facebook',
//   'Google',
//   'Microsoft',
//   'Apple',
//   'IBM',
//   'Oracle',
//   'Amazon',
// ];
// console.log(itCompanies);
// console.log(`Number of companies is ${itCompanies.length}`);
// console.log(itCompanies.length / 2 - 1);
// const firstCompany = itCompanies[0];
// const middleCompany = itCompanies[Math.ceil(itCompanies.length / 2 - 1)];
// const lastCompany = itCompanies[itCompanies.length - 1];
// console.log(
//   `first is ${firstCompany}, middle is ${middleCompany}, last is ${lastCompany}`
// );

// for (company in itCompanies) {
//   const upperCompany = itCompanies[company].toUpperCase();
//   console.log(upperCompany);
// }

// const tempLastCompany = itCompanies.pop();
// console.log(
//   `${itCompanies.join(', ')} and ${tempLastCompany} are big IT companies`
// );
// itCompanies.push(tempLastCompany);
// console.log(itCompanies);

// function checkCompany(company) {
//   const upperCompanies = itCompanies.map((name) => name.toUpperCase());
//   if (upperCompanies.includes(company)) {
//     return console.log(company);
//   } else {
//     return console.log('ERROR: COMPANY NOT IN DATABASE');
//   }
// }
// // let userCompany = prompt('Enter a company name:').toUpperCase();
// checkCompany(userCompany);
// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log(itCompanies.slice(0, 3));
// console.log(itCompanies.slice(-3));
// console.log(itCompanies.slice(Math.ceil(itCompanies.length / 2 - 1), -1));
// console.log(itCompanies.shift());
// console.log(itCompanies.pop());
// console.log(itCompanies.splice(Math.ceil(itCompanies.length / 2 - 1), 1));
// console.log(itCompanies);
// console.log(0, itCompanies.splice(itCompanies.length));
