// //sort and spilit and join and reduce

// // let numbers = [3, 6, 8, , 9, 313, 6, 3215, 321, 7, 5, , 23, 1, 6, 8, 10, 23];
// // let skills = ["js", "node.js", "mongodb", "html", "css"];

// // numbers.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a == b) return 0;
// //   if (a < b) return -1;
// // }); // sort miyad bar asase horufe alphabet sort mikone na az lahaze vazne adad gerefti chi shod / magar ba in ravesh
// // numbers;
// // sort((a, b) => {
// //   return a - b;
// // });
// // numbers.sort((a, b) => b - a);
// // console.log(numbers);
// // //🟩 مرحله ۱: مفهوم کلی

// // sort() یک متد آرایه‌ای است که عناصر آرایه را مرتب می‌کند.

// // 🔹 اگر رشته (string) باشه → بر اساس حروف الفبا
// // 🔹 اگر عدد باشه → باید یه تابع بهش بدی
// let langs = ["HTML", "CSS", "JavaScript", "React"];
// langs.sort();
// console.log(langs);

// let nums = [10, 3, 100, 5];
// nums.sort();
// console.log(nums); //[10, 100, 3, 5] ❌ چون به صورت string مرتب شده!

// nums.sort((a, b) => a - b);
// console.log(nums); // [3, 5, 10, 100]

// nums.sort((a, b) => b - a);
// console.log(nums); // [100, 10, 5, 3]

// let scores = [19, 4, 21, 7, 13];

// // اینجا کدت رو بنویس و بفرست:

// scores.sort((a, b) => a - b);
// console.log(scores);

// let students = ["Erfan", "Zahra", "Ali", "Omidreza", "Nima", "Bahram"];

// students.sort();
// console.log(students);
// students.reverse();
// console.log(students);
// spilit ==> mehod sting hast na array

let myStringlist = "omid , ali , zahra, dorna , mahdi ";

const arr = myStringlist.split("zahra");
console.log(arr);
//methode moghabele spilit join hast
let myArrlist = ["omid ", "ali", "zahra", "dorna", "mahdi"];

const arr2 = myArrlist.join("omid  - ");
console.log(arr2);
console.log(arr2.split("-"));
console.log(arr2);
// method raidos
// khoruji ke be man mide number hastesh agar etelaate eshtebah behesh bedi maslan not a number = nan bede .

let numbers = [1, 2, 3, 5, 3, 7, 8];

let Result = numbers.reduce((prev, curr) => {
  return prev * curr; // + - ? % ** usw .....
});
console.log("Reduce :", Result);
