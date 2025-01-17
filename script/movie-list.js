function displayMovies (movies) {
  const movieList = document.getElementById('movie-list')
  movieList.innerHTML = ''

  movies.forEach((movie) => {
    const movieElement = createMovieElement(movie)
    movieList.appendChild(movieElement)
  })
}

function createMovieElement (movie) {
  const movieElement = document.createElement('div')
  movieElement.classList.add('movie')
  movieElement.innerHTML = `
        <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt='${movie.title}'>
        <h2>${movie.title}</h2>
    `
  movieElement.addEventListener('click', () => showMovieDetails(movie.id))
  return movieElement
}
