class DeleteRequest{

    async do(url){

        const response = await fetch(url, {
            method: 'DELETE'
          });

        return "silme başarılı";
    }
}

const deleteRequest = new DeleteRequest();

deleteRequest.do("https://jsonplaceholder.typicode.com/posts/1")
.then(data => console.log(data))
.catch(err => console.error(err))