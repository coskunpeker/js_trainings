
// promise objesi döndüren fonksiyon
function getData(data) { 

    return new Promise(function(resolve, reject){
        setTimeout(() => {

            if(typeof data === "string"){
                resolve("başarılı");
            } else {
                // bu tarz hatalar Error objesi ile 
                // kullanılmalı
                reject(new Error("başarısız"))
            }

            
        }, 5000);
    });

}


// state, resolved veya fulfilled olduğunda
// then içerisine verilen fonksiyon çalıştırılır.
getData("hi").then(response => {
    console.log(response);
});


// state, reject olduğunda catch içerisine verilen fonksiyon 
// çalıştırılır.
getData(25).catch(error => {
    console.error(error);
});


// then ve catch aşağıdaki biçimde kullanılabilir.
getData("test")
.then(response => console.log(response))
.catch(error => console.error(error));



function addTwo(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if(typeof number === "number"){
                resolve(number + 2);
            } else {
                reject(new Error("argüman number değil!!"));
            }

        }, 3000);
    })
}


addTwo(10)
.then(response => {
    console.log(response)

    // then içerisinde return ifadesi kullanıldığında 
    // yine bir promise objesi halinde return işlemi
    // yapılır.
    return response + 2;
})
.then(response => console.log(response))
.catch(error => console.error(error)); // catch bir chain içerisinde ancak bir tane olabilir.