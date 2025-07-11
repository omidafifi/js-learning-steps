//map
//map() روی هر عنصر آرایه یک تابع اجرا می‌کند و آرایه‌ای جدید می‌سازد که شامل نتایج اجرای آن تابع است.
let skills = ["js", "Nodejs", "mangodb", "reactjs", "html", "css"];

let newArray = skills.map((item) => item.toLowerCase());
let newArray1 = skills.map((item) => item.toUpperCase());
console.log(newArray);
console.log(newArray1);
let numbers = [1, 3, 5, 6, 7, 8, 9];
let multi = numbers.map((item) => item * 2);
console.log(numbers);
console.log(multi);
//feat: add examples demonstrating map() method for string case conversion and number multiplication