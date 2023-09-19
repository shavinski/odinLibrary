"use strict";

const formBtn = document.getElementById("add-book");
const bookForm = document.getElementById("book-form");
const cancelForm = document.getElementById("cancel-btn");
const modalForm = document.getElementById("modal-form");

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

// function displayBooks() {
//     const booksContainer = document.getElementById("books-container");
//     const userLibrary = USER_LIBRARY.books
//     console.log(userLibrary);

//     for (let i = 0; i < userLibrary.length; i++) {
//         const bookCard = document.createElement('div');
//         bookCard.className = "book-card";

//         const bookTitle = document.createElement('h2');
//         bookTitle.textContent = userLibrary[i].title;
//         bookCard.appendChild(bookTitle);

//         const bookAuthor = document.createElement('h2');
//         bookAuthor.textContent = userLibrary[i].author;
//         bookCard.appendChild(bookAuthor);

//         const bookPages = document.createElement('h3');
//         bookPages.textContent = userLibrary[i].pages;
//         bookCard.appendChild(bookPages);

//         const bookRead = document.createElement('h3');
//         bookRead.textContent = userLibrary[i].read;
//         bookCard.appendChild(bookRead);

//         booksContainer.appendChild(bookCard);
//     }
// }

// displayBooks();

function submitBookForm(e) {
    e.preventDefault();

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readInput = document.querySelector('.read-checkbox').checked;

    const titleValue = titleInput.value;
    const authorValue = authorInput.value;
    const pagesValue = pagesInput.value;
    const readValue = readInput ? 'I have completed this book!' : 'I have not read this book yet ;('

    const book = new Book(titleValue, authorValue, pagesValue, readValue);
    USER_LIBRARY.addBook(book);

    closeModal();
}

function openModal() {
    modalForm.classList.add('open');

    const addBookBtn = document.querySelector(".add-btn");
    addBookBtn.addEventListener('click', submitBookForm)
}

function closeModal() {
    modalForm.classList.remove('open');
}

window.addEventListener('load', function () {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});

formBtn.addEventListener('click', openModal);
cancelForm.addEventListener('click', closeModal);





