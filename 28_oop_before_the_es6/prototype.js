console.log("##### Prototype #####");

// default olarak, her obje içerisinde 
// proto adlı bir alan taşır.
// Bu proto, her js objesinin ihtiyaç
// duyabaliceği ortak foksiyonları tutar.

const object = new Object();
console.log(object);
object.name = "Jack";
console.log(object);

function Emp(name, age){
    this.name = name;
    this.age = age;

    showInfos = () => console.log(this.name, this.age);
}

const employee1 = new Emp("Paul",32);
console.log(employee1);

// eğer toString() metodu constructor 
// içerinde override edilseydi, override edilen
// çalıştırılacaktı. Böyle bir durum olmadığı
// için prototype'dan gelen toString() çalıştırılır.
console.log(emp1.toString());


const employee2 = new Emp("Josh",42);
console.log(employee2);

const employee3 = new Emp("Doug",53);
console.log(employee3);


// js'in yapısı gereği, Emp'deki showInfos() methodu gibi
// metodlar protype içerine taşınmalıdır. Bu durum bellekte
// gereksiz yer işgalini engellemek için gereklidir.


function Emp2(name, age){
    this.name = name;
    this.age = age;
};

// bir method, bu şekilde prototype'a taşınabilir.
Emp2.prototype.showInfos = () => console.log(name, age);





String.prototype.kafamaGoreMetodEklerim = () => console.log("valla ekledi");

let text = new String();


text.kafamaGoreMetodEklerim();

