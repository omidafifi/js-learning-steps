// Closure

//behtare aval berim soraghe mabhase Scops ha

// function init() {
//   var name = "JavaScript";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

const x = Infinity;

if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); //==> Dar inja const x dorots log gerefte mishe va hich rabti be scope haye darune function nadaran

// Berim soraghe Closure
// Closure 1 function ya 1 method mamuli hastesh ke miad 1 method ya tabe dige ro returen mikone ke 1 baste bani harim khosus ro dare ke mohafezat mikone az data haye ma va hame chiz dar method ma hastesh

document.body.innerText = "Hello word";

function outer() {
  const name = "NodeJs";
  function displayName(name) {
    console.log(name);
  }
  return displayName;
}

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const adder5 = makeAdder(5);
const adder10 = makeAdder(10);
console.log(adder5(8321));
console.log(adder10(1));

function makeSize(size) {
  return function () {
    document.body.style.fontSize = `$(size)px`;
  };
}

const size10 = makeSize(10);
const size12 = makeSize(12);
const size14 = makeSize(14);
const size16 = makeSize(16);
const size18 = makeSize(18);

function makeCounter() {
  let privateCounter = 0;
  function changeBy(value) {
    privateCounter += value;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
}

const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());
