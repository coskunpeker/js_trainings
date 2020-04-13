// INPUT EVENTLERI

const filter = document.querySelector("#filter");
console.log(filter);


// paste -> bir yapıştırma işlemi gerçekleşince trigger olur
filter.addEventListener("paste", run);

// copy -> bir kopyalama işlemi gerçekleşince trigger olur
filter.addEventListener("copy", run);

// cut -> bir kesme işlemi gerçekleşince trigger olur
filter.addEventListener("cut", run);

// select -> bir seçme işlemi gerçekleşince trigger olur
filter.addEventListener("select", run);