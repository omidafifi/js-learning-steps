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
// بدست آوردن اعداد تام
// let input = 496;// عددی که می‌خوایم بررسی کنیم
// let temp = 0; // اینجا می‌خوایم مجموع مقسوم‌علیه‌ها رو جمع بزنیم

// for (let counter = 1; counter < input; counter++) {
//   if (input % counter === 0) {
//     temp += counter;
//   }
// }

// if (temp === input) {
//   console.log("perfect number:", temp);
// }

// ۱
// با استفاده از یک حلقه for، عددهای بین ۱ تا ۵۰ را چاپ کن
// و فقط عددهایی را بنویس که بر ۵ بخش‌پذیرند (یعنی i % 5 === 0)

// ⸻
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
// ✅ سؤال ۲

// با استفاده از یک حلقه for، مجموع عددهای زوج بین ۱ تا ۳۰ را محاسبه کن و در پایان جمع را در کنسول چاپ کن.

// let sum = 0;

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log("مجموع عددهای زوج بین ۱ تا ۳۰:", sum);
// 🟢 تمرین ۱:

// عددهای بین ۱ تا ۳۰ رو چاپ کن
// فقط اون‌هایی که بر ۳ بخش‌پذیرن
// for (let i = 0; i <= 30; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// عددهایی بین ۱ تا ۴۰ که هم بر ۳ و هم بر ۴ بخش‌پذیرند رو چاپ کن.
// for (let i = 0; i <= 40; i++) {
//   if (i % 3 === 0 && i % 4 === 0) {
//     console.log(i);
//   }
// }

// ✅ تمرین ۳:
// مجموع تمام عددهای فرد بین ۱ تا ۲۵ را محاسبه کن و در پایان چاپ کن.

// let sum = 0;

// for (let i = 1; i <= 25; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }

// console.log("مجموع عددهای فرد بین ۱ تا ۲۵:", sum);

// از عدد ۱۰ تا ۰ را با استفاده از حلقه for به‌صورت معکوس چاپ کن.
// برای هر عدد:
// 	•	اگر زوج بود، بنویس: Even
// 	•	اگر فرد بود، بنویس: Odd

// for ( let i = 0 ; i <= 10 ; i++){

//   if (i % 2=== 0){
//     console.log( " this number is even" , i);
//   }
//   else {
//     console.log( " this number is odd" , i);

//   }
// }
// 🟢 تمرین :

// فقط ۵ عدد زوج اول بین ۱ تا ۱۰۰ را چاپ کن.

// ⸻

// 📌 نکته:
// 	•	نباید همه عددهای زوج رو چاپ کنی، فقط اولین ۵ تا
// 	•	باید یه متغیر بشماری که ببینی چند تا عدد زوج پیدا شده تا وقتی به ۵ رسیدی، حلقه قطع بشه

let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("even number:", i);
    count++;
  }
  if (count === 5) {
    break;
  }
}
