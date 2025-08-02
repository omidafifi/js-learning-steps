//exercise   

async function fetchUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log("📋 All Users:", data);
    } catch (err) {
      console.error("❌ Error fetching users:", err);
    }
  }

  function addUser(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`✅ User ${user.name} added`);
      }, 2000);
    });
  }
  
  async function handleAddUser() {
    const newUser = { id: 11, name: "Omidreza", email: "omid@test.com" };
    const message = await addUser(newUser);
    console.log(message);
  }


  async function sequentialFlow() {
    await fetchUsers();
    await handleAddUser();
    console.log("✔️ All actions done (sequential)");
  }


  async function parallelFlow() {
    const userFetch = fetchUsers();
    const add = handleAddUser();
    await Promise.all([userFetch, add]);
    console.log("✔️ All actions done (parallel)");
  }


  async function errorExample() {
    try {
      const res = await fetch("https://invalid-url");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("🛑 Caught error:", error.message);
    }
  }

  function boilWater() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Boiled water");
      }, 2000); // takes time!
    });
  }
  
  function addTeaBag(water) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${water} + Tea bag added`);
      }, 1000);
    });
  }
  
  async function makeTea() {
    const hotWater = await boilWater();        // Waits until water is boiled
    const teaReady = await addTeaBag(hotWater); // Waits until tea bag is added
    console.log("Your tea is ready:", teaReady);
  }
  
  makeTea();

  function orderPizza() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Pizza 🍕 is here");
      }, 3000);
    });
  }
  
  async function eatDinner() {
    console.log("Ordering pizza...");
    const pizza = await orderPizza(); // Waits for the pizza
    console.log("Eating:", pizza);
  }
  
  eatDinner();


  function washClothes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Clothes are washed");
      }, 2000);
    });
  }
  
  function dryClothes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Clothes are dried");
      }, 1000);
    });
  }
  
  async function doLaundry() {
    const washed = await washClothes();
    console.log(washed);
    const dried = await dryClothes();
    console.log(dried);
  }
  
  doLaundry();