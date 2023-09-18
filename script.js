const addButton = document.querySelector(".add-button");
const addingBox = document.querySelector(".adding-box");
const add = document.querySelector(".add");
const content = document.querySelector(".content");

const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pages-input");

addButton.addEventListener("click", function (event) {
  addingBox.style.display = "block";
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (!addingBox.contains(event.target)) {
    addingBox.style.display = "none";
  }
});

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.info = function () {
  return (
    "Title: " +
    this.title +
    "\n" +
    "Author:" +
    this.author +
    "\n" +
    "Pages: " +
    this.pages
  );
};

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  return newBook;
}

add.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from being submitted
  addingBox.style.display = "none";

  // Get the book information from the input fields
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;

  // Add the book to the library
  const newBook = addBookToLibrary(title, author, pages);

  // Display the book information in the .content div
  content.innerText += newBook.info() + "\n";
});
