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

let sum = 0;
for (let i = 0; i < numbers.length / 2; i++) {
  sum = sum + numbers[i];
}
console.log(sum);
