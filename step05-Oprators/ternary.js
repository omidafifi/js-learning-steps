// Ternary Operators ==>fekr konam behesh migan amalgar haye 3gane
// Kheili por karbord hast makhsusan vaghti berid soragh react
//dar nullish 0 ??0  ama ternary 0 ? 0 : hast
//            shart(true or false) ?agar (true bashe true mide) : (vali agar shart false bahe inja be man neshun mide)
// gerefti chi shod
// in kheili mohem hast
let x = 5;
let y = 6;
console.log(x < y);
// x < y ? "yes" : "no";
console.log(true ? "yes" : "no");
console.log(false ? "yes" : "no");
//
console.log(x < y ? "yes" : "no");
console.log(x > y ? "yes" : "no");
console.log(x <= y ? "yes" : "no");
console.log(x >= y ? "yes" : "no");
//kheili estefade mishe

//
let age = 20;
console.log(age >= 20 ? "Adult" : "Minor");
//

let isLoggedIn = false;
// console.log((isLoggedIn = true ? "Welcome back" : "Please log in"));
console.log(isLoggedIn ? "Welcome back" : "Please log in");
//
// 📌 پس همیشه این قانون رو یادت باشه:

// اگر متغیر خود به‌تنهایی boolean (درست یا غلط) باشه، دیگه نیاز نیست بنویسی === true یا === false

//
let accountBalance = 100;
let finalPrice = 120;
console.log(
  accountBalance >= finalPrice ? "You can buy it!" : "Not enough balance."
);

// let score = 85;
// console.log(score>90?"Grade: A"?score===70&&89"Grade: B":"Grade: C");
let score = 85;
console.log(
  score >= 90
    ? "Grade: A"
    : score >= 70 && score <= 89
    ? "Grade: B"
    : "Grade: C"
);
