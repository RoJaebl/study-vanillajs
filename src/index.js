/**
 * API 두개를 병렬로 불러와 구현하는 방법으로 await와 함께 Promise.all을
 * 사용하여 한번에 처리하는 방법이 있다.
 */
const getMoviesAsync = async () => {
  try {
    const [moviesResponse, suggestionsResponse] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"),
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100"),
    ]);
    const [movies, suggestions] = await Promise.all([
      moviesResponse.json(),
      suggestionsResponse.json(),
    ]);
    console.log(movies, suggestions);
  } catch (err) {
    console.log(`❌ ${err}`);
  } finally {
    console.log("We are done!");
  }
};

getMoviesAsync();
