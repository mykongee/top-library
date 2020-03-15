function Book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${haveRead ? "have read" : "not read yet"}`;
    }
}