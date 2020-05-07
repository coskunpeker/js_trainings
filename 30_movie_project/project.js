
const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-movies");


// UI initialize et
const ui = new UI();

// Storage initialize et
const storage = new Storage();

// tüm eventleri load et
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function(){
        let movies = storage.getMoviesFromStorage();
        ui.loadAllMovies(movies);
    });
    secondCardBody.addEventListener("click", deleteMovie);
    clearButton.addEventListener("click", deleteAllMovies);
}

function addMovie(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        ui.displayMessages("Tüm alanların doldurunuz!!", "danger");
    } else {
        const newMovie = new Movie(title, director, url);
        ui.addMovieToUI(newMovie);
        storage.addMovieToStorage(newMovie);
    }

    ui.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}


function deleteMovie(e){
    
    if(e.target.id === "delete-movie"){
        ui.deleteMovieFromUI(e.target);

        const movieTitle = e.target
            .parentElement
            .previousElementSibling
            .previousElementSibling
            .textContent;

        storage.deleteMovieFromStorage(movieTitle);

        ui.displayMessages("Silme işlemi başarılı...", "success");
    }

}

function deleteAllMovies(){

    if(confirm("Emin misiniz?")){
        ui.deleteAllMoviesFromUI();
        storage.deleteAllMoviesFromStorage();
    }
    
}
