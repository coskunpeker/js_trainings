
const githubForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearLastUsers = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users");

const github = new Github();
const ui = new UI();



eventListeners = () => {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearrAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}


getData = e => {

    let username = nameInput.value.trim();

    if(username === ""){
        alert("Kullıcı adı giriniz.");
    } else {

        let users = Storage.getSearchedUsersFromStorage();

        if(users.indexOf(username) !== -1){
            alert("Kullanıcı son arananlarda mevcut.");
        } else{
            github.getGithubData(username)
            .then(response => {
                if(response.user.message === "Not Found"){
                    ui.showError("Kullanıcı bulunamadı")
                } else {
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));
        }
        
       
    }

    ui.clearInput();
    e.preventDefault();
}

clearrAllSearched = () => {
    if (confirm("Emin misiniz ?")){
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}

getAllSearched = () => {

    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    users.forEach(user => {
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        result += `<li class="list-group-item">${user}</li>`;

    });

    lastUsers.innerHTML = result;

}

eventListeners();