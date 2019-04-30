console.log("Hello World");

// in-line comment

/*
    multi-line
    comment
*/

/*
Data Types
 - undefined
 - null
 - boolean
 - string
 - symbol
 - number
 - object
*/

// Variable
var eight = "Eight";
eight = 8;
console.log(eight); // 8

// Variable (scoped)
let nine = "Nine";
nine = 9;
console.log(nine);

// Constant
const ten = "Ten";
// Error: SyntaxError: unknown: "ten" is read-only (/index.js:1)
// ten = 10;

var a = "a";
var b = "b";

b = a;
console.log(b); // "a"
b = "c";
console.log(a); // "a"

var nothing;
console.log(nothing); // null
