console.log("##### AJAX #####");


// readyState değerleri
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready


// xhr objesi içerisinde çeşitli listener'lar mevcuttur.
// onprogress listener'ı readyState 3 olduğunda tetiklenir.
// onload listener'ı readyState 4 olduğunda tetiklenir.

document.querySelector("#btn").addEventListener("click", function(){
    
    //XMLHttpRequest oluştur

    const xhr = new XMLHttpRequest();
    console.log(xhr);

    const isAsyncEnabled = true;

    requestWithXHRNewMethod(xhr);

    xhr.open("GET", "example.txt", isAsyncEnabled)
    xhr.send();

});


// eski yöntem
function requestWithXHROldMethod(xhr){
    // onreadystatechange readyState'in her değişiminde
    // trigger olur
    xhr.onreadystatechange = function(){

        // this keyword'u xhr adlı objeye referans eder.
        console.log(this.readyState);
        

        if(this.status == 200 && this.readyState == 4){
            // response hazır
            console.log(this.responseText);
        }
    }
}

// yeni yöntem
// readyState 4 olduğunda çalışır
function requestWithXHRNewMethod(xhr){

    xhr.onload = function(){
        if(this.status == 200){
            // response hazır

            const textNode = document.createTextNode(xhr.responseText);

            document.querySelector("#ajax").appendChild(textNode);
        }
    }
}