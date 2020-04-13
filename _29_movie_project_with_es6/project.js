
const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-movies");


// tüm eventleri load et
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function(){
        let movies = Storage.getMoviesFromStorage();
        UI.loadAllMovies(movies);
    });
    secondCardBody.addEventListener("click", deleteMovie);
    clearButton.addEventListener("click", deleteAllMovies);
}

function addMovie(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        UI.displayMessages("Tüm alanların doldurunuz!!", "danger");
    } else {
        const newMovie = new Movie(title, director, url);
        UI.addMovieToUI(newMovie);
        Storage.addMovieToStorage(newMovie);
    }

    UI.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}


function deleteMovie(e){
    
    if(e.target.id === "delete-movie"){
        UI.deleteMovieFromUI(e.target);

        const movieTitle = e.target
            .parentElement
            .previousElementSibling
            .previousElementSibling
            .textContent;

        Storage.deleteMovieFromStorage(movieTitle);

        UI.displayMessages("Silme işlemi başarılı...", "success");
    }

}

function deleteAllMovies(){

    if(confirm("Emin misiniz?")){
        UI.deleteAllMoviesFromUI();
        Storage.deleteAllMoviesFromStorage();
    }
    
}
