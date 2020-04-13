class UI{
    
// <tr>
// <td><img src="" class="img-fluid img-thumbnail"></td>
// <td></td>
// <td></td>
// <td><a href="#" id = "delete-movie" class = "btn btn-danger">Filmi Sil</a></td>
// </tr> 
static addMovieToUI (newMovie){
    const movieList = document.querySelector("#movies");
    movieList.innerHTML += `
    
    <tr>
        <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
        <td>${newMovie.title}</td>
        <td>${newMovie.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
    
    `;

    UI.displayMessages("Film başarıyla eklendi!!", "success");

};

static clearInputs (titleElement, directorElement, urlElement){
    titleElement.value = "";
    directorElement.value = "";
    urlElement.value = "";
}

//<div class="alert alert-danger" role="alert">
//  This is a danger alert—check it out!
//</div> 
static displayMessages (message, type){

    const cardBody = document.querySelectorAll(".card-body")[0];

    // alert div'ini oluştur.
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;

    cardBody.appendChild(alertDiv);

    setTimeout(function(){
        alertDiv.remove();
    }, 1000);
}

static loadAllMovies(movies){
    const movieList = document.querySelector("#movies");

    movies.forEach(function(movie){
        movieList.innerHTML += `
    
        <tr>
            <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
            <td>${movie.title}</td>
            <td>${movie.director}</td>
            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
        
        `;
    })
}

static deleteMovieFromUI (element){
    
    element.parentElement.parentElement.remove();

}

static deleteAllMoviesFromUI(){
    const movieList = document.getElementById("movies");

    // aşağıdaki yöntem oldukça yavaş olduğu için tercih edilmez!!!
    // movieList.innerHTML = "";

    while(movieList.firstElementChild !== null){ // child olduğu sürece
        movieList.firstElementChild.remove();
    }
}

}

