console.log("##### SETS #####");

const mySet = new Set();
console.log(mySet);

mySet.add(100);
mySet.add(100); // duplicate elaman eklenemez!!!
mySet.add(Math.E);
mySet.add("text");
mySet.add([1,2,3]);
mySet.add({name: "Brendan", surname: "Eich"})

console.log(mySet);

mySet.delete(Math.E);
console.log(mySet);

console.log(mySet.has(Math.E));

// referance tiplerde gösterilen adrese bakılır
console.log(mySet.has([1,2,3]));  // false yazar


mySet.forEach(value => console.log(value));


for(let value of mySet){
    console.log(value);
}

// set to array
const arr = Array.from(mySet);
console.log(arr);