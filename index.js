function fetchBooks() {
 return fetch('https://anapioficeandfire.com/api/books') //this fetch() does inside method with api in it
  .then(resp => resp.json()) 
  .then(json => renderBooks(json)); //calls the second method
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
