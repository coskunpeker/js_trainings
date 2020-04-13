console.log("##### Descruting #####");
let number1, number2;

arr = [100,200,300,400];

// array'in sol taraf'daki length boyunca
// sırasıyla değerleri sol tarafdaki variable'lara atanır.
[number1, number2] = arr;

console.log(number1, number2);

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}

// obje içerisindeki field name'lere göre descructing yapılır.
const {a, b, e} = numbers;
console.log(a, b, e);

// eğer field name'lerine göre atama yapılmak istenMiyorsa!!
const {a: numb1, b: numb2, d: numb3} = numbers;
console.log(numb1, numb2, numb3);

// Function Descructing
const getLangs = () => ["Python", "Java", "C++"];

const [lang1, lang2, lang3] = getLangs();
console.log(lang1, lang2, lang3);

const person = {
    name: "James",
    surname: "Gosling",
    showInfo: () => console.log("Bilgiler Gösteriliyor...")
}

const {name: name1, surname: surname1, showInfo: showInfo1} = person;

showInfo1();
console.log(name1, surname1);
















