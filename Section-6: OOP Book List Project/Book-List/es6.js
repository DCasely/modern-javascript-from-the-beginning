class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');

    // CREATE TR ELEMENT
    const row = document.createElement('tr');
    // INSERT COLUMNS
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class= "delete"><i class="fas fa-trash-alt"></i></a></td>
  `;

    list.appendChild(row);
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.parentElement.remove();
    }
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 secs
    setTimeout(function () {
      container.querySelector('.alert').remove();
    }, 3000);
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      let books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.map((book) => {
      const ui = new UI();
      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.map((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// =========================================================
// DOM LOAD EVENT
// =========================================================

document.addEventListener('DOMContentLoaded', Store.displayBooks);

// =========================================================
// EVENT LISTENER FOR ADDING A BOOK
// =========================================================
const submitBtn = document.getElementById('book-form');

submitBtn.addEventListener('submit', addBook);

function addBook(e) {
  // GET FORM VALUES
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // INSTANTIATING A BOOK
  const book = new Book(title, author, isbn);

  // INSTANTIATE UI
  const ui = new UI();

  console.log(ui);

  // VALIDATION
  if (title === '' || author === '' || isbn === '') {
    // ERROR ALERT
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // ADD BOOK TO LIST
    ui.addBookToList(book);

    // ADD TO LOCAL STORAGE
    Store.addBook(book);

    // SHOW SUCCESS
    ui.showAlert('Book Has Been Added', 'success');

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
}

// =========================================================
// EVENT LISTENER FOR DELETING A BOOK
// =========================================================
const deleteBtn = document.getElementById('book-list');

deleteBtn.addEventListener('click', deleteBook);

function deleteBook(e) {
  // INSTANTIATE THE UI
  const ui = new UI();

  // DELETE BOOK ROW
  ui.deleteBook(e.target);

  // Remove from LS
  Store.removeBook(
    e.target.parentElement.parentElement.previousElementSibling.textContent
  );

  // SHOW ALERT
  ui.showAlert('Book Successfully Removed', 'success');

  e.preventDefault();
}
