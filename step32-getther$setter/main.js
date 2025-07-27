// Getter and Setter in Classes

class Foo {
  #private;
  constructor(value) {
    this.#private = value;
  }

  get privateProperty() {
    if (this.#private === "Value of Privare") {
      return "This value is not accepted";
    } else {
      return this.#private;
    }
  }

  set changePrivate(value) {
    if (!value) {
      this.#private = "This value is not accepted";
      return;
    }
    if (value.toString().length < 3) {
      this.#private = null;
      return;
    }
    this.#private = value;
  }
}

const foo = new Foo("Value of Privare");
foo.changePrivate = "";
console.log(foo.privateProperty);
