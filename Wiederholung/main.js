// // // // // feat: structure every() exercises with clear start/end markers for better learning and review

// // // // // // //for in ==> ich habe falsh gemacht und habe 3 Fehler
// // // // // // // const USER = {
// // // // // // //   firstName: "Omidreza",
// // // // // // //   lastName: "Afifi",
// // // // // // //   age: 34,
// // // // // // // };
// // // // // // // for (const key in USER) {
// // // // // // //   console.log(key);
// // // // // // //   console.log(USER[key]);
// // // // // // // }
// // // // // // // javab soale 1 ==> dar halghe for in maghadir object va name key ha peymayesh mishavad .
// // // // // // //in javab dorost tar hast فقط کلیدهای (keys) یک آبجکت پیمایش می‌شن. اگر بخوای مقدارها رو هم ببینی، باید از object[key] استفاده کنی.
// // // // // // //javabe soal 2 //
// // // // // // const car = { brand: "Toyota", year: 2021 };
// // // // // // for (const key in car) {
// // // // // //   //   console.log(key);
// // // // // //   console.log(car[key]);
// // // // // //   //   console.log(car);
// // // // // // }
// // // // // // // khoruji in code brand . year  va toyota 2021
// // // // // // //javabe soale 3
// // // // // // console.log("...................");
// // // // // // const book = {
// // // // // //   title: "Clean Code",
// // // // // //   author: "Robert C. Martin",
// // // // // //   pages: 464,
// // // // // // };

// // // // // // for (const key in book) {
// // // // // //   console.log(key);
// // // // // //   console.log(book[key]);
// // // // // // }
// // // // // // console.log("...................");

// // // // // // //javabe soale 4
// // // // // // // agar eshtebah nakonam nabayad for in vase array ha be kar ravad chun array ha ro ba for of pish mibarim vase halghe ha

// // // // // // // javabe soale 5 => const obj = { a: 1, b: 2 };
// // // // // // const obj = { a: 1, b: 2 };
// // // // // // obj.c = 3;
// // // // // // console.log("...................");

// // // // // // Object.prototype.d = 4;

// // // // // // for (const key in obj) {
// // // // // //   console.log(key);
// // // // // // }
// // // // // // // in halat ro nakhundam ama saay mikonam javb ro bedam be nazaram khorujish mishe

// // // // // // // a
// // // // // // // b
// // // // // // // c
// // // // // // // d
// // // // // // //feat: add for...in loop examples with key/value access and prototype edge case
// // // // // // //every() چه کاری انجام می‌دهد و چه زمانی false می‌دهد؟
// // // // // // let scores = [18, 20, 19];
// // // // // // console.log(scores.every((s) => s >= 10));
// // // // // // console.log(scores.every((s) => s > 18));
// // // // // //

// // // // // // تمرین ۱

// // // // // // یک آرایه از اعداد به صورت زیر داری:

// // // // // const numbers = [12, 25, 33, 45, 27];
// // // // // // console.log(numbers.every((n) => n >= 10));

// // // // // // با استفاده از متد .every() بررسی کن که آیا همه اعداد آرایه بزرگ‌تر یا مساوی 10 هستند یا نه؟

// // // // // // ⸻

// // // // // // تمرین ۲

// // // // // // آرایه‌ای از رشته‌ها داریم:

// // // // // const names = ["Ali", "Sara", "Nima", ""];
// // // // // // console.log(names.every((n) => !n === null));// falsh
// // // // // // Corrected version with explanation:
// // // // // // The original check is incorrect because '!n === null' is always false.
// // // // // // The proper way is to check if strings are not empty:
// // // // // // console.log(names.every((n) => n !== ""));
// // // // // // or equivalently:
// // // // // // console.log(names.every((n) => n.length > 0));
// // // // // console.log(names.every((n) => n !== "")); // richtig
// // // // // console.log(names.every((n) => n.length > 0)); // || richtigیا برای بررسی اینکه همه رشته‌ها طول مثبت داشته باشند:
// // // // // // با .every() چک کن که آیا هیچ‌کدام از اسامی خالی نیستند (یعنی رشته‌ی خالی در آرایه نباشد).

// // // // // // ⸻

// // // // // // تمرین ۳

// // // // // // آرایه‌ای از نمرات دانش‌آموزان:

// // // // // const grades = [18, 20, 15, 19, 14];
// // // // // // console.log(
// // // // // //   grades.every((g) => (g > 14 ? "درست است" : "نمرات به فلان دلیل  رد شده است "))
// // // // // // ); ==>\\ false
// // // // // // console.log(grades.every((g) => (g > 14 ? true : false)));//==> inam kheili gherie manteghi hast ba voijude in ke kar mikone

// // // // // // Corrected and improved version:
// // // // // // Use every to check if all grades are above 14 and then print a meaningful message:
// // // // // const result = grades.every((g) => g > 14);
// // // // // if (result) {
// // // // //   console.log("✅ همه نمرات بالاتر از ۱۴ هستند.");
// // // // // } else {
// // // // //   console.log("❌ برخی از نمرات ۱۴ یا پایین‌تر هستند.");
// // // // // }

// // // // // // بررسی کن آیا همه نمرات بالاتر از 14 هستند یا نه؟ اگر نیست، دلیلش را در کنسول توضیح بده.

// // // // // // ⸻

// // // // // // تمرین ۴

// // // // // // آرایه‌ای از اشیاء که وضعیت سفارش‌ها را نگهداری می‌کند:

// // // // // const orders = [
// // // // //   { id: 1, delivered: true },
// // // // //   { id: 2, delivered: true },
// // // // //   { id: 3, delivered: false },
// // // // // ];
// // // // // // console.log(orders.every((or) => or === true));// falsh geschriben
// // // // // // Corrected version:
// // // // // // Check if all orders have delivered property true:
// // // // // console.log(orders.every((or) => or.delivered === true));
// // // // // // با .every() چک کن که آیا همه سفارش‌ها تحویل داده شده‌اند یا خیر؟

// // // // // // ⸻

// // // // // // تمرین ۵ (چالش)

// // // // // // یک آرایه شامل چند مقدار مختلف (اعداد و رشته‌ها):

// // // // // const mixed = [10, "20", 30, "40", 50];
// // // // // // console.log(mixed.every((mi) => mi === number));// fasle
// // // // // // Corrected version:
// // // // // // Use typeof to check if all elements are numbers:
// // // // // console.log(mixed.every((mi) => typeof mi === "number"));
// // // // // //type of yadet raft
// // // // // // بررسی کن که آیا همه عناصر آرایه نوع داده عدد (number) هستند یا نه؟

// // // // // // ⸻

// // // // // ✅ بریم سراغ چند تمرین عمیق‌تر؟ (سطح متوسط)

// // // // // تمرین ۶:

// // // // // یک آرایه از آبجکت‌های کاربران داریم:

// // // // // const users = [   az inja ta
// // // // //   { username: "ali", active: true },
// // // // //   { username: "sara", active: true },
// // // // //   { username: "reza", active: false },
// // // // // ];
// // // // // const isLoggedIn = users.every((user) => user.active === true);
// // // // // console.log(isLoggedIn);
// // // // // if (isLoggedIn !== true) {
// // // // //   console.log(isLoggedIn.every((user) => user.active === false));
// // // // // }
// // // // // با .every() بررسی کن آیا همه کاربران فعال هستند یا نه. اگر نه، نام کاربری کسانی که فعال نیستند را چاپ کن.
// // // // //  inja eshtebah bud
// // // // // const users = [
// // // // //   { username: "ali", active: true },
// // // // //   { username: "sara", active: true },
// // // // //   { username: "reza", active: false },
// // // // // ];

// // // // // const isLoggedIn = users.every((user) => user.active === true);
// // // // // console.log("آیا همه فعال هستند؟", isLoggedIn);

// // // // // // اگر همه کاربران فعال نبودند، فقط کاربران غیرفعال را نمایش بده
// // // // // if (!isLoggedIn) {
// // // // //   console.log("کاربران غیرفعال:");
// // // // //   users.forEach((user) => {
// // // // //     // اگر کاربر active نبود، نام او را چاپ کن
// // // // //     if (!user.active) {
// // // // //       console.log("- " + user.username);
// // // // //     }
// // // // //   });
// // // // // }
// // // // // // ⸻یک آرایه از کاربران داریم:
// // // // // const people = [
// // // // //   { name: "Ali", active: true },
// // // // //   { name: "Reza", active: true },
// // // // //   { name: "Sara", active: false },
// // // // // ];

// // // // // const isAllActiv = people.every((person) => person.active === true);
// // // // // console.log(isAllActiv);

// // // // // if (!isAllActiv) {
// // // // //   console.log("Die Leute sind nicht aktiv:");
// // // // //   people.forEach((person) => {
// // // // //     if (!person.active) {
// // // // //       console.log("-  " + person.name, "ist nicht activ");
// // // // //     }
// // // // //   });
// // // // // }
// // // // // شما یک آرایه از کاربران دارید. هر کاربر این ویژگی‌ها را دارد:
// // // // // const users = [
// // // // //   { name: "ali", emailVerified: true },
// // // // //   { name: "sara", emailVerified: false },
// // // // //   { name: "nima", emailVerified: true },
// // // // // ];

// // // // // const isConfirmed = users.every((user) => user.emailVerified === true);

// // // // // if (isConfirmed) {
// // // // //   console.log("✅ همه کاربران تاییدشده‌اند.");
// // // // // } else {
// // // // //   console.log("❌ کاربر(ان) تاییدنشده:");
// // // // //   users.forEach((user) => {
// // // // //     if (!user.emailVerified) {
// // // // //       console.log("- " + user.name);
// // // // //     }
// // // // //   });
// // // // // }
// // // // // تمرین ۷:

// // // // // feat: complete exercise comparing every() and some() for adult age check
// // // // const ages = [25, 18, 40, 17];

// // // // const result = ages.every((custemrs) => custemrs >= 18);
// // // // console.log(result);
// // // // // const result1 = ages.some((custemrs) => custemrs >= 18); fasle
// // // // const result1 = ages.some((age) => age < 18);
// // // // console.log(result1);
// // // // // // با every چک کن که آیا همه افراد بالغ هستند؟
// // // // // // با some چک کن که آیا حداقل یک نفر نابالغ هست؟

// // // // // ⸻

// // // // // feat: add function areAllPositive() to check for all-positive number arrays
// // // // // تمرین ۸:

// // // // // یک تابع areAllPositive(numbers) بنویس که یک آرایه از اعداد بگیرد و بررسی کند که آیا همه عددها مثبت‌اند یا نه. اگر نبودند، بنویسد: “اعداد منفی وجود دارد”.

// // // // function areAllPositive(numbers) {
// // // //   if (numbers.every((n) => n > 0)) {
// // // //     console.log("✅ همه اعداد مثبت‌اند.");
// // // //   } else {
// // // //     console.log("❌ اعداد منفی وجود دارد.");
// // // //   }
// // // // }

// // // // areAllPositive([3, 5, 8, -1]); // خروجی: ❌
// // // // areAllPositive([2, 4, 9]);     // خروجی: ✅

// // // // // ⸻
// // // // //
// // // // // const users = [
// // // // //   { name: "ali", emailVerified: true },
// // // // //   { name: "sara", emailVerified: false },
// // // // //   { name: "nima", emailVerified: true },
// // // // // ];
// // // // // const Verfi = users.every((person) => person.emailVerified === true);
// // // // // console.log(Verfi);
// // // // // users.forEach((element) => {
// // // // //   if (person.emailVerified === true) {
// // // // //     console.log("همه تایید کردن");
// // // // //   } else {
// // // // //     console.log("تأیید نشده ❌", element.name);
// // // // //   }
// // // // // // });
// // // // // const users = [
// // // // //     { name: "ali", emailVerified: true },
// // // // //     { name: "sara", emailVerified: false },
// // // // //     { name: "nima", emailVerified: true },
// // // // //   ];

// // // // //   // آیا همه تایید شده‌اند؟
// // // // //   const Verfi = users.every((person) => person.emailVerified === true);
// // // // //   console.log("آیا همه تاییدشده‌اند؟", Verfi);

// // // // //   if (Verfi) {
// // // // //     console.log("✅ همه تایید کرده‌اند.");
// // // // //   } else {
// // // // //     console.log("❌ کاربرانی که تایید نکرده‌اند:");
// // // // //     users.forEach((element) => {
// // // // //       if (!element.emailVerified) {
// // // // //         console.log("- " + element.name);
// // // // //       }
// // // // //     });
// // // // //   }
// // // // // const users = [
// // // // //   { name: "Omid", active: true },
// // // // //   { name: "Ali", active: true },
// // // // //   { name: "Sara", active: false },
// // // // // ];
// // // // // const result = users.every((isActiv) => isActiv === true);
// // // // // console.log(result);

// // // // // users.forEach((user) => {
// // // // //   if (!result) {
// // // // //     console.log(user.name);
// // // // //   }
// // // // // });

// // // // // let user = {
// // // // //   firstName: "omidreza",
// // // // //   lastName: "afifi",
// // // // //   age: 34,
// // // // // };
// // // // // for (const key in user) {
// // // // //   console.log(key);
// // // // //   console.log(user[key]);
// // // // // }
// // // // // //
// // // // // feat: add exercise to check all users emailVerified using every() with conditional messaging
// // // // // یک آرایه به نام temperatures داریم که شامل دمای روزهای یک هفته است.
// // // // // بررسی کن که آیا همه دماها بیشتر از صفر هستند یا نه.
// // // // // const temperatures = [5, 12, 8, 14, 0, 7, 10];
// // // // // const result = temperatures.every((item) => item > 0);
// // // // // console.log(result);
// // // // // feat: add customer payment check using every() and forEach to log unpaid users
// // // // // const customers = [
// // // // //   { name: "Mehdi", hasPaid: true },
// // // // //   { name: "Zahra", hasPaid: false },
// // // // //   { name: "Reza", hasPaid: true },
// // // // // ];

// // // // // // 1.	بررسی کن آیا همه کاربران پرداخت خودشون رو انجام داده‌اند
// // // // // // const alleCustomers = customers.every((hasPaid) => hasPaid === true); == ich habe das nochmal falsh gemacht .
// // // // // const alleCustomers = customers.every((customer) => customer.hasPaid === true);
// // // // // console.log(alleCustomers);
// // // // // // 2.	اگر همه پرداخت کرده بودند → پیام ✅ «همه پرداخت کرده‌اند.» را نمایش بده.
// // // // // if (alleCustomers) {
// // // // //   console.log("✅ ");
// // // // //   // 3.	اگر حتی یک نفر پرداخت نکرده بود:
// // // // //   // •	پیام ❌ نمایش بده.
// // // // // } else {
// // // // //   console.log("❌");
// // // // // }
// // // // // // •	نام کسانی که پرداخت نکرده‌اند را بنویس.
// // // // // customers.forEach((customers) => {
// // // // //   if (!customers.hasPaid) {
// // // // //     console.log("- " + customers.name + " پرداخت نکرده است");
// // // // //   }
// // // // // });
// // // //سؤال:
// // // // با متد every() بررسی کن آیا همه‌ی عددها بزرگ‌تر از 9 هستند یا نه.
// // // // نتیجه را چاپ کن (true یا false).

// // // // ⸻

// // // // const nums = [10, 15, 20, 30, 5];
// // // // const result = nums.every((int) => int > 9);
// // // // // console.log(result);
// // // // // //🎯 سؤال:
// // // // // 	1.	با متد .every() بررسی کن که آیا همه‌ی ایمیل‌ها پر هستند یا نه (یعنی رشته‌ی خالی نداشته باشن).
// // // // // 	2.	اگر حتی یک ایمیل خالی بود، بنویس:
// // // const emails = ["omid@gmail.com", "sara@yahoo.com", ""];
// // // // const result = emails.every((item) => item === ""); fasle
// // // // const result = emails.every((item) => item.length > 0); or is that richtig
// // // const result = emails.every((item) => item !== "");

// // // console.log(result);
// // // // if (result === "")
// // // if (!result) {
// // //   console.log("❌ برخی ایمیل‌ها خالی هستند.");
// // // } else {
// // //   console.log("✅ همه ایمیل‌ها پر هستند.");
// // // }
// // //fix: correct typo 'console.lo' to 'console.log' in order status check
// // // const orders = [
// // //   { id: 1, done: true },
// // //   { id: 2, done: true },
// // //   { id: 3, done: false },
// // // ];

// // // // const result = orders.every((user) => user === true); false
// // // const result = orders.every((user) => user.done === true);
// // // console.log(result);

// // // // orders.forEach((order) => {
// // // //   if (orders.id) {
// // // //     console.log("dont orderd"); false
// // // //   } else {
// // // //   }
// // // // });
// // // orders.forEach((order) => {
// // //   if (!order.done) {
// // //     console.log("❌ سفارش انجام‌نشده:", order.id);
// // //   }
// // // });

// // // const products = [
// // //   { id: 101, price: 50, inStock: true },
// // //   { id: 102, price: 30, inStock: true },
// // //   { id: 103, price: 0, inStock: false },
// // // ];
// // // // 1.	با متد .every() بررسی کن آیا "همه‌ی" محصولات "قیمت" "بالاتر" از "0" دارند؟
// // // // 2.	"اگر" "همه" "قیمت" "بالاتر" از "0" داشتند، پیام "✅ همه محصولات قیمت دارند." را چاپ کن.
// // // // 3.	اگر حتی یک محصول قیمتش 0 یا کمتر بود، پیام "❌ محصول(های) بدون قیمت یافت شد:" را چاپ کن و سپس با .forEach() شناسه (id) محصولات بدون قیمت را چاپ کن.
// // // let result = products.every((pr) => pr.price > 0);
// // // console.log(result); // 1.Done

// // // products.forEach((element) => {
// // //   if (!element.price) {
// // //     console.log("✅ همه محصولات قیمت دارند.");
// // //   } else {
// // //     console.log("❌محصول(های) بدون قیمت یافت شد", element.id);
// // //   }
// // // });
// // // fix: correct price check logic and conditional messaging for products with missing price
// // // const products = [
// // //   { id: 101, price: 50, inStock: true },
// // //   { id: 102, price: 30, inStock: true },
// // //   { id: 103, price: 0, inStock: false },
// // // ];

// // // let result = products.every((pr) => pr.price > 0);
// // // console.log(result); // ✅ فقط true یا false

// // // if (result) {
// // //   console.log("✅ همه محصولات قیمت دارند.");
// // // } else {
// // //   console.log("❌ محصول(های) بدون قیمت یافت شد:");
// // //   products.forEach((element) => {
// // //     if (element.price <= 0) {
// // //       console.log("- ID:", element.id);
// // //     }
// // //   });
// // // }
// // // const files = [
// // //   { name: "project.docx", size: 250 },
// // //   { name: "image.png", size: 0 },
// // //   { name: "presentation.pptx", size: 1200 },
// // // ];

// // // //	1.	با متد .every() بررسی کن که آیا همه فایل‌ها حجم بالاتر از 0 دارند؟
// // // // 2.	اگر همه فایل‌ها دارای حجم بودند، پیام زیر را در کنسول چاپ کن:
// // // const RESULT = files.every((item) => item.size > 0);
// // // console.log(RESULT);

// // // if (item.size <= 0) {
// // //   console.log("✅ همه فایل‌ها دارای حجم معتبر هستند.");
// // // }
// // // // 3.	اگر حتی یک فایل حجم 0 داشت، پیام زیر را چاپ کن:
// // // // ❌ فایل(هایی) با حجم صفر یافت شد:
// // // // files.forEach((element) => {
// // // //   if (element.size === 0) {
// // // //     console.log("✅ همه فایل‌ها دارای حجم معتبر هستند.");
// // // //   }
// // // // });
// // // files.forEach((element) => {
// // //   if (element.size === 0) {
// // //     console.log("❌ فایل(هایی) با حجم صفر یافت شد:", element.name);
// // //   }
// // // });
// // // // و سپس با .forEach() نام (name) فایل‌هایی که حجمشان صفر است را نمایش بده.
// // // const files = [
// // //   { name: "project.docx", size: 250 },
// // //   { name: "image.png", size: 0 },
// // //   { name: "presentation.pptx", size: 1200 },
// // // ];

// // // const RESULT = files.every((item) => item.size > 0);
// // // console.log("آیا همه فایل‌ها حجم معتبر دارند؟", RESULT);

// // // if (RESULT) {
// // //   console.log("✅ همه فایل‌ها دارای حجم معتبر هستند.");
// // // } else {
// // //   console.log("❌ فایل(هایی) با حجم صفر یافت شد:");
// // //   files.forEach((element) => {
// // //     if (element.size === 0) {
// // //       console.log("- " + element.name);
// // //     }
// // //   });
// // // }
// // //feat: add file size validation using every() with conditional listing of empty files

// // const numbers = [5, 8, 12, 20, 7, 14];
// // // آرایه‌ای بساز که فقط عددهای بزرگ‌تر از 10 در آن باشد.
// // const bigger10 = numbers.filter((int) => int > 10);
// // console.log(bigger10);
// // const names = ["Ali", "", "Sara", "Nima", ""];
// // // 🎯 یک آرایه‌ی جدید بساز که فقط اسامی غیرخالی در آن قرار داشته باشد.
// // const newString = names.filter((str) => str !== "");
// // console.log(newString);
// // // ✅ تمرین ۳: کاربران تایید‌شده
// // // 🎯 فقط کاربرانی را فیلتر کن که verified: true هستند.
// // // نام آن‌ها را با forEach() چاپ کن.
// // const users = [
// //   { name: "Omid", verified: true },
// //   { name: "Ali", verified: false },
// //   { name: "Reza", verified: true },
// // ];
// // const resultUsers = users.filter((item) => item.verified === true);
// // console.log(resultUsers);
// // users.forEach((element) => {
// //   if (element.verified === true) {
// //     console.log("کاربران :", element.name);
// //   }
// // });
// // //✅ تمرین ۴: سن افراد بالای ۱۸
// // // 🎯 آرایه‌ای بساز که فقط افراد بالای ۱۸ سال را شامل شود.
// // // سپس فقط name افراد فیلترشده را چاپ کن.
// // const people = [
// //   { name: "Sara", age: 16 },
// //   { name: "Nima", age: 19 },
// //   { name: "Maryam", age: 22 },
// // ];
// // const arr2 = people.filter((pers) => pers.age > 18);
// // console.log(arr2);
// // people.forEach((element) => {
// //   if (element.age > 18) {
// //     console.log("بالای ۱۸ :", element.age);
// //   }
// // });
// // // تمرین ترکیبی با filter() + length
// // const comments = ["great!", "", "thanks", "", "perfect"];
// // // 🎯 چند نظر معتبر داریم؟
// // // با filter() نظرات خالی را حذف کن، سپس تعداد نظرات معتبر را با .length نمایش بده.
// // // const result5 = comments.filter.length(item1=>item1 ()) false
// // const validComments = comments.filter((comment) => comment !== "");
// // console.log("تعداد نظرات معتبر:", validComments.length);
// // // fix: correct filter + length syntax to count valid (non-empty) comments

// // const messages = ["سلام", "", "درود", " ", "", "تشکر"];
// // // با filter() آرایه‌ای بساز که فقط پیام‌هایی که خالی نیستند و فقط فاصله (space) هم نیستند در آن باقی بمانند.
// // // سپس تعداد این پیام‌های معتبر را با .length چاپ کن.
// // const newMessages = messages.filter((str) => str.trim() !== "");
// // console.log(newMessages);
// // console.log(newMessages.length);
// // //feat: filter non-empty, non-whitespace strings and count valid messages

// // for (let i = 1; i <= 5; i++) {
// //   if (i < 3) {
// //     console.log(i);
// //   } else {
// //     // هیچ کاری نمی‌کنیم یا حلقه دستی قطع بشه
// //     i = 6; // حلقه قطع می‌شه چون i > 5 میشه
// //   }
// // }
// // یک حلقه بنویس که اعداد ۱ تا ۵ رو بررسی کنه.
// // اما اگر عدد ۳ بود، اون رو چاپ نکنه و بره عدد بعدی.
// // for (let i = 1; i < 5; i++) {
// //   if (i === 3) {
// //     continue;
// //   }
// //   console.log(i);
// // }
// // می‌خوای اعداد از ۱ تا ۱۰ رو در کنسول چاپ کنی.
// // اما اگر عدد به ۵ رسید، حلقه باید فوراً متوقف بشه.
// // خروجی فقط باید عددهای قبل از ۵ باشه.

// // for (let i = 1; i < 10; i++) {
// //   if (i === 5) {
// //     break;
// //   }
// //   console.log(i);
// // }
// //array
// // let user = [
// //   "firstName", //0
// //   ["userName , omid , reza, ahmad"], //1 , 2
// //   "lastName", //3
// //   45, //4
// //   true, //5
// // // ];
// // let user = ["zahra", "omid", "dorna"];
// // user.shift();
// // console.log(user);
// // //  [==>  , "...." , "...."   ]            [ "...." , "...." _==>  ]
// // // unshift                                   push
// // // shift                                     pop
// // //  [<==, "...." , "...."   ]              [ "...." , "...." - <== ]

// // // console.log(user.unshift("Gholi"));
// // user.unshiftshift("Zahra");
// // console.log(user);
// // let numbers = [1, 2, 3, 4];
// // numbers.shift();
// // console.log(numbers);

// // let numbers = [1, 2, 3, 4]; // 4 delete az akhar

// // // numbers.pop(); // hazfe 4
// // numbers.push(5);
// // numbers.push(6);
// // numbers.push(7);
// // console.log(numbers.at(-2));
// // console.log(numbers);

// // let username = ["zahra", "omid", "dorna", "ali"];

// // console.log(username); // dastrasi koli (1)
// // // console.log(username.length);
// // console.log("........................");
// // // for (let index = 0; index < username.length; index++) {
// // //   console.log(username[index]); //(2)
// // // }
// // for (const item of username) {
// //   console.log(item);
// // }
// //splice and middofarray
// let username = [
//   "zahra", //0
//   "omid", //1
//   "dorna", //2
//   "ali", //3
//   23, //4
//   51, //5
//   "ahmad", //6        // lenght = 10
//   "mahmud, hossein", //7
//   "saeed", //8
//   "mozhgan", //9
//   "mehran", //9
// ];

// // username.splice(1, 1); // fahmidi chi shod . parametre aval mige az in index be baad biya ( paramtere 2 ) ro 2 ta hazf kon
// // username.splice(1, 0, "gholi");
// // username.splice(1, 0, false);
// // username.splice(3, 0, 34);
// let middofarray = username.length / 2;
// username.splice(middofarray, 0, "ya hossein");
// console.log(username);

// let number = [1, 2, 3];
// number.push(4);
// console.log(number);
// console.log("....................");
// // ["سلام", "درود", "خداحافظ"]
// let greetings = ["سلام", "درود", "خداحافظ"]; //خداحافظ delete
// greetings.pop("خداحافظ");
// console.log(greetings);
// console.log("....................");
// let alphabet = ["d", "e", "f", "g", "h"];
// // alphabet.splice(0, 0, "a ,b ,c");
// alphabet.unshift("a", "b", "c");
// console.log(alphabet);
// let colors = ["قرمز", "سبز", "آبی", "زرد"]; //sabz delet be jash lila
// colors.splice(1, 1);
// colors.splice(1, 0, "بنفش");
// console.log(colors);
// let numbers = [10, 20, 30, 40, 50];
// let newArr = numbers.at(-1);
// console.log(newArr); //
// //آرایه‌ای به‌صورت [5, 10, 15, 20] داری. با استفاده از splice() از ایندکس ۱، دو عنصر را حذف کن و به‌جای آن‌ها مقدار 100 و 200 بگذار. آرایه‌ی جدید را چاپ کن.
// let numbers = [5, 10, 15, 20];
// numbers.splice(1, 2, 100, 200);
// console.log(numbers);

let country = ["Deutschland ", "Schweiz ", " Osterreich"];
country.shift("Deutschland");
console.log(country);

// let numbers = [1, 2, 3];
// numbers.unshift(0);
// numbers.push(4);
// console.log(numbers);
//adade sahih let numbers1 = [-2, -1, 0, 1, 2];
// let numbers = [-2, -1, 0, 1, 2];
// numbers.pop();
// numbers.shift();
// console.log(numbers);

let numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(2, 2, 99, 100);
console.log(numbers);
