console.log("##### Inheritence #####");

class Person{ // superclass, baseclass

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log("isim: " + this.name + " Yaş: " + this.age);
    }

}

class Worker extends Person{ // derived class, subclass, child class
    
    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }

}

const worker = new Worker("Jack", 26, 4000);

// parent class'ın prototype alanı inherit edilir.
console.log(worker);

worker.showInfos();


// parent method'un override'ı
class Farmer extends Person{ // derived class, subclass, child class
    
    constructor(name, age, salary, country){
        super(name, age);
        this.salary = salary;
        this.country = country;
    }

    showInfos(){
        console.log("isim: " + this.name + " Yaş: " + this.age + " Ülke: " + this.country);
    }

}

const farmer = new Farmer("Ali", 45, 5000, "Turkey");

// showInfos metodunun farmer objesine ait protoype alanında
// olduğu görülebilir.
// ayrıca parent showInfos'da yine parent'ın prototype alanındadır.
console.log(farmer);

farmer.showInfos();

