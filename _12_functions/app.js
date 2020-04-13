function sayHi(){
    console.log("hi!!");
}

sayHi();


function sayHiToSomeone(name){
    console.log(`hi ${name}!!!`);
}

sayHiToSomeone("Jack");


function getHiSentenceBy(name = "Paul"){
    return `hi ${name}`;
}

let value = getHiSentenceBy();
console.log(value);

value = getHiSentenceBy("Miranda");
console.log(value);



// Immediately Invoked Function Expression (IIFE)

(function(name){
    console.log(`hi ${name}`)
}    
)("Brandon");


const databeseOperations = {
    host: "localhost",
    
    add: function(){
        console.log("Added");
    },

    remove: function(id){
        console.log(`${id} Removed`);
    }
}


console.log(databeseOperations.host);
databeseOperations.add();
databeseOperations.remove(5);