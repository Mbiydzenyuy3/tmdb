document.addEventListener("DOMContentLoaded", async () => {
  const popularMovies = await fetchMovies("/movie/popular");
  displayMovies(popularMovies.results);

  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", async (e) => {
    if (e.target.value) {
      const searchResults = await searchMovies(e.target.value);
      displayMovies(searchResults.results);
    } else {
      const popularMovies = await fetchMovies("/movie/popular");
      displayMovies(popularMovies.results);
    }
  });

  const showFavoritesButton = document.getElementById("show-favorites");
  showFavoritesButton.addEventListener("click", displayFavorites);
});
