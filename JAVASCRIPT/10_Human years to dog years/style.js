/* HOMEWORK PART 2
Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well */

function humanToDogYears() {

    let humanYear = prompt("Enter human years to know your dog years!");
    let parsedInput = parseInt(humanYear);
    let dogsAge = parsedInput * 7;
    console.log(dogsAge);
    return dogsAge;

}

humanToDogYears();

// function dogToHumanYears() {

// let dogYear = prompt("Enter dog years to convert into human years!");
// let parsedInput = parseInt(dogYear);
// let humanAge = dogYear / 7; 
// console.log(humanAge);
// alert(`Your dog is ${humanAge} human years old`);
// return humanAge;
// }

// dogToHumanYears(); 


