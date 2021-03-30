const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

let sum = 0;
for (const num of numbers) {
  if (operation === 'SUM') {
  sum += validateNumber(num); }
  else {  sum -= validateNumber(num);}
}
resultHandler(sum, 'The result after adding all numbers is: ');
};

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum, 'The result after adding all numbers is: ');
// };
 
const showResult = (messageText, result) => {
alert(messageText + " " + result);
};

combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 'fsda', -3, 6, 10);
combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBTRACT', 1, 10, 15, 20);
