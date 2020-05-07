console.log("##### Object.create() #####");


const obj = {
    name: "Brain",
    age: 79,

    test1: () => test1(console.log("Test 1")),
    test2: () => test1(console.log("Test 2"))
}

console.log(obj);


// Object.create() argüman olarak aldığı
// obje'nin prototype'ını yeni yaratılan
// objenin yani 'emp6' nın da kullanmasını sağlar.
// field'ların ise direkt kopyalanmasını sağlar.
const emp6 = Object.create(obj);
console.log(emp6);



// bir obje'nin prototype'ı da bir başka 
// obje'nin prototype'ına aşağıdaki örnekteki gibi 
// set edilebilir.
function Obj2(name, age){
    this.name = name;
    this.age = age;
}

Obj2.prototype.test1 = () => console.log("Test 1");
Obj2.prototype.test2 = () => console.log("Test 2");

function Obj3(){

}



Obj3.prototype = Object.create(Obj2.prototype);
console.log(new Obj3());