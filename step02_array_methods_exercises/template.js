// // //Template String or Template Literal Template String نوعی روش چاپ متغیرها و متن‌ها به‌شکل تمیز و خوانا هست که با بک‌تیک (`) نوشته می‌شه، نه با “ ی
// // console.log(`ادامه متن   {33}$   متن ثابت   `);
// // let firstName = "omidreza";
// // let lastName = "Afifi";
// // let age = 33;
// // console.log(`${firstName} ${lastName} ${age} ${`Jahre alt`}`);
// // //
// // // 🟩 تمرین: مقدار Boolean و شرط if
// // // 	1.	یک متغیر به نام isLoggedIn بساز و مقدار اولیه‌ی آن را false قرار بده.
// // // 	2.	با استفاده از شرط if بررسی کن:
// // // اگر کاربر وارد شده باشد، پیام «خوش آمدید به داشبورد» نمایش داده شود.
// // // در غیر این صورت، پیام «لطفاً وارد شوید» نمایش داده شود.
// // // 	3.	مقدار isLoggedIn را تغییر بده به true.
// // // 	4.	شرط را دوباره بررسی و اجرا کن.

// // let isLoggedIn = false;
// // if (isLoggedIn) {
// //   console.log("خوش آمدید به داشبورد");
// // } else {
// //   console.log("لطفاً وارد شوید");
// // }
// // isLoggedIn = true;
// // if (isLoggedIn) {
// //   console.log("خوش آمدید به داشبورد");
// // } else {
// //   console.log("لطفاً وارد شوید");
// // }
// // //🟪 تمرین: آرایه‌ها (Array)
// // // 	1.	یک آرایه به نام colors بساز و سه رنگ "green", "blue", "red" داخل آن قرار بده.
// // // 	2.	با استفاده از ایندکس، رنگ دوم (یعنی "blue") را در console چاپ کن.
// // // 	3.	با استفاده از متد push(), رنگ "yellow" را به انتهای آرایه اضافه کن.
// // // 	4.	با استفاده از ویژگی length, تعداد عناصر آرایه را در console چاپ کن.
// // let colors = ["green", "blue", "red"];
// // console.log(colors[1]);
// // colors.push("yellow");
// // console.log(colors);
// // console.log(colors.length);

// // // 🟥 تمرین: حذف آخرین مقدار از آرایه با استفاده از pop()
// // // 	1.	یک آرایه به نام fruits تعریف کن و داخلش سه میوه مثل "apple", "banana", "orange" قرار بده.
// // // 	2.	با استفاده از pop(), آخرین میوه را از آرایه حذف کن و آن را در متغیری جدا به نام removedFruit ذخیره کن.
// // // 	3.	مقدار removedFruit را در console چاپ کن.
// // // 	4.	سپس خود آرایه fruits را در console چاپ کن تا ببینی که عنصر آخر حذف شده است.

// // // let fruits = ["apple", "banana", "orange"];
// // // let removedFruit = fruits.pop();
// // // console.log(removedFruit);
// // // console.log(fruits);

// // // تمرین مربوط به includes()

// // // تمرین:
// // // 	1.	یک آرایه به نام fruits تعریف کن که شامل "apple", "banana", "orange" باشد.
// // // 	2.	با استفاده از یک شرط if بررسی کن که آیا "banana" در آرایه وجود دارد یا نه.
// // // 	3.	اگر وجود داشت، در کنسول پیام "Banane ist im Korb" (یعنی «موز در سبد است») چاپ شود.
// // // 	4.	در غیر این صورت پیام "Banane ist nicht im Korb" چاپ شود.
// // // 	5.	همین بررسی را برای مقدار "grape" هم انجام بده.

// // let fruits = ["apple", "banana", "orange"];
// // if (fruits.includes("banana")) {
// //   console.log("Banane ist im Korb");
// // } else {
// //   console.log("Banane ist nicht im Korb");
// // }
// // if (fruits.includes("grape")) {
// //   console.log("grape ist im Korb");
// // } else {
// //   console.log("grape ist nicht im Korb");
// // }
// // pop;
// // let value = ["sara", " Nazi ", "karim"];
// // let removedName = value.pop();
// // alert(removedName);
// // //
// // let heute = ["html", "css", "javascript"];
// // if (heute.includes("javascript")) {
// //   console.log("JavaScript ist verfügbar");
// // } else {
// //   console.log("nix");
// // }
// خیلی خوب Omidreza جان، الان برات دقیقاً همون چیزی که خواستی رو آماده می‌کنم:
// ✅ فقط سؤالات تستی واقعی (چهار گزینه‌ای)
// ❌ بدون کد و بدون “حل‌کردنی”
// فقط مفهومی، کاربردی و برای سنجش دقیق دانش آرایه‌ها.

// ⸻

// 🧠 آزمون تستی مفهومی آرایه‌ها (JavaScript Arrays)

// ⸻

// ❓ سؤال ۱:

// کدام گزینه در مورد آرایه‌ها در جاوااسکریپت صحیح است؟

// a) آرایه‌ها فقط می‌توانند عدد ذخیره کنند
// b) آرایه‌ها نوع داده ندارند
//. c) آرایه‌ها به صورت object در نظر گرفته می‌شوند
// d) آرایه‌ها نمی‌توانند متد داشته باشند

// ⸻

// ❓ سؤال ۲:

// در آرایه‌ای با ۴ عنصر، آخرین عنصر در چه اندیسی قرار دارد؟

// .a) 3
// b) 4
// c) 5
// d) -1

// ⸻

// ❓ سؤال ۳:

// کدام متد عنصر جدیدی به انتهای آرایه اضافه می‌کند؟

// a) unshift()
// b) shift()
// .c) push()
// d) pop()

// ⸻

// ❓ سؤال ۴:

// کدام متد عنصر اول آرایه را حذف می‌کند؟

// a) pop()
// .b) shift()
// c) remove()
// d) splice()

// ⸻

// ❓ سؤال ۵:

// اگر بخواهیم از روی یک آرایه، آرایه‌ی جدیدی تولید کنیم، کدام متد مناسب‌تر است؟

// .a) map()
// b) forEach()
// c) push()
// d) pop()

// ⸻

// ❓ سؤال ۶:

// کدام متد اولین مقدار مطابق شرط را پیدا می‌کند و برمی‌گرداند؟

// a) filter()
// b) map()
// c) find()
//. d) forEach()

// ⸻

// ❓ سؤال ۷:

// اگر بخواهیم تمام عناصر غیریکسان با یک شرط را نگه داریم، از چه متدی استفاده می‌کنیم؟

// a) find()
// b) pop()
// .c) filter()
// d) some()

// ⸻

// ❓ سؤال ۸:

// اگر بخواهیم روی هر عنصر از آرایه یک بار عملیات انجام دهیم، اما چیزی برنگردد، از کدام متد استفاده می‌کنیم؟

// a) map()
//. b) forEach()
// c) filter()
// d) includes()

// ⸻

// ❓ سؤال ۹:

// کدام متد بررسی می‌کند که آیا یک مقدار در آرایه وجود دارد یا نه؟

// a) search()
// b) contains()
// .c) includes()
// d) in()

// ⸻

// // ❓ سؤال ۱۰:

// // اگر آرایه‌ای داشته باشیم با ۶ عنصر و بنویسیم: arr.length = 0، چه اتفاقی می‌افتد؟

// // a) فقط مقدارها پاک می‌شوند اما ساختار می‌ماند
// // b) فقط مقدار آخر حذف می‌شود
// // .c) کل آرایه پاک می‌شود
// // d) خطا رخ می‌دهد

// //Array Pre-Assessment

// let languages = ["JavaScript", "Python", "Go"]; //Richtig
// console.log(languages.push("Rust")); //Richtig
// // languages.push("Rust");
// // console.log(languages); ==> es war besser
// // console.log(languages.slice[0]);//falsh
// console.log(languages.shift);
// console.log(languages[0]);
// console.log(languages.length); //Richtig
// // console.log(languages.push["I like"]);//falsh
// languages.forEach((lang) => {
//   console.log(
//     `I like ${"JavaScript"}`,
//     `I like ${"JavaScriPythonpt"}`,
//     `I like ${"Go"}`,
//     `I like ${"Rust"}`
//   );
// });
// console.log(languages);
// let languages1 = ["JavaScript", "Python", "Go", "Rust"];
// let shortNames = languages1.filter((lang) => lang.length < 5);
// console.log(shortNames);
// console.log(languages.includes("Python")); //Rfichtig

// let fruits = ["apple", "banana", "orange", 32, true];
// let colors = ["red", "blue", "orange", 4, true];
// console.log(fruits.length);
// console.log(colors.length);
// let arr = new Array();
// console.log(arr);
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
const userAges = [22, 32, 54, 7, 21, 3, 22];
let userAges1 = ["omid", "Ali"];
console.log(userAges);
const places = [`School`, `Restaurant`, `shop`, `university`];
console.log(places);
console.log(userAges1[0], places[0]);
console.log(places.length);
console.log(places.at(-1));
console.log(userAges.push(44));
console.log(userAges);
console.log(userAges.pop());
console.log(userAges);
userAges.shift();
userAges.unshift("test");
console.log(userAges);

// shift  <-                    pop ->
//            0,1,2,3,4,5,6,7,8
// unshift ->                  push <-

console.log(userAges);
console.log(userAges);
console.log(userAges);
//faghat shift va pup hast ke vaghti ma hazf mikonim mitunim un mored ro begirim
