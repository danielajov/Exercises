/*

Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined */

function differentTypes(input) {
  let inputType = typeof input;
  console.log(inputType);
  return inputType;
}

let undefinedType;

differentTypes(null);
differentTypes("2" == 2);
differentTypes(50);
differentTypes("Daniela");
differentTypes(undefinedType);
