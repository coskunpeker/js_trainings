console.log("#####  BEFORE THE ES6  #####")

// bu şekilde yalnızca bir tane fonksiyon 
// export edilebilir.
module.exports = function test1(){
    console.log("Test 1");
}

// aşağıdaki yöntemle obje halinde export
// işlemi yapılabilir.

module.exports.test2 = function test2(){
    console.log("Test 2");
}

module.exports.test3 = function test3(){
    console.log("Test 3");
}


module.exports.testObj = {
    name: "Jack",
    
    test4: function(){
        console.log("Test 4");
    },

    person: {
        name: "Jack",
        mail: "jack.london@gmail.com"
    }
}