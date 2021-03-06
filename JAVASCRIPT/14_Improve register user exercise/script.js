/*IMPROVE REGISTER USER EXERCISE
Under the inputs in the HTML create a table element with 4 columns for First Name, Last Name, Password and E-mail   = OKAY
Change the register user exercise code. Instead of printing the values in console, try to create a new table row and fill it with that values
You should have a new table row for every new user you make */


document.getElementById("saveBtn").addEventListener("click", function () {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let email = document.getElementById("eMail").value; 
    let pass = document.getElementById("pass").value;

    let resultDiv = document.getElementById("resultDiv");
    showProfileInfo(firstName, lastName, email, pass, resultDiv);
});


function showProfileInfo(firstName, lastName, email, pass, element) {
    element.innerText = "";
    let table = document.getElementById("table");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = `${firstName}`;
    cell2.innerHTML = `${lastName}`;
    cell3.innerHTML = `${email}`;
    cell4.innerHTML = `${pass}`;
}
