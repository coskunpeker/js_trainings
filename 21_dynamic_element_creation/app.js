// yeni element oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>


const newLink = document.createElement("a");
newLink.id = "go-to-google";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

// newLink.textContent = "google'a git" textContent setlenmemeli,
// çünkü bu elementin içindeki her şeyi override ediyor. 
// textContent kullanımında dikkatli olunmalı!!!
// bunun yerine aşağıdaki kullanılmalı

const text = document.createTextNode("google'a git");
newLink.appendChild(text)


console.log(newLink);

const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.appendChild(newLink);
console.log(cardBody);





