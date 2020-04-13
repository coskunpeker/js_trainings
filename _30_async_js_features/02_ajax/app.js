const button = document.querySelector("#ajax").addEventListener("click", gelAllEmployees);



function gelAllEmployees(){
    const xhr  = new XMLHttpRequest();

    const isAsyncEnabled = true;

    xhr.open("GET","employees.json", true);

    xhr.onload = function(){

        let list = document.querySelector("#employees");

        if(this.status == 200){

            // buradaki this xhr objesine referans eder
            console.log(this.responseText);

            const employees = JSON.parse(this.responseText);



            employees.forEach(function(employee){
                list.innerHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
                `;
            })
        }
    };

    xhr.send();
}