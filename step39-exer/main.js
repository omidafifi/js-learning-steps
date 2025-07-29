// Promis -async-await

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("اول اجرا شود");
//     // resolve();
//     reject();
//   }, 1000);
// });

// console.log(promise); //=> pending
// promise.then(() => console.log("دوم اجرا شود")); //=> fullfilled
// promise.catch(() => console.log("با خطا روبه رو شدیم"));==>rejected

const random = new Promise((resolve, reject) => {
  console.log("Start rund");
  setTimeout(() => {
    const randomeNumber = Math.random();
    if (randomeNumber < 0.2) {
      console.log("Succces", randomeNumber);
      resolve();
    } else {
      console.log("Rejected :", randomeNumber);
      reject();
    }
  }, 2000);
});

random.then(() => console.log("Success end"));
random.catch(() => console.log("Reject End"));
