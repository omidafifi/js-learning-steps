//Template String or Template Literal Template String نوعی روش چاپ متغیرها و متن‌ها به‌شکل تمیز و خوانا هست که با بک‌تیک (`) نوشته می‌شه، نه با “ ی
console.log(`ادامه متن   {33}$   متن ثابت   `);
let firstName = "omidreza";
let lastName = "Afifi";
let age = 33;
console.log(`${firstName} ${lastName} ${age} ${`Jahre alt`}`);
//
// 🟩 تمرین: مقدار Boolean و شرط if
// 	1.	یک متغیر به نام isLoggedIn بساز و مقدار اولیه‌ی آن را false قرار بده.
// 	2.	با استفاده از شرط if بررسی کن:
// اگر کاربر وارد شده باشد، پیام «خوش آمدید به داشبورد» نمایش داده شود.
// در غیر این صورت، پیام «لطفاً وارد شوید» نمایش داده شود.
// 	3.	مقدار isLoggedIn را تغییر بده به true.
// 	4.	شرط را دوباره بررسی و اجرا کن.

let isLoggedIn = false;
if (isLoggedIn) {
  console.log("خوش آمدید به داشبورد");
} else {
  console.log("لطفاً وارد شوید");
}
isLoggedIn = true;
if (isLoggedIn) {
  console.log("خوش آمدید به داشبورد");
} else {
  console.log("لطفاً وارد شوید");
}
//🟪 تمرین: آرایه‌ها (Array)
// 	1.	یک آرایه به نام colors بساز و سه رنگ "green", "blue", "red" داخل آن قرار بده.
// 	2.	با استفاده از ایندکس، رنگ دوم (یعنی "blue") را در console چاپ کن.
// 	3.	با استفاده از متد push(), رنگ "yellow" را به انتهای آرایه اضافه کن.
// 	4.	با استفاده از ویژگی length, تعداد عناصر آرایه را در console چاپ کن.
let colors = ["green", "blue", "red"];
console.log(colors[1]);
colors.push("yellow");
console.log(colors);
console.log(colors.length);

// 🟥 تمرین: حذف آخرین مقدار از آرایه با استفاده از pop()
// 	1.	یک آرایه به نام fruits تعریف کن و داخلش سه میوه مثل "apple", "banana", "orange" قرار بده.
// 	2.	با استفاده از pop(), آخرین میوه را از آرایه حذف کن و آن را در متغیری جدا به نام removedFruit ذخیره کن.
// 	3.	مقدار removedFruit را در console چاپ کن.
// 	4.	سپس خود آرایه fruits را در console چاپ کن تا ببینی که عنصر آخر حذف شده است.

// let fruits = ["apple", "banana", "orange"];
// let removedFruit = fruits.pop();
// console.log(removedFruit);
// console.log(fruits);

// تمرین مربوط به includes()

// تمرین:
// 	1.	یک آرایه به نام fruits تعریف کن که شامل "apple", "banana", "orange" باشد.
// 	2.	با استفاده از یک شرط if بررسی کن که آیا "banana" در آرایه وجود دارد یا نه.
// 	3.	اگر وجود داشت، در کنسول پیام "Banane ist im Korb" (یعنی «موز در سبد است») چاپ شود.
// 	4.	در غیر این صورت پیام "Banane ist nicht im Korb" چاپ شود.
// 	5.	همین بررسی را برای مقدار "grape" هم انجام بده.

let fruits = ["apple", "banana", "orange"];
if (fruits.includes("banana")) {
  console.log("Banane ist im Korb");
} else {
  console.log("Banane ist nicht im Korb");
}
if (fruits.includes("grape")) {
  console.log("grape ist im Korb");
} else {
  console.log("grape ist nicht im Korb");
}
