let main = document.querySelector('.main');
let bkTitle = document.querySelector("#bk_title");
let bkAuthor = document.querySelector("#bk_author");
let bkPages = document.querySelector("#bk_pages");

let myLibrary = [];

function Book(title, author, pages) {
    //the constructor..
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    //do stuff here
    let userInputs = Object.create(Book.prototype);
    userInputs.title = bkTitle.value;
    userInputs.author = bkAuthor.value;
    userInputs.pages = bkPages.value;
    myLibrary.push(userInputs);

    let card = document.createElement('div');
    card.className = 'book';
    card.textContent = bkTitle.value;
    // main.append(card);

    buildCard();



}

function buildCard() {
    let card = document.createElement('div');
    card.className = 'book';

    let title = document.createElement('div');
    title.textContent = bkTitle.value;

    let author = document.createElement('div');
    author.textContent = bkAuthor.value;

    let pages = document.createElement('div');
    pages.textContent = bkPages.value;



    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);


    main.append(card);

}


//displays every object in the library. certain funtions will update the display. if a book is removed, the display needs to reflect that. of a book is 
function displayBooks() {
}
