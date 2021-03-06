/*CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :) */

function createTable(userInputRow, userInputCell) {
    let getBody = document.getElementsByTagName("body")[0];
    let table1 = document.createElement("table");
    let tbody1 = document.createElement("tbody");

    for (let j = 0; j < userInputRow; j++) {
        let row = document.createElement("tr");

        for (let i = 0; i < userInputCell; i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode("This cell is row: " + (j + 1) + " and collumn: " + (i + 1));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tbody1.appendChild(row);
    }
    table1.appendChild(tbody1);
    getBody.appendChild(table1);
    table1.setAttribute("border", "2");
    return table1;
}

createTable(8, 5);