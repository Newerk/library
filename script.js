let main = document.querySelector('.main');
let inputValues = {};
let myLibrary = [];
let counter = 0;

let readStorage = [];

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
    console.table(myLibrary);

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
        counter = 0;

    };

    clearDisplay();

    let indexCounter = 0;


    myLibrary.forEach(el => {
        el.index = counter = indexCounter++;
        buildCard(el.title, el.author, parseInt(el.pages));

        console.log('el.index' + el.index);
    });
    readStorage.push(false);

    console.table(readStorage);


}




Book.prototype.buildCard = function () {

    let card = document.createElement('div');
    card.className = 'book';
    card.id = `${counter}`;


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
    //this event listener will remove the book from the library and display based on the index of the book in the myLibrary array
    garbageBtn.addEventListener('click', function removeBook() {
        myLibrary.pop(myLibrary.indexOf(garbageBtn.parentElement.parentElement.id));
        readStorage.pop(readStorage.indexOf(garbageBtn.parentElement.parentElement.id));//removes the read status  of a book based on the index
        garbageBtn.parentElement.parentElement.remove();
        console.table(myLibrary);
        console.table(readStorage);

    });

    let readBtn = document.createElement('input');
    readBtn.id = 'read-btn';
    readBtn.className = 'ribbon-btns';
    readBtn.type = 'checkbox';
    readBtn.addEventListener('change', function (e) {
        if (e.target.checked === true) {
            readStorage.splice(readBtn.parentElement.parentElement.id, 1, true);

        } else {
            readStorage.splice(readBtn.parentElement.parentElement.id, 1, false);

        }
        console.table(readStorage);
    })

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

