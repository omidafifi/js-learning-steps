//Jason
// JavaScript Object Notation یعنی: «روشی برای نوشتن داده‌ها شبیه آبجکت جاوااسکریپت، ولی به صورت متن (string)
// --	•	برای ذخیره و تبادل داده‌ها بین برنامه‌ها
// •	برای گرفتن/فرستادن اطلاعات از سرور (مثل fetch یا APIها)
// •	برای ذخیره در فایل یا لوکال‌استوریج مرورگر

let user1 = {
  name: "Omidreza",
  age: 34,
};
// //jason
// {
//     "name": "Omidreza",
//     "age": 34
//   }
// dar jason key ha bayad beyne "" bashe va function and undefind nemituni dashte bashi tush

//2metode asli kar ba jason
// ✅ تبدیل آبجکت → JSON
let user = { name: "Omid", age: 34 };
let jason = JSON.stringify(user);
console.log(jason);
// ✅ تبدیل JSON → آبجکت
let jason1 = `{
  "name": "omid",
  "age": 34
}`;
let user2 = JSON.parse(jason1);
console.log(user.name);
//parse 
//End 