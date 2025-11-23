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
// یک class بساز به اسم Product که این ویژگی‌ها را داشته باشد:
// 	•	title
// 	•	price
// یک متد هم به اسم getInfo که مثل این رشته برگردونه:
// Product: Laptop - Price: 2000

// سه مدل محصول بساز با قیمت مختلف

// class Product {
//   title1 = "laptop";
//   price1 = 2000;

//   title2 = "Mouse";
//   price2 = 5000;

//   title3 = "Keyboard";
//   price3 = 6000;

//   getInfo() {
//     return `Product1: ${this.title1} - Price: ${this.price1}
//     Product2: ${this.title2}- Price: ${this.price2}
//     Product3: ${this.title3} - Price: ${this.price3}`;
//   }
// }
// let item1 = new Product();
// let item2 = new Product();
// let item3 = new Product();
// console.log(item1.getInfo());
// console.log(item2.getInfo());
// console.log(item3.getInfo());
