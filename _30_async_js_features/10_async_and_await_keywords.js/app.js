// async ve await es7 ile birlikte gelir.
// es6 ile birlikte gelen promise'leri
// daha efektif kullanmayı sağlar.

// kaynak için: https://javascript.info/async-await


// eğer async keyword'u kullanılırsa
// bu fonksiyon return value'sunu bir promise objesi olarak döner.
// es6'da ise promise dönen kodu biz geliştirmeliydik.
async function test(data){
    return data;
}

test("hi async").then(response => console.log(response));


// await keyword'u ise kullanıldığı 
// promise'in resolve'unun çalışmasına kadar
// execution'u askıya alır.
//
// önemli not  : await sadece async fonksiyonlar içinde ÇALIŞIR!!
//
// önemli not 2: eğer promise'in resolve çalışmaz da reject'i 
//               çalışırsa await koyulan yerden sonrası execute 
//               edilmez, varsa direkt catch'e düşer.
async function test2(data){

    let promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof data == "string"){
                resolve("resolve çalıştı");
            } else {
                reject(new Error("reject çalıştı"))
            }
        }, 5000);

    })

    let response = await promise;

    console.log(response)
    console.log("5 saniye geçmiş ve resolve çalışmış olmalı.")

    return data;
}

test2("hi await")
.then(response => console.log(response))
.catch(err => console.error(err));

test2(10)
.then(response => console.log(response))
.catch(err => console.error(err));



// fetch direkt promise döner.
// yani direkt olarak aşağıdaki gibi
// kullanılabilir.
async function getCurrency(url){

    const response = await fetch(url); // promise döner
    
    const data = await response.json(); // response.json()'da direkt promise döner

    return data;

}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(response => console.log(response))
.catch(err => console.error(err));;