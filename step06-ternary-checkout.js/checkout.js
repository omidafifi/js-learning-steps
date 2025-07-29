// //06-checkout-order-Details
// //chalange checkout-order-Details
// // ✅ 06-checkout-order-details
// // 🎯 Goal: Practice working with numbers, multiplication, total/average calculations, discount, and comparison

// // 1. Create 3 variables to store item prices. The last two items were ordered in quantity 2 (multiplication involved)

// // 2. Tell the user what the total price is before  discount

// // 3. Inform the user what the average price per item is (before discount)

// // 4. Inform the user what the final price is after saving %5 dollars with  promo code:
// //    "I got 5 on it"

// // 5. Compare the final price with the user's account balance

// // 6. Log a message to tell the user that he/she can buy or not
// //1
// // let price1 = 50;
// // let price2 = 30;
// // let price3 = 17;

// // let multiplication = price2 + price3;
// // console.log(multiplication);
// // //2 ghabl az discount gheymate

// // //3 miyangin gheymat har item ghabl az takhfif
// // let discount = 5 % 85;
// // console.log(discount);
// // //4 gheymate nahayi har mahsul baad az dashtan 5% code takhfif
// // let gheymtNahayi1 = price1+5% ;
// // let gheymtNahayi2 = price2+5% ;
// // let gheymtNahayi3 = price3+5% ;
// // //5 gheymate nahayi ba darayi user

// // //6 1 payam chap kon va be user begu ke mitone kharid kone ya na
// //06-checkout-order-Details
// // ✅ 06-checkout-order-details
// // 🎯 Goal: Practice working with numbers, multiplication, total/average calculations, discount, and comparison

// // 1. Create 3 variables to store item prices. The last two items were ordered in quantity 2 (multiplication involved)
// // ==> karbar mahsule akhari ro 2bar kharide

// // 2. Tell the user what the total price is before  discount

// // 3. Inform the user what the average price per item is (before discount)

// // 4. Inform the user what the final price is after saving %5 dollars with  promo code:
// //    "I got 5 on it"

// // 5. Compare the final price with the user's account balance

// // 6. Log a message to tell the user that he/she can buy or not
// const price1 = 10;
// const price2 = 15;
// const price3 = 18;
// const balance = 60;

// const totalPrice = price1 + (price2 + price3 * 2);
// console.log(totalPrice);
// const averagePrice = totalPrice / 4;
// console.log("Average price :  " + averagePrice);
// const finalPrice = totalPrice * 0.95;
// console.log("Final price : " + finalPrice);
// const canBuy = balance >= finalPrice;
// console.log("Can buy : " + canBuy);
// const message = canBuy ? "Great you can buy these products" : "Sorry u cant";
// ✅ EXERCISE 01: Mixed operators and logic — simulate checkout logic

/*
1. Declare three product prices as numbers.
2. One of the products was ordered twice — calculate the total before discount.
3. If total price is more than 100, apply a 15% discount using an arithmetic and assignment operator.
4. Check if the final price is "truthy".
5. Declare a user's balance and compare it to the final price.
6. If the balance is not defined (null or undefined), set a default balance using the nullish coalescing operator.
7. Log whether the user can buy the items or not using a ternary operator.
8. Use a logical AND (&&) to log "✅ Purchase complete" only if final price is defined AND user has enough money.
*/
// const product1 = 43;
// const product2 = 17; //=>twice
// const product3 = 23;
// const usersBalance = 35;

// const totalPrice = product1 + product2 * 2 + product3;
// console.log(totalPrice);
// const finalPrice = totalPrice > 100;
// console.log(finalPrice ? "truhy" : "falsy");
// console.log(usersBalance === finalPrice);
// if (usersBalance) {
//   console.log("Null");
// }
// console.log("✅ Purchase complete" && finalPrice);
// 5 /8
// ✅ تمرین شماره ۱: ترکیب عملگرها و منطق در خرید آنلاین

/*
۱. سه متغیر عددی تعریف کن که قیمت سه محصول مختلف رو نگه‌داری می‌کنن.
۲. فرض کن یکی از این محصولات دوبار خریداری شده. مجموع قیمت‌ها رو قبل از تخفیف محاسبه کن.
۳. اگر مجموع قیمت‌ها بیشتر از ۱۰۰ بود، با استفاده از عملگر ترکیبی، یک تخفیف ۱۵٪ اعمال کن.
۴. بررسی کن که آیا قیمت نهایی (finalPrice) مقدار truthy داره یا نه.
۵. موجودی حساب کاربر (balance) رو تعریف کن و با قیمت نهایی مقایسه کن.
۶. اگر موجودی تعریف نشده بود (null یا undefined)، با استفاده از nullish operator یک مقدار پیش‌فرض براش تعیین کن.
۷. با استفاده از عملگر شرطی (ternary)، پیامی به کاربر نشون بده که آیا می‌تونه خرید کنه یا نه.
۸. با استفاده از عملگر منطقی &&، فقط زمانی پیام "✅ خرید با موفقیت انجام شد" رو چاپ کن که:
   - قیمت نهایی تعریف شده باشه
   - و موجودی کاربر برای خرید کافی باشه
*/
//1
const product1 = 43;
const product2 = 17; //=>twice
const product3 = 23;
//2
const totalPrice = product1 + product2 * 2 + product3;
console.log(totalPrice);
//3
if (totalPrice > 100) {
}
//4

//Ternary Operators practic