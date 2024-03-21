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
        let f = input.questionInt("Enter the element for matrix r[(i)][(j)]:");
        s.push(f);
        j++;
    }
    r.push(s);
    i++;
}

let minElement = r[0][0]; // Initialize minElement with the first element of the matrix.

// the matrix to find the minimum element.
for (let row of r) 
{
    for (let element of row)
    {
        if (element < minElement) 
        {
            minElement = element; // Update minElement if a smaller element is found.
        }
    }
}

console.log("The minimum element in the matrix is:", minElement);





