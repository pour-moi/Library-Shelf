const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.info = function () {
  console.log(this.title + " by, " + this.author + " " + this.pages + " pages");
};

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  return newBook;
}

addBookToLibrary("Atse Minlik", "Paulos Gnogno", 400);

for (let i = 0; i < myLibrary.length; i++) {
  myLibrary[i].info();
}
