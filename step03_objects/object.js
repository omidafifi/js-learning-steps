// Objects
// let courses = {
//   languages: ["Html", "Css", "tailwindCss", "JavaScript"],
//   time: 23,
// };
// console.log(courses);

// const courses = {
//   fullName: "javascript course , Reac , Html and Css",
//   time: 32,
// };
// console.log(courses);
// console.log(courses.fullName);
// console.log(courses["time"]);

// //
// let student = { firstName: "omidreza", lasName: "Afifi", age: 34 };
// console.log(student);
// console.log(student.firstName, student["lasName"], student["age"]);

// // 🟦 تمرین: ساخت و کار با یک آبجکت کاربر

// 🔹 دستورالعمل:

// یک آبجکت به نام userProfile بساز که اطلاعات زیر را در خود داشته باشد:
// 	•	نام (firstName): "Omidreza"
// 	•	نام خانوادگی (lastName): "Afifi"
// 	•	سن (age): 34
// 	•	ایمیل (email): "omid@example.com"
// 	•	وضعیت فعال بودن (isActive): true
// 	•	مهارت‌ها (skills): آرایه‌ای شامل "HTML", "CSS", "JavaScript"

// 🔸 سپس:
// 	1.	نام کامل کاربر را در کنسول چاپ کن. (firstName + lastName)
// 	2.	بررسی کن آیا کاربر فعال است یا نه و پیام مناسب چاپ کن.
// 	3.	دومین مهارت داخل skills را در کنسول نمایش بده.

// ⸻

let userProfile = {
  firstName: "Omidreza",
  lastName: "Afifi",
  age: 34,
  email: "omidrzafifi@gmail.com",
  isActive: true,
  skills: ["HTML", "CSS", "JavaScript"],
};
//*
console.log(userProfile.firstName, userProfile["lastName"]);
//*
//if (userProfile.isActive === true)
if (userProfile.isActive) {
  console.log("active");
} else {
  console.log("inactiv");
}
//*
console.log(userProfile.skills[1]);
//*

// ⸻
// 📘 یادداشت‌های مهم — JavaScript Objects

// 🔹 1. تعریف Object

// let student = {
//   name: "Ali",
//   age: 20,
//   grade: 18.5
// };

// 🔸 Object مجموعه‌ای از جفت‌های کلید:مقدار (key: value) است.
// 🔸 نوع داده‌ی object در جاوااسکریپت، نوع خاصی از object هست (typeof student → “object”).

// ⸻

// 🔹 2. دسترسی به مقدارها

// console.log(student.name);       // "Ali"
// console.log(student["grade"]);  // 18.5

// 🔸 از . برای کلیدهای ساده، و از ["key"] برای کلیدهای خاص (مثل با فاصله) استفاده می‌کنیم.

// ⸻

// 🔹 3. Object شامل انواع مختلف داده می‌تونه باشه

// let course = {
//   title: "JS",
//   duration: 30,
//   active: true,
//   skills: ["HTML", "CSS"],
//   teacher: { name: "Omid", age: 34 }
// };

// 🔸 می‌تونه شامل:
// 	•	string
// 	•	number
// 	•	boolean
// 	•	array
// 	•	حتی object تو در تو باشه

// ⸻

// 🔹 4. چرا object مهمه؟
// 	•	ساختار اصلی داده‌ها در بیشتر پروژه‌هاست
// 	•	در ارتباط با API‌ها داده‌ها معمولاً در قالب object میان (فرمت JSON)
// 	•	استفاده آسان در مدیریت اطلاعات پیچیده (مثل user, product, cart…)

// ⸻

// 🔹 5. اشتباهات رایج

// ✅ تعریف درست:

// skills: ["HTML", "CSS", "JavaScript"]

// ❌ اشتباه رایج:

// skills: "HTML, CSS, JavaScript" // فقط یک رشته است نه آرایه

// ⸻

// 🔹 6. شرط بررسی وضعیت فعال بودن:

// if (userProfile.isActive) {
//   console.log("active");
// } else {
//   console.log("inactive");
// }

// ⚠️ مراقب باش اشتباه ننویسی:

// if ((isActive = true)) // ❌ این مقداردهیه، نه مقایسه!

// ⸻

// ✅ نتیجه و تمرین انجام‌شده (userProfile)

// let userProfile = {
//   firstName: "Omidreza",
//   lastName: "Afifi",
//   age: 34,
//   email: "omidrzafifi@gmail.com",
//   isActive: true,
//   skills: ["HTML", "CSS", "JavaScript"],
// };

// console.log(userProfile.firstName, userProfile["lastName"]);

// if (userProfile.isActive) {
//   console.log("active");
// } else {
//   console.log("inactive");
// }

// console.log(userProfile.skills[1]); // CSS

// ⸻
