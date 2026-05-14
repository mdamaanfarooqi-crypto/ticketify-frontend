async function FetchMoviesByGenre(ACCESS_TOKEN, page, genreIds) {
  const API_KEY = process.env.REACT_APP_API_KEY || '26cafc9d05a431a8706b264d33cb41b1';
  const genreIdsURL = genreIds.length > 0 ? genreIds.join(',') : '';
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreIdsURL}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();
    if (data.success === false) {
      console.error('TMDB API error:', data.status_message);
      return null;
    }

    return { filteredMovies: data.results || [], totalPages: data.total_pages || 1 };
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    return null;
  }
}

export default FetchMoviesByGenre;