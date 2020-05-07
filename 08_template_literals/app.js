const name = "Nicola Tesla";
const deparment = "Physics"

let value;

// string concatenation işlemleri template literals
// yöntemi ile efektif bir şekilde yapılabilir.


console.log("Klasik Yöntem")
value = "İsim: " + name + "\n" + "Departman: " + deparment;
console.log(value);

console.log("Template Literals Yöntemi")
value = `İsim: ${name}\nDepartman: ${deparment}`
console.log(value)



// klasik yöntem
value = "<ul> " +
                "<li> " + name + "</li>" +
                "<li> " + deparment + "</li>" +
             "</ul>"

document.body.innerHTML = value;


//Template Literals Yöntemi

value = `
        <ul>
            <li>${name}</li>
            <li>${deparment}</li>
        </ul>
        `;
document.body.innerHTML = value;        


//function kullanımı

console.log(`${a()}`)

function a(){
    return "Function Kullanımı";
}

