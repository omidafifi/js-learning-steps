//Splice
// let noten = [18, 15, 3, 20, 18.5];
// console.log(noten);
// for (const item of noten) {
//   //->	•	وظیفه‌اش اینه که روی یک مجموعه (مثل آرایه یا رشته) حرکت کنه و به هر عنصر دسترسی بده.
//   console.log(item); //-> 	•	هیچ کاری خودش انجام نمی‌ده مگر اینکه در داخلش دستوراتی بنویسی (مثلاً console.log())
// }

// let temp = 0;
// for (const item2 of noten) {
//   temp += item2;
// }
// console.log(temp);
let names = ["ali", " javad ", " mohammadreza ", "erfan"];
console.log(names);
// names.splice(1, 2);
// names.splice(1, 1);
// names.splice(2, 0), "milad", "hassan";
const middOfArray = names.length / 2;
names.splice(middOfArray, 0, "Omid", "Reza");
console.log(names);
v vb v v v v v v 