
function getTextFile(){

    // fetch metodu window'a ait bir metoddur.
    console.log(window.fetch);

    fetch("example.txt")
    .then(response => console.log(response))
    .catch(err => console.error(err));

    fetch("example.txt")
    .then(response => response.text()) // file içindeki metni promise olarak döner.
    .then(text => console.log(text))
    .catch(err => console.error(err));


    fetch("person.json")
    .then(response => response.json()) // file bir json ise bu metod ile direkt kullanılabilir.
    .then(json => console.log(json))
    .catch(err => console.error(err));

}


// bu fonksiyon çalıştığında consol'da iki file'in
// içeriği rastsal bir sırada ekrana yazar 
// bunun nedeni fetch'in async çalışması
getTextFile();



function getExtarnalApi(){

    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(json => console.log(json.rates))
    .catch(err => console.log(err));

}


getExtarnalApi();