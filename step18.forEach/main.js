//forEachs Method
// // متد forEach() روی آرایه اجرا می‌شه و به ازای هر عنصر آرایه، یک تابع (callback) رو صدا می‌زنه.
// array.forEach((element) => {
//   //دستوراتی که برای هر عنصری انجام میشود
// });
let number = [1, 2, 3, 4];
number.forEach((element) => {
  console.log("number:", element);
});

let names = ["Omidreza", "hassan", " Mohammad"];
names.forEach((element) => {
  console.log("سلام خدا بر :", element);
});

let langs = ["Node.js", "CSS", "JS"];
langs.forEach((element) => {
  console.log("من در حال یادگیری HTML هستم و… :", element);
});
