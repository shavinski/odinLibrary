"use strict";

const addBookBtn = document.getElementById("add-book");
const bookForm = document.getElementById("book-form");

const MY_LIBRARY = [
    { title: "test", author: "test author", pages: 652, read: "Not read" },
    { title: "test 2", author: "test author 2", pages: 544, read: "Not read" },
    { title: "test 3", author: "test author 3", pages: 234, read: "Completed book" },
];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// when button is pressed
// load a form with four inputs: title, author, pages, read
// then use this info to plug into the funciton constructor Book
// then we can push this new book to the global library
addBookBtn.addEventListener("click", toggleForm);

function addBookToLibrary() {
    // do stuff here

}

function toggleForm() {
    if (bookForm.classList.contains('hidden')) {
        console.log('remove hidden')
        bookForm.classList.remove('hidden');
        bookForm.classList.add('flex', 'flex-col');
    } else {
        bookForm.classList.add('hidden');
        bookForm.classList.remove('flex', 'flex-col');
        console.log('add hidden')

    }
}

function displayBooks() {
    const booksContainer = document.getElementById("books-container");

    for (let i = 0; i < MY_LIBRARY.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.className = "book-card flex flex-col justify-center items-center rounded-lg mt-5 bg-green-200 w-80 h-44";

        const bookTitle = document.createElement('h2');
        bookTitle.textContent = MY_LIBRARY[i].title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('h2');
        bookAuthor.textContent = MY_LIBRARY[i].author;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('h3');
        bookPages.textContent = MY_LIBRARY[i].pages;
        bookCard.appendChild(bookPages);

        const bookRead = document.createElement('h3');
        bookRead.textContent = MY_LIBRARY[i].read;
        bookCard.appendChild(bookRead);

        booksContainer.appendChild(bookCard);
    }
}


displayBooks();


