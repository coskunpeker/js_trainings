class PostRequest{

    async do(url, data){

            const response = await fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              });

            const json = await response.json();
            return json;
            
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

