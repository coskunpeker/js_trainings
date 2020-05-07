
// event bubbling -> en içteki html elementinde oluşan
// bir eventin hiyerarşik olarak yukarı doğru geçirilmesidir.

// bu örnekte görüldüğü gibi, container div'i 
// içindeki bir başka element'e dahi tıklansa bu div'in click'i 
// trigger oluyor.
document.querySelector(".container").addEventListener("click", function(e){
    console.log("Div Container");
});



