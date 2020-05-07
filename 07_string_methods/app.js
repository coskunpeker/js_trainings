let value;

const firstName = "Nicola";
const lastName = "Tesla";

const langs = "Java, Python, C++";


value = firstName.length;

console.log("length metodu ile karakter sayısı: " + value);

value = firstName.concat(" ", lastName);

console.log("concat metodu: " + value);

// bunun yerine firstname.charAt de kullanılabilir.
value = firstName[0];
console.log("String'den char alma: " + value)


// eğer aranan char string içinde yoksa -1 dönülür.
value = firstName.indexOf("N");
console.log("Char'ın index'ini bulma: " + value)


// includes case sensitive çalışır
value = langs.includes("Java");
console.log(value)