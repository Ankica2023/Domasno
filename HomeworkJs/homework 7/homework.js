window.onload=function(){

    function addBook(){
        var newBookInput = document.getElementById("newBookInput")
        var bookName = newBookInput.value.trim()
        
        if(bookName){
            var bookTable = document.getElementById("bookTable")
            // newBookInput.value = ""
            var newBook = document.createElement("td")
            newBook.textContent = bookName
            newBookInput.value = ""
            bookTable.appendChild(newBook)
            // newBookInput.value = ""
        }
    }
    
    function removeLastBook(){
        var bookTable = document.getElementById("bookTable")
        var lastBook = bookTable.lastElementChild
        if(lastBook){
            bookTable.removeChild(lastBook)
        }
    }
}

    








































