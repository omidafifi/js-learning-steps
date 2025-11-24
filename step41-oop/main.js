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

// class Person {
//   // Properties: ویژگی‌های object
//   name = "omid";
//   age = 34;

//   // Method: متد برای دریافت اطلاعات
//   getInfo() {
//     return `My name: ${this.name}, Age: ${this.age}`;
//   }
// }

// // حالا می‌توانیم هزاران object بسازیم به راحتی!
// let member1 = new Person();
// let member2 = new Person();
// let member3 = new Person();

// console.log(member1.getInfo());
// console.log(member2.getInfo());
// console.log(member3.getInfo());

// در قسمت‌های بعدی constructor را یاد می‌گیریم
// تا بتوانیم objectهای مختلف با مقادیر مختلف بسازیم

//یک object بساز که اسم و سن داشته باشه. یک متد هم داشته باشه که فقط اسم رو برگردونه.
//یک object بساز که اسم و سن داشته باشه. یک متد هم داشته باشه که فقط اسم رو برگردونه.
// let newObject = {
//   firstName: "omidreza",
//   lastName: "Afifi",
//   age: 35,
//   location: "shiraz",

//   getFirstName: function () {
//     return `${this.firstName}`;
//   },
//   getLastName: function () {
//     return `${this.lastName}`;
//   },
//   getAge: function () {
//     return `${this.age}`;
//   },
// };

// console.log(newObject.getFirstName());
// console.log(newObject.getLastName());
// console.log(newObject.getAge());
//
// ============================================
// تمرین: ساخت کلاس Product
// ============================================
// یک class بساز به اسم Product که این ویژگی‌ها را داشته باشد:
// 	•	title (عنوان محصول)
// 	•	price (قیمت محصول)
// یک متد هم به اسم getInfo که مثل این رشته برگردونه:
// Product: Laptop - Price: 2000
// سه مدل محصول بساز با قیمت مختلف

class Product {
  // Properties: ویژگی‌های کلاس
  title;
  price;

  // Constructor: برای ساخت object با مقادیر مختلف
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  // Method: متد برای دریافت اطلاعات محصول
  getInfo() {
    return `Product: ${this.title} - Price: ${this.price}`;
  }
}

// ساخت سه محصول مختلف با قیمت‌های مختلف
let laptop = new Product("Laptop", 2000);
let mouse = new Product("Mouse", 50);
let keyboard = new Product("Keyboard", 100);

// نمایش اطلاعات محصولات
console.log("=".repeat(50));
console.log("📦 لیست محصولات:");
console.log("=".repeat(50));
console.log(laptop.getInfo());
console.log(mouse.getInfo());
console.log(keyboard.getInfo());
console.log("=".repeat(50));
