// //do / do-while تا زمانی که
// Add loop exercises with for, while, and do-while + prime number check & even/odd logic
// //تا زمانی که ما اون شرط رو میدیم برقرار باشه
// // حلقه for  مناسب وقتی تعداد دفعات تکرار از قبل مشخصه
// //  همه چیز در یک خطه: مقدار اولیه، شرط، تغییر

// let input = 7;
// let temp = 0;
// for (let counter = 0; counter <= input; counter++) {
//   if (input % counter === 0) {
//     temp += 1;
//   }
// }
// if (temp === 2) {
//   console.log("این عدد اول است", input);
// }
// // مناسب وقتی نمی‌دونی چند بار قراره تکرار بشه
// // 🔹 اول شرط چک میشه، اگه درست بود → بدنه اجرا میشه
// // 🔹 اگه شرط از اول غلط باشه → اصلاً اجرا نمیشه

// let counter = 0;
// while (counter <= 10) {
//   console.log("Counter :", counter);
//   counter++;
// }

// // 📌 مناسب وقتی می‌خوای بدنه‌ی حلقه حداقل یک بار حتماً اجرا بشه
// // 🔹 شرط بعد از اجرای بدنه بررسی میشه
// // 🔹 حتی اگه شرط غلط باشه، حداقل یک بار اجرا میشه

// let index = 0;

// do {
//   console.log("Counter :", index);
//   index++;
// } while (index <= 10);

// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log("thus number is even :", i);
//   } else {
//     console.log("thus number is odd :", i);
//   }
// }

// for (let num = 2; num <= 20; num++) {
//   let count = 0;

//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }f

//   if (count === 2) {
//     console.log("عدد اول:", num);
//   }
// }

// for (num = 1; num <= 10; num++) {
//   console.log("num :", num);
// }

// console.log("با استفاده از for، مجموع تمام عددهای فرد بین ۱ تا ۲۵ را حساب کن.");
// for (let i = 0; i <= 25; i++) {
//   if (i % 2 === 0) {
//     console.log("This number is even :", i);
//   } else {
//     console.log("This number is odd :", i);
//   }
// }
//✅ تمرین 3:

// با استفاده از حلقه while، اعداد ۱۰ تا ۱ را معکوس چاپ کن.

let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}
