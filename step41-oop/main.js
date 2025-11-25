const currencyFormatter = new Intl.NumberFormat("fa-IR");

class Product {
  title;
  price;

  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.title} - Price: ${this.formatPrice()}`;
  }

  formatPrice() {
    return `${currencyFormatter.format(this.price)} تومان`;
  }

  static fromData(data) {
    return new Product(data.title, data.price);
  }
}

class ProductInventory {
  products = [];

  constructor(products = []) {
    this.products = [...products];
  }

  add(product) {
    this.products.push(product);
  }

  getTotalValue() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalLabel() {
    return `${currencyFormatter.format(this.getTotalValue())} تومان`;
  }

  printCatalog(label = "📦 کاتالوگ محصولات") {
    console.log("=".repeat(55));
    console.log(label);
    this.products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.getInfo()}`);
    });
    console.log("کل ارزش محصولات:", this.getTotalLabel());
    console.log("=".repeat(55));
  }
}

const laptop = new Product("Laptop", 2000000);
const mouse = new Product("Mouse", 500000);
const keyboard = new Product("Keyboard", 750000);

const inventory = new ProductInventory([laptop, mouse, keyboard]);
inventory.printCatalog("✅ محصولات اولیه");

const headset = Product.fromData({ title: "Headset", price: 1200000 });
inventory.add(headset);
console.log("محصول جدید اضافه شد:", headset.getInfo());
console.log("کل ارزش به‌روز شده:", inventory.getTotalLabel());
