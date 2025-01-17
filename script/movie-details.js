async function showMovieDetails (movieId) {
  const movie = await fetchMovies(`/movie/${movieId}`)
  const detailsSection = document.getElementById('movie-details')
  detailsSection.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Release Date: ${movie.release_date}</p>
        <p>Genre: ${movie.genres.map((genre) => genre.name).join(', ')}</p>
        <p>${movie.overview}</p>
        <button onclick="addToFavorites(${movie.id})">Add to Favorites</button>
    `
  detailsSection.classList.remove('hidden')
}
