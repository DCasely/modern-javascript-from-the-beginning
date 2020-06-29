// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI CONSTRUCTOR
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  // CREATE TR ELEMENT
  const row = document.createElement('tr');
  // INSERT COLUMNS
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class= "delete">X</a></td>
  `;

  list.appendChild(row);
};

// CLEAR FIELDS
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// SHOW ALERT
UI.prototype.showAlert = function (message, className) {
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
};
// =========================================================

// EVENT LISTENERS
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

  // VALIDATION
  if (title === '' || author === '' || isbn === '') {
    // ERROR ALERT
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // ADD BOOK TO LIST
    ui.addBookToList(book);

    // SHOW SUCCESS
    ui.showAlert('Book Has Been Added', 'success');

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
}
