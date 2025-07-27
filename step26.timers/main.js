// Timers in Js
console.log("first log");
setTimeout(function () {
  console.log("Hello setTimeout");
}, 500);
console.log("second log");
//aval code hayi ke call backfunction nistan ejra mishan baad ma baghi dasturat

setTimeout(() => {
  console.log("third log");
}, 10);

setInterval(() => {
  console.log("Hello word");
}, 25);
