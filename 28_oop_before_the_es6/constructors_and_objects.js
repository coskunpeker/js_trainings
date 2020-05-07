console.log("##### Constructos and Objects #####");


console.log(window);


const emp1 = {
    name: "James",
    age: 58
};
console.log(emp1);

// bu şekilde sonradan da bir field dahil edilebilir
emp1.salary = 10000;
console.log(emp1);

// constructor örneği
function Employee(name, age){
    this.name = name;
    this.age = age;
    console.log(this);

    this.showInfos = () => console.log(this.name, this.age);
}

const emp3 = new Employee("Bill", 45);
emp3.showInfos();

