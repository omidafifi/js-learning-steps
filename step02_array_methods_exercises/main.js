//some every findeindex

//some
let names = ["omidreza", "dorna ", "zahra", "ali"];

let some1 = names.some((item) => item === "zahra");
console.log(some1);
//every
let every1 = names.every(
  (item) => item === "omidreza",
  "dorna ",
  "zahra",
  "ali"
);
console.log(every1);

//findindex
let names1 = ["omidreza", "dorna", "zahra", "ali"];

let index = names1.findIndex((item) => item === "zahra");

console.log(index); // ➜ 2
