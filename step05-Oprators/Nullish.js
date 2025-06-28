// Nullish Coalescing Oprator
//2 ta Question mark hast ?? 0 ?? 0 ==> natije 1 ki az 0 ha hast va in moheme uni ro mide ke undefined nabashe gerefti chi shod
// Soal mosahebe bude
let name;
console.log(typeof name);
let name1 = null;
let name9 = null;
console.log(typeof name1);
let number = 33;
console.log(name ?? number); //==> number bargardund chera chun name undefined bud
console.log(name ?? name1); //==> number bargardund chera chun name undefined bud
let name4 = " omid";
console.log(name4 ?? number);
console.log(name1 ?? name9); //==> agar har du null bashe miyad null ro dar akhar bar migardune chun dige rahi nadare

