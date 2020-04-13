console.log("##### Classes #####");

// ES6 Feature'ları Syntactic Sugar conseptine uyar.

function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfows = function(){
    console.log("isim: " + this.name + " Yaş: " + this.age + " Ücret: " + this.salary);
}

const emp = new Employee("Brendan", 58, "5000");
emp.showInfows();


// class ile yukarıdaki yapının refactor'ü
class EmployeeWithClass{
    
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfows(){
        console.log("isim: " + this.name + " Yaş: " + this.age + " Ücret: " + this.salary);
    }

}

const empWithClass = new EmployeeWithClass("James", 62, "6000");
empWithClass.showInfows();

console.log(empWithClass);