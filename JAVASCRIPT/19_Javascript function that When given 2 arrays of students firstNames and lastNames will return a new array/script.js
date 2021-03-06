// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it

// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]

// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let arrFirstName = ["Bob", "Jill"];
let arrLastName = ["Gregory", "Wurtz"];

function combineNames(arr1, arr2) {
    let finalArray = [];

    for (let i = 0; i < arr1.length; i++) {

        let element1 = arr1[i];
        let element2 = arr2[i];

        let names = `${i + 1}. ${element1} ${element2}`;
        finalArray.push(names);

    }
  
    console.log(finalArray);
    return finalArray;
}

combineNames(arrFirstName, arrLastName);