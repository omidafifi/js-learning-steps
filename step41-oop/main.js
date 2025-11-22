// let person = {
//   name: "ali",
//   age: 30,

//   getInfo: function () {
//     return `my name: ${this.name}, age: ${this.age}`;
//   },
// };

// console.log(person.getInfo());

// let person1 = {
//   name: "liam",
//   age: 25,

//   getInfo: function () {
//     return `my name: ${this.name}, age: ${this.age}`;
//   },
// };

// console.log(person1.getInfo());

// ============================================
// مشکل: اگر بخواهیم 1000 object تعریف کنیم
// ============================================
// ❌ روش قدیمی - حافظه پر می‌شود!
// let person1 = { name: "ali", age: 30, getInfo: function() {...} };
// let person2 = { name: "reza", age: 25, getInfo: function() {...} };
// let person3 = { name: "sara", age: 28, getInfo: function() {...} };
// ... 1000 بار تکرار! حافظه پر می‌شود!

// ============================================
// راه حل: استفاده از Class (OOP)
// ============================================
// ✅ با Class می‌توانیم هزاران object بسازیم بدون پر شدن حافظه
// ✅ با این روش انعطاف بیشتری داریم

class Person {
  // Properties: ویژگی‌های object
  name = "omid";
  age = 34;

  // Method: متد برای دریافت اطلاعات
  getInfo() {
    return `My name: ${this.name}, Age: ${this.age}`;
  }
}

// حالا می‌توانیم هزاران object بسازیم به راحتی!
let member1 = new Person();
let member2 = new Person();
let member3 = new Person();

console.log(member1.getInfo());
console.log(member2.getInfo());
console.log(member3.getInfo());

// در قسمت‌های بعدی constructor را یاد می‌گیریم
// تا بتوانیم objectهای مختلف با مقادیر مختلف بسازیم
