console.log("##### Spread Operator #####");

const langs = ["Java", "C++", "Python", "PHP"];

console.log(langs);

// console.log(langs[0],langs[1],langs[2],langs[3]);
// yukarıdakinin yerine aşığadaki kullanılabilir
console.log(...langs);

const numbs = [1,2,3,4,5,6,7,8,9];

// descructing özelliğinden de faydalanarak
// array'in ilk iki elemanı z ve t'ye geriye
// kalanlar ise numbs2 adlı array'a atanabilir.
const [z, t, ...numbs2] = numbs;
console.log(z, t);
console.log(...numbs2);


const numbs3 = [100,200,300];
const addNumbers = (a,b,c) => console.log(a + b + c);

addNumbers(...numbs3);

