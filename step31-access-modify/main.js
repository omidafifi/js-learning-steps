//access-modify
// class User {
//   //Private    #
//   //Public
//   name;
//   family;
//   constructor(firstName, lastName) {
//     this.firstName = name;
//     this.family = lastName;
//   }
// }

// const user1 = new User("Omidreza", "Afifi");
// user1.name = "Ahmad";
// user1.family = "Mohammadi"; // inja avaz mishe nabayad ejaze in ro ma bedim
// console.log(user1.name, user1.family);
// hala vase in ke in etefagh nayofte va hame chiz ok va safe beshe az access-modify estefade mikonim
// Ke dar javaScript Privat and Public darim faghat
class Users {
    #firstName;
    #lastName;
    constructor(name, family) {
      this.#firstName = name;
      this.#lastName = family;
    }
  
    // Returns the user's first and last name as an array
    getFullname() {
      return [this.#firstName, this.#lastName];
    }
  }
  
  const user2 = new Users("Zahra", "Yazdanpanahi");
  const [firstName, lastName] = user2.getFullname();
  console.log(firstName);  // Zahra
  console.log(lastName);   // Yazdanpanahi
  // Outputs user's full name safely using private fields