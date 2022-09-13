/**
 * 지금까지 보았던 promise를 async로 변경하여 사용하는 것을
 * 비교하면 몰라보게 가독성이 더욱 좋아지고 무엇보다 비동기적
 * 소스를 동기적 코드와 같이 절차적(await)으로 실행할 수
 * 있게 구현할 수 있다.
 */
const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(`❌ ${err}`));
};

const getMoviesAsync = async () => {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json");
  const json = await response.json();
  console.log(json);
};

getMoviesAsync();
