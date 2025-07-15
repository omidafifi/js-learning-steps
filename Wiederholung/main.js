//for in ==> ich habe falsh gemacht und habe 3 Fehler
const USER = {
  firstName: "Omidreza",
  lastName: "Afifi",
  age: 34,
};
for (const key in USER) {
  console.log(key);
  console.log(USER[key]);
}
