// while

let i = 0;


while(i < 10){
    console.log(++i);
}


// do while

let j = 11;

do {
    console.log(j)
} while(j < 10)


// for 

const langs = ["Python", "Java", "C++"];

for(let i = 0; i<langs.length; i++){
    console.log(langs[i]);
}

 
for(let langIndex in langs){
    console.log("for in: " + langs[langIndex]);
}


langs.forEach(function(lang, index){
    console.log(lang + " " + index);
})




const users = [
    {name : "Nicola", age: 25},
    {name : "Brandon", age: 42},
    {name : "James", age: 58},
]

users.map(function(user){
    return user.name;
    })
    .forEach(function(name){
        console.log(name);
    })
;








