
//Change the text of all paragraphs and headers with javascript
//Note:The html must not be changed

let heading1 = document.querySelector("#myTitle");
let newElementHeading1 = "This page is even cooler in JS!"
setTimeout (() => heading1.innerText = newElementHeading1, 3000);
console.log(heading1);

let para1 = document.querySelector(".paragraph");
newElementPara1 = "This is an exercise in JS and It's pretty easy.";
para1.innerText = newElementPara1;
console.log(para1);

let anotherDiv = document.getElementsByClassName("anotherDiv")[0];
anotherDiv.firstElementChild;
newElementPara2 = "No really, It's easy in JS if you study!";
anotherDiv.firstElementChild.innerHTML = newElementPara2;
console.log(anotherDiv);

//ADDING TEXT
newElementChild = "learning JS!";
anotherDiv.lastElementChild.innerHTML += newElementChild;

let heading3 = document.getElementsByTagName("h3")[0];
let newElementHeading3 = "Also the last heading is changed in JS!";
heading3.innerText = newElementHeading3;
console.log(heading3);

setTimeout (() => heading3.previousElementSibling.innerText = "I have been changed from JS", 3000);


