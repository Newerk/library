let main = document.querySelector('.main');
let inputValues = {};
let myLibrary = [];

displayBooks();

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
}

function addBookToLibrary() {
    inputValues = {
        bkTitle: document.querySelector("#bk_title").value,
        bkAuthor: document.querySelector("#bk_author").value,
        bkPages: document.querySelector("#bk_pages").value
    }

    let newBook = new Book(inputValues.bkTitle, inputValues.bkAuthor, parseInt(inputValues.bkPages));

    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks();

    document.querySelector('form').reset()
}

function buildCard(title, author, pages) {
    let card = new Book(title, author, pages);
    card.buildCard();
}


//displays every object in the library. This function will be invoked when myLibrary array is changed. This will also
//iterate through the myLibrary array and properly assign index values to the books objects. This can be used
//to grab the position of the book so that it can be removed from the array list with my function remove()
function displayBooks() {
    const clearDisplay = () => {
        let bookDivs = document.querySelectorAll('.book');
        bookDivs.forEach(div => div.remove());
    };

    clearDisplay();

    let indexCounter = 0;
    myLibrary.forEach(el => {
        buildCard(el.title, el.author, parseInt(el.pages));
        console.log(el.title + " is index " + indexCounter++);
    });


}

function removeBook() {
    myLibrary.forEach(el => {
        listOfTitles.push(el.title);
    })

    // if(){//if NOT the title of book we want to delete, return a list of books that DONT include the title searched
    console.log(listOfTitles);

}



// delete myLibrary[9/*filler index. need to find a way to filter which index needs to be deleted*/];



//prototype testing area********
class Pro {
    constructor(name) {
        this.name = name;
    }
}

Pro.prototype.returnName = function () {
    return 'My name is ' + this.name;
}


let person = new Pro('Junius');
person.returnName();

//goal, build a construstor that will have a build card prototype

Book.prototype.buildCard = function () {
    let card = document.createElement('div');
    card.className = 'book';

    let bookCover = document.createElement('div');
    bookCover.className = "book-cover";

    let title = document.createElement('div');
    title.className = 'title';
    title.textContent = this.title;

    let author = document.createElement('div');
    author.className = 'author';
    author.textContent = this.author;

    let pages = document.createElement('div');
    pages.className = 'pages';
    pages.textContent = this.pages;

    bookCover.appendChild(title);
    bookCover.appendChild(author);
    bookCover.appendChild(pages);


    let iconContainer = document.createElement('div');
    iconContainer.className = "icon-container";

    let garbageBtn = document.createElement('div');
    garbageBtn.id = 'garbage-btn';
    garbageBtn.className = 'ribbon-btns';

    let readBtn = document.createElement('div');
    readBtn.id = 'read-btn';
    readBtn.className = 'ribbon-btns';

    let favBtn = document.createElement('div');
    favBtn.id = 'fav-btn';
    favBtn.className = 'ribbon-btns';

    iconContainer.appendChild(garbageBtn);
    iconContainer.appendChild(readBtn);
    iconContainer.appendChild(favBtn);


    card.appendChild(bookCover);
    card.appendChild(iconContainer);

    main.append(card);


}

