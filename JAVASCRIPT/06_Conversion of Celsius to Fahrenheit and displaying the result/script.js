/*STUDENT EXERCISE - #2
Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);
Time to accomplish: 15 minutes */

function fahrenheitToCelsiusConversion(celsius) {
    let result = celsius * 1.8 + 32;
    return result;
}

function celsiusToFahrenheitConversion(fahrenheits) {
    let result = (5 / 9) * (fahrenheits - 32);
    return result;
}

let personChoice = prompt ("Enter F for Fahrenheit and C for Celsius");
let personInput = parseInt(prompt("Please enter value!"));

if (personChoice === "F") {
    console.log(`${celsiusToFahrenheitConversion(personinput)}C`);
} else if (personChoice === "C") {
    console.log(`${fahrenheitToCelsiusConversion(personInput)}F`);
} else {
    console.log("ERROR");
}


