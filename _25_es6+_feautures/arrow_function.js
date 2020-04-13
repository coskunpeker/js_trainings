console.log("##### Arrow Function #####");

// geleneksel
const hi = function(){
    console.log("Merhaba");
}

hi();

// arrow function ile
const hi2 = () => {
    console.log("Merhaba 2");
}

hi2();

// parametreli arrow function
// eğer fonksiyon tek parametre alıyorsa
// parantezlere (süslü de dahil) ihtiyaç yoktur.
const hi3 = name =>  console.log("Merhaba " + name);

hi3("Steve");

// birden fazla parametre ile
const hi4 = (name, surname) => {
    console.log(`Merhaba ${name} ${surname}`);
}

hi4("Steve", "Jobs");

// eğer fonksiyon içinde tek bir işlem yapılıyorsa
// return işlemi yapsa dahi 'return' ifadesini
// kullanmaya gerek yoktur.

const cube = x => {
    return x*x*x;
}

// yukarıdaki fonksiyonu aşağıdaki gibi refactor edebiliriz.

const cube2 = x => x*x*x;

console.log(cube(3));
console.log(cube2(3));
