console.log("##### Static Methods #####");

class Math{
    
    static cube(x){
        console.log(x*x*x);
    }

}

Math.cube(3);

const math = new Math();
console.log(math);

// math.cube(4), Uncaught TypeError: math.cube is not a function
// şeklinde bir hata döner.
// çünkü static metod'lar obje'nin protoype alanda tutlmazlar.
// bu yüzden obje üzerinde kullanılamaz.!!!!!
// static olmayan metodlar ise prototype alanında tutulurlar.!!!

// math.cube(4);

