// playground code
// https://scrimba.com/c/cMrnbqCK

console.log("Hello World");

// インラインコメント

/*
    複数行
    コメント
*/

/*
データ型
 - undefined
 - null
 - boolean
 - string
 - symbol
 - number
 - object
*/

// グローバル変数
var eight = "Eight";
eight = 8;
console.log(eight); // 8

// ローカル変数
let nine = "Nine";
nine = 9;
console.log(nine);

// 定数
const ten = "Ten";
// Error: SyntaxError: unknown: "ten" is read-only (/index.js:1)
// ten = 10;

var a = "a";
var b = "b";

b = a; // 値コピー
console.log(b); // "a"
b = "c";
console.log(a); // "a"（値コピーなので変数aには影響しない）

var nothing;
console.log(nothing); // null
