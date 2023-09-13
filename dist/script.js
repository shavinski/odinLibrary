"use strict";

const addBookBtn = document.getElementById("add-book");
const bookForm = document.getElementById("book-form");

// const MY_LIBRARY = [
//     { title: "test", author: "test author", pages: 652, read: "Not read" },
//     { title: "test 2", author: "test author 2", pages: 544, read: "Not read" },
//     { title: "test 3", author: "test author 3", pages: 234, read: "Completed book" },
// ];

// function Book(title, author, pages, read) {
//     // the constructor...
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

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
USER_LIBRARY.addBook(book1);


addBookBtn.addEventListener("click", toggleForm);



function displayBooks() {
    const booksContainer = document.getElementById("books-container");
    const userLibrary = USER_LIBRARY.books

    for (let i = 0; i < userLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.className = "book-card flex flex-col justify-center items-center rounded-lg mt-5 bg-green-200 w-80 h-44";

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


displayBooks();


