function fetchBooks(){
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then(book => book.forEach(renderBook))
}

function renderBook(bookName){
  const individual = document.createElement('p')
  individual.textContent = bookName.name
  document.body.append(individual)
}

