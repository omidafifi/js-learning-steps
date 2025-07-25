//Rest and Spread
// rest Oprators

function showNames(...names) {
  console.log(names);
}
showNames("Ali ", "Sara", "Reza");

// ...names  Yaani har chi arguman hast biad berize to in array

function sumAll(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
console.log(sumAll(3, 5, 10));
//inja tabe(function) ma har tedad adadi ke begiri ba ham jam mikone

