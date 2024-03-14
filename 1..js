const input = require("readline-sync");

let n = input.questionInt("Enter the number of rows: ");
let m = input.questionInt("Enter the number of columns: ");

let r = [];
let c = [];
let i = 0;

// Input for the first matrix r
while (i < n) {
    let j = 0;
    let s = [];
    while (j < m) {
        let f = input.questionInt("Enter the 1 element for matrix r: ");
        s.push(f);
        j++;
    }
    r.push(s);
    i++;
}

i = 0; // Resetting i for input of second matrix c

// Input for the second matrix c
while (i < n) {
    let j = 0;
    let t = [];
    while (j < m) {
        let g = input.questionInt("Enter the 2 element for matrix c: ");
        t.push(g);
        j++;
    }
    c.push(t);
    i++;
}

// Adding matrices r and c and storing the result in a separate matrix
let result = [];
for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
        row.push(r[i][j] + c[i][j]);
    }
    result.push(row);
}

console.log("Resultant Matrix:");
console.log(result);
    
    





