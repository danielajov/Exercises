//Create an array of numbers (of your choice) and perform three array operations on it: filter
//for numbers greater than 5, map every number to an object which holds the number on some property
//(e.g. "num") and reduce the array to a single number (the multiplication of all numbers).

//filter
const arrayOfNums = [1, 2, 3, 4, 5, 6];
const filteredArrayOfNums = arrayOfNums.filter((val) => val > 5);
// console.log(arrayOfNums);
console.log(filteredArrayOfNums);

//map
const mappedNumbers = arrayOfNums.map((val) => ({ num: val }));
console.log(mappedNumbers);

//reduce
const reduceSecondAssignment = arrayOfNums.reduce(
  (currentResult, currentValue) => currentResult * currentValue,
  1
);
console.log(reduceSecondAssignment);

// Write a function ("findMax") which executes some logic that finds the largest number
//in a list of arguments. Pass the array from task 1 split up into multiple arguments to that function.

//rest operator
function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax(...arrayOfNums));

//Tweak the "findMax" function such that it finds both the minimum and maximum and returns
//those as an array. Then use destructuring when calling the function to store
//the two results in separate constants.

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];

  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...arrayOfNums);
console.log(min, max);

// Create a list (and possibly some surrounding logic) where you ensure
// that NO duplicate values can be added. Use whichever approach seems
// appropriate to you.

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
