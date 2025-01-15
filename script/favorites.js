function addToFavorites(movieId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || []
  if (!favorites.includes(movieId)) {
    favorites.push(movieId)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
}

async function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  const favoritesSection = document.getElementById('favorites')
  favoritesSection.innerHTML = '<h2>My Favorites</h2>'

  for (const movieId of favorites) {
    const movie = await fetchMovies(`/movie/${movieId}`)
    const movieElement = createMovieElement(movie)
    favoritesSection.appendChild(movieElement)
  }

  favoritesSection.classList.remove('hidden')
}
