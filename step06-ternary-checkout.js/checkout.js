// ✅ 06-checkout-order-details
// 🎯 Goal: Practice working with numbers, multiplication, total/average calculations, discount, and comparison

// 1. Declare three product prices as numbers.
const product1 = 43;
const product2 = 17; // Ordered twice
const product3 = 23;

// 2. Total price before discount
const totalPrice = product1 + product2 * 2 + product3;
console.log("🧮 Total price (before discount):", totalPrice);

// 3. Apply 15% discount if total is more than 100
let finalPrice = totalPrice;
if (totalPrice > 100) {
  finalPrice *= 0.85; // Apply 15% discount
}
console.log("💰 Final price (after discount):", finalPrice);

// 4. Check if final price is truthy
console.log("✅ Is final price truthy?", finalPrice ? "Yes" : "No");

// 5. Declare user balance
let usersBalance; // undefined on purpose
usersBalance ??= 70; // Use default if undefined/null
console.log("💳 User's balance:", usersBalance);

// 6. Compare balance with final price
const canBuy = usersBalance >= finalPrice;
const message = canBuy ? "🎉 You can buy these products!" : "❌ Insufficient balance.";
console.log("🛍️", message);

// 7. Show success message only if both conditions are true
finalPrice && canBuy && console.log("✅ Purchase complete!");