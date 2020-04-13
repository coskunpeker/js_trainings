// karşılaştırma operatörleri

//==
// Yukaridaki işaret ile tipe bakılmaksızın değerler karşılaştırılır.
// İkinci örnekte yer alan 2 == "2" için number 2 string'e cast edilir.

console.log(2 == 2); // true
console.log(2 == "2"); // true

//===
// Yukarıdaki işaret ile tipler ve değerler karşılaştırılır

console.log(2 === "2"); // false

//!==
// Yulkarıdaki işaret bir üstteki örnek ile aynı davranışı sergiler
console.log(2 !== "2") // true

// aşağıdakiler diğer prog dilleri ile aynı

//!=
//>
//<
//>=
//<=



//Logical Operators

//not
console.log(!(2 == 2)); // false

//and
console.log( (2 == 2) && ("a" == "b")); //true

//or
console.log( (2 == 2) || ("a" == "b")); //false

//ternary

let value = 100;
console.log(value == 100 ? "ok" : "not ok");

