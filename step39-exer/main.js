// Promis -async-await

// const randomNumber = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.random() * 2 + 1;
//     if (number < 2) {
//       resolve(number);
//     } else {
//       reject("عدد بزرگتر از ۲ بود");
//     }
//   }, 1000);
// });

// randomNumber
//   .then((result) => {
//     console.log("Success", result);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });
// //- Changed `.then(resolve)` to `.then(result)` to avoid confusion with the Promise resolve function.
// - Fixed typos: "Succes" → "Success" and "Eror" → "Error"

const thirdNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.random() * 2 + 1;
    if (number <= 2.5) {
      resolve(number);
    } else {
      reject("عدد بزرگ‌تر از ۲٫۵ بود");
    }
  }, 1000);
});

thirdNumber
  .then((result) => {
    console.log("موفق", result);
  })
  .catch((err) => {
    console.log("خطا", err);
  });
//correct Promise creation and random number logic