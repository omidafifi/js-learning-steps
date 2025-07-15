// //for in ==> ich habe falsh gemacht und habe 3 Fehler
// // const USER = {
// //   firstName: "Omidreza",
// //   lastName: "Afifi",
// //   age: 34,
// // };
// // for (const key in USER) {
// //   console.log(key);
// //   console.log(USER[key]);
// // }
// // javab soale 1 ==> dar halghe for in maghadir object va name key ha peymayesh mishavad .
// //in javab dorost tar hast فقط کلیدهای (keys) یک آبجکت پیمایش می‌شن. اگر بخوای مقدارها رو هم ببینی، باید از object[key] استفاده کنی.
// //javabe soal 2 //
// const car = { brand: "Toyota", year: 2021 };
// for (const key in car) {
//   //   console.log(key);
//   console.log(car[key]);
//   //   console.log(car);
// }
// // khoruji in code brand . year  va toyota 2021
// //javabe soale 3
// console.log("...................");
// const book = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   pages: 464,
// };

// for (const key in book) {
//   console.log(key);
//   console.log(book[key]);
// }
// console.log("...................");

// //javabe soale 4
// // agar eshtebah nakonam nabayad for in vase array ha be kar ravad chun array ha ro ba for of pish mibarim vase halghe ha

// // javabe soale 5 => const obj = { a: 1, b: 2 };
// const obj = { a: 1, b: 2 };
// obj.c = 3;
// console.log("...................");

// Object.prototype.d = 4;

// for (const key in obj) {
//   console.log(key);
// }
// // in halat ro nakhundam ama saay mikonam javb ro bedam be nazaram khorujish mishe

// // a
// // b
// // c
// // d
// //feat: add for...in loop examples with key/value access and prototype edge case
// //every() چه کاری انجام می‌دهد و چه زمانی false می‌دهد؟
// let scores = [18, 20, 19];
// console.log(scores.every((s) => s >= 10));
// console.log(scores.every((s) => s > 18));
//

// تمرین ۱

// یک آرایه از اعداد به صورت زیر داری:

const numbers = [12, 25, 33, 45, 27];
console.log(numbers.every((n) => n >= 10));

// با استفاده از متد .every() بررسی کن که آیا همه اعداد آرایه بزرگ‌تر یا مساوی 10 هستند یا نه؟

// ⸻

// تمرین ۲

// آرایه‌ای از رشته‌ها داریم:

const names = ["Ali", "Sara", "Nima", ""];
console.log(names.every((n) => !n === null));
// با .every() چک کن که آیا هیچ‌کدام از اسامی خالی نیستند (یعنی رشته‌ی خالی در آرایه نباشد).

// ⸻

// تمرین ۳

// آرایه‌ای از نمرات دانش‌آموزان:

const grades = [18, 20, 15, 19, 14];
console.log(
  grades.every((g) => (g > 14 ? "درست است" : "نمرات به فلان دلیل  رد شده است "))
);

// بررسی کن آیا همه نمرات بالاتر از 14 هستند یا نه؟ اگر نیست، دلیلش را در کنسول توضیح بده.

// ⸻

// تمرین ۴

// آرایه‌ای از اشیاء که وضعیت سفارش‌ها را نگهداری می‌کند:

const orders = [
  { id: 1, delivered: true },
  { id: 2, delivered: true },
  { id: 3, delivered: false },
];
console.log(orders.every((or) => or === true));
// با .every() چک کن که آیا همه سفارش‌ها تحویل داده شده‌اند یا خیر؟

// ⸻

// تمرین ۵ (چالش)

// یک آرایه شامل چند مقدار مختلف (اعداد و رشته‌ها):

const mixed = [10, "20", 30, "40", 50];
console.log(mixed.every((mi) => mi === number));

// بررسی کن که آیا همه عناصر آرایه نوع داده عدد (number) هستند یا نه؟

// ⸻
