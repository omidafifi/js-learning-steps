// Promis -async-await
// console.log("دوم باید اجرا باشه ");

// setTimeout(() => {
//   console.log("اول باید اجرا باشه ");
// }, 1000);
// console.log("دوم باید اجرا باشه ");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("اول باید اجرا باشه ");
    resolve();
  }, 1000);
});

promise.then(() => console.log("دوم باید اجرا باشه "));
