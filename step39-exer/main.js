// Promis -async-await

const randomNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.random() * 2 + 1;
    if (number < 2) {
      resolve(number);
    } else {
      reject("عدد بزرگتر از ۲ بود");
    }
  }, 1000);
});

randomNumber
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });
