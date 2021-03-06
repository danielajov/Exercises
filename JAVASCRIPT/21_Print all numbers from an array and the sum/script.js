// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

// ПРВО РЕШЕНИЕ:

// let arrNums = [2, 4, 5, 12, 13, 11, 17, 18, 10, 3, 1];


/*let nums1 = document.getElementById("first");
let firstNumInAList = arrNums[0];
nums1.innerHTML = firstNumInAList;

let nums2 = document.getElementById("second");
let secondNumInAList = arrNums[1];
nums2.innerHTML = secondNumInAList;

let nums3 = document.getElementById("third");
let thirdNumInAList = arrNums[2];
nums3.innerHTML = thirdNumInAList;

let result = document.getElementsByTagName("p")[0];
let newElementResult = `The result is: ${arrNums.length}`;
result.innerHTML = newElementResult; */

// ВТОРО РЕШЕНИЕ:

let arrNums = [2, 4, 5];
let cont = document.getElementById('container');
let ul = document.createElement('ul');
ul.setAttribute('id', 'theList');
let total = 0;


for (i = 0; i < arrNums.length; i++) {
    let li = document.createElement('li');
    cont.appendChild(ul);
    ul.appendChild(li);
    li.innerHTML = arrNums[i];
    total += arrNums[i];
}
let p = document.createElement('p'); 
cont.appendChild(p);
p.innerHTML = total;

