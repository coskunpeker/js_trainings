
// Silme

const todoGroup = document.querySelector("ul.list-group");
console.log(todoGroup)

todoGroup.removeChild(todoGroup.lastElementChild);
console.log(todoGroup);

const todos = document.querySelectorAll("li.list-group-item");
console.log(todos);

todos[0].remove();
console.log(todos);

// Değiştirme 

const cardBody = document.querySelectorAll(".card-body")[1];
console.log(cardBody);

// <h5 class="card-title" id = "tasks-title">Todolar</h5>
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";

newElement.appendChild(document.createTextNode("Yeni tablolar"));


const oldElement = document.querySelector("#tasks-title");

cardBody.replaceChild(newElement, oldElement);

console.log(newElement);

// Attirute değiştirme, silme

const todoInput = document.querySelector("#todo");
console.log(todoInput);

let element = todoInput;

element = todoInput.classList;
console.log(element);

element.add("newClass");
console.log(element);

element.remove("newClass");
console.log(element);

element = todoInput.placeholder;
console.log(element);

todoInput.placeholder = "Test";
element = todoInput.placeholder;
console.log(element);


todoInput.setAttribute("placeholder","Bir Todo Girin");
element = todoInput.getAttribute("placeholder");
console.log(element);

todoInput.setAttribute("title","Input");
element = todoInput.getAttribute("title");
console.log(element);

todoInput.removeAttribute("title");
console.log(todoInput);

element = todoInput.hasAttribute("required");
console.log(element);




