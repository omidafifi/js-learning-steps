//functions
// function sayHello() {
//   console.log("Hi there ");
// }
// sayHello();

// pas 1 function ba kalame kelidi fuction shoru mishe jeloye un bayad parantez baz va baste hatman bashe ke dar un parameter haye ma gharar migire va dar dele fucnction ma ham dasturat ke bayesti amal shavad gharar migire
// va nokte mohem in ke hatman bayad baadesh function ro seda zad chejuri in ke esme function ro miyarim va hatman bayesti in () dar jelo function gharar girad
// function name(params) {
//har tabe bayad 1 kar ro anjam bede maslan faghat adade aval ro bayad peyda kone

// }
// name==>();
// function log(message) {
//   console.log(message);
// }
// log("omid is here");
let userInput = 0;
let temp = 0;
function primeNumber(userInput) {
  if (typeof userInput === "number" && userInput > 1) {
    let temp = 0;
    for (let i = 1; i <= userInput; i++) {
      if (userInput % i === 0) {
        temp++;
      }
    }

    if (temp === 2) {
      console.log("✅ عدد اول است:", userInput);
    } else {
      console.log("❌ عدد اول نیست:", userInput);
    }
  } else {
    console.log("⚠️ ورودی معتبر نیست:", userInput);
  }
}

// تست تابع:
primeNumber(1); // ❌ عدد اول نیست
primeNumber(2); // ✅
primeNumber(3); // ✅
primeNumber(4); // ❌
primeNumber(5); // ✅
primeNumber(6); // ❌
primeNumber(7); // ✅
primeNumber("fda"); // ⚠️ ورودی نامعتبر
