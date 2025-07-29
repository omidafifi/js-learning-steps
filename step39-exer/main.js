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
      resolve();
      console.log("عدد :", randomNumber);
    } else {
      reject();
      console.log("عدد :", randomNumber);
    }
  }, 2000);
});

randomNumber.then(() => console.log("succesed")); // ""
randomNumber.catch(() => console.log("rejected"));// ""
