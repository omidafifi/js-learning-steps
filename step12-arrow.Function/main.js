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

//

