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

}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.haveRead ? "have read" : "have not read"}.`;
}

Book.prototype.toggleRead = function() {
    this.haveRead = !this.haveRead;
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
    
}

function render() {
    for (let i = 0; i < myLibrary.length; i++) {

    }
    return false;
}

let harryPotter = new Book("Harry Potter", "J.K. Rowling", "203", true);
myLibrary.push(harryPotter);
console.log(harryPotter.info());
console.log(harryPotter.toggleRead());
console.log(harryPotter.info());
