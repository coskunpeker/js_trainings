// MOUSE EVENTLERI

const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");
console.log(title);

// click
title.addEventListener("click", run);

function run(e){
    console.log(e.type);
}

// doubl-click;
title.addEventListener("dblclick", run);


// mouse down -> keydown'a benzer çalışıyor
title.addEventListener("mousedown", run);

// mouse up -> keyup'a benzer çalışıyor
title.addEventListener("mouseup", run);

// mouse over eklendiği elementi üzerine gelince trigger oluyor
// eğer elementin içinden bir başka element varsa onun üzerine 
// gelindiğinde event yine trigger oluyor. bu mouseout için de geçerli
// bu durumla karşılaşılmak istenmiyorsa, 'mouseenter' ve 'mouseleave' kullanılmalı!!!
title.addEventListener("mouseover", run);
cardBody.addEventListener("mouseover", run);

// mouse out eklendiği elementin üzerinden ayrılınca trigger oluyor
title.addEventListener("mouseout", run);