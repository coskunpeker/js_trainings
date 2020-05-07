let value;


const todoList = document.querySelector(".list-group");
console.log(todoList);

const todo = document.querySelector(".list-group-item:nth-child(2)");
console.log(todo);

const cardRow = document.querySelector(".card.row");
console.log(cardRow);

// Child nodes
value = todoList.childNodes;
console.log(value); // 9 tane child gelecek, bunus sebebi her bir <li></li> arasında bir satır bırakılması index.html'de

// Child Nodes yerine children ile alma
value = todoList.children;
console.log(value); // bu defa 4 tane gelecek. aradaki satırlar child node olarak alınmayacak

// card row div'inin child'larının içinden <h5> i alma
value = cardRow.children;



console.log(findById(value));

function findById(mainElements, id){
    mainElements = Array.from(mainElements);
    let childElements = mainElements.map(function(element){
        return element.querySelector("#tasks-title");
    })

    console.log("child-elements: " + childElements);

    if(childElements == null || childElements == undefined){
        return findById(childElements, id);
    } else {
        return childElements;
    }
}

console.log(value);



