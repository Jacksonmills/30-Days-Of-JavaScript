// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * n;
// }

// console.log(cube(callback, 3));

// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };

//   return doSomething;
// };
// console.log(higherOrder(2)(3)(10));

// const numbers = [1, 2, 3, 4];

// const sumArr = (arr) => {
//   let sum = 0;
//   numbers.forEach(function (element) {
//     sum += element;
//   });
//   return sum;
// };
// console.log(sumArr(numbers));

// function sayHello() {
//   console.log('hello world!');
// }
// setInterval(sayHello, 1000);

// function greet() {
//   console.log('hail and well met!');
// }
// setTimeout(greet, 5000);

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => console.log(num));
// console.log(sum);

// numbers.forEach((num) => (sum += num));
// console.log(sum);

// const countriez = ['Finland', 'Denmark', 'Sweden', 'Norway'];
// countriez.forEach((poop) => console.log(poop.toUpperCase()));

// const numbersSquare = numbers.map((num) => num * num);
// // console.log(numbersSquare);

// const upperCountriez = countriez.map((c) => c.toUpperCase());
// // console.log(upperCountriez);

// const countriezFirstThreeLetters = countriez.map((c) =>
//   c.toUpperCase().slice(0, 3)
// );
// console.log(countriezFirstThreeLetters);

// const countriesContainingLand = countriez.filter((c) => c.includes('land'));
// console.log(countriesContainingLand);

// const coutnriesEndWithIa = countries.filter((c) => c.endsWith('ia'));
// console.log(coutnriesEndWithIa);

// const countriesHaveFiveLetters = countries.filter((c) => c.length === 5);
// console.log(countriesHaveFiveLetters);

// const scores = [
//   { name: 'Jackson', score: 95 },
//   { name: 'Mathias', score: 80 },
//   { name: 'Elias', score: 66 },
//   { name: 'Martha', score: 77 },
//   { name: 'John', score: 69 },
// ];

// const szcoresGreateerThan8 = scores.filter((s) => s.score >= 80);
// console.log(szcoresGreateerThan8);

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// const areAllStr = countries.every((name) => typeof name === 'string');
// console.log(areAllStr);

// const bools = [true, true, false, true];
// const allBools = bools.every((b) => typeof b === typeof true);
// console.log(allBools);

// const ages = [24, 22, 25, 32, 35, 18];
// const age = ages.find((age) => age < 20);
// console.log(age);
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const result = names.find((n) => n.length > 7);
// console.log(result);

// const score = scores.find((s) => s.score >= 80);
// console.log(score);

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const bools = [false, true, true, true];

// const result = names.findIndex((name) => name.length > 7);
// console.log(result);

// const age = ages.findIndex((age) => age < 20);
// console.log(age);

// const areSomeTrue = bools.some((b) => b === true);
// console.log(areSomeTrue);

// const areAllStrings = names.some((name) => typeof name === 'number');
// console.log(areAllStrings);

// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];

// console.log(products.sort());

// const numberz = [9.81, 3.14, 100, 37];

// const asc = numberz.sort((a, b) => {
//   return a - b;
// });
// console.log(asc);
// const dsc = numberz.sort((a, b) => {
//   return b - a;
// });
// console.log(dsc);

// const users = [
//   { name: 'Asabeneh', age: 150 },
//   { name: 'Brook', age: 50 },
//   { name: 'Eyo', age: 100 },
//   { name: 'Elias', age: 22 },
// ];

// countriesData.sort((a, b) => {
//   if (a.name.length > b.name.length) return -1;
//   if (a.name.length < b.name.length) return 1;
//   return 0;
// });
// console.log(countriesData);

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

// forEach loops over arr and returns values
// map loops over arr and returns modified arr
// filter loops over arr and returns arr containing only values that pass arg
// reduce loops over arr and returns a number

// countries.forEach((c) => console.log(c));
// names.forEach((n) => console.log(n));
// numbers.forEach((num) => console.log(num));

// const upperCunt = countries.map((c) => c.toUpperCase());
// console.log(upperCunt);

// const cuntlen = countries.map((c) => c.length);
// console.log(cuntlen);

// const squares = numbers.map((num) => num * num);
// console.log(squares);

// const namesUpper = names.map((n) => n.toUpperCase());
// console.log(namesUpper);

// const productPrices = products.map((p) => [p.product, p.price]);
// console.log(productPrices);

// const lands = countries.filter((c) => c.includes('land'));
// console.log(lands);

// const sixers = countries.filter((c) => c.length === 6);
// const sixersMore = countries.filter((c) => c.length >= 6);
// console.log(sixers);
// console.log(sixersMore);

// const ers = countries.filter((c) => c.startsWith('E'));
// console.log(ers);

// const validPrices = products.filter((p) => p.price > 0);
// const validProducts = validPrices.map((p) => [p.product, p.price]);
// console.log(validProducts);

// function getStringLists(arr) {
//   return arr.filter((i) => typeof i === 'string');
// }
// console.log(getStringLists(names));

// Use reduce to sum all the numbers in the numbers array.
// console.log(numbers.reduce((a, b) => a + b, 0));
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// const EU = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// const last = EU.pop();
// const first = EU.reduce((a, b) => {
//   return (a += ', ' + b);
// });
// console.log(first, 'and', last);
// Explain the difference between some and every
// some returns true if some match the arg
// every returns true if all match the arg
// Use some to check if some names' length greater than seven in names array
// console.log(names.some((n) => n.length < 7));
// Use every to check if all the countries contain the word land
// console.log(countries.every((c) => c.includes('land')));
// Explain the difference between find and findIndex.
// find returns first element/value that satisfies arg
// findIndex returns the index that the element/value is at that satisfies arg
// Use find to find the first country containing only six letters in the countries array
// console.log(countries.find((c) => c.length === 6));
// Use findIndex to find the position of the first country containing only six letters in the countries array
// console.log(countries.findIndex((c) => c.length === 6));
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// console.log(countries.findIndex((c) => c.includes('Norway')));
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// console.log(countries.findIndex((c) => c.includes('Russia')));
// Exercises: Level 2
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', true, 69];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ];
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// console.log(
//   products
//     .filter((p) => p.price > 0)
//     .map((p) => p.price)
//     .reduce((a, b) => a + b, 0)
// );
// Find the sum of price of products using only reduce reduce(callback))
// console.log(
//   products.reduce((prev, curr) => {
//     let currPrice = curr.price;
//     if (typeof curr.price !== 'number') {
//       currPrice = 0;
//     }
//     return prev + currPrice;
//   }, 0)
// );
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// function categorizeCountries(arr, pattern) {
//   return arr.filter((a) => a.includes(pattern));
// }
// console.log(categorizeCountries(countries, 'land'));
// console.log(categorizeCountries(countries, 'ia'));
// console.log(categorizeCountries(countries, 'Island'));
// console.log(categorizeCountries(countries, 'stan'));
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// function startsWithLetter(arr, letter) {
//   return arr.filter((a) => a.startsWith(letter));
// }
// console.log(startsWithLetter(countries, 'A'));
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// const getFirstTenCount = (arr) => {
//   arr = arr.slice(0, 10);
//   const result = arr.map((a) => a);
//   return result;
// };
// console.log(getFirstTenCount(countries));
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// const getLastTenCount = (arr) => {
//   arr = arr.slice(arr.length - 10, arr.length);
//   const result = arr.map((a) => a);
//   return result;
// };
// console.log(getLastTenCount(countries));
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// function initialUse(arr, letter) {
//   arr = arr.map((a) => a.toUpperCase().slice(0, 1));
//   arr = arr.filter((a) => a === letter);
//   return arr;
// }
// console.log(initialUse(countries, 'F'));

//Use the countries information, in the data folder. Sort countries by name, by capital, by population

// function sortArrObjNames(arr) {
//   arr = arr.sort((a, b) => {
//     const aText = a.name.toUpperCase();
//     const bText = b.name.toUpperCase();
//     return aText > bText ? -1 : aText < bText ? 1 : 0;
//   });
//   return arr;
// }
// console.log('Country name:');
// console.log(sortArrObjNames(countriesData));

// function sortArrObjCapitals(arr) {
//   arr = arr.sort((a, b) => {
//     const aText = a.capital.toUpperCase();
//     const bText = b.capital.toUpperCase();
//     return aText > bText ? -1 : aText < bText ? 1 : 0;
//   });
//   return arr;
// }
// console.log('Capital city:');
// console.log(sortArrObjCapitals(countriesData));

// function sortArrObjPopulations(arr, dir) {
//   arr = arr.sort((a, b) => {
//     const aPop = a.population;
//     const bPop = b.population;
//     if (dir === 'desc') {
//       return aPop > bPop ? -1 : aPop < bPop ? 1 : 0;
//     } else {
//       return aPop < bPop ? -1 : aPop > bPop ? 1 : 0;
//     }
//   });
//   return arr;
// }
// console.log('Population:');
// console.log(sortArrObjPopulations(countriesData, 'asc'));

// const mostSpokenLanguages = (arr, count) => {
//   arr = arr.sort((a, b) => {
//     const aLangCount = a.languages.length;
//     const bLangCount = b.languages.length;
//     return aLangCount > bLangCount ? -1 : aLangCount < bLangCount ? 1 : 0;
//   });
//   const newArr = [];
//   for (let i = 0; i < count; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// };
// console.log(mostSpokenLanguages(countriesData, 10));
// const findDuplicates = (arr) => {
//   const counts = {};
//   const result = [];

//   arr.forEach((item) => {
//     if (counts[item]) {
//       counts[item] += 1;
//       return;
//     }
//     counts[item] = 1;
//   });

//   for (let prop in counts) {
//     const obj = {
//       country: prop,
//       count: counts[prop],
//     };
//     if (counts[prop] >= 2) {
//       result.push(obj);
//     }
//   }

//   return result;
// };

// const mostSpokenLanguages = (arr, n) => {
//   const allLanguages = [];
//   for (item of arr) {
//     for (lang of item.languages) {
//       allLanguages.push(lang);
//     }
//   }
//   const uniqueCounts = findDuplicates(allLanguages);
//   uniqueCounts.sort((a, b) => {
//     return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
//   });
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(uniqueCounts[i]);
//   }
//   return result;
// };
// console.log(mostSpokenLanguages(countriesData, 10));

// function mostPopulatedCountries(arr, n) {
//   const result = [];
//   arr = arr.sort((a, b) => {
//     return a.population > b.population
//       ? -1
//       : a.population < b.population
//       ? 1
//       : 0;
//   });
//   for (let i = 0; i < n; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(mostPopulatedCountries(countriesData, 3));

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

function initStatistics(data) {
  const result = {
    data: data,
    count: function () {
      let c = 0;
      this.data.forEach((i) => c++);
      return c;
    },
    sum: function () {
      return data.reduce((a, b) => a + b, 0);
    },
    min: function () {
      return Math.min(...data);
    },
    max: function () {
      return Math.max(...data);
    },
    range: function () {
      let output = [];
      let step = 1;
      for (let i = this.min(); i < this.max(); i += step) {
        output.push(i);
      }
      return output.length;
    },
    mean: function () {
      let arr = this.data;
      let count = arr.length;
      let total = arr.reduce((a, b) => a + b, 0);
      return Math.ceil(total / count);
    },
    median: function () {
      let values = this.data;
      if (values.length === 0) return 0;
      values.sort((a, b) => a - b);
      const half = Math.floor(values.length / 2);
      if (values.length % 2) {
        return values[half];
      }
      return (values[half - 1] + values[half]) / 2.0;
    },
    mode: function () {
      const arr = this.data;
      const mapping = {};
      for (let i = 0; i < arr.length; i++) {
        if (!mapping[arr[i]]) mapping[arr[i]] = 0;
        mapping[arr[i]] += 1;
      }
      const newArr = [];
      const keys = Object.keys(mapping);
      const values = Object.values(mapping);
      for (let i = 0; i < arr.length; i++) {
        newArr.push({ key: keys[i], value: values[i] });
      }
      const sortedArr = newArr.sort((a, b) =>
        a.value > b.value ? -1 : a.value < b.value ? 1 : 0
      );
      const result = `(${sortedArr[0].key}, ${sortedArr[0].value})`;

      return result;
    },
    variance: function () {
      const arr = this.data;
      if (!arr.length) return 0;

      const sum = arr.reduce((a, b) => a + b);
      const { length: num } = arr;
      const median = sum / num;
      let variance = 0;
      arr.forEach((num) => {
        variance += (num - median) * (num - median);
      });
      variance /= num;
      return variance;
    },
    standardDevi: function () {
      let variance = this.variance();
      return Math.sqrt(variance);
    },
    frequencyDist: function () {
      const arr = this.data;
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (obj[el] !== undefined) {
          obj[el] += 1;
        } else {
          obj[el] = 1;
        }
      }
      const result = [];
      const keys = Object.keys(obj);
      const values = Object.values(obj);
      for (let i = 0; i < arr.length; i++) {
        result.push({ key: keys[i], value: values[i] * 100 });
      }
      return result;
    },
  };
  return result;
}
const statistics = initStatistics(ages);

console.log('count:', statistics.count());
console.log('sum:', statistics.sum());
console.log('min:', statistics.min());
console.log('max:', statistics.max());
console.log('range:', statistics.range());
console.log('mean:', statistics.mean());
console.log('median:', statistics.median());
console.log('mode:', statistics.mode());
console.log('variance:', statistics.variance());
console.log('standardDevi:', statistics.standardDevi());
console.log('frequencyDist:', statistics.frequencyDist());
