// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it.

//let arr = [3, 5, "Not a number", 6, 8, 11, "Something else"];

function sumOfMaxAndMin(arr) {
  //  for (let i = 0; i <= result; i++) {
  //  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = max + min;

  console.log(result);
  return result;
}

let array = [3, 5, 6, 8, 11];

sumOfMaxAndMin(array);
