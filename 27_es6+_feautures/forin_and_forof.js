console.log("##### For In And For Of #####");

const prsn = {

    name: "Bill Gates",
    age: 68,
    salary: "unlimited"

};

// FOR IN

// sırasıyla name, age, salary yazacak
for(let prop in prsn){
    console.log(prop); 
}

// name, age, salary'ye karşılık gelen değerleri de almak için
for(let prop in prsn){
    console.log(prop, prsn[prop]); 
}

const languages = ["Python", "Java", "C#", "Javascript"];

for(let index in languages){
    console.log(index, languages[index]);
}

const name = "Turing";

for(let index in name){
    console.log(index, name[index]);
}


// FOR OF

// Objelerin üzerinde kullanılamaz !!!
// for in'in aksine indexler'i değil direkt
// değerleri iterate eder.

for(let value of languages){
    console.log(value);
}

for(let character of name){
    console.log(character);
}


