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
var eightValue = "Eight";
eightValue = 8; // 値や型を変更することが可能
console.log(eightValue); // 8

// ローカル変数
let nineValue = "Nine";
nineValue = 9; // 値や型を変更することが可能
console.log(nineValue);

// 定数
const TEN_VALUE = "Ten";
// 値や型を変更することができない
// Error: SyntaxError: unknown: "ten" is read-only (/index.js:1)
// TEN_VALUE = 10;

// 変数から変数への代入
var a = "a";
var b = "b";

b = a; // 値コピー
console.log(b); // "a"
b = "c";
console.log(a); // "a"（値コピーなので変数aには影響しない）

// 初期化されていない変数の値はnull
var nothing;
console.log(nothing); // null

// 四則演算
console.log(1 + 2 - 3 * 4 / 5);

// インクリメント、デクリメント
var count = 1;
count++;
console.log(count); // 2
count--;
console.log(count); // 1

// nullにに対する演算
nothing = nothing + 1;
console.log(nothing); // null

// 浮動小数
var floatNumber = 0.001;
console.log(floatNumber); // 0.001
console.log(floatNumber * 100); // 0.1
console.log(floatNumber / 10); // 0.0001

// 剰余演算子
console.log(10 % 4); // 2

// +=演算子、-=演算子
var price = 1000;
price += 200;
console.log(price); // 1200
price -= 100;
console.log(price); // 1100
