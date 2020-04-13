// LOCAL STORAGE

// add item
localStorage.setItem("key1", "value1");

// get item
// key'e karşılık gelen bir value yoksa null döner.
const value = localStorage.getItem("key1");

console.log(value);

// stroge'a atılan her şey bir string olarak tutulur.
console.log(typeof value);

// clear local strage
localStorage.clear();

// local stroge'a array eklemek
// storage'lar sadece string kabul eder

const todos = ["todo 1", "todo 2", "todo 3"];

localStorage.setItem("todos", todos);

console.log(typeof localStorage.getItem("todos"));

// array'leri json formatında storage'a kaydedebiliriz.
localStorage.setItem("todos_as_json", JSON.stringify(todos));

const todosAsJson = JSON.parse(localStorage.getItem("todos_as_json"));

console.log(todosAsJson);
console.log(typeof todosAsJson);