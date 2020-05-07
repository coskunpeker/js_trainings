class PutRequest{

    async do(url, data){


        const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              });

        const json = response.json();      

        return json;
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