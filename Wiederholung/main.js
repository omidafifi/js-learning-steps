//for in ==> ich habe falsh gemacht und habe 3 Fehler
// const USER = {
//   firstName: "Omidreza",
//   lastName: "Afifi",
//   age: 34,
// };
// for (const key in USER) {
//   console.log(key);
//   console.log(USER[key]);
// }
// javab soale 1 ==> dar halghe for in maghadir object va name key ha peymayesh mishavad . 
//in javab dorost tar hast فقط کلیدهای (keys) یک آبجکت پیمایش می‌شن. اگر بخوای مقدارها رو هم ببینی، باید از object[key] استفاده کنی.
//javabe soal 2 //
const car = { brand: "Toyota", year: 2021 };
for (const key in car) {
  console.log(key);
}
// khoruji in code brand . year  va toyota 2021
//javabe soale 3 
const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
};

for (const key in book) {
  console.log(key);
  console.log(book[key]);
}
//javabe soale 4 
// agar eshtebah nakonam nabayad for in vase array ha be kar ravad chun array ha ro ba for of pish mibarim vase halghe ha 

// javabe soale 5 => const obj = { a: 1, b: 2 };
const obj = { a: 1, b: 2 };
obj.c = 3;

Object.prototype.d = 4;

for (const key in obj) {
  console.log(key);
}
// in halat ro nakhundam ama saay mikonam javb ro bedam be nazaram khorujish mishe 

// a 
// b
// c
// d