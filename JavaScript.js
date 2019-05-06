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

// 変数
var eightValue = "Eight";
eightValue = 8; // 値や型を変更することが可能
console.log(eightValue); // 8
/*
  varなしでもブラウザ環境によっては動作する
  scrimba上では動作しない
*/

// 変数（ブロックレベルのスコープを持つ）
{
  let nineValue = "Nine";
  nineValue = 9; // 値や型を変更することが可能
  console.log(nineValue);
}
// ブロック外からは参照できない
// ReferenceError: nineValue is not defined (/index.js:37)
// console.log(nineValue);

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

// +=演算子、-=演算子、*=演算子、/=演算子
var price = 1000;
price += 200;
console.log(price); // 1200
price -= 100;
console.log(price); // 1100
price *= 0.8;
console.log(price); // 880
price /= 2;
console.log(price); // 440

// 文字列内でのエスケープ
var doubleQuoted = "Hello, \"World\"";
console.log(doubleQuoted); // Hello, "World"
var singleQuoted = 'Hello, "World"';
console.log(singleQuoted);
var backticked = `'Hello', "World"`;
console.log(backticked); // 'Hello', "World"

/*
特殊記号のエスケープ
\': シングルクオート
\": ダブルクオート
\\: バックスラッシュ
\n: 改行
\r: 行頭に戻る（CR: キャリッッジリターン）
\t: タブ
\b: バックスペース
\f: 改ページ（FF: フォームフィード）
*/

// 文字列の連結
var firstName = "John";
var lastName = "Smith";
var fullName = firstName + " " + lastName;
console.log(fullName); // John Smith

// +=演算子による文字列の連結
var aiueo = "あいう";
aiueo += "えお";
console.log(aiueo); // あいうえお

// 文字列長の取得
console.log(aiueo.length); // 5

// 文字列の添字によるアクセス
console.log(aiueo[0]); // あ
console.log(aiueo[1]); // い
console.log(aiueo[5]); // null

// 添字で取得した文字はイミュータブル、変更する場合は文字列全てを変更する必要あり
// TypeError: Cannot assign to read only property '0' of string 'あいうえお' (/index.js:134)
// aiueo[0] = "か";
aiueo = "かきくけこ"
console.log(aiueo); // かきくけこ

// 文字列の最後の文字を取得する
var cat = "Cat";
console.log(cat[cat.length - 1]); // t

// 配列

// 配列の要素の型は同一でなくともよい
var array = ["あいうえお", 1, true];
console.log(array[1]); // 1

// 多重配列（多次元配列）
var nestedArray = [["John", 20], ["Smith", 30]];
console.log(nestedArray[0][1]); // 20

// 配列の要素はミュータブル
var originalArray = [1, 2, 3];
originalArray[1] = 5;
console.log(originalArray); // [1, 5, 3]

// 配列のpush/pop関数による末尾要素の操作
var stack = [1, 2, 3];
stack.push(4); // 末尾に追加
console.log(stack); // [1, 2, 3, 4]
stack.pop(); // 末尾を削除
console.log(stack); // [1, 2, 3]

// 配列のshift/unshift関数による先頭要素の操作
var array = [1, 2, 3];
array.shift(); // 先頭要素の削除
console.log(array); // [2, 3]
array.unshift(0); // 先頭要素の追加
console.log(array); // [0, 2, 3]

// 型のチェック
var checkType;
console.log(typeof checkType); // undefined

checkType = "a";
console.log(typeof checkType); // string

checkType = 1;
console.log(typeof checkType); // number

checkType = false
console.log(typeof checkType); // boolean

checkType = [1, 2]
console.log(typeof checkType); // object

// 関数

// 引数なし
function hello() {
  console.log("Hello");
}
hello(); // Hello

// 引数あり
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("John", "Smith")); // John Smith

// 関数スコープ
var global = "a"
function functionScope() {
    var local = "b"
    console.log(global); // a
}
functionScope();
// ReferenceError: local is not defined (/index.js:216)
// console.log(local);
console.log(global); // a

// objcectを引数に受け取る場合は参照渡しになる
var array = [1, 2, 3];
function popArray(array) {
  array.pop();
}
popArray(array);
console.log(array); // [1, 2]

// Boolean

/*
 - true
 - false
*/

var condition = true;

if (condition) {
    console.log("true");
} else {
    console.log("false");
}

// ==演算子による比較
console.log(1 == 1); // true
console.log(1 == [1]); // true
console.log(1 == "1"); // true

// ===演算子による比較（型も同時にチェック）
console.log(1 === 1); // true
console.log(1 === [1]); // false
console.log(1 === "1"); // false

// !=演算子による比較
console.log(1 != 1); // false
console.log(1 != [1]); // false
console.log(1 != "1"); // false

// !==演算子による比較（型も同時にチェック）
console.log(1 !== 1); // false
console.log(1 !== [1]); // true
console.log(1 !== "1"); // true

// <, >, >=, <=演算子による比較
console.log(1 < 2); // true
console.log(1 < 1); // false
console.log(1 <= 2); // true
console.log(1 <= 1); // true
console.log(2 > 1); // false
console.log(1 > 1); // false
console.log(2 >= 1); // true
console.log(1 >= 1); // true

// こういうのはないらしい
// console.log(1 >== 1);
// console.log(1 <== 1);
