/*HOMEWORK PART 3
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!*/

function atmRequestForMoney(totalMoney) {
  // let totalMoney = 10000;
  let userInput = prompt('Enter your choice: ');
  let moneyInCash = parseInt(userInput);
  if (moneyInCash > totalMoney) {
    alert('Not enough money.');
  } else if (moneyInCash < 1) {
    alert('You need to enter an absolute number!');
  } else {
    alert(`Your money in cash are: ${moneyInCash}$ and you have ${totalMoney - moneyInCash}$ left.`);
    return moneyInCash;
  }
 }
 
atmRequestForMoney(10000);


