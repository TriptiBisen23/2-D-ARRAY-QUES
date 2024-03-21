const input = require("readline-sync");

let n = input.questionInt("Enter the number of rows:");
let m = input.questionInt("Enter the number of columns:");

let r = [];
let i = 0;

while (i < n)
{
    let j = 0;
    let s = [];
    while (j < m)
    {
        let f = input.questionInt("Enter the 1 element for matrix r((i)][(j)]:");
        s.push(f);
        j++;
    }
    r.push(s);
    i++;
}

// Transpose matrix A (r)
let transposedMatrix = [];
for (let j = 0; j < m; j++)
{
    let row = [];
    for (let i = 0; i < n; i++) 
    {
        row.push(r[i][j]);
    }
    transposedMatrix.push(row);
}

// Display transposed matrix
console.log("Transposed Matrix:");
for (let i = 0; i < m; i++) 
{
    console.log(transposedMatrix[i]);
}




