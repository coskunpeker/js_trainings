

// aşağıdaki gibi require içine direkt bir isim verilirse
// verilen isim direkt node_modules altında aranır.

// const app = require("@babel/core")

// bu şekilde verilirse bulunulan dizin
// altında ilgili file'i arar.
const app = require("./module1");

app();

app.test2();

app.test3();

app.testObj.test4();

console.log(app.testObj.name);

console.log(app.testObj.person.mail);


console.log("#####  ES6 Modules #####")

// module2'deki her şeyi almak istersek
// import * as module2 from "./module2"
// şeklinde alabiliriz.
import{test6, Person} from "./module2";

Person.Test7();

// default keyword'ünün kullanımı

import Tester from "./module3"

Tester.test8();

import test9 from "./module4"

console.log(test9);