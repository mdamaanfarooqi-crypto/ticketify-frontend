const filterValidMovies = (movies) => {
  return movies.filter((movie) => {
    return (
      movie.media_type === 'movie' && movie.backdrop_path !== null && movie.poster_path !== null
    );
  });
};

export default filterValidMovies;
