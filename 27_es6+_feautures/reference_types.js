console.log("##### Referance Types #####");
let name4 = "Brendan";
let name5 = "Brendan";

// primitive'lerde, değerler kontrol edilir
// ve aşağıdaki ifade true yazar
console.log(name4 === name5); // true

let array4 = [1,2,3,4,5];
let array5 = [1,2,3,4,5];

// referance tiplerinde, bellekte gösterilen
// adresler karşılaştırılır.
// bu durumda aşağıdaki ifade false yazar
console.log(array4 === array5); // false


const cities2 = new Map();
cities2.set("key1", "value of primitive key1"); // primitive key
cities2.set("key2", "value of primitive key2"); // primitive key
cities2.set([1,2,3], "value of primitive referance array typed key"); // referance key

// aşağıdaki key, yukarıda key olarak eklenen array'den 
// başka bir adresi gösterdiği için value return edilemez
// ve undefined yazar
// Eğer bu durumun önüne geçilmek isteniyorsa
// array bir variable'a atanmalı ve set get işlemleri 
// bu variable ile yapılmalı
console.log(cities2.get([1,2,3])); // undefined



