

// 3 saniye sonra process1 çalışmaya başlayacak
// ve 2 saniye sonra da process2 çalışacak
function process1(callback){
    setTimeout(function(){
        console.log("Process 1");
        callback();
    }, 3000)
}


function process2(){
    setTimeout(function(){
        console.log("Process 2");
    }, 2000)
}


process1(process2);
