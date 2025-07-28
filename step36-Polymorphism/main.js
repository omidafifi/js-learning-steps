//Polymorphism
class Animal {
    makeSound() {
      console.log("Some generic animal sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Bark");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("Meow");
    }
  }
  
  function playSound(animal) {
    animal.makeSound(); // polymorphic behavior
  }
  
  const animals = [new Dog(), new Cat(), new Animal()];
  
  animals.forEach(playSound);