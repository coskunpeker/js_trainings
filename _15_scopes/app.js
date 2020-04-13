// global scope

var value1 = 10;
let value2 = 20;
const value3 = 30;

console.log(value1, value2, value3); // 10 20 30 yazar

// function scope

function a(){
    // function scope
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1, value2, value3); // 40 50 60 yazar
}

a();

console.log(value1, value2, value3); // 10 20 30 yazar

// block scope

if(true){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
}

console.log(value1); // bir var değişkeni olduğu if block içerisindeki atama buraya da yansır.
console.log(value2); // global değerleri yazılır
console.log(value3); // global değerleri yazılır

if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // bir var değişkeni olduğu için console'a 10 yazılır
console.log(b); // hata!!
console.log(c); // hata!!