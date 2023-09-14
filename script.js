"use strict";

const addBookBtn = document.getElementById("add-book");
const bookForm = document.getElementById("book-form");
const closeForm = document.getElementById("close-form");
const modalForm = document.getElementById("modal-form")

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter((b) => b !== book);
    }
}

const USER_LIBRARY = new Library();
const book1 = new Book('harry potter', 'jakob', 444, 'read')
const book2 = new Book('harry potter', 'jakob', 445, 'read')
USER_LIBRARY.addBook(book1);
USER_LIBRARY.addBook(book2);




function displayBooks() {
    const booksContainer = document.getElementById("books-container");
    const userLibrary = USER_LIBRARY.books

    for (let i = 0; i < userLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.className = "book-card";

        const bookTitle = document.createElement('h2');
        bookTitle.textContent = userLibrary[i].title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('h2');
        bookAuthor.textContent = userLibrary[i].author;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('h3');
        bookPages.textContent = userLibrary[i].pages;
        bookCard.appendChild(bookPages);

        const bookRead = document.createElement('h3');
        bookRead.textContent = userLibrary[i].read;
        bookCard.appendChild(bookRead);

        booksContainer.appendChild(bookCard);
    }
}



function openModal() {
    modalForm.classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function () {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});

addBookBtn.addEventListener('click', openModal);
closeForm.addEventListener('click', closeModal)


displayBooks();


