/**
 * async/await말고도 promise와 함께 사용했었던 catch와
 * finally를 아래와 같이 사용할 수 있다. catch는 try구문
 * 안에 들어가 있는 모든 소스에서 에러가 발생했을때 발생한
 * 에러 인자를 catch로 전달하여 예외를 처리할 수 있게 한다.
 * 또한 try와 catch다음으로 동작하는 finally로 미자막으로
 * 꼭 실행해야하는 소스코드를 추가함으로서 promise가 사용
 * 했었던 모든 기능을 구현할 수 있다.
 */
const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    throw Error("Im hungry");
  } catch (err) {
    console.log(`❌ ${err}`);
  } finally {
    console.log("We are done!");
  }
};

getMoviesAsync();
