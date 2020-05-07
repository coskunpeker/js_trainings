let value;

const numbers = [43,45,8,49,64];

value = numbers[0];
console.log(value);

// tavsiye edilmeyen bir array oluşturma biçimi de aşağıdaki gibidir.
// const numbers2 = new Array(78,59,46,3,1,9);

const langs = ["Python", "Java", "C++", "Javascript"];

const mixeds = ["Scala", 22, null, undefined, Math.PI];

value = langs.indexOf('C++');
console.log(value);

value = langs.indexOf("Java");
console.log(value);

mixeds.push("Kotlin");
console.log("push() metodu ile 'Kotlin' kelimesini en sona ekle: " +mixeds);

mixeds.unshift("Swift");
console.log("unshift() metodu ile 'Swift' kelimesini en başa ekle: "+mixeds);


mixeds.pop();
console.log("pop() metodu ile array'in sonundaki elamanı çıkarma: " + mixeds);

mixeds.shift();
console.log("shift() metodu ile array'in ilk elamanını çıkarma: " + mixeds);

numbers.splice(0,2);
console.log("splice() metodu ile array'in belirtilen index aralığını çıkarma: " + numbers);

numbers.reverse();
console.log("reverse() metodu ile array'i sondan başa dizme: " + numbers);

// sort() metodu elamanları sıralarken ilk rakamına göre sıralama yapar. önemli!!!!!
numbers.sort();
console.log("sort() metodu ile yapılan sorting'deki gariplik: "+ numbers);


//istediğimiz gibi sorting yapabilmek için function yazmak gerekir.
numbers.sort(function(x,y){
    return x-y;
});

console.log("function ile yapılan sıralam: " + numbers);