//Promise
// Sync - async همگام و غیر همگام

setTimeout(() => console.log("Log"), 10); //==> in 1 Amaliyat asynce hast chera chun Kharej az barname dare ejra mishe va ma baraye modiriyat kardan amaliyat async bayesti az (promis estefade) konim
//agar amaliyat movafaghiyat amiz bashe ba resolve movajeh mishe agar movafaghiyat amiz nabashe ba reject movajeh mishe
let state = "success";
const getUserList = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (state == "fail") {
      resolve([
        {
          id: 1,
          name: "omidreza",
        },
        {
          id: 2,
          name: "Ahmadreza",
        },
      ]);
    } else {
      reject("not found any user");
    }
  });
});
// Hala har vaght khastam data ro bekhunam bayad .then ro bekhunam  // Harvaght khastam beram error ro bekhunam bayad .catch ro seda bezanam

getUserList
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
//// 📦 Step 30 - Working with JavaScript Promises
// ✅ Added explanation and example for handling async operations using Promise