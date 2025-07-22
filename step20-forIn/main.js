// //For in
// // for...in یک حلقه مخصوص پیمایش کلیدهای (keys) یک Object است.
// // let person = {
// //   name: "omid",
// //   age: 34,
// //   city: "shiraz",
// // };
// // for (const key in person) {
// //   console.log(key);
// // }

// let user = {
//   name: "Omid",
//   age: 34,
// };
// console.log(user.name);

// const codes = {
//   98: "IRI",
//   44: "UK",
//   1: "USA",
// };
// console.log("98" in codes);
// for (const code in codes) {
//   console.log("+" + code, ":", codes[code]);
// }

// // nokte 2 object va 2 ta array ro nemishe ba ham moghayese kard = false mide be ma

// // console.log([] == []);
// // console.log({} == {});
// //feat: add for...in loop examples and object key checks using 'in' operator

const USERS = {
  firname: "omidreza",
  lastname: "afifi",
  age: 34,
  work: "backend developer",
};

for (const key in USERS) {
  console.log(key);
  console.log(USERS[key]);
}
