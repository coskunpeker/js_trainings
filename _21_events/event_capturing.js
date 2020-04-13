


const cardBody2 = document.querySelectorAll(".card-body")[1];

cardBody2.addEventListener("click", run);

function run (e){
    console.log(e.type + "on card body");
    console.log(e.target);
}