let value;

const programmer = {
    name: "Brendan Eich",
    age: 62,
    email:"brendan.eichg@gmail.com",
    langs: ["Javascript","Java","C++"],

    address: {
        city: "Pitsburgh",
        country:"USA"
    },

    work: function(){
        console.log("Work and work");
    }
}

value = programmer;

console.log(value.email);
console.log(value.address.city);

//aşağıdaki yöntem de kullanılabilir
console.log(programmer["email"]);

programmer.work();



const programmers = [
    {name: "Coskun Peker", age: 29},
    {name: "James Gosling", age: 65}
]

console.log(programmers)