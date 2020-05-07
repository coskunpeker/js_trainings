// SESSION STORAGE

// session stroge alanı window'un içerisindedir.
console.log(window);

// butonlar
const addButton = document.querySelector("#add");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

// inputlar
const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

addButton.addEventListener("click", addItem);
deleteButton.addEventListener("click", deleteItem);
clearButton.addEventListener("click", clearItems);

function addItem(e) {
    sessionStorage.setItem(addKey.value, addValue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deleteKey.value);
}

function clearItems(e) {
    sessionStorage.clear();
}