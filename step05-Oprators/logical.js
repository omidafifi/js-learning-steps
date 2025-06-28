// Logical Oprators عملگرهای منطقی
const x = 5;
const y = 3;
const z = "5";
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(x > y && x == z); // Logical Oprator == type ro darnazar nemigire x= 5 y=3 hatman dar && bayad hatman har 2 ghesmate and(&&) true bashe
console.log(x > y && x === z); //==> False;
console.log(x > y || x == z); 
//Logicl not ==> !  true bashe false mishe va false bashe be  true  tabdil mishe
console.log(!true);
console.log(!false);
console.log(!x>y); 
