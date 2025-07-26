// Clasure

//behtare aval berim soraghe mabhase Scops ha

function init() {
  var name = "JavaScript";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

const x = Infinity;

if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); //==> Dar inja const x dorots log gerefte mishe va hich rabti be scope haye darune function nadaran


