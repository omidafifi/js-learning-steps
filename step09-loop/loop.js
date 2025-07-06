// // loop
// //for loop

// // for (let i = 0; i <= 12; i++) {
// //   console.log(i, "i");
// // }

// // for (let i=23 ; i >17 ; i--){
// //   console.log(i);
// // }

// // سطح ۱ – پایه‌ای (مخصوص آشنایی با ساختار)
// // 1.	از ۰ تا ۱۰ را در کنسول چاپ کن.
// // 2.	از ۱۰ تا ۱ به‌صورت معکوس چاپ کن.
// // 3.	عددهای زوج بین ۰ تا ۲۰ را چاپ کن.
// // 4.	عددهای فرد بین ۱ تا ۱۵ را چاپ کن.

// // for (let number = 0; number <= 10; number++) {
// //   console.log(number, "number");
// // }
// // console.log("	از ۱۰ تا ۱ به‌صورت معکوس چاپ کن.");
// // for (let number1 = 10; number1 > 0; number1--) {
// //   console.log(number1, "number");
// // }
// // ✅ با استفاده از یک حلقه for، عددهای ۱ تا ۳۰ را بررسی کن
// // و برای هر عدد بنویس:
// // 	•	اگر زوج بود بنویس: X is even
// // 	•	اگر فرد بود بنویس: X is odd

// for (let num = 0; num >= 30; num++) {
//   if (num == % 0) {
//     console.log("this number is even :", num);
//   } else {
//     console.log("this number is odd :", num);
//   }
// }

// for (let i = 0; i <= 30; i++) {
//   if (i % 2 === 0) {
//     console.log(i, " this number is even");
//   } else if (i % 2 === 1) {
//     console.log(i, "this number is odd");
//   }
// }
// for (initialization , condition ,update ){ action to repeat }
//بدست آوردن اعداد تام
let input = 496;// عددی که می‌خوایم بررسی کنیم
let temp = 0;

for (let counter = 1; counter < input; counter++) {
  if (input % counter === 0) {
    temp += counter;
  }
}

if (temp === input) {
  console.log("perfect number:", temp);
}
