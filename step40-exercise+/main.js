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