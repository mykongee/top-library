let myLibrary = [];

let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", addBook);

let bookList = document.querySelector(".book-list");

/*TODO:
implement createCard() helper 
add delete and read toggle functions to book card display
add book controls section to render()
test render() on multiple books
polish UI

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

function deleteBook(event) {
    // book.dataset["indexNumber"];
    myLibrary.splice(this.dataset)
}

function createCard(book) {

}

function render() {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "book-card");
        let bookInfo = document.createElement("div");
        bookInfo.setAttribute("class", "book-info");

        bookCard.setAttribute("data-index-number", i);
        
        let bookTitle = document.createElement("h3");
        bookTitle.setAttribute("class", "book-title");
        bookTitle.textContent = myLibrary[i].title;

        let bookAuthor = document.createElement("h3");
        bookAuthor.setAttribute("class", "book-author");
        bookAuthor.textContent = myLibrary[i].author;

        let bookPages = document.createElement("h3");
        bookPages.setAttribute("class", "book-pages");
        bookPages.textContent = myLibrary[i].pages;

        let bookReadStatus = document.createElement("h3");
        bookReadStatus = document.createElement("class", "book-read-status");
        myLibrary[i].haveRead ? bookReadStatus.textContent = "Have read" : bookReadStatus.textContent = "Have not read";

        console.log(bookCard);
        bookInfo.appendChild(bookTitle);
        bookInfo.appendChild(bookAuthor);
        bookInfo.appendChild(bookPages);
        bookInfo.appendChild(bookReadStatus);

        bookCard.appendChild(bookInfo);

        bookList.appendChild(bookCard);
    }
    return false;
}

let harryPotter = new Book("Harry Potter", "J.K. Rowling", "203", true);
myLibrary.push(harryPotter);

let twilight = new Book("Twilight", "Stephanie", 105, false);
myLibrary.push(twilight);
render();
console.log(harryPotter.info());
console.log(harryPotter.toggleRead());
console.log(harryPotter.info());
