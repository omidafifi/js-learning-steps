//Continue and Break
//•	از حلقه زودتر خارج بشی → با break
// •	از یک مرحله بپری و بری مرحله بعدی → با continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("number:", i);
}
console.log("............");
// continue
// continue باعث می‌شه یک مرحله از حلقه رد بشه و برنامه بره سراغ مرحله بعدی حلقه
// یعنی ادامه‌ی کدهای اون مرحله دیگه اجرا نمی‌شن
for (let int = 1; int <= 5; int++) {
  if (int === 3) continue;
  console.log("number:", int);
}
