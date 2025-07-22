//  find and filter methods in array
// متد .find() اولین عنصری از آرایه رو پیدا می‌کنه که شرطش درست باشه، و همون مقدار رو برمی‌گردونه.
// let langs = ["html", `css`, `JS`];
// let result = langs.find((item) => item == "JS");
// console.log(result);
//filter
// متد filter() روی آرایه اجرا می‌شه و همه‌ی آیتم‌هایی رو که یک شرط خاص رو پاس کنن، جدا کرده و به‌صورت آرایه‌ی جدید برمی‌گردونه.
// let scores = [5, 12, 18, 7, 20];
// const passed = scores.filter((score) => score >= 10);
// console.log(passed);

// let langs = ["HTML", "CSS", "JS", "React"];
// const result = langs.filter((item) => item == "JS");
// const result1 = langs.filter((item) => item.length <= 4);
// console.log(result);
// console.log(result1);
// const comments = ["great!", "nice!", "", "thanks!", "perfect"];
// let filterComments = comments.filter((item) => item !== "");
// console.log(filterComments);

let greetings = ["Danke", "Dankbar", " ", "nett von Dir", " ", ""];

let filterGreetings = greetings.filter((item) => item.trim() !== "");
console.log(filterGreetings);
