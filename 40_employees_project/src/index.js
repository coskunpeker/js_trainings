
import { Request } from "./request";
import { UI } from "./ui";

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees")
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

let updateState = null;

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);
    employeesList.addEventListener("click", updateOrDelete);
    updateEmployeeButton.addEventListener("click", updateEmployee);
}


function getAllEmployees() {
    request.get()
        .then(employees => {
            ui.addAllEmployeesToUI(employees);
        })
        .catch(err => console.error(err));
}

function addEmployee(e) {

    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if (employeeName === "" || employeeDepartment === "" || employeeSalary === "") {
        alert("Lütfen tüm alanları doldurunuz!!");
    } else {
        request.post({
            name: employeeName,
            department: employeeDepartment,
            salary: Number(employeeSalary)
        })
            .then(employee => {
                ui.addEmployeeToUI(employee)
            })
            .catch(err => console.error(err));
    }

    ui.clearInputs();
    e.preventDefault();
}


function updateOrDelete(e) {
    if (e.target.id === "delete-employee") {

        deleteEmployee(e.target);

    } else if (e.target.id === "update-employee") {

        // bütün <tr>
        updateEmployeeController(e.target.parentElement.parentElement);

    } else {
        // do nothing
    }
}

function deleteEmployee(targetEmp) {
    const id = targetEmp.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(id)
        .then(message => {

            // bütün <tr>
            ui.deleteEmployeeFromUI(targetEmp.parentElement.parentElement);
        })
        .catch(err => console.error(err));

}

function updateEmployeeController(targetRow) {

    ui.toggleUpdateButton(targetRow);

    if (updateState === null) {
        updateState = {
            updateId: targetRow.children[3].textContent,
            updateParent: targetRow
        }
    } else {
        updateState = null;

    }

}


function updateEmployee() {

    if (updateState) { // updateState null değilse


        const data = {
            name: nameInput.value.trim(),
            department: departmentInput.value.trim(),
            salary: Number(salaryInput.value.trim())
        };

        request.put(updateState.updateId, data)
            .then(updatedEmployee => {
                ui.updateEmployeeOnUI(updatedEmployee, updateState.updateParent);
                ui.clearInputs();
            })
            .catch(err => console.error(err))

    }
}






;

