const filterInput = document.querySelector("#filter");
console.log(filterInput);

// focus event'i yakalama
filterInput.onfocus = function(){
    console.log("onfocus triggered");
}

filterInput.addEventListener("focus", function(e){
    console.log("onfocus triggered 2");
    console.log(e.target);
    console.log(e.type);
})

// page tamament yüklendikten sonra trigger olan event
document.addEventListener("DOMContentLoaded", load);

function load(e){
    console.log("Page is loaded");
}

// submit
const todoForm = document.querySelector("#todo-form");
console.log(todoForm);

todoForm.addEventListener("submit", submitForm);

function submitForm(e){
    
    console.log("Submit Eventi");

    // event trigger olduğunda sayfa yenilenecektir.
    // bunu engellemek için e.preventDefault() yapmak gerekir.
    // eğer reload sonrası bulunulan sayfaya değil de başka bir
    // sayfaya gidilmek isteniyorsa, 
    // html üzerinde forma 'action' attirubute'ü vermek gerekir.

    e.preventDefault();
}