// 🟦 تمرین 1 – let و const
let city_step1 = "Berlin";
console.log(city_step1);
const country_step1 = "Deutschland";
console.log(country_step1);
city_step1 = "Hamburg";
console.log(city_step1);

// 🟨 تمرین 2 – string و number
const firstName_step2 = "Omidreza";
const lastName_step2 = "Afifi";
let age_step2 = 33;
console.log(`${firstName_step2} ${lastName_step2} ${age_step2}`);

// 🟩 تمرین 3 – Boolean و if
let isLoggedIn_step3 = true;
if (isLoggedIn_step3) {
  console.log("Welcome");
} else {
  console.log("You are logged out");
}

// 🟪 تمرین 4 – آرایه و length
let colors_step4 = ["green", "blue", "red"];
console.log(colors_step4[1]);
colors_step4.push("yellow");
console.log(colors_step4);
console.log(colors_step4.length);

let fruits_step4 = ["apple", "banana"];
fruits_step4.push("orange");
console.log(fruits_step4);
console.log(fruits_step4.length);

// 🟥 تمرین 5 – includes
let names_step5 = ["omidreza", "Mohammad hossein", "Mehdi"];
if (names_step5.includes("omidreza")) {
  console.log("یافت شد");
} else {
  console.log("وجود ندارد");
}

// --------------
// 🟩 ارزیابی تمرین‌ها
// --------------
// تمرین ۱: let و const
// • ساخت متغیرها، تغییر مقدار، و چاپ → کامل و درست
// نمره: 1 / 1

// تمرین ۲: string, number, template string
// • تعریف متغیرها و چاپ جمله → صحیح
// نمره: 1 / 1

// تمرین ۳: Boolean و if
// • تعریف isLoggedIn، شرط و پیام مناسب → خوب اجرا شده
// نمره: 0.8 / 1

// تمرین ۴: آرایه، push, length
// • استفاده درست از متدهای آرایه → بعد از اصلاحات درست انجام شده
// نمره: 0.7 / 1

// تمرین ۵: includes و شرط
// • شرط includes به‌درستی نوشته شده
// نمره: 0.7 / 1

// -------------------
// جمع‌بندی نهایی:
// مجموع نمرات: 4.2 از 5 🌟
