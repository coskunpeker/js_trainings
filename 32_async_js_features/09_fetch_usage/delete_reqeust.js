class DeleteRequest{

    do(url){

        return new Promise((resolve, reject) => {
        fetch(url, {
                method: 'DELETE'
              })
        })
        .then(response => response.json())
        .then(data => resolve("silme başarılı"))
        .catch(err => reject(err));

    }

}

const deleteRequest = new DeleteRequest();

deleteRequest.do("https://jsonplaceholder.typicode.com/posts/1")
.then(data => console.log(data))
.catch(err => console.error(err))