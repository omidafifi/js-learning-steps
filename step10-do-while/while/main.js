//do / do-while تا زمانی که
//تا زمانی که ما اون شرط رو میدیم برقرار باشه
// حلقه for  مناسب وقتی تعداد دفعات تکرار از قبل مشخصه
//  همه چیز در یک خطه: مقدار اولیه، شرط، تغییر

let input = 7;
let temp = 0;
for (let counter = 0; counter <= input; counter++) {
  if (input % counter === 0) {
    temp += 1;
  }
}
if (temp === 2) {
  console.log("این عدد اول است", input);
}
// مناسب وقتی نمی‌دونی چند بار قراره تکرار بشه
// 🔹 اول شرط چک میشه، اگه درست بود → بدنه اجرا میشه
// 🔹 اگه شرط از اول غلط باشه → اصلاً اجرا نمیشه

let counter = 0;
while (counter <= 10) {
  console.log("Counter :", counter);
  counter++;
}

// 📌 مناسب وقتی می‌خوای بدنه‌ی حلقه حداقل یک بار حتماً اجرا بشه
// 🔹 شرط بعد از اجرای بدنه بررسی میشه
// 🔹 حتی اگه شرط غلط باشه، حداقل یک بار اجرا میشه

let index = 0;

do {
  console.log("Counter :", index);
  index++;
} while (index <= 10);
