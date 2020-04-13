
const person = {
    age:25,
    name: "Jack",
    surname: "Peter",

    getAge: function(){

        // bu this person objesine referans eder.
        // eğer this bir function içerisinde olmasaydı
        // window objesini refarans ederdi!!!
        console.log(this.age);
    },

    // bind metodu ile function içerisinde person'u gösteren 
    // this keyword'u artık window objesini göstermeye başlar!!!
    getName: function(){
        console.log(this.name);
    }.bind(this),


    // arrow function'lar her zaman window objesini gösterir.
    // aynı bir yukarıda bind metodu kullanılarak elde edilen 
    // sonuç oluşur.
    getSurname: () => {
        console.log(this);
        console.log(this.surname);
    }

}

person.getAge();
person.getName();
person.getSurname();