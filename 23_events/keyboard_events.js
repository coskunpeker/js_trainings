// kLAVYE EVENTLERI

// keypress

// document.addEventListener("keypress", listenKeypress);

// function listenKeypress(e){
//     console.log("keypress: " + e.key);
// }

// keydown herhangi bir tuşa basınca

// document.addEventListener("keydown", listenKeydown);

// function listenKeydown(e){
//     console.log("keydown: " + e);
// }

// keyup herhangi bir tuşa basmayı bırakınca

// document.addEventListener("keyup", listenKeyup);

// function listenKeyup(e){
//     console.log("keyup: " + e);
// }

// eventlar ile html'de değişiklik yapma

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e){
    let targetElement = e.target;

    console.log(targetElement.value);

    header.textContent = e.target.value;
    
}