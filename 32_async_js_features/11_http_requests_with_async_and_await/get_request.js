class GetRequest{

    async do(url){

        const response = await fetch(url);
        const data = await response.json();

        return data;
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