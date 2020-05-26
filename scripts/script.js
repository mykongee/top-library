let myLibrary = [];

let addBookBtn = document.querySelector("#submit-btn");
addBookBtn.addEventListener("click", addBook);

let bookList = document.querySelector(".book-list");

/*TODO:
add delete and read toggle functions to book card display
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
    let titleInput = document.querySelector("#title");
    let authorInput = document.querySelector("#author");
    let pagesInput = document.querySelector("#pages");
    let readInput = document.querySelector("#radio-btns");
    let inputs = [titleInput, authorInput, pagesInput, readInput];
    
    for (let i = 0; i < inputs.length; i++) {
        if (!validateInput(inputs[i])) {
            alert("Please fill all fields");
            return // one or more inputs are invalid
        }
    }

    let newBook = new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        document.querySelector(`input[name="read"]:checked`).value === "read" ? true : false         
    );

    myLibrary.push(newBook);
    console.log(myLibrary);
    render();
}

function validateInput(input) {
    if (input.getAttribute("type") === "text" || input.getAttribute("type") === "number" ){
        return input.value.trim() != "" ? true : false;

    } else { 
        input = [...input.children]; // get radio button values in an iterable list
        let validRadio = false;
        for (let i = 0; i < input.length; i++) {
            if (input[i].firstElementChild.checked) {
                validRadio = true;
            }
        }
        return validRadio;
    }

}

function deleteBook(event) {
    let card = event.target.parentNode.parentNode;
    card.parentNode.removeChild(card);
    myLibrary.splice(card.dataset["indexNumber"] , 1);
    render();
}


function toggleHandler(event) {
    // change Book read/unread property 
    // change card display 
    let card = event.target.parentNode.parentNode;
    let book = myLibrary[card.dataset["indexNumber"]];
    book.toggleRead();
    card.querySelector(".book-read-status").textContent = book.haveRead ? "Have Read" : "Have Not Read";
}

function createCard(book) {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    let bookInfo = document.createElement("div");
    bookInfo.setAttribute("class", "book-info");
    
    let bookTitle = document.createElement("h3");
    bookTitle.setAttribute("class", "book-title");
    bookTitle.textContent = book.title;

    let bookAuthor = document.createElement("h3");
    bookAuthor.setAttribute("class", "book-author");
    bookAuthor.textContent = book.author;

    let bookPages = document.createElement("h3");
    bookPages.setAttribute("class", "book-pages");
    bookPages.textContent = book.pages;

    let bookReadStatus = document.createElement("h3");
    bookReadStatus.setAttribute("class", "book-read-status");
    book.haveRead ? bookReadStatus.textContent = "Have Read" : bookReadStatus.textContent = "Have Not read";

    let bookControls = document.createElement("div");
    bookControls.setAttribute("class", "book-controls");

    let deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");    
    deleteBtn.setAttribute("class", "btn-delete");
    deleteBtn.value = "delete";
    deleteBtn.addEventListener("click", deleteBook);

    let toggleBtn = document.createElement("input");
    toggleBtn.setAttribute("type", "button");
    toggleBtn.setAttribute("class", "btn-toggle");
    toggleBtn.value = "read/unread";
    toggleBtn.addEventListener("click", toggleHandler);

    bookControls.appendChild(deleteBtn);
    bookControls.appendChild(toggleBtn);

    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);
    bookInfo.appendChild(bookReadStatus);

    bookCard.appendChild(bookInfo);
    bookCard.appendChild(bookControls);

    return bookCard;
}

function render() {
    document.querySelector(".book-list").innerHTML = ""; // clear HTML elements before re-rendering (not efficient, but works on smaller scale)

    for (let i = 0; i < myLibrary.length; i++) {
        let bookCard = createCard(myLibrary[i]);
        bookCard.setAttribute("data-index-number", i);
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
