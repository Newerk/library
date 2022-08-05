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

function buildCard(bkTitle, bkAuthor, bkPages) {
    
        let card = document.createElement('div');
        card.className = 'book';


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
    delete myLibrary[9/*filler index. need to find a way to filter which index needs to be deleted*/];
}

