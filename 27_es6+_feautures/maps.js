console.log("##### MAPS #####");

let myMap = new Map();
console.log(typeof myMap)
console.log(myMap);

const key1 = "Steve"; // key bir string olabilir
const key2 = {a: 10, b:20}; // key bir obje olabilir
const key3 = x => x*x; // key bir fonksiyon da olabilir

myMap.set(key1, "String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3, "Function Değer");

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);
console.log(myMap.size);

const cities = new Map();

cities.set("Ankara", 5)
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

// dikkat function tanımında value ilk parametre!!!
cities.forEach((value, key) => {
    console.log(key, value);
})


// for(let value of cities){
//     console.log(value);
// }
// yukarıdaki kullanım map'ler için istenilen sonucu vermez (ancak çalışır)
// bunun yerine aşığıdaki gibi olmalı
for(let [key, value] of cities){
    console.log(key, value);
}

// key'leri alma
for(let key of cities.keys()){
    console.log(key)
}

// value'leri alma
for(let value of cities.values()){
    console.log(value)
}

// array to map
const array = [["key1", "value1"], ["key2", "value2"]];
const newMap = new Map(array);
console.log(newMap);

// map to array
const array2 = Array.from(cities);
// [["Ankara", 5],["İstanbul", 15],["İzmir", 4]] 
// yukarıdaki gibi bir array elde edilir
console.log(array2);

