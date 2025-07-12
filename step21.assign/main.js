//Assign methods in Objects
// 1 zamani hast ma mikhaym object ha ro ba ham tarkib konim
// let user = {
//   firstName: "omidreza",
//   lastName: "afifi",
//   age: 34,
// };

// let information = {
//   langs: "hmtl , css , JavaScript , react",
//   skills: "mongodb , typescript",
// };

// let security = {
//   userName: "admin",
//   password: "12345",
//   email: "omidrzaf@gmail.com",
// };

// const newObject = Object.assign(user, { security: { ...security } });
// console.log(newObject);

let user = {
  name: "Omidreza",
  age: 34,
};

let contact = {
  email: "omid@gmail.com",
  phone: "0912-000-0000",
};

let fullProfile = { ...user, ...contact }; // {...object, ...object} merg
console.log(fullProfile);

let copyUser = { ...user }; // {...object}

console.log(copyUser);
// نتیجه: { name: "Omidreza", age: 34 }

let { name: userName, age: userAge } = user;

console.log(userName); // "Omidreza"  // Destructuring + تغییر نام متغیر:
console.log(userAge); // 34
