// ✅ Rest and Spread Operators in JavaScript
// مثال Rest: همه آرگومان‌ها را در یک آرایه جمع می‌کند
// rest Oprators

function showNames(...names) {
  console.log(names);
}
showNames("Ali ", "Sara", "Reza");

// ...names  Yaani har chi arguman hast biad berize to in array

// مثال دیگر از Rest: جمع کردن تمام ورودی‌های عددی
function sumAll(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
console.log(sumAll(3, 5, 10));
//inja tabe(function) ma har tedad adadi ke begiri ba ham jam mikone

// مثال Spread: ترکیب آرایه‌ها با باز کردن اعضای arr1
//lets go to spread Oprators :

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

//یعنی ...arr1 اعضای arr1 رو باز کرد و ریخت داخل arr2.

// demonstrate usage of Rest and Spread operators in JavaScript

// - Implemented `showNames` function using Rest operator to collect arguments into an array
// - Created `sumAll` function to sum any number of numeric arguments via Rest operator
// - Used Spread operator to merge arrays by spreading elements of one array into another
// - Added explanatory comments for better code understanding