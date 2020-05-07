// Elementi id'ye göre seçme

let element;

element = document.getElementById("todo-form");
console.log(element);

element = document.getElementById("tasks-title");
console.log(element);

// Element class name'e göre seçme

element = document.getElementsByClassName("form-group col-md-6");
console.log(element);

// Element tag'e göre seçme

element = document.getElementsByTagName("div");
console.log(element);

// Query Selector -> css selector'e göre seçme
// sayfada ilk bulduğu elementi seçer!!!
// eğer hepsinin seçilmesi isteniyorsa document.querySelectorAll() kulanılmalı!!!

// id'ye göre
element = document.querySelector("#todo-form");
console.log(element);

// class'a göre
element = document.querySelector(".form-row");
console.log(element);

// tag'e göre
element = document.querySelector("div");
console.log(element);
