"use strict";

const formBtn = document.getElementById("add-book");
const bookForm = document.getElementById("modal-form");
const cancelForm = document.querySelector(".cancel-btn");
const addBookBtn = document.querySelector(".add-btn");
const formErrorMsg = document.querySelector(".form-error-msg")

//Form inputs 
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.querySelector('.read-checkbox');

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

function submitBookForm(e) {
    e.preventDefault();

    const titleValue = titleInput.value;
    const authorValue = authorInput.value;
    const pagesValue = pagesInput.value;
    const readValue = readInput.checked ? 'I have completed this book!' : 'I have not read this book yet ;('

    const book = new Book(titleValue, authorValue, pagesValue, readValue);
    USER_LIBRARY.addBook(book);

    validateForm(titleValue, authorValue, pagesValue);
}

function resetFormInfo() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;
}

function validateForm(title, author, pages) {
    if (title === '' || author === '' || pages === '') {
        showFormError();
    } else {
        resetFormInfo();
        resetErrorMsg();
        createCard();
        closeModal();
    }

    return true;
}

function showFormError() {
    formErrorMsg.style.display = "block"
}

function resetErrorMsg() {
    formErrorMsg.style.display = "none";
}

function openModal() {
    bookForm.classList.add('open');
}

function closeModal() {
    bookForm.classList.remove('open');
    console.log('closed')
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
addBookBtn.addEventListener('click', submitBookForm)
cancelForm.addEventListener('click', closeModal)

function createCard() {
    const booksContainer = document.getElementById("books-container");
    const mostRecentBook = USER_LIBRARY.books[USER_LIBRARY.books.length - 1];

    console.log(mostRecentBook);

    const bookCard = document.createElement('div');
    bookCard.className = "book-card";

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = mostRecentBook.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('h2');
    bookAuthor.textContent = mostRecentBook.author;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement('h3');
    bookPages.textContent = mostRecentBook.pages;
    bookCard.appendChild(bookPages);

    const bookRead = document.createElement('h3');
    bookRead.textContent = mostRecentBook.read;
    bookCard.appendChild(bookRead);

    booksContainer.appendChild(bookCard);
}

