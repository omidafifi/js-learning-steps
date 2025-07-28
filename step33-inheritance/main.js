// Inheritance

class Human {
  fullName;
  identitiy;
  age;
  gender;

  walk() {
    console.log("Walking....");
  }
  eat() {
    console.log("eating....");
  }
  sleep() {
    console.log("sleeping....");
  }
}

class Employee extends Human {
  constructor(fullName, identitiy, age, gender) {
    super();
    this.fullName = fullName;
    this.identitiy = identitiy;
    this.age = age;
    this.gender = gender;
  }

  goToWork() {
    console.log(`this ${this.fullName} -this${this.walk}`);
  }
}
const employee = new Employee("omidreza", 2280993929, 34, "male");
employee.goToWork();
