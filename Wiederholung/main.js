// feat: structure every() exercises with clear start/end markers for better learning and review

// // //for in ==> ich habe falsh gemacht und habe 3 Fehler
// // // const USER = {
// // //   firstName: "Omidreza",
// // //   lastName: "Afifi",
// // //   age: 34,
// // // };
// // // for (const key in USER) {
// // //   console.log(key);
// // //   console.log(USER[key]);
// // // }
// // // javab soale 1 ==> dar halghe for in maghadir object va name key ha peymayesh mishavad .
// // //in javab dorost tar hast فقط کلیدهای (keys) یک آبجکت پیمایش می‌شن. اگر بخوای مقدارها رو هم ببینی، باید از object[key] استفاده کنی.
// // //javabe soal 2 //
// // const car = { brand: "Toyota", year: 2021 };
// // for (const key in car) {
// //   //   console.log(key);
// //   console.log(car[key]);
// //   //   console.log(car);
// // }
// // // khoruji in code brand . year  va toyota 2021
// // //javabe soale 3
// // console.log("...................");
// // const book = {
// //   title: "Clean Code",
// //   author: "Robert C. Martin",
// //   pages: 464,
// // };

// // for (const key in book) {
// //   console.log(key);
// //   console.log(book[key]);
// // }
// // console.log("...................");

// // //javabe soale 4
// // // agar eshtebah nakonam nabayad for in vase array ha be kar ravad chun array ha ro ba for of pish mibarim vase halghe ha

// // // javabe soale 5 => const obj = { a: 1, b: 2 };
// // const obj = { a: 1, b: 2 };
// // obj.c = 3;
// // console.log("...................");

// // Object.prototype.d = 4;

// // for (const key in obj) {
// //   console.log(key);
// // }
// // // in halat ro nakhundam ama saay mikonam javb ro bedam be nazaram khorujish mishe

// // // a
// // // b
// // // c
// // // d
// // //feat: add for...in loop examples with key/value access and prototype edge case
// // //every() چه کاری انجام می‌دهد و چه زمانی false می‌دهد؟
// // let scores = [18, 20, 19];
// // console.log(scores.every((s) => s >= 10));
// // console.log(scores.every((s) => s > 18));
// //

// // تمرین ۱

// // یک آرایه از اعداد به صورت زیر داری:

// const numbers = [12, 25, 33, 45, 27];
// // console.log(numbers.every((n) => n >= 10));

// // با استفاده از متد .every() بررسی کن که آیا همه اعداد آرایه بزرگ‌تر یا مساوی 10 هستند یا نه؟

// // ⸻

// // تمرین ۲

// // آرایه‌ای از رشته‌ها داریم:

// const names = ["Ali", "Sara", "Nima", ""];
// // console.log(names.every((n) => !n === null));// falsh
// // Corrected version with explanation:
// // The original check is incorrect because '!n === null' is always false.
// // The proper way is to check if strings are not empty:
// // console.log(names.every((n) => n !== ""));
// // or equivalently:
// // console.log(names.every((n) => n.length > 0));
// console.log(names.every((n) => n !== "")); // richtig
// console.log(names.every((n) => n.length > 0)); // || richtigیا برای بررسی اینکه همه رشته‌ها طول مثبت داشته باشند:
// // با .every() چک کن که آیا هیچ‌کدام از اسامی خالی نیستند (یعنی رشته‌ی خالی در آرایه نباشد).

// // ⸻

// // تمرین ۳

// // آرایه‌ای از نمرات دانش‌آموزان:

// const grades = [18, 20, 15, 19, 14];
// // console.log(
// //   grades.every((g) => (g > 14 ? "درست است" : "نمرات به فلان دلیل  رد شده است "))
// // ); ==>\\ false
// // console.log(grades.every((g) => (g > 14 ? true : false)));//==> inam kheili gherie manteghi hast ba voijude in ke kar mikone

// // Corrected and improved version:
// // Use every to check if all grades are above 14 and then print a meaningful message:
// const result = grades.every((g) => g > 14);
// if (result) {
//   console.log("✅ همه نمرات بالاتر از ۱۴ هستند.");
// } else {
//   console.log("❌ برخی از نمرات ۱۴ یا پایین‌تر هستند.");
// }

// // بررسی کن آیا همه نمرات بالاتر از 14 هستند یا نه؟ اگر نیست، دلیلش را در کنسول توضیح بده.

// // ⸻

// // تمرین ۴

// // آرایه‌ای از اشیاء که وضعیت سفارش‌ها را نگهداری می‌کند:

// const orders = [
//   { id: 1, delivered: true },
//   { id: 2, delivered: true },
//   { id: 3, delivered: false },
// ];
// // console.log(orders.every((or) => or === true));// falsh geschriben
// // Corrected version:
// // Check if all orders have delivered property true:
// console.log(orders.every((or) => or.delivered === true));
// // با .every() چک کن که آیا همه سفارش‌ها تحویل داده شده‌اند یا خیر؟

// // ⸻

// // تمرین ۵ (چالش)

// // یک آرایه شامل چند مقدار مختلف (اعداد و رشته‌ها):

// const mixed = [10, "20", 30, "40", 50];
// // console.log(mixed.every((mi) => mi === number));// fasle
// // Corrected version:
// // Use typeof to check if all elements are numbers:
// console.log(mixed.every((mi) => typeof mi === "number"));
// //type of yadet raft
// // بررسی کن که آیا همه عناصر آرایه نوع داده عدد (number) هستند یا نه؟

// // ⸻

// ✅ بریم سراغ چند تمرین عمیق‌تر؟ (سطح متوسط)

// تمرین ۶:

// یک آرایه از آبجکت‌های کاربران داریم:

// const users = [   az inja ta
//   { username: "ali", active: true },
//   { username: "sara", active: true },
//   { username: "reza", active: false },
// ];
// const isLoggedIn = users.every((user) => user.active === true);
// console.log(isLoggedIn);
// if (isLoggedIn !== true) {
//   console.log(isLoggedIn.every((user) => user.active === false));
// }
// با .every() بررسی کن آیا همه کاربران فعال هستند یا نه. اگر نه، نام کاربری کسانی که فعال نیستند را چاپ کن.
//  inja eshtebah bud
// const users = [
//   { username: "ali", active: true },
//   { username: "sara", active: true },
//   { username: "reza", active: false },
// ];

// const isLoggedIn = users.every((user) => user.active === true);
// console.log("آیا همه فعال هستند؟", isLoggedIn);

// // اگر همه کاربران فعال نبودند، فقط کاربران غیرفعال را نمایش بده
// if (!isLoggedIn) {
//   console.log("کاربران غیرفعال:");
//   users.forEach((user) => {
//     // اگر کاربر active نبود، نام او را چاپ کن
//     if (!user.active) {
//       console.log("- " + user.username);
//     }
//   });
// }
// // ⸻یک آرایه از کاربران داریم:
// const people = [
//   { name: "Ali", active: true },
//   { name: "Reza", active: true },
//   { name: "Sara", active: false },
// ];

// const isAllActiv = people.every((person) => person.active === true);
// console.log(isAllActiv);

// if (!isAllActiv) {
//   console.log("Die Leute sind nicht aktiv:");
//   people.forEach((person) => {
//     if (!person.active) {
//       console.log("-  " + person.name, "ist nicht activ");
//     }
//   });
// }
// شما یک آرایه از کاربران دارید. هر کاربر این ویژگی‌ها را دارد:
// const users = [
//   { name: "ali", emailVerified: true },
//   { name: "sara", emailVerified: false },
//   { name: "nima", emailVerified: true },
// ];

// const isConfirmed = users.every((user) => user.emailVerified === true);

// if (isConfirmed) {
//   console.log("✅ همه کاربران تاییدشده‌اند.");
// } else {
//   console.log("❌ کاربر(ان) تاییدنشده:");
//   users.forEach((user) => {
//     if (!user.emailVerified) {
//       console.log("- " + user.name);
//     }
//   });
// }
// تمرین ۷:

// تفاوت every() و some() را در مثال زیر تحلیل کن:

// const ages = [25, 18, 40, 17];

// // با every چک کن که آیا همه افراد بالغ هستند؟
// // با some چک کن که آیا حداقل یک نفر نابالغ هست؟

// ⸻

// تمرین ۸:

// یک تابع areAllPositive(numbers) بنویس که یک آرایه از اعداد بگیرد و بررسی کند که آیا همه عددها مثبت‌اند یا نه. اگر نبودند، بنویسد: “اعداد منفی وجود دارد”.

// ⸻

//
// const users = [
//   { name: "ali", emailVerified: true },
//   { name: "sara", emailVerified: false },
//   { name: "nima", emailVerified: true },
// ];
// const Verfi = users.every((person) => person.emailVerified === true);
// console.log(Verfi);
// users.forEach((element) => {
//   if (person.emailVerified === true) {
//     console.log("همه تایید کردن");
//   } else {
//     console.log("تأیید نشده ❌", element.name);
//   }
// // });
// const users = [
//     { name: "ali", emailVerified: true },
//     { name: "sara", emailVerified: false },
//     { name: "nima", emailVerified: true },
//   ];

//   // آیا همه تایید شده‌اند؟
//   const Verfi = users.every((person) => person.emailVerified === true);
//   console.log("آیا همه تاییدشده‌اند؟", Verfi);

//   if (Verfi) {
//     console.log("✅ همه تایید کرده‌اند.");
//   } else {
//     console.log("❌ کاربرانی که تایید نکرده‌اند:");
//     users.forEach((element) => {
//       if (!element.emailVerified) {
//         console.log("- " + element.name);
//       }
//     });
//   }
// const users = [
//   { name: "Omid", active: true },
//   { name: "Ali", active: true },
//   { name: "Sara", active: false },
// ];
// const result = users.every((isActiv) => isActiv === true);
// console.log(result);

// users.forEach((user) => {
//   if (!result) {
//     console.log(user.name);
//   }
// });

// let user = {
//   firstName: "omidreza",
//   lastName: "afifi",
//   age: 34,
// };
// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }
// //
// feat: add exercise to check all users emailVerified using every() with conditional messaging
// یک آرایه به نام temperatures داریم که شامل دمای روزهای یک هفته است.
// بررسی کن که آیا همه دماها بیشتر از صفر هستند یا نه.
const temperatures = [5, 12, 8, 14, 0, 7, 10];
const result = temperatures.every((item) => item > 0);
console.log(result);
