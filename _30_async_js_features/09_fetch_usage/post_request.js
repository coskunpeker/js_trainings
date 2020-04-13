class PostRequest{

    do(url, data){

        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              }) 
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        });

    }

}


const postRequest = new PostRequest();

const postData =      
    {
        "userId": 1,
        "title": "non esse culpa molestiae omnis sed optio"
    }
postRequest.do("https://jsonplaceholder.typicode.com/posts", postData)
.then(data => console.log(data))
.catch(err => console.log(err));

