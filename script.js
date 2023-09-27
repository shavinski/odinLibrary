"use strict";

const formBtn = document.getElementById("add-book");
const bookForm = document.getElementById("modal-form");
const cancelForm = document.querySelector(".cancel-btn");
const addBookBtn = document.querySelector(".add-btn");
const formErrorMsg = document.querySelector(".form-error-msg")
const cardButtonDelete = document.querySelector(".card-button-delete")
const booksContainer = document.getElementById("books-container");


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
    // const readValue = readInput.checked ? 'I have completed this book!' : 'I have not read this book yet ;('
    const readValue = readInput.checked ? true : false


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
    const index = USER_LIBRARY.books.length - 1
    const mostRecentBook = USER_LIBRARY.books[index];
    const allCards = document.querySelectorAll(".book-card");

    const bookCard = document.createElement('div');
    bookCard.className = "book-card";
    bookCard.setAttribute("data-book-id", index)

    const bookIndex = bookCard.getAttribute("data-book-id");
    const book = USER_LIBRARY.books[bookIndex];

    const bookTitleAndAuthor = document.createElement('p');
    bookTitleAndAuthor.textContent = `${mostRecentBook.title} by ${mostRecentBook.author}`;
    bookCard.appendChild(bookTitleAndAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${mostRecentBook.pages}`;
    bookCard.appendChild(bookPages);

    const bookReadContainer = document.createElement('div');
    bookReadContainer.className = 'book-read-container'
    bookCard.appendChild(bookReadContainer);

    const bookReadCheckbox = document.createElement('input');
    bookReadCheckbox.type = "checkbox";
    if (mostRecentBook.read) {
        bookReadCheckbox.checked = true;
    } else {
        bookReadCheckbox.checked = false;
    }
    bookReadContainer.appendChild(bookReadCheckbox);

    const bookRead = document.createElement('p');
    bookRead.textContent = 'Read';
    bookReadContainer.appendChild(bookRead);

    const bookReadText = document.createElement('p');
    bookReadText.textContent = book.read ? 'I have finished this book 😊' : 'I have not finished this book 😭'
    bookCard.appendChild(bookReadText);

    bookReadCheckbox.addEventListener('change', (e) => {
        book.read = !book.read;
        bookReadText.textContent = book.read ? 'I have finished this book 😊' : 'I have not finished this book 😭'
    })

    const buttonContainer = document.createElement('div');
    buttonContainer.className = "card-button-container"
    bookCard.appendChild(buttonContainer);

    const deleteButton = document.createElement('button');
    deleteButton.className = "card-button-delete"
    deleteButton.textContent = '🗑️'
    buttonContainer.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        if (book) {
            bookCard.remove();
            USER_LIBRARY.removeBook(book);

            //Handles revaluing the data attribute to properly keep track
            for (let i = 0; i < allCards.length; i++) {
                allCards[i].setAttribute("data-book-id", i)
            }
        }
    })

    booksContainer.appendChild(bookCard);
}
