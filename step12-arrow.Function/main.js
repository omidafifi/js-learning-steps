//Arrow Function
//Arrow Function یعنی نوع جدیدتر و خلاصه‌تری برای تعریف تابع در جاوااسکریپت، که با فلش => نوشته می‌شه.

// function sayhello() {
//   console.log("سلام");
// }
// sayhello();

// const sayhello = () => {
//   console.log("سلام");
// };

// sayhello();
const userName = (firstName, lastName) => {
  return firstName + ` ` + lastName;
};
let result = userName("omidreza", "afifi");
console.log(result);

const greetUser = (name) => {
  console.log("Guten Tag Herr" + ` ` + name + " !");
};

greetUser("Afifi");

//Arrow Function با نوشتار کوتاه‌تر (Short Syntax)

// const multiply = (a, b) => {
//   return a * b;
// };
const multiply = (a, b) => a * b;

//تابعی بنویس به صورت کوتاه‌ترین شکل ممکن به نام square که یک عدد بگیره و مربعش رو برگردونه
const square = (number) => number ** 2;
let result2 = square(5);
console.log(result2);

const greetPerson = (name) => "Hello dear " + name;
let result3 = greetPerson("Omidreza");
console.log(result3);
//Local Variable Global Variable)
let globalName = "Ali"; // متغیر عمومی

function showMessage() {
  let localMessage = "Hi"; // متغیر محلی
  console.log(localMessage + " " + globalName);
}

showMessage(); // Hi Ali
console.log(globalName);     // ✔️
console.log(localMessage);   // ❌ خطا
//feat: practice arrow functions, short syntax, and variable scopes (global vs local)