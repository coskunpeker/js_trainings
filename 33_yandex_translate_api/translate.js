function Translate(word, language){
    this.apikey = "trnsl.1.1.20200410T170459Z.c38a283036d6934a.88c1c2e0c7095c840ac1fc8d1ab7adce848e320b";
    this.word = word;
    this.language = language;

    // XHR object

    this.xhr = new XMLHttpRequest();
}

// prototype'e function eklerken arrow function kullanılırsa
// function window objesine bağlanır!!!!
// onun için klasik function tanımı yapılır.
Translate.prototype.translateWord = function(callback){
    //ajax

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            
            const text = JSON.parse(this.xhr.responseText).text[0];

            callback(null, text);
        } else {
            console.error(new Error("hata oluştu"), null);
        }
    }

    this.xhr.send();

}


Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}