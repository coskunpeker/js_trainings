
class Request {

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // GET REQUEST
    get(url, callback){

        this.xhr.open("GET",url);


        // eğer bind metodu kullanmasaydık
        // hata verirdi.
        // Çünkü onload metodu xhr'ın metodudur.
        // Eğer başka bir işlem yapılmazsa içerisindeki this
        // xhr objesini gösterir.
        // ya da hiç bunlarla uğraşmadan 
        // direkt arraw function kullanılarak bu sorun aşılabilir.
        this.xhr.onload = function(){
            if(this.xhr.status === 200){
                callback(this.xhr.responseText);
            } else{
                callback("Hata oluştu(Get): " + this.xhr.status)
            }
        }.bind(this)

        this.xhr.send();
    }


    // POST REQUEST
    post(url, data, callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        
        this.xhr.onload = () => {

            // http status code 201 'created' anlamına gelir ve
            // post ve put için kullanılır.
            if(this.xhr.status === 201){
                callback(this.xhr.responseText);
            } else {
                callback("Hata oluştu(Post): " + this.xhr.status)
            }

        }

        this.xhr.send(JSON.stringify(data));
    }


    // PUT REQUEST
    put(url, data, callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        
        this.xhr.onload = () => {

            if(this.xhr.status === 200){
                callback(this.xhr.responseText);
            } else {
                callback("Hata oluştu(Put): " + this.xhr.status)
            }

        }

        this.xhr.send(JSON.stringify(data));
    }

    // DELETE REQUEST
    delete(url, callback){

        this.xhr.open("DELETE",url);

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(this.xhr.responseText);
            } else{
                callback("Hata oluştu(Delete): " + this.xhr.status)
            }
        }

        this.xhr.send();
    }

}


// GET
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums", 
                            result => console.log(result));

// POST
const postdata = {
    userId: 2,
    title: "test datası"
  }

  request.post("https://jsonplaceholder.typicode.com/albums", postdata, 
  result => console.log(result));    
  
// PUT  

const putdata = {
    userId: 2,
    title: "test datası"
  }

  request.put("https://jsonplaceholder.typicode.com/albums/3", putdata, 
  result => console.log(result));    
  

// DELETE
request.get("https://jsonplaceholder.typicode.com/albums/15", 
                            result => console.log(result));  


