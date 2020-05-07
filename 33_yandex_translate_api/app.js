

eventListeners();

const ui = new UI();

function eventListeners(){
    document.querySelector("#translate-form").addEventListener("click", translateWord);

    // select list'e addEventListener ile event eklemek
    // bazı browser'larda sorun yaratıyor.
    // o yüzden aşağıdaki gibi event eklenecek

    document.querySelector("#language").onchange = function(){
        ui.changeUI();
    }
}


const translate = new Translate(document.querySelector("#word").value,
                                document.querySelector("#language").value);



function translateWord(e){
    translate.changeParameters(document.querySelector("#word").value, document.querySelector("#language").value)

    translate.translateWord(function(err, response){
        if(err !== null){ 
            console.error(err)
        } else{
            ui.displayTranslate(response);
        }
    });


    e.preventDefault();
}

