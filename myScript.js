document.addEventListener("DOMContentLoaded",function() {

const fetchBooks = document.getElementById("fetchBooks");
const bookList = document.getElementById("bookList");

fetchBooks.addEventListener("click", async () => {
  try {
    const response = await fetch("books.json");
    const data = await response.json();

    displayBooks(data);
  } catch(error) {
    console.log("Error! The book list can't be fetched!");
    throw error;
  }
});

function displayBooks(books) {

  bookList.innerHTML=""

  books.forEach((book) => {
    const bookElement = document.createElement("li");
    bookElement.textContent = `${book.title} by ${book.author}`;
    bookList.appendChild(bookElement);
  });
}
});
