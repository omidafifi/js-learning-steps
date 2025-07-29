// Promis -async-await

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("اول اجرا شود");
//     // resolve();
//     reject();
//   }, 1000);
// });

// console.log(promise); //=> pending
// // promise.then(() => console.log("دوم اجرا شود")); //=> fullfilled
// // promise.catch(() => console.log("با خطا روبه رو شدیم"));==>rejected

const randomNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random; //randomnumber forgot and Math.random
    if (randomNumber < 20) {
      resolve(randomNumber);
      // console.log("عدد :", randomNumber);
    } else {
      reject("An Error Ocured");
      // console.log("عدد :", randomNumber);
    }
  }, 2000);
});

randomNumber
  .then((result) => console.log(result).then((num) => num * 10))
  .catch((error) => console.log(error)); // ""
