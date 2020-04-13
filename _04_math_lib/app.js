let value;


value = Math.pow(2,5);
console.log(value);

value = Math.E;
console.log(value);

value = Math.PI;
console.log(value);

// round methodu verilen sayıyı bulunduğu aralıktaki 
// sayılardan üst tam sayıya veya alt tamsayıya yuvarlar.

// 3'e yuvarlar
value = Math.round(3.4);
console.log(value);

// 4'e yuvarlar
value = Math.round(3.5);
console.log(value);

// 4'e yuvarlar
value = Math.round(3.6);
console.log(value);


// Her zaman üst tamsayıya yuvarlar. 
// Yani aşağıdaki örnek 4'e yuvarlar.
value = Math.ceil(3.2)
console.log(value);

// Her zaman alt tamsayıya yuvarlar. 
// Yani aşağıdaki örnek 3'e yuvarlar.
value = Math.floor(3.2)
console.log(value);


// Math.sqrt(16); // karekök
// Math.abs(-10); // mutlak değer
// Math.pow(2,4); // üst alma

// array verirken dikkat edilmesi gereken durum şu ki; 
// argümanın başında üç nokta ile geçmek gerekiyor.
let array = [1,2,3,4,5];

console.log("Max " + Math.max(...array));
console.log("Min: " + Math.min(...array));
console.log(Math.max(1,2,3,4,5))