function filterTodos(e){
   const filterValue = e.target.value.toLowerCase();
   console.log(filterValue);
   const listItems = document.querySelectorAll(".list-group-item");

   listItems.forEach(function(item){
        const text = item.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){
            // bulamadı
            item.setAttribute("style","display : none !important");
        } else {
            item.setAttribute("style","display : block")
        }

   });
}