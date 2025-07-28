//static methods/static properties

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static pi = 3.14159;
}

// استفاده از متد استاتیک
console.log(MathUtils.add(3, 5)); // 8

// دسترسی به ویژگی استاتیک
console.log(MathUtils.pi); // 3.14159
const utils = new MathUtils();
utils.add(2, 3); // ❌ TypeError: utils.add is not a function
class Config {
  static appName = "MyApp";
  static version = "1.0.0";

  static showInfo() {
    console.log(`${Config.appName} - Version ${Config.version}`);
  }
}

Config.showInfo(); // خروجی: MyApp - Version 1.0.0
