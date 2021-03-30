//PRIMARY FUNCTION
// function sayHello(name) {
//   console.log('Hi ' + name);
// }
// sayHello();

//
//ARROW FUNCTION-FIRST
const sayHello1 = (name) => console.log("Hi " + name);
sayHello1("Max");

//WITH TWO ARGUMENTS -SECOND
const sayHello2 = (greeting, name) => {
  console.log(greeting + " " + name);
};
sayHello2("HELLO", "MAX");

//WITH NO ARGUMENTS
const sayHello3 = () => {
  console.log(`HI HARDCODED!`);
};
sayHello3();

const sayHello4 = (name) => "Hi " + name;
console.log(sayHello4("Daniela"));

//THIRD
const sayHello5 = (name, phrase = "HI") => console.log(phrase + " " + name);

sayHello5("MANUEL");
sayHello5("MANUEL", "HELLO");

//FOURTH
const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};
checkInput(
  () => {
    console.log("ALL NOT EMPTY!");
  },
  "Hello",
  "12",
  "you",
  "NOT EMPTY"
);
