/**
 * Promise를 chain으로 묶어서 연속된 함수를 비동기적으로 실행시킬
 * 수 있다. 또한 chain된 then 중간에 에러가 발생하여도 catch를
 * 정의하여 사용할 수도 있다.
 */
const amISexy = new Promise((resolve, reject) => {
  resolve(2);
});

const timesTwo = (number) => number * 2;

amISexy
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(() => {
    throw Error(`Something is wrong`);
  })
  .then(timesTwo)
  .then(timesTwo)
  .then((lastNumber) => console.log(lastNumber))
  .catch((err) => console.log(err));
