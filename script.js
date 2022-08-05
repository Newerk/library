let main = document.querySelector('.main');
let inputValues = {};
let myLibrary = [];

let cardIndexCounter = 0;
// myLibrary.length;



displayBooks();

function Book(title, author, pages, index) {
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
    this.index = index;
}

function addBookToLibrary() {
    inputValues = {
        bkTitle: document.querySelector("#bk_title").value,
        bkAuthor: document.querySelector("#bk_author").value,
        bkPages: document.querySelector("#bk_pages").value
    }

    let newBook = new Book(inputValues.bkTitle, inputValues.bkAuthor, parseInt(inputValues.bkPages), cardIndexCounter);
    cardIndexCounter+=1;

    // Book.prototype.index = myLibrary.length;
    
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks();

    document.querySelector('form').reset()
}

function buildCard(bkTitle, bkAuthor, bkPages) {
    // if (document.getElementById(`cardIndex_0`) !== null) {//if id cardIndex_0 exists, do count+=1;
    //     cardIndexCounter += 1;
    //     // if (document.getElementById(`cardIndex_${cardIndexCounter}`) !== null) {
    //     //     cardIndexCounter += 1;
    //     // }
    // }

    let card = document.createElement('div');
    card.className = 'book';
    // card.id = `cardIndex_${cardIndexCounter}`

    let bookCover = document.createElement('div');
    bookCover.className = "book-cover";

    let title = document.createElement('div');
    title.className = 'title';
    title.textContent = bkTitle;

    let author = document.createElement('div');
    author.className = 'author';
    author.textContent = bkAuthor;

    let pages = document.createElement('div');
    pages.className = 'pages';
    pages.textContent = parseInt(bkPages);

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


//displays every object in the library. This function will be invoked when myLibrary array is changed
function displayBooks() {
    const clearDisplay = () => {
        let bookDivs = document.querySelectorAll('.book');
        bookDivs.forEach(div => div.remove());
    };

    clearDisplay();

    myLibrary.forEach(el => {
        buildCard(el.title, el.author, parseInt(el.pages));
    });

}

function removeBook() {
        let listOfTitles = [];
        myLibrary.forEach(el => {
            listOfTitles.push(el.title);
        })
        if (document.g) {//get DOM element
            null
        }
        // if(){//if NOT the title of book we want to delete, return a list of books that DONT include the title searched
        console.log(listOfTitles);

        }

   

    // delete myLibrary[9/*filler index. need to find a way to filter which index needs to be deleted*/];

