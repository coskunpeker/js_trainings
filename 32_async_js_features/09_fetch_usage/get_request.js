class GetRequest{

    do(url){

        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        });
    }

}

const getRequest = new GetRequest();

let albums;

getRequest.do("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums)
})
.catch(err => console.error(err))