let person = {
  name: "ali",
  age: 30,

  getInfo: function () {
    return `my name: ${this.name}, age: ${this.age}`;
  },
};

console.log(person.getInfo());

let person1 = {
  name: "liam",
  age: 25,

  getInfo: function () {
    return `my name: ${this.name}, age: ${this.age}`;
  },
};

console.log(person1.getInfo());
