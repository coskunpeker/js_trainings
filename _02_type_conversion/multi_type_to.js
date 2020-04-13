let multiTypedValue;


// from string + number
multiTypedValue = "hello" + 34;
console.log(multiTypedValue + " - " + typeof multiTypedValue );

multiTypedValue = "54" + 34;
console.log(multiTypedValue + " - " + typeof multiTypedValue );

// Bir yukarıdaki örnek console'a 5434 yazar. Eğer
// matematiksel bir toplam ancak aşağıdaki gibi olur.
// Önce "54" şeklinde string verilmiş değeri number'a cast etmek gerekir.

multiTypedValue = parseInt("54") + 34;
console.log(multiTypedValue + " - " + typeof multiTypedValue );