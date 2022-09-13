/**
 * all은 array로 제공된 작업을 병렬로 실행시켜주는 함수이다.
 * array를 동시에 작업하여 에러가 발생하면 진행하던 다른
 * 작업들도 중단하고 예외를 발생시킨다. 예외없이 작업이 진행이
 * 된다면 모든 작업을 완료하고 array형태로 값을 반환한다.
 */
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "First");
});

/*
const p2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Second");
});
*/
const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "I hate JS");
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);

motherPromise
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
