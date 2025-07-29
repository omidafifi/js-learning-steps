// Scope and IIFE
// IIFE This word means functioni ke belafasele farakhani mishe

var x = 10;
(function () {
  var x = 25;
  console.log("Hello word "); // dar inja mikhastan hamun lahze in in function amliyatesh ejra beshe ghadim va dige un ro baadan seda nazan va baraye adam tadakhole esme moteghayer ha in kari ro anjam midadan
})(); // hanuzam karbord dare ama na kheili ziyad chun dar version jadid scop amade va in moshkel ro bartaraf karde

// Scope 
let z = 5;

{
  let z = 4;
}
console.log(z);

//Added explanation and examples for Execution Context, Scope, Scope Chain, and IIFE in JavaScript.
