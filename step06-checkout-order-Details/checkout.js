//06-checkout-order-Details
//chalange checkout-order-Details
// ✅ 06-checkout-order-details
// 🎯 Goal: Practice working with numbers, multiplication, total/average calculations, discount, and comparison

// 1. Create 3 variables to store item prices. The last two items were ordered in quantity 2 (multiplication involved)

// 2. Tell the user what the total price is before  discount

// 3. Inform the user what the average price per item is (before discount)

// 4. Inform the user what the final price is after saving %5 dollars with  promo code:
//    "I got 5 on it"

// 5. Compare the final price with the user's account balance

// 6. Log a message to tell the user that he/she can buy or not
//1
// let price1 = 50;
// let price2 = 30;
// let price3 = 17;

// let multiplication = price2 + price3;
// console.log(multiplication);
// //2 ghabl az discount gheymate

// //3 miyangin gheymat har item ghabl az takhfif
// let discount = 5 % 85;
// console.log(discount);
// //4 gheymate nahayi har mahsul baad az dashtan 5% code takhfif
// let gheymtNahayi1 = price1+5% ;
// let gheymtNahayi2 = price2+5% ;
// let gheymtNahayi3 = price3+5% ;
// //5 gheymate nahayi ba darayi user

// //6 1 payam chap kon va be user begu ke mitone kharid kone ya na
//06-checkout-order-Details
// ✅ 06-checkout-order-details
// 🎯 Goal: Practice working with numbers, multiplication, total/average calculations, discount, and comparison

// 1. Create 3 variables to store item prices. The last two items were ordered in quantity 2 (multiplication involved)
// ==> karbar mahsule akhari ro 2bar kharide

// 2. Tell the user what the total price is before  discount

// 3. Inform the user what the average price per item is (before discount)

// 4. Inform the user what the final price is after saving %5 dollars with  promo code:
//    "I got 5 on it"

// 5. Compare the final price with the user's account balance

// 6. Log a message to tell the user that he/she can buy or not
const price1 = 10;
const price2 = 15;
const price3 = 18;
const balance = 60;

const totalPrice = price1 + price2 + price3 * 2;
console.log(totalPrice);
const averagePrice = totalPrice / 4;
console.log("Average price :  " + averagePrice);
const finalPrice = totalPrice * 0.95;
console.log("Final price : " + finalPrice);
const canBuy = balance >= finalPrice;
console.log("Can buy : " + canBuy);
