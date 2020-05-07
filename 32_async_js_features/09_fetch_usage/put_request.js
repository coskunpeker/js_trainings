class PutRequest{

    do(url, data){

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));

    }

}

const putRequest = new PutRequest();

const putData =      
    {
        "userId": 10,
        "title": "test test test"
    }
putRequest.do("https://jsonplaceholder.typicode.com/albums/1", putData)
.then(data => console.log(data))
.catch(err => console.error(err))