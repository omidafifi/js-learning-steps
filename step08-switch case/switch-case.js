// //Switch Case in JavaScript
// //switch bedeutet auf persich «تعویض کردن» یا «انتخاب کردن از بین گزینه‌ها»
// //در برنامه‌نویسی، switch یعنی یک ساختار که بر اساس مقدار یک متغیر یا عبارت، یکی از چند مسیر ممکن را انتخاب می‌کند و اجرا می‌کند
// // case یعنی «حالت» یا «گزینه خاص».
// // درون switch، هر case یک مقدار خاص است که اگر مقدار متغیر برابر آن بود، کد مربوط به آن اجرا می‌شود.
// // let number = 0;

// // if (number > 0) {
// //   console.log("this number is positiv");
// // } else if (number < 0) {
// //   console.log("this number is negativ");
// // } else {
// //   console.log("this number is zero");
// // }
// // console.log(typeof number === "number");
// // if (typeof number === "number") {
// //   console.log("this is a number");
// // } else if (number >= 0) {
// //   console.log("its not a number");
// // }
// let number = 4;

// if (number > 0) {
//   console.log("this number is positiv");
// } else if (number < 0) {
//   console.log("this number is negetiv");
// } else if (number === 0) {
//   console.log("this number is zero");
// } else {
//   console.log("final");
// }

// //chanllenge : check triangle
// const side1 = 5;
// const side2 = 5;
// const side3 = 5;
// if (side1 === side2 && side2 === side3) {
//   console.log("متساوی الاضلاع");
// } else if (side1 === side2 || side2 === side3 || side1 === side2) {
//   console.log("متساوی الساقین");
// } else {
//   console.log("nothing");
// }
// let name = "Omid";
// name = "Ali";
// //Switch Case
// switch (name) {
//   case "Omid":
//     console.log("you are Omid");
//     break;
//   case "Ali":
//     console.log("you are Ali");
//     break;
//   default:
//     console.log(" i dont know");
// }
// mishe goft sakhtar switch پشتیبانی از عملگرها (<, >, !==, …) nemitavan estefade kad

// سؤال تمرینی — تشخیص وضعیت هوا بر اساس کد

// یک متغیر به نام weatherCode تعریف کن که مقدار عددی از 1 تا 5 بگیره.
// با استفاده از ساختار switch...case مشخص کن که هر کد نشان‌دهنده چه وضعیتی از هواست و پیام مناسب را در کنسول چاپ کن.

// 🎯 معانی کدها:
// 	•	1 → ☀️ آفتابی
// 	•	2 → 🌤 نیمه‌ابری
// 	•	3 → ☁️ ابری
// 	•	4 → 🌧 بارانی
// 	•	5 → 🌩 طوفانی
// 	•	هر عدد دیگر → ❓ کد نامعتبر
let weatherCode = 4;
switch (weatherCode) {
  case 1:
    console.log("آفتابی");
    break;
  case 2:
    console.log("نیمه‌ابری");
    break;
  case 3:
    console.log("ابری");
    break;
  case 4:
    console.log("بارانی");
    break;
  case 5:
    console.log("طوفانی");
  default:
    console.log(" کد نامعتبر");
    break;
}
