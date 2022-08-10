let main = document.querySelector('.main');
let inputValues = {};
let myLibrary = [];
let counter = 0;


//maybe fill this array with objects. could make it easier to pull certain information based on the index
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

    displayBooks();

    document.querySelector('form').reset()
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

    clearDisplay();//for now, will only reset the counter so that it can be reiterated everytime a book is added or removed

    let indexCounter = 0;

    myLibrary.forEach(el => {
        el.index = counter = indexCounter++;

        if (isNaN(el.pages)) {
            el.pages = 'undefined';
        }
        buildCard(el.title, el.author, parseInt(el.pages));
        el.read = readStorage[el.index];


        /*----this block of code will place the appropiate read status for each book by matching the index bewteen myLibrary and readStorage-----*/
        let select = document.getElementById(el.index);
        if (readStorage[el.index] === true) {
            select.childNodes[1].childNodes[1].checked = true;

        } else {
            select.childNodes[1].childNodes[1].checked = false;
        }
        /*---------------------------------------------------------------------------------------------------------------------------------------*/

    });
    readStorage.push(false);



    console.table(myLibrary);
    console.table(readStorage);



}

function buildCard(title, author, pages) {
    let card = new Book(title, author, pages);
    card.create();
}

//this prototype creates the content of the book based on the current iterated object values
Book.prototype.create = function () {

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
    if (isNaN(this.pages)) { //makes the pages context blank if no page number is inputed by user
        pages.textContent = undefined;

    } else {
        pages.textContent = this.pages;
    }

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
        readStorage.splice(readBtn.parentElement.parentElement.id, 1);//delete the read status based on index
        myLibrary.splice(readBtn.parentElement.parentElement.id, 1);//delete the book from library based on index
        garbageBtn.parentElement.parentElement.remove();
        displayBooks();
        if (readStorage.length > myLibrary.length) {//this if statement prevents the read status storage from continously growing even after the delete button is used
            readStorage.pop()
        }
        console.table(myLibrary);
        console.table(readStorage);


    });

    let readBtn = document.createElement('input');
    readBtn.id = 'read-btn';
    readBtn.className = 'ribbon-btns';
    readBtn.type = 'checkbox';
    readBtn.addEventListener('change', function (e) {//inputs true or false in the desired index of the read status storage array
        if (e.target.checked === true) {
            readStorage.splice(readBtn.parentElement.parentElement.id, 1, true);
            myLibrary[readBtn.parentElement.parentElement.id].read = true;

        } else {
            readStorage.splice(readBtn.parentElement.parentElement.id, 1, false);
            myLibrary[readBtn.parentElement.parentElement.id].read = false;


        }
        console.table(readStorage);
        console.table(myLibrary);
    })


    iconContainer.appendChild(garbageBtn);
    iconContainer.appendChild(readBtn);

    card.appendChild(bookCover);
    card.appendChild(iconContainer);

    main.append(card);


}

