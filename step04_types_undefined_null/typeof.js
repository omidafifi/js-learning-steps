//undefined-null // null// typeof
let data1;
console.log(data1); //Yanni tarif nashode undefined ==> Die Definition auf Deutsch . yaani bebin moteghayer vojud dare vali meghdaresh moshakhas nist
const data2 = null; //null yanni hich puch khali vali in moteghayer ma hich hast . pas 1 meghdari dare faghat chi faghat khali hast ok . Hast du verstanden , was ich gesagt habe? Ja
console.log(typeof data2);

// 📘 خلاصه یادداشت — Step 04: undefined, null, typeof

// ✅ undefined
// 	•	وقتی یک متغیر تعریف شده ولی هیچ مقداری بهش داده نشده.
// 	•	مقدار پیش‌فرض متغیرهای بدون مقدار.
// 	•	مثال:

// let a;
// console.log(a); // undefined

// ⸻

// ✅ null
// 	•	یعنی متغیر عمدی خالی است.
// 	•	مقدار null به معنای “هیچ چیز” ولی به‌صورت مشخص و کنترل‌شده.
// 	•	کاربرد:
// 	•	مقدار اولیه خالی برای داده‌هایی که بعداً قرار است مقدار بگیرند.
// 	•	پاک کردن مقدار یک فیلد.
// 	•	مثال:

// let user = null;

// ⸻

// ✅ typeof
// 	•	برای بررسی نوع داده‌ها در جاوااسکریپت استفاده می‌شود.
// 	•	typeof همیشه یک رشته (string) برمی‌گرداند.
// 	•	مثال‌ها:

// typeof "Omid"     // "string"
// typeof 10         // "number"
// typeof true       // "boolean"
// typeof undefined  // "undefined"
// typeof null       // ⚠️ "object" (اشتباه تاریخی جاوااسکریپت)

// ⸻

// 🧠 تفاوت اصلی:

// حالت	معنا
// undefined	متغیر تعریف شده ولی مقدار نگرفته
// null	مقدار مشخص و عمدی برای خالی بودن داده
// typeof	ابزار بررسی نوع داده‌ها

// 🟦 سؤال 1

// یک آبجکت بساز به نام book که شامل این ویژگی‌ها باشه:
// 	•	title: یک رشته
// 	•	pages: یک عدد
// 	•	available: مقدار بولی
// 	•	tags: یک آرایه شامل ۲ رشته

// سپس:
// 	•	مقدار title و pages را با console.log چاپ کن
// 	•	با استفاده از typeof بررسی کن که tags چه نوعیه
let book = {
  title: "Deutschkurs",
  pages: 145,
  available: true,
  tags: ["Page1", "Pag2"],
};
console.log(book.title, book.pages);
console.log(typeof book.tags);
// 🟦 سؤال 2

// یک آبجکت به نام student تعریف کن با کلیدهای:
// name, age, skills (که آرایه‌ای از زبان‌هاست)
// 	•	مقدار skills رو با [] چاپ کن (مثلاً دومین زبان)
// 	•	بررسی کن که آیا مقدار student.age برابر undefined هست یا نه
let student = {
  name: "omidreza",
  age: 34,
  skills: ["Persich", "Deutsch"],
};
console.log(student.skills[1]);
if (student.age === undefined) {
  console.log("Yes");
} else {
  console.log("No");
}
// 🟦 سؤال 3

// یک متغیر به نام data تعریف کن و مقدار null بهش بده.
// 	•	با typeof نوعش رو چاپ کن
// 	•	توضیح بده که چرا null به صورت object برمی‌گرده (کامنت بنویس)
let data = null;
console.log(typeof data);
//Bebin Null kolan 1 meghadar be hesab miyad va tarif shode faghat meghadaresh khali va puch hast . va in ke chera null object hast 1 bug ghadimi JavaScript hast ke kheili vaghate ke eslah ya Update nashode .

// 🟦 سؤال 4 (ترکیبی)

// کدی بنویس که:
// 	•	یک آبجکت به نام user بسازه با کلیدهای:
// username, isActive, email
// 	•	اگر user.isActive برابر true بود، بنویسه "Welcome"
// 	•	اگر نبود، بنویسه "Please activate your account"

let user = {
  username: "Omidrzaf",
  isActive: true,
  email: "omidrzafifi@gmail.com",
};
if ((user.isActive = true)) {
  console.log("Welcome");
} else {
  console.log("Please activate your account");
}
