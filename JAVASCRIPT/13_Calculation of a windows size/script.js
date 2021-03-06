/*FIND WINDOW SIZE
Write a Javascript program to get the width and height of the window
When you resize the window, the program should print the actual width and height
Time to accomplish: 15 minutes*/


window.addEventListener("resize", function (){
    console.log(`Width is: ${window.innerWidth} Height is: ${window.innerHeight}`);
})