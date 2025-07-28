// Override

// کلاس پدر
class Heyvan {
  sedaaBedeh() {
    console.log("یک صدای عمومی از حیوان شنیده می‌شود.");
  }
}

// کلاس فرزند که متد را بازنویسی می‌کند
class Sag extends Heyvan {
  sedaaBedeh() {
    console.log("سگ پارس می‌کند.");
  }
}

const heyvan1 = new Heyvan();
heyvan1.sedaaBedeh();

const sag1 = new Sag();
sag1.sedaaBedeh();

class Sag extends Heyvan {
  sedaaBedeh() {
    super.sedaaBedeh();
    console.log("سگ خیلی بلند پارس می‌کند.");
  }
}

const sag2 = new Sag();
sag2.sedaaBedeh();
// ✅‌ ۱. Override (بازنویسی در کلاس‌ها)

// 🔹 مفهوم:
// Override یعنی در یک کلاس فرزند، یک متد را با همان نام از کلاس پدر دوباره تعریف کنیم تا رفتارش را تغییر دهیم.

// 🔹 مربوط به:
// برنامه‌نویسی شیءگرا (Object-Oriented Programming)، مخصوصاً در کلاس‌ها و ارث‌بری.

// 🔹 مثال در جاوااسکریپت:

// class Animal {
//   makeSound() {
//     console.log("Generic animal sound");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Bark!");
//   }
// }

// ✅ در اینجا Dog متد makeSound را override کرده است.

// ⸻

// ✅ ۲. Overwrite (جایگزین‌کردن مقدار/داده قبلی)

// 🔹 مفهوم:
// Overwrite یعنی مقدار قبلی یک متغیر، فایل، یا داده را با مقدار جدید جایگزین کنیم.

// 🔹 مربوط به:
// همه‌جا! مخصوص کلاس نیست. در متغیرها، فایل‌ها، آرایه‌ها، آبجکت‌ها، و…

// 🔹 مثال ساده:

// let name = "Omid";
// name = "Ali"; // مقدار قبلی (Omid) overwrite شد

// ✅ در اینجا مقدار "Omid" با "Ali" overwrite شده است.

// ⸻

// 🔁 جدول مقایسه:

// ویژگی	Override	Overwrite
// معنای ساده	بازنویسی متد ارث‌بری شده در کلاس	جایگزینی مقدار قدیمی با مقدار جدید
// مربوط به	کلاس‌ها و ارث‌بری (OOP)	متغیرها، فایل‌ها، آرایه‌ها، همه‌جا
// ساختار ثابت دارد؟	بله، باید همان نام و امضا را داشته باشد	نه، فقط مقدار جدید جایگزین می‌شود
// مثال	متد در کلاس فرزند	تغییر مقدار یک متغیر

// ⸻

// 🔍 مثال ترکیبی برای درک بهتر:

// class Parent {
//   showMessage() {
//     console.log("Message from parent.");
//   }
// }

// class Child extends Parent {
//   showMessage() {
//     console.log("Message from child.");
//   }
// }

// let message = "Hello";
// message = "Hi"; // اینجا مقدار overwrite شده

// const child = new Child();
// child.showMessage(); // اینجا متد override شده

// "Add example of method overriding in JavaScript classes"
