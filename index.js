function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(jsonFile => renderBooks(jsonFile));

}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
    // const p = document.createElement("p")
    // p.innerHTML = book.authors[0]
    // main.append(p)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
