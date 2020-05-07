function deleteTodo(e){
    let clickedElement = e.target;

    if(clickedElement.className === "fa fa-remove"){
        clickedElement.parentElement.parentElement.remove();
        deleteTodoFromStorage(clickedElement.parentElement.parentElement.textContent);
        showAlert("success", "Todo başarı ile silindi!!")
    }
}


// local storage'dan silme

function deleteTodoFromStorage(todoText){
    let todos = getTodosFromStorage();

    todos.forEach(function(element,index){
        if(element === todoText){
            // bu indexten itibaren 1 obje sil demek!!
            todos.splice(index,1);
        }
    })

    localStorage.setItem("todos",JSON.stringify(todos));
}


function clearAllTodos(e){
    if(confirm("Tümünü silmek istediğine emin misin?")){
        console.log(todoList)
        
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");

    }
   
}

