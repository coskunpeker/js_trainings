
// window objesi içerisinde setTimeout
// ve setInterval metodları mevcuttur.
console.log(this);


// 2 saniye sonra argüman olarak verilen function çalıştırılacak
setTimeout(function(){
    console.log("timeout method çalıştı!!")
}, 2000);


// aşağıdaki commented kod bloğu 
// 1 saniye aralıklarla argüman olarak fonction çalıştırılacak 

// setInterval(function(){
//     console.log("çalışma tarihi: " + new Date());    
// }, 1000)

// Clear Interval ile setInterval durdurulabilir.
let value = setInterval(function(){
    console.log("çalışma tarihi: " + new Date());    
}, 1000)

document.getElementById("btn").addEventListener("click", function(){
    clearInterval(value);
})

