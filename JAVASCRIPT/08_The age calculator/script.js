/*STUDENT EXERCISE - #3
THE AGE CALCULATOR
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the age based on those years.
outputs the result to the screen like so: "You are NN years old"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
Time to accomplish: 15 minutes. */

function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();
  let result = currentYear - birthYear;
  console.log(result);
  return result;
}

calculateAge(1992);
calculateAge(1960);
calculateAge(1989);
