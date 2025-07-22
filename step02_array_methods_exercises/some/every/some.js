// //some every findeindex

// //some
// let names = ["omidreza", "dorna ", "zahra", "ali"];

// let some1 = names.some((item) => item === "zahra");
// console.log(some1);
// //every
// let every1 = names.every(
//   (item) => item === "omidreza",
//   "dorna ",
//   "zahra",
//   "ali"
// );
// console.log(every1);

// //findindex
// let names1 = ["omidreza", "dorna", "zahra", "ali"];

// let index = names1.findIndex((item) => item === "zahra");

// console.log(index); // ➜ 2
console.log("---------------");

// let names = ["omidreza", "dorna ", "zahra", "ali"];

// let newSome = names.some((element) => element === "dorna");
// console.log(newSome);
let numbers = [3, 8, 15, 2];

let someNum = numbers.some((item) => item >= 18);
console.log(someNum);

const names = ["Ali", "Omid", "Nima"];

const hasOmid = names.some((name) => name === "Omid");
console.log(hasOmid);
