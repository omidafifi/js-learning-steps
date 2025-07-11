// //Splice
// // let noten = [18, 15, 3, 20, 18.5];
// // console.log(noten);
// // for (const item of noten) {
// //   //->	•	وظیفه‌اش اینه که روی یک مجموعه (مثل آرایه یا رشته) حرکت کنه و به هر عنصر دسترسی بده.
// //   console.log(item); //-> 	•	هیچ کاری خودش انجام نمی‌ده مگر اینکه در داخلش دستوراتی بنویسی (مثلاً console.log())
// // }

// // let temp = 0;
// // for (const item2 of noten) {
// //   temp += item2;
// // }
// // console.log(temp);
// // let names = ["ali", " javad ", " mohammadreza ", "erfan"];
// // console.log(names);
// // // names.splice(1, 2);
// // // names.splice(1, 1);
// // // names.splice(2, 0), "milad", "hassan";
// // const middOfArray = names.length / 2;
// // names.splice(middOfArray, 0, "Omid", "Reza");
// // console.log(names);

// // let userNames = [
// //   "Omidrzaf@gmail.com",
// //   "Zahraafifi@gmail.com",
// //   "zahra.yzp@yahoo.com",   ==> for of (loop)
// // ];
// // for (const item of userNames) {
// //   console.log(item);
// // }
//Sum of array elements using a loop
// let noten = [10, 3, 6, 16, 13, 12, 20];
// let temp = 0;
// for (const itemNoten of noten) {
//   temp += itemNoten;
// }
// console.log(temp);

// let Noten = [19, 14, 20, 8, 12];
// let temp = 0;
// for (const item of Noten) {
//   temp += item;
// }
// let avrage = temp / Noten.length;
// console.log("مجموع اعداد", temp);
// console.log("میانگین اعداد", avrage);

// let scores = [23, 45, 74, 231, 7];
// let temp = 0;
// for (const element of scores) {
//   temp += element;
// }

// let avrage = temp / scores.length;

// console.log("مجموع اعداد", temp);
// console.log("میانگین اعداد", avrage);

// let scores = [23, 45, 74, 231, 7];
// let temp = 0;
// for (const element of scores) {
//   temp += element;
// }

// let avrage = temp / scores.length;

// console.log("مجموع اعداد", temp);
// console.log("میانگین اعداد", avrage);

// if (avrage >= 12) {
//   console.log("“قبول” ");
// } else {
//   console.log("“مردود”");
// }

// let scores = [23, 45, 74, 231, 7];
// let evenSum = 0;
// let oddSum = 0;

// for (const number of scores) {
//   if (number % 2 === 0) {
//     evenSum += number; // اگر زوج بود
//   } else {
//     oddSum += number; // اگر فرد بود
//   }
// }

// console.log("مجموع اعداد زوج:", evenSum);
// console.log("مجموع اعداد فرد:", oddSum);

// let infos = ["omid", "ahmadi", 22, 43];

// infos.splice(3, 1); // // ایندکس ۱ یعنی ، فقط یکی حذف کن
// // infos.splice(2, 1 , "ghanbar");  // // ایندکس ۱ یعنی ، فقط یکی حذف کن
// infos.splice(1, 0, "univercity");
// console.log(infos);
// 🧪 تمرین برات:

// 🔸 یه آرایه بساز به نام langs = ["HTML", "CSS", "JavaScript"]
// 🔸 کاری کن با splice() که بین CSS و JavaScript، آیتم "React" اضافه بشه
langs = ["HTML", "CSS", "JavaScript"];

langs.splice(2, 0, "react");
console.log(langs);
