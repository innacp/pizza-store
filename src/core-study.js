// Function declaration
function work() {}

const study = () => {};

const workable = function () {};

const anotherWorkable = function hello() {
  console.log("Hello from " + hello.name);
};

anotherWorkable({
  name: "Inna",
});

// Immediately Invoked Function Expressions (IIFEs)
(function () {
  console.log("Hello");
})();

// Arguments and Parameters

function greet(name) {
  // name called as a parameter
  console.log("Hello, " + name + "!");
}

// Privetik is argument for "name" parameter
greet("Privetik");

function fnWithDefaultParameters(name, lastName, age = 20) {
  console.log("Hello" + name + lastName + age);
}

fnWithDefaultParameters("Inna", "Deadbreakfast");
// Hello Inna Deadbreakfast 20

fnWithDefaultParameters("Inna", "Deadbreakfast", 30);
// Hello Inna Deadbreakfast 30

// Rest operator
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

const arrayOfNumbers = [1, 2, 3, 4, 5];

// Spread operator
sum(...arrayOfNumbers);

// Arithmetic Operators
let x = 5;
let y = 10;

// Addition
console.log(x + y); // 15

// Subtraction
console.log(x - y); // -5

// Multiplication
console.log(x * y); // 50

// Division
console.log(x / y); // 0.5

// Modulus
console.log(x % y); // 5

//Increment
console.log(++x); //6

//Decrement
console.log(--x); //4

// Comparison Operators
let a = 10;
let b = "10";

//Equal
console.log(a == b); //false

//Sctrict equal

console.log(a === b); //true

// Logical Operators
// Logical AND: && (returns true if both operands are true)
// Logical OR: || (returns true if at least one operand is true)
// Logical NOT: ! (reverses the value of its operand)

let isSunny = true;
let isWarm = false;

// AND: &&
console.log(isSunny && isWarm); // false
console.log(isSunny && !isWarm); // true

// OR: ||
console.log(isSunny || isWarm); // true
console.log(!isSunny || isWarm); // false

// NOT: !
console.log(!isSunny); // false
console.log(!isWarm); // true

let str = "";
console(!str); // true

str = "hello";
console.log(!str); // false

// Callbacks
// name: String
// callback: Function
function callbackExample(name, callback) {
  console.log("Hello");
  console.log("this");
  console.log("is");
  console.log("callback");
  callback(name);
}

// console.log('Hello')
// console.log('this')
// console.log('is')
// console.log('callback')
// console.log('Inna')

// return total sum of numbers
const sum = (a, b) => {
  return a + b;
};

function calculateSum(a, b, callbackSum) {
  callbackSum(a, b);
}

console.log(calculateSum(1, 2, sum));

const fetchData = new Promise((resolve, reject) => {
  if (2 > 5) {
    resolve(5);
  } else {
    reject(2);
  }
});

fetchData()
  .then((data) => {
    console.log(data); // 5
  })
  .catch((e) => {
    console.log(e); // 2
  })
  .finally(() => {});

async function hello(params) {
  try {
    const data = await fetchData();
    console.log(data); // 5
  } catch (e) {
    console.log(e); // 2
  }
}

function renderHouseByReceivedData() {
  fetchData();

  console.log("asdasdasdasd");
}

renderHouseByReceivedData();
