function getTodosFromStorage(){ // Storagedan Todoları Alma
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    return todos;


}

function showAlert(type, message){
    /*<div class="alert alert-danger" role="alert">
    This is a danger alert—check it out!
    </div>*/

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`
    alert.setAttribute("role","alert");
    alert.appendChild(document.createTextNode(message));

    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    }, 1000);

}