let main = document.querySelector('.main');

let theHobbit = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "not read yet",
    info: function info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}


let myLibrary = [theHobbit];

function Book() {
    //the constructor..

}

function addBookToLibrary() {
    //do stuff here
    // myLibrary.push(Book);

}


//build a "card" that diplays the book on the website
function displayBooks() {
let card = document.createElement('div');
card.className = 'book';
card.setAttribute('style', 'border: 2px solid black; ')
card.textContent = "THE HOBBIT";

main.append(card);

}
