// Promis -async-await

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("اول اجرا شود");
    // resolve();
    reject();
  }, 1000);
});

// promise.then(() => console.log("دوم اجرا شود"));
promise.catch(() => console.log("با خطا روبه رو شدیم"));
