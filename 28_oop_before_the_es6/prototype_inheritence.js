console.log("##### Prototype Inheritence #####");

function Animal(nutritionType, group){
    this.nutritionType = nutritionType;
    this.group = group;
}

Animal.prototype.showInfos = function(){
    console.log(`Beslenme Tipi: ${this.nutritionType} Sınıf: ${this.group}`);
}

function Lion(){
    // this.nutritionType = nutritionType;
    // this.group = group;
    // yukaridaki yerine Animal'dan
    // call, apply, bind fonc'lardan biri seçilerek
    // aşağıdaki gibi kullanılabilir.
    Animal.call(this, "Etobur", "Memeli");
}

Lion.prototype = Object.create(Animal.prototype);
console.log(new Lion().showInfos());

