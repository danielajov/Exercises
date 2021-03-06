console.log("Hello from my first Homework!")

//Number of phones.
let numberOfPhones = 30;
console.log("Number of phones: ", numberOfPhones);

//Price of one phone.
let thePriceOfOnePhone = 119.95;
console.log("Price of phone: ", thePriceOfOnePhone);

//Declaring that the tax rate is 5%.
let taxRateOfThePhone = 5;
console.log("Tax rate: ", taxRateOfThePhone);

//The price of thirty phones without tax rate.
let thePriceOfThirtyPhones = thePriceOfOnePhone * numberOfPhones;
console.log("the Price Of Thirty Phones without 5%: ", thePriceOfThirtyPhones);

//Only the Tax rate of 30 phones.
let taxRateOfThirtyPhones = ( taxRateOfThePhone/100 * thePriceOfThirtyPhones );
console.log("Tax rate od thirty phones: ", taxRateOfThirtyPhones);

////THE RESULT: Price of thirty phones with tax rate.
let thePriceOfThirtyPhonesWithTaxRate = (thePriceOfThirtyPhones + taxRateOfThirtyPhones);
console.log("The Result: Price Of Thirty Phones With Tax Rate: ", thePriceOfThirtyPhonesWithTaxRate);






