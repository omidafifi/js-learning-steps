//functions
// function sayHello() {
//   console.log("Hi there ");
// }
// sayHello();

// pas 1 function ba kalame kelidi fuction shoru mishe jeloye un bayad parantez baz va baste hatman bashe ke dar un parameter haye ma gharar migire va dar dele fucnction ma ham dasturat ke bayesti amal shavad gharar migire
// va nokte mohem in ke hatman bayad baadesh function ro seda zad chejuri in ke esme function ro miyarim va hatman bayesti in () dar jelo function gharar girad
// function name(params) {
//har tabe bayad 1 kar ro anjam bede maslan faghat adade aval ro bayad peyda kone

// }
// name==>();
// function log(message) {
//   console.log(message);
// }
// log("omid is here");
// let userInput = 0;
// let temp = 0;
// function primeNumber(userInput) {
//   if (typeof userInput === "number" && userInput > 1) {
//     let temp = 0;
//     for (let i = 1; i <= userInput; i++) {
//       if (userInput % i === 0) {
//         temp++;
//       }
//     }

//     if (temp === 2) {
//       console.log("✅ عدد اول است:", userInput);
//     } else {
//       console.log("❌ عدد اول نیست:", userInput);
//     }
//   } else {
//     console.log("⚠️ ورودی معتبر نیست:", userInput);
//   }
// }

// // تست تابع:
// primeNumber(1); // ❌ عدد اول نیست
// primeNumber(2); // ✅
// primeNumber(3); // ✅
// primeNumber(4); // ❌
// primeNumber(5); // ✅
// primeNumber(6); // ❌
// primeNumber(7); // ✅
// primeNumber("fda"); // ⚠️ ورودی نامعتبر
// تابع (Function) مجموعه‌ای از دستورهاست که یک کار خاص را انجام می‌دهد و فقط وقتی اجرا می‌شود که آن را «صدا» بزنی.
// function name() {
//   // دستورات
// }
// function sayHello() {
//   console.log("Mein Name ist Omidreza Afifi");
// }
// sayHello();
// 🎯 تمرین ۱:
// 	1.	تابعی بنویس به نام greetMe
// 	2.	داخل تابع، عبارت console.log("درود بر من!") را بنویس
// 	3.	سپس تابع را صدا بزن (اجرا کن)
// function greetMe() {
//   console.log("درود بر من!");
// }
// greetMe();
// درس ۲: پارامترها و آرگومان‌ها در توابع
//	•	پارامتر (Parameter) = متغیری که موقع تعریف تابع استفاده می‌کنی.
// •	آرگومان (Argument) = مقداری که موقع صدا زدن تابع بهش می‌دی.

// function welcomeUser(firstName) {
//   console.log("خوش آمدی " + firstName + "!");
// }
// welcomeUser("Omidreza");
// welcomeUser("Erfan");

// تابعی بنویس که دو عدد به عنوان ورودی (پارامتر) بگیره و جمع اون‌ها رو برگردونه (return کنه). سپس نتیجه‌ی برگشتی رو در خارج از تابع چاپ کن.
// function sayHello() {
//   console.log("hallo omidreza");

// }

// function sayMyName() {
//   return "omidreza";
// }
// let myMessage = sayMyName();
// console.log(myMessage);
// //functions

// function sayFullName() {
//   return "Afifi";
// }
// let lastName1 = sayFullName();
// console.log(lastName1);

// function sayHelloTo(name) {
//   return "سلام " + name + " عزیزم";
// }
// let firstName1 = sayHelloTo("omid");
// console.log(firstName1);

// function createProfile(name, age) {
//   return "اسم من " + name + "است و سن من " + age + "است";
// }
// let info = createProfile("امیدرضا", 34);
// console.log(info);

// function createEmail(firstName, lastName) {
//   return firstName + `.` + lastName + "@gmail.com";
// }
// let email = createEmail("omidreza", "afifi");
// console.log(email);
// function checkAge(name, age) {
//   if (age >= 18) {
//     return name + "بالغ است";
//   } else {
//     return name + "بالغ نیست";
//   }
// }
// let result1 = checkAge("omidreza", 34);
// console.log(result1);
// let result2 = checkAge("ali", 14);
// console.log(result2);

// function isEven(number) {
//   if (number % 2 === 0) {
//     return "this number is even ";
//   } else {
//     return "this number is odd ";
//   }
// }
// let num1 = isEven(2);
// console.log(num1);
// let num2 = isEven(3);
// console.log(num2);

// یک تابع به نام isPrime بنویس که یک عدد صحیح بگیرد و بررسی کند که آیا این عدد عدد اول هست یا خیر.
// 	•	عدد اول به عددی گفته می‌شود که فقط بر 1 و خودش بخش‌پذیر باشد.
// 	•	اگر عدد اول بود، تابع باید مقدار "عدد اول است" را برگرداند (با return)
// 	•	اگر عدد اول نبود، مقدار "عدد اول نیست" را برگرداند
// 	•	اگر ورودی معتبر نبود (مثلاً عدد کمتر از 2 یا عدد نبود)، پیام "ورودی معتبر نیست" برگردانده شود

// function isPrime(number) {
//   if (number % 1 === 1) {
//     return "این عدد اول است ";
//   } else if (number === undefined) {
//     return "ورودی معتبر نیست";
//   } else {
//     return "این عدد اول نیست ";   ==>< false
// }
// let num = isPrime();
// console.log(num);
// let num2 = isPrime(135211);
// console.log(num2);
function isPrime(number) {
  // بررسی اعتبار ورودی
  if (typeof number !== "number" || number < 2) {
    return "ورودی معتبر نیست";
  }

  // حلقه برای بررسی بخش‌پذیری عدد از 2 تا عدد منهای یک
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "این عدد اول نیست";
    }
  }

  // اگر در حلقه هیچ بخش‌پذیری پیدا نشد، عدد اول است
  return "این عدد اول است";
}

// تست تابع
let num1 = isPrime(135211);
console.log(num1);

let num2 = isPrime(135213);
console.log(num2);
//feat: implement isPrime function with input validation and prime check logic
//
// Function Declaration و Function Expression
function greet() {
  console.log("سلام Omidreza!");
}
greet(); // خروجی: سلام Omidreza!
//🔹 به این روش می‌گن Function Declaration (تعریف تابع)
// 🔹 تابع با کلمه function شروع می‌شه و مستقیماً یک نام بهش داده می‌شه
// 🔹 این نوع توابع hoist می‌شن (یعنی حتی قبل از خط تعریف هم می‌تونی صداشون بزنی
const greet = function () {
  console.log("سلام دوباره!");
};
greet(); // خروجی: سلام دوباره!
// 🔹 به این می‌گیم Function Expression (تابع به‌صورت عبارت)
// 🔹 تابع ناشناس (بدون نام) هست که داخل متغیر greet ذخیره شده
// 🔹 این توابع hoist نمی‌شن – یعنی باید قبل از صدا زدن حتماً تعریف شده باشن
// 🔹 معمولاً با const یا let تعریف می‌شن

// ⸻
// Declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Expression
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // 6
