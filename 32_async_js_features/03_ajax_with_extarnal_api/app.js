const button = document.querySelector("#change").addEventListener("click", change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");

    xhr.onload = function(){

        const response = JSON.parse(this.responseText);

        if(this.status == 200){
            console.log(response)

            const rate = response.rates.TRY;

            // querySelector ile alınan aşağıdaki amount elementinin
            // value'si string'dir. Bu yüzden casting gerekir.
            const amount = Number(document.querySelector("#amount").value);

            document.querySelector("#tl").value = amount * rate;
        }
    }

    xhr.send();

}