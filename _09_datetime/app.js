let value;

const now = new Date();
console.log(now);


const date1 = new Date("11-19-1972 08:58:53");
console.log(date1);

const date2 = new Date("October 5 1941");
console.log(date2);

const date3 = new Date("8/11/1945");
console.log(date3);


value = now.getMonth();
console.log("Mevcut ay:" + value)