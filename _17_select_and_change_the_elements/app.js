const element = document.querySelector("#clear-todos");

// Element Özellikleri
console.log("id: " + element.id);
console.log("class name: " + element.className);
console.log("class list: " + element.classList);
console.log("text content: " + element.textContent);
console.log("inner html: " + element.innerHTML);
console.log("href: " + element.href);
console.log("style: " + element.style)


// Style ve element özelliklerini değiştirme
element.className = "btn btn primary";

element.style.color = "#000";
element.style.marginLeft = "50px";
element.href = "https://stackoverflow.com/";
element.target = "_blank";


// index.html'deki bütün 'li' taglarini modify edelim
const liTags = document.querySelectorAll(".list-group-item");

liTags.forEach(function(element){
    element.style.color = "red";
})

console.log(liTags);

//w3schools'da css_selectors ile ilgili detaylı açıklamalar mevcut

// ilki seç
let element2 = document.querySelector("li:first-child");
console.log("first-child: " + element2);

// ikinciyi seç
element2 = document.querySelector("li:nth-child(2)");
console.log("Second child: " + element2);

// Tek sayılı index'dekileri seç
element2 = document.querySelector("li:nth-child(odd)");
console.log("Odd childs: " + element2)