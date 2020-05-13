let myLibrary = [];

let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", addBook);


/*TODO:
write render() function to create cards based on myLibrary 

*/
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${haveRead ? "have read" : "not read yet"}`;
    }

    this.toggleRead = function() {
        this.haveRead = !this.haveRead;
    }
}

function addBook(){
    let newBook = new Book(
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        document.querySelector("#pages").value,
        document.querySelector(`input[name="read"]:checked`).value === "read" ? true : false         
    );
    myLibrary.push(newBook);
    console.log(myLibrary);


    return false;
}

function render() {
    for (let i = 0; i < myLibrary.length; i++) {

    }
    return false;
}
