console.log("##### Function Prototype #####");

const obj5 = {
    number1: 10,
    number2: 20
};

const obj6 = {
    number1: 30,
    number2: 40
};

function addNumbers(number3, number4){
    console.log(this.number1 + this.number2 + number3 + number4);
};

// this keyword'u window objesini işaret eder
// window objesinin içinde number1 ve number2 alanları yoktur.
addNumbers(100, 200); // NaN

// yukarıdaki durumu engellemek için 
// call, apply, bind metodları kullanılır.

// bu kullanım biraz farklı gelebilir
// ancak function prototype içerisinde bulunan
// call, apply, bind aşağıdaki gibi kullanılabilir.
addNumbers.call(obj5, 100, 200);
addNumbers.call(obj6, 100, 200);

// apply'da argümanlar array olarak verilir.
addNumbers.apply(obj5, [100,200]);
addNumbers.apply(obj6, [100,200]);

function sum(number3, number4){
    return this.number1 + this.number2 + number3 + number4;
}

// bind fonksiyonu copy eder, yeni bir fonksiyon üretir.
// genellikle event'larda kullanılır.

const copiedFunction = sum.bind(obj5);
console.log(copiedFunction(100,200));

const copiedFunction2 = sum.bind(obj6);
console.log(copiedFunction2(100,200));