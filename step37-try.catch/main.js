//Try catch ...error
try {
  // کدی که احتمال دارد خطا بدهد
  let result = 10 / x;
  console.log(result);
} catch (error) {
  // اگر خطایی رخ دهد، این بخش اجرا می‌شود
  console.log("❌ خطا رخ داد:", error.message);
}

try {
  let x = 5;
  let result = 10 / x;
  console.log(result);
} catch (error) {
  console.log("خطا:", error.message);
} finally {
  console.log("این بخش همیشه اجرا می‌شود.");
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("تقسیم بر صفر مجاز نیست!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("خطا:", err.message);
}
