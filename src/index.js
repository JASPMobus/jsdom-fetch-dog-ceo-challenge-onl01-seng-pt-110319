console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogs() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    renderDogs(json)
  })
}

function renderDog(books) {
  const main = document.querySelector('main')
  dogs.forEach(dog => {
    const h2 = document.createElement('h2')
    h2.innerHTML = dog
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs()
})