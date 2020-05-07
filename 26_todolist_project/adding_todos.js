function addTodo(e){
    const newTodo = todoInput.value.trim();
    
    if(newTodo === ""){
        showAlert("danger", "Lütfen bir todo giriniz!!");
    } else {
        addTodoToUI(newTodo);   
        addTodoToStorage(newTodo);
        showAlert("success", "Eklendi!!");
    }

    e.preventDefault();
}

/*
* Todo'yu listeye eklene fonksiyon
*/
function addTodoToUI(newTodo){
    /*<!-- <li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>

    </li>*/

    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // ul'ye oluşurulan li eklenir
    todoList.appendChild(listItem);

    todoInput.value = "";
}


function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}